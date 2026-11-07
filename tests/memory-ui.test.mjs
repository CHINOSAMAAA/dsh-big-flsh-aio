import test from 'node:test'
import assert from 'node:assert/strict'
import vm from 'node:vm'
import { readFileSync } from 'node:fs'

const walk = x => !x || typeof x !== 'object' ? [] : [x, ...(x.children || []).flat(Infinity).flatMap(walk)]
const label = x => (x.children || []).flat(Infinity).filter(v => typeof v === 'string').join('')
function fixture() {
  const memory = { id: 'm1', text: '周末一起整理书架', importance: .5, category: 'event', tags: [], related: [], at: '2026-11-07T03:00:00Z' }
  const session = { id: 'a', title: '测试私聊', storeId: 'qq_1_private_2', qq: true, count: 1, enabled: true, memories: [memory], deleted: [], traces: [] }
  const data = { ok: true, 全局开关: true, userPronoun: '主人', qqOwner: '10001', qqIsolatedGroups: [], policy: { maxItems: 6 }, spec: [], sessions: [session, { ...session, id: 'g1', title: '群甲', storeId: 'qq_1_shared' }, { ...session, id: 'g2', title: '群乙', storeId: 'qq_1_shared' }] }
  const state = [], requests = []
  let index = 0, module
  const React = {
    createElement: (type, props, ...children) => ({ type, props: props || {}, children }),
    Fragment: 'fragment', useEffect() {}, useCallback: fn => fn, useRef: value => ({ current: value }),
    useState(initial) {
      const i = index++
      if (!(i in state)) state[i] = i === 0 ? data : i === 3 ? data.policy : typeof initial === 'function' ? initial() : initial
      return [state[i], value => { state[i] = typeof value === 'function' ? value(state[i]) : value }]
    },
  }
  vm.runInNewContext(readFileSync(new URL('../modules/memory/lib/client.js', import.meta.url), 'utf8'), {
    window: { __ModuleLoader__: { load: ({ factory }) => { module = factory(() => React) } } },
    fetch: async (url, options) => { requests.push({ url, body: options?.body && JSON.parse(options.body) }); return { ok: true, json: async () => url.endsWith('/list') ? data : { ok: true, count: 2 } } },
    setTimeout, clearTimeout,
  })
  let page = '记忆库'
  const render = () => { index = 0; return walk(module.Section({ page, onPageChange: name => { page = name }, historyImport: { type: 'history-tool', children: [] } })) }
  const button = (nodes, name) => nodes.find(x => x.type === 'button' && label(x) === name)
  const dialog = nodes => nodes.find(x => x.type?.name === 'MemoryDialog')
  return { render, button, dialog, requests, page: value => { page = value } }
}

test('同一共享库只展示一次，编辑在同一个弹窗切换并携带正确库标识', async () => {
  const f = fixture()
  let nodes = f.render()
  assert.equal(nodes.filter(x => x.props.className === 'memory-library-row').length, 2)
  assert.ok(nodes.some(x => label(x) === '普通群共享记忆'))
  f.button(nodes, '查看记忆').props.onClick()
  nodes = f.render()
  assert.equal(nodes.filter(x => x.type?.name === 'MemoryDialog').length, 1)
  assert.equal(f.dialog(nodes).props.title, '记忆条目')
  nodes.find(x => x.props.role === 'button' && label(x) === '编辑').props.onClick()
  nodes = f.render()
  assert.equal(f.dialog(nodes).props.title, '编辑记忆')
  assert.equal(nodes.filter(x => x.type?.name === 'MemoryDialog').length, 1)
  f.button(nodes, '保存修改').props.onClick()
  await new Promise(setImmediate)
  assert.deepEqual(f.requests.find(r => r.url.endsWith('/edit')).body, { session: 'a', id: 'm1', text: '周末一起整理书架', importance: .5, storeId: 'qq_1_private_2' })
})

test('数据管理操作分别打开单层弹窗；索引维护不重复渲染全局语义配置', () => {
  const f = fixture()
  f.page('数据管理')
  for (const [title, expected] of [['新增记忆', '新增记忆'], ['档案导入与生成', '档案导入与生成'], ['整理与修复', '整理与修复'], ['回收站', '回收站'], ['召回诊断', '召回诊断'], ['索引维护', '语义索引']]) {
    let nodes = f.render()
    const tile = nodes.find(x => x.type === 'button' && x.children.flat(Infinity).some(c => c?.type === 'strong' && label(c) === title))
    assert.ok(tile, title)
    tile.props.onClick()
    nodes = f.render()
    const modal = f.dialog(nodes)
    assert.equal(modal.props.title, expected)
    assert.equal(nodes.filter(x => x.type?.name === 'MemoryDialog').length, 1)
    if (title === '索引维护') {
      const embedded = walk(modal).find(x => x.type?.name === 'EmbeddingSettings')
      assert.equal(embedded.props.indexOnly, true)
      assert.equal(embedded.props.storeId, 'qq_1_private_2')
    }
    modal.props.onClose()
  }
})

test('范围与称呼保留各入口开关及共享库内每个会话的称呼设置', () => {
  const f = fixture()
  let nodes = f.render()
  f.button(nodes, '范围与称呼').props.onClick()
  nodes = f.render()
  assert.equal(nodes.filter(x => x.props.role === 'switch' && x.props['aria-label']?.startsWith('启用记忆：')).length, 3)
  const settings = nodes.filter(x => x.type === 'button' && label(x) === '称呼设置')
  assert.equal(settings.length, 3)
  settings[2].props.onClick()
  nodes = f.render()
  assert.equal(nodes.filter(x => x.type?.name === 'MemoryDialog').length, 1)
  assert.equal(f.dialog(nodes).props.title, '库内称呼')
})


test('QQ 聊天记录导入移入数据管理的单层弹窗，关闭后回到管理页', () => {
  const f = fixture()
  f.page('数据管理')
  let nodes = f.render()
  f.button(nodes, '打开导入工具').props.onClick()
  nodes = f.render()
  assert.equal(f.dialog(nodes).props.title, 'QQ 聊天记录导入')
  assert.equal(nodes.filter(x => x.type?.name === 'MemoryDialog').length, 1)
  assert.ok(walk(f.dialog(nodes)).some(x => x.type === 'history-tool'))
  f.dialog(nodes).props.onClose()
  assert.equal(f.dialog(f.render()), undefined)
})
