import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { Readable } from 'node:stream'
import { createWorkspaceBinding } from '../modules/qq/lib/workspace.mjs'
import { createMediaStorage } from '../modules/qq/lib/media-storage.mjs'
import { createStickers } from '../modules/qq/lib/stickers.mjs'
const stream = text => (async function*(){yield Buffer.from(text)})()
function fixture() {
 const home=mkdtempSync(join(tmpdir(),'fish-workspace-')),a=join(home,'我的伙伴'),b=join(home,'Another Project')
 mkdirSync(a);mkdirSync(b);mkdirSync(join(home,'storages'))
 const rows=[{id:'a',title:'伙伴',path:a},{id:'b',title:'伙伴',path:b}];let selected={工作区:'a'}
 const ctx={workspaceRegistry:{list:()=>rows},get:()=>({requestRejection:()=>undefined})}
 const workspace=createWorkspaceBinding({home,ctx,config:()=>selected})
 return {home,a,b,rows,ctx,workspace,select:id=>{selected={工作区:id}},close:()=>rmSync(home,{recursive:true,force:true})}
}
test('DSH 实时注册表列出所有工作区，绑定稳定 ID，支持同名与任意目录名',()=>{
 const f=fixture();try {
  writeFileSync(join(f.home,'storages/workspace.json'),JSON.stringify({tables:{workspaces:{stale:{path:f.home}}}}))
  assert.deepEqual(f.workspace.list().map(w=>w.id),['a','b']);assert.equal(f.workspace.directory(),f.a)
  f.select('b');assert.equal(f.workspace.directory(),f.b)
  f.rows.push({id:'c',path:join(f.home,'missing'),title:'已移除的目录'})
  assert.equal(f.workspace.list().at(-1).available,false)
  f.select('c');assert.throws(()=>f.workspace.directory(),/不可用/)
  f.select(f.a);assert.throws(()=>f.workspace.directory(),/不可用/)
  f.select('');assert.throws(()=>f.workspace.directory(),/绑定工作区/)
 }finally{f.close()}
})
test('兼容 DSH 工作区持久注册表，无选择时不猜 BigFish 或任意目录',()=>{
 const f=fixture();try {
  writeFileSync(join(f.home,'storages/workspace.json'),JSON.stringify({tables:{workspaces:{a:{path:f.a,title:'自定义'},b:{path:f.b,title:'其他'}}}}))
  const workspace=createWorkspaceBinding({home:f.home});assert.equal(workspace.list().length,2);assert.throws(()=>workspace.directory(),/绑定工作区/)
  writeFileSync(join(f.home,'qq-bridge-config.json'),JSON.stringify({工作区:'b'}));assert.equal(workspace.directory(),f.b)
  assert.deepEqual(readdirSync(f.a),[]);assert.deepEqual(readdirSync(f.b),[])
 }finally{f.close()}
})
test('图片、文件归档跟随选择；切换中止未完成写入，旧窗口不能误删新工作区内容',async()=>{
 const f=fixture();try {
  const lib=createMediaStorage({home:f.home,workspace:f.workspace})
  const save=extra=>lib.save({kind:'files',name:'报告.txt',data:stream('same'),binding:{会话:'a'},endpoint:'onebot',maxBytes:1024,...extra})
  const old=await save(),oldView=lib.view({}).files;assert.ok(oldView.path.startsWith(f.a));assert.equal(oldView.workspace,'a');assert.match(oldView.items[0].url,/workspace=a/)
  f.select('b');const current=await save();assert.ok(current.path.startsWith(f.b));assert.equal(current.item.id,old.item.id)
  assert.throws(()=>lib.remove('files',old.item.id,oldView.workspace),/工作区已切换/);assert.equal(existsSync(old.path),true);assert.equal(existsSync(current.path),true)
  await save({kind:'images',name:'图.gif',mediaType:'image/gif',data:stream('GIF89a')});assert.ok(existsSync(join(f.b,'QQ图片')))
  await assert.rejects(save({data:(async function*(){yield Buffer.from('first');f.select('a');yield Buffer.from('second')})()}),/绑定已变化/)
  assert.ok(!readdirSync(join(f.b,'QQ文件')).some(x=>x.startsWith('.incoming-')))
  assert.equal(readFileSync(current.path,'utf8'),'same')
 }finally{f.close()}
})
test('表情包新原图使用所选工作区，切换后已有素材继续读取，保留原文件',async()=>{
 const f=fixture(),gif=Buffer.from('R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==','base64');try {
  const lib=createStickers({home:f.home,ctx:f.ctx,workspace:f.workspace,findAgent:()=>null}),old=lib.add({bytes:gif})
  const oldPath=join(f.a,'表情包',old.id+'.gif');f.select('b');assert.equal(lib.view().storage.path,join(f.b,'表情包'))
  assert.equal(existsSync(oldPath),true);assert.equal(existsSync(join(f.b,'表情包',old.id+'.gif')),false)
  const next=lib.add({bytes:Buffer.concat([gif,Buffer.from('new')])});assert.ok(existsSync(join(f.b,'表情包',next.id+'.gif')))
  const routes=new Map();lib.register({route:(path,handler)=>routes.set(path,handler),protect:x=>x,json(){},config:()=>({})})
  let downloaded;await routes.get('/dsh-qq-bridge/stickers/file')({url:'/dsh-qq-bridge/stickers/file?id='+old.id},{setHeader(){},end(bytes){downloaded=bytes}})
  assert.deepEqual(downloaded,gif);assert.equal(lib.view().items.length,2)
 }finally{f.close()}
})
test('宿主返回 DSH 全部工作区并持久保存选择，拒绝未登记目录及失效绑定',async()=>{
 const f=fixture(),prior=process.env.DSH_HOME,oldFetch=globalThis.fetch,effects=[],routes=new Map();try {
  process.env.DSH_HOME=f.home;globalThis.fetch=async()=>Response.json({status:'ok',data:{user_id:998877}})
  const ctx={...f.ctx,agents:{list:()=>[],get:()=>null},sessions:{list:()=>[]},effect(fn){const off=fn();if(off)effects.push(off)},on:()=>()=>{},interval:()=>()=>{},webServer:{register({path,handler}){routes.set(path,handler);return()=>{}}},logger:{info(){}}}
  const host=await import('../modules/qq/lib/host.js?workspace-test'),bridge=host.apply(ctx)
  assert.equal((await bridge.概况()).工作区列表.length,2)
  const save=async value=>{let result;const req=Readable.from([JSON.stringify({工作区:value})]);Object.assign(req,{method:'POST',url:'/dsh-qq-bridge/save',headers:{}});await routes.get(req.url)(req,{setHeader(){},end(text){result=JSON.parse(text)}});return result}
  const result=await save('b');assert.equal(result.ok,true);assert.equal(result.配置.工作区,'b');assert.equal(JSON.parse(readFileSync(join(f.home,'qq-bridge-config.json'),'utf8')).工作区,'b')
  assert.equal((await save(f.a)).ok,false);assert.equal((await bridge.概况()).配置.工作区,'b')
  rmSync(f.b,{recursive:true});assert.equal((await save('b')).ok,false)
 }finally{effects.reverse().forEach(off=>off());globalThis.fetch=oldFetch;if(prior===undefined)delete process.env.DSH_HOME;else process.env.DSH_HOME=prior;f.close()}
})
