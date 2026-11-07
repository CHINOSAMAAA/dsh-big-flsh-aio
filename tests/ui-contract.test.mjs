import test from 'node:test'
import assert from 'node:assert/strict'
import vm from 'node:vm'
import { readFileSync } from 'node:fs'

const read = name => readFileSync(new URL('../' + name, import.meta.url), 'utf8')
const walk = node => !node || typeof node !== 'object' ? [] : [node, ...(node.children || []).flat(Infinity).flatMap(walk)]

test('九入口支持图标、键盘切换及已访问面板保留', () => {
  const state = [], registrations = []
  let index = 0, plugin
  const React = {
    createElement: (type, props, ...children) => ({ type, props, children }),
    useEffect() {}, useLayoutEffect() {}, useRef: value => ({ current: value }),
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
  assert.deepEqual(tabs.map(t => t.props['aria-label']), ['总览', 'QQ 互通', '长期记忆', '鱼的心情', '主动搭话', '吃大米饭', '文件管理', '运行日志', '更新与来源'])
  const overview = tree.find(n => n.props?.id === 'fish-panel-0').children[0]
  const overviewTree = walk(overview.type(overview.props))
  const welcome = overviewTree.find(n => n.props?.className === 'fish-welcome')
  const chat = overviewTree.find(n => n.props?.['data-fish-feature'] === 'qq')
  const memory = overviewTree.find(n => n.props?.['data-fish-feature'] === 'memory')
  const mood = overviewTree.find(n => n.props?.['data-fish-feature'] === 'mood')
  const speak = overviewTree.find(n => n.props?.['data-fish-feature'] === 'speak')
  const sidebar = tree.find(n => n.props?.className === 'fish-sidebar-scene')
  const slots = [welcome, chat, memory, sidebar, mood, speak]
  const resources = ['welcome.png', 'sticker-chat.png', 'sticker-read.png', 'sticker-book.png', 'sticker-heart.png', 'sticker-wave.png']
  slots.forEach((slot, i) => {
    assert.ok(slot, resources[i] + ' 有独立位置')
    const images = walk(slot).filter(n => n.type === 'img')
    assert.equal(images.length, 1, '每处点缀使用一个角色')
    assert.equal(images[0].props.src, '/dsh-feiyu-mood/' + resources[i])
    assert.equal(images[0].props.width, 1254)
    assert.equal(images[0].props.height, 1254)
    assert.equal(images[0].props.alt, '', '装饰图不重复朗读界面文字')
    assert.ok(walk(slot).some(n => n.props?.['aria-hidden'] === true))
  })
  assert.equal(new Set(overviewTree.filter(n => n.type === 'img').map(n => n.props.src)).size, 5)

  tabs[1].props.onClick()
  tree = render()
  assert.ok(tree.some(n => n.props?.className === 'fish-content fish-flat'), '操作页切换为扁平界面')
  assert.equal(tree.filter(n => n.props?.role === 'tabpanel').length, 2)
  assert.equal(tree.find(n => n.props?.id === 'fish-panel-0').props.hidden, true)
  const submenu = tree.find(n => n.props?.['aria-label'] === 'QQ 互通子菜单')
  const entries = walk(submenu).filter(n => n.type === 'button').map(n => n.children.join(''))
  assert.equal(entries.indexOf('语音转写'), entries.indexOf('表情包') + 1)
  assert.equal(entries.at(-1), '图片与文件')
  assert.equal(entries.indexOf('语音发送'), entries.indexOf('语音转写') + 1)
  assert.ok(entries.includes('图片与文件') && !entries.includes('图片与语音'))
  const space = walk(submenu).find(n => n.type === 'button' && n.children.includes('QQ 空间'))
  space.props.onClick()
  tree = render()
  assert.equal(tree.find(n => n.props?.id === 'fish-panel-1').children[0].props.page, 'QQ 空间')
  assert.ok(tree.some(n => n.props?.className === 'fish-sidebar-note' && n.props.role === 'status'))
  assert.equal(tree.some(n => n.type === 'footer'), false)
  tabs = tree.filter(n => n.props?.role === 'tab')
  tabs[2].props.onClick()
  tree = render()
  const memorySubmenu = tree.find(n => n.props?.['aria-label'] === '长期记忆子菜单')
  const memoryEntries = walk(memorySubmenu).filter(n => n.type === 'button').map(n => n.children.join(''))
  assert.deepEqual(memoryEntries, ['记忆库', '召回设置', '数据管理'])

  let focused = -1, prevented = false
  tabs = tree.filter(n => n.props?.role === 'tab')
  tabs[1].props.onKeyDown({
    key: 'End', preventDefault() { prevented = true },
    currentTarget: { closest: () => ({ querySelectorAll: () => tabs.map((_, i) => ({ focus() { focused = i } })) }) },
  })
  tree = render()
  assert.equal(focused, 8)
  assert.equal(prevented, true)
  assert.equal(tree.find(n => n.props?.id === 'fish-tab-8').props['aria-selected'], true)
  assert.equal(tree.filter(n => n.props?.role === 'tabpanel').length, 4)
  assert.equal(tree.find(n => n.props?.id === 'fish-panel-1').props.hidden, true)
  for (const [key, expected] of [['Home', 0], ['ArrowLeft', 8], ['ArrowRight', 0], ['ArrowDown', 1], ['ArrowUp', 0]]) {
    tabs = tree.filter(n => n.props?.role === 'tab')
    const active = tabs.find(n => n.props['aria-selected'])
    active.props.onKeyDown({ key, preventDefault() {}, currentTarget: { closest: () => ({ querySelectorAll: () => tabs.map((_, i) => ({ focus() { focused = i } })) }) } })
    tree = render()
    assert.equal(focused, expected)
    assert.equal(tree.find(n => n.props?.id === 'fish-tab-' + expected).props['aria-selected'], true)
  }

})
