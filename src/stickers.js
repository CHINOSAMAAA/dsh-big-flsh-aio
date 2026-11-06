function FishStickers({ notify }) {
  const React = require('react'), h = React.createElement
  const [data, setData] = React.useState(null), [busy, setBusy] = React.useState(false), [error, setError] = React.useState('')
  const [bindings, setBindings] = React.useState([]), [scope, setScope] = React.useState(''), [query, setQuery] = React.useState('')
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
      if (await act('/import', { base64, name: name || file.name, tags, scenes, scope })) { setFile(null); setName(''); setTags(''); setScenes('') }
    } catch (e) { setError(e.message) } finally { setBusy(false) }
  }
  const sw = (key, label, note) => h('div', { className: 'fish-form-row' }, h('div', { className: 'fish-form-label' }, label), h('div', { className: 'fish-control' },
    h('input', { type: 'checkbox', role: 'switch', 'aria-label': label, checked: !!data.settings[key], disabled: busy, onChange: e => act('/settings', { [key]: e.target.checked }) }), h('p', { className: 'fish-muted' }, note)))
  if (!data) return h('p', { role: 'status' }, error || '正在读取表情库…')
  return h('div', { className: 'fish-settings-stack' },
    h('section', { className: 'fish-card' }, h('h2', null, '表情包自动化'),
      sw('autoSend', '根据语境自动发送表情', '每轮最多附一张，已有图片时不追加。使用目标会话模型判断是否合适，会产生模型用量；没有合适素材或判断失败时不发图。遵守 QQ 试运行、收发开关和素材来源隔离。'),
      h('label', null, '自动发送冷却（秒） ', h('input', { type: 'number', min: 10, max: 86400, 'aria-label': '自动发送冷却', defaultValue: data.settings.cooldownSeconds, disabled: busy, onBlur: e => act('/settings', { cooldownSeconds: Number(e.target.value) }) }))),
    h('section', { className: 'fish-card' }, h('h2', null, '导入表情原图'),
      h('p', { className: 'fish-muted' }, '支持 PNG、JPEG、GIF、WebP，每张最多 8 MB；GIF 保留原字节。相同来源内按内容去重。'),
      h('div', { className: 'fish-form-row' }, h('label', null, '图片文件 ', h('input', { type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp', disabled: busy, onChange: e => setFile(e.target.files?.[0] || null) }))),
      h('div', { className: 'fish-form-row' }, h('label', null, '使用范围 ', h('select', { 'aria-label': '素材使用范围', value: scope, disabled: busy, onChange: e => setScope(e.target.value) }, h('option', { value: '' }, '共享素材（所有绑定可用）'), ...bindings.map(b => h('option', { key: b.会话, value: b.会话 }, b.类型 + ' ' + b.号码))))),
      ...[['名称',name,setName],['标签（逗号分隔）',tags,setTags],['使用场景（逗号分隔）',scenes,setScenes]].map(([label,value,set]) => h('label', { key: label, className: 'fish-form-row' }, label, h('input', { 'aria-label': label, value, disabled: busy, onChange: e => set(e.target.value) }))),
      h('button', { type: 'button', className: 'fish-button fish-primary', disabled: busy || !file, onClick: upload }, '导入表情')),
    h('section', { className: 'fish-card' }, h('h2', null, '素材库 · ' + data.items.length + ' 张'),
      h('label', null, '搜索名称、标签和场景 ', h('input', { value: query, onChange: e => setQuery(e.target.value), 'aria-label': '搜索表情' })),
      ...data.items.filter(x => [x.name,...x.tags,...x.scenes].join(' ').toLowerCase().includes(query.toLowerCase())).map(item => h(FishStickerCard, { key: item.id, item, busy, act, bindings })),
      data.items.length ? null : h('p', { className: 'fish-muted' }, '素材库为空，先导入几张表情并填写使用场景。')),
    error ? h('p', { className: 'fish-message', role: 'alert' }, error) : null)
}
function FishStickerCard({ item, busy, act, bindings }) {
  const React = require('react'), h = React.createElement
  const [name,setName] = React.useState(item.name), [tags,setTags] = React.useState(item.tags.join(',')), [scenes,setScenes] = React.useState(item.scenes.join(','))
  React.useEffect(() => { setName(item.name); setTags(item.tags.join(',')); setScenes(item.scenes.join(',')) }, [item])
  const binding = bindings.find(b => b.会话 === item.scope)
  return h('article', { className: 'qq-bind-detail' },
    h('img', { src: item.url, alt: item.name, loading: 'lazy', width: 100, height: 100, style: { objectFit: 'contain' } }),
    h('p', { className: 'fish-muted' }, item.scope ? (binding ? binding.类型 + ' ' + binding.号码 : '原来源绑定已移除') : '共享素材'),
    ...[['名称',name,setName],['标签',tags,setTags],['场景',scenes,setScenes]].map(([label,value,set]) => h('label', { key: label, className: 'fish-form-row' }, label, h('input', { 'aria-label': item.id + ' ' + label, value, disabled: busy, onChange: e => set(e.target.value) }))),
    h('div', { className: 'fish-actions' }, h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: () => act('/edit', { id: item.id, name, tags, scenes }) }, '保存素材描述'),
      h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: () => { if (window.confirm('删除这张表情及其本地原文件？')) act('/remove', { id: item.id }) } }, '删除表情')))
}
