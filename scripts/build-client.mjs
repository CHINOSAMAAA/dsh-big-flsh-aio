import { readFileSync, writeFileSync } from 'node:fs'

const root = new URL('../', import.meta.url)
const read = path => readFileSync(new URL(path, root), 'utf8')
const meta = JSON.parse(read('package.json'))
// 模块保持各自的闭包；只导出组件，不再分别注册设置插件。
const output = `// 自动生成：修改 src/panel.js 或 modules/*/lib/client.js 后运行 npm run build。\n` +
  `window.__ModuleLoader__.load({ id: ${JSON.stringify(meta.name)}, factory(require) {\n` +
  `const components = {};\nconst moduleLoader = { load({id, factory}) { components[id] = factory(require) } };\n` +
  read('modules/qq/lib/client.js').replace('window.__ModuleLoader__.load(', 'moduleLoader.load(') + '\n' +
  read('modules/memory/lib/client.js').replace('window.__ModuleLoader__.load(', 'moduleLoader.load(') + '\n' +
  `const META = ${JSON.stringify({ name: meta.name, version: meta.version, upstreamCompatibility: meta.upstreamCompatibility })};\n` +
  read('src/panel.js') + '\n} });\n'
writeFileSync(new URL('client.js', root), output)
