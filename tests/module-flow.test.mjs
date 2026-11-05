import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { Readable } from 'node:stream'
import vm from 'node:vm'
import { recordSource } from '../modules/qq/lib/memory-sources.mjs'

test('四模块联调：搭话 → 记忆上下文 → 心情判断与注入 → QQ 出站，以及挂饰和统一更新', async () => {
  const home = mkdtempSync(join(tmpdir(), 'fish-aio-flow-'))
  const previous = process.env.DSH_HOME, originalFetch = globalThis.fetch
  const cleanups = [], outbound = [], modelCalls = [], events = [], contexts = new Map(), tools = new Map()
  const routes = new Map(), hostEvents = new Map(), agentEvents = new Map()
  const sid = 'session-aio-flow'
  const write = (path, data) => writeFileSync(join(home, path), JSON.stringify(data))
  const listen = (map, name, fn) => {
    const listeners = map.get(name) || new Set(); listeners.add(fn); map.set(name, listeners)
    return () => listeners.delete(fn)
  }
  const emit = async (map, name, ...args) => { for (const fn of map.get(name) || []) await fn(...args) }
  const flush = async () => { for (let n = 0; n < 15; n++) await new Promise(resolve => setImmediate(resolve)) }
  try {
    process.env.DSH_HOME = home
    mkdirSync(join(home, 'feiyu-mood'))
    write('feiyu-mood/config.json', { slots: [{ id: 'partner', sessions: [sid] }], autoJudge: true })
    write('fish-memory-config.json', { 全局开关: true, sessions: { [sid]: true }, policy: { autoExpand: false, queryGate: 0 } })
    write('speak-up-config.json', { 目标会话: [sid], 试运行: true, 触发文案: '想起你喜欢的茉莉花茶，来找你聊聊。' })
    const qqConfig = { 总开关: true, 试运行: false, NapCat: 'http://127.0.0.1:39991', 只回QQ唤醒: true, 自动触发也发: true, 按段发送: false, 绑定: [{ 类型: '私聊', 号码: '123456', 会话: sid }] }
    write('qq-bridge-config.json', qqConfig)
    recordSource(home, qqConfig, '998877', qqConfig.绑定[0], 'verified-input', ['123456'])
    events.push({ type: 'user/message', data: { id: 'verified-input', role: 'user', content: [{ type: 'text', text: '我一直喜欢茉莉花茶' }], source: { kind: 'qq' } } })
    globalThis.fetch = async (url, options) => {
      assert.ok(String(url).startsWith('http://127.0.0.1:39991/'), '联调不得调用真实外部服务')
      outbound.push({ url: String(url), body: JSON.parse(options?.body || '{}') })
      return Response.json({ status: 'ok', retcode: 0, data: { user_id: 998877, nickname: 'test', message_id: 1 } })
    }
    const agent = {
      id: sid, status: 'idle', options: { provider: 'test', model: 'synthetic' },
      session: { id: sid, snapshotEvents: () => events },
      ctx: {
        on: (name, fn) => listen(agentEvents, name, fn),
        tools: { register: tool => { tools.set(tool.name, tool); return () => tools.delete(tool.name) } },
        systemPrompt: { context: item => { contexts.set(item.name, item); return () => contexts.delete(item.name) } },
      },
      async followup(message) {
        events.push({ type: 'user/message', data: message })
        await emit(agentEvents, 'agent/inbox/inserted', { message })
        await emit(hostEvents, 'session/event', this.session, events.at(-1))
      },
    }
    const ctx = {
      plugin: plugin => plugin.apply(ctx),
      agents: { list: () => [agent], roots: () => [agent], get: id => id === sid ? agent : undefined },
      sessions: { list: () => [agent.session], get: () => agent.session, flush: async () => {} },
      workspaceRegistry: { archivedSessionIds: [] },
      llm: { async *stream(input) { modelCalls.push(input); yield { type: 'text-delta', text: JSON.stringify({ moodDelta: 9, dims: { happy: 6 }, reason: '想起你喜欢的茉莉花茶，很开心', confidence: 95 }) } } },
      tools: agent.ctx.tools,
      webServer: { register: route => { assert.ok(!routes.has(route.path), '路由不冲突：' + route.path); routes.set(route.path, route.handler); return () => routes.delete(route.path) } },
      interval: () => () => {},
      on: (name, fn) => listen(hostEvents, name, fn),
      effect: fn => { const off = fn(); if (typeof off === 'function') cleanups.push(off) },
      logger: { info() {}, warn() {} },
      get(name) { return name === 'connection' ? { requestRejection: () => undefined } : this[name] },
    }
    const host = await import('../index.js')
    host.apply(ctx)
    async function call(path, body) {
      const req = Readable.from(body ? [JSON.stringify(body)] : [])
      Object.assign(req, { method: body ? 'POST' : 'GET', url: path, headers: { host: 'localhost', 'content-type': 'application/json' } })
      let raw, status = 200
      const handler = routes.get(path.split('?')[0]); assert.ok(handler, path)
      await handler(req, { writeHead(code) { status = code }, setHeader() {}, end(data) { raw = data } })
      assert.equal(status, 200, String(raw))
      return { raw, json: () => JSON.parse(raw) }
    }
    for (const path of ['/dsh-qq-bridge/state', '/dsh-fish-memory/list', '/dsh-feiyu-mood/state', '/dsh-speak-up/state']) assert.equal((await call(path)).json().ok, true, path)
    assert.deepEqual([...routes.keys()].filter(p => /\/(update|install)$/.test(p)), ['/dsh-big-flsh-aio/update', '/dsh-big-flsh-aio/install'])
    assert.ok(tools.has('remember') && contexts.has('memory') && contexts.has('feiyu-mood'))
    const remembered = await tools.get('remember').execute({ text: '对方一直喜欢茉莉花茶', importance: 1, tags: ['茉莉花茶'] }, { agent })
    assert.notEqual(remembered.ok, false)
    assert.equal((await call('/dsh-fish-memory/list')).json().sessions[0].count, 1)
    await call('/dsh-speak-up/roll', { 模式: '演练' })
    assert.equal(events.length, 1, '演练不投递会话')
    await call('/dsh-speak-up/roll', { 模式: '真发' })
    assert.equal(events.length, 2)
    assert.equal(events.at(-1).data.source.kind, 'speak-up')
    const memory = contexts.get('memory').text()
    assert.ok(memory.includes('茉莉花茶'), '主动搭话回合复用真实记忆召回')
    const reply = { role: 'assistant', content: [{ type: 'text', text: '今天也想和你一起喝茉莉花茶。' }] }
    const response = { type: 'assistant/message', data: { turn: 1, message: reply } }
    events.push(response)
    await emit(hostEvents, 'session/event', agent.session, response)
    await emit(agentEvents, 'agent/turn-stopping')
    await emit(hostEvents, 'session/event', agent.session, { type: 'turn/end', data: { turn: 1, reason: { kind: 'completed' } } })
    await flush()
    assert.equal(modelCalls.length, 1)
    assert.ok(modelCalls[0].system.includes('主动'), '心情使用自己搭话的判断口径')
    const state = (await call('/dsh-feiyu-mood/state')).json()
    assert.equal(state.timeline.length, 1)
    assert.equal(state.mood, 73)
    assert.ok(contexts.get('feiyu-mood').text().includes('茉莉花茶'))
    assert.equal(contexts.get('feiyu-mood').text(), '', '同一次心情只注入一次')
    assert.ok(outbound.some(r => r.url.endsWith('/send_private_msg') && JSON.stringify(r.body).includes('茉莉花茶')), '搭话回复经 QQ 策略转发')
    const before = outbound.length
    await emit(hostEvents, 'session/event', agent.session, { type: 'user/message', data: { source: { kind: 'user' } } })
    await emit(hostEvents, 'session/event', agent.session, { ...response, data: { ...response.data, turn: 2 } })
    await emit(hostEvents, 'session/event', agent.session, { type: 'turn/end', data: { turn: 2, reason: { kind: 'completed' } } })
    await flush()
    assert.equal(outbound.length, before, 'DSH 本地发言仍受 QQ 出站策略保护')
    const table = []
    await emit(hostEvents, 'webserver/index-inject', table)
    await emit(hostEvents, 'webserver/index-inject', table)
    assert.equal(table.length, 1, '挂饰只注入一次')
    new vm.Script((await call('/dsh-feiyu-mood/widget.js')).raw)
    for (const filename of ['welcome', 'feiyu', 'feiyu-great', 'feiyu-good', 'feiyu-worry', 'feiyu-sad', 'face-great', 'face-good', 'face-ok', 'face-worry', 'face-sad']) {
      const { raw } = await call('/dsh-feiyu-mood/' + filename + '.png')
      assert.equal(raw.subarray(1, 4).toString(), 'PNG')
    }
  } finally {
    for (const off of cleanups.reverse()) off()
    globalThis.fetch = originalFetch
    if (previous === undefined) delete process.env.DSH_HOME; else process.env.DSH_HOME = previous
    rmSync(home, { recursive: true, force: true })
  }
})
