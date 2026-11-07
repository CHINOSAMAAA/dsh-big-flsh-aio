import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { createHash } from 'node:crypto'
import { writeFileAtomicSync } from './atomic-file.mjs'
import { bindingSource, endpointKey, exclusiveBinding, sessionKey } from './memory-sources.mjs'
import { latestUserId, qqScope } from '../../memory/lib/qq-scope.mjs'

const DAY = 86400000
const hash = value => createHash('sha256').update(JSON.stringify(value)).digest('hex')
const text = value => String(value || '').replace(/[\r\n\x00-\x1f]/g, ' ').slice(0, 300)
const enabled = c => c.允许改签名 || c.允许改头像 || c.好友申请审批 || c.群邀请审批

export function createAccountOperations({ home, config, findAgent, call, loadAvatar, log = () => {}, now = Date.now }) {
  const path = join(home, 'qq-account-requests.json')
  let mounted = null, notifying = false, stopped = false, nextNotice = 0
  const read = () => {
    if (!existsSync(path)) return []
    const data = JSON.parse(readFileSync(path, 'utf8'))
    if (!Array.isArray(data.items) || data.items.some(item => !item || !/^[A-F0-9]{12}$/.test(item.id)
      || !['friend', 'group'].includes(item.kind) || typeof item.flag !== 'string'
      || !/^[a-f0-9]{64}$/.test(item.stamp) || !Number.isFinite(item.createdAt)
      || !['pending', 'processing', 'approved', 'rejected', 'expired', 'uncertain'].includes(item.status))) {
      throw new Error('申请记录损坏，已停止操作')
    }
    return data.items
  }
  const save = items => writeFileAtomicSync(path, JSON.stringify({ version: 1, items }, null, 2))
  const update = (id, patch) => save(read().map(item => item.id === id ? { ...item, ...patch } : item))
  const settings = () => {
    const file = join(home, 'fish-memory-config.json')
    return existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : {}
  }
  const target = () => {
    const c = config(), owner = String(settings().qqOwner || '')
    if (!/^[1-9]\d{4,19}$/.test(owner)) throw new Error('请先在长期记忆的数据管理中设置主人 QQ')
    const row = (c.绑定 || []).find(b => b.类型 === '私聊' && String(b.号码) === owner)
    if (!row || !exclusiveBinding(c.绑定, row.会话)) throw new Error('主人 QQ 需要独占的已启用私聊绑定')
    const source = bindingSource(home, row)
    if (!source || source.unverified || source.endpoint !== endpointKey(c)) throw new Error('请先由主人发送私聊消息完成来源核验')
    return { c, owner, row, bot: source.botId, stamp: hash([endpointKey(c), owner, row.会话, source.botId]) }
  }
  const active = (t, permission) => {
    if (stopped || !t.c.总开关 || t.c.试运行) throw new Error('请开启总开关并关闭试运行')
    if (permission && t.c[permission] !== true) throw new Error('此项 QQ 操作权限已关闭')
  }
  const verify = async (t, permission, signal) => {
    active(t, permission)
    const login = await call(t.c, 'get_login_info', {}, signal)
    const fresh = target()
    active(fresh, permission)
    if (fresh.stamp !== t.stamp || String(login?.user_id) !== t.bot) throw new Error('QQ 账号、主人或绑定已变化，本次操作取消')
  }
  const authorize = (agent, messageId = latestUserId(agent?.session)) => {
    const t = target()
    if (!agent || findAgent(t.row.会话) !== agent || sessionKey(agent.session?.id) !== sessionKey(t.row.会话)) throw new Error('仅主人绑定的大肥鱼会话可调用')
    const scope = qqScope(home, t.row.会话, settings(), messageId)
    if (!scope?.owner || scope.blocked) throw new Error('仅接受主人本轮可信 QQ 私聊授权')
    return t
  }
  const sendOwner = async (t, message, permission) => {
    await verify(t, permission)
    await call(t.c, 'send_private_msg', { user_id: Number(t.owner), message: [{ type: 'text', data: { text: message } }] })
  }
  const permissionFor = item => item.kind === 'friend' ? '好友申请审批' : '群邀请审批'
  const publicItem = ({ id, kind, user, group, comment, status, createdAt, notifiedAt }) => ({
    id, kind, user, group, comment, createdAt, notifiedAt,
    status: status === 'pending' && now() - createdAt > DAY ? 'expired' : status,
  })
  const view = () => {
    try {
      const t = target()
      return { ok: true, owner: t.owner, session: t.row.会话, requests: read().filter(item => item.stamp === t.stamp).map(publicItem) }
    } catch (e) { return { ok: true, owner: String(settings().qqOwner || ''), requests: [], setupError: e.message } }
  }
  const capture = event => {
    if (event?.post_type !== 'request' || stopped) return false
    const kind = event.request_type === 'friend' ? 'friend' : event.request_type === 'group' && event.sub_type === 'invite' ? 'group' : null
    if (!kind) return false
    if (config()[permissionFor({ kind })] !== true) return false
    const t = target()
    active(t, permissionFor({ kind }))
    const flag = String(event.flag || ''), user = String(event.user_id || ''), group = String(event.group_id || '')
    if (String(event.self_id) !== t.bot || !flag || flag.length > 1024 || !/^\d+$/.test(user) || (kind === 'group' && !/^\d+$/.test(group))) return false
    const id = hash([t.stamp, kind, flag]).slice(0, 12).toUpperCase()
    const items = read()
    if (items.some(item => item.id === id)) return false
    const kept = items.filter(item => now() - item.createdAt < 7 * DAY || item.status === 'processing')
    if (kept.length >= 200) throw new Error('申请记录已满，请处理已有申请')
    kept.push({ id, kind, flag, user, group, comment: text(event.comment), stamp: t.stamp, createdAt: now(), status: 'pending', notifiedAt: 0 })
    save(kept)
    return true
  }
  const notifyNext = async () => {
    if (notifying || stopped || now() < nextNotice) return
    notifying = true
    try {
      const t = target()
      active(t)
      const item = read().find(row => row.stamp === t.stamp && row.status === 'pending' && !row.notifiedAt && t.c[permissionFor(row)])
      if (!item) return
      if (now() - item.createdAt > DAY) { update(item.id, { status: 'expired' }); return }
      await verify(t, permissionFor(item))
      const detail = item.kind === 'friend' ? `QQ ${item.user} 申请添加我为好友` : `QQ ${item.user} 邀请我加入群 ${item.group}`
      await sendOwner(t, `主人，${detail}，可以接受吗？\n对方填写的留言：${JSON.stringify(item.comment)}\n申请编号 ${item.id}\n同意请单独回复：同意申请 ${item.id}\n拒绝请单独回复：拒绝申请 ${item.id}\n授权在收到申请后 24 小时内有效。`, permissionFor(item))
      update(item.id, { notifiedAt: now() })
    } catch (e) { log('QQ 申请询问暂未完成：' + e.message) }
    finally { nextNotice = now() + 5000; notifying = false }
  }
  const handleOwnerReply = async ({ session, messageId, text: message }) => {
    const match = /^(同意|拒绝)申请\s+([A-F0-9]{12})$/i.exec(String(message || '').trim())
    if (!match) return null
    const agent = findAgent(session)
    let t
    try { t = authorize(agent, messageId) } catch { return null }
    const id = match[2].toUpperCase(), item = read().find(row => row.id === id && row.stamp === t.stamp)
    let messageText
    try {
      if (!item) throw new Error('申请不存在或所属账号、主人绑定已变化')
      if (item.status !== 'pending') throw new Error('该申请已处理或结果待核验，请查看账号与申请页面')
      if (!item.notifiedAt) throw new Error('该申请尚未完成询问，请稍后再授权')
      if (now() - item.createdAt > DAY) { update(id, { status: 'expired' }); throw new Error('授权已过期，请在 QQ 中核查申请') }
      await verify(t, permissionFor(item))
      // 最后一次 await 后重新读盘并占用，避免重复回复并发审批。
      if (read().find(row => row.id === id)?.status !== 'pending') throw new Error('该申请正在处理')
      update(id, { status: 'processing', decisionMessage: messageId })
      const approve = match[1] === '同意'
      try {
        await call(t.c, item.kind === 'friend' ? 'set_friend_add_request' : 'set_group_add_request', {
          flag: item.flag, approve, ...(item.kind === 'group' ? { sub_type: 'invite' } : {}),
        })
        update(id, { status: approve ? 'approved' : 'rejected', decidedAt: now() })
        messageText = `申请 ${id} 已${approve ? '同意' : '拒绝'}。`
      } catch (e) {
        update(id, { status: 'uncertain', decidedAt: now() })
        throw new Error('后端未确认处理结果，请在 QQ 核查，不会自动重复审批。' + e.message)
      }
    } catch (e) { messageText = e.message }
    try { await sendOwner(t, messageText) } catch (e) { log('QQ 审批结果通知失败：' + e.message) }
    return { ok: true, message: messageText }
  }
  const makeTool = (agent, name, description, parameters, permission, run) => ({
    name, description, parameters: { type: 'object', properties: parameters, required: Object.keys(parameters), additionalProperties: false },
    output: { schema: { type: 'object', additionalProperties: true }, render: (_args, value) => [{ type: 'text', text: JSON.stringify(value) }] },
    async execute(args, exec) {
      try {
        if (exec?.agent !== agent) throw new Error('此工具仅授权给主人绑定的大肥鱼会话')
        const t = authorize(agent)
        await verify(t, permission, exec.signal)
        return await run(args, exec, t)
      } catch (e) { return { ok: false, message: e.message } }
    },
  })
  const tools = agent => [
    makeTool(agent, 'qq_set_signature', '修改机器人自己的 QQ 个性签名。仅主人可信私聊且设置开关已开启时可用。', { signature: { type: 'string', maxLength: 255 } }, '允许改签名', async (args, exec, t) => {
      if (typeof args.signature !== 'string' || args.signature.length > 255) throw new Error('个性签名最多 255 个字符')
      await verify(t, '允许改签名', exec.signal)
      await call(t.c, 'set_self_longnick', { longNick: args.signature }, exec.signal)
      return { ok: true, message: 'QQ 个性签名已修改' }
    }),
    makeTool(agent, 'qq_set_avatar', '修改机器人自己的 QQ 头像。image 填图片直链或本地图片路径。仅主人可信私聊且设置开关已开启时可用。', { image: { type: 'string', maxLength: 4096 } }, '允许改头像', async (args, exec, t) => {
      if (typeof args.image !== 'string' || !args.image.trim() || args.image.length > 4096) throw new Error('请提供有效的头像图片')
      const file = await loadAvatar(args.image, t.row.会话, exec.signal)
      await verify(t, '允许改头像', exec.signal)
      await call(t.c, 'set_qq_avatar', { file }, exec.signal)
      return { ok: true, message: 'QQ 头像已修改' }
    }),
    makeTool(agent, 'qq_pending_requests', '查看待主人处理的好友申请与群聊邀请。必须询问主人，并让主人单独回复“同意申请 编号”或“拒绝申请 编号”。工具不能代替主人授权。', {}, null, async () => view()),
  ]
  const unmount = () => { for (const off of mounted?.off || []) off?.(); mounted = null }
  const tick = () => {
    try {
      const t = target(), agent = enabled(t.c) && findAgent(t.row.会话)
      if (!agent?.ctx?.tools?.register || mounted?.agent !== agent || mounted?.stamp !== t.stamp) unmount()
      if (!stopped && agent?.ctx?.tools?.register && !mounted) {
        mounted = { agent, stamp: t.stamp, off: [] }
        for (const tool of tools(agent)) mounted.off.push(agent.ctx.tools.register(tool))
      }
    } catch { unmount() }
    if (config().好友申请审批 || config().群邀请审批) void notifyNext()
  }
  return { capture, handleOwnerReply, tick, view, stop() { stopped = true; unmount() } }
}
