import * as memory from './modules/memory/lib/index.js'
import * as qq from './modules/qq/lib/host.js'
import * as mood from './modules/mood/lib/index.js'
import * as speak from './modules/speak/lib/host.js'
import { createSelfUpdate } from './lib/selfupdate.mjs'
import { fileURLToPath } from 'node:url'

export const name = 'big-fish-aio'
export const inject = [...new Set([...memory.inject, ...qq.inject, ...mood.inject, ...speak.inject])]

export function apply(ctx) {
  ctx.plugin(memory)
  ctx.plugin(qq)
  ctx.plugin(mood)
  ctx.plugin(speak)
  createSelfUpdate({ packageRoot: fileURLToPath(new URL('.', import.meta.url)) })
    .register(ctx, '/dsh-big-fish-aio')
}
