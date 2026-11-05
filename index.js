import * as memory from './modules/memory/lib/index.js'
import * as qq from './modules/qq/lib/host.js'
import { createSelfUpdate } from './lib/selfupdate.mjs'
import { fileURLToPath } from 'node:url'

export const name = 'big-flsh-aio'
export const inject = [...new Set([...memory.inject, ...qq.inject])]

export function apply(ctx) {
  ctx.plugin(memory)
  ctx.plugin(qq)
  createSelfUpdate({ packageRoot: fileURLToPath(new URL('.', import.meta.url)) })
    .register(ctx, '/dsh-big-flsh-aio')
}
