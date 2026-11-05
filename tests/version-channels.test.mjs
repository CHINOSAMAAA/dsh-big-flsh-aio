import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createSelfUpdate } from '../lib/selfupdate.mjs'

test('仓库与 npm 版本独立比较，仓库新版本可在 npm 版本不变时安装', async () => {
  const home = mkdtempSync(join(tmpdir(), 'fish-version-'))
  const root = join(home, 'node_modules', 'dsh-big-flsh-aio')
  mkdirSync(root, { recursive: true })
  const original = globalThis.fetch
  let internal = '0.1.1', external = '0.0.1'
  try {
    writeFileSync(join(root, 'package.json'), JSON.stringify({ name: 'dsh-big-flsh-aio', version: '0.0.1', repositoryVersion: '0.1.1', repository: 'https://github.com/CHINOSAMAAA/dsh-big-flsh-aio' }))
    globalThis.fetch = async url => Response.json(String(url).includes('api.github.com') ? { sha: 'd'.repeat(40) } : { name: 'dsh-big-flsh-aio', version: external, repositoryVersion: internal, dist: { integrity: 'sha512-' + 'a'.repeat(86) + '==' } })
    const updater = createSelfUpdate({ packageRoot: root })
    assert.equal((await updater.check(true, 'github')).hasUpdate, false)
    assert.equal((await updater.check(true, 'mirror')).hasUpdate, false)
    internal = '0.1.2'
    assert.equal((await updater.check(true, 'github')).hasUpdate, true)
    const installed = []
    assert.equal((await updater.install({ pluginManager: { installBundle: async spec => { installed.push(spec); return { applied: true } } } }, 'github')).ok, true)
    assert.deepEqual(installed, ['github:CHINOSAMAAA/dsh-big-flsh-aio#' + 'd'.repeat(40)])
    assert.equal((await updater.check(true, 'mirror')).hasUpdate, false)
    internal = '0.1.1'; external = '0.0.2'
    assert.equal((await updater.check(true, 'github')).hasUpdate, false)
    assert.equal((await updater.check(true, 'mirror')).hasUpdate, true)
    internal = 'invalid'
    assert.match((await updater.check(true, 'github')).error, /仓库版本/)
  } finally { globalThis.fetch = original; rmSync(home, { recursive: true, force: true }) }
})
