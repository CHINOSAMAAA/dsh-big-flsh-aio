// 旧 QQ 会话没有预设时，只补宿主已有的联网工具，保留会话记录与作用域。
export function createSessionTools({ ctx, log }) {
  const attached = new Map(), pending = new Map()
  let disposed = false
  const presets = () => ctx.get?.('agentPresets')
  const release = async record => {
    for (const off of record.off.reverse()) off()
    await record.lease[Symbol.asyncDispose]()
  }

  async function ensure(agent) {
    if (disposed || !agent?.ctx?.tools?.register) return
    if (attached.has(agent)) return
    if (pending.has(agent)) return pending.get(agent)
    const registry = presets()
    if (!registry || registry.presetForSession(agent.session) != null) return
    const task = (async () => {
      const lease = await registry.acquireScope()
      const record = { lease, off: [] }
      try {
        if (disposed) return
        const web = ctx.get?.('web')
        for (const [name, ready] of [['web_search', 'searchReady'], ['web_fetch', 'fetchReady']]) {
          if (ctx.tools.get(name, agent) || typeof web?.[ready] !== 'function') continue
          const tool = ctx.tools.get(name, lease.key)
          if (!tool) continue
          record.off.push(agent.ctx.tools.register(tool, {
            when: ({ modelSelection }) => web[ready](modelSelection.provider),
          }))
        }
        if (record.off.length) {
          attached.set(agent, record)
          log('已为旧 QQ 会话补回联网工具：' + agent.id)
        }
      } finally {
        if (!attached.has(agent)) await release(record)
      }
    })()
    pending.set(agent, task)
    try { await task } finally { pending.delete(agent) }
  }

  return {
    async createOptions() {
      const registry = presets()
      if (!registry) return {}
      const { id } = await registry.resolve()
      return { agentPreset: id, setup: agentCtx => registry.mount(agentCtx, id).then(() => undefined) }
    },
    async resumeSetup(agentCtx, agent) {
      const registry = presets(), id = registry?.presetForSession(agent.session)
      if (id != null) await registry.mount(agentCtx, id)
      else await ensure(agent)
    },
    ensure,
    async sync(agents) {
      const wanted = new Set(agents.filter(Boolean))
      for (const [agent, record] of attached) {
        if (wanted.has(agent)) continue
        attached.delete(agent)
        await release(record)
      }
      for (const agent of wanted) await ensure(agent)
    },
    async dispose() {
      disposed = true
      await Promise.allSettled([...pending.values()])
      for (const record of attached.values()) await release(record)
      attached.clear()
    },
  }
}
