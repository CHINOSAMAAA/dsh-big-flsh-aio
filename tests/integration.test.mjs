import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import vm from 'node:vm'
import childProcess from 'node:child_process'
import { createSelfUpdate } from '../lib/selfupdate.mjs'

const read = path => readFileSync(new URL(path, import.meta.url), 'utf8')

test('整合包只注册一个侧栏和主面板，四个入口直接挂载原功能组件', () => {
  let plugin, index = 0
  const states = [0, [0, 1, 2, 3]]
  const React = { createElement: (type, props, ...children) => ({ type, props, children }), useState: () => [states[index++], () => {}] }
  vm.runInNewContext(read('../client.js'), { window: { __ModuleLoader__: { load: ({ id, factory }) => {
    assert.equal(id, 'dsh-big-flsh-aio'); plugin = factory(() => React)
  } } } })
  const registrations = []
  plugin.apply({ get: () => ({ inject: (_, fn) => fn(), register: (slot, component) => registrations.push({ slot, component }) }) })
  assert.deepEqual(registrations.map(r => r.slot.name), ['sidebar.panellist', 'main'])
  assert.equal(registrations[0].slot.id, registrations[1].slot.key)
  const tree = registrations[1].component()
  const nodes = []
  const walk = x => { if (x && typeof x === 'object') { nodes.push(x); for (const c of x.children || []) (Array.isArray(c) ? c : [c]).forEach(walk) } }
  walk(tree)
  assert.deepEqual(nodes.filter(n => n.props?.role === 'tab').map(n => n.children[0]), ['总览', 'QQ 互通', '长期记忆', '更新与来源'])
  const panels = nodes.filter(n => n.props?.role === 'tabpanel')
  assert.equal(panels.length, 4)
  assert.equal(panels[1].children[0].type.name, 'Section')
  assert.equal(panels[2].children[0].type.name, 'Section')
  const updates = panels[3].children[0].type
  const compatReact = [null, false, '']; index = 0; React.useState = () => [compatReact[index++], () => {}]; React.useEffect = () => {}
  const htmlTree = JSON.stringify(updates())
  const meta = JSON.parse(read('../package.json'))
  for (const source of meta.upstreamCompatibility) { assert.ok(htmlTree.includes(source.url)); assert.ok(htmlTree.includes(source.version)) }
  const overviewStates = [{ memory: { sessions: [{ id: 'a', storeId: 'shared', count: 3 }, { id: 'b', storeId: 'shared', count: 3 }] } }, false]
  index = 0; React.useState = () => [overviewStates[index++], () => {}]
  const overview = JSON.stringify(panels[0].children[0].type({ navigate() {} }))
  assert.ok(overview.includes('1 个记忆库'))
  assert.ok(overview.includes('"fish-value"},"children":["3"]'))
})

test('作者许可原文完整保留，兼容清单和包内模块版本一致', () => {
  const license = read('../LICENSE')
  assert.equal(license, read('../modules/qq/LICENSE'))
  assert.equal(license, read('../modules/memory/LICENSE'))
  const meta = JSON.parse(read('../package.json'))
  for (const [module, name] of [['qq', 'dsh-qq-link-plus'], ['memory', 'dsh-fish-memory-plus']]) {
    const source = meta.upstreamCompatibility.find(s => s.url.endsWith('/' + name))
    assert.equal(source.version, JSON.parse(read(`../modules/${module}/package.json`)).version)
  }
  assert.ok(read('../README.md').slice(0, 900).includes('原作者 **Yuuyuko-uu**'))
  assert.ok(read('../LICENSE.md').slice(0, 900).includes('Yuuyuko-uu'))
})

test('统一更新拒绝错误包、无效版本、未鉴权和跨站请求；成功安装走宿主管理器', async () => {
  const home = mkdtempSync(join(tmpdir(), 'fish-aio-update-'))
  const originalFetch = globalThis.fetch
  try {
    const root = join(home, 'node_modules', 'dsh-big-flsh-aio'); mkdirSync(root, { recursive: true })
    writeFileSync(join(root, 'package.json'), read('../package.json'))
    const updater = createSelfUpdate({ packageRoot: root })
    let remote = { name: 'wrong-plugin', version: '99.0.0' }
    globalThis.fetch = async url => ({ ok: true, json: async () => String(url).includes('api.github.com') ? { sha: 'b'.repeat(40) } : remote })
    assert.match((await updater.check(true)).error, /包名/)
    remote = { name: 'dsh-big-flsh-aio', version: 'not-semver' }
    assert.match((await updater.check(true)).error, /SemVer/)
    remote.version = '0.2.0'
    const handlers = {}, installed = []
    let rejection, managerResult = { applied: true }
    const ctx = { pluginManager: { installBundle: async spec => { installed.push(spec); return managerResult } }, get: () => ({ requestRejection: () => rejection }), effect: fn => fn(), webServer: { register: o => { handlers[o.path] = o.handler } } }
    updater.register(ctx, '/dsh-big-flsh-aio')
    const call = async (path, req = {}) => {
      let code, result
      await handlers['/dsh-big-flsh-aio/' + path]({ method: 'POST', url: '/' + path, headers: { host: 'localhost', 'content-type': 'application/json' }, ...req }, { writeHead: n => { code = n }, end: s => { result = JSON.parse(s) } })
      return { code, result }
    }
    rejection = 401; assert.equal((await call('install')).code, 401)
    rejection = undefined
    assert.equal((await call('install', { method: 'GET' })).code, 405)
    assert.equal((await call('install', { headers: { host: 'localhost', origin: 'https://other.test' } })).code, 403)
    assert.equal((await call('install', { headers: { host: 'localhost', 'content-type': 'text/plain' } })).code, 415)
    assert.equal(installed.length, 0)
    assert.equal((await call('install')).result.ok, true)
    assert.deepEqual(installed, ['github:CHINOSAMAAA/dsh-big-flsh-aio#' + 'b'.repeat(40)])
    managerResult = { applied: false, reason: '宿主拒绝' }
    assert.equal((await call('install')).result.ok, false)
    for (const application of ['failed', 'cancelled', 'overridden']) {
      managerResult = { changed: false, application, stage: 'install', target: remote.name }
      assert.equal((await call('install')).result.ok, false)
    }
    managerResult = { changed: true, application: 'restart-required', stage: 'enable', target: remote.name }
    assert.equal((await call('install')).result.ok, true)
    remote.version = '0.1.0'
    const before = installed.length
    assert.equal((await call('install')).result.ok, false)
    assert.equal(installed.length, before)
  } finally { globalThis.fetch = originalFetch; rmSync(home, { recursive: true, force: true }) }
})

test('Host 统一加载两个子插件并注册整合包更新路由', async () => {
  const home = mkdtempSync(join(tmpdir(), 'fish-aio-host-'))
  const previous = process.env.DSH_HOME
  try {
    process.env.DSH_HOME = home
    const host = await import('../index.js')
    const plugins = [], routes = []
    host.apply({ plugin: p => plugins.push(p.name), effect: fn => fn(), webServer: { register: route => routes.push(route.path) } })
    assert.deepEqual(plugins, ['memory', 'qq-bridge'])
    assert.deepEqual(routes, ['/dsh-big-flsh-aio/update', '/dsh-big-flsh-aio/install'])
    assert.ok(host.inject.includes('llm') && host.inject.includes('attachments'))
  } finally { if (previous === undefined) delete process.env.DSH_HOME; else process.env.DSH_HOME = previous; rmSync(home, { recursive: true, force: true }) }
})

test('GitHub API 限流时使用 Git 解析本仓库 main，仍校验固定提交的包元信息', async t => {
  const originalFetch = globalThis.fetch
  const requests = []
  const sha = 'c'.repeat(40)
  t.mock.method(childProcess, 'execFile', (command, args, options, callback) => {
    assert.equal(command, 'git')
    assert.deepEqual(args, ['ls-remote', '--exit-code', 'https://github.com/CHINOSAMAAA/dsh-big-flsh-aio.git', 'refs/heads/main'])
    assert.equal(options.env.GIT_TERMINAL_PROMPT, '0')
    callback(null, sha + '\trefs/heads/main\n')
  })
  globalThis.fetch = async url => {
    requests.push(url)
    return String(url).includes('api.github.com') ? { ok: false, status: 403 } : { ok: true, json: async () => ({ name: 'dsh-big-flsh-aio', version: '0.2.0' }) }
  }
  try {
    const result = await createSelfUpdate({ packageRoot: new URL('../', import.meta.url).pathname }).check(true)
    assert.equal(result.ok, true)
    assert.equal(result.latestCommit, sha)
    assert.equal(requests[1], `https://raw.githubusercontent.com/CHINOSAMAAA/dsh-big-flsh-aio/${sha}/package.json`)
  } finally { globalThis.fetch = originalFetch }
})
