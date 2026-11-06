function FishStickers({ notify }) {
  const React = require('react'), h = React.createElement
  const [data, setData] = React.useState(null), [busy, setBusy] = React.useState(false), [error, setError] = React.useState('')
  const [bindings, setBindings] = React.useState([]), [scope, setScope] = React.useState(''), [query, setQuery] = React.useState(''), [category, setCategory] = React.useState('')
  const fileRef = React.useRef(null)
  const [file, setFile] = React.useState(null), [name, setName] = React.useState(''), [tags, setTags] = React.useState(''), [scenes, setScenes] = React.useState('')
  const base = '/dsh-qq-bridge/stickers'
  const load = async (path = '', body) => {
    const response = await fetch(base + path, { cache: 'no-store', ...(body === undefined ? {} : { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }) })
    const result = await response.json()
    if (!response.ok || !result.ok) throw new Error(result.说 || result.error || '表情库请求失败')
    setData(result); return result
  }
  React.useEffect(() => {
    load().catch(e => setError(e.message))
    fetch('/dsh-qq-bridge/state', { cache: 'no-store' }).then(r => r.json()).then(r => setBindings(r.配置?.绑定 || [])).catch(e => setError(e.message))
  }, [])
  React.useEffect(() => {
    if (!data?.settings.autoCollect && !data?.tagging?.pending) return
    const timer = setInterval(() => load().catch(e => setError(e.message)), 5000)
    return () => clearInterval(timer)
  }, [data?.settings.autoCollect, data?.tagging?.pending])
  const act = async (path, body) => {
    setBusy(true); setError('')
    try { await load(path, body); notify?.('表情库已更新', { tone: 'success' }); return true }
    catch (e) { setError(e.message); return false } finally { setBusy(false) }
  }
  const upload = async () => {
    if (!file || file.size > 8 * 1048576) { setError('请选择不超过 8 MB 的图片原文件'); return }
    setBusy(true)
    try {
      const base64 = await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result).split(',')[1]); reader.onerror = () => reject(new Error('读取图片失败')); reader.readAsDataURL(file) })
      if (await act('/import', { base64, name: name || file.name, tags, scenes, scope })) { setFile(null); if (fileRef.current) fileRef.current.value = ''; setName(''); setTags(''); setScenes('') }
    } catch (e) { setError(e.message) } finally { setBusy(false) }
  }
  const sw = (key, label, note) => h('div', { className: 'fish-form-row' }, h('div', { className: 'fish-form-label' }, label), h('div', { className: 'fish-control' },
    h('input', { type: 'checkbox', role: 'switch', 'aria-label': label, checked: !!data.settings[key], disabled: busy, onChange: async e => { const value = e.target.checked, previous = data.settings[key]; setData(old => ({ ...old, settings: { ...old.settings, [key]: value } })); if (!await act('/settings', { [key]: value })) setData(old => ({ ...old, settings: { ...old.settings, [key]: previous } })) } }), h('p', { className: 'fish-muted' }, note)))
  const [libraryOpen, setLibraryOpen] = React.useState(false), [selected, setSelected] = React.useState(null)
  const tagGroups = fishStickerTagGroups(data?.items || [])
  const activeTag = tagGroups.some(x => x.id === category) ? category : 'all'
  const filtered = (data?.items || []).filter(x => fishStickerInTag(x, activeTag) && [x.name,...x.tags,...x.scenes].join(' ').toLowerCase().includes(query.toLowerCase()))
  const preview = data?.items.find(x => x.id === selected)
  React.useEffect(() => { if (selected && !preview) setSelected(null) }, [selected, Boolean(preview)])
  if (!data) return h('p', { role: 'status' }, error || '正在读取表情库…')
  const importForm = h('details', { className: 'fish-sticker-import' }, h('summary', null, '导入表情包'),
    h('p', { className: 'fish-muted' }, '支持 PNG、JPEG、GIF、WebP，每张最多 8 MB。原图按来源与内容去重。'),
    h('label', null, '图片文件 ', h('input', { ref: fileRef, type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp', disabled: busy, onChange: e => setFile(e.target.files?.[0] || null) })),
    h('label', null, '使用范围 ', h('select', { 'aria-label': '素材使用范围', value: scope, disabled: busy, onChange: e => setScope(e.target.value) }, h('option', { value: '' }, '共享素材（所有绑定可用）'), ...bindings.map(b => h('option', { key: b.会话, value: b.会话 }, b.类型 + ' ' + b.号码)))),
    ...[['名称',name,setName],['标签（逗号分隔）',tags,setTags],['使用场景（逗号分隔）',scenes,setScenes]].map(([label,value,set]) => h('label', { key: label, className: 'fish-form-row' }, label, h('input', { 'aria-label': label, value, disabled: busy, onChange: e => set(e.target.value) }))),
    h('button', { type: 'button', className: 'fish-button fish-primary', disabled: busy || !file, onClick: upload }, '导入表情'))
  return h('div', { className: 'fish-settings-stack fish-stickers' },
    h('style', null, FISH_STICKER_CSS),
    h('section', { className: 'fish-card' }, h('h2', null, '表情包自动化'),
      sw('autoSend', '根据语境自动发送表情', '每轮最多附一张，已有图片时不追加。使用目标会话模型判断是否合适，会产生模型用量；没有合适素材或判断失败时不发图。遵守 QQ 试运行、收发开关和素材来源隔离。'),
      sw('autoCollect', '自动收藏收到的表情', '从已启用绑定的聊天中自动收藏 QQ 大表情、表情图片和 GIF；无需触发模型回复，原文件按来源隔离与内容去重。不会重新扫描启动前的历史记录。'),
      sw('collectAllImages', '同时收藏普通图片', '默认关闭，避免把普通照片收进素材库；只对自动收藏生效。'),
      sw('autoTag', '自动给新表情打标签', '使用绑定会话现有的多模态模型识别图片标签及使用场景，无需额外模型；会产生模型用量。已有手动标签不会被覆盖，失败可重试。'),
      sw('autoClassify', '自动分类表情包', '按视觉结果和标签、场景自动归类，手动选定的分类保持不变。素材库按实际标签浏览。'),
      data.collection?.error ? h('p', { role: 'status', className: 'fish-message' }, data.collection.error) : null,
      h('label', null, '自动发送冷却（秒） ', h('input', { type: 'number', min: 10, max: 86400, 'aria-label': '自动发送冷却', defaultValue: data.settings.cooldownSeconds, disabled: busy, onBlur: e => act('/settings', { cooldownSeconds: Number(e.target.value) }) }))),
    h('button', { type: 'button', className: 'fish-button fish-primary', onClick: () => { setLibraryOpen(true); load().catch(e => setError(e.message)) } }, '打开表情包素材库（' + data.items.length + '）'),
    h(FishStickerDialog, { open: libraryOpen, onClose: () => { setLibraryOpen(false); setSelected(null) }, title: '表情包素材库' },
      h('div', { className: 'fish-actions' },
        h('button', { type: 'button', className: 'fish-button fish-primary', disabled: busy || !!data.tagging?.pending || !data.items.some(x => !x.tags.length), onClick: () => act('/tag', { onlyUntagged: true }) }, '扫描并识别未打标签表情'),
        h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: () => load().catch(e => setError(e.message)) }, '刷新素材库')),
      h('p', { className: 'fish-muted', role: 'status' }, data.tagging?.pending ? '正在处理 ' + data.tagging.pending + ' 张表情，可关闭窗口，任务继续运行。' : '扫描所有素材，仅识别无标签的表情；使用机器人已有模型，按队列处理并产生用量。'),
      importForm,
      h('label', null, '搜索名称、标签和场景 ', h('input', { value: query, onChange: e => setQuery(e.target.value), 'aria-label': '搜索表情' })),
      h('div', { className: 'fish-actions fish-sticker-tags', role: 'group', 'aria-label': '表情标签筛选' }, ...tagGroups.map(tag => h('button', { type: 'button', key: tag.id, className: 'fish-button' + (activeTag === tag.id ? ' fish-primary' : ''), 'aria-pressed': activeTag === tag.id, onClick: () => setCategory(tag.id) }, tag.name + '（' + tag.count + '）'))),
      h('div', { className: 'fish-sticker-grid' }, ...filtered.map(item => h('article', { className: 'fish-sticker-tile', key: item.id },
        h('button', { className: 'fish-sticker-thumb', type: 'button', 'aria-label': '预览 ' + item.name, onClick: () => setSelected(item.id) }, h('img', { src: item.url, alt: '', loading: 'lazy', width: 144, height: 120 })),
        h('h3', null, item.name), h('p', { className: 'fish-muted' }, item.tags.length ? item.tags.join(' · ') : '未分类')))),
      filtered.length ? null : h('p', { className: 'fish-muted' }, data.items.length ? '当前标签或搜索下没有表情。' : '素材库为空，可在上方导入表情包。'),
      error ? h('p', { className: 'fish-message', role: 'alert' }, error) : null),
    h(FishStickerDialog, { open: Boolean(preview) && libraryOpen, onClose: () => setSelected(null), title: '表情预览与编辑' },
      preview ? h(FishStickerCard, { key: preview.id, item: preview, busy, act, bindings, categories: data.categories }) : null,
      error ? h('p', { className: 'fish-message', role: 'alert' }, error) : null),
    !libraryOpen && error ? h('p', { className: 'fish-message', role: 'alert' }, error) : null)
}

function fishStickerInTag(item, tag) {
  return tag === 'all' || (tag === 'untagged' ? !item.tags.length : item.tags.includes(tag.slice(4)))
}
function fishStickerTagGroups(items) {
  const counts = new Map()
  for (const item of items) for (const tag of new Set(item.tags)) counts.set(tag, (counts.get(tag) || 0) + 1)
  return [{ id: 'all', name: '全部', count: items.length }, ...[...counts].sort(([a],[b]) => a.localeCompare(b, 'zh-CN')).map(([tag,count]) => ({ id: 'tag:' + tag, name: tag === '未分类' ? '未分类（标签）' : tag, count })), { id: 'untagged', name: '未分类', count: items.filter(x => !x.tags.length).length }]
}
function FishStickerDialog({ open, onClose, title, children }) {
  const React = require('react'), h = React.createElement, ref = React.useRef(null)
  React.useEffect(() => {
    const dialog = ref.current
    if (open && !dialog.open) dialog.showModal()
    else if (!open && dialog.open) dialog.close()
  }, [open])
  return h('dialog', { ref, className: 'fish-modal-card fish-sticker-dialog fish-stickers', 'aria-label': title,
    onCancel: e => { e.preventDefault(); onClose() }, onClose,
    onClick: e => { if (e.target !== e.currentTarget) return; const r = e.currentTarget.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onClose() } },
    h('header', { className: 'fish-sticker-dialog-header' }, h('h2', null, title), h('button', { type: 'button', className: 'fish-button', onClick: onClose, 'aria-label': '关闭' + title }, '关闭')),
    children)
}
const FISH_STICKER_CSS = `
.big-fish .fish-stickers label{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin:12px 0}
.big-fish .fish-stickers .fish-form-row{display:flex;flex-wrap:wrap;align-items:center;gap:12px;padding:12px 0}
.big-fish .fish-stickers label>input:not([role=switch]),.big-fish .fish-stickers label>select{flex:1 1 240px;min-width:0;max-width:100%}
.big-fish .fish-stickers article{display:grid;gap:12px;margin-top:16px}
.big-fish .fish-stickers article label{margin:0}
.big-fish .fish-stickers .fish-actions{display:flex;flex-wrap:wrap;gap:12px}
.big-fish .fish-sticker-dialog{width:min(1040px,calc(100vw - 32px));max-width:calc(100vw - 32px);max-height:calc(100dvh - 40px);padding:24px;overflow:auto;border:1px solid var(--fish-border);border-radius:24px;background:var(--fish-panel);box-shadow:var(--fish-shadow);color:var(--fish-text);font-family:var(--fish-font)}
.big-fish .fish-sticker-dialog:not([open]){display:none}
.big-fish .fish-sticker-dialog::backdrop{background:rgba(8,16,32,.65);backdrop-filter:blur(3px)}
.big-fish .fish-sticker-dialog-header{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px}
.big-fish .fish-sticker-dialog-header h2{margin:0}
.big-fish .fish-sticker-import{border-block:1px solid var(--fish-border);padding:16px 0;margin:20px 0}
.big-fish .fish-sticker-tags{margin:16px 0}
.big-fish .fish-sticker-tags .fish-button{min-width:0;overflow-wrap:anywhere}
.big-fish .fish-sticker-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,160px),1fr));gap:16px}
.big-fish .fish-sticker-tile{min-width:0;border:1px solid var(--fish-border);border-radius:12px;padding:12px;background:var(--fish-surface)}
.big-fish .fish-sticker-tile h3,.big-fish .fish-sticker-tile p{margin:0;overflow-wrap:anywhere}
.big-fish .fish-sticker-thumb{width:100%;padding:4px;border:0;border-radius:8px;background:var(--fish-soft);cursor:zoom-in}
.big-fish .fish-sticker-thumb img{display:block;width:100%;height:120px;object-fit:contain}
.big-fish .fish-sticker-preview-image{display:block;width:100%;height:min(45dvh,400px);object-fit:contain;background:var(--fish-soft);border-radius:12px}
@media(max-width:520px){.big-fish .fish-sticker-dialog{padding:16px}.big-fish .fish-sticker-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.big-fish .fish-sticker-dialog-header h2{font-size:20px}}
`

function FishStickerCard({ item, busy, act, bindings, categories }) {
  const React = require('react'), h = React.createElement
  const [dirty,setDirty] = React.useState(false)
  const [name,setName] = React.useState(item.name), [tags,setTags] = React.useState(item.tags.join(',')), [scenes,setScenes] = React.useState(item.scenes.join(','))
  React.useEffect(() => { if (!dirty) { setName(item.name); setTags(item.tags.join(',')); setScenes(item.scenes.join(',')) } }, [dirty, item.name, item.tags.join(','), item.scenes.join(',')])
  const binding = bindings.find(b => b.会话 === item.scope)
  return h('article', { className: 'qq-bind-detail' },
    h('img', { className: 'fish-sticker-preview-image', src: item.url, alt: item.name }),
    h('label', {className:'fish-form-row'}, '分类 ', h('select', { 'aria-label': item.id+' 分类', value:item.categorySource==='manual'?item.category:'',disabled:busy,onChange:e=>act('/edit',{id:item.id,category:e.target.value}) }, h('option',{value:''}, '自动归类 · '+(item.category || '未分类')), ...(categories || []).map(c=>h('option',{key:c,value:c},c)))),
    h('p', { className: 'fish-muted', role: 'status' }, '标签状态：' + ({pending:'等待处理',running:'识别中',complete:'已完成',error:'失败',cancelled:'已取消'}[item.tagStatus] || '未自动标注') + (item.tagError ? ' · '+item.tagError : '')),
    h('button', { type:'button',className:'fish-button',disabled:busy || ['pending','running'].includes(item.tagStatus),onClick:()=>act('/tag',{id:item.id}) }, '识别 / 重试标签'),
    h('p', { className: 'fish-muted' }, item.scope ? (binding ? binding.类型 + ' ' + binding.号码 : '原来源绑定已移除') : '共享素材'),
    ...[['名称',name,setName],['标签',tags,setTags],['场景',scenes,setScenes]].map(([label,value,set]) => h('label', { key: label, className: 'fish-form-row' }, label, h('input', { 'aria-label': item.id + ' ' + label, value, disabled: busy, onChange: e => { setDirty(true); set(e.target.value) } }))),
    h('div', { className: 'fish-actions' }, h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: async () => { if (await act('/edit', { id: item.id, name, tags, scenes })) setDirty(false) } }, '保存素材描述'),
      h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: () => { if (window.confirm('删除这张表情及其本地原文件？')) act('/remove', { id: item.id }) } }, '删除表情')))
}
