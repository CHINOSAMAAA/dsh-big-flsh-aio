function FishStickers({ notify, mode = 'full', onOpenFiles }) {
  const React = require('react'), h = React.createElement
  const [data, setData] = React.useState(null), [busy, setBusy] = React.useState(false), [error, setError] = React.useState('')
  const [query, setQuery] = React.useState(''), [category, setCategory] = React.useState('')
  const fileRef = React.useRef(null), batchRef = React.useRef(null), tagList = React.useId()
  const [file, setFile] = React.useState(null), [tags, setTags] = React.useState(''), [importStatus, setImportStatus] = React.useState('')
  const [libraryOpen, setLibraryOpen] = React.useState(false), [selected, setSelected] = React.useState(null)
  const base = '/dsh-qq-bridge/stickers'
  const load = async (path = '', body) => {
    const response = await fetch(base + path, { cache: 'no-store', ...(body === undefined ? {} : { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }) })
    const result = await response.json()
    if (!response.ok || !result.ok) throw new Error(result.说 || result.error || '表情库请求失败')
    setData(result); return result
  }
  React.useEffect(() => {
    load().catch(e => setError(e.message))
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
  const uploadFiles = async (files, batch = false) => {
    if (!files.length) return
    if (files.length > 500) { setError('一次最多选择 500 张表情'); return }
    setBusy(true); setError(''); let done = 0; const failed = []
    try {
      for (const [index, image] of files.entries()) {
        setImportStatus('正在导入 ' + (index + 1) + ' / ' + files.length + '…')
        try {
          if (!image.size || image.size > 8 * 1048576) throw new Error('单张图片须为 1 字节～8 MB')
          const base64 = await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result).split(',')[1]); reader.onerror = () => reject(new Error('读取图片失败')); reader.readAsDataURL(image) })
          await load('/import', { base64, tags: batch ? '' : tags, scope: '' }); done++
        } catch (e) { failed.push(image.name + '：' + e.message) }
      }
      setImportStatus('导入完成：' + done + ' / ' + files.length + ' 张已入库，正在排队识别、命名和分类。' + (failed.length ? '失败 ' + failed.length + ' 张。' : ''))
      if (failed.length) setError(failed.join('\n'))
      if (!batch && done) { setFile(null); setTags(''); if (fileRef.current) fileRef.current.value = '' }
      if (done) notify?.('表情已入库，正在排队处理', { tone: 'success' })
    } finally { setBusy(false); if (batchRef.current) batchRef.current.value = '' }
  }
  const openFolder = async () => {
    setBusy(true); setError('')
    try {
      const response = await fetch('/dsh-qq-bridge/open-folder', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ kind: 'stickers' }) })
      const result = await response.json().catch(() => null)
      if (!response.ok || !result?.ok) throw new Error(result?.说 || '打开文件夹失败')
      notify?.('已打开本地文件夹', { tone: 'success' })
    } catch (e) { setError(e.message) } finally { setBusy(false) }
  }
  const sw = (key, label, note) => h('div', { className: 'fish-form-row' }, h('div', { className: 'fish-form-label' }, label), h('div', { className: 'fish-control' },
    h('input', { type: 'checkbox', role: 'switch', 'aria-label': label, checked: !!data.settings[key], disabled: busy, onChange: async e => { const value = e.target.checked, previous = data.settings[key]; setData(old => ({ ...old, settings: { ...old.settings, [key]: value } })); if (!await act('/settings', { [key]: value })) setData(old => ({ ...old, settings: { ...old.settings, [key]: previous } })) } }), h('p', { className: 'fish-muted' }, note)))
  const tagGroups = fishStickerTagGroups(data?.items || [])
  const activeTag = tagGroups.some(x => x.id === category) ? category : 'all'
  const filtered = (data?.items || []).filter(x => fishStickerInTag(x, activeTag) && [x.name,...x.tags,...x.scenes].join(' ').toLowerCase().includes(query.toLowerCase()))
  const preview = data?.items.find(x => x.id === selected)
  React.useEffect(() => { if (selected && !preview) setSelected(null) }, [selected, Boolean(preview)])
  if (!data) return h('p', { role: 'status' }, error || '正在读取表情库…')
  const 存储提示 = data.storage?.path ? '素材原图目录：' + data.storage.path : (data.storage?.error && !/工作区/.test(data.storage.error) ? data.storage.error : '素材原图目录暂不可用。')
  const tagPrefix = tags.match(/^.*[,，、;；]/)?.[0] || ''
  const 自动化卡 = h('section', { className: 'fish-card' }, h('h2', null, '表情包自动化'),
    sw('autoSend', '根据语境自动发送表情', '每轮最多附一张，已有图片时不追加。使用目标会话模型判断是否合适，会产生模型用量；没有合适素材或判断失败时不发图。遵守 QQ 试运行与收发开关，全部表情在所有聊天共享。'),
    sw('autoCollect', '自动收藏收到的表情', '从已启用绑定的聊天中自动收藏 QQ 大表情、表情图片和 GIF；无需触发模型回复，所有聊天共享素材库，原文件按来源与内容去重。不会重新扫描启动前的历史记录。'),
    sw('collectAllImages', '同时收藏普通图片', '默认关闭，避免把普通照片收进素材库；只对自动收藏生效。'),
    sw('autoTag', '自动给新表情打标签', '自动收藏的表情直接调用当前 DeepSeek 模型标注；手动导入和扫描补标签也直接调用模型，已有手动标签不会被覆盖，会产生模型用量。'),
    sw('autoClassify', '自动分类表情包', '按视觉结果和标签、场景自动归类，手动选定的分类保持不变。手动导入及扫描识别完成后自动分类。'),
    data.collection?.error ? h('p', { role: 'status', className: 'fish-message' }, data.collection.error) : null,
    h('label', null, '自动发送冷却（秒） ', h('input', { type: 'number', min: 10, max: 86400, 'aria-label': '自动发送冷却', defaultValue: data.settings.cooldownSeconds, disabled: busy, onBlur: e => act('/settings', { cooldownSeconds: Number(e.target.value) }) })),
    h('p', { className: 'fish-muted', role: data.storage?.error && !/工作区/.test(data.storage.error) ? 'status' : undefined }, 存储提示))

  const 素材库按钮 = h('button', { type: 'button', className: 'fish-button fish-primary', onClick: () => {
    if (typeof onOpenFiles === 'function') { onOpenFiles(); return }
    setLibraryOpen(true); load().catch(e => setError(e.message))
  } }, '打开表情包素材库')
  const 素材库弹窗 = h(FishStickerDialog, { open: libraryOpen, onClose: () => { setLibraryOpen(false); setSelected(null) }, title: '表情包素材库' },
    h('div', { className: 'fish-actions' },
      h('button', { type: 'button', className: 'fish-button fish-primary', disabled: busy || !!data.tagging?.pending || !data.items.some(x => !x.tags.length), onClick: () => act('/tag', { onlyUntagged: true }) }, '扫描并识别未分类表情包'),
      h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: () => load().catch(e => setError(e.message)) }, '刷新素材库')),
    h('p', { className: 'fish-muted', role: 'status' }, data.tagging?.pending ? '正在处理 ' + data.tagging.pending + ' 张表情，可关闭窗口，任务继续运行。' : '扫描未分类素材，优先复用已有分类，识别原图格式并重命名文件；直接调用 DeepSeek，会产生模型用量。'),
    h('label', null, '搜索名称、标签和场景 ', h('input', { value: query, onChange: e => setQuery(e.target.value), 'aria-label': '搜索表情' })),
    h('div', { className: 'fish-actions fish-sticker-tags', role: 'group', 'aria-label': '表情标签筛选' }, ...tagGroups.map(tag => h('button', { type: 'button', key: tag.id, className: 'fish-button' + (activeTag === tag.id ? ' fish-primary' : ''), 'aria-pressed': activeTag === tag.id, onClick: () => setCategory(tag.id) }, tag.name + '（' + tag.count + '）'))),
    h('div', { className: 'fish-sticker-grid' }, ...filtered.map(item => h('article', { className: 'fish-sticker-tile', key: item.id },
      h('button', { className: 'fish-sticker-thumb', type: 'button', 'aria-label': '预览 ' + item.name, onClick: () => setSelected(item.id) }, h('img', { src: item.url, alt: '', loading: 'lazy', width: 144, height: 120 })),
      h('h3', null, item.name), h('p', { className: 'fish-muted' }, item.tags.length ? item.tags.join(' · ') : '未分类')))),
    filtered.length ? null : h('p', { className: 'fish-muted' }, data.items.length ? '当前标签或搜索下没有表情。' : '素材库为空，可关闭窗口后导入表情包。'),
    error ? h('p', { className: 'fish-message', role: 'alert' }, error) : null)
  const 预览弹窗 = h(FishStickerDialog, { open: Boolean(preview) && libraryOpen, onClose: () => setSelected(null), title: '表情预览与编辑' },
    preview ? h(FishStickerCard, { key: preview.id, item: preview, busy, act, categories: data.categories }) : null,
    error ? h('p', { className: 'fish-message', role: 'alert' }, error) : null)

  if (mode === 'settings') {
    return h('div', { className: 'fish-settings-stack fish-stickers' },
      h('style', null, FISH_STICKER_CSS),
      自动化卡,
      素材库按钮,
      素材库弹窗,
      预览弹窗,
      !libraryOpen && error ? h('p', { className: 'fish-message', role: 'alert', style: { whiteSpace: 'pre-wrap' } }, error) : null)
  }

  if (mode === 'files') {
    return h('div', { className: 'fish-settings-stack fish-stickers' },
      h('style', null, FISH_STICKER_CSS),
      h('section', { id: 'fish-sticker-files-card', className: 'fish-card fish-sticker-files' },
        h('h2', null, '表情包'),
        h('p', { className: 'fish-muted', role: data.storage?.error && !/工作区/.test(data.storage.error) ? 'status' : undefined }, 存储提示),
        h('input', { ref: fileRef, type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp', hidden: true, style: { display: 'none' }, 'aria-label': '单张表情文件', onChange: e => { const f = e.target.files?.[0]; if (f) uploadFiles([f], false) } }),
        h('input', { ref: batchRef, type: 'file', multiple: true, accept: '.png,.jpg,.jpeg,.gif,.webp', hidden: true, style: { display: 'none' }, 'aria-label': '批量表情文件', onChange: e => uploadFiles(Array.from(e.target.files || []), true) }),
        h('div', { className: 'fish-actions' },
          h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: openFolder }, '打开本地文件夹'),
          h('button', { type: 'button', className: 'fish-button', onClick: () => { setLibraryOpen(true); load().catch(e => setError(e.message)) } }, '管理素材库（' + data.items.length + '）'),
          h('button', { type: 'button', className: 'fish-button', disabled: busy || !!data.storage?.error, onClick: () => fileRef.current?.click() }, '单张导入'),
          h('button', { type: 'button', className: 'fish-button', disabled: busy || !!data.storage?.error, onClick: () => batchRef.current?.click() }, '批量导入')),
        h('p', { className: 'fish-muted' }, '单张 / 批量导入会直接调用当前 DeepSeek 模型进行识别、命名和分类。'),
        importStatus ? h('p', { role: 'status', className: 'fish-muted' }, importStatus) : null,
        data.tagging?.pending ? h('p', { role: 'status', className: 'fish-muted' }, '正在识别 ' + data.tagging.pending + ' 张表情，处理完成后可在素材库中查看。') : null,
        !libraryOpen && error ? h('p', { className: 'fish-message', role: 'alert', style: { whiteSpace: 'pre-wrap' } }, error) : null),
      素材库弹窗,
      预览弹窗)
  }

  return h('div', { className: 'fish-settings-stack fish-stickers' },
    h('style', null, FISH_STICKER_CSS),
    h('section', { className: 'fish-card' }, h('h2', null, '表情包自动化'),
      sw('autoSend', '根据语境自动发送表情', '每轮最多附一张，已有图片时不追加。使用目标会话模型判断是否合适，会产生模型用量；没有合适素材或判断失败时不发图。遵守 QQ 试运行与收发开关，全部表情在所有聊天共享。'),
      sw('autoCollect', '自动收藏收到的表情', '从已启用绑定的聊天中自动收藏 QQ 大表情、表情图片和 GIF；无需触发模型回复，所有聊天共享素材库，原文件按来源与内容去重。不会重新扫描启动前的历史记录。'),
      sw('collectAllImages', '同时收藏普通图片', '默认关闭，避免把普通照片收进素材库；只对自动收藏生效。'),
      sw('autoTag', '自动给新表情打标签', '自动收藏的表情直接调用当前 DeepSeek 模型标注；手动导入和扫描补标签也直接调用模型，已有手动标签不会被覆盖，会产生模型用量。'),
      sw('autoClassify', '自动分类表情包', '按视觉结果和标签、场景自动归类，手动选定的分类保持不变。手动导入及扫描识别完成后自动分类。'),
      data.collection?.error ? h('p', { role: 'status', className: 'fish-message' }, data.collection.error) : null,
      h('label', null, '自动发送冷却（秒） ', h('input', { type: 'number', min: 10, max: 86400, 'aria-label': '自动发送冷却', defaultValue: data.settings.cooldownSeconds, disabled: busy, onBlur: e => act('/settings', { cooldownSeconds: Number(e.target.value) }) })),
      h('p', { className: 'fish-muted', role: data.storage?.error && !/工作区/.test(data.storage.error) ? 'status' : undefined }, 存储提示)),
    h('button', { type: 'button', className: 'fish-button fish-primary', onClick: () => { setLibraryOpen(true); load().catch(e => setError(e.message)) } }, '打开表情包素材库（' + data.items.length + '）'),
    h('section', { className: 'fish-card fish-sticker-import' }, h('h2', null, '单张导入'),
      h('label', null, '图片文件 ', h('input', { ref: fileRef, type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp', disabled: busy, onChange: e => setFile(e.target.files?.[0] || null) })),
      h('label', null, '标签 ', h('input', { 'aria-label': '导入标签', value: tags, list: tagList, placeholder: '选择已有标签或输入新标签，多个用逗号分隔', disabled: busy, onChange: e => setTags(e.target.value) })),
      h('datalist', { id: tagList }, ...tagGroups.filter(t => t.id.startsWith('tag:')).map(t => h('option', { key: t.id, value: tagPrefix + t.id.slice(4) }))),
      h('p', { className: 'fish-muted' }, '支持 PNG、JPEG、GIF、WebP，单张最多 8 MB。标签留空则自动识别；DeepSeek 自动生成“标签-图片描述”短名称、使用场景和分类。'),
      h('button', { type: 'button', className: 'fish-button fish-primary', disabled: busy || !file || !!data.storage?.error, onClick: () => uploadFiles([file]) }, '导入单张表情')),
    h('section', { className: 'fish-card' }, h('h2', null, '批量导入'),
      h('input', { ref: batchRef, type: 'file', multiple: true, accept: '.png,.jpg,.jpeg,.gif,.webp', hidden: true, style: { display: 'none' }, 'aria-label': '批量表情文件', onChange: e => uploadFiles(Array.from(e.target.files || []), true) }),
      h('button', { type: 'button', className: 'fish-button fish-primary', disabled: busy || !!data.storage?.error, onClick: () => batchRef.current?.click() }, '批量导入表情包')),
    importStatus ? h('p', { role: 'status', className: 'fish-muted' }, importStatus) : null,
    data.tagging?.pending ? h('p', { role: 'status', className: 'fish-muted' }, '正在识别 ' + data.tagging.pending + ' 张表情，处理完成后可在素材库中查看。') : null,
    h(FishStickerDialog, { open: libraryOpen, onClose: () => { setLibraryOpen(false); setSelected(null) }, title: '表情包素材库' },
      h('div', { className: 'fish-actions' },
        h('button', { type: 'button', className: 'fish-button fish-primary', disabled: busy || !!data.tagging?.pending || !data.items.some(x => !x.tags.length), onClick: () => act('/tag', { onlyUntagged: true }) }, '扫描并识别未分类表情包'),
        h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: () => load().catch(e => setError(e.message)) }, '刷新素材库')),
      h('p', { className: 'fish-muted', role: 'status' }, data.tagging?.pending ? '正在处理 ' + data.tagging.pending + ' 张表情，可关闭窗口，任务继续运行。' : '扫描未分类素材，优先复用已有分类，识别原图格式并重命名文件；直接调用 DeepSeek，会产生模型用量。'),
      h('label', null, '搜索名称、标签和场景 ', h('input', { value: query, onChange: e => setQuery(e.target.value), 'aria-label': '搜索表情' })),
      h('div', { className: 'fish-actions fish-sticker-tags', role: 'group', 'aria-label': '表情标签筛选' }, ...tagGroups.map(tag => h('button', { type: 'button', key: tag.id, className: 'fish-button' + (activeTag === tag.id ? ' fish-primary' : ''), 'aria-pressed': activeTag === tag.id, onClick: () => setCategory(tag.id) }, tag.name + '（' + tag.count + '）'))),
      h('div', { className: 'fish-sticker-grid' }, ...filtered.map(item => h('article', { className: 'fish-sticker-tile', key: item.id },
        h('button', { className: 'fish-sticker-thumb', type: 'button', 'aria-label': '预览 ' + item.name, onClick: () => setSelected(item.id) }, h('img', { src: item.url, alt: '', loading: 'lazy', width: 144, height: 120 })),
        h('h3', null, item.name), h('p', { className: 'fish-muted' }, item.tags.length ? item.tags.join(' · ') : '未分类')))),
      filtered.length ? null : h('p', { className: 'fish-muted' }, data.items.length ? '当前标签或搜索下没有表情。' : '素材库为空，可关闭窗口后导入表情包。'),
      error ? h('p', { className: 'fish-message', role: 'alert' }, error) : null),
    h(FishStickerDialog, { open: Boolean(preview) && libraryOpen, onClose: () => setSelected(null), title: '表情预览与编辑' },
      preview ? h(FishStickerCard, { key: preview.id, item: preview, busy, act, categories: data.categories }) : null,
      error ? h('p', { className: 'fish-message', role: 'alert' }, error) : null),
    !libraryOpen && error ? h('p', { className: 'fish-message', role: 'alert', style: { whiteSpace: 'pre-wrap' } }, error) : null)
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
    h('div', { className: 'fish-sticker-dialog-body' }, children))
}
const FISH_STICKER_CSS = `
.big-fish .fish-stickers label{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin:12px 0}
.big-fish .fish-stickers .fish-form-row{display:flex;flex-wrap:wrap;align-items:center;gap:12px;padding:12px 0}
.big-fish .fish-stickers label>input:not([role=switch]),.big-fish .fish-stickers label>select{flex:1 1 240px;min-width:0;max-width:100%}
.big-fish .fish-stickers .fish-muted,.big-fish .fish-stickers .fish-message{overflow-wrap:anywhere}
.big-fish .fish-stickers article{display:grid;gap:12px;margin-top:16px}
.big-fish .fish-stickers article label{margin:0}
.big-fish .fish-stickers .fish-actions{display:flex;flex-wrap:wrap;gap:12px}
.big-fish .fish-sticker-dialog{width:min(1040px,calc(100vw - 32px));max-width:calc(100vw - 32px);max-height:calc(100dvh - 40px);padding:0 0 18px;overflow:hidden;border:1px solid var(--fish-border);border-radius:24px;background:var(--fish-panel);box-shadow:var(--fish-shadow);color:var(--fish-text);font-family:var(--fish-font)}
.big-fish .fish-sticker-dialog[open]{display:flex;flex-direction:column}
.big-fish .fish-sticker-dialog-body{min-height:0;overflow:auto;padding:0 24px 8px;overscroll-behavior:contain}
.big-fish .fish-sticker-dialog:not([open]){display:none}
.big-fish .fish-sticker-dialog::backdrop{background:rgba(8,16,32,.65);backdrop-filter:blur(3px)}
.big-fish .fish-sticker-dialog-header{display:flex;align-items:center;justify-content:space-between;gap:16px;flex:none;padding:24px 24px 16px}
.big-fish .fish-sticker-dialog-header h2{margin:0}
.big-fish .fish-sticker-tags{margin:16px 0}
.big-fish .fish-sticker-tags .fish-button{min-width:0;overflow-wrap:anywhere}
.big-fish .fish-sticker-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,160px),1fr));gap:16px}
.big-fish .fish-sticker-tile{min-width:0;border:1px solid var(--fish-border);border-radius:12px;padding:12px;background:var(--fish-surface)}
.big-fish .fish-sticker-tile h3,.big-fish .fish-sticker-tile p{margin:0;overflow-wrap:anywhere}
.big-fish .fish-sticker-thumb{width:100%;padding:4px;border:0;border-radius:8px;background:var(--fish-soft);cursor:zoom-in}
.big-fish .fish-sticker-thumb img{display:block;width:100%;height:120px;object-fit:contain}
.big-fish .fish-sticker-preview-image{display:block;width:100%;height:min(45dvh,400px);object-fit:contain;background:var(--fish-soft);border-radius:12px}
@media(max-width:520px){.big-fish .fish-sticker-dialog-header{padding:16px}.big-fish .fish-sticker-dialog-body{padding:0 16px 8px}.big-fish .fish-sticker-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.big-fish .fish-sticker-dialog-header h2{font-size:20px}}
`

function FishStickerCard({ item, busy, act, categories }) {
  const React = require('react'), h = React.createElement
  const [dirty,setDirty] = React.useState(false)
  const [name,setName] = React.useState(item.name), [tags,setTags] = React.useState(item.tags.join(',')), [scenes,setScenes] = React.useState(item.scenes.join(','))
  React.useEffect(() => { if (!dirty) { setName(item.name); setTags(item.tags.join(',')); setScenes(item.scenes.join(',')) } }, [dirty, item.name, item.tags.join(','), item.scenes.join(',')])
  return h('article', { className: 'qq-bind-detail' },
    h('img', { className: 'fish-sticker-preview-image', src: item.url, alt: item.name }),
    h('p', { className: 'fish-muted' }, '文件类型 · ' + (item.ext === 'jpg' ? 'JPEG' : item.ext.toUpperCase()) + (item.fileName ? ' · ' + item.fileName : '')),
    h('label', {className:'fish-form-row'}, '分类 ', h('select', { 'aria-label': item.id+' 分类', value:item.categorySource==='manual'?item.category:'',disabled:busy,onChange:e=>act('/edit',{id:item.id,category:e.target.value}) }, h('option',{value:''}, '自动归类 · '+(item.category || '未分类')), ...(categories || []).map(c=>h('option',{key:c,value:c},c)))),
    h('p', { className: 'fish-muted', role: 'status' }, '标签状态：' + ({pending:'等待处理',running:'识别中',complete:'已完成',error:'失败',cancelled:'已取消'}[item.tagStatus] || '未自动标注') + (item.tagError ? ' · '+item.tagError : '')),
    h('button', { type:'button',className:'fish-button',disabled:busy || ['pending','running'].includes(item.tagStatus),onClick:()=>act('/tag',{id:item.id}) }, '识别 / 重试标签'),
    h('p', { className: 'fish-muted' }, '共享素材（所有聊天可用）'),
    ...[['名称',name,setName],['标签',tags,setTags],['场景',scenes,setScenes]].map(([label,value,set]) => h('label', { key: label, className: 'fish-form-row' }, label, h('input', { 'aria-label': item.id + ' ' + label, value, disabled: busy, onChange: e => { setDirty(true); set(e.target.value) } }))),
    h('div', { className: 'fish-actions' }, h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: async () => { if (await act('/edit', { id: item.id, name, tags, scenes })) setDirty(false) } }, '保存素材描述'),
      h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: () => { if (window.confirm('删除这张表情及其本地原文件？')) act('/remove', { id: item.id }) } }, '删除表情')))
}
