const React = require('react')
const h = React.createElement
const QQ = components['dsh-qq-link-plus'].Section
const Memory = components['dsh-fish-memory'].Section
const Mood = components['dsh-feiyu-mood'].Section
const Speak = components['dsh-speak-up'].Section
const PANEL_ID = 'big-flsh-aio'
const tabs = ['总览', 'QQ 互通', '长期记忆', '鱼的心情', '主动搭话', '更新与来源']
const UPDATES_TAB = tabs.length - 1
const css = FISH_THEME_CSS

function FishIcon({ size = 24 }) {
  return h('svg', { width: size, height: size, viewBox: '0 0 32 32', fill: 'none', 'aria-hidden': true },
    h('path', { d: 'M5 12c-3 3-3 9 1 12 5 5 15 4 19-2 2-2 3-6 2-8 3 0 4-3 3-6-2 0-4 1-5 3-1-2-3-3-5-3-4-1-9 0-12 2', fill: 'var(--fish-accent-soft, #dce6ff)', stroke: 'currentColor', strokeWidth: 1.6, strokeLinejoin: 'round' }),
    h('path', { d: 'M4 18c2 6 9 8 14 6l-4-5M12 6V3m0 3-3-2m3 2 3-2', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }),
    h('circle', { cx: 19, cy: 15, r: 1.2, fill: 'currentColor' }))
}

function NavIcon({ index }) {
  const paths = ['M3 10 12 3l9 7v10H3Z M9 20v-7h6v7', 'M5 4h14v12H9l-4 4Z M8 8h8 M8 12h5', 'M4 4h6l2 2 2-2h6v16h-6l-2 1-2-1H4Z M12 6v15', 'M3 12h4l3-7 4 14 3-7h4', 'M4 5h16v12H9l-5 4Z M8 9h8 M8 13h5', 'M4 9a8 8 0 1 1 0 7 M4 3v6h6 M12 7v5l3 2']
  return h('svg', { className: 'fish-icon', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }, h('path', { d: paths[index] }))
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
    const results = await Promise.allSettled([request('/dsh-qq-bridge/state'), request('/dsh-fish-memory/list'), request('/dsh-feiyu-mood/state'), request('/dsh-speak-up/state')])
    setState({ qq: results[0].value, memory: results[1].value, mood: results[2].value, speak: results[3].value, errors: results.filter(r => r.status === 'rejected').map(r => r.reason.message) })
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
    ['鱼的心情', state.mood ? String(state.mood.mood ?? '—') : '—', '按会话或工作区绑定，保留情绪时间线与挂饰'],
    ['主动搭话', !state.speak ? '—' : state.speak.配置?.总开关 ? state.speak.配置?.试运行 ? '试运行' : '已开启' : '已关闭', '复用目标会话的人格、历史、工具和记忆'],
  ]
  return h('div', null,
    h('section', { className: 'fish-hero' },
      h('div', { className: 'fish-hero-copy' },
        h('span', { className: 'fish-badge fish-eyebrow' }, '大肥鱼 · 伙伴工作台'),
        h('h2', null, '把日常，慢慢记在心上。'),
        h('p', { className: 'fish-muted' }, '连接 QQ、照看记忆与心情，让伙伴主动来找你。'),
        h('div', { className: 'fish-actions' }, button(busy ? '读取中…' : '刷新状态', refresh, false, busy))),
      h('figure', { className: 'fish-welcome' }, h('img', { src: '/dsh-feiyu-mood/welcome.png', alt: '大肥鱼挥手欢迎你', width: 1254, height: 1254, decoding: 'async' })),
      h('svg', { className: 'fish-waves', viewBox: '0 0 1000 100', preserveAspectRatio: 'none', 'aria-hidden': true },
        h('path', { className: 'fish-wave-back', d: 'M0 46Q125 8 250 48T500 44T750 40T1000 46V100H0Z' }),
        h('path', { className: 'fish-wave-front', d: 'M0 70Q150 30 300 65T600 64T1000 62V100H0Z' }))),
    state.errors?.length ? h('p', { className: 'fish-message', role: 'alert' }, state.errors.join('\n')) : null,
    h('div', { className: 'fish-stats' }, ...stats.map(([label, value, hint]) => h('article', { className: 'fish-card', key: label },
      h('div', { className: 'fish-muted' }, label), h('div', { className: 'fish-value' }, value), h('div', { className: 'fish-muted' }, hint)))),
    h('div', { className: 'fish-grid' },
      h('article', { className: 'fish-card' }, h('div', { className: 'fish-feature-heading' }, h('h2', null, 'QQ 互通'), h('span', { className: 'fish-feature-icon' }, h(NavIcon, { index: 1 }))),
        h('p', { className: 'fish-muted' }, '统一设置后端连接、私聊与群聊绑定、回复策略。历史记录按段整理后写入目标会话记忆。'),
        h('div', { className: 'fish-actions' }, button('管理 QQ 与历史导入 →', () => navigate(1)))),
      h('article', { className: 'fish-card' }, h('div', { className: 'fish-feature-heading' }, h('h2', null, '长期记忆'), h('span', { className: 'fish-feature-icon' }, h(NavIcon, { index: 2 }))),
        h('p', { className: 'fish-muted' }, '浏览与编辑记忆，整理档案，配置遗忘与召回。Qwen 语义检索按需启用，保留原有来源隔离。'),
        h('div', { className: 'fish-actions' }, button('打开记忆管理 →', () => navigate(2)))),
      h('article', { className: 'fish-card' }, h('div', { className: 'fish-feature-heading' }, h('h2', null, '鱼的心情'), h('span', { className: 'fish-feature-icon' }, h(NavIcon, { index: 3 }))),
        h('p', { className: 'fish-muted' }, '自动判断心情、查看情绪时间线，管理会话或工作区绑定与挂饰。'),
        h('div', { className: 'fish-actions' }, button('照看心情 →', () => navigate(3)))),
      h('article', { className: 'fish-card' }, h('div', { className: 'fish-feature-heading' }, h('h2', null, '主动搭话'), h('span', { className: 'fish-feature-icon' }, h(NavIcon, { index: 4 }))),
        h('p', { className: 'fish-muted' }, '配置空闲触发、时段与目标会话，先演练，再按需启用真发。'),
        h('div', { className: 'fish-actions' }, button('管理主动搭话 →', () => navigate(4))))),
    h('p', { className: 'fish-start fish-muted' }, '首次使用：配置 QQ 后端与会话绑定 → 启用目标会话记忆 → 按需导入历史。历史整理会调用目标会话模型并消耗额度。'))
}

function Updates() {
  const [update, setUpdate] = React.useState(null)
  const [busy, setBusy] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [channel, setChannel] = React.useState('mirror')
  const check = async (force = true) => {
    setBusy(true)
    try { setUpdate(await request('/dsh-big-flsh-aio/update?channel=' + channel + (force ? '&refresh=1' : ''))); setMessage('') }
    catch (e) { setUpdate(null); setMessage(e.message) }
    finally { setBusy(false) }
  }
  const install = async () => {
    setBusy(true); setMessage('正在安装大肥鱼整合包…')
    try {
      await request('/dsh-big-flsh-aio/install?channel=' + channel, { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}' })
      setMessage('安装已完成。请按宿主提示重载或重启 DSH，使新版本生效。')
    } catch (e) { setMessage('安装未完成：' + e.message) }
    finally { setBusy(false) }
  }
  React.useEffect(() => { void check(false) }, [channel])
  const status = !update ? busy ? '正在检查…' : '暂未取得更新信息' : update.legacyRelease ? '此渠道仍为旧编号版本，请等待新系列同步' : update.hasUpdate ? '可更新至 v' + update.latest : update.ahead ? '本地版本高于仓库版本' : '已是最新版本'
  return h('div', null,
    h('section', { className: 'fish-card' },
      h('span', { className: 'fish-badge' }, '仓库 v' + META.repositoryVersion + ' / npm 包 v' + META.version), h('h2', { style: { marginTop: 16 } }, '更新大肥鱼'),
      h('p', { className: 'fish-muted' }, '仓库版本供自己使用；npm 包是经过验证后另行发布的对外版本，两者独立编号。'),
      h('p', null, status),
      h('label', null, '更新渠道 ', h('select', { 'aria-label': '更新渠道', className: 'fish-button', value: channel, disabled: busy, onChange: e => { setUpdate(null); setMessage(''); setChannel(e.target.value) } },
        h('option', { value: 'mirror' }, '国内镜像 · npmmirror'), h('option', { value: 'github' }, 'GitHub 仓库'))),
      h('p', null, link('https://github.com/CHINOSAMAAA/dsh-big-flsh-aio', 'CHINOSAMAAA/dsh-big-flsh-aio ↗')),
      h('div', { className: 'fish-actions' }, button(busy ? '处理中…' : '检查更新', () => check(true), false, busy),
        button('一键更新整合包', install, true, busy || !update?.hasUpdate || !update?.canInstall)),
      update?.devCopy ? h('p', { className: 'fish-muted' }, '当前是本地开发副本，自动安装已禁用。请在项目目录执行 git pull，再运行 npm run build 并重载 DSH。') : null,
      h('div', { className: 'fish-message', role: 'status', 'aria-live': 'polite' }, message)),
    h('section', { className: 'fish-card', style: { marginTop: 20 } },
      h('h2', null, '原作者、项目来源与版本对应'),
      h('div', { style: { overflowX: 'auto' } }, h('table', { className: 'fish-table' },
        h('thead', null, h('tr', null,
          ...['项目名称', '本项目子仓库', '原作者仓库'].map(x => h('th', { key: x, scope: 'col' }, x)),
          h('th', { scope: 'col' }, '整合时的原仓库版本', h('div', { className: 'fish-muted', style: { fontWeight: 400, minWidth: 170 } }, '固定记录整合基线，不随上游最新版本变化')),
          h('th', { scope: 'col' }, '实际内置版本'))),
        h('tbody', null, ...META.upstreamCompatibility.map(item => h('tr', { key: item.url },
          h('td', null, item.name),
          h('td', null, item.forkUrl ? link(item.forkUrl, item.forkName) : item.modulePath),
          h('td', null, link(item.url, item.url.replace('https://github.com/', ''))),
          h('td', null, item.version, h('div', { className: 'fish-muted', title: item.commit }, item.commit.slice(0, 7))),
          h('td', null, item.forkVersion || item.version, h('div', { className: 'fish-muted', title: item.forkCommit || item.commit }, (item.forkCommit || item.commit).slice(0, 7))))))))))

}

function Page() {
  const initialTab = openUpdatesRequested ? UPDATES_TAB : 0
  const [tab, setTab] = React.useState(initialTab)
  const [visited, setVisited] = React.useState([initialTab])
  const navigate = id => { setTab(id); setVisited(old => old.includes(id) ? old : [...old, id]) }
  React.useEffect(() => {
    openUpdatesRequested = false
    showUpdates = () => navigate(UPDATES_TAB)
    return () => { showUpdates = null }
  }, [])
  const render = [() => h(Overview, { navigate }), () => h(QQ), () => h(Memory), () => h(Mood), () => h(Speak), () => h(Updates)]
  const descriptions = ['连接、记忆与陪伴，都在这里。', '连接 QQ 与 DSH，让每段对话找到自己的去处。', '整理值得留下的事，照看每一段共同的记忆。', '看见情绪的变化，也给伙伴一点平复的时间。', '把主动交给恰当的时机，让问候自然发生。', '管理更新渠道，了解大肥鱼的来处。']
  return h('div', { className: 'big-fish' }, h('style', null, css),
    h('div', { className: 'fish-shell' },
      h('aside', { className: 'fish-sidebar' },
        h('div', { className: 'fish-brand' }, h('span', { className: 'fish-logo' }, h(FishIcon, { size: 32 })), h('span', { className: 'fish-brand-name' }, '大肥鱼')),
        h('nav', { className: 'fish-nav', 'aria-label': '大肥鱼功能', role: 'tablist' }, ...tabs.map((label, id) => h('button', {
          type: 'button', key: label, role: 'tab', id: 'fish-tab-' + id, 'aria-label': label, 'aria-selected': tab === id, 'aria-controls': 'fish-panel-' + id,
          tabIndex: tab === id ? 0 : -1, onClick: () => navigate(id), onKeyDown: e => {
            const next = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? (id + 1) % tabs.length : (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? (id + tabs.length - 1) % tabs.length : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : null
            if (next !== null) { e.preventDefault(); navigate(next); e.currentTarget.parentElement.querySelectorAll('[role=tab]')[next].focus() }
          },
        }, h(NavIcon, { index: id }), h('span', null, label)))),
        h('div', { className: 'fish-sidebar-note' }, '一点连接，一点陪伴。', h('br'), '仓库 v' + META.repositoryVersion, h('br'), 'npm 包 v' + META.version)),
      h('main', { className: 'fish-workspace' },
        h('header', { className: 'fish-page-header' }, h('div', null, h('h1', null, tabs[tab]), h('p', { className: 'fish-muted' }, descriptions[tab])), h('span', { className: 'fish-badge' }, '跟随宿主主题')),
        ...visited.map(id => h('section', { key: id, id: 'fish-panel-' + id, role: 'tabpanel', 'aria-labelledby': 'fish-tab-' + id, hidden: tab !== id }, render[id]())),
        h('footer', { className: 'fish-footer' }, '派生自 Yuuyuko-uu · QQ、记忆、心情与主动搭话 · 原作者许可与来源见「更新与来源」'))))
}

return {
  inject: ['slots'],
  apply(ctx) {
    const slots = ctx.get('slots')
    if (!slots) return
    slots.inject('sidebar.panellist', () => slots.register({ name: 'sidebar.panellist', id: PANEL_ID, order: 20, label: () => '大肥鱼' }, FishIcon))
    slots.inject('main', () => slots.register({ name: 'main', key: PANEL_ID }, Page))
    slots.inject('shell.overlay', () => slots.register({ name: 'shell.overlay', id: 'big-flsh-update-notice' }, () => h(UpdateNotifier, { open: () => {
      openUpdatesRequested = true
      ctx.get('layout')?.selectPanel(PANEL_ID)
      showUpdates?.()
    } })))
  },
}
