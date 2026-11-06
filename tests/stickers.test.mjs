import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, rmSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { Readable } from 'node:stream'
import { createStickers } from '../modules/qq/lib/stickers.mjs'
const gif = Buffer.from('R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==', 'base64')
function fixture() {
  const home = mkdtempSync(join(tmpdir(), 'fish-stickers-')), requests = [], logs = []
  let result = { id: null }
  const ctx = { llm: { async *stream(input) { requests.push(input); yield { type: 'text-delta', text: JSON.stringify(result) } } }, get: () => ({ requestRejection: () => undefined }) }
  const agent = { options: { provider: 'fake', model: 'fake' }, session: { snapshotEvents: () => [{ type: 'user/message', data: { source: { kind: 'qq' }, content: [{type:'text',text:'终于考过了'}] } }] } }
  const create = () => createStickers({ home, ctx, findAgent: () => agent, defaultSession: () => 'a', log: x => logs.push(x) })
  return { home, ctx, agent, requests, logs, lib: create(), create, result: x => { result = x }, close: () => rmSync(home, {recursive:true,force:true}) }
}
test('表情原文件、去重、来源隔离、持久保存与元数据更新', () => {
  const f=fixture();try {
    const a=f.lib.add({bytes:gif,name:'开心.gif',scope:'a',tags:'开心,开心',scenes:'祝贺'})
    assert.equal(f.lib.add({bytes:gif,scope:'a'}).id,a.id)
    assert.notEqual(f.lib.add({bytes:gif,scope:'b'}).id,a.id)
    assert.deepEqual(readFileSync(join(f.home,'qq-stickers',a.id+'.gif')),gif)
    f.lib.update(a.id,{tags:['庆祝'],name:'庆祝'});assert.deepEqual(f.create().view().items[0].tags,['庆祝'])
    assert.throws(()=>f.lib.add({bytes:Buffer.from('<svg/>')}),/只接受/)
    assert.throws(()=>f.lib.add({bytes:Buffer.alloc(9*1048576)}),/8 MB/)
    const snapshot=JSON.parse(readFileSync(join(f.home,'qq-stickers/catalog.json'),'utf8'));snapshot.items=snapshot.items.filter(x=>x.id!==a.id);writeFileSync(join(f.home,'qq-stickers/catalog.json'),JSON.stringify(snapshot));assert.equal(f.lib.add({bytes:gif,scope:'a'}).id,a.id,'崩溃留下的原文件可重新入库')
    f.lib.remove(a.id);assert.equal(f.lib.view().items.length,1)
    writeFileSync(join(f.home,'qq-stickers/catalog.json'),'broken')
    assert.throws(()=>f.lib.add({bytes:gif}),/JSON/);assert.equal(readFileSync(join(f.home,'qq-stickers/catalog.json'),'utf8'),'broken')
  }finally{f.close()}
})
test('语境选择携带上下文、严格候选 ID、会话隔离及冷却；默认不消耗模型',async()=>{
 const f=fixture();try{
  const a=f.lib.add({bytes:gif,scope:'a',name:'庆祝',tags:'开心',scenes:'考试成功'})
  const b=f.lib.add({bytes:gif,scope:'b',name:'其他聊天私有素材'})
  f.result({id:a.id});assert.deepEqual(await f.lib.select('太好了，恭喜你','a'),[]);assert.equal(f.requests.length,0)
  f.lib.settings({autoSend:true});assert.equal((await f.lib.select('太好了，恭喜你','a')).length,1)
  assert.match(JSON.stringify(f.requests[0]),/终于考过了/);assert.ok(!JSON.stringify(f.requests[0]).includes(b.id))
  assert.deepEqual(await f.lib.select('继续庆祝','a'),[]);assert.equal(f.requests.length,1)
  const reloaded=f.create();f.result({id:b.id});assert.deepEqual(await reloaded.select('开心','a'),[])
  f.result({id:null});assert.deepEqual(await reloaded.select('我难过','a'),[])
  f.ctx.llm.stream=async function*(){throw new Error('offline')};assert.deepEqual(await reloaded.select('开心','a'),[])
  assert.throws(()=>f.lib.settings({cooldownSeconds:0}),/冷却/)
 }finally{f.close()}
})
test('表情管理路由拒绝未授权、路径穿越、超限和无效文件',async()=>{
 const f=fixture();try{
  const routes=new Map();let denied=false
  f.ctx.get=()=>({requestRejection:()=>denied?403:undefined})
  f.lib.register({route:(path,handler)=>routes.set(path,handler),protect:fn=>async(req,res)=>{if(denied)throw new Error('forbidden');return fn(req,res)},json:(res,value)=>res.end(JSON.stringify(value)),config:()=>({绑定:[{会话:'a'}]})})
  const call=async(path,body)=>{let raw;const req=Readable.from(body===undefined?[]:[JSON.stringify(body)]);Object.assign(req,{method:body===undefined?'GET':'POST',url:'/dsh-qq-bridge/stickers'+path});await routes.get('/dsh-qq-bridge/stickers'+path.split('?')[0])(req,{setHeader(){},end(v){raw=v}});return raw}
  denied=true;await assert.rejects(call(''),/forbidden/);denied=false
  await assert.rejects(call('/import',{scope:'foreign',base64:gif.toString('base64')}),/未绑定/)
  await assert.rejects(call('/file?id=../../password'),/无效/)
  await call('/import',{scope:'a',base64:gif.toString('base64'),name:'原图'})
  const item=JSON.parse(await call('')).items[0]
  assert.deepEqual(await call('/file?id='+item.id),gif)
 }finally{f.close()}
})

test('自动收藏独立于回复：识别表情、保留 GIF、去重、普通图片开关和错误回退',async()=>{
 const f=fixture(),original=globalThis.fetch;try{
  const settle=async()=>{for(let i=0;i<30;i++)await new Promise(setImmediate)}
  const face={message_id:1,message:[{type:'mface',data:{file:'base64://'+gif.toString('base64'),summary:'开心'}}]}
  f.lib.capture(face,'a','source-a');await settle();assert.equal(f.lib.view().items.length,0)
  f.lib.settings({autoCollect:true});f.lib.capture(face,'a','source-a');await settle()
  const item=f.lib.view().items[0];assert.equal(item.scope,'a');assert.equal(item.source,'source-a');assert.deepEqual(readFileSync(join(f.home,'qq-stickers',item.id+'.gif')),gif)
  f.lib.capture({...face,message_id:2},'a','source-a');await settle();assert.equal(f.lib.view().items.length,1)
  const plain={message_id:3,message:[{type:'image',data:{file:'base64://'+Buffer.concat([gif,Buffer.from('more')]).toString('base64')}}]}
  f.lib.capture(plain,'a','source-a');await settle();assert.equal(f.lib.view().items.length,1)
  f.lib.settings({collectAllImages:true});f.lib.capture(plain,'a','source-a');await settle();assert.equal(f.lib.view().items.length,2)
  f.lib.capture({...face,message_id:4},'a','source-a',()=>false);await settle();assert.equal(f.lib.view().items.length,2)
  let downloads=0;globalThis.fetch=async()=>{downloads++;return new Response(gif)}
  f.lib.capture({message_id:5,message:[{type:'mface',data:{url:'http://127.0.0.1/secrets'}}]},'a','source-a');await settle();assert.equal(downloads,0);assert.match(f.lib.view().collection.error,/QQ 官方/)
  f.lib.capture({message_id:6,message:[{type:'mface',data:{url:'https://gchat.qpic.cn/sticker.gif'}}]},'a','source-a');await settle();assert.equal(downloads,1)
  f.lib.settings({autoSend:true});f.result({id:item.id});assert.deepEqual(await f.lib.select('开心','a'),[]);assert.equal(f.requests.length,0)
 }finally{globalThis.fetch=original;f.close()}
})

test('自动视觉标签：真实图片入参、已有标签保护、错误重试与删除不复活',async()=>{
 const f=fixture();try{
  const admitted=[]
  f.ctx.attachments={async admitPromptContent(content){admitted.push(content);return content.map(x=>x.type==='image'?{type:'image',attachment:{attachmentId:'fixture'}}:x)}}
  const wait=async()=>{for(let i=0;i<40;i++)await new Promise(setImmediate)}
  f.lib.settings({autoTag:true});f.result({tags:['开心','庆祝'],scenes:['恭喜考试通过']})
  const a=f.lib.add({bytes:gif,scope:'a',name:'表情原图'});await wait()
  let item=f.lib.view().items[0];assert.equal(item.tagStatus,'complete');assert.deepEqual(item.tags,['开心','庆祝']);assert.equal(admitted.length,1)
  assert.equal(admitted[0][1].data,gif.toString('base64'));assert.ok(f.requests[0].messages[0].content.some(x=>x.type==='image'&&x.attachment))
  f.lib.update(a.id,{tags:['人工标签']});f.result({tags:['模型覆盖'],scenes:['新场景']});f.lib.enqueueTags(a.id);await wait();assert.deepEqual(f.lib.view().items[0].tags,['人工标签'])
  const b=f.lib.add({bytes:Buffer.concat([gif,Buffer.from('b')]),scope:'a'});f.result({tags:[],scenes:[]});await wait();assert.equal(f.lib.view().items.find(x=>x.id===b.id).tagStatus,'error')
  f.result({tags:['抱抱'],scenes:['安慰朋友']});f.lib.enqueueTags(b.id);await wait();assert.equal(f.lib.view().items.find(x=>x.id===b.id).tagStatus,'complete')
  let release;const gate=new Promise(r=>release=r)
  f.ctx.llm.stream=async function*(){await gate;yield{type:'text-delta',text:JSON.stringify({tags:['迟到'],scenes:['迟到结果']})}}
  const c=f.lib.add({bytes:Buffer.concat([gif,Buffer.from('c')]),scope:'a'});await new Promise(setImmediate);f.lib.remove(c.id);release();await wait();assert.ok(!f.lib.view().items.some(x=>x.id===c.id))
  f.lib.settings({visionProvider:'旧配置'});assert.equal(f.lib.view().settings.visionProvider,undefined)
 }finally{f.close()}
})

test('自动分类随导入、编辑和视觉结果更新；手动分类不被覆盖',async()=>{
 const f=fixture();try{
  f.lib.settings({autoClassify:true})
  const a=f.lib.add({bytes:gif,scope:'a',tags:'开心,庆祝',scenes:'恭喜朋友'})
  assert.equal(f.lib.view().items[0].category,'开心庆祝')
  f.lib.update(a.id,{tags:['抱抱'],scenes:['安慰朋友']});assert.equal(f.lib.view().items[0].category,'安慰陪伴')
  f.lib.update(a.id,{category:'日常互动'});f.lib.update(a.id,{tags:['生气']});f.lib.classify();assert.equal(f.lib.view().items[0].category,'日常互动')
  f.lib.update(a.id,{category:''});assert.notEqual(f.lib.view().items[0].categorySource,'manual')
  assert.throws(()=>f.lib.update(a.id,{category:'<script>'}),/不支持/)
  f.ctx.attachments={async admitPromptContent(content){return content}}
  f.result({tags:['惊讶'],scenes:['看到意外消息'],category:'惊讶震惊'})
  const b=f.lib.add({bytes:Buffer.concat([gif,Buffer.from('classified')]),scope:'a'})
  f.lib.enqueueTags(b.id);for(let i=0;i<40;i++)await new Promise(setImmediate)
  assert.equal(f.lib.view().items.find(x=>x.id===b.id).category,'惊讶震惊')
  assert.equal(f.lib.view().items.find(x=>x.id===b.id).categorySource,'vision')
 }finally{f.close()}
})

test('进行中的选图遵守关闭开关；标注遵守手动编辑版本',async()=>{
 const f=fixture();try{
  const a=f.lib.add({bytes:gif,scope:'a'});f.lib.settings({autoSend:true})
  let release;let gate=new Promise(r=>release=r)
  f.ctx.llm.stream=async function*(){await gate;yield{type:'text-delta',text:JSON.stringify({id:a.id,tags:['模型标签'],scenes:['安慰']})}}
  const pending=f.lib.select('可以抱抱吗','a');await new Promise(setImmediate);f.lib.settings({autoSend:false});release();assert.deepEqual(await pending,[])
  f.ctx.attachments={async admitPromptContent(content){return content}}
  gate=new Promise(r=>release=r);f.lib.enqueueTags(a.id);await new Promise(setImmediate);f.lib.update(a.id,{tags:['手动保留']});release();for(let i=0;i<40;i++)await new Promise(setImmediate)
  assert.deepEqual(f.lib.view().items[0].tags,['手动保留']);assert.equal(f.lib.view().items[0].tagStatus,'error')
  let calls=0;gate=new Promise(r=>release=r);f.ctx.llm.stream=async function*(){calls++;await gate;yield{type:'text-delta',text:JSON.stringify({tags:['开心'],scenes:['庆祝']})}}
  f.lib.settings({autoTag:true});const b=f.lib.add({bytes:Buffer.concat([gif,Buffer.from('paused-b')]),scope:'a'}),c=f.lib.add({bytes:Buffer.concat([gif,Buffer.from('paused-c')]),scope:'a'});await new Promise(setImmediate);f.lib.settings({autoTag:false});release();for(let i=0;i<40;i++)await new Promise(setImmediate);assert.equal(calls,1);assert.equal(f.lib.view().items.find(x=>x.id===b.id).tagStatus,'cancelled');assert.equal(f.lib.view().items.find(x=>x.id===c.id).tagStatus,'cancelled')
 }finally{f.close()}
})


test('共享表情自动复用绑定 DeepSeek，旧视觉配置不再改变路由',async()=>{
 const f=fixture();try{
  f.agent.options={provider:'deepseek',model:'bound-session-model'}
  f.ctx.attachments={async admitPromptContent(content){return content}}
  const a=f.lib.add({bytes:gif,name:'共享表情'})
  const path=join(f.home,'qq-stickers/catalog.json'),data=JSON.parse(readFileSync(path,'utf8'))
  data.settings={...data.settings,visionProvider:'obsolete-provider',visionModel:'obsolete-model',analysisSession:'obsolete-session'}
  writeFileSync(path,JSON.stringify(data));f.result({tags:['开心'],scenes:['庆祝']});f.lib.enqueueTags(a.id)
  for(let i=0;i<40;i++)await new Promise(setImmediate)
  assert.equal(f.lib.view().items[0].tagStatus,'complete');assert.equal(f.requests[0].provider,'deepseek');assert.equal(f.requests[0].model,'bound-session-model');assert.equal(f.requests[0].sessionId,'a')
  assert.ok(f.requests[0].messages[0].content.some(x=>x.type==='image'))
  assert.equal(f.lib.view().settings.visionModel,undefined)
 }finally{f.close()}
})


test('扫描只识别未打标签素材，超过 32 张完整排队且重复扫描去重',async()=>{
 const f=fixture();let release;try{
  f.ctx.attachments={async admitPromptContent(content){return content}}
  const manual=f.lib.add({bytes:gif,tags:['人工标签'],scenes:[]})
  for(let i=0;i<40;i++)f.lib.add({bytes:Buffer.concat([gif,Buffer.from(String(i))]),scope:'a'})
  const gate=new Promise(r=>release=r)
  f.ctx.llm.stream=async function*(input){f.requests.push(input);await gate;yield{type:'text-delta',text:JSON.stringify({tags:['开心'],scenes:['庆祝']})}}
  f.lib.enqueueTags(undefined,false,true);f.lib.enqueueTags(undefined,false,true)
  assert.equal(f.lib.view().tagging.pending,40)
  release()
  for(let i=0;i<100&&f.lib.view().tagging.pending;i++)await new Promise(setImmediate)
  assert.equal(f.lib.view().tagging.pending,0);assert.equal(f.requests.length,40)
  const items=f.lib.view().items
  assert.equal(items.filter(x=>x.tagStatus==='complete').length,40)
  assert.deepEqual(items.find(x=>x.id===manual.id).tags,['人工标签'])
  assert.deepEqual(items.find(x=>x.id===manual.id).scenes,[])
  f.lib.enqueueTags(undefined,false,true);assert.equal(f.requests.length,40)
 }finally{release?.();f.close()}
})
