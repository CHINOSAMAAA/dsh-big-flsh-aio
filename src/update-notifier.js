let NativeToast = null
try { NativeToast = require('@deepseek-ai/dsh-client-ui-primitives').Toast || null } catch {}

let openUpdatesRequested = false
let showUpdates = null

function UpdateNotifier({ open }) {
  const [notice, setNotice] = React.useState(null)
  React.useEffect(() => {
    let stopped = false, running = false, checkedAt = 0, active = null
    const notified = new Set()
    const check = async () => {
      if (stopped || running || (checkedAt && Date.now() - checkedAt < 5 * 60000)) return
      running = true; checkedAt = Date.now()
      const controller = new AbortController()
      active = controller
      const timeout = setTimeout(() => controller.abort(), 15000)
      try {
        const result = await request('/dsh-big-flsh-aio/update?channel=mirror&refresh=1', { signal: controller.signal })
        if (!stopped && result.hasUpdate && !notified.has(result.latest)) {
          notified.add(result.latest)
          setNotice(result.latest)
        }
      } catch { /* 后台查询失败不打扰用户，下一次检查重试。 */ }
      finally { clearTimeout(timeout); active = null; running = false }
    }
    const onVisible = () => { if (document.visibilityState !== 'hidden') void check() }
    void check()
    const interval = setInterval(check, 30 * 60000)
    window.addEventListener('focus', onVisible)
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      stopped = true; active?.abort(); clearInterval(interval)
      window.removeEventListener('focus', onVisible)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])
  if (!notice) return null
  const view = () => { open(); setNotice(null) }
  const text = '大肥鱼 v' + notice + ' 已发布，可更新插件。'
  if (NativeToast) return h(NativeToast, { key: notice, text, holdMs: 12000, onDone: () => setNotice(null), actions: [{ prefix: ' ', label: '查看更新', onClick: view }] })
  return h('aside', { role: 'alert', 'aria-label': '大肥鱼更新提醒', style: {
    position: 'fixed', right: 20, bottom: 24, zIndex: 1000, pointerEvents: 'auto',
    maxWidth: 'min(420px, calc(100vw - 40px))', padding: 16, borderRadius: 12,
    color: 'var(--dsw-alias-label-primary, #202535)', background: 'var(--dsw-alias-bg-layer-1, #fff)',
    border: '1px solid var(--dsw-alias-border-l2, #dfe3eb)', boxShadow: '0 8px 32px #0002', font: '13px/1.6 system-ui',
  } }, h('div', null, text), h('div', { style: { display: 'flex', gap: 12, marginTop: 8 } },
    h('button', { type: 'button', onClick: view }, '查看更新'),
    h('button', { type: 'button', onClick: () => setNotice(null), 'aria-label': '关闭更新提醒' }, '稍后')))
}
