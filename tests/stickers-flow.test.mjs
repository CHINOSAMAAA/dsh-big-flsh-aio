import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, writeFileSync, rmSync, mkdirSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createStickers } from '../modules/qq/lib/stickers.mjs'
import { recordSource } from '../modules/qq/lib/memory-sources.mjs'

test('实际宿主代码 + 模拟 QQ：未点名表情收藏 → 视觉标签分类 → 回复附原 GIF，试运行不发图', async()=>{
 const home=mkdtempSync(join(tmpdir(),'fish-sticker-flow-')),previous=process.env.DSH_HOME,original=globalThis.fetch
 const cleanups=[],sent=[],turns=[],modelCalls=[],events=[];let messages=[],tick,picked
 const sid='session-sticker-flow',gif=Buffer.from('R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==','base64')
 const config={工作区:'fish',NapCat:'http://127.0.0.1:3000',总开关:true,试运行:false,发图:true,转群:true,合并窗口秒:0,拆段间隔毫秒:0,群里听所有人:false,绑定:[{类型:'群',号码:'654321',会话:sid,只听点名:true}]}
 try{
  mkdirSync(join(home,'storages'));mkdirSync(join(home,'BigFish'));writeFileSync(join(home,'storages/workspace.json'),JSON.stringify({tables:{workspaces:{fish:{path:join(home,'BigFish')}}}}))
  process.env.DSH_HOME=home;writeFileSync(join(home,'qq-bridge-config.json'),JSON.stringify(config));recordSource(home,config,'998877',config.绑定[0],'verified',['123456'])
  const agent={session:{id:sid,snapshotEvents:()=>events},options:{provider:'fake',model:'vision'},async followup(message){turns.push(message);events.push({type:'user/message',data:message})}}
  const ctx={effect(fn){const off=fn();if(off)cleanups.push(off)},on:()=>()=>{},interval(fn){tick=fn;return()=>{}},webServer:{register(){return()=>{}}},agents:{get:id=>id===sid?agent:undefined},sessions:{flush:async()=>{}},logger:{info(){}},get(name){return name==='connection'?{requestRejection:()=>undefined}:this[name]},attachments:{async admitPromptContent(content){return content}},
   llm:{async *stream(input){modelCalls.push(input);const visual=input.messages[0].content.some(x=>x.type==='image');yield{type:'text-delta',text:JSON.stringify(visual?{tags:['开心','庆祝'],scenes:['考试通过'],category:'开心庆祝'}:{id:picked})}}}}
  globalThis.fetch=async(url,options)=>{const action=String(url).split('/').at(-1);if(action==='send_group_msg')sent.push(JSON.parse(options.body));return Response.json({status:'ok',retcode:0,data:action==='get_login_info'?{user_id:998877,nickname:'fixture'}:action==='get_group_msg_history'?{messages}: {message_id:Math.floor(Math.random()*100000)}})}
  const lib=createStickers({home,ctx:{},findAgent:()=>agent});lib.settings({autoCollect:true,autoTag:true,autoClassify:true,autoSend:true})
  const host=await import('../modules/qq/lib/host.js?sticker-flow');const bridge=host.apply(ctx)
  await tick();const now=Math.floor(Date.now()/1000)
  messages=[{message_id:5001,user_id:123456,time:now+1,message:[{type:'mface',data:{file:'base64://'+gif.toString('base64'),summary:'庆祝'}}]}]
  await tick();for(let i=0;i<40;i++)await new Promise(setImmediate)
  assert.equal(turns.length,0,'未点名群消息不触发聊天，但收藏继续')
  const item=lib.view().items[0];picked=item.id;assert.equal(item.tagStatus,'complete');assert.equal(item.category,'开心庆祝')
  assert.ok(modelCalls[0].messages[0].content.some(x=>x.type==='image'))
  messages=[{message_id:5002,user_id:123456,time:now+2,message:[{type:'at',data:{qq:'998877'}},{type:'text',data:{text:'我考过了'}}]}]
  await tick();for(let i=0;i<20;i++)await new Promise(setImmediate);assert.equal(turns.length,1)
  await bridge.落地一发(config,'太好了，恭喜你考试通过！',[],sid,true,false)
  assert.equal(sent.length,2);assert.equal(sent[1].message[0].type,'image');assert.equal(sent[1].message[0].data.file,'base64://'+gif.toString('base64'))
  const calls=modelCalls.length,before=sent.length
  await bridge.落地一发({...config,试运行:true},'再祝贺一次',[],sid,true,false)
  assert.equal(sent.length,before);assert.equal(modelCalls.length,calls,'试运行不调用选图模型')
 }finally{cleanups.reverse().forEach(fn=>fn());globalThis.fetch=original;if(previous===undefined)delete process.env.DSH_HOME;else process.env.DSH_HOME=previous;rmSync(home,{recursive:true,force:true})}
})
