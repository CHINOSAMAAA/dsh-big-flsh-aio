import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { Readable } from 'node:stream'

test('QQ 操作入口：权限、原图、试运行、绑定、空间复用及失败反馈', async () => {
  const home = mkdtempSync(join(tmpdir(), 'fish-actions-'))
  const previous = process.env.DSH_HOME, fetch = globalThis.fetch, interval = globalThis.setInterval
  let spaceTick; const reminders = []
  const routes = new Map(), off = [], sent = []
  let denied, auth = true, backendOK = true
  let config = { 总开关: true, 试运行: false, 发图: true, 转私聊: true, 拆段间隔毫秒: 0,
    NapCat: 'http://synthetic.invalid', 允许发空间动态: false, 绑定: [{ 类型: '私聊', 号码: '123456', 会话: 'session-test' }] }
  const save = patch => { config = { ...config, ...patch }; writeFileSync(join(home, 'qq-bridge-config.json'), JSON.stringify(config)) }
  try {
    process.env.DSH_HOME = home; save({})
    globalThis.setInterval = (fn, ms, ...args) => { if (ms === 60000) spaceTick = fn; return interval(fn, ms, ...args) }
    globalThis.fetch = async (url, options) => {
      assert.ok(String(url).startsWith('http://synthetic.invalid/'))
      sent.push({ url: String(url), body: JSON.parse(options?.body || '{}') })
      return Response.json(backendOK ? { status: 'ok', retcode: 0, data: { tid: 42, feeds: [{ nickname: '朋友', html: '<p>早上好</p>', time: 1 }] } } : { status: 'failed', wording: 'backend-test-error' })
    }
    const host = await import('../modules/qq/lib/host.js?actions-test')
    host.apply({ effect(fn) { const f = fn(); if (f) off.push(f) }, on: () => () => {}, interval: () => () => {},
      agents: { list: () => [], get: () => ({ session: { id: 'session-test' }, followup: async message => reminders.push(message) }) }, sessions: { list: () => [] }, logger: { info() {} },
      get: name => name === 'connection' && auth ? { requestRejection: () => denied } : undefined,
      webServer: { register(r) { routes.set(r.path, r.handler); return () => {} } } })
    const call = async (path, body, extra = {}) => {
      const req = Readable.from([JSON.stringify(body)])
      Object.assign(req, { method: 'POST', url: '/dsh-qq-bridge/' + path, headers: { host: 'localhost', ...extra.headers } }, extra)
      let result
      await routes.get('/dsh-qq-bridge/' + path)(req, { setHeader() {}, end(x) { result = JSON.parse(x) } })
      return result
    }
    const images = { session: 'session-test', images: ['https://example.com/happy.gif'] }
    denied = 403; assert.equal((await call('send-images', images)).ok, false); denied = undefined
    auth = false; assert.equal((await call('space', { action: 'qq_space_feeds' })).ok, false); auth = true
    assert.equal((await call('send-images', images, { headers: { host: 'localhost', origin: 'https://foreign.invalid' } })).ok, false)
    assert.equal((await call('space', { action: 'qq_space_post' }, { method: 'GET' })).ok, false)
    assert.equal((await call('space', { action: 'delete_everything' })).ok, false)
    assert.equal((await call('send-images', { ...images, session: 'not-bound' })).ok, false)
    assert.equal((await call('send-images', { ...images, images: Array(5).fill(images.images[0]) })).ok, false)
    assert.equal((await call('send-images', { ...images, images: ['/tmp/secrets.txt'] })).ok, false)
    assert.equal(sent.length, 0)
    save({ 总开关: false }); assert.equal((await call('send-images', images)).ok, false)
    save({ 总开关: true, 试运行: true }); assert.match((await call('send-images', images)).说, /未实际发送/); assert.equal(sent.length, 0)
    save({ 试运行: false }); assert.equal((await call('send-images', images)).ok, true)
    assert.equal(sent.at(-1).body.user_id, 123456)
    assert.deepEqual(sent.at(-1).body.message, [{ type: 'image', data: { file: images.images[0], url: images.images[0] } }])
    const gif = join(home, 'sticker.gif'); writeFileSync(gif, Buffer.from('GIF89a-test-original'))
    assert.equal((await call('send-images', { ...images, images: [gif] })).ok, true)
    assert.equal(sent.at(-1).body.message[0].data.file, 'base64://' + Buffer.from('GIF89a-test-original').toString('base64'))
    const publish = { action: 'qq_space_post', args: { content: '今天好', images: Array(9).fill('https://example.com/image.png'), ugc_right: 64 } }
    const before = sent.length
    assert.equal((await call('space', publish)).ok, false); assert.equal(sent.length, before)
    save({ 允许发空间动态: true })
    assert.equal((await call('space', { ...publish, args: { ...publish.args, images: Array(10).fill('a') } })).ok, false)
    assert.equal((await call('space', { ...publish, args: { content: 'test', ugc_right: 16 } })).ok, false)
    assert.equal((await call('space', publish)).ok, true)
    assert.equal(sent.at(-1).body.ugc_right, 64); assert.equal(sent.at(-1).body.images.length, 9)
    assert.match((await call('space', { action: 'qq_space_feeds' })).说, /朋友.*\n.*早上好/)
    const now = new Date()
    save({ 空间定时发: [{ 时: String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0'), 权: 64, 开: true }] })
    spaceTick(); await new Promise(setImmediate)
    assert.match(JSON.stringify(reminders), /ugc_right=64/)
    backendOK = false
    assert.match((await call('space', { action: 'qq_space_feeds' })).说, /backend-test-error/)
    assert.equal((await call('send-images', images)).ok, false)
  } finally {
    off.reverse().forEach(fn => fn()); globalThis.fetch = fetch; globalThis.setInterval = interval
    if (previous === undefined) delete process.env.DSH_HOME; else process.env.DSH_HOME = previous
    rmSync(home, { recursive: true, force: true })
  }
})
