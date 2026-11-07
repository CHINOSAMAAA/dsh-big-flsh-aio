// 大肥鱼整合修改：供主界面直接挂载，更新入口统一到「更新与来源」。
// DSH「通到 QQ」· 网页半边
//
// 在 **DSH 设置** 左侧栏加一项「通到 QQ」，Plus 增加历史导入页。
// 绑定是核心：一行 = 一个聊天（私聊 或 群）→ 一间 DSH 会话，各回各的，不串。
//
// 注意：这里不碰会话、不发消息，只是往宿主那几条 /dsh-qq-bridge/* 路由上读写。

window.__ModuleLoader__.load({
  id: 'dsh-qq-link-plus',
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports

    const React = require('react')
    const inject = ['slots']

    const B = '/dsh-qq-bridge'
    const get = (p) => fetch(B + p, { cache: 'no-store' }).then((r) => r.json()).catch(() => null)
    const post = (p, body) =>
      fetch(B + p, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body || {}) })
        .then((r) => r.json())
        .catch(() => null)

    const h = React.createElement

    const S = {
      wrap: { padding: '0 0 24px', fontSize: 'var(--fish-body)', lineHeight: 1.75, minWidth: 0 },
      h: { fontFamily: 'var(--fish-title)', fontSize: 20, fontWeight: 700, margin: '0 0 16px', lineHeight: 1.5 },
      dim: { color: 'var(--fish-muted)', fontSize: 'var(--fish-small)' },
      card: { border: '1px solid var(--fish-border)', borderRadius: 'var(--fish-radius)', padding: '24px', marginBottom: 8, minWidth: 0, background: 'var(--fish-panel)', boxShadow: 'var(--fish-shadow)' },
      row: { display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap' },
      lab: { flex: '0 1 200px', paddingTop: 8, fontSize: 'var(--fish-label)', fontWeight: 550 },
      ctl: { flex: '1 1 260px', minWidth: 0 },
      hint: { color: 'var(--fish-muted)', fontSize: 'var(--fish-small)', marginTop: 8, lineHeight: 1.75 },
      input: { border: '1px solid var(--fish-control-border)', borderRadius: 'var(--fish-radius-sm)', padding: '8px 12px', background: 'var(--fish-surface)', color: 'var(--fish-text)', fontSize: 'var(--fish-label)', width: '100%', maxWidth: '100%', boxSizing: 'border-box' },
      small: { border: '1px solid var(--fish-control-border)', borderRadius: 'var(--fish-radius-sm)', padding: '8px 12px', background: 'var(--fish-surface)', color: 'var(--fish-text)', fontSize: 'var(--fish-label)', width: 136, maxWidth: '100%', boxSizing: 'border-box' },
      wide: { border: '1px solid var(--fish-control-border)', borderRadius: 'var(--fish-radius-sm)', padding: '8px 12px', background: 'var(--fish-surface)', color: 'var(--fish-text)', fontSize: 'var(--fish-label)', width: '100%', boxSizing: 'border-box' },
      ta: { border: '1px solid var(--fish-control-border)', borderRadius: 'var(--fish-radius-sm)', padding: '12px', background: 'var(--fish-surface)', color: 'var(--fish-text)', fontSize: 'var(--fish-body)', width: '100%', minHeight: 112, boxSizing: 'border-box', lineHeight: 1.75, fontFamily: 'inherit', resize: 'vertical' },
      ok: { color: 'var(--fish-success)', fontSize: 'var(--fish-small)' },
      warn: { color: 'var(--fish-warning)', border: '1px solid var(--fish-border)', background: 'var(--fish-soft)', borderRadius: 'var(--fish-radius-sm)', padding: 16, marginBottom: 16 },
      已同步: { margin: '8px 0 20px', fontSize: 'var(--fish-small)', color: 'var(--fish-success)' },
      未保存: { margin: '8px 0 20px', fontSize: 'var(--fish-small)', color: 'var(--fish-warning)', fontWeight: 550 },
      btn: { border: '1px solid var(--fish-border)', borderRadius: 'var(--fish-radius-sm)', padding: '8px 16px', background: 'var(--fish-control-fill)', color: 'var(--fish-text)', fontSize: 'var(--fish-label)', cursor: 'pointer' },
      btnOn: { border: '1px solid var(--fish-action)', borderRadius: 'var(--fish-radius-sm)', padding: '8px 16px', background: 'var(--fish-action)', color: 'var(--fish-on-accent)', fontSize: 'var(--fish-label)', cursor: 'pointer' },
      tabBar: { display: 'flex', gap: 8, overflowX: 'auto', margin: '16px 0 24px', paddingBottom: 16, borderBottom: '1px solid var(--fish-border)' },
      stack: { display: 'grid', gap: 20 },
      grid: { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 20, alignItems: 'start' },
      group: { borderTop: '1px solid var(--fish-border)', padding: '20px 0' },
      summary: { fontWeight: 600, fontSize: 16, cursor: 'pointer', padding: '8px 0 16px' },
      日志行: { fontFamily: 'ui-monospace, Consolas, monospace', fontSize: 'var(--fish-small)', whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', padding: '8px 0', borderBottom: '1px solid var(--fish-line)' },
      表头: {}, 表格行: {}, 空间表头: {}, 空间行: {},
      表头字: { fontSize: 'var(--fish-small)', color: 'var(--fish-muted)' },
      已勾: { border: '1px solid var(--fish-border)', background: 'var(--fish-soft)', borderRadius: 'var(--fish-radius-sm)', padding: '12px 16px', fontSize: 'var(--fish-small)' },
      清单: { border: '1px solid var(--fish-border)', borderRadius: 'var(--fish-radius-sm)', marginTop: 12, maxHeight: 320, overflowY: 'auto' },
      会话行: { display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', padding: '12px 16px', cursor: 'pointer', borderBottom: '1px solid var(--fish-line)' },
      会话行勾上: { background: 'var(--fish-accent-soft)', fontWeight: 550 },
      tag: { display: 'inline-block', border: '1px solid var(--fish-border)', borderRadius: 20, padding: '2px 8px', fontSize: 'var(--fish-small)', marginRight: 8 }
    }

    const 提示 = (文本) => h('div', { style: S.hint }, 文本)
    const 行 = (标签, 控件, 说明) =>
      h('div', { className: 'fish-form-row', style: S.row }, h('div', { className: 'fish-form-label', style: S.lab }, 标签), h('div', { className: 'fish-control', style: S.ctl }, (['input', 'select', 'textarea'].includes(控件?.type) ? React.cloneElement(控件, { 'aria-label': 标签 }) : 控件), 说明 ? 提示(说明) : null))
    const 按钮 = (文字, onClick, 亮, 关) =>
      h('button', { type: 'button', className: 亮 ? 'fish-primary' : '', style: 亮 ? S.btnOn : S.btn, onClick, disabled: !!关, title: 文字 }, 文字)
    const 勾 = (值, onChange, label = '切换设置', disabled = false) => h('input', {'aria-label': label, type: 'checkbox', role: 'switch', checked: !!值, disabled, onChange: (e) => onChange(e.target.checked) })
    const 短id = (id) => {
      const s = String(id)
      return s.length <= 8 ? s : s.slice(-8)
    }

    const 页签们 = ['连接', '绑定', '消息策略', '角色设定', '表情包', '语音转写', '语音发送', 'QQ 空间', '图片与文件']

    function QQSpaceActions({ 配置, 脏, notify }) {
      const [busy, setBusy] = React.useState(false)
      // 旧的内联操作提示保留占位，实际消息已走 DSH Toast。
      const [message, setMessage] = React.useState('')
      const [images, setImages] = React.useState('')
      const [qq, setQQ] = React.useState('')
      const [tid, setTid] = React.useState('')
      const [result, setResult] = React.useState('')
      const imageList = images.split(/\r?\n/).map(x => x.trim()).filter(Boolean)
      const tell = (text, options) => { if (typeof notify === 'function') notify(text, options) }
      const run = async (path, body, read = false) => {
        setBusy(true)
        try {
          const r = await post(path, body)
          if (!r?.ok) throw new Error(r?.说 || '请求失败，请检查后端连接')
          if (read) setResult(r.说)
          tell(r.说 || '已完成', { tone: 'success' })
        } catch (e) { tell('操作失败：' + e.message, { holdMs: 6000 }) }
        finally { setBusy(false) }
      }
      const imageField = 行('图片地址（每行一张）', h('textarea', { style: S.ta, value: images, placeholder: 'https://example.com/photo.jpg', onChange: e => setImages(e.target.value) }),
        '已填写 ' + imageList.length + ' / ' + 9 + ' 张。支持 HTTP(S) 地址和本地图片路径；空间配图路径由 QQ 后端读取。')
      const blocked = busy || 脏
      if (配置.空间浏览开 === false) return null
      return h('section', { className: 'fish-card qq-space-browse', style: S.card },
        h('div', { className: 'qq-space-browse-head' },
          h('h2', null, '浏览动态与评论'),
          h('p', { className: 'fish-muted' }, '查看好友动态、说说正文和评论；此处只读，不会点赞或代发评论。')),
        h('div', { className: 'qq-space-browse-grid' },
          h('label', { className: 'qq-space-field' },
            h('span', null, '查看谁的空间'),
            h('input', { style: S.wide, value: qq, inputMode: 'numeric', placeholder: '留空查看机器人自己的空间', onChange: e => setQQ(e.target.value) })),
          h('label', { className: 'qq-space-field' },
            h('span', null, '说说 ID'),
            h('input', { style: S.wide, value: tid, inputMode: 'numeric', placeholder: '填写说说列表中的 tid', onChange: e => setTid(e.target.value) }))),
        h('div', { className: 'fish-actions qq-space-browse-actions' },
          按钮('查看好友动态', () => run('/space', { action: 'qq_space_feeds', args: { count: 20 } }, true), false, busy),
          按钮('查看说说列表', () => run('/space', { action: 'qq_space_list', args: { qq, num: 20 } }, true), false, busy),
          按钮('查看正文与评论', () => run('/space', { action: 'qq_space_detail', args: { qq, tid: Number(tid) } }, true), false, busy || !/^\d+$/.test(tid))),
        h('pre', { className: 'fish-feed-result', role: 'status' }, result || '选择上方操作，动态会显示在这里。'))
    }

    function Section({ page, onPageChange, guard, notify, help, hideHelp, laterHideHelp, confirm, editRole, openRoleWriter, openFileManager, embedded = false } = {}) {
      const [态, 设态] = React.useState(null)
      const [脏, 设脏] = React.useState(false)
      const [忙, 设忙] = React.useState(false)
      // 旧的内联提示状态保留占位：提示已改由 DSH Toast 显示，保持 hook 顺序与旧测试/宿主兼容。
      const [说, 设说] = React.useState('')
      const 告知 = (text, options) => { if (typeof notify === 'function') notify(text, options) }
      const [localPage, setLocalPage] = React.useState('连接')
      const 页 = page ?? localPage
      const 设页 = onPageChange ?? setLocalPage
      const [asr, 设asr] = React.useState(null)
      const [asr忙, 设asr忙] = React.useState(false)
      const [群规则行, 设群规则行] = React.useState(null) // 哪一行展开了群规则
      const [人设忙, 设人设忙] = React.useState(false)
      const [人设说, 设人设说] = React.useState('')
      const [历史绑定, 设历史绑定] = React.useState('')
      const [历史文件, 设历史文件] = React.useState(null)
      const [历史AI, 设历史AI] = React.useState('')
      const [历史页数, 设历史页数] = React.useState(100)
      const [历史任务, 设历史任务] = React.useState(null)
      const [历史列表, 设历史列表] = React.useState([])
      const [历史忙, 设历史忙] = React.useState(false)
      const [历史说, 设历史说] = React.useState('')
      const [历史控制] = React.useState({ stop: false, running: false })
      const [已存绑定, 设已存绑定] = React.useState([])
      // 新增状态放在 hook 列表末尾，避免影响旧测试和宿主的状态槽顺序。
      const [编辑行, 设编辑行] = React.useState(null)
      const [启动检查中, 设启动检查中] = React.useState(false)
      const [新建映射, 设新建映射] = React.useState(null)
      const [新建忙, 设新建忙] = React.useState(false)
      const [新建错误, 设新建错误] = React.useState('')
      const [新建查名忙, 设新建查名忙] = React.useState(false)
      const [新建查名说, 设新建查名说] = React.useState('')
      const saveRef = React.useRef(null)
      const 总开关校验 = React.useRef(0)
      const 编辑快照 = React.useRef(null)
      const 最新配置 = React.useRef(null)
      const 新建计时 = React.useRef(null)
      最新配置.current = 态?.配置

      React.useEffect(() => {
        get('/history/jobs').then(r => r && r.ok && 设历史列表(r.jobs))
        return () => { 历史控制.stop = true; 总开关校验.current += 1 }
      }, [])

      React.useEffect(() => {
        拉()
        get('/asr-status').then((r) => r && 设asr(r)).catch(() => {})
      }, [])
      // 装依赖的时候每 2 秒看一眼进度（装完就停）
      React.useEffect(() => {
        if (!asr || !asr.进行中) return undefined
        const t = setInterval(() => {
          get('/asr-status').then((r) => { if (r) 设asr(r) }).catch(() => {})
        }, 2000)
        return () => clearInterval(t)
      }, [asr && asr.进行中])

      const 拉 = async () => {
        const s = await get('/state')
        if (s) { 设态(s); 设已存绑定(Array.isArray(s.配置?.绑定) ? s.配置.绑定 : []); 设编辑行(null); 编辑快照.current = null }
      }
      // 只刷新会话下拉需要的数据，不覆盖正在编辑的绑定草稿。
      const 刷新会话 = async () => {
        const s = await get('/state')
        if (!s) return
        设态(旧 => 旧 ? {
          ...旧,
          活着的会话: Array.isArray(s.活着的会话) ? s.活着的会话 : 旧.活着的会话,
          日志: Array.isArray(s.日志) ? s.日志 : 旧.日志,
          NapCat状态: s.NapCat状态 ?? 旧.NapCat状态,
          工作区列表: Array.isArray(s.工作区列表) ? s.工作区列表 : 旧.工作区列表,
          工作区错误: s.工作区错误 || '',
        } : 旧)
      }
      // ⭐ 1.1.2：人设「现在就生效」—— 不用等 QQ 那边来一条消息
      const 应用人设 = async () => {
        设人设忙(true)
        const r = await post('/persona-apply', {})
        设人设忙(false)
        if (!r || !r.ok) {
          告知('角色设定应用失败：' + ((r && r.说) || '请求未响应'), { holdMs: 6000 })
          return
        }
        const 行们 = Array.isArray(r.结果们) ? r.结果们 : []
        if (!行们.length) {
          告知('暂无可以应用角色设定的会话绑定')
          return
        }
        const 不顺 = 行们.filter((x) => !x.生效)
        告知((r.生效 ? '' + r.生效 + ' 个会话已应用' : '未应用到任何会话')
          + (不顺.length ? '；' + 不顺.map((x) => x.聊天 + '：' + x.说).join('；') : ''), { tone: r.生效 ? 'success' : undefined })
      }
      const 切换人设 = async (v) => {
        if (人设忙 || 忙) return
        if (v && !String(配置.人设 || '').trim()) {
          告知('请先填写全局角色设定，再打开开关', { holdMs: 6000 })
          return
        }
        const 旧状态 = Boolean(配置.人设开)
        if (Boolean(v) === 旧状态) return
        const 下一份配置 = { ...((态 && 态.配置) || {}), 人设开: Boolean(v) }
        改('人设开', Boolean(v))
        const 保存成功 = await 存(下一份配置)
        if (!保存成功) {
          改('人设开', 旧状态)
          return
        }
        await 应用人设()
      }
      const 改 = (k, v) => {
        设态((旧) => (旧 ? { ...旧, 配置: { ...(旧.配置 || {}), [k]: v } } : 旧))
        设脏(true)
      }
      // —— 绑定：整份数组替换（宿主那边会再规整一遍、并挡掉重复）——
      const 绑定们 = () => {
        const a = 态 && 态.配置 && 态.配置.绑定
        return Array.isArray(a) ? a : []
      }
      const 设绑定 = (下一份) => 改('绑定', 下一份)
      const 改绑定 = (i, 补) => 设绑定(绑定们().map((x, j) => (j === i ? { ...x, ...补 } : x)))
      const 加绑定 = (类型 = '群') => {
        const 脏前 = 脏
        const 新行 = { 类型, 号码: '', 会话: '', 称呼: '', 门槛: false, 开: false }
        // 群聊的收消息范围改为每条绑定自己说了算；新群默认仅点名（主动回应关闭）。
        if (类型 === '群') 新行.只听点名 = true
        const 下一份 = [...绑定们(), 新行]
        设绑定(下一份)
        编辑快照.current = { index: 下一份.length - 1, existed: false, row: null, dirtyBefore: 脏前 }
        设编辑行(下一份.length - 1)
        void 刷新会话()
      }
      const 打开新建 = (类型) => {
        if (编辑行 != null) { 告知('请先完成当前的映射编辑'); return }
        设新建错误(''); 设新建查名说('')
        if (新建计时.current) { clearTimeout(新建计时.current); 新建计时.current = null }
        设新建映射({ 类型, 号码: '', 称呼: '', 门槛: false, 主动: false, 开: true })
      }
      const 自动拉名称 = async (类型, 号码) => {
        if (!/^[1-9]\d*$/.test(号码)) return
        设新建查名忙(true)
        try {
          const r = await post('/lookup-name', { 类型, 号码 })
          if (!r || !r.ok) throw new Error('lookup failed')
          设新建映射(old => old && String(old.号码) === 号码 ? { ...old, 称呼: String(r.名称 || '') } : old)
          设新建查名说('')
        } catch (e) {
          设新建查名说('拉取失败，请自行填写 QQ 昵称/群名称')
        } finally { 设新建查名忙(false) }
      }
      const 安排拉名称 = (类型, 号码) => {
        if (新建计时.current) { clearTimeout(新建计时.current); 新建计时.current = null }
        设新建查名说('')
        if (!/^[1-9]\d*$/.test(号码)) return
        新建计时.current = setTimeout(() => {
          新建计时.current = null
          void 自动拉名称(类型, 号码)
        }, 450)
      }
      const 创建映射 = async () => {
        if (!新建映射 || 新建忙) return
        const 号码 = String(新建映射.号码 || '').trim()
        const 名称 = String(新建映射.称呼 || '').trim()
        if (!/^[1-9]\d*$/.test(号码)) { 设新建错误(新建映射.类型 === '群' ? '请填写有效的群号' : '请填写有效的 QQ 号'); return }
        if (!名称) { 设新建错误(新建映射.类型 === '群' ? '请填写群名' : '请填写 QQ 名'); return }
        设新建忙(true); 设新建错误('')
        try {
          const r = await post('/create-session', { 名称: 名称 + ' - ' + 号码 })
          if (!r || !r.ok) throw new Error((r && (r.说 || r.error)) || '创建会话失败')
          const 行 = { 类型: 新建映射.类型, 号码, 会话: r.会话, 称呼: 名称, 门槛: Boolean(新建映射.门槛), 开: 新建映射.开 !== false }
          if (新建映射.类型 === '群') 行.只听点名 = !新建映射.主动
          设绑定([...绑定们(), 行])
          设新建映射(null); 设编辑行(null)
          告知('会话已创建，映射已加入草稿；请保存设置。', { tone: 'success' })
          await 刷新会话()
        } catch (e) { 设新建错误(e.message) } finally { 设新建忙(false) }
      }
      const 删绑定 = (i) => {
        设绑定(绑定们().filter((_, j) => j !== i))
        设编辑行(old => old === null ? null : old === i ? null : old > i ? old - 1 : old)
        const 快照 = 编辑快照.current
        if (快照) {
          if (快照.index === i) 编辑快照.current = null
          else if (快照.index > i) 快照.index--
        }
        void 刷新会话()
      }
      const 开始编辑 = (i) => {
        const 目标 = 绑定们()[i]
        if (!目标) return
        编辑快照.current = { index: i, existed: true, row: { ...目标 }, dirtyBefore: 脏 }
        设编辑行(i)
        void 刷新会话()
      }
      const 结束编辑 = () => {
        const 快照 = 编辑快照.current
        if (快照 && 快照.index != null) {
          const 当前 = 绑定们()
          if (!快照.existed) 设绑定(当前.filter((_, j) => j !== 快照.index))
          else if (当前[快照.index]) 设绑定(当前.map((x, j) => j === 快照.index ? 快照.row : x))
          设脏(快照.dirtyBefore)
        }
        设编辑行(null)
        编辑快照.current = null
        void 刷新会话()
      }
      const 取消行编辑 = async () => {
        if (typeof confirm !== 'function') { 结束编辑(); return }
        const ok = await confirm({
          title: '是否取消编辑？',
          description: '当前行尚未保存的修改将被撤销。',
          confirmText: '取消编辑',
          cancelText: '继续编辑',
        })
        if (ok) 结束编辑()
      }

      const 存 = async (覆盖配置) => {
        设忙(true)
        const 当前配置 = 覆盖配置 || (态 && 态.配置) || {}
        // 旧群没有 只听点名 时沿用全局「群里听所有人」。首次保存把当前有效值固化到每条群绑定，
        // 之后每条群都用「主动回应」自己的开关，不再需要在回复门槛里保留全局开关。
        const 待存 = Array.isArray(当前配置.绑定)
          ? { ...当前配置, 绑定: 当前配置.绑定.map(x => (x && (x.类型 || '群') === '群' && x.只听点名 == null)
              ? { ...x, 只听点名: !当前配置.群里听所有人 }
              : x) }
          : 当前配置
        const s = await post('/save', 待存)
        设忙(false)
        if (s && s.ok) {
          设态(s)
          设已存绑定(Array.isArray(s.配置?.绑定) ? s.配置.绑定 : [])
          设编辑行(null)
          编辑快照.current = null
          设脏(false)
          告知(s.说 || '设置已保存', { tone: 'success' })
          void 刷新会话()
          return true
        }
        if (s?.启动检查失败) 改('总开关', false)
        告知((s && s.说) || '保存失败', { holdMs: s?.启动检查失败 ? 14000 : 6000 })
        return false
      }
      saveRef.current = 存
      React.useEffect(() => {
        if (!guard) return
        guard.current = { dirty: 脏, save: () => saveRef.current?.() }
        return () => { if (guard) guard.current = { dirty: false, save: null } }
      }, [脏, guard])
      const 装语音 = async () => {
        设asr忙(true)
        const r = await post('/asr-install', {})
        告知((r && r.说) || '任务已启动', { tone: 'success' })
        设asr忙(false)
        const s2 = await get('/asr-status')
        if (s2) 设asr(s2)
      }
      const 填语音命令 = async () => {
        const r = await get('/asr-status')
        if (r) 设asr(r)
        if (r && r.就绪 && r.命令) {
          改('语音转写', true)
          改('转写命令', r.命令)
          告知(String(配置.语音模型目录 || '').trim()
            ? '命令已填写，请保存设置'
            : '请填写语音模型目录后重新生成命令')
        } else if (r && !r.就绪) 告知('请先安装语音依赖')
        else 告知('无法读取状态')
      }

      const 试一句 = async () => {
        设忙(true)
        const s = await post('/test-send', {})
        设忙(false)
        告知((s && s.说) || '请求未响应')
        await 拉()
      }

      if (!态) return h('div', { className: 'fish-module fish-qq', style: S.wrap }, h('div', { className: 'fish-section-title', style: S.h }, '连接与转发'), h('div', { style: S.dim }, '读取中…'))

      const 配置 = 态.配置 || {}
      const 目标们 = Array.isArray(态.活着的会话) ? 态.活着的会话 : []
      const 日志 = Array.isArray(态.日志) ? 态.日志 : []
      const 绑定 = 绑定们()

      const 会话选项 = (值, onChange) =>
        h('select', {'aria-label': '目标会话', style: S.wide, value: 值 || '', onChange: (e) => onChange(e.target.value) },
          h('option', { value: '' }, '请选择目标会话'),
          ...目标们.map((s) => h('option', { value: s.id }, (s.标题 || '…' + 短id(s.id)) + ' · ' + 短id(s.id))),
          值 && !目标们.some((s) => s.id === 值)
            ? h('option', { value: 值 }, '（当前：' + 短id(值) + '）')
            : null)

      // ── 绑定表格：私聊和群聊分开，一行一条；长会话名也不换行 ──
      const 私聊们 = 绑定.map((x, i) => ({ x, i })).filter(({ x }) => (x.类型 || '群') === '私聊')
      const 群们 = 绑定.map((x, i) => ({ x, i })).filter(({ x }) => (x.类型 || '群') === '群')
      const 私聊编辑中 = 编辑行 != null && 私聊们.some(({ i }) => i === 编辑行)
      const 群编辑中 = 编辑行 != null && 群们.some(({ i }) => i === 编辑行)
      const 点名开 = x => x.类型 === '群' && (x.只听点名 == null ? !配置.群里听所有人 : Boolean(x.只听点名))
      const 字段说明 = {
        '称呼': '转给模型时对消息来源的描述，主要用于图片提示；例如私聊填“小明”，模型会看到“小明发来了图片”；群聊建议填“群友”等统称。',
        '回复门槛': '开启后，模型判断消息是否需要回复；未通过判断时不向 QQ 发送回复。',
        '主动回应': '控制这个群是否只接收点名大肥鱼的消息。关闭后，通常需要 @大肥鱼、引用大肥鱼的消息，或正文命中配置的“点名关键词”才接收；@全体不算。开启后，普通群消息也可以进入后续处理。',
      }
      const 会话名 = (id) => {
        if (!id) return '未选择会话'
        const 会话 = 目标们.find((s) => s.id === id)
        return 会话 ? (会话.标题 || '…' + 短id(会话.id)) : '…' + 短id(id)
      }
      const 状态标 = (开, 名称) => h('span', {
        className: 'qq-bind-mark', 'data-on': 开 ? 'true' : 'false', role: 'img',
        'aria-label': 名称 + (开 ? '：已开启' : '：未开启'),
      }, 开 ? '✓' : '✗')
      const 跳到回复门槛 = () => {
        if (typeof hideHelp === 'function') hideHelp()
        设页('消息策略')
        let 尝试 = 0
        const 滚动到卡片 = () => {
          const 目标 = typeof document !== 'undefined' ? document.getElementById('qq-reply-threshold') : null
          if (目标 && 目标.getClientRects().length) {
            目标.scrollIntoView({ behavior: 'smooth', block: 'center' })
            目标.classList.remove('fish-jump-flash')
            void 目标.offsetWidth
            目标.classList.add('fish-jump-flash')
            setTimeout(() => 目标.classList.remove('fish-jump-flash'), 1500)
            return
          }
          if (++尝试 < 20) setTimeout(滚动到卡片, 60)
        }
        setTimeout(滚动到卡片, 80)
      }
      const 表头格 = 文字 => {
        const 说明 = 字段说明[文字]
        const 帮助链接 = 文字 === '回复门槛' ? { text: '点击跳转回复门槛设置', onClick: 跳到回复门槛 } : null
        const 显示说明 = (e) => { if (typeof help === 'function') help(说明, e.currentTarget, 文字, 帮助链接) }
        const 稍后收起 = () => {
          if (typeof laterHideHelp === 'function') laterHideHelp()
          else if (typeof hideHelp === 'function') hideHelp()
        }
        const 立即收起 = () => { if (typeof hideHelp === 'function') hideHelp() }
        return h('div', { className: 说明 ? 'qq-bind-field-label' : undefined, style: S.表头字 }, 文字,
          说明 ? h('button', {
            type: 'button', className: 'qq-field-help',
            'aria-label': 文字 + '说明：' + 说明, 'data-help': 说明,
            onMouseEnter: 显示说明, onFocus: 显示说明, onClick: 显示说明,
            onMouseLeave: 稍后收起, onBlur: 稍后收起,
            onKeyDown: (e) => { if (e.key === 'Escape') 立即收起() },
          }, '?') : null)
      }

      const 保存行 = async () => {
        if (忙) return
        await 存()
      }

      const 绑定行 = (x, i, 类型) => {
        const 编辑 = 编辑行 === i
        const 是群 = 类型 === '群'
        const 本表编辑中 = 编辑行 != null && ((绑定[编辑行] && (绑定[编辑行].类型 || '群')) === 类型)
        const 请求删除 = async () => {
          if (typeof confirm !== 'function') { 删绑定(i); return }
          const ok = await confirm({
            title: '删除这条映射？',
            description: (是群 ? '群 ' : '私聊 ') + String(x.号码 || '未填写') + ' → ' + 会话名(x.会话)
              + '。确认后会从当前草稿移除，保存设置后才真正生效。',
            confirmText: '删除',
            cancelText: '取消',
            danger: true,
          })
          if (ok) 删绑定(i)
        }
        return h(React.Fragment, { key: i },
          h('div', { className: 'qq-bind-row ' + (是群 ? 'qq-bind-row-group' : 'qq-bind-row-private') + (编辑 ? ' qq-bind-editing' : '') },
            !编辑
              ? h('span', { className: 'qq-bind-read', title: String(x.号码 || '') }, String(x.号码 || '—'))
              : h('input', {
                  'aria-label': 是群 ? '群号' : 'QQ 号',
                  style: S.wide, value: String(x.号码 || ''), placeholder: 是群 ? '群号' : 'QQ 号',
                  onChange: (e) => 改绑定(i, { 号码: e.target.value.trim() }),
                }),
            !编辑
              ? h('span', { className: 'qq-bind-read', title: String(x.称呼 || '') }, String(x.称呼 || '—'))
              : h('input', {
                  'aria-label': '对方称呼', style: S.wide, value: String(x.称呼 || ''),
                  placeholder: 是群 ? '群成员' : '对方',
                  onChange: (e) => 改绑定(i, { 称呼: e.target.value }),
                }),
            !编辑
              ? h('span', { className: 'qq-bind-read qq-bind-session-read', title: 会话名(x.会话) }, 会话名(x.会话))
              : h('div', { className: 'qq-bind-session' }, 会话选项(x.会话, (v) => 改绑定(i, { 会话: v }))),
            是群 ? h('div', { className: 'qq-bind-cell qq-bind-center' },
              编辑 ? 勾(x.门槛, (v) => 改绑定(i, { 门槛: v }), '启用回复门槛') : 状态标(Boolean(x.门槛), '回复门槛')) : null,
            是群 ? h('div', { className: 'qq-bind-cell qq-bind-center' },
              编辑 ? 勾(!点名开(x), (v) => 改绑定(i, { 只听点名: !v }), '主动回应') : 状态标(!点名开(x), '主动回应')) : null,
            h('div', { className: 'qq-bind-cell qq-bind-actions' },
              编辑
                ? [
                    h('button', { key: 'save', type: 'button', className: 'fish-button fish-primary qq-bind-save', disabled: 忙, onClick: 保存行 }, 忙 ? '保存中…' : '保存'),
                    h('button', { key: 'cancel', type: 'button', className: 'fish-button fish-modal-cancel', disabled: 忙, onClick: 取消行编辑 }, '取消'),
                  ]
                : [
                    h('button', { key: 'edit', type: 'button', className: 'fish-button', disabled: 忙, onClick: () => 开始编辑(i) }, '修改'),
                    h('button', { key: 'delete', type: 'button', className: 'fish-button', disabled: 忙, onClick: 请求删除 }, '删除'),
                  ]),
            编辑 || 本表编辑中
              ? h('div', { className: 'qq-bind-cell', 'aria-hidden': true })
              : h('div', { className: 'qq-bind-cell qq-bind-center' },
                  勾(x.开 !== false, (v) => 改绑定(i, { 开: v }), '启用收发 ' + String(x.号码 || '')))),
          是群 && 编辑
            ? h('div', { className: 'qq-bind-detail' },
                h('div', { className: 'qq-bind-detail-head' }, '群规则'),
                h('p', { style: S.dim }, 点名开(x)
                  ? '当前只接收点名消息；下面名单里的号码即使没有点名也会被接收。'
                  : '当前会主动回应普通群消息；关闭主动回应后，可在这里配置点名豁免名单。'),
                点名开(x) ? h('label', { className: 'qq-bind-extra' },
                  h('span', { className: 'qq-bind-extra-label' }, '点名豁免名单（QQ 号，以逗号或空格分隔）'),
                  h('input', {
                    'aria-label': '点名豁免名单',
                    style: { ...S.input, display: 'block', width: '100%', marginTop: 4, boxSizing: 'border-box' },
                    value: String(x.点名例外 || ''),
                    placeholder: '例如 3274796953',
                    onChange: (e) => 改绑定(i, { 点名例外: e.target.value }),
                  })) : null)
            : null)
      }

      const 加映射按钮 = (类型, 文字) => h('button', {
        type: 'button',
        className: 'fish-button' + (编辑行 != null ? ' qq-bind-add-disabled' : ''),
        'aria-disabled': 编辑行 != null || undefined,
        onClick: () => {
          if (编辑行 != null) { 告知('请先完成当前的映射编辑'); return }
          打开新建(类型)
        },
      }, 文字)

      const 私聊卡 = h('div', { style: S.card },
        h('div', { className: 'qq-bind-group-head' },
          h('h3', null, '私聊映射'),
          h('span', { className: 'fish-muted' }, 'QQ 号 → DSH 会话，一行一条。'),
          加映射按钮('私聊', '+ 添加私聊')),
        h('div', { className: 'qq-bind-scroll' },
          h('div', { className: 'qq-bind-table' + (私聊编辑中 ? ' qq-bind-hide-enable' : '') },
            h('div', { className: 'qq-bind-row qq-bind-row-private qq-bind-head' },
              表头格('QQ 号'), 表头格('称呼'), 表头格('目标会话'), 表头格('操作'),
              私聊编辑中 ? h('div', { 'aria-hidden': true, style: S.表头字 }) : 表头格('启用')),
            ...私聊们.map(({ x, i }) => 绑定行(x, i, '私聊')),
            私聊们.length ? null : h('div', { className: 'qq-bind-empty' }, '还没有私聊映射。')),
        ),
        h('div', { className: 'qq-bind-note' }, '新增或修改时只显示保存和取消；保存成功后才会出现启用、修改和删除操作。'))

      const 群卡 = h('div', { style: S.card },
        h('div', { className: 'qq-bind-group-head' },
          h('h3', null, '群聊映射'),
          h('span', { className: 'fish-muted' }, '群号 → DSH 会话；回复门槛与主动回应只对群生效。'),
          加映射按钮('群', '+ 添加群聊')),
        h('div', { className: 'qq-bind-scroll' },
          h('div', { className: 'qq-bind-table' + (群编辑中 ? ' qq-bind-hide-enable' : '') },
            h('div', { className: 'qq-bind-row qq-bind-row-group qq-bind-head' },
              表头格('群号'), 表头格('称呼'), 表头格('目标会话'), 表头格('回复门槛'), 表头格('主动回应'), 表头格('操作'),
              群编辑中 ? h('div', { 'aria-hidden': true, style: S.表头字 }) : 表头格('启用')),
            ...群们.map(({ x, i }) => 绑定行(x, i, '群')),
            群们.length ? null : h('div', { className: 'qq-bind-empty' }, '还没有群聊映射。')),
        ),
        h('div', { className: 'qq-bind-note' }, '回复门槛与主动回应仅适用于群聊；新增或修改时只显示保存和取消，保存成功后才会出现启用、修改和删除操作。'))

      const 绑定提醒 = h('div', { className: 'qq-bind-reminder', role: 'note' },
        h('span', { className: 'qq-bind-reminder-icon', 'aria-hidden': true }, '!'),
        h('span', null, '点击添加映射后，会自动在工作区创建一间会话；创建后可在表格中修改会话。'))

      const 页签 = h('div', { className: 'fish-subnav', style: S.tabBar },
        ...页签们.map((名) => h('button', { type: 'button', key: 名, 'aria-pressed': 页 === 名, style: 页 === 名 ? S.btnOn : S.btn, onClick: () => 设页(名) }, 名)))

      const 历史请求 = async (path, body, memory = false) => {
        const response = await fetch((memory ? '/dsh-fish-memory' : B + '/history') + path, {
          method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body),
        })
        let result
        try { result = await response.json() } catch { throw new Error(memory ? '记忆模块未加载，请重启 DSH 并检查大肥鱼插件状态' : '导入接口未返回 JSON') }
        if (!response.ok || !result.ok) throw new Error(result.说 || result.error || result.message || '请求失败')
        return result
      }
      const 预览历史 = async source => {
        if (历史控制.running) return
        历史控制.running = true
        设历史忙(true); 设历史说('正在读取记录…')
        try {
          if (脏) throw new Error('请先保存绑定设置')
          const binding = 绑定[Number(历史绑定)]
          if (历史绑定 === '' || !binding) throw new Error('请选择 QQ 会话绑定')
          if (source === 'file' && !历史文件) throw new Error('请选择 QCE JSON、OneBot JSON 或 QQ TXT 文件')
          if (历史文件 && source === 'file' && 历史文件.size > 50 * 1024 * 1024) throw new Error('单文件最大 50 MB，请先分文件导出')
          let content
          if (source === 'file') {
            const bytes = await 历史文件.arrayBuffer()
            // QQ 旧版 TXT 常用 GB18030；解码失败再回退，不用替换符静默损坏原文。
            try { content = new TextDecoder('utf-8', { fatal: true }).decode(bytes) }
            catch {
              if (/\.json$/i.test(历史文件.name)) throw new Error('JSON 文件须使用 UTF-8 编码')
              content = new TextDecoder('gb18030', { fatal: true }).decode(bytes)
            }
          }
          const r = await 历史请求('/prepare', { source, type: binding.类型, number: binding.号码, session: binding.会话,
            aiQQ: 历史AI, maxPages: 历史页数, filename: source === 'file' ? 历史文件.name : undefined, content })
          设历史任务(r.job)
          const list = await get('/history/jobs')
          if (list?.ok) 设历史列表(list.jobs)
          设历史说('读取完成，请核对记录范围和发言人身份。')
          告知('历史记录读取完成，请核对范围。', { tone: 'success' })
        } catch (e) { 设历史说('失败：' + e.message); 告知('历史记录读取失败：' + e.message, { holdMs: 6000 }) }
        finally { 历史控制.running = false; 设历史忙(false) }
      }
      const 整理历史 = async () => {
        if (!历史任务 || 历史控制.running) return
        历史控制.running = true; 历史控制.stop = false
        设历史忙(true)
        try {
          const res = await fetch('/dsh-fish-memory/list', { cache: 'no-store' })
          if (!res.ok) throw new Error('记忆模块未加载，请重启 DSH 并检查大肥鱼插件状态')
          const memory = await res.json()
          if (!memory.ok || !Array.isArray(memory.sessions)) throw new Error('鱼的记忆接口不兼容')
          if (memory.模式 !== 'session') throw new Error('请在「鱼的记忆」启用按会话模式，避免跨会话共享历史记录')
          const target = memory.sessions.find(s => s.id === 历史任务.session)
          if (!memory.全局开关 || !target?.enabled) throw new Error('请在「鱼的记忆」启用总开关及目标会话记忆')
          let job = 历史任务
          while (!job.done && !历史控制.stop) {
            设历史说(`正在处理 ${job.completed + 1} / ${job.total} 段（消耗模型额度）…`)
            const analysis = await 历史请求('/analyze', { id: job.id })
            if (历史控制.stop) break
            if (analysis.done) { job = analysis.job; break }
            const pending = analysis.pending
            let receipt = { ok: true, added: 0, batch: null }
            if (pending.items.length) receipt = await 历史请求('/import/apply', { session: job.session, storeId: job.memoryStoreId, items: pending.items }, true)
            const committed = await 历史请求('/commit', { id: job.id, token: pending.token, result: receipt })
            job = committed.job; 设历史任务(job)
          }
          设历史任务(job)
          设历史说(job.done ? '处理完成，可在「鱼的记忆」核查结果。' : '已暂停，可从已保存进度继续。')
          告知(job.done ? '历史整理完成，可在「鱼的记忆」核查结果。' : '历史整理已暂停，进度已保存。', { tone: job.done ? 'success' : undefined, holdMs: 6000 })
          const list = await get('/history/jobs')
          if (list?.ok) 设历史列表(list.jobs)
        } catch (e) { 设历史说('失败：' + e.message + '；进度已保存，可重试。'); 告知('历史整理失败：' + e.message + '；进度已保存，可重试。', { holdMs: 7000 }) }
        finally { 历史控制.running = false; 设历史忙(false) }
      }
      const 历史页 = h('div', { style: S.stack },
        h('div', { style: S.card },
          h('div', { className: 'fish-section-title', style: S.h }, '导入 QQ 聊天记录'),
          h('p', null, '按时间分段读取记录，通过摘要衔接上下文并写入「鱼的记忆 Plus」。目标会话需使用 DeepSeek。'),
          行('目标会话绑定', h('select', { style: S.wide, value: 历史绑定, disabled: 历史忙, 'aria-label': '历史导入绑定', onChange: e => 设历史绑定(e.target.value) },
            h('option', { value: '' }, '请选择已保存的绑定'),
            ...绑定.map((b, i) => h('option', { key: i, value: String(i) }, `${b.类型} ${b.号码} → ${b.会话}`)))),
          行('AI 对应的 QQ 号（选填）', h('input', { style: S.input, value: 历史AI, disabled: 历史忙, 'aria-label': 'AI 对应的 QQ 号', onChange: e => 设历史AI(e.target.value) }),
            '指定 AI 身份对应的 QQ 号；留空则保留原发言人姓名。'),
          行('历史读取上限（页）', h('input', { style: S.small, type: 'number', min: 1, max: 1000, value: 历史页数, disabled: 历史忙, 'aria-label': '最多读取页数', onChange: e => 设历史页数(Number(e.target.value)) }),
            '每页请求 100 条；可读取范围取决于后端缓存。'),
          按钮('读取后端记录', () => 预览历史('backend'), false, 历史忙),
          行('聊天记录文件', h('input', { type: 'file', accept: '.json,.txt', disabled: 历史忙, 'aria-label': '聊天记录文件', onChange: e => 设历史文件(e.target.files?.[0] || null) }),
            '支持 QCE 单文件 JSON、OneBot JSON、QQ 原生 TXT（UTF-8 / GB18030），单文件最大 50 MB。'),
          按钮('预览文件', () => 预览历史('file'), false, 历史忙),
          h('p', { style: S.dim }, '原文和进度保存在本机 qq-history-imports。整理将调用模型并消耗额度；图片、语音仅保留文字标记。'),
        ),
        h('div', { style: S.card },
          行('已保存任务', h('select', { style: S.wide, value: 历史任务?.id || '', disabled: 历史忙, 'aria-label': '恢复历史导入任务', onChange: e => 设历史任务(历史列表.find(j => j.id === e.target.value) || null) },
            h('option', { value: '' }, '请选择导入任务'),
            ...历史列表.map(j => h('option', { key: j.id, value: j.id }, `${j.filename} → ${j.session}（${j.completed}/${j.total}）`)))),
          历史任务 ? h('div', null,
            h('div', null, `${历史任务.format}｜${历史任务.count} 条｜去重 ${历史任务.duplicates} 条｜${历史任务.completed}/${历史任务.total} 段`),
            h('div', null, `目标：${历史任务.binding.类型} ${历史任务.binding.号码} → ${历史任务.session}；AI QQ：${历史任务.aiQQ || '未指定'}`),
            h('div', null, `时间：${历史任务.start || '未知'} ～ ${历史任务.end || '未知'}`),
            h('p', null, 历史任务.warning),
            h('progress', { value: 历史任务.completed, max: 历史任务.total, 'aria-label': '历史导入进度' }),
            h('pre', { style: { ...S.日志行, maxHeight: 240, overflow: 'auto' } }, 历史任务.preview),
            按钮(历史任务.done ? '已完成' : '开始 / 继续导入', 整理历史, true, 历史忙 || 历史任务.done),
          ) : null,
          历史忙 ? 按钮('暂停导入', () => { 历史控制.stop = true; 设历史说('正在暂停，等待当前请求结束并保存结果…') }, false, false) : null,
          h('div', { role: 'status', style: { whiteSpace: 'pre-wrap' } }, 历史说),
        ),
      )

      // ───────────── 总览 ─────────────
      const 总开关卡片 = h('div', { style: S.card },
        h('div', { style: { ...S.h, margin: '0 0 8px' } }, '大肥鱼，启动！'),
        行('总开关', 勾(配置.总开关, async v => {
          if (启动检查中 || 忙) return
          const 校验号 = ++总开关校验.current
          设启动检查中(true)
          const r = await post('/power', { 开: v, 配置: { ...配置, 总开关: v } })
          if (总开关校验.current !== 校验号) return
          设启动检查中(false)
          if (!r?.ok) {
            告知(r?.说 || '总开关切换失败，请确认 DSH 后端正在运行后重试。', { holdMs: 14000 })
            return
          }
          设态(r)
          设已存绑定(Array.isArray(r.配置?.绑定) ? r.配置.绑定 : [])
          设脏(false)
          if (r.用户) 设态(旧 => 旧 ? { ...旧, NapCat状态: { 用户: r.用户, 昵称: r.昵称 } } : 旧)
          告知(r.说 || (v ? '大肥鱼已启动' : '大肥鱼已停止'), { tone: 'success', holdMs: v ? 6000 : 3000 })
        }, '大肥鱼总开关', 启动检查中 || 忙), 启动检查中 ? '正在切换总开关…' : undefined),
        行('绑定工作区', h('select', { 'aria-label': '绑定工作区', style: S.input, value: 配置.工作区 || '', onFocus: 刷新会话, onChange: e => 改('工作区', e.target.value) },
          h('option', { value: '' }, '请选择工作区'),
          配置.工作区 && !(态.工作区列表 || []).some(w => w.id === 配置.工作区) ? h('option', { value: 配置.工作区, disabled: true }, '原绑定工作区已不可用，请重新选择') : null,
          ...(态.工作区列表 || []).map(w => h('option', { key: w.id, value: w.id, disabled: w.available === false }, w.title + ' · ' + w.path + (w.available === false ? '（目录不可用）' : '')))),
          '选择将大肥鱼养在哪个工作区中'),
        态.工作区错误 ? h('p', { style: S.dim, role: 'alert' }, 态.工作区错误) : null,
      )
      const 总览卡片 = [
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '基础策略与通知'),
          行('试运行', 勾(配置.试运行, (v) => 改('试运行', v)), '仅记录发送日志，不实际发送 QQ 消息。'),
          // ⭐ 1.5.0（issue #29）：戳一戳这类通知 —— 它们不是消息，拉历史拉不到，只能让 OneBot 主动推
          行('接收 QQ 通知', 勾(配置.收通知, (v) => 改('收通知', v)),
            '通知通过 OneBot HTTP 上报接收。'
            + '上报地址：'
            + 'http://127.0.0.1:<DSH 端口>' + B + '/notice。'
            + '仅处理 notice，消息仍通过轮询接收。'),
          行('上报口令（选填）', h('input', {'aria-label': '通知口令',
            style: S.wide,
            value: String(配置.通知口令 || ''),
            placeholder: '留空不校验口令',
            onChange: (e) => 改('通知口令', e.target.value),
          }), '填写后，上报地址须附带 ?token=口令；留空不校验来源口令。'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '会话绑定（' + 绑定.length + ' 条）'),
          绑定.length === 0
            ? h('div', { style: S.dim }, '暂无绑定，请在「绑定」中添加 QQ 与 DSH 会话映射。')
            : h('div', null,
              ...绑定.map((x, i) => h('div', { key: i, style: { marginBottom: 4 } },
                (x.类型 === '群' ? '群 ' : '私聊 ') + String(x.号码 || '?')
                + ' → ' + (x.会话 ? 短id(x.会话) : '未选择会话')
                + (x.称呼 ? '　称呼：' + x.称呼 : '')
                + (x.类型 === '群' && x.门槛 ? '　回复门槛：已启用' : '')))),
          h('div', { style: { marginTop: 6 } }, 按钮('管理配置', () => 设页('绑定'))),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '最近 ' + 日志.length + ' 条日志（按时间升序）'),
          h('div', { style: { marginTop: 6, maxHeight: 220, overflowY: 'auto' } },
            日志.length === 0
              ? h('div', { style: S.dim }, '暂无日志。')
              : 日志.map((条, i) => h('div', { key: i, style: S.日志行 }, 条.时间 + '　' + 条.文本))),
        ),
      ]

      // ───────────── 绑定 ─────────────
      const 绑定卡片 = [
        h('div', { style: S.card },
          h('div', { className: 'qq-role-head' },
            h('h2', { style: { ...S.h, margin: 0 } }, '全局角色设定'),
            h('label', { className: 'qq-role-toggle', title: String(配置.人设 || '').trim() || 配置.人设开 ? '启用或停用全局角色设定' : '请先填写全局角色设定' },
              h('input', {
                'aria-label': '启用角色设定', type: 'checkbox', role: 'switch',
                checked: Boolean(配置.人设开),
                disabled: 人设忙 || 忙 || (!配置.人设开 && !String(配置.人设 || '').trim()),
                onChange: (e) => 切换人设(e.target.checked),
              }))),
          h('p', { className: 'qq-role-desc' }, '未配置独立角色的会话使用全局设定。'),
          h('p', { className: 'qq-role-hint' }, '建议简洁描述，减少上下文占用。'),
          h('textarea', {'aria-label': '人设',
            style: { ...S.input, display: 'block', width: '100%', height: 88, marginTop: 14, resize: 'vertical', fontFamily: 'inherit', lineHeight: 1.5, boxSizing: 'border-box' },
            value: String(配置.人设 || ''),
            placeholder: '输入角色身份、表达风格与交互要求。',
            onChange: (e) => 改('人设', e.target.value),
          }),
        ),
        h('div', { className: 'qq-binding-groups' }, 私聊卡, 群卡,
        新建映射 ? h('div', { className: 'fish-modal', onMouseDown: (e) => { if (e.target === e.currentTarget && !新建忙) { 设新建映射(null); 设新建错误('') } } },
          h('div', { className: 'fish-modal-card qq-bind-add-modal', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'qq-bind-add-title',
            onKeyDown: (e) => { if (e.key === 'Escape' && !新建忙) { 设新建映射(null); 设新建错误('') } } },
            h('span', { className: 'fish-kicker' }, 'BIND · 新建映射'),
            h('h2', { id: 'qq-bind-add-title' }, 新建映射.类型 === '群' ? '添加群聊映射' : '添加私聊映射'),
            h('div', { className: 'qq-bind-modal-fields' },
              h('label', { className: 'qq-bind-modal-field' },
                h('span', null, 新建映射.类型 === '群' ? '群号' : 'QQ 号'),
                h('input', { style: S.wide, value: 新建映射.号码, inputMode: 'numeric', placeholder: 新建映射.类型 === '群' ? '填写群号' : '填写 QQ 号', onChange: (e) => { const v = e.target.value.trim(); 设新建映射(old => ({ ...old, 号码: v })); 安排拉名称(新建映射.类型, v) } })),
              h('label', { className: 'qq-bind-modal-field' },
                h('span', null, 新建映射.类型 === '群' ? '群名' : 'QQ 昵称'),
                h('input', { style: S.wide, value: 新建映射.称呼, placeholder: 新建映射.类型 === '群' ? '填写或自动获取群名' : '填写或自动获取 QQ 昵称', onChange: (e) => 设新建映射(old => ({ ...old, 称呼: e.target.value })) })),
              新建查名说 ? h('div', { className: 'qq-bind-modal-lookup', role: 'status' }, 新建查名说) : null,
              新建映射.类型 === '群' ? h('div', { className: 'qq-bind-modal-toggles' },
                h('label', { className: 'qq-bind-modal-toggle' }, h('span', null, '启用回复门槛'), 勾(新建映射.门槛, (v) => 设新建映射(old => ({ ...old, 门槛: v })), '启用回复门槛')),
                h('label', { className: 'qq-bind-modal-toggle' }, h('span', null, '主动回应'), 勾(新建映射.主动, (v) => 设新建映射(old => ({ ...old, 主动: v })), '主动回应'))) : null,
              h('label', { className: 'qq-bind-modal-toggle' }, h('span', null, '启用收发'), 勾(新建映射.开 !== false, (v) => 设新建映射(old => ({ ...old, 开: v })), '启用收发'))),
            新建错误 ? h('p', { className: 'fish-modal-error', role: 'alert' }, 新建错误) : null,
            h('div', { className: 'fish-modal-actions' },
              h('button', { type: 'button', className: 'fish-button fish-primary', disabled: 新建忙, onClick: () => { void 创建映射() } }, 新建忙 ? '创建中…' : '创建并绑定'),
              h('button', { type: 'button', className: 'fish-button fish-modal-cancel', disabled: 新建忙, onClick: () => { 设新建映射(null); 设新建错误('') } }, '取消')))) : null),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '群聊频率与概率'),
          h('div', { style: S.dim },
            '以下设置控制群聊处理频率与回复概率。'),
          行('回复冷却时间（秒）', h('input', {'aria-label': '回复冷却秒',  type: 'number', min: 0, max: 300, style: S.small, value: String(配置.回复冷却秒 ?? 5), onChange: (e) => 改('回复冷却秒', Number(e.target.value)) }), '冷却期间的消息等待合并处理，默认 5 秒。'),
          行('每分钟处理上限（条）', h('input', {'aria-label': '每分钟最多条',  type: 'number', min: 1, max: 120, style: S.small, value: String(配置.每分钟最多条 ?? 4), onChange: (e) => 改('每分钟最多条', Number(e.target.value)) }), '超出限制的消息等待下一时间窗口，默认 4 条。'),
          行('单批合并上限（条）', h('input', {'aria-label': '合并最多条',  type: 'number', min: 1, max: 50, style: S.small, value: String(配置.合并最多条 ?? 8), onChange: (e) => 改('合并最多条', Number(e.target.value)) }), '合并时保留发言人标识，默认 8 条。'),
          行('私聊来源标识', h('select', {'aria-label': '私聊署名',  style: S.small, value: String(配置.私聊署名 || '关'), onChange: (e) => 改('私聊署名', e.target.value) },
            h('option', { value: '关' }, '无标识'), h('option', { value: '前缀' }, '[QQ] 前缀'), h('option', { value: '署名' }, '署名（对方：…）')),
            '区分 QQ 消息与 DSH 手动输入，默认不标记。'),
          行('点名消息必回', h('input', {'aria-label': '点名必回',  type: 'checkbox', role: 'switch', checked: 配置.点名必回 !== false, onChange: (e) => 改('点名必回', Boolean(e.target.checked)) }), '默认启用；禁用后，点名消息也受回复概率限制。'),
          行('回复概率（%）', h('input', {'aria-label': '回复概率',  type: 'number', min: 0, max: 100, style: S.small, value: String(配置.回复概率 ?? 100), onChange: (e) => 改('回复概率', Number(e.target.value)) }), '默认 100%；未选中的消息不进入模型上下文。'),
          h('div', { style: { ...S.dim, marginTop: 4 } }, '合并窗口可在「消息收发」中配置，默认 3 秒。'),
        ),
      ]

      // ───────────── 消息 ─────────────
      const 消息卡片 = [
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, 'QQ 后端连接'),
          行('接口地址', h('input', {'aria-label': 'QQ 后端连接', style: S.wide, value: String(配置.NapCat || 'http://127.0.0.1:3000'), onChange: (e) => 改('NapCat', e.target.value) }), 'OneBot HTTP 地址'),
          行('接口令牌', h('input', {'aria-label': '令牌', type: 'password', style: S.wide, value: String(配置.令牌 || ''), onChange: (e) => 改('令牌', e.target.value) }), 'HTTP API 服务 -> 鉴权 -> 授权 Token'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '发送格式'),
          行('仅发送 [QQ] 标记内容', 勾(配置.只发标记内, (v) => 改('只发标记内', v)), '仅发送 [QQ]…[/QQ] 内的内容；转入消息会附带格式提示。'),
          行('仅转发 QQ 触发的回复', 勾(配置.只回QQ唤醒, (v) => 改('只回QQ唤醒', v)), '仅转发由 QQ 消息触发的回复。'),
          行('包含自动触发的回复', 勾(配置.自动触发也发, (v) => 改('自动触发也发', v)), '启用后包含主动消息和定时任务；DSH 手动对话不转发。'),
          行('拆分长回复', 勾(配置.长回复拆段, (v) => 改('长回复拆段', v)), '默认按空行拆分；禁用后整段发送。'),
          行('按句拆分', 勾(配置.按句拆, (v) => 改('按句拆', v)), '按句末标点拆分，括号内标点除外；默认禁用。'),
          行('分段发送间隔（毫秒）', h('input', {'aria-label': '拆段间隔毫秒',  type: 'number', min: 0, max: 5000, style: S.small, value: String(配置.拆段间隔毫秒 ?? 450), onChange: (e) => 改('拆段间隔毫秒', Number(e.target.value)) }), '仅在启用拆分时生效，默认 450 毫秒。'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '接收与合并'),
          行('合并窗口（秒）', h('input', {'aria-label': '合并窗口秒',  type: 'number', min: 0, max: 60, style: S.small, value: String(配置.合并窗口秒 ?? 3), onChange: (e) => 改('合并窗口秒', Number(e.target.value)) }), '同一发言人的连续消息合并处理；0 为禁用，默认 3 秒。'),
          行('最长合并等待（秒）', h('input', {'aria-label': '合并最多秒',  type: 'number', min: 3, max: 300, style: S.small, value: String(配置.合并最多秒 ?? 20), onChange: (e) => 改('合并最多秒', Number(e.target.value)) }), '达到时限后处理已接收的消息，默认 20 秒。'),
          行('消息轮询间隔（毫秒）', h('input', {'aria-label': '轮询间隔毫秒',  type: 'number', min: 800, max: 30000, style: S.small, value: String(配置.轮询间隔毫秒 ?? 2000), onChange: (e) => 改('轮询间隔毫秒', Number(e.target.value)) }), '默认 2000 毫秒，修改后需重启 DSH。'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, 'QQ 图片接收'),
          行('接收图片（QQ → DSH）', 勾(配置.收图, (v) => 改('收图', v)), '将 QQ 消息中的图片交给 DSH 理解，受图片页的单张大小上限约束。'),
          行('每条消息最多接收图片', h('input', {'aria-label': '收图最多', type: 'number', min: 1, max: 10, style: S.small, value: String(配置.收图最多 ?? 4), onChange: (e) => 改('收图最多', Number(e.target.value)) }), '接收最多 10 张，超出部分跳过。'),
          行('开启图片存储', 勾(配置.图片存储, v => 改('图片存储', v)), '默认关闭。开启后额外保存 QQ 接收图片的原图；关闭只停止新增归档，不影响 DSH 正常接收与理解图片。'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, 'DSH 生成文件转发'),
          行('发送文件（DSH → QQ）', 勾(配置.发文件, (v) => 改('发文件', v)), '将 DSH 会话回复中的生成文件链接上传至 QQ；图片语法单独处理。'),
          行('单文件上限（MB）', h('input', {'aria-label': '文件上限MB',  type: 'number', min: 1, max: 2048, style: S.small, value: String(配置.文件上限MB ?? 50), onChange: (e) => 改('文件上限MB', Number(e.target.value)) }), '超限时发送说明；同时受 QQ 后端限制。'),
          行('文件仅发送至私聊', 勾(配置.文件仅私聊 !== false, (v) => 改('文件仅私聊', v)), '默认启用；禁用后允许向群聊上传文件。'),
          h('div', { style: S.dim }, '含空格的路径需使用尖括号：[报告](<D:\\我的 文档\\报告.docx>)。网页链接不作为文件处理。'),
        ),
        h('div', { className: 'qq-voice-card', style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 18px' } }, '语音转写'),
          行('转写语音（DSH → QQ）', 勾(配置.语音转写, (v) => 改('语音转写', v)), '通过指定命令转写语音；禁用时仅保留语音标记。'),
          // —— 一键装依赖 ——
          h('div', { className: 'fish-form-row qq-voice-env', style: { ...S.row, alignItems: 'flex-start' } },
            h('div', { className: 'fish-form-label', style: S.lab }, '语音识别环境'),
            h('div', { className: 'fish-control', style: S.ctl },
              h('div', { className: 'qq-voice-actions' },
                按钮(asr忙 ? '…' : (asr && asr.就绪 ? '重新安装' : '安装语音依赖'), 装语音, !(asr && asr.就绪), asr忙 || Boolean(asr && asr.进行中)),
                按钮('生成转写命令', 填语音命令, false, false)),
              h('div', { style: S.hint },
                asr && asr.就绪 && asr.模型就绪
                  ? '环境与模型已就绪：' + String(asr.python || '')
                  : asr && asr.就绪
                    ? '环境已就绪，模型未下载完成，可重新安装以继续下载。'
                  : '安装独立环境及 sherpa-onnx、numpy 和语音模型。'),
              // 进度
              asr && asr.步骤 && asr.步骤.length
                ? h('div', { style: { marginTop: 8 } },
                  ...asr.步骤.map((x, i) => h('div', { key: i, style: { fontSize: 'var(--fish-small)' } },
                    (x.态 === '完成' ? '' : x.态 === '失败' ? '失败：' : '⋯ ') + x.名 + (x.附 ? '（' + x.附 + '）' : ''))))
                : null,
              // —— 下载进度条（模型 230MB，得让人看见下了多少）——
              asr && asr.下载
                ? h('div', { style: { marginTop: 8 } },
                  h('div', { style: { height: 8, borderRadius: 6, background: 'var(--fish-line)', overflow: 'hidden' } },
                    h('div', {
                      style: {
                        height: '100%', width: String(asr.下载.百分比 || 0) + '%',
                        background: 'var(--dsw-alias-state-business-primary)', transition: 'width .4s',
                      },
                    })),
                  h('div', { style: { ...S.dim, marginTop: 4 } },
                    (asr.下载.文件 ? '正在下载 ' + asr.下载.文件 + '：' : '')
                    + '已下载 ' + Math.round((asr.下载.已收 || 0) / 1048576) + 'MB'
                    + (asr.下载.总 ? ' / ' + Math.round(asr.下载.总 / 1048576) + 'MB' : '')
                    + '（' + String(asr.下载.百分比 || 0) + '%）'
                    + (asr.下载.速度KB ? '　约 ' + (asr.下载.速度KB > 1024 ? (asr.下载.速度KB / 1024).toFixed(1) + 'MB/s' : asr.下载.速度KB + 'KB/s') : '')))
                : null,
              asr && asr.进行中 ? h('div', { style: { ...S.dim, marginTop: 4 } }, '正在安装，已用时 ' + String(asr.用时秒 || 0) + ' 秒（每 2 秒刷新一次）') : null,
              asr && asr.失败 ? h('div', { style: { color: 'var(--fish-danger)', fontSize: 'var(--fish-small)', marginTop: 4 } }, '失败：' + asr.失败) : null,
              asr && asr.日志
                ? h('div', { style: { marginTop: 8 } },
                  h('div', { style: S.dim }, '安装日志'),
                  h('div', { style: { ...S.日志行, maxHeight: 160, overflowY: 'auto', whiteSpace: 'pre-wrap', marginTop: 4 } }, String(asr.日志)))
                : null)),
          行('转写命令', h('input', {'aria-label': '转写命令',
            style: S.wide,
            placeholder: 'python D:\\asr_cli.py "{file}"',
            value: String(配置.转写命令 || ''),
            onChange: (e) => 改('转写命令', e.target.value),
          }), '命令须包含 {file}，向 stdout 输出转写文本；非零退出码视为失败。'),
          行('语音模型目录', h('input', {'aria-label': '语音模型目录',
            style: S.wide,
            placeholder: '安装依赖后自动填写',
            value: String(配置.语音模型目录 || ''),
            onChange: (e) => 改('语音模型目录', e.target.value),
          }), '安装时自动下载模型并填写目录；使用自备模型时可手动修改。'),
          行('超时（秒）', h('input', {'aria-label': '转写超时秒',  type: 'number', min: 5, max: 600, style: S.small, value: String(配置.转写超时秒 ?? 60), onChange: (e) => 改('转写超时秒', Number(e.target.value)) }), '超时后终止命令，默认 60 秒。'),
          h('div', { className: 'qq-voice-cost' },
            h('p', { className: 'qq-voice-cost-intro' }, '语音转写的本地性能开销如下'),
            h('table', { className: 'qq-voice-cost-table' },
              h('thead', null, h('tr', null, h('th', { scope: 'col' }, '项目'), h('th', { scope: 'col' }, '预计开销'))),
              h('tbody', null, ...[
                ['CPU', '当前默认使用 4 个推理线程，转写期间短暂占用 CPU'],
                ['内存', '每次识别进程可先预留约 0.5～1.5GB'],
                ['本地处理延迟', '可先按每条约 1～5 秒预留，另加下载及格式转换时间'],
                ['磁盘', '模型约 230MB，连同 Python 环境和依赖建议预留 1～2GB'],
                ['API 费用', '本地识别不产生 API 费用；转写文字交给 DeepSeek 后，对话用量照常计算'],
              ].map(([项目, 开销]) => h('tr', { key: 项目 }, h('th', { scope: 'row' }, 项目), h('td', null, 开销))))),
            h('p', { className: 'qq-voice-cost-note' },
              '当前每条语音都会重新启动 Python、加载模型，结束后识别进程退出，模型不常驻。低频聊天负担通常可控；连续语音会反复加载，而且转写等待会拖延当前收消息流程。')),
        ),
      ]

      // ───────────── 门槛 ─────────────
      const 门槛卡片 = [
        h('div', { id: 'qq-reply-threshold', style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '回复门槛'),
          h('div', { style: S.dim },
            '回复门槛按绑定单独启用。'
            + '私聊不执行门槛判断。'),
          h('div', { style: { ...S.dim, marginTop: 6 } },
            '模型判断消息是否需要回复；未通过判断时不向 QQ 发送回复。'),
          行('未通过门槛时终止推理', 勾(配置.门槛真停轮, (v) => 改('门槛真停轮', v)), '默认仅阻止转发；启用后终止当前轮次，可能显示 tool call aborted。'),
          h('div', { style: { ...S.dim, marginTop: 6 } },
            '启用门槛会新增工具，目标会话的下一次请求可能重新计算上下文。'),
          行('点名关键词', h('input', {'aria-label': '点名关键词',
            style: S.wide,
            value: String(配置.点名关键词 || ''),
            placeholder: '留空仅识别 @ 和引用',
            onChange: (e) => 改('点名关键词', e.target.value),
          }), '正文匹配关键词时视为点名；多个关键词以逗号或空格分隔。'),
          // ⭐ 群聊接收范围已挪到「绑定」页每条群绑定自己的「主动回应」开关；
          //    旧配置里 只听点名 == null 的群会在保存时固化，不再需要这个全局开关。
          h('div', { style: { ...S.dim, marginTop: 8 } },
            '每个群是否接收全部消息，改由「绑定」页对应群的「主动回应」单独控制；旧配置会在下次保存时固化当前值。'),
          // ⭐ 1.4.1：被点名之后，同一个群后面紧跟着的几句也放进来（不然接话接不上前文）
          行('点名后续接收上限（条）', h('input', {'aria-label': '点名后接听条',  type: 'number', min: 0, max: 50, style: S.small, value: String(配置.点名后接听条 ?? 5), onChange: (e) => 改('点名后接听条', Number(e.target.value)) }),
            '点名后继续接收同群后续消息，默认 5 条；0 为禁用。'),
          行('点名后续接收时限（秒）', h('input', {'aria-label': '点名后接听秒',  type: 'number', min: 0, max: 600, style: S.small, value: String(配置.点名后接听秒 ?? 120), onChange: (e) => 改('点名后接听秒', Number(e.target.value)) }),
            '到期后恢复仅接收点名消息，默认 120 秒。'),
        ),
      ]

      // ───────────── 空间 ─────────────
      const 空间定时 = () => {
        const a = 配置.空间定时发
        return Array.isArray(a) ? a : []
      }
      const 设空间定时 = (下一份) => 改('空间定时发', 下一份)
      const 改空间定时 = (i, 补) => 设空间定时(空间定时().map((x, j) => (j === i ? { ...x, ...补 } : x)))
      const 加空间定时 = () => 设空间定时([...空间定时(), { 时: '09:30', 权: 1, 开: true }].slice(0, 12))
      const 删空间定时 = (i) => 设空间定时(空间定时().filter((_, j) => j !== i))

      const 空间卡片 = [
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '开关'),
          行('允许发布 QQ 空间动态', 勾(配置.允许发空间动态, (v) => 改('允许发空间动态', v)), '默认禁用发布，不影响查看动态。'),
          行('浏览动态与评论', 勾(配置.空间浏览开 !== false, (v) => 改('空间浏览开', v)), '关闭后隐藏手动浏览卡片；不影响定时发布和自动同步。'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '定时发布'),
          h('div', { style: S.dim }, '按宿主所在时区，每分钟检查一次；到点提醒一个已绑定且打开的会话。模型自行决定是否发布，不保证每次都发；可见范围作为提示传给模型，实际以其调用参数为准。发布需开启空间发布开关；空间任务独立于消息转发总开关和试运行。'),
          h('div', { className: 'fish-schedule-row fish-binding-head', style: { ...S.空间表头, marginTop: 10 } },
            h('div', { style: S.表头字 }, '时间'),
            h('div', { style: S.表头字 }, '提示可见范围'),
            h('div', { style: S.表头字 }, '启用'),
            h('div', { style: S.表头字 }, '')),
          空间定时().length === 0
            ? h('div', { style: { ...S.dim, margin: '8px 0' } }, '暂无条目，请添加。')
            : h('div', null, ...空间定时().map((x, i) => h('div', { key: i, className: 'fish-schedule-row', style: S.空间行 },
              h('input', {'aria-label': '发布时间 ' + (i + 1),
                type: 'time', style: S.wide, value: String(x.时 || '09:30'),
                onChange: (e) => 改空间定时(i, { 时: e.target.value }),
              }),
              h('select', {'aria-label': '可见范围 ' + (i + 1),
                style: S.wide, value: String(x.权 || 1),
                onChange: (e) => 改空间定时(i, { 权: Number(e.target.value) }),
              },
                h('option', { value: '1' }, '所有人'),
                h('option', { value: '4' }, '好友'),
                h('option', { value: '64' }, '仅自己')),
              h('div', null, 勾(x.开 !== false, (v) => 改空间定时(i, { 开: v }), '启用计划 ' + (i + 1))),
              h('div', null, 按钮('删除', () => 删空间定时(i), false, false))))),
          h('div', { style: { marginTop: 8 } },
            按钮('+ 添加条目', 加空间定时, false, false),
            h('span', { style: S.dim }, '　最多 12 条')),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '好友动态同步'),
          行('同步间隔（分钟）', h('input', {'aria-label': '空间看圈分',  type: 'number', min: 5, max: 1440, style: S.small, value: String(配置.空间看圈分 ?? 30), onChange: (e) => 改('空间看圈分', Number(e.target.value)) }), '5～1440，默认 30。'),
          行('启用同步', 勾(配置.空间看圈开, (v) => 改('空间看圈开', v)), '至少启用点赞或动态递送之一才会请求好友动态；空间任务不受消息转发总开关和试运行控制。'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '点赞 / 评论'),
          行('自动点赞', 勾(配置.空间点赞开, (v) => 改('空间点赞开', v)), '同步时点赞近期未处理动态，每次最多 3 条、每日最多 20 条。'),
          行('递送动态给模型（评论提醒）', 勾(配置.空间评论开, (v) => 改('空间评论开', v)), '将新动态转入会话。当前模块没有发表评论的工具，真正评论需要会话另有可用工具；打开此开关不代表会自动发表评论。'),
        ),
      ]

      const 角色编辑图标 = () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' },
        h('path', { d: 'M4 20h4l10-10-4-4L4 16v4Z' }), h('path', { d: 'm13 7 4 4' }))
      const 角色删除图标 = () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' },
        h('path', { d: 'M4 7h16' }), h('path', { d: 'M9 7V4h6v3' }), h('path', { d: 'm6 7 1 13h10l1-13' }), h('path', { d: 'M10 11v5M14 11v5' }))

      const 角色会话名 = id => {
        if (!id) return '未选择会话'
        const 会话 = 目标们.find(s => s.id === id)
        return 会话 ? (会话.标题 || '…' + 短id(会话.id)) : '…' + 短id(id)
      }
      const 编辑角色 = async (i, x, label) => {
        if (i < 0 || typeof editRole !== 'function') return
        const 文字 = await editRole({
          title: '编辑角色设定',
          description: label + ' · 目标会话：' + 角色会话名(x.会话),
          value: String((绑定[i] && 绑定[i].人设) || ''),
          placeholder: '留空表示继承全局角色设定。',
          confirmText: '保存',
          cancelText: '取消',
        })
        if (文字 !== null) 改绑定(i, { 人设: 文字 })
      }
      const 删除角色 = async (i, label) => {
        if (i < 0) return
        if (typeof confirm === 'function') {
          const ok = await confirm({
            title: '删除后本会话的角色设定将还原到全局角色设定，是否确认删除？',
            description: label + '。只清除这个会话的单独设定，不会删除聊天绑定。',
            confirmText: '删除',
            cancelText: '取消',
            danger: true,
          })
          if (!ok) return
        }
        改绑定(i, { 人设: '' })
      }
      const 映射角色 = 类型 => {
        const 行们 = 已存绑定.filter(x => x.类型 === 类型)
        const 标题 = 类型 === '群' ? '群聊角色设定' : '私聊角色设定'
        return h('section', { style: S.card, className: 'qq-role-card' },
          h('h3', null, 标题),
          行们.length ? h('div', { className: 'qq-role-table-wrap' },
            h('table', { className: 'qq-role-table' },
              h('thead', null, h('tr', null,
                h('th', null, 类型 === '群' ? '群号' : 'QQ 号'),
                h('th', null, '目标会话'),
                h('th', null, '角色设定文字'),
                h('th', { className: 'qq-role-col-icon' }, '编辑'),
                h('th', { className: 'qq-role-col-icon' }, '删除'))),
              h('tbody', null, ...行们.map(x => {
                const i = 绑定.findIndex(b => b.类型 === x.类型 && b.号码 === x.号码 && b.会话 === x.会话)
                const row = i >= 0 ? 绑定[i] : x
                const label = 类型 + ' ' + x.号码 + ' 的角色设定'
                const 文字 = String((row && row.人设) || '').trim()
                const 会话 = 角色会话名(x.会话)
                return h('tr', { key: JSON.stringify([x.类型, x.号码, x.会话]) },
                  h('td', { className: 'qq-role-number' }, String(x.号码 || '—')),
                  h('td', { className: 'qq-role-session', title: 会话 }, 会话),
                  h('td', { className: 'qq-role-text-cell' },
                    文字 ? h('span', { className: 'qq-role-text', title: 文字 }, 文字) : h('span', { className: 'qq-role-inherit' }, '继承全局角色设定')),
                  h('td', { className: 'qq-role-col-icon' },
                    h('button', { type: 'button', className: 'qq-role-icon', 'aria-label': '编辑 ' + label, title: i < 0 ? '请先保存绑定页的改动' : '编辑角色设定', disabled: i < 0 || 忙, onClick: () => 编辑角色(i, x, label) }, 角色编辑图标())),
                  h('td', { className: 'qq-role-col-icon' },
                    h('button', { type: 'button', className: 'qq-role-icon qq-role-icon-danger', 'aria-label': '删除 ' + label, title: i < 0 ? '请先保存绑定页的改动' : '删除角色设定', disabled: i < 0 || 忙, onClick: () => 删除角色(i, label) }, 角色删除图标())))
              }))))
            : h('p', { style: S.dim }, '暂无已保存的' + 类型 + '映射，请先在「绑定」中添加并保存。'))
      }

      const 代写按钮 = h('button', {
        type: 'button', className: 'fish-button fish-primary qq-role-writer-open',
        onClick: () => { if (typeof openRoleWriter === 'function') openRoleWriter(); else 告知('代写功能当前不可用') },
      }, '大肥鱼专业代写')

      const 文件接收卡片 = h('section', { style: S.card },
        h('h2', null, 'QQ 文件接收'),
        h('p', { style: S.dim, role: 'status' }, '文件接收通道：' + (态?.文件接收通道 || '等待宿主连接')),
        行('接收文件（QQ → DSH）', 勾(配置.收文件, v => 改('收文件', v)), '将 QQ 文件作为附件提交到对应绑定的 DSH 会话，默认关闭。遵守现有群聊接收规则；文件不会被自动执行。'),
        行('接收单文件上限（MB）', h('input', { type: 'number', min: 1, max: 100, style: S.small, value: String(配置.收文件上限MB ?? 20), onChange: e => 改('收文件上限MB', Number(e.target.value)) }), '默认 20 MB，最多 100 MB；下载过程中也会校验实际大小，超限跳过。'),
        行('每次最多接收文件', h('input', { type: 'number', min: 1, max: 10, style: S.small, value: String(配置.收文件最多 ?? 3), onChange: e => 改('收文件最多', Number(e.target.value)) }), '默认 3 个，最多 10 个；连续消息合并后共用此数量限制。'),
        行('开启文件存储', 勾(配置.文件存储, v => 改('文件存储', v)), '默认关闭。开启后额外保存 QQ 接收文件；关闭不删除已有归档，也不影响 DSH 文件附件处理。'),
        h('p', { style: S.dim }, '自动适配 NapCat / SnowLuma，复用已保存的连接配置接收文件消息与上传通知；直链不可用时尝试由后端传回文件内容，兼容 Docker 部署，无需填写额外 HTTP 地址或 API。图片与文件归档在「文件管理」中管理；具体格式的读取能力取决于 DSH、模型及工具，失败原因会随消息告知。'))

      const 分区 = (...内容) => h('div', { className: 'fish-settings-stack' }, ...内容)
      const 页面 = {
        '连接': 分区(总开关卡片, 消息卡片[0], 总览卡片[0]),
        '绑定': 分区(绑定提醒, 绑定卡片[1]),
        '消息策略': 分区(消息卡片[1], 消息卡片[2], 绑定卡片[2], 门槛卡片[0]),
        '角色设定': 分区(代写按钮, 绑定卡片[0], 映射角色('私聊'), 映射角色('群')),
        '图片与文件': 分区(消息卡片[3], h('section', { style: S.card },
          h('h2', null, 'DSH 生成图片转发'),
          h('p', { style: S.dim }, '仅将绑定 DSH 会话回复中生成的图片自动发送到 QQ。此转发功能不提供手动发送或图片上传。'),
          行('发送生成图片（DSH → QQ）', 勾(配置.发图, v => 改('发图', v)), '支持会话回复中的图片附件和 Markdown 图片，发送到该会话绑定的 QQ 聊天；遵守总开关、试运行和消息转发策略。每轮最多 4 张。'),
          行('单张图片上限（MB）', h('input', { 'aria-label': '图上限MB', type: 'number', min: 1, max: 30, style: S.small, value: String(配置.图上限MB ?? 5), onChange: e => 改('图上限MB', Number(e.target.value)) }), '读取会话已有生成图片进行转发；QQ 收图也共用此大小限制。')), 文件接收卡片, 消息卡片[4]),
        '表情包': typeof FishStickers === 'function' ? h(FishStickers, { mode: 'settings', notify: typeof notify === 'function' ? notify : undefined, onOpenFiles: openFileManager }) : h('p', null, '请在大肥鱼整合界面使用表情库'),
        '语音转写': 分区(消息卡片[5]),
        '语音发送': 分区(h('div', { className: 'qq-voice-send', style: S.card },
          h('h2', null, '语音发送'),
          行('发送语音（QQ → DSH）', 勾(false, () => {}, '发送语音（QQ → DSH）', true), '目前服务暂不可用'))),
        '历史导入': 历史页,
      }

      return h(
        'div',
        { className: 'fish-module fish-qq', style: S.wrap },

        onPageChange ? null : 页签,
        embedded ? null : h('div', { className: 'fish-toolbar' },
          h('span', { style: { ...S.dim, flex: '1 1 160px', ...(脏 ? { color: 'var(--fish-warning)', fontWeight: 600 } : null) } }, 脏 ? '存在未保存的配置' : '配置已保存'),
          按钮('保存设置', () => 存(), true, 忙)),
        embedded ? null : (页 === '连接' ? h('div', { className: 'fish-test-action' }, 按钮('发送测试消息', 试一句, false, 忙 || 脏), h('span', { style: S.dim }, '会实际发送至首个绑定的 QQ 聊天，不受试运行限制。')) : null),
        页面[页] || null,
        h('div', { hidden: 页 !== 'QQ 空间' }, 分区(空间卡片[0], h(QQSpaceActions, { 配置, 脏, notify }), ...空间卡片.slice(1))),
      )
    }

    function apply(ctx) {
      const slots = ctx.get('slots')
      if (slots === undefined) return
      slots.inject('settings.section', () =>
        slots.register(
          { name: 'settings.section', id: 'qq-bridge', order: 54, label: () => '连接与转发' },
          Section,
        ),
      )
    }

    exports.Section = Section
    exports.apply = apply
    exports.inject = inject
    return module.exports
  },
})
