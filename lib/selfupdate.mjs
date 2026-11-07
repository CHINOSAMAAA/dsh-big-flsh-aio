// 派生自 Yuuyuko-uu/dsh-qq-link；CHINOSAMAAA 修改：整合包更新、来源校验、安装串行和鉴权。
// 国内渠道获取本项目 npm 发布包；GitHub 渠道追踪 repository 对应仓库的 main。
// 检测失败如实报告；本地开发副本禁止自动安装，避免覆盖工作目录。
import { readFileSync, mkdtempSync, writeFileSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { createHash } from 'node:crypto'
import { join, dirname } from 'node:path'
import childProcess from 'node:child_process'

const TTL = 6 * 3600 * 1000
// 失败结果只缓存一分钟：网络恢复后下一次打开面板就能重试，不用等六小时。
const FAIL_TTL = 60 * 1000
const TIMEOUT = 8000
const MIRROR = 'https://registry.npmmirror.com'
// 当前整合包约 18 MB，保留有界下载并覆盖现有资源体积。
const MAX_PACKAGE_BYTES = 32 * 1024 * 1024
const LEGACY_VERSION = '1.5.1-1'
const 是提交号 = value => /^[a-f0-9]{40}$/.test(String(value || ''))
const errorText = e => {
  const raw = String((e && (e.stderr || e.message)) || e || '').trim()
  if (/timeout|timed out|ETIMEDOUT/i.test(raw)) return '连接更新服务超时，请检查网络或切换更新渠道'
  const line = raw.split('\n').map(x => x.trim()).find(Boolean) || '未知错误'
  return line.length > 180 ? line.slice(0, 180) + '…' : line
}
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
  const repositoryCurrent = String(meta.repositoryVersion || current)
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
  const 安装记录 = join(packageRoot, '.dsh-installed-commit.json')

  const 跑Git = (args, timeout = TIMEOUT) => new Promise((resolve, reject) => {
    childProcess.execFile('git', args, {
      timeout, maxBuffer: 65536, windowsHide: true,
      env: { ...process.env, GIT_TERMINAL_PROMPT: '0' },
    }, (failure, stdout, stderr) => failure
      ? reject(Object.assign(failure, { stderr: String(stderr || failure.stderr || '').trim() }))
      : resolve(String(stdout)))
  })

  // 从 pnpm-lock / .modules.yaml / package-lock 里找出当前装的是哪个提交。
  const 读到的提交 = (text, owner, name) => {
    const patterns = [
      new RegExp(`codeload\\.github\\.com/${owner}/${name}/tar\\.gz/([a-f0-9]{40})`, 'i'),
      new RegExp(`github:${owner}/${name}#([a-f0-9]{40})`, 'i'),
      new RegExp(`github\\.com/${owner}/${name}(?:\\.git)?#([a-f0-9]{40})`, 'i'),
    ]
    for (const pattern of patterns) {
      const found = pattern.exec(text)
      if (found) return found[1].toLowerCase()
    }
    return null
  }

  function 从安装记录读取提交() {
    if (!github) return null
    const [owner, name] = github.split('/')
    const files = ['pnpm-lock.yaml', '.modules.yaml', 'package-lock.json', join('node_modules', '.package-lock.json'), join('.pnpm', 'lock.yaml')]
    let dir = packageRoot
    for (let depth = 0; depth < 6; depth++) {
      for (const rel of files) {
        const file = join(dir, rel)
        try {
          if (!existsSync(file)) continue
          const commit = 读到的提交(readFileSync(file, 'utf8'), owner, name)
          if (commit) return { commit, from: rel }
        } catch (e) { log('读取安装记录失败：' + errorText(e)) }
      }
      const parent = dirname(dir)
      if (parent === dir) break
      dir = parent
    }
    return null
  }

  // 本地当前提交：开发副本读 Git HEAD；安装副本优先读上次安装留下的标记，再读锁文件。
  async function 本地提交() {
    if (existsSync(join(packageRoot, '.git'))) {
      try {
        const head = (await 跑Git(['-C', packageRoot, 'rev-parse', 'HEAD'])).trim()
        if (是提交号(head)) return { commit: head.toLowerCase(), from: 'git' }
      } catch (e) { log('读取本地 Git 提交失败：' + errorText(e)) }
    }
    try {
      const saved = JSON.parse(readFileSync(安装记录, 'utf8'))
      if (是提交号(saved.commit)) return { commit: String(saved.commit).toLowerCase(), from: '安装记录' }
    } catch {}
    return 从安装记录读取提交()
  }

  // Git 副本里判断远端提交是否已经被本地包含（本地领先、还没推）。
  async function 本地包含(commit) {
    try {
      await 跑Git(['-C', packageRoot, 'merge-base', '--is-ancestor', commit, 'HEAD'])
      return true
    } catch { return false }
  }

  async function fetchLatest() {
    if (!github) return { latest: null, error: '未配置 GitHub 仓库地址，无法检查更新' }
    const get = async url => {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(TIMEOUT),
        cache: 'no-store',
        headers: { accept: 'application/json', 'user-agent': 'dsh-big-fish-aio' },
      })
      if (!response.ok) throw new Error('HTTP ' + response.status)
      return response.json()
    }
    const 读远端元信息 = async sha => {
      const errors = []
      for (const url of [
        `https://raw.githubusercontent.com/${github}/${sha}/package.json`,
        `https://cdn.jsdelivr.net/gh/${github}@${sha}/package.json`,
      ]) {
        try { return await get(url) } catch (e) { errors.push(errorText(e)) }
      }
      try {
        const body = await get(`https://api.github.com/repos/${github}/contents/package.json?ref=${sha}`)
        if (body && body.encoding === 'base64' && typeof body.content === 'string') {
          return JSON.parse(Buffer.from(body.content, 'base64').toString('utf8'))
        }
        throw new Error('接口返回格式异常')
      } catch (e) { errors.push(errorText(e)) }
      throw new Error('读取仓库 package.json 失败：' + errors.join('；'))
    }
    try {
      let commit, apiError
      // GitHub REST 会缓存 commits/main 约一分钟；加时间戳绕开缓存，刚推送完也能立刻查到。
      try { commit = await get(`https://api.github.com/repos/${github}/commits/main?t=${Date.now()}`) }
      catch (error) {
        // 公共出口易触发匿名 API 限流；Git 与宿主的 GitHub 安装使用同一代理环境。
        apiError = error
        try {
          const stdout = await 跑Git(['ls-remote', '--exit-code', `https://github.com/${github}.git`, 'refs/heads/main'])
          commit = { sha: String(stdout).trim().split(/\s+/)[0] }
        } catch (gitError) {
          throw new Error('查询 main 提交失败：GitHub API ' + errorText(apiError) + '；Git ' + errorText(gitError))
        }
      }
      const sha = 是提交号(commit && commit.sha) ? String(commit.sha).toLowerCase() : ''
      if (!sha) throw new Error('GitHub 未返回有效提交号')
      const remote = await 读远端元信息(sha)
      if (remote.name !== meta.name) throw new Error('远端包名与大肥鱼不一致，拒绝更新')
      if (!validVersion(remote.version)) throw new Error('远端版本号不符合 SemVer')
      const latest = remote.repositoryVersion || remote.version
      if (!validVersion(latest)) throw new Error('远端仓库版本号不符合 SemVer')
      return { latest, commit: sha, from: 'GitHub' }
    } catch (e) { return { latest: null, error: errorText(e) } }
  }

  async function check(force, channel = 'mirror') {
    channelOf(channel)
    const current = channel === 'github' ? repositoryCurrent : String(meta.version || '')
    const cache = caches.get(channel)
    if (!force && cache && Date.now() - cache.checkedAt < (cache.ok ? TTL : FAIL_TTL)) return { ...cache, cached: true }
    // GitHub 渠道同时跟踪 main 的提交：仓库版本没升也不能把新推送当成“已是最新”。
    const local = channel === 'github' ? await 本地提交() : null
    const r = await (channel === 'mirror' ? fetchMirror() : fetchLatest())
    const legacyRelease = r.latest === LEGACY_VERSION
    const versionNewer = Boolean(r.latest && current && !legacyRelease && (current === LEGACY_VERSION || cmpVer(r.latest, current) > 0))
    const versionOlder = Boolean(r.latest && current && current !== LEGACY_VERSION && (legacyRelease || cmpVer(r.latest, current) < 0))
    const localAhead = Boolean(channel === 'github' && local && local.from === 'git' && r.commit && r.commit !== local.commit && await 本地包含(r.commit))
    const ahead = Boolean(versionOlder || localAhead)
    const commitChanged = Boolean(channel === 'github' && local && r.commit && local.commit !== r.commit)
    const commitUpdate = Boolean(commitChanged && !ahead && !r.error)
    const hasUpdate = Boolean(!r.error && (versionNewer || commitUpdate))
    const checked = {
      ok: Boolean(r.latest),
      current,
      repositoryCurrent,
      npmCurrent: String(meta.version || ''),
      latest: r.latest || null,
      latestCommit: r.commit || null,
      localCommit: local ? local.commit : null,
      localCommitFrom: local ? local.from : null,
      commitChanged,
      commitUpdate,
      integrity: r.integrity || null,
      channel,
      hasUpdate,
      legacyRelease,
      // 本机比仓库还新 —— 自己改过还没推，正常
      ahead,
      error: r.error || null,
      from: r.from || null,
      repoUrl: repoUrl || null,
      devCopy: 是开发副本,
      canInstall: !是开发副本,
      checkedAt: Date.now(),
      compatibility: meta.upstreamCompatibility || [],
    }
    const 本地说明 = channel === 'github' ? '（本地提交 ' + (local ? local.commit.slice(0, 7) + '/' + local.from : '未知') + '，远端提交 ' + (r.commit ? r.commit.slice(0, 7) : '未知') + '）' : ''
    log('查更新：当前 ' + current + ' / 最新 ' + (r.latest || '查不到') + (r.from ? '（' + r.from + '）' : '') + 本地说明 + (r.error ? '（' + r.error + '）' : ''))
    caches.set(channel, checked)
    return checked
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

  // 未在 inject 里声明 pluginManager 时，直接取 ctx.pluginManager 会被宿主拒绝；
  // ctx.get 是宿主给可选服务留的读取口，读不到再兼容旧宿主直接挂在 ctx 上的写法。
  function 取插件管理器(ctx) {
    if (!ctx) return null
    try {
      const found = typeof ctx.get === 'function' ? ctx.get('pluginManager') : null
      if (found) return found
    } catch (e) { log('读取插件管理接口失败：' + errorText(e)) }
    try { return ctx.pluginManager || null } catch { return null }
  }

  async function install(ctx, channel = 'mirror') {
    channelOf(channel)
    if (是开发副本) {
      return { ok: false, error: '这是本地开发副本（link: 进来的），一键更新会把你正在改的目录换成仓库里的版本 —— 要更新请在仓库里 git pull' }
    }
    const pm = 取插件管理器(ctx)
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
        if (Number(response.headers.get('content-length')) > MAX_PACKAGE_BYTES) throw new Error('安装包超过 32 MB 限制')
        const chunks = []; let size = 0
        for await (const chunk of response.body) {
          size += chunk.length
          if (size > MAX_PACKAGE_BYTES) throw new Error('安装包超过 32 MB 限制')
          chunks.push(chunk)
        }
        const bytes = Buffer.concat(chunks)
        if ('sha512-' + createHash('sha512').update(bytes).digest('base64') !== latest.integrity) throw new Error('安装包完整性校验失败，已取消安装')
        temp = mkdtempSync(join(tmpdir(), 'dsh-big-fish-update-'))
        spec = join(temp, `${meta.name}-${latest.latest}.tgz`)
        writeFileSync(spec, bytes)
      }
      log('一键更新：开始装 ' + spec)
      const r = await pm.installBundle(spec, ...(channel === 'mirror' ? [{ registry: MIRROR }] : []))
      log('一键更新：' + JSON.stringify(r && (r.applied ?? r.application ?? r.reason ?? r)))
      if (!r || r.ok === false || r.applied === false || (r.application && !['applied', 'restart-required'].includes(r.application))) {
        return { ok: false, spec, result: r || null, error: r?.error?.message || r?.reason || (typeof r?.error === 'string' ? r.error : '宿主未应用更新：' + (r?.application || '未返回结果')) }
      }
      // 记下本次装到的提交，供下一次检查判断有没有真正更新；锁文件被宿主改写时也能兜底。
      if (channel === 'github' && 是提交号(latest.latestCommit)) {
        try { writeFileSync(安装记录, JSON.stringify({ commit: latest.latestCommit, installedAt: new Date().toISOString() })) }
        catch (e) { log('写入安装记录失败：' + errorText(e)) }
      }
      caches.clear()
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
    // 每次都从 package.json 读，插件更新后无需重启即可反映新版本。
    ctx.effect(() => ctx.webServer.register({
      kind: 'exact', path: route + '/version',
      handler: async (req, res) => {
        if (req.method !== 'GET') return send(res, 405, { ok: false, error: '请求方法不允许' })
        try {
          const latest = JSON.parse(readFileSync(join(packageRoot, 'package.json'), 'utf8'))
          send(res, 200, { ok: true, version: String(latest.version || current), repositoryVersion: String(latest.repositoryVersion || latest.version || repositoryCurrent) })
        } catch (e) {
          send(res, 200, { ok: true, version: current, repositoryVersion: repositoryCurrent })
        }
      },
    }))
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
