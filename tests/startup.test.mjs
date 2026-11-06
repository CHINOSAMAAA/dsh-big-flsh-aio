import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { Readable } from 'node:stream'

let serial = 0
async function fixture(patch = {}) {
  const home = mkdtempSync(join(tmpdir(), 'fish-startup-')), prior = process.env.DSH_HOME, oldFetch = globalThis.fetch
  process.env.DSH_HOME = home
  const path = join(home, 'qq-bridge-config.json'), effects = [], routes = new Map(), requests = []
  const initial = { 总开关: false, 试运行: false, NapCat: 'http://qq.fixture', 令牌: 'fixture-token', 绑定: [{ 类型: '私聊', 号码: '123456', 会话: 'session-A', 开: true }], ...patch }
  writeFileSync(path, JSON.stringify(initial))
  const agents = new Map([['session-A', { options: { provider: 'fixture', model: 'chat' }, session: { id: 'session-A' }, async followup() { throw Error('启动检查不得调用模型会话') } }]])
  const api = { online: true, denied: false, history: true, gate: null, managementDenied: false }
  globalThis.fetch = async (url, options) => {
    const action = String(url).split('/').at(-1); requests.push({ action, body: JSON.parse(options.body) })
    assert.equal(options.headers.authorization, 'Bearer fixture-token')
    if (api.denied) return new Response(null, { status: 401 })
    if (action === 'get_login_info') return Response.json({ status: 'ok', data: { user_id: 998877, nickname: 'fixture' } })
    if (action === 'get_status') { if (api.gate) await api.gate; return Response.json({ status: 'ok', data: { online: api.online, good: false } }) }
    assert.ok(['get_friend_msg_history', 'get_group_msg_history'].includes(action), '启动检查只能读取后端，不发送消息')
    return Response.json({ status: api.history ? 'ok' : 'failed', data: api.history ? { messages: [] } : null })
  }
  const ctx = {
    agents: { get: id => agents.get(id), list: () => [...agents.values()] }, sessions: { list: () => [] }, workspaceRegistry: { archivedSessionIds: [] },
    llm: { listProviders: () => [{ id: 'fixture' }], stream() { throw Error('启动检查不得调用模型') } },
    get(name) { return name === 'connection' ? { requestRejection: () => api.managementDenied ? 403 : undefined } : this[name] },
    effect(fn) { const off = fn(); if (off) effects.push(off) }, on: () => () => {}, interval: () => () => {},
    webServer: { register({ path, handler }) { routes.set(path, handler); return () => {} } }, logger: { info() {} },
  }
  const host = await import('../modules/qq/lib/host.js?startup=' + ++serial), bridge = host.apply(ctx)
  const call = async (action, body = {}) => {
    const req = Readable.from([JSON.stringify(body)]); Object.assign(req, { method: 'POST', url: '/dsh-qq-bridge/' + action, headers: {} })
    let value; await routes.get(req.url)(req, { setHeader() {}, end(text) { value = JSON.parse(text) } }); return value
  }
  return { initial, ctx, api, agents, requests, bridge, call, read: () => JSON.parse(readFileSync(path, 'utf8')), write: data => writeFileSync(path, JSON.stringify(data)), close() {
    effects.reverse().forEach(off => off()); globalThis.fetch = oldFetch
    if (prior === undefined) delete process.env.DSH_HOME; else process.env.DSH_HOME = prior
    rmSync(home, { recursive: true, force: true })
  } }
}
const flush = async () => { for (let i = 0; i < 20; i++) await new Promise(setImmediate) }

test('新配置默认关闭；失败汇总所有操作项，检查不写配置', async () => {
  const f = await fixture({ 总开关: undefined, 试运行: undefined, 绑定: [] }); try {
    assert.equal((await f.bridge.概况()).配置.总开关, false)
    f.api.online = false
    const before = f.read(), result = await f.call('startup-check')
    assert.equal(result.ok, false); assert.match(result.说, /关闭「试运行」/); assert.match(result.说, /启用收发/); assert.match(result.说, /完成登录/)
    assert.equal(result.问题.length, 3); assert.deepEqual(f.read(), before)
  } finally { f.close() }
})
test('启动检查验证在线、历史读取、会话模型，纯文字不依赖工作区或可选策略开关', async () => {
  const f = await fixture(); try {
    const result = await f.call('startup-check', { 工作区: '', 只发标记内: true, 只回QQ唤醒: true, 收图: false, 发图: false, 总开关: true })
    assert.equal(result.ok, true); assert.equal(result.用户, 998877); assert.equal(f.read().总开关, false)
    assert.deepEqual(new Set(f.requests.map(r => r.action)), new Set(['get_login_info', 'get_status', 'get_friend_msg_history']))
    assert.deepEqual(f.requests.find(r => r.action.endsWith('_history')).body, { user_id: 123456, count: 1 })
  } finally { f.close() }
})
test('直接保存无法绕过启动校验，检测后变为离线仍不落盘开启；满足条件才保存', async () => {
  const f = await fixture(); try {
    assert.equal((await f.call('startup-check')).ok, true)
    f.api.online = false
    let result = await f.call('save', { 总开关: true })
    assert.equal(result.ok, false); assert.equal(result.启动检查失败, true); assert.equal(f.read().总开关, false)
    f.api.online = true; result = await f.call('save', { 总开关: true })
    assert.equal(result.ok, true); assert.equal(result.配置.总开关, true); assert.equal(f.read().总开关, true)
  } finally { f.close() }
})
test('检查全部启用的映射，报告归档、未打开、模型未配置；禁用映射不阻断', async () => {
  const f = await fixture(); try {
    const bindings = [...f.initial.绑定, { 类型: '群', 号码: '654321', 会话: 'session-B', 开: true }, { 类型: '群', 号码: '654322', 会话: 'session-C', 开: true }, { 类型: '私聊', 号码: '234567', 会话: 'session-D', 开: true }]
    f.agents.get('session-A').options.model = ''; f.ctx.workspaceRegistry.archivedSessionIds = ['B']
    let result = await f.call('startup-check', { 绑定: bindings })
    assert.match(result.说, /123456.*模型和服务商/); assert.match(result.说, /654321.*已归档/); assert.match(result.说, /654322.*打开目标/); assert.match(result.说, /234567.*打开目标/)
    f.agents.get('session-A').options.model = 'chat'
    result = await f.call('startup-check', { 绑定: bindings.map((b, i) => ({ ...b, 开: i === 0 })) }); assert.equal(result.ok, true)
    f.ctx.llm.listProviders = () => []
    assert.match((await f.call('startup-check')).说, /模型和服务商/)
  } finally { f.close() }
})
test('坏地址、令牌、历史接口与全关群聊概率给出可执行提示', async () => {
  const f = await fixture(); try {
    assert.match((await f.call('startup-check', { NapCat: 'file:///tmp/qq' })).说, /有效的 OneBot HTTP 地址/)
    f.api.denied = true; assert.match((await f.call('startup-check')).说, /401.*令牌/)
    f.api.denied = false; f.api.history = false; assert.match((await f.call('startup-check')).说, /无法读取 QQ 消息/)
    f.api.history = true
    const result = await f.call('startup-check', { 回复概率: 0, 点名必回: false, 绑定: [{ 类型: '群', 号码: '654321', 会话: 'session-A', 开: true }] })
    assert.match(result.说, /群聊频率与概率/)
    assert.match((await f.call('startup-check', { 绑定: [...f.initial.绑定, { 类型: '私聊', 号码: '', 会话: '', 开: true }] })).说, /补全已启用映射/)
  } finally { f.close() }
})
test('关闭不执行启动检查；迟到的开启保存不能覆盖后来的关闭', async () => {
  const f = await fixture(); let release; try {
    f.api.gate = new Promise(resolve => { release = resolve })
    const pending = f.call('save', { 总开关: true }); await flush()
    assert.ok(f.requests.some(r => r.action === 'get_status'))
    assert.equal((await f.call('save', { 总开关: false })).ok, true)
    release(); const late = await pending
    assert.equal(late.ok, false); assert.match(late.说, /设置已变化/); assert.equal(f.read().总开关, false)
    f.write({ ...f.initial, 总开关: true }); f.agents.clear(); f.api.online = false; f.requests.length = 0
    assert.equal((await f.call('save', { 总开关: false })).ok, true)
    assert.equal(f.requests.some(r => r.action === 'get_status'), false); assert.equal(f.read().总开关, false)
  } finally { release?.(); f.close() }
})
test('启动检查管理接口沿用 DSH 鉴权', async () => {
  const f = await fixture(); try {
    f.api.managementDenied = true
    assert.equal((await f.call('startup-check')).说, 'management_forbidden'); assert.equal(f.requests.length, 0)
    assert.equal(f.read().总开关, false)
  } finally { f.close() }
})
