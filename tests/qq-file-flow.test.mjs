import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, writeFileSync, rmSync, mkdirSync, existsSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createHash } from 'node:crypto'
import { createMediaStorage } from '../modules/qq/lib/media-storage.mjs'

let serial = 0
async function fixture(patch = {}, useEvents = false) {
 const home=mkdtempSync(join(tmpdir(),'qq-file-flow-')),original={home:process.env.DSH_HOME,fast:process.env.QQ_BRIDGE_不加速,fetch:globalThis.fetch}
 const workspace=join(home,'BigFish');mkdirSync(workspace);mkdirSync(join(home,'storages'));writeFileSync(join(home,'storages/workspace.json'),JSON.stringify({tables:{workspaces:{fish:{path:workspace}}}}))
 process.env.DSH_HOME=home;process.env.QQ_BRIDGE_不加速='1'
 let config={工作区:'fish',总开关:true,试运行:true,合并窗口秒:0,NapCat:'http://synthetic.invalid',收文件:true,收文件最多:1,收文件上限MB:1,绑定:[{类型:'私聊',号码:'123456',会话:'session-file'}],...patch}
 const save=next=>{config={...config,...next};writeFileSync(join(home,'qq-bridge-config.json'),JSON.stringify(config))};save({})
 const group=config.绑定[0].类型==='群',key=(group?'群:':'私聊:')+config.绑定[0].号码,now=Math.floor(Date.now()/1000)
 writeFileSync(join(home,'qq-bridge-state.json'),JSON.stringify({上次:{[key]:now-100},已转:[]}))
 const effects=[],calls=[],api=[],admitted=[],downloads=[];let eventPush, eventClosed=false;let messages=[],tick,failImages=false,delay,fileContent='QQ文件原内容'
 globalThis.fetch=async(url,options)=>{
  url=String(url)
  if(url.startsWith('https://download.ftn.qq.com/')){downloads.push(url);return new Response(fileContent)}
  assert.ok(url.startsWith('http://synthetic.invalid/'))
  const action=url.split('/').at(-1);api.push({action,body:JSON.parse(options?.body||'{}')})
  if(action==='get_version_info')return Response.json({status:'ok',data:{app_name:useEvents?'SnowLuma':'fixture'}})
  if(action==='_events'&&useEvents)return new Response(new ReadableStream({start(c){eventPush=c;options.signal.addEventListener('abort',()=>{if(!eventClosed){eventClosed=true;c.close()}})}}),{headers:{'content-type':'text/event-stream'}})
  if(action==='get_private_file_url'||action==='get_group_file_url')return Response.json({status:'ok',data:{url:'https://download.ftn.qq.com/file'}})
  return Response.json({status:'ok',data:action==='get_login_info'?{user_id:998877,nickname:'fixture'}:{messages}})
 }
 const ctx={effect(fn){const off=fn();if(off)effects.push(off)},on:()=>()=>{},interval(fn){tick=fn;return()=>{}},webServer:{register(){return()=>{}}},logger:{info(){}},sessions:{flush:async()=>{}},agents:{get:()=>({session:{id:'session-file'},followup:async message=>calls.push(message)})},get(name){return this[name]},
  attachments:{async saveFileStream({data,name}){const parts=[];for await(const chunk of data)parts.push(chunk);if(delay)await delay;const bytes=Buffer.concat(parts);admitted.push(bytes);return{name,bytes:bytes.length,attachmentId:'sha256:'+createHash('sha256').update(bytes).digest('hex')}},async *readFileStream(ref){yield admitted.find(x=>'sha256:'+createHash('sha256').update(x).digest('hex')===ref.attachmentId)},async admitPromptContent(parts){if(failImages)throw new Error('fixture image failure');return parts}}}
 const host=await import('../modules/qq/lib/host.js?file-flow='+ ++serial),bridge=host.apply(ctx)
 return{home,workspace,async event(message){for(let i=0;i<100&&!eventPush;i++)await new Promise(setImmediate);assert.ok(eventPush);eventPush.enqueue(Buffer.from('data: '+JSON.stringify({self_id:998877,time:now,...message})+'\r\n\r\n'));await new Promise(setImmediate)},content:value=>{fileContent=value},archive:createMediaStorage({home}),calls,api,admitted,downloads,bridge,save,tick:()=>tick(),imagesFail:()=>{failImages=true},delay:gate=>{delay=gate},message(id,segments){messages=[{message_id:id,time:now+id,user_id:123456,message:segments}]},
  close(){effects.reverse().forEach(fn=>fn());globalThis.fetch=original.fetch;if(original.home===undefined)delete process.env.DSH_HOME;else process.env.DSH_HOME=original.home;if(original.fast===undefined)delete process.env.QQ_BRIDGE_不加速;else process.env.QQ_BRIDGE_不加速=original.fast;rmSync(home,{recursive:true,force:true})}}
}
const file=name=>({type:'file',data:{name,file_id:'id-'+name}})
test('真实宿主收文件链路：保留文字、限量、去重，开关及数值配置持久生效',async()=>{
 const f=await fixture();try{
  f.message(1,[{type:'text',data:{text:'请处理附件'}},file('一.txt'),file('二.txt')]);await f.tick()
  assert.equal(f.calls.length,1);assert.equal(f.calls[0].content.filter(x=>x.type==='file').length,1)
  assert.match(f.calls[0].content[0].text,/请处理附件/);assert.match(f.calls[0].content[0].text,/其余已跳过/);assert.equal(f.calls[0].source.chatId,'123456');assert.equal(f.calls[0].source.kind,'qq')
  await f.tick();assert.equal(f.calls.length,1);assert.equal(f.downloads.length,1)
  f.save({收文件:false,收文件最多:99,收文件上限MB:999});f.message(2,[file('三.txt')]);await f.tick()
  assert.equal(f.calls.length,2);assert.match(f.calls[1].content[0].text,/文件接收已关闭/);assert.equal(f.calls[1].content.filter(x=>x.type==='file').length,0);assert.equal(f.downloads.length,1)
  const state=await f.bridge.概况();assert.equal(state.配置.收文件,false);assert.equal(state.配置.收文件最多,10);assert.equal(state.配置.收文件上限MB,100)
 }finally{f.close()}
})
test('群文件遵守点名规则，图片转换失败仍保留文件附件',async()=>{
 const f=await fixture({收图:true,绑定:[{类型:'群',号码:'654321',会话:'session-file',只听点名:true}]});try{
  f.message(1,[file('未点名.txt')]);await f.tick();assert.equal(f.calls.length,0);assert.equal(f.downloads.length,0)
  f.imagesFail();f.message(2,[{type:'at',data:{qq:'998877'}},file('群文件.txt'),{type:'image',data:{file:'base64://'+Buffer.from('GIF89a-fake-image').toString('base64')}}]);await f.tick()
  assert.equal(f.calls.length,1);assert.equal(f.calls[0].content.filter(x=>x.type==='file').length,1);assert.equal(f.calls[0].content.filter(x=>x.type==='image').length,0)
  assert.equal(f.api.find(x=>x.action==='get_group_file_url').body.group_id,'654321')
 }finally{f.close()}
})
test('文件入库期间关闭总开关不把附件投到会话',async()=>{
 const f=await fixture();let release;try{
  const gate=new Promise(r=>release=r);f.delay(gate);f.message(1,[file('处理中.txt')]);const pending=f.tick()
  for(let i=0;i<20;i++)await new Promise(setImmediate)
  f.save({总开关:false});release();await pending;assert.equal(f.calls.length,0)
 }finally{release?.();f.close()}
})

const image=(extra='')=>({type:'image',data:{file:'base64://'+Buffer.from('GIF89a-original'+extra).toString('base64')}})
test('图片与文件默认不归档，DSH 仍接收图片和文件附件',async()=>{
 const f=await fixture({收图:true});try{
  f.message(1,[file('报告.txt'),image()]);await f.tick()
  assert.equal(f.calls.length,1);assert.ok(f.calls[0].content.some(x=>x.type==='file'));assert.ok(f.calls[0].content.some(x=>x.type==='image'))
  const state=await f.bridge.概况();assert.equal(state.配置.图片存储,false);assert.equal(state.配置.文件存储,false)
  assert.equal(existsSync(join(f.workspace,'QQ图片')),false);assert.equal(existsSync(join(f.workspace,'QQ文件')),false);assert.equal(existsSync(join(f.home,'qq-bridge-inbox')),false)
 }finally{f.close()}
})
test('开启后分别归档原图与文件，关闭停止新增且保留已有记录和附件接收',async()=>{
 const f=await fixture({收图:true,图片存储:true,文件存储:true});try{
  f.message(1,[file('报告.txt'),image()]);await f.tick()
  let stored=f.archive.view({});assert.equal(stored.images.items.length,1);assert.equal(stored.files.items.length,1)
  assert.equal(readFileSync(join(stored.images.path,stored.images.items[0].file),'utf8'),'GIF89a-original')
  assert.equal(readFileSync(join(stored.files.path,stored.files.items[0].file),'utf8'),'QQ文件原内容')
  f.save({图片存储:false,文件存储:false});f.content('第二份不同内容');f.message(2,[file('第二份.txt'),image('-second')]);await f.tick()
  assert.equal(f.calls.length,2);assert.ok(f.calls[1].content.some(x=>x.type==='file'));stored=f.archive.view({});assert.equal(stored.images.items.length,1);assert.equal(stored.files.items.length,1)
 }finally{f.close()}
})
test('归档路径不可用不影响文件与图片转入 DSH',async()=>{
 const f=await fixture({收图:true,图片存储:true,文件存储:true});try{
  rmSync(join(f.home,'storages/workspace.json'));f.message(1,[file('报告.txt'),image()]);await f.tick()
  assert.equal(f.calls.length,1);assert.ok(f.calls[0].content.some(x=>x.type==='file'));assert.ok(f.calls[0].content.some(x=>x.type==='image'));assert.match(f.calls[0].content[0].text,/额外存储失败/)
 }finally{f.close()}
})

test('文件通知通过宿主流程进入模拟 DSH，会处理迟到事件并与历史去重',async()=>{
 const f=await fixture({},true);try{
  f.message(1,[{type:'text',data:{text:'先处理普通消息'}}]);await f.tick();assert.equal(f.calls.length,1)
  await f.event({post_type:'notice',notice_type:'offline_file',time:Math.floor(Date.now()/1000)-50,user_id:123456,file:{id:'notice-file-id',name:'事件文件.txt',size:20}})
  await f.tick();assert.equal(f.calls.length,2);assert.equal(f.calls[1].content.filter(x=>x.type==='file').length,1);assert.equal(f.calls[1].source.chatId,'123456')
  f.message(2,[{type:'file',data:{file_id:'notice-file-id',name:'事件文件.txt'}}]);await f.tick();assert.equal(f.calls.length,2);assert.equal(f.downloads.length,1)
  f.message(3,[{type:'text',data:{text:'关于上面的文件'}},{type:'file',data:{file_id:'notice-file-id',name:'事件文件.txt'}}]);await f.tick();assert.equal(f.calls.length,3);assert.match(f.calls[2].content[0].text,/关于上面的文件/);assert.ok(!f.calls[2].content.some(x=>x.type==='file'))
  const persisted=JSON.parse(readFileSync(join(f.home,'qq-bridge-state.json'),'utf8'));assert.ok(persisted.已转.some(id=>String(id).startsWith('file:')))
 }finally{f.close()}
})
