import { existsSync, mkdirSync, readFileSync, renameSync, statSync, unlinkSync, realpathSync } from 'node:fs'
import { open, rm } from 'node:fs/promises'
import { join, extname, relative, isAbsolute } from 'node:path'
import { createHash, randomUUID } from 'node:crypto'
import { writeFileAtomicSync } from './atomic-file.mjs'
import { qqFileName } from './inbound-files.mjs'
import { createWorkspaceBinding } from './workspace.mjs'
import { qqScope, libraryId, latestUserId } from '../../memory/lib/qq-scope.mjs'
import { bindingSource } from './memory-sources.mjs'

const kinds = { images: { folder: 'QQ图片', flag: '图片存储' }, files: { folder: 'QQ文件', flag: '文件存储' } }
const validId = id => /^[a-f0-9]{64}$/.test(String(id))
export function createMediaStorage({ home, workspace = createWorkspaceBinding({ home }), sessionFor = () => null }) {
  const directory = kind => {
    if (!kinds[kind]) throw new Error('无效存储类型')
    return join(workspace.directory(), kinds[kind].folder)
  }
  const settings = () => {
    try { return JSON.parse(readFileSync(join(home, 'fish-memory-config.json'), 'utf8')) }
    catch (e) { if (e.code === 'ENOENT') return {}; throw e }
  }
  const scopeFor = session => {
    const scope = qqScope(home, session, settings(), latestUserId(sessionFor(session)))
    if (!scope || scope.blocked) throw new Error('QQ 来源未知或绑定歧义，无法访问归档')
    return scope
  }
  const itemLibrary = item => {
    // 旧归档从桥接层登记的来源恢复授权，来源缺失时拒绝跨聊天读取。
    const source = item.qqSource || (item.session && bindingSource(home, {
      会话: item.session, 类型: item.source?.split(' ')[0], 号码: item.source?.split(' ')[1],
    }))
    if (!source || !/^\d+$/.test(source.botId) || !/^\d+$/.test(source.chatId) || !['私聊', '群'].includes(source.type)) return ''
    return libraryId(source.botId, source.type, source.chatId, settings().qqIsolatedGroups || [])
  }
  const read = dir => {
    const path = join(dir, 'catalog.json')
    if (!existsSync(path)) return []
    const items = JSON.parse(readFileSync(path, 'utf8'))
    if (!Array.isArray(items) || items.some(x => !validId(x.id) || !new RegExp('^(?:qq_[0-9]+_(?:private_[0-9]+|group_[0-9]+|shared)/)?' + x.id + '(?:\\.[a-z0-9]{1,12})?$').test(x.file))) throw new Error('存储目录索引损坏，已停止操作以保护数据')
    return items
  }
  const view = config => Object.fromEntries(Object.entries(kinds).map(([kind, spec]) => {
    try {
      const path = directory(kind), items = read(path).filter(x => existsSync(join(path, x.file))).sort((a,b) => b.createdAt-a.createdAt)
      return [kind, { enabled: !!config[spec.flag], workspace: workspace.id(), path, bytes: items.reduce((n,x) => n+x.size,0), items: items.map(x => ({...x, url: '/dsh-qq-bridge/media-storage/file?kind='+kind+'&id='+x.id+'&workspace='+encodeURIComponent(workspace.id())})) }]
    } catch(e) { return [kind, { enabled: !!config[spec.flag], items: [], error: e.message }] }
  }))
  const save = async ({ kind, name, data, binding, endpoint, maxBytes, active = () => true, signal, mediaType = 'application/octet-stream' }) => {
    if (!active()) throw new Error('存储已关闭或绑定已变化')
    const scope = scopeFor(binding?.会话)
    const dir = directory(kind); mkdirSync(dir, { recursive: true })
    const staged = join(dir, '.incoming-'+randomUUID()), safeName = qqFileName({name})
    const extension = extname(safeName).toLowerCase(), suffix = /^\.[a-z0-9]{1,12}$/.test(extension) ? extension : ''
    const hash = createHash('sha256').update(JSON.stringify([kind, endpoint, scope.source.botId, binding?.类型, binding?.号码, binding?.会话]))
    let size = 0, handle, target, created = false
    const check = () => { signal?.throwIfAborted(); if (!active() || directory(kind) !== dir || scopeFor(binding?.会话).stamp !== scope.stamp) throw new Error('存储已关闭或绑定已变化') }
    try {
      handle = await open(staged, 'wx', 0o600)
      for await (const chunk of data) {
        check(); size += chunk.length
        if (size > maxBytes) throw new Error('存储内容超过接收大小上限')
        hash.update(chunk); await handle.writeFile(chunk)
      }
      await handle.sync(); await handle.close(); handle = null; check()
      const id = hash.digest('hex'), items = read(dir), existing = items.find(x => x.id === id)
      const file = existing?.file || scope.writeId+'/'+id+suffix
      mkdirSync(join(dir, scope.writeId), { recursive: true })
      target = join(dir,file)
      if (existsSync(target)) { if (statSync(target).size !== size) throw new Error('已存文件内容冲突，未覆盖') }
      else { renameSync(staged,target); created = true }
      if (!existing) {
        const item = { id, file, name: safeName, size, mediaType, createdAt: Date.now(), source: [binding?.类型,binding?.号码].filter(Boolean).join(' '), session: binding?.会话 || '', qqSource: { botId: scope.source.botId, type: scope.source.type, chatId: scope.source.chatId } }
        items.push(item)
        try { writeFileAtomicSync(join(dir,'catalog.json'),JSON.stringify(items,null,2)) }
        catch(e) { if(created) unlinkSync(target); throw e }
        return { path: target, item }
      }
      return { path: target, item: existing }
    } finally { if(handle) await handle.close(); await rm(staged,{force:true}) }
  }
  const locate = (kind,id,expectedWorkspace) => {
    if (expectedWorkspace && expectedWorkspace !== workspace.id()) throw new Error('工作区已切换，请刷新文件管理后重试')
    if (!validId(id)) throw new Error('无效存储 ID')
    const dir = directory(kind), items = read(dir), item = items.find(x => x.id === id)
    if (!item) throw new Error('已存文件不存在')
    return { dir, items, item, path: join(dir,item.file) }
  }
  const remove = (kind,id,expectedWorkspace) => {
    const {dir,items,path} = locate(kind,id,expectedWorkspace)
    if(existsSync(path)) unlinkSync(path)
    writeFileAtomicSync(join(dir,'catalog.json'),JSON.stringify(items.filter(x => x.id !== id),null,2))
  }
  const assertReadable = (path, session) => {
    const target = realpathSync(path)
    for (const entry of workspace.list()) for (const [kind, spec] of Object.entries(kinds)) {
      const root = join(entry.path, spec.folder)
      if (!existsSync(root)) continue
      const inside = relative(realpathSync(root), target)
      if (inside.split(/[\\/]/)[0] === '..' || isAbsolute(inside)) continue
      const scope = scopeFor(session)
      const item = read(root).find(x => existsSync(join(root, x.file)) && realpathSync(join(root, x.file)) === target)
      if (!item || !scope.readIds.includes(itemLibrary(item))) throw new Error('当前聊天没有此图片或文件的记忆库权限')
      return kind
    }
  }
  const register = ({route,protect,json,config,ctx}) => {
    const authorize = req => { const connection = ctx.get?.('connection'); if (!connection?.requestRejection || connection.requestRejection(req)) throw new Error('management_forbidden') }
    route('/dsh-qq-bridge/media-storage',async(req,res) => { authorize(req); if(req.method!=='GET') throw new Error('请使用 GET'); json(res,{ok:true,...view(config())}) })
    route('/dsh-qq-bridge/media-storage/file',async(req,res) => {
      authorize(req); if(req.method!=='GET') throw new Error('请使用 GET')
      const params = new URL(req.url,'http://localhost').searchParams, kind = params.get('kind')
      const {item,path} = locate(kind,params.get('id'),params.get('workspace'))
      res.setHeader('X-Content-Type-Options','nosniff'); res.setHeader('Cache-Control','no-store')
      const image = kind==='images' && /^image\/(png|jpeg|gif|webp)$/.test(item.mediaType)
      res.setHeader('Content-Type',image?item.mediaType:'application/octet-stream')
      res.setHeader('Content-Disposition',(image?'inline':'attachment')+"; filename*=UTF-8''"+encodeURIComponent(item.name))
      res.end(readFileSync(path))
    })
    route('/dsh-qq-bridge/media-storage/remove',protect(async(req,res) => {
      let body = ''; for await(const chunk of req) { body += chunk; if(Buffer.byteLength(body)>4096) throw new Error('请求过大') }
      const value = JSON.parse(body); remove(value.kind,value.id,value.workspace); json(res,{ok:true,...view(config())})
    }))
  }
  return { view, save, remove, register, assertReadable, folder: directory }
}
