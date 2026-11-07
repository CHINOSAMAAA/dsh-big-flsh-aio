import test from 'node:test'
import assert from 'node:assert/strict'
import { readGroupHistory } from '../modules/qq/lib/group-history.mjs'
import { fetchHistory } from '../modules/qq/lib/history-import.mjs'

const now = Date.parse('2026-11-07T08:00:00Z')
const row = { 类型: '群', 号码: '20001', 会话: 'group-session', 称呼: '读书群' }
const message = (id, at, text = '讨论读书计划') => ({ message_id: id, message_seq: id, time: Date.parse(at) / 1000, sender: { user_id: 10001, nickname: '群友' }, message: [{ type: 'text', data: { text } }] })

test('原始群历史按北京时间筛选今天，读到昨天即停止，历史导入原有空记录错误保留', async () => {
  const calls = []
  const call = async (action, body) => {
    calls.push({ action, body })
    return { status: 'ok', data: { messages: [message(3, '2026-11-07T00:30:00Z'), message(2, '2026-11-06T16:30:00Z'), message(1, '2026-11-06T15:30:00Z')] } }
  }
  const result = await readGroupHistory({ call, row, bot: '99999', now, getSession: async () => null })
  assert.equal(result.date, '2026-11-07')
  assert.deepEqual(result.messages.map(m => m.id), ['2', '3'])
  assert.equal(result.next_cursor, null)
  assert.equal(calls.length, 1)
  assert.equal(calls[0].body.reverseOrder, true)
  await assert.rejects(fetchHistory(async () => ({ status: 'ok', data: { messages: [] } }), row), /没有可导入的消息/)
})

test('群记录分页返回继续游标，明确长消息截断和非完整历史', async () => {
  let page = 0
  const result = await readGroupHistory({ row, bot: '99999', now, getSession: async () => null,
    call: async () => ({ status: 'ok', data: { messages: [message(100 - page++, '2026-11-07T01:00:00Z', '文'.repeat(500))] } }),
  })
  assert.equal(result.messages.length, 3)
  assert.equal(result.next_cursor, '98')
  assert.equal(result.textTruncated, true)
  assert.equal(result.messages[0].text.length, 400)
  assert.match(result.warning, /不能证明.*完整/)
})

test('后端不可用时只回退到绑定群的可信消息，排除本地手打与其他来源', async () => {
  const source = { kind: 'qq', type: '群', chatId: '20001', botId: '99999' }
  const event = (id, source, text) => ({ type: 'user/message', time: now, data: { id, source, content: [{ type: 'text', text }] } })
  const result = await readGroupHistory({ row, bot: '99999', now, call: async () => { throw Error('offline') },
    getSession: async () => ({ snapshotEvents: () => [event('ok', source, '群消息'), event('wrong', { ...source, chatId: '30001' }, '别的群'), event('local', undefined, '本地私密输入')] }),
  })
  assert.deepEqual(result.messages.map(m => m.id), ['ok'])
  assert.match(result.source, /DSH/)
  assert.match(result.warning, /仅覆盖已转入/)
})

test('空页不宣称当天无人发言，无效日期在请求前被拒绝', async () => {
  const args = { row, bot: '99999', now, call: async () => ({ status: 'ok', data: { messages: [] } }), getSession: async () => null }
  const result = await readGroupHistory(args)
  assert.deepEqual(result.messages, [])
  assert.match(result.instruction, /不能将零条返回/)
  await assert.rejects(readGroupHistory({ ...args, date: '2026-02-30' }), /日期/)
})
