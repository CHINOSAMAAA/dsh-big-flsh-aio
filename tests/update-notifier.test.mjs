import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import vm from 'node:vm'
import { createSelfUpdate } from '../lib/selfupdate.mjs'

const source = readFileSync(new URL('../src/update-notifier.js', import.meta.url), 'utf8')
const flush = () => new Promise(resolve => setImmediate(resolve))

for (const native of [true, false]) test(native ? '使用宿主 Toast，后台检查去重、恢复补查及卸载清理' : '宿主缺少 Toast 时显示可关闭的兼容提示条', async () => {
  let notice = null, cleanup, interval, time = 1000000, opened = 0, cleared = false, calls = 0
  let result = { ok: true, hasUpdate: true, latest: '0.0.2' }, failed = false, pending, pendingSignal
  const windowEvents = new Map(), documentEvents = new Map()
  const events = target => ({ addEventListener: (name, fn) => target.set(name, fn), removeEventListener: name => target.delete(name) })
  const nativeToast = function Toast() {}
  const sandbox = {
    FISH_THEME_CSS: '',
    require: () => { if (!native) throw new Error('旧宿主没有该模块'); return { Toast: nativeToast } },
    React: { useState: () => [notice, value => { notice = value }], useEffect: effect => { if (!cleanup) cleanup = effect() } },
    h: (type, props, ...children) => ({ type, props, children }), Date: { now: () => time }, AbortController,
    request: async (url, options) => {
      calls++; assert.equal(url, '/dsh-big-fish-aio/update?channel=mirror&refresh=1')
      pendingSignal = options.signal
      if (pending) return new Promise(resolve => { pending.resolve = resolve })
      if (failed) throw new Error('网络失败')
      return result
    },
    setTimeout: () => 1, clearTimeout() {},
    setInterval: (fn, ms) => { interval = fn; assert.equal(ms, 30 * 60000); return 2 },
    clearInterval: id => { assert.equal(id, 2); cleared = true },
    window: events(windowEvents), document: { ...events(documentEvents), visibilityState: 'visible' },
  }
  vm.createContext(sandbox)
  vm.runInContext(source + '\nglobalThis.Component = UpdateNotifier', sandbox)
  const render = () => sandbox.Component({ open: () => { opened++ } })
  assert.equal(render(), null)
  await flush()
  const tree = render()
  if (native) {
    assert.equal(tree.type, nativeToast)
    assert.equal(tree.props.actions[0].label, '查看更新')
    tree.props.actions[0].onClick()
    assert.equal(opened, 1)
  } else {
    assert.equal(tree.type, 'aside'); assert.equal(tree.props.role, 'alert')
    tree.children[1].children[1].props.onClick()
  }
  assert.equal(notice, null)
  time += 60000; windowEvents.get('focus')(); await flush(); assert.equal(calls, 1)
  time += 30 * 60000; await interval(); assert.equal(notice, null, '相同版本不重复提醒')
  result = { ...result, latest: '0.0.3' }; time += 30 * 60000; await interval(); assert.equal(notice, '0.0.3')
  notice = null; failed = true; time += 30 * 60000; await interval(); assert.equal(notice, null)
  failed = false; result = { ...result, latest: '0.0.4', hasUpdate: false }; time += 6 * 60000
  documentEvents.get('visibilitychange')(); await flush(); assert.equal(notice, null)
  pending = {}; time += 30 * 60000; const request = interval(); cleanup()
  assert.equal(pendingSignal.aborted, true)
  pending.resolve({ ...result, hasUpdate: true }); await request
  assert.equal(notice, null); assert.equal(cleared, true)
  assert.equal(windowEvents.size, 0); assert.equal(documentEvents.size, 0)
})

test('版本重设期间不提示升级回历史编号，旧系列可识别新系列迁移', async () => {
  const home = mkdtempSync(join(tmpdir(), 'fish-series-'))
  const originalFetch = globalThis.fetch
  try {
    const create = version => {
      const root = join(home, version); mkdirSync(root)
      writeFileSync(join(root, 'package.json'), JSON.stringify({ name: 'dsh-big-fish-aio', version }))
      return createSelfUpdate({ packageRoot: root })
    }
    let version = '1.5.1-1'
    globalThis.fetch = async () => Response.json({ name: 'dsh-big-fish-aio', version, dist: { integrity: 'sha512-' + 'a'.repeat(86) + '==' } })
    const current = create('0.0.1')
    const oldMirror = await current.check(true)
    assert.equal(oldMirror.hasUpdate, false); assert.equal(oldMirror.legacyRelease, true)
    version = '0.0.1'
    assert.equal((await create('1.5.1-1').check(true)).hasUpdate, true)
    assert.equal((await current.check(true)).hasUpdate, false)
    version = '0.0.2'
    assert.equal((await current.check(true)).hasUpdate, true)
  } finally { globalThis.fetch = originalFetch; rmSync(home, { recursive: true, force: true }) }
})
