import test from 'node:test'
import assert from 'node:assert/strict'
import { 归一化 } from '../lib/host.js'

test('显式删光私聊映射后不会被旧字段补回来', () => {
  const 配置 = 归一化({ 绑定: [], 私聊会话: 'session-old', 目标会话: 'session-old', 私聊QQ: '12345', 称呼: '旧私聊' })
  assert.deepEqual(配置.绑定, [])
})

test('显式删光群聊映射后不会被旧字段补回来', () => {
  const 配置 = 归一化({ 绑定: [], 群会话: 'session-group', 群号: '456', 群称呼: '旧群' })
  assert.deepEqual(配置.绑定, [])
})

test('完全没有绑定数组时仍保留旧配置迁移', () => {
  const 配置 = 归一化({ 私聊会话: 'session-old', 私聊QQ: '12345' })
  assert.equal(配置.绑定.length, 1)
  assert.equal(配置.绑定[0].类型, '私聊')
})
