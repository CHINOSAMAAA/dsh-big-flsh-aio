import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import childProcess from 'node:child_process'
import { createSelfUpdate } from '../lib/selfupdate.mjs'

const OLD = 'a'.repeat(40)
const NEW = 'b'.repeat(40)
const META = { name: 'dsh-big-fish-aio', version: '0.0.1', repositoryVersion: '0.1.5' }

// 模拟 pnpm 安装到 profile/node_modules 的副本，并在 profile 根写锁文件记录安装提交。
function 建安装副本(home, commit) {
  const profile = join(home, 'profile')
  const root = join(profile, 'node_modules', 'dsh-big-fish-aio')
  mkdirSync(root, { recursive: true })
  writeFileSync(join(root, 'package.json'), JSON.stringify({
    ...META,
    repository: 'https://github.com/CHINOSAMAAA/dsh-big-fish-aio',
  }))
  writeFileSync(join(profile, 'pnpm-lock.yaml'), [
    'importers:',
    '  .:',
    '    dependencies:',
    '      dsh-big-fish-aio:',
    '        specifier: github:CHINOSAMAAA/dsh-big-fish-aio',
    `        version: https://codeload.github.com/CHINOSAMAAA/dsh-big-fish-aio/tar.gz/${commit}`,
    '',
  ].join('\n'))
  return root
}

const 装提交 = (sha, remote = META) => async url => {
  const text = String(url)
  if (text.includes('/commits/main')) return Response.json({ sha })
  return Response.json(remote)
}

test('仓库版本没变时，GitHub main 的新提交也会提示更新并安装到该提交', async () => {
  const home = mkdtempSync(join(tmpdir(), 'fish-commit-'))
  const original = globalThis.fetch
  const requests = []
  try {
    const root = 建安装副本(home, OLD)
    const reply = 装提交(NEW)
    globalThis.fetch = async url => { requests.push(String(url)); return reply(url) }
    const updater = createSelfUpdate({ packageRoot: root })
    const result = await updater.check(true, 'github')
    assert.match(requests[0], /api\.github\.com\/repos\/CHINOSAMAAA\/dsh-big-fish-aio\/commits\/main\?t=\d+/)
    assert.equal(result.ok, true)
    assert.equal(result.current, '0.1.5')
    assert.equal(result.latest, '0.1.5')
    assert.equal(result.localCommit, OLD)
    assert.equal(result.latestCommit, NEW)
    assert.equal(result.commitChanged, true)
    assert.equal(result.commitUpdate, true)
    assert.equal(result.hasUpdate, true)
    assert.equal(result.ahead, false)

    const installed = []
    const done = await updater.install({ pluginManager: { installBundle: async spec => { installed.push(spec); return { applied: true } } } }, 'github')
    assert.equal(done.ok, true)
    assert.deepEqual(installed, ['github:CHINOSAMAAA/dsh-big-fish-aio#' + NEW])
  } finally { globalThis.fetch = original; rmSync(home, { recursive: true, force: true }) }
})

test('宿主拒绝直接读取 ctx.pluginManager 时改走 ctx.get 仍能安装', async () => {
  const home = mkdtempSync(join(tmpdir(), 'fish-commit-inject-'))
  const original = globalThis.fetch
  try {
    const root = 建安装副本(home, OLD)
    globalThis.fetch = 装提交(NEW)
    const installed = []
    const handlers = {}
    const services = {
      pluginManager: { installBundle: async spec => { installed.push(spec); return { applied: true } } },
      connection: { requestRejection: async () => undefined },
    }
    const base = {
      get: name => services[name],
      effect: fn => fn(),
      webServer: { register: route => { handlers[route.path] = route.handler } },
    }
    // 模拟宿主 cordis 上下文：未 inject 的服务属性直接抛错，只有 ctx.get 能安全读取。
    const ctx = new Proxy(base, {
      get(target, prop, receiver) {
        if (prop in target) return Reflect.get(target, prop, receiver)
        throw new Error(`cannot get property "${String(prop)}" without inject`)
      },
    })
    const updater = createSelfUpdate({ packageRoot: root })
    updater.register(ctx, '/dsh-big-fish-aio')
    let code, body
    await handlers['/dsh-big-fish-aio/install']({
      method: 'POST',
      url: '/dsh-big-fish-aio/install?channel=github',
      headers: { host: 'localhost', 'content-type': 'application/json' },
    }, { writeHead: n => { code = n }, end: text => { body = JSON.parse(text) } })
    assert.equal(code, 200)
    assert.equal(body.ok, true)
    assert.deepEqual(installed, ['github:CHINOSAMAAA/dsh-big-fish-aio#' + NEW])
  } finally { globalThis.fetch = original; rmSync(home, { recursive: true, force: true }) }
})

test('远端提交与安装提交一致时保持已是最新', async () => {
  const home = mkdtempSync(join(tmpdir(), 'fish-commit-same-'))
  const original = globalThis.fetch
  try {
    const root = 建安装副本(home, NEW)
    globalThis.fetch = 装提交(NEW)
    const result = await createSelfUpdate({ packageRoot: root }).check(true, 'github')
    assert.equal(result.commitChanged, false)
    assert.equal(result.commitUpdate, false)
    assert.equal(result.hasUpdate, false)
    assert.equal(result.ahead, false)
  } finally { globalThis.fetch = original; rmSync(home, { recursive: true, force: true }) }
})

test('raw.githubusercontent 不可用时回退 jsDelivr 读取同一提交的版本信息', async () => {
  const home = mkdtempSync(join(tmpdir(), 'fish-commit-cdn-'))
  const original = globalThis.fetch
  const requests = []
  try {
    const root = 建安装副本(home, OLD)
    globalThis.fetch = async url => {
      const text = String(url)
      requests.push(text)
      if (text.includes('/commits/main')) return Response.json({ sha: NEW })
      if (text.includes('raw.githubusercontent.com')) throw new Error('连接被重置')
      return Response.json(META)
    }
    const result = await createSelfUpdate({ packageRoot: root }).check(true, 'github')
    assert.equal(result.ok, true)
    assert.equal(result.latest, '0.1.5')
    assert.equal(result.hasUpdate, true)
    assert.match(requests[1], /raw\.githubusercontent\.com/)
    assert.match(requests[2], /cdn\.jsdelivr\.net/)
  } finally { globalThis.fetch = original; rmSync(home, { recursive: true, force: true }) }
})

test('raw 与 jsDelivr 都不可用时用 GitHub contents 接口读 package.json', async () => {
  const home = mkdtempSync(join(tmpdir(), 'fish-commit-api-'))
  const original = globalThis.fetch
  const requests = []
  try {
    const root = 建安装副本(home, OLD)
    globalThis.fetch = async url => {
      const text = String(url)
      requests.push(text)
      if (text.includes('/commits/main')) return Response.json({ sha: NEW })
      if (text.includes('/contents/package.json')) {
        return Response.json({ encoding: 'base64', content: Buffer.from(JSON.stringify(META)).toString('base64') })
      }
      throw new Error('HTTP 403')
    }
    const result = await createSelfUpdate({ packageRoot: root }).check(true, 'github')
    assert.equal(result.ok, true)
    assert.equal(result.latest, '0.1.5')
    assert.equal(result.hasUpdate, true)
    assert.ok(requests.some(url => url.includes('/contents/package.json')))
  } finally { globalThis.fetch = original; rmSync(home, { recursive: true, force: true }) }
})

test('API 与 Git 都查不到 main 时如实返回错误，不再当成已是最新', async t => {
  const home = mkdtempSync(join(tmpdir(), 'fish-commit-fail-'))
  const original = globalThis.fetch
  t.mock.method(childProcess, 'execFile', (command, args, options, callback) => {
    callback(Object.assign(new Error('Command failed'), { stderr: 'fatal: unable to access GitHub' }), '', 'fatal: unable to access GitHub')
  })
  try {
    const root = 建安装副本(home, OLD)
    globalThis.fetch = async () => { throw new Error('fetch failed') }
    const result = await createSelfUpdate({ packageRoot: root }).check(true, 'github')
    assert.equal(result.ok, false)
    assert.equal(result.hasUpdate, false)
    assert.equal(result.latest, null)
    assert.match(result.error, /查询 main 提交失败/)
    assert.match(result.error, /unable to access/)
  } finally { globalThis.fetch = original; rmSync(home, { recursive: true, force: true }) }
})

test('开发副本本地领先远端时显示 ahead，不误报可更新', async () => {
  const home = mkdtempSync(join(tmpdir(), 'fish-commit-ahead-'))
  const original = globalThis.fetch
  try {
    const repo = join(home, 'repo')
    mkdirSync(repo)
    writeFileSync(join(repo, 'package.json'), JSON.stringify({
      ...META,
      repository: 'https://github.com/CHINOSAMAAA/dsh-big-fish-aio',
    }))
    const git = args => childProcess.execFileSync('git', ['-C', repo, ...args])
    git(['init', '-q'])
    git(['add', 'package.json'])
    git(['-c', 'user.name=test', '-c', 'user.email=test@example.com', 'commit', '-qm', 'first'])
    const first = String(git(['rev-parse', 'HEAD'])).trim()
    writeFileSync(join(repo, 'next.txt'), 'next')
    git(['add', 'next.txt'])
    git(['-c', 'user.name=test', '-c', 'user.email=test@example.com', 'commit', '-qm', 'second'])

    globalThis.fetch = 装提交(first)
    const result = await createSelfUpdate({ packageRoot: repo }).check(true, 'github')
    assert.equal(result.localCommitFrom, 'git')
    assert.notEqual(result.localCommit, first)
    assert.equal(result.commitChanged, true)
    assert.equal(result.commitUpdate, false)
    assert.equal(result.ahead, true)
    assert.equal(result.hasUpdate, false)
  } finally { globalThis.fetch = original; rmSync(home, { recursive: true, force: true }) }
})
