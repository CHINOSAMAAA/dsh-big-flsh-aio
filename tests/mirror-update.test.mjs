import test from 'node:test'
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createSelfUpdate } from '../lib/selfupdate.mjs'

test('国内检查与安装全程使用镜像，校验安装包并清理临时文件', async () => {
  const home = mkdtempSync(join(tmpdir(), 'fish-mirror-test-'))
  const originalFetch = globalThis.fetch
  try {
    const root = join(home, 'node_modules', 'dsh-big-flsh-aio'); mkdirSync(root, { recursive: true })
    writeFileSync(join(root, 'package.json'), JSON.stringify({ name: 'dsh-big-flsh-aio', version: '0.1.1' }))
    const bytes = Buffer.from('模拟完整安装包')
    const integrity = 'sha512-' + createHash('sha512').update(bytes).digest('base64')
    let remote = { name: 'dsh-big-flsh-aio', version: '1.5.1-1', dist: { integrity, tarball: 'https://other.invalid/package.tgz' } }
    let corrupt = false, oversized = false, missing = false
    const requests = [], installed = []
    globalThis.fetch = async url => {
      requests.push(url)
      assert.ok(String(url).startsWith('https://registry.npmmirror.com/'))
      if (String(url).endsWith('/latest')) return missing ? new Response('', { status: 404 }) : Response.json(remote)
      assert.equal(url, 'https://registry.npmmirror.com/dsh-big-flsh-aio/-/dsh-big-flsh-aio-1.5.1-1.tgz')
      return new Response(corrupt ? Buffer.from('损坏文件') : bytes, { headers: oversized ? { 'content-length': String(17 * 1024 * 1024) } : {} })
    }
    const updater = createSelfUpdate({ packageRoot: root })
    assert.equal((await updater.check(true)).hasUpdate, true)
    assert.equal((await updater.check(false)).cached, true)
    assert.equal(requests.length, 1)
    const ctx = { pluginManager: { installBundle: async (path, options) => {
      assert.deepEqual(readFileSync(path), bytes)
      assert.equal(options.registry, 'https://registry.npmmirror.com')
      installed.push(path)
      return { application: 'restart-required', changed: true }
    } } }
    assert.equal((await updater.install(ctx)).ok, true)
    assert.equal(existsSync(installed[0]), false)
    corrupt = true
    assert.match((await updater.install(ctx)).error, /完整性校验失败/)
    corrupt = false; oversized = true
    assert.match((await updater.install(ctx)).error, /16 MB/)
    assert.equal(installed.length, 1)
    oversized = false
    remote = { ...remote, name: 'other-package' }
    assert.match((await updater.check(true)).error, /包名/)
    remote = { ...remote, name: 'dsh-big-flsh-aio', version: 'broken-version' }
    assert.match((await updater.check(true)).error, /SemVer/)
    remote = { ...remote, version: '1.5.1-1', dist: {} }
    assert.match((await updater.check(true)).error, /SHA-512/)
    missing = true
    assert.match((await updater.check(true)).error, /尚无本项目安装包/)
    await assert.rejects(updater.check(true, 'other-channel'), /未知更新渠道/)
  } finally { globalThis.fetch = originalFetch; rmSync(home, { recursive: true, force: true }) }
})
