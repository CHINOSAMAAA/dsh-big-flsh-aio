import test from 'node:test'
import assert from 'node:assert/strict'
import vm from 'node:vm'
import { readFileSync } from 'node:fs'

const read = name => readFileSync(new URL('../' + name, import.meta.url), 'utf8')
const walk = node => !node || typeof node !== 'object' ? [] : [node, ...(node.children || []).flat(Infinity).flatMap(walk)]

test('六入口支持图标、键盘切换及已访问面板保留', () => {
  const state = [], registrations = []
  let index = 0, plugin
  const React = {
    createElement: (type, props, ...children) => ({ type, props, children }),
    useEffect() {},
    useState(value) {
      const i = index++
      if (!(i in state)) state[i] = typeof value === 'function' ? value() : value
      return [state[i], next => { state[i] = typeof next === 'function' ? next(state[i]) : next }]
    },
  }
  vm.runInNewContext(read('client.js'), { window: { __ModuleLoader__: {
    load({ factory }) { plugin = factory(id => id === 'react' ? React : {}) },
  } } })
  plugin.apply({ get: () => ({
    inject: (_, fn) => fn(),
    register: (slot, Component) => registrations.push({ slot, Component }),
  }) })
  const Page = registrations.find(item => item.slot.name === 'main').Component
  const render = () => { index = 0; return walk(Page()) }
  let tree = render(), tabs = tree.filter(n => n.props?.role === 'tab')
  assert.deepEqual(tabs.map(t => t.props['aria-label']), ['总览', 'QQ 互通', '长期记忆', '鱼的心情', '主动搭话', '更新与来源'])
  tabs[1].props.onClick()
  tree = render()
  assert.equal(tree.filter(n => n.props?.role === 'tabpanel').length, 2)
  assert.equal(tree.find(n => n.props?.id === 'fish-panel-0').props.hidden, true)
  let focused = -1, prevented = false
  tabs = tree.filter(n => n.props?.role === 'tab')
  tabs[1].props.onKeyDown({
    key: 'End', preventDefault() { prevented = true },
    currentTarget: { parentElement: { querySelectorAll: () => tabs.map((_, i) => ({ focus() { focused = i } })) } },
  })
  tree = render()
  assert.equal(focused, 5)
  assert.equal(prevented, true)
  assert.equal(tree.find(n => n.props?.id === 'fish-tab-5').props['aria-selected'], true)
  assert.equal(tree.filter(n => n.props?.role === 'tabpanel').length, 3)
  assert.equal(tree.find(n => n.props?.id === 'fish-panel-1').props.hidden, true)
})
