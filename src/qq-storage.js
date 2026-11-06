function FishQQStorage({ kind, notify }) {
  const React = require('react'), h = React.createElement
  const [data,setData] = React.useState(null), [open,setOpen] = React.useState(false), [busy,setBusy] = React.useState(false), [error,setError] = React.useState(''), [preview,setPreview] = React.useState(null)
  const label = kind === 'images' ? '图片' : '文件', base = '/dsh-qq-bridge/media-storage'
  const load = async (path = '', body) => {
    const response = await fetch(base+path,{cache:'no-store',...(body?{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)}:{})})
    if(!response.ok) throw new Error('存储管理接口不可用，请重新加载插件')
    const result = await response.json()
    if(!result.ok) throw new Error(result.说 || result.error || '读取存储失败')
    setData(result[kind]);setError('')
  }
  React.useEffect(() => { load().catch(e=>setError(e.message)) },[])
  React.useEffect(() => { if(!open)return;const timer=setInterval(()=>load().catch(e=>setError(e.message)),5000);return()=>clearInterval(timer) },[open])
  const remove = async item => {
    if(!window.confirm('删除归档副本「'+item.name+'」？DSH 会话附件不会被删除。'))return
    setBusy(true)
    try { await load('/remove',{kind,id:item.id,workspace:data.workspace});if(preview?.id===item.id)setPreview(null) }
    catch(e){setError(e.message)}finally{setBusy(false)}
  }
  const openFolder = async () => {
    setBusy(true); setError('')
    try {
      const response = await fetch('/dsh-qq-bridge/open-folder', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ kind }) })
      const result = await response.json().catch(() => null)
      if (!response.ok || !result?.ok) throw new Error(result?.说 || '打开文件夹失败')
      notify?.('已打开本地文件夹', { tone: 'success' })
    } catch (e) { setError(e.message) } finally { setBusy(false) }
  }
  const size = bytes => bytes < 1048576 ? (bytes/1024).toFixed(1)+' KB' : (bytes/1048576).toFixed(1)+' MB'
  const items = data?.items || [], selected = items.find(x=>x.id===preview?.id)
  return h('div',{className:'fish-media-storage'},
    h('style',null,FISH_STICKER_CSS+'\n.big-fish .fish-media-storage p{overflow-wrap:anywhere}.big-fish .fish-stickers .fish-archive-file{display:flex;align-items:center;gap:12px;flex-wrap:wrap;border-bottom:1px solid var(--fish-border);padding:16px 0}.big-fish .fish-archive-name{flex:1 1 240px;min-width:0;overflow-wrap:anywhere}.big-fish .fish-archive-name p{margin:4px 0;overflow-wrap:anywhere}'),
    h('p',{className:'fish-muted'},data?.path?'存储目录：'+data.path:(data?.error && !/工作区/.test(data.error) ? data.error : '归档目录暂不可用。')),
    h('div',{className:'fish-actions'},
      h('button',{type:'button',className:'fish-button',disabled:busy,onClick:openFolder},'打开本地文件夹'),
      h('button',{type:'button',className:'fish-button',onClick:()=>{setPreview(null);setOpen(true);load().catch(e=>setError(e.message))}},'管理已存'+label+'（'+items.length+'）')),
    !open&&error?h('p',{className:'fish-message',role:'status'},error):null,
    h(FishStickerDialog,{open,onClose:()=>{setOpen(false);setPreview(null)},title:'已存'+label+'管理'},
      h('p',{className:'fish-muted'},'关闭存储只停止新增归档，已有内容可继续管理。这里删除的是归档副本，DSH 会话附件由宿主单独管理。'),
      h('div',{className:'fish-actions'},h('button',{type:'button',className:'fish-button',disabled:busy,onClick:()=>load().catch(e=>setError(e.message))},'刷新存储'),selected?h('button',{type:'button',className:'fish-button',onClick:()=>setPreview(null)},'返回图片列表'):null),
      error||data?.error?h('p',{className:'fish-message',role:'alert'},error||data.error):null,
      selected?h('div',null,h('h3',null,selected.name),h('img',{className:'fish-sticker-preview-image',src:selected.url,alt:selected.name})):
        h('div',{className:kind==='images'?'fish-sticker-grid':undefined},...items.map(item=>h('article',{key:item.id,className:kind==='images'?'fish-sticker-tile':'fish-archive-file'},
          kind==='images'?h('button',{type:'button',className:'fish-sticker-thumb','aria-label':'预览已存图片 '+item.name,onClick:()=>setPreview(item)},h('img',{src:item.url,alt:'',loading:'lazy',width:144,height:120})):null,
          h('div',{className:'fish-archive-name'},h('h3',null,item.name),h('p',{className:'fish-muted'},size(item.size)+' · '+item.source+' · '+new Date(item.createdAt).toLocaleString())),
          h('div',{className:'fish-actions'},h('a',{href:item.url,download:item.name,className:'fish-button'},'下载'),h('button',{type:'button',className:'fish-button',disabled:busy,onClick:()=>remove(item)},'删除归档'))))),
      !items.length?h('p',{className:'fish-muted'},'尚无已存'+label+'。开启对应存储开关并保存后，新接收的内容会归档到专用文件夹。'):null))
}
