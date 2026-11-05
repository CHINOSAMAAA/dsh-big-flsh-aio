// 派生自 Yuuyuko-uu/dsh-qq-link；CHINOSAMAAA 修改：整合包更新、来源校验、安装串行和鉴权。
// 国内渠道获取本项目 npm 发布包；GitHub 渠道追踪 repository 对应仓库的 main。
// 检测失败如实报告；本地开发副本禁止自动安装，避免覆盖工作目录。
import { readFileSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { createHash } from 'node:crypto'
import { join } from 'node:path'
import childProcess from 'node:child_process'

const TTL = 6 * 3600 * 1000
const TIMEOUT = 8000
const MIRROR = 'https://registry.npmmirror.com'
const MAX_PACKAGE_BYTES = 16 * 1024 * 1024
const errorText = e => /timeout|timed out/i.test(String(e?.message || e)) ? '连接更新服务超时，请检查网络或切换更新渠道' : String(e?.message || e)
const channelOf = value => {
  if (!['mirror', 'github'].includes(value)) throw new Error('未知更新渠道')
  return value
}
const validVersion = v => /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?$/.test(v)

function parseVer(v) {
  const s = String(v || '').trim().replace(/^v/i, '').split('+')[0]
  const cut = s.indexOf('-')
  const core = cut >= 0 ? s.slice(0, cut) : s
  const pre = cut >= 0 ? s.slice(cut + 1) : ''
  const nums = core.split('.').map((x) => Number(x) || 0)
  return { nums: [nums[0] || 0, nums[1] || 0, nums[2] || 0], pre }
}

// 1.2.3 / v1.2.3 / 1.2.3-beta.1 都认
export function cmpVer(a, b) {
  const x = parseVer(a)
  const y = parseVer(b)
  for (let i = 0; i < 3; i++) {
    if (x.nums[i] !== y.nums[i]) return x.nums[i] > y.nums[i] ? 1 : -1
  }
  if (x.pre === y.pre) return 0
  if (!x.pre) return 1   // 正式版比预发布新
  if (!y.pre) return -1
  const left = x.pre.split('.'), right = y.pre.split('.')
  for (let i = 0; i < Math.max(left.length, right.length); i++) {
    if (left[i] === undefined) return -1
    if (right[i] === undefined) return 1
    if (left[i] === right[i]) continue
    const aNum = /^\d+$/.test(left[i]), bNum = /^\d+$/.test(right[i])
    if (aNum && bNum) return BigInt(left[i]) > BigInt(right[i]) ? 1 : -1
    if (aNum !== bNum) return aNum ? -1 : 1
    return left[i] > right[i] ? 1 : -1
  }
  return 0
}

export function createSelfUpdate({ packageRoot, diag }) {
  const noop = () => {}
  const log = typeof diag === 'function' ? diag : noop

  let meta = {}
  try {
    meta = JSON.parse(readFileSync(join(packageRoot, 'package.json'), 'utf8'))
  } catch (e) {
    log('读自己的 package.json 失败：' + (e && e.message))
  }

  const current = String(meta.version || '')
  const repo = String(
    (meta.repository && (meta.repository.url || meta.repository)) || meta.homepage || ''
  )
  const repoUrl = repo
    .replace(/^git\+/, '')
    .replace(/^git:/, 'https:')
    .replace(/\.git$/, '')
    .replace(/#readme$/i, '')

  // 装在自己的 node_modules 里 = 正常安装；不在 = 本地 link 的开发副本
  const 是开发副本 = !/[\\/]node_modules[\\/]/.test(String(packageRoot))

  const caches = new Map()
  let installing = false

  const github = /^https:\/\/github\.com\/([\w.-]+\/[\w.-]+)$/.exec(repoUrl)?.[1]
  async function fetchLatest() {
    if (!github) return { latest: null, error: '未配置 GitHub 仓库地址，无法检查更新' }
    const get = async url => {
      const response = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT), headers: { accept: 'application/json', 'user-agent': 'dsh-big-flsh-aio' } })
      if (!response.ok) throw new Error('GitHub HTTP ' + response.status)
      return response.json()
    }
    try {
      let commit
      try { commit = await get(`https://api.github.com/repos/${github}/commits/main`) }
      catch (error) {
        // 公共出口易触发匿名 API 限流；Git 与宿主的 GitHub 安装使用同一代理环境。
        const stdout = await new Promise((resolve, reject) => childProcess.execFile('git',
          ['ls-remote', '--exit-code', `https://github.com/${github}.git`, 'refs/heads/main'],
          { timeout: TIMEOUT, maxBuffer: 65536, windowsHide: true, env: { ...process.env, GIT_TERMINAL_PROMPT: '0' } },
          (failure, output) => failure ? reject(new Error('提交查询失败：' + error.message + '；Git 查询失败')) : resolve(output)))
        commit = { sha: String(stdout).trim().split(/\s+/)[0] }
      }
      if (!/^[a-f0-9]{40}$/.test(commit.sha || '')) throw new Error('GitHub 未返回有效提交号')
      const remote = await get(`https://raw.githubusercontent.com/${github}/${commit.sha}/package.json`)
      if (remote.name !== meta.name) throw new Error('远端包名与大肥鱼不一致，拒绝更新')
      if (!validVersion(remote.version)) throw new Error('远端版本号不符合 SemVer')
      return { latest: remote.version, commit: commit.sha, from: 'GitHub' }
    } catch (e) { return { latest: null, error: errorText(e) } }
  }

  async function check(force, channel = 'mirror') {
    channelOf(channel)
    let cache = caches.get(channel)
    if (!force && cache && Date.now() - cache.checkedAt < TTL) return { ...cache, cached: true }
    const r = await (channel === 'mirror' ? fetchMirror() : fetchLatest())
    const hasUpdate = Boolean(r.latest && current && cmpVer(r.latest, current) > 0)
    cache = {
      ok: Boolean(r.latest),
      current,
      latest: r.latest || null,
      latestCommit: r.commit || null,
      integrity: r.integrity || null,
      channel,
      hasUpdate,
      // 本机比仓库还新 —— 自己改过还没推，正常
      ahead: Boolean(r.latest && current && cmpVer(r.latest, current) < 0),
      error: r.error || null,
      from: r.from || null,
      repoUrl: repoUrl || null,
      devCopy: 是开发副本,
      canInstall: !是开发副本,
      checkedAt: Date.now(),
      compatibility: meta.upstreamCompatibility || [],
    }
    log('查更新：当前 ' + current + ' / 最新 ' + (r.latest || '查不到') + (r.from ? '（' + r.from + '）' : '') + (r.error ? '（' + r.error + '）' : ''))
    caches.set(channel, cache)
    return cache
  }

  async function fetchMirror() {
    try {
      const response = await fetch(`${MIRROR}/${encodeURIComponent(meta.name)}/latest`, { signal: AbortSignal.timeout(TIMEOUT), cache: 'no-store' })
      if (response.status === 404) throw new Error('国内镜像尚无本项目安装包，请先发布到 npm 并等待镜像同步')
      if (!response.ok) throw new Error('国内镜像 HTTP ' + response.status)
      const remote = await response.json()
      if (remote.name !== meta.name) throw new Error('远端包名与大肥鱼不一致，拒绝更新')
      if (!validVersion(remote.version)) throw new Error('远端版本号不符合 SemVer')
      if (!/^sha512-[A-Za-z0-9+/]{86}==$/.test(remote.dist?.integrity || '')) throw new Error('国内安装包缺少有效 SHA-512 校验信息')
      return { latest: remote.version, integrity: remote.dist.integrity, from: 'npmmirror 国内镜像' }
    } catch (e) { return { latest: null, error: errorText(e) } }
  }

  async function install(ctx, channel = 'mirror') {
    channelOf(channel)
    if (是开发副本) {
      return { ok: false, error: '这是本地开发副本（link: 进来的），一键更新会把你正在改的目录换成仓库里的版本 —— 要更新请在仓库里 git pull' }
    }
    const pm = ctx && (ctx.pluginManager || ctx.get?.('pluginManager'))
    if (!pm || typeof pm.installBundle !== 'function') {
      return { ok: false, error: '这版 DSH 没有插件管理接口，装不了；请手动更新' }
    }
    if (channel === 'github' && !github) return { ok: false, error: '未配置 GitHub 更新来源' }
    let spec, temp
    if (installing) return { ok: false, error: '已有更新正在安装，请稍后' }
    installing = true
    try {
      const latest = await check(true, channel)
      if (!latest.ok) return { ok: false, error: latest.error }
      if (!latest.hasUpdate) return { ok: false, error: '没有可安装的新版本' }
      // 每次解析 main 的提交，避免同名来源被宿主拒绝或包管理器命中旧缓存。
      if (channel === 'github') spec = 'github:' + github + '#' + latest.latestCommit
      else {
        const url = `${MIRROR}/${encodeURIComponent(meta.name)}/-/${meta.name}-${latest.latest}.tgz`
        const response = await fetch(url, { signal: AbortSignal.timeout(60000) })
        if (!response.ok) throw new Error('国内安装包下载失败：HTTP ' + response.status)
        if (Number(response.headers.get('content-length')) > MAX_PACKAGE_BYTES) throw new Error('安装包超过 16 MB 限制')
        const chunks = []; let size = 0
        for await (const chunk of response.body) {
          size += chunk.length
          if (size > MAX_PACKAGE_BYTES) throw new Error('安装包超过 16 MB 限制')
          chunks.push(chunk)
        }
        const bytes = Buffer.concat(chunks)
        if ('sha512-' + createHash('sha512').update(bytes).digest('base64') !== latest.integrity) throw new Error('安装包完整性校验失败，已取消安装')
        temp = mkdtempSync(join(tmpdir(), 'dsh-big-flsh-update-'))
        spec = join(temp, `${meta.name}-${latest.latest}.tgz`)
        writeFileSync(spec, bytes)
      }
      log('一键更新：开始装 ' + spec)
      const r = await pm.installBundle(spec, ...(channel === 'mirror' ? [{ registry: MIRROR }] : []))
      log('一键更新：' + JSON.stringify(r && (r.applied ?? r.application ?? r.reason ?? r)))
      if (!r || r.ok === false || r.applied === false || (r.application && !['applied', 'restart-required'].includes(r.application))) {
        return { ok: false, spec, result: r || null, error: r?.error?.message || r?.reason || (typeof r?.error === 'string' ? r.error : '宿主未应用更新：' + (r?.application || '未返回结果')) }
      }
      return { ok: true, spec, result: r || null, restartRequired: true }
    } catch (e) {
      log('一键更新失败：' + String((e && e.message) || e))
      return { ok: false, spec, error: String((e && e.message) || e) }
    } finally { if (temp) rmSync(temp, { recursive: true, force: true }); installing = false }
  }

  function register(ctx, route) {
    const send = (res, code, obj) => {
      res.writeHead(code, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' })
      res.end(JSON.stringify(obj))
    }
    for (const action of ['update', 'install']) {
      ctx.effect(() => ctx.webServer.register({
        kind: 'exact', path: route + '/' + action,
        handler: async (req, res) => {
          try {
            if (req.method !== (action === 'install' ? 'POST' : 'GET')) return send(res, 405, { ok: false, error: '请求方法不允许' })
            const connection = ctx.get?.('connection')
            if (!connection?.requestRejection) return send(res, 503, { ok: false, error: '宿主鉴权接口不可用，请通过 DSH 插件管理器更新' })
            const rejection = await connection.requestRejection(req)
            if (rejection) return send(res, rejection, { ok: false, error: '管理鉴权失败' })
            const origin = req.headers?.origin
            if ((origin && new URL(origin).host !== req.headers?.host) || req.headers?.['sec-fetch-site'] === 'cross-site') return send(res, 403, { ok: false, error: '拒绝跨站管理请求' })
            if (action === 'install' && !/^application\/json(?:;|$)/i.test(req.headers?.['content-type'] || '')) return send(res, 415, { ok: false, error: '只接受 JSON 请求' })
            const url = new URL(req.url, 'http://localhost')
            const channel = channelOf(url.searchParams.get('channel') || 'mirror')
            const result = action === 'update'
              ? await check(url.searchParams.get('refresh') === '1', channel)
              : await install(ctx, channel)
            send(res, 200, result)
          } catch (e) {
            send(res, 500, { ok: false, error: String(e?.message || e) })
          }
        },
      }))
    }
  }

  return { current, repo, repoUrl, check, install, register }
}
