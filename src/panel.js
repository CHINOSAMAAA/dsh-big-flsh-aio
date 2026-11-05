const React = require('react')
const h = React.createElement
const QQ = components['dsh-qq-link-plus'].Section
const Memory = components['dsh-fish-memory'].Section
const PANEL_ID = 'big-flsh-aio'
const tabs = ['总览', 'QQ 互通', '长期记忆', '更新与来源']
const css = `
.big-fish{--fish-accent:var(--dsw-alias-state-business-primary,#4b70e2);box-sizing:border-box;height:100%;flex:1;min-height:0;overflow:auto;color:var(--dsw-alias-label-primary,#202535);background:var(--dsw-alias-bg-base,#f7f8fb);font:14px/1.65 system-ui,sans-serif;padding:calc(28px + var(--dsh-frame-top-clearance,0px)) clamp(18px,4vw,56px) 40px}
.big-fish *{box-sizing:border-box}.big-fish .fish-content{max-width:1180px;margin:auto}.big-fish header{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px;margin-bottom:28px}.big-fish h1{font-size:28px;letter-spacing:-1px;margin:0;font-weight:650}.big-fish h2{font-size:19px;margin:0 0 8px}.big-fish h3{font-size:15px;margin:0 0 6px}.big-fish p{margin:6px 0}.big-fish .fish-muted{color:var(--dsw-alias-label-secondary,#727a8d);font-size:13px}.big-fish .fish-brand{display:flex;align-items:center;gap:14px}.big-fish .fish-logo{display:grid;place-items:center;width:50px;height:50px;border-radius:17px;color:var(--fish-accent);background:color-mix(in srgb,var(--fish-accent) 10%,transparent)}
.big-fish button{font:inherit;cursor:pointer;color:inherit}.big-fish button:disabled{cursor:default;opacity:.5}.big-fish button:focus-visible,.big-fish a:focus-visible{outline:2px solid var(--fish-accent);outline-offset:3px}.big-fish .fish-button{border:1px solid var(--dsw-alias-border-l2,#dfe3eb);border-radius:9px;padding:8px 14px;background:var(--dsw-alias-bg-layer-1,#fff);font-size:13px}.big-fish .fish-primary{background:var(--fish-accent);border-color:transparent;color:white}.big-fish .fish-badge{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--dsw-alias-border-l2,#e0e4eb);border-radius:20px;padding:3px 10px;font-size:11px;color:var(--dsw-alias-label-secondary,#727a8d)}
.big-fish .fish-nav{display:flex;gap:6px;border-bottom:1px solid var(--dsw-alias-border-l2,#e0e4eb);margin-bottom:28px;overflow:auto}.big-fish .fish-nav button{white-space:nowrap;border:0;border-bottom:2px solid transparent;background:transparent;padding:10px 18px 13px;color:var(--dsw-alias-label-secondary,#727a8d)}.big-fish .fish-nav button[aria-selected=true]{color:var(--fish-accent);border-bottom-color:var(--fish-accent);font-weight:600}
.big-fish .fish-hero{border:1px solid color-mix(in srgb,var(--fish-accent) 18%,transparent);background:linear-gradient(115deg,color-mix(in srgb,var(--fish-accent) 8%,transparent),transparent);border-radius:18px;padding:30px;display:flex;gap:24px;align-items:center;justify-content:space-between;margin-bottom:20px}.big-fish .fish-hero h2{font-size:24px;font-weight:550}.big-fish .fish-eyebrow{font-size:11px;letter-spacing:2px;color:var(--fish-accent);margin-bottom:8px}.big-fish .fish-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px;margin-bottom:24px}.big-fish .fish-card{border:1px solid var(--dsw-alias-border-l2,#e0e4eb);border-radius:14px;background:var(--dsw-alias-bg-layer-1,#fff);padding:22px}.big-fish .fish-value{font-size:25px;font-weight:600;margin:8px 0 4px;letter-spacing:-.5px}.big-fish .fish-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,330px),1fr));gap:18px}.big-fish .fish-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}.big-fish .fish-table{width:100%;border-collapse:collapse;font-size:13px}.big-fish .fish-table th,.big-fish .fish-table td{text-align:left;vertical-align:top;padding:14px 12px;border-bottom:1px solid var(--dsw-alias-border-l2,#e0e4eb)}.big-fish .fish-table th{font-size:12px;font-weight:500;color:var(--dsw-alias-label-secondary,#727a8d)}.big-fish a{color:var(--fish-accent);text-decoration:none;overflow-wrap:anywhere}.big-fish a:hover{text-decoration:underline}.big-fish .fish-message{white-space:pre-wrap;margin:12px 0}.big-fish footer{margin-top:28px;padding-top:18px;border-top:1px solid var(--dsw-alias-border-l2,#e0e4eb);font-size:11px;color:var(--dsw-alias-label-secondary,#727a8d)}
@media(max-width:600px){.big-fish .fish-hero{padding:22px;align-items:flex-start;flex-direction:column}.big-fish .fish-hero h2{font-size:20px}.big-fish .fish-nav button{padding:10px 11px}.big-fish .fish-card{padding:17px}.big-fish h1{font-size:24px}}
`

function FishIcon({ size = 24 }) {
  return h('svg', { width: size, height: size, viewBox: '0 0 32 32', fill: 'none', 'aria-hidden': true },
    h('path', { d: 'M24 16c-4-9-15-9-21 0 6 9 17 9 21 0Zm0 0 5-6v12l-5-6Z', stroke: 'currentColor', strokeWidth: 1.8, strokeLinejoin: 'round' }),
    h('circle', { cx: 10, cy: 14, r: 1.5, fill: 'currentColor' }),
    h('path', { d: 'm14 8 4-4 3 6M14 24l4 4 3-6', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }))
}
async function request(path, options) {
  const response = await fetch(path, { cache: 'no-store', ...options })
  const data = await response.json()
  if (!response.ok || !data.ok) throw new Error(data.error || data.说 || '接口请求失败：' + response.status)
  return data
}
const button = (label, onClick, primary = false, disabled = false) => h('button', { type: 'button', className: 'fish-button' + (primary ? ' fish-primary' : ''), onClick, disabled }, label)
const link = (url, label) => h('a', { href: url, target: '_blank', rel: 'noreferrer' }, label)

function Overview({ navigate }) {
  const [state, setState] = React.useState({})
  const [busy, setBusy] = React.useState(false)
  const refresh = async () => {
    setBusy(true)
    const results = await Promise.allSettled([request('/dsh-qq-bridge/state'), request('/dsh-fish-memory/list')])
    setState({ qq: results[0].value, memory: results[1].value, errors: results.filter(r => r.status === 'rejected').map(r => r.reason.message) })
    setBusy(false)
  }
  React.useEffect(() => { void refresh() }, [])
  const qq = state.qq, memory = state.memory
  const libraries = [...new Map((memory?.sessions || []).map(s => [s.storeId || s.id, s])).values()]
  const stats = [
    ['QQ 后端', !qq ? '—' : qq.NapCat状态?.错 ? '未连接' : qq.NapCat状态?.用户 ? '已连接' : '未连接', qq?.NapCat状态?.昵称 || '在 QQ 互通中配置 NapCat / SnowLuma'],
    ['消息转发', !qq ? '—' : qq.配置?.总开关 ? qq.配置?.试运行 ? '试运行' : '已开启' : '已关闭', '沿用原插件的收发开关与绑定策略'],
    ['长期记忆', !memory ? '—' : memory.全局开关 ? '已开启' : '已关闭', '支持按会话、QQ 来源隔离及语义召回'],
    ['记忆条目', memory ? String(libraries.reduce((n, s) => n + (s.count || 0), 0)) : '—', memory ? libraries.length + ' 个记忆库' : '等待宿主记忆服务'],
  ]
  return h('div', null,
    h('section', { className: 'fish-hero' }, h('div', null,
      h('div', { className: 'fish-eyebrow' }, 'BIG FISH / 大肥鱼'),
      h('h2', null, '消息有来处，记忆有归处。'),
      h('p', { className: 'fish-muted' }, '在一个工作台里，连接 QQ、整理历史、照看长期记忆。')),
      button(busy ? '读取中…' : '刷新状态', refresh, false, busy)),
    state.errors?.length ? h('p', { className: 'fish-message', role: 'alert' }, state.errors.join('\n')) : null,
    h('div', { className: 'fish-stats' }, ...stats.map(([label, value, hint]) => h('article', { className: 'fish-card', key: label },
      h('div', { className: 'fish-muted' }, label), h('div', { className: 'fish-value' }, value), h('div', { className: 'fish-muted' }, hint)))),
    h('div', { className: 'fish-grid' },
      h('article', { className: 'fish-card' }, h('span', { className: 'fish-badge' }, '01 / CONNECT'), h('h2', { style: { marginTop: 18 } }, 'QQ 互通'),
        h('p', { className: 'fish-muted' }, '统一设置后端连接、私聊与群聊绑定、回复策略。历史记录按段整理后写入目标会话记忆。'),
        h('div', { className: 'fish-actions' }, button('管理 QQ 与历史导入 →', () => navigate(1), true))),
      h('article', { className: 'fish-card' }, h('span', { className: 'fish-badge' }, '02 / REMEMBER'), h('h2', { style: { marginTop: 18 } }, '长期记忆'),
        h('p', { className: 'fish-muted' }, '浏览与编辑记忆，整理档案，配置遗忘与召回。Qwen 语义检索按需启用，保留原有来源隔离。'),
        h('div', { className: 'fish-actions' }, button('打开记忆管理 →', () => navigate(2), true)))),
    h('p', { className: 'fish-muted', style: { marginTop: 20 } }, '首次使用：配置 QQ 后端与会话绑定 → 启用目标会话记忆 → 按需导入历史。历史整理会调用目标会话模型并消耗额度。'))
}

function Updates() {
  const [update, setUpdate] = React.useState(null)
  const [busy, setBusy] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const check = async (force = true) => {
    setBusy(true)
    try { setUpdate(await request('/dsh-big-flsh-aio/update' + (force ? '?refresh=1' : ''))); setMessage('') }
    catch (e) { setUpdate(null); setMessage(e.message) }
    finally { setBusy(false) }
  }
  const install = async () => {
    setBusy(true); setMessage('正在安装大肥鱼整合包…')
    try {
      await request('/dsh-big-flsh-aio/install', { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}' })
      setMessage('安装已完成。请按宿主提示重载或重启 DSH，使新版本生效。')
    } catch (e) { setMessage('安装未完成：' + e.message) }
    finally { setBusy(false) }
  }
  React.useEffect(() => { void check(false) }, [])
  const status = !update ? busy ? '正在检查…' : '暂未取得更新信息' : update.hasUpdate ? '可更新至 v' + update.latest : update.ahead ? '本地版本高于仓库版本' : '已是最新版本'
  return h('div', null,
    h('section', { className: 'fish-card' },
      h('span', { className: 'fish-badge' }, 'RELEASE / v' + META.version), h('h2', { style: { marginTop: 16 } }, '更新大肥鱼'),
      h('p', null, status), h('p', { className: 'fish-muted' }, '从本项目 main 分支检查版本，由 DSH 插件管理器安装整个整合包。原作者项目仅用于来源说明，不会单独覆盖整合模块。'),
      h('p', null, link('https://github.com/CHINOSAMAAA/dsh-big-flsh-aio', 'CHINOSAMAAA/dsh-big-flsh-aio ↗')),
      h('div', { className: 'fish-actions' }, button(busy ? '处理中…' : '检查更新', () => check(true), false, busy),
        button('一键更新整合包', install, true, busy || !update?.hasUpdate || !update?.canInstall)),
      update?.devCopy ? h('p', { className: 'fish-muted' }, '当前是本地开发副本，自动安装已禁用。请在项目目录执行 git pull，再运行 npm run build 并重载 DSH。') : null,
      h('div', { className: 'fish-message', role: 'status', 'aria-live': 'polite' }, message)),
    h('section', { className: 'fish-card', style: { marginTop: 20 } },
      h('h2', null, '原作者、项目来源与版本对应'),
      h('p', { className: 'fish-muted' }, '下表是大肥鱼 v' + META.version + ' 实际使用的版本基线，不表示兼容上游所有新版本。两个 Plus 模块已包含在整合包内，请勿重复启用原插件。'),
      h('div', { style: { overflowX: 'auto' } }, h('table', { className: 'fish-table' },
        h('thead', null, h('tr', null, ...['项目 / GitHub', '原作者 / 维护者', '对应版本', '用途'].map(x => h('th', { key: x, scope: 'col' }, x)))),
        h('tbody', null, ...META.upstreamCompatibility.map(item => h('tr', { key: item.url },
          h('td', null, link(item.url, item.name), h('div', { className: 'fish-muted' }, item.url.replace('https://github.com/', ''))),
          h('td', null, item.author), h('td', null, item.version, h('div', null, link(item.url + '/commit/' + item.commit, item.commit.slice(0, 7)))), h('td', null, item.role)))))),
      h('p', { className: 'fish-muted' }, '运行要求：Node.js ≥ 22，DSH ≥ 0.2.1-rc.2。QQ 与记忆功能派生自 Yuuyuko-uu；整合与 Plus 扩展由 CHINOSAMAAA 维护。原许可全文及第三方声明随包分发。'),
      h('p', null, link('https://github.com/CHINOSAMAAA/dsh-big-flsh-aio/blob/main/LICENSE.md', '许可与署名'), ' · ', link('https://github.com/CHINOSAMAAA/dsh-big-flsh-aio/blob/main/README.md', '安装与发布步骤'))))
}

function Page() {
  const [tab, setTab] = React.useState(0)
  const [visited, setVisited] = React.useState([0])
  const navigate = id => { setTab(id); setVisited(old => old.includes(id) ? old : [...old, id]) }
  const render = [() => h(Overview, { navigate }), () => h(QQ), () => h(Memory), () => h(Updates)]
  return h('div', { className: 'big-fish' }, h('style', null, css), h('div', { className: 'fish-content' },
    h('header', null,
      h('div', { className: 'fish-brand' }, h('div', { className: 'fish-logo' }, h(FishIcon, { size: 32 })), h('div', null, h('h1', null, '大肥鱼'), h('div', { className: 'fish-muted' }, 'QQ 与记忆，汇在一处。'))),
      h('span', { className: 'fish-badge' }, 'v' + META.version + ' / ALL IN ONE')),
    h('nav', { className: 'fish-nav', 'aria-label': '大肥鱼功能', role: 'tablist' }, ...tabs.map((label, id) => h('button', {
      type: 'button', key: label, role: 'tab', id: 'fish-tab-' + id, 'aria-selected': tab === id, 'aria-controls': 'fish-panel-' + id,
      tabIndex: tab === id ? 0 : -1, onClick: () => navigate(id), onKeyDown: e => {
        const next = e.key === 'ArrowRight' ? (id + 1) % tabs.length : e.key === 'ArrowLeft' ? (id + tabs.length - 1) % tabs.length : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : null
        if (next !== null) { e.preventDefault(); navigate(next); e.currentTarget.parentElement.querySelectorAll('[role=tab]')[next].focus() }
      },
    }, label))),
    ...visited.map(id => h('section', { key: id, id: 'fish-panel-' + id, role: 'tabpanel', 'aria-labelledby': 'fish-tab-' + id, hidden: tab !== id }, render[id]())),
    h('footer', null, '派生自 Yuuyuko-uu / dsh-qq-link 与 dsh-fish-memory · 原作者许可与来源见「更新与来源」')))
}

return {
  inject: ['slots'],
  apply(ctx) {
    const slots = ctx.get('slots')
    if (!slots) return
    slots.inject('sidebar.panellist', () => slots.register({ name: 'sidebar.panellist', id: PANEL_ID, order: 20, label: () => '大肥鱼' }, FishIcon))
    slots.inject('main', () => slots.register({ name: 'main', key: PANEL_ID }, Page))
  },
}
