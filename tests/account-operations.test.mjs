import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, writeFileSync, rmSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createAccountOperations } from '../modules/qq/lib/account-operations.mjs'
import { recordSource } from '../modules/qq/lib/memory-sources.mjs'

function fixture() {
  const home = mkdtempSync(join(tmpdir(), 'fish-account-'))
  const owner = '10001', bot = '90001', sid = 'session-owner'
  const config = { NapCat: 'http://qq-test', 总开关: true, 试运行: false, 允许改签名: true, 允许改头像: true, 好友申请审批: true, 群邀请审批: true,
    绑定: [{ 类型: '私聊', 号码: owner, 会话: sid, 开: true }] }
  const agents = new Map(), registered = new Map(), calls = [], events = []
  const agent = { session: { id: sid, snapshotEvents: () => events }, ctx: { tools: { register(tool) { registered.set(tool.name, tool); return () => registered.delete(tool.name) } } } }
  agents.set(sid, agent)
  writeFileSync(join(home, 'fish-memory-config.json'), JSON.stringify({ qqOwner: owner }))
  const persist = () => writeFileSync(join(home, 'qq-bridge-config.json'), JSON.stringify(config))
  persist()
  let clock = Date.now(), failDecision = false, logins = 0, onLogin = () => {}
  const receipt = (id, senders = [owner]) => {
    recordSource(home, config, bot, config.绑定[0], id, senders)
    events.push({ type: 'user/message', data: { id, source: { kind: 'qq' } } })
  }
  receipt('owner-1')
  const manager = createAccountOperations({ home, config: () => config, findAgent: id => agents.get(id), now: () => clock,
    loadAvatar: async () => 'base64://test-image',
    call: async (_config, action, body) => {
      calls.push({ action, body })
      if (action === 'get_login_info') { onLogin(++logins); return { user_id: bot } }
      if (failDecision && action.startsWith('set_') && action.endsWith('_request')) throw new Error('timeout')
      return {}
    } })
  const event = (kind = 'friend', flag = 'first') => ({ post_type: 'request', request_type: kind, sub_type: kind === 'group' ? 'invite' : undefined, self_id: bot, user_id: '20001', group_id: '30001', flag, comment: '你好' })
  const flush = async () => { for (let i = 0; i < 20; i++) await new Promise(setImmediate) }
  const reply = async (id, text) => { receipt(id); return manager.handleOwnerReply({ session: sid, messageId: id, text }) }
  return { home, config, manager, calls, registered, agent, event, flush, receipt, reply, persist,
    advance: ms => { clock += ms }, fail: () => { failDecision = true }, onLogin: fn => { onLogin = fn },
    close() { manager.stop(); rmSync(home, { recursive: true, force: true }) } }
}

test('好友申请先询问主人，明确编号授权后执行一次，并保留落盘结果', async () => {
  const f = fixture()
  try {
    f.manager.capture(f.event()); f.manager.tick(); await f.flush()
    const item = f.manager.view().requests[0]
    assert.ok(item.notifiedAt)
    assert.ok(f.calls.some(c => c.action === 'send_private_msg' && c.body.user_id === 10001 && c.body.message[0].data.text.includes(item.id)))
    assert.equal(f.calls.filter(c => c.action === 'set_friend_add_request').length, 0)
    assert.equal(f.manager.capture(f.event()), false)
    assert.equal(await f.reply('vague', '同意'), null)
    await Promise.all([f.reply('approve-1', '同意申请 ' + item.id), f.reply('approve-2', '同意申请 ' + item.id)])
    assert.equal(f.calls.filter(c => c.action === 'set_friend_add_request').length, 1)
    assert.equal(f.manager.view().requests[0].status, 'approved')
    const disk = JSON.parse(readFileSync(join(f.home, 'qq-account-requests.json')))
    assert.equal(disk.items[0].decisionMessage.startsWith('approve-'), true)
    assert.equal('flag' in f.manager.view().requests[0], false)
  } finally { f.close() }
})

test('资料工具拒绝子 Agent、未知来源、关掉权限和执行前撤销，允许主人私聊', async () => {
  const f = fixture()
  try {
    f.manager.tick(); await f.flush()
    const tool = f.registered.get('qq_set_signature'), exec = { agent: f.agent, signal: new AbortController().signal }
    assert.equal((await tool.execute({ signature: '晴天' }, { ...exec, agent: { ...f.agent } })).ok, false)
    f.receipt('stranger', ['20001'])
    assert.equal((await tool.execute({ signature: '晴天' }, exec)).ok, false)
    f.receipt('real-owner')
    assert.equal((await tool.execute({ signature: '晴天' }, exec)).ok, true)
    assert.ok(f.calls.some(c => c.action === 'set_self_longnick' && c.body.longNick === '晴天'))
    f.config.允许改签名 = false
    assert.equal((await tool.execute({ signature: '阴天' }, exec)).ok, false)
    f.config.允许改签名 = true
    f.onLogin(() => { f.config.允许改签名 = false })
    assert.equal((await tool.execute({ signature: '阴天' }, exec)).ok, false)
    assert.equal(f.calls.filter(c => c.action === 'set_self_longnick').length, 1)
  } finally { f.close() }
})

test('群邀请使用 invite 类型，超时结果待核验且重复授权不重试', async () => {
  const f = fixture()
  try {
    assert.equal(f.manager.capture({ ...f.event('group'), sub_type: 'add' }), false)
    f.manager.capture(f.event('group')); f.manager.tick(); await f.flush()
    const id = f.manager.view().requests[0].id
    f.fail()
    await f.reply('approve', '同意申请 ' + id)
    await f.reply('retry', '同意申请 ' + id)
    const calls = f.calls.filter(c => c.action === 'set_group_add_request')
    assert.equal(calls.length, 1)
    assert.equal(calls[0].body.sub_type, 'invite')
    assert.equal(f.manager.view().requests[0].status, 'uncertain')
  } finally { f.close() }
})

test('审批在关闭开关、试运行、过期或主人变化时拒绝执行', async () => {
  const f = fixture()
  try {
    f.manager.capture(f.event()); f.manager.tick(); await f.flush()
    const id = f.manager.view().requests[0].id
    f.config.好友申请审批 = false
    await f.reply('disabled', '同意申请 ' + id)
    f.config.好友申请审批 = true; f.config.试运行 = true
    await f.reply('dry-run', '同意申请 ' + id)
    f.config.试运行 = false; f.advance(86400001)
    await f.reply('expired', '同意申请 ' + id)
    assert.equal(f.manager.view().requests[0].status, 'expired')
    writeFileSync(join(f.home, 'fish-memory-config.json'), JSON.stringify({ qqOwner: '10002' }))
    assert.equal(await f.manager.handleOwnerReply({ session: f.agent.session.id, messageId: 'expired', text: '同意申请 ' + id }), null)
    assert.equal(f.calls.filter(c => c.action === 'set_friend_add_request').length, 0)
  } finally { f.close() }
})
