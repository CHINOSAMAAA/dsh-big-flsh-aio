function FishStickers({ notify }) {
  const React = require('react'), h = React.createElement
  const [data, setData] = React.useState(null), [busy, setBusy] = React.useState(false), [error, setError] = React.useState('')
  const [bindings, setBindings] = React.useState([]), [scope, setScope] = React.useState(''), [query, setQuery] = React.useState(''), [category, setCategory] = React.useState('')
  const [analysisSession, setAnalysisSession] = React.useState(''), [visionProvider, setVisionProvider] = React.useState(''), [visionModel, setVisionModel] = React.useState('')
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
  React.useEffect(() => { if (data) { setAnalysisSession(data.settings.analysisSession || ''); setVisionProvider(data.settings.visionProvider || ''); setVisionModel(data.settings.visionModel || '') } }, [data?.settings.analysisSession, data?.settings.visionProvider, data?.settings.visionModel])
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
  if (!data) return h('p', { role: 'status' }, error || '正在读取表情库…')
  return h('div', { className: 'fish-settings-stack fish-stickers' },
    h('style', null, `
.big-fish .fish-stickers label{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin:12px 0}
.big-fish .fish-stickers .fish-form-row{display:flex;flex-wrap:wrap;align-items:center;gap:12px;padding:12px 0}
.big-fish .fish-stickers label>input:not([role=switch]),.big-fish .fish-stickers label>select{flex:1 1 240px;min-width:0;max-width:100%}
.big-fish .fish-stickers article{display:grid;gap:12px;padding:20px 16px;border-top:1px solid var(--fish-border);margin-top:16px}
.big-fish .fish-stickers article label{margin:0}
.big-fish .fish-stickers article>button{justify-self:start}
.big-fish .fish-stickers .fish-actions{display:flex;flex-wrap:wrap;gap:12px}
`),
    h('section', { className: 'fish-card' }, h('h2', null, '表情包自动化'),
      sw('autoSend', '根据语境自动发送表情', '每轮最多附一张，已有图片时不追加。使用目标会话模型判断是否合适，会产生模型用量；没有合适素材或判断失败时不发图。遵守 QQ 试运行、收发开关和素材来源隔离。'),
      sw('autoCollect', '自动收藏收到的表情', '从已启用绑定的聊天中自动收藏 QQ 大表情、表情图片和 GIF；无需触发模型回复，原文件按来源隔离与内容去重。不会重新扫描启动前的历史记录。'),
      sw('collectAllImages', '同时收藏普通图片', '默认关闭，避免把普通照片收进素材库；只对自动收藏生效。'),
      sw('autoTag', '自动给新表情打标签', '导入或收藏新素材后，通过图片识别生成情绪、动作、可见文字标签及使用场景。使用支持图片的模型，会发送图片并产生用量；已有手动标签不会被覆盖，失败可重试。'),
      sw('autoClassify', '自动分类表情包', '按视觉识别结果及标签、场景自动归类。开启时整理现有素材；新增、标签生成和描述修改时继续归类。手动选定的分类保持不变，不能判断的进入未分类。'),
      data.collection?.error ? h('p', { role: 'status', className: 'fish-message' }, data.collection.error) : null,
      h('label', null, '自动发送冷却（秒） ', h('input', { type: 'number', min: 10, max: 86400, 'aria-label': '自动发送冷却', defaultValue: data.settings.cooldownSeconds, disabled: busy, onBlur: e => act('/settings', { cooldownSeconds: Number(e.target.value) }) }))),
    h('section', { className: 'fish-card' }, h('h2', null, '视觉标注模型'),
      h('label', { className: 'fish-form-row' }, '共享素材标注会话 ', h('select', { 'aria-label': '标注会话', value: analysisSession, onChange: e => setAnalysisSession(e.target.value) }, h('option', {value:''}, '请选择绑定会话'), ...bindings.map(b => h('option', {key:b.会话,value:b.会话}, b.类型+' '+b.号码)))),
      h('label', { className: 'fish-form-row' }, '视觉服务商 ID ', h('input', { 'aria-label': '视觉服务商 ID', value: visionProvider, onChange: e => setVisionProvider(e.target.value) })),
      h('label', { className: 'fish-form-row' }, '视觉模型 ', h('input', { 'aria-label': '视觉模型', value: visionModel, onChange: e => setVisionModel(e.target.value) })),
      h('p', { className: 'fish-muted' }, '服务商 ID 与模型同时留空时使用素材所属会话的模型；共享素材使用上方标注会话。GIF 根据可解码画面分析，原文件保持不变。'),
      h('div', { className: 'fish-actions' }, h('button', { type:'button',className:'fish-button',disabled:busy,onClick:()=>act('/settings',{analysisSession,visionProvider,visionModel}) },'保存标注模型'), h('button', {type:'button',className:'fish-button',disabled:busy,onClick:()=>act('/tag',{})}, '补齐缺失标签与场景'))),
    h('section', { className: 'fish-card' }, h('h2', null, '导入表情原图'),
      h('p', { className: 'fish-muted' }, '支持 PNG、JPEG、GIF、WebP，每张最多 8 MB；GIF 保留原字节。相同来源内按内容去重。'),
      h('div', { className: 'fish-form-row' }, h('label', null, '图片文件 ', h('input', { ref: fileRef, type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp', disabled: busy, onChange: e => setFile(e.target.files?.[0] || null) }))),
      h('div', { className: 'fish-form-row' }, h('label', null, '使用范围 ', h('select', { 'aria-label': '素材使用范围', value: scope, disabled: busy, onChange: e => setScope(e.target.value) }, h('option', { value: '' }, '共享素材（所有绑定可用）'), ...bindings.map(b => h('option', { key: b.会话, value: b.会话 }, b.类型 + ' ' + b.号码))))),
      ...[['名称',name,setName],['标签（逗号分隔）',tags,setTags],['使用场景（逗号分隔）',scenes,setScenes]].map(([label,value,set]) => h('label', { key: label, className: 'fish-form-row' }, label, h('input', { 'aria-label': label, value, disabled: busy, onChange: e => set(e.target.value) }))),
      h('button', { type: 'button', className: 'fish-button fish-primary', disabled: busy || !file, onClick: upload }, '导入表情')),
    h('section', { className: 'fish-card' }, h('h2', null, '素材库 · ' + data.items.length + ' 张'),
      h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: () => load().catch(e => setError(e.message)) }, '刷新素材库'),
      h('label', null, '搜索名称、标签和场景 ', h('input', { value: query, onChange: e => setQuery(e.target.value), 'aria-label': '搜索表情' })),
      h('label', { className: 'fish-form-row' }, '分类 ', h('select', { 'aria-label': '表情分类筛选', value: category, onChange:e=>setCategory(e.target.value) }, h('option',{value:''}, '全部分类'), ...(data.categories || []).map(c=>h('option',{key:c,value:c},c+' · '+data.items.filter(x=>(x.category || '未分类')===c).length)))),
      h('button',{type:'button',className:'fish-button',disabled:busy,onClick:()=>act('/classify',{})}, '重新整理自动分类'),
      ...data.items.filter(x => (!category || (x.category || '未分类') === category) && [x.name,...x.tags,...x.scenes].join(' ').toLowerCase().includes(query.toLowerCase())).map(item => h(FishStickerCard, { key: item.id, item, busy, act, bindings, categories: data.categories })),
      data.items.length ? null : h('p', { className: 'fish-muted' }, '素材库为空，先导入几张表情并填写使用场景。')),
    error ? h('p', { className: 'fish-message', role: 'alert' }, error) : null)
}
function FishStickerCard({ item, busy, act, bindings, categories }) {
  const React = require('react'), h = React.createElement
  const [dirty,setDirty] = React.useState(false)
  const [name,setName] = React.useState(item.name), [tags,setTags] = React.useState(item.tags.join(',')), [scenes,setScenes] = React.useState(item.scenes.join(','))
  React.useEffect(() => { if (!dirty) { setName(item.name); setTags(item.tags.join(',')); setScenes(item.scenes.join(',')) } }, [dirty, item.name, item.tags.join(','), item.scenes.join(',')])
  const binding = bindings.find(b => b.会话 === item.scope)
  return h('article', { className: 'qq-bind-detail' },
    h('img', { src: item.url, alt: item.name, loading: 'lazy', width: 100, height: 100, style: { objectFit: 'contain' } }),
    h('label', {className:'fish-form-row'}, '分类 ', h('select', { 'aria-label': item.id+' 分类', value:item.categorySource==='manual'?item.category:'',disabled:busy,onChange:e=>act('/edit',{id:item.id,category:e.target.value}) }, h('option',{value:''}, '自动归类 · '+(item.category || '未分类')), ...(categories || []).map(c=>h('option',{key:c,value:c},c)))),
    h('p', { className: 'fish-muted', role: 'status' }, '标签状态：' + ({pending:'等待处理',running:'识别中',complete:'已完成',error:'失败',cancelled:'已取消'}[item.tagStatus] || '未自动标注') + (item.tagError ? ' · '+item.tagError : '')),
    h('button', { type:'button',className:'fish-button',disabled:busy || ['pending','running'].includes(item.tagStatus),onClick:()=>act('/tag',{id:item.id}) }, '识别 / 重试标签'),
    h('p', { className: 'fish-muted' }, item.scope ? (binding ? binding.类型 + ' ' + binding.号码 : '原来源绑定已移除') : '共享素材'),
    ...[['名称',name,setName],['标签',tags,setTags],['场景',scenes,setScenes]].map(([label,value,set]) => h('label', { key: label, className: 'fish-form-row' }, label, h('input', { 'aria-label': item.id + ' ' + label, value, disabled: busy, onChange: e => { setDirty(true); set(e.target.value) } }))),
    h('div', { className: 'fish-actions' }, h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: async () => { if (await act('/edit', { id: item.id, name, tags, scenes })) setDirty(false) } }, '保存素材描述'),
      h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: () => { if (window.confirm('删除这张表情及其本地原文件？')) act('/remove', { id: item.id }) } }, '删除表情')))
}
