import test from 'node:test'
import assert from 'node:assert/strict'
import { createFileEvents, fileEventMessage } from '../modules/qq/lib/onebot-file-events.mjs'
import { backendFileStream } from '../modules/qq/lib/onebot-file-stream.mjs'
import { dockerOneBotSockets } from '../modules/qq/lib/docker-onebot.mjs'
import { receiveQQFiles } from '../modules/qq/lib/inbound-files.mjs'

const config = () => ({ NapCat: 'http://127.0.0.1:3000', 令牌: 'test-http', 总开关: true, 收文件: true, 收文件上限MB: 1, 绑定: [{ 类型: '私聊', 号码: '123456', 会话: 'session-file' }, { 类型: '群', 号码: '654321', 会话: 'session-group' }] })
const until = async condition => { for (let i = 0; i < 100; i++) { if (condition()) return; await new Promise(setImmediate) } assert.ok(condition(), '异步条件未达成') }
const file = { type: 'file', data: { file_id: 'a'.repeat(32), name: '报告.txt' } }
const notice = (extra = {}) => ({ post_type: 'notice', self_id: 998877, time: Math.floor(Date.now() / 1000), notice_type: 'offline_file', user_id: 123456, file: { id: file.data.file_id, name: '报告.txt', size: 5 }, ...extra })
const frame = data => ({ status: 'ok', retcode: 0, data })
const packets = bytes => [frame({ type: 'stream', data_type: 'file_info', file_name: '报告.txt', file_size: bytes.length }), frame({ type: 'stream', data_type: 'file_chunk', index: 0, data: bytes.toString('base64'), size: bytes.length }), frame({ type: 'response', data_type: 'file_complete', total_chunks: 1, total_bytes: bytes.length })]
const read = async iterable => { const chunks = []; for await (const c of iterable) chunks.push(c); return Buffer.concat(chunks) }
function streamResponse(frames) {
 const bytes = Buffer.from(frames.map(JSON.stringify).join('\r\n\r\n'))
 return new Response(new ReadableStream({ start(c) { for(let i=0;i<bytes.length;i+=7)c.enqueue(bytes.subarray(i,i+7));c.close() } }))
}
class FakeSocket extends EventTarget {
 static all=[]
 constructor(url){super();this.url=url;this.closed=false;FakeSocket.all.push(this);queueMicrotask(()=>this.dispatchEvent(new Event('open')))}
 send(text){const request=JSON.parse(text);queueMicrotask(()=>this.emit({status:'ok',echo:request.echo,data:{user_id:998877}}))}
 emit(data){this.dispatchEvent(new MessageEvent('message',{data:JSON.stringify(data)}))}
 close(){if(!this.closed){this.closed=true;this.dispatchEvent(new Event('close'))}}
}

test('NapCat / SnowLuma 消息段及群上传、私聊离线文件通知归一化',()=>{
 const group=fileEventMessage(notice({notice_type:'group_upload',group_id:654321,file:{id:'/12345678-1234-1234-1234-123456789abc',busid:102,name:'群文件'}}))
 assert.equal(group.message_type,'group');assert.equal(group.message[0].data.busid,102);assert.match(group.message[0].data.file_id,/^\//)
 assert.equal(fileEventMessage(notice()).message_type,'private');assert.equal(fileEventMessage(notice()).message_id,fileEventMessage(notice()).message_id)
 assert.equal(fileEventMessage({post_type:'message',message:[file],message_id:7}).message_id,7)
 assert.equal(fileEventMessage(notice({notice_type:'poke'})),null)
})
test('SSE 自动复用原 HTTP 口令，CRLF 跨块解析，只接收当前账号已绑定文件，关闭即中止',async()=>{
 const old=globalThis.fetch,cfg=config();let push,aborted=false,wakes=0,events
 globalThis.fetch=async(url,opts)=>{
  assert.equal(opts.headers.authorization,'Bearer test-http')
  if(url.endsWith('get_version_info'))return Response.json({status:'ok',data:{app_name:'SnowLuma'}})
  if(url.endsWith('get_login_info'))return Response.json({status:'ok',data:{user_id:998877}})
  assert.ok(url.endsWith('/_events'))
  return new Response(new ReadableStream({start(c){push=c},cancel(){aborted=true}}),{headers:{'content-type':'text/event-stream'}})
 }
 try{
  events=createFileEvents({config:()=>cfg,onWake:()=>wakes++,discover:async()=>{throw Error('不应检查 Docker')}});events.tick();await until(()=>push)
  const payload='data: '+JSON.stringify(notice())+'\r\n\r\n';push.enqueue(Buffer.from(payload.slice(0,-1)));push.enqueue(Buffer.from(payload.slice(-1)))
  push.enqueue(Buffer.from('data: '+JSON.stringify(notice({self_id:777}))+'\n\n'));push.enqueue(Buffer.from('data: '+JSON.stringify(notice({user_id:999}))+'\n\n'))
  await until(()=>wakes===1);assert.equal(events.messages(cfg.绑定[0],new Set()).length,1);assert.equal(events.messages(cfg.绑定[1],new Set()).length,0)
  assert.equal(events.messages(cfg.绑定[0],new Set([fileEventMessage(notice()).message_id])).length,0)
  cfg.收文件=false;events.tick();push.close();await until(()=>events.status()==='已关闭');assert.equal(events.messages(cfg.绑定[0],new Set()).length,0)
 }finally{events?.stop();globalThis.fetch=old}
})
test('SSE 不可用自动发现 WebSocket，核验账号，事件去重，卸载关闭连接',async()=>{
 const old=globalThis.fetch,cfg=config();let events,wakes=0,discoveries=0;FakeSocket.all=[]
 globalThis.fetch=async url=>url.endsWith('get_version_info')?Response.json({status:'ok',data:{app_name:'NapCat'}}):url.endsWith('get_login_info')?Response.json({status:'ok',data:{user_id:998877}}):new Response(null,{status:404})
 try{
  events=createFileEvents({config:()=>cfg,onWake:()=>wakes++,WebSocketImpl:FakeSocket,discover:async()=>{discoveries++;return['ws://127.0.0.1:3001/?access_token=docker-ws']}});events.tick();await until(()=>events.status()==='WebSocket 已连接')
  assert.equal(discoveries,1);const ws=FakeSocket.all[0];ws.emit(notice());ws.emit(notice());ws.emit(notice({self_id:777}));assert.equal(wakes,1)
  assert.equal(events.messages(cfg.绑定[0],new Set()).length,1);events.stop();assert.ok(ws.closed)
 }finally{events?.stop();globalThis.fetch=old}
})
test('Docker 自动发现严格匹配已有 HTTP 端口、口令和账号，只返回发布的 WS 监听',async()=>{
 const commands=[]
 const run=async args=>{
  commands.push(args)
  if(args[0]==='ps')return 'container-id\n'
  if(args[0]==='inspect')return JSON.stringify([{NetworkSettings:{Ports:{'3000/tcp':[{HostPort:'3000'}],'3001/tcp':[{HostPort:'34001'}]}}}])
  assert.equal(args[0],'exec');assert.equal(args.at(-1),'998877')
  return JSON.stringify([{http:[{port:3000,token:'wrong'}],ws:[{port:3001,token:'wrong'}]},{http:[{port:3000,token:'test-http',enable:true}],ws:[{port:3001,token:'test-ws',enable:true,role:'Universal'},{port:4000,enable:true}]}])
 }
 const result=await dockerOneBotSockets(config(),998877,run);assert.deepEqual(result,['ws://127.0.0.1:34001/?access_token=test-ws']);assert.equal(commands.length,3)
 assert.deepEqual(await dockerOneBotSockets({...config(),NapCat:'https://remote.example'},998877,()=>{throw Error('不得检查远程 Docker')}),[])
})
test('HTTP 文件流兼容两套后端的跨块帧和无分隔终帧，字节完整',async()=>{
 const old=globalThis.fetch,bytes=Buffer.from('真实文件字节\n')
 try{globalThis.fetch=async(url,opts)=>{assert.ok(url.endsWith('/download_file_stream'));assert.equal(opts.headers.authorization,'Bearer test-http');assert.deepEqual(JSON.parse(opts.body),{file_id:'qq-id',chunk_size:65536});return streamResponse(packets(bytes))}
 assert.deepEqual(await read(backendFileStream({config:config(),id:'qq-id',signal:AbortSignal.timeout(1000),maximum:1024})),bytes)
 }finally{globalThis.fetch=old}
})
test('SnowLuma 私聊 file_hash 和原始群文件 ID 保留，后端返回公共 CDN IP 可直接下载',async()=>{
 const old=globalThis.fetch,cfg=config(),api=[],admitted=[]
 try{
  globalThis.fetch=async url=>{assert.equal(url,'https://123.125.1.1/file');return new Response('file!')}
  const options={config:cfg,files:[{type:'file',data:{file_id:'/12345678-1234-1234-1234-123456789abc',file_hash:'qq-hash',name:'报告.txt',url:'https://123.125.1.1/file'}}],binding:cfg.绑定[0],call:async(action,body)=>{api.push({action,body});return{url:'https://123.125.1.1/file'}},attachments:{async saveFileStream({data,name}){const bytes=await read(data);admitted.push(bytes);return{name,attachmentId:'id',bytes:bytes.length}}}}
  assert.equal((await receiveQQFiles(options)).content.length,1);assert.equal(api[0].body.file_hash,'qq-hash')
  options.binding=cfg.绑定[1];await receiveQQFiles(options);assert.equal(api[1].body.busid,102);assert.equal(api[1].body.file_id,options.files[0].data.file_id);assert.equal(admitted.length,2)
 }finally{globalThis.fetch=old}
})
test('Docker 本地路径不读取，NapCat 流式文件 ID 与 SnowLuma URL 后备均可进入 DSH',async()=>{
 const old=globalThis.fetch,cfg=config(),bytes=Buffer.from('跨容器文件'),params=[]
 try{
  let snow=false
  globalThis.fetch=async(url,opts)=>{
   if(!url.endsWith('/download_file_stream'))return new Response(null,{status:403})
   const body=JSON.parse(opts.body);params.push(body)
   if(snow&&body.file_id)return Response.json({status:'failed',data:null})
   return streamResponse(packets(bytes))
  }
  const options={config:cfg,files:[file],binding:cfg.绑定[0],call:async action=>action==='get_file'?{file:'/app/.config/QQ/container-only',url:'/app/.config/QQ/container-only'}:null,attachments:{async saveFileStream({data,name}){const result=await read(data);assert.deepEqual(result,bytes);return{name,attachmentId:'hash',bytes:result.length}}}}
  assert.equal((await receiveQQFiles(options)).content.length,1);assert.equal(params[0].file_id,file.data.file_id);assert.ok(!params[0].file)
  snow=true;options.call=async()=>({url:'https://download.ftn.qq.com/file'});assert.equal((await receiveQQFiles(options)).content.length,1);assert.equal(params.at(-1).file,'https://download.ftn.qq.com/file')
 }finally{globalThis.fetch=old}
})
test('缺终帧、乱序、假大小、超限流均拒绝，已输出分块后绝不换通道重放',async()=>{
 const old=globalThis.fetch,bytes=Buffer.from('abcd')
 try{
  for(const corrupt of [p=>p.slice(0,2),p=>{p[1].data.index=1;return p},p=>{p[2].data.total_bytes=5;return p},p=>{p[0].data.file_size=100;return p}]){
   let calls=0;globalThis.fetch=async()=>{calls++;return streamResponse(corrupt(packets(bytes)))}
   await assert.rejects(read(backendFileStream({config:config(),id:'qq-id',url:'https://download.ftn.qq.com/file',signal:AbortSignal.timeout(1000),maximum:8})))
   if(corrupt(packets(bytes))[1]?.data.data_type==='file_chunk'&&corrupt(packets(bytes))[1]?.data.index===0&&corrupt(packets(bytes))[0]?.data.file_size===4)assert.equal(calls,1)
  }
 }finally{globalThis.fetch=old}
})
test('HTTP 仅返回终帧时，自动经已发现的 WebSocket 接收文件流',async()=>{
 const oldFetch=globalThis.fetch,oldWS=globalThis.WebSocket,bytes=Buffer.from('ws-file')
 class StreamSocket extends FakeSocket {send(text){const {echo,action}=JSON.parse(text);if(action==='get_login_info')return super.send(text);queueMicrotask(()=>packets(bytes).forEach(p=>this.emit({...p,echo})))}}
 try{globalThis.fetch=async()=>Response.json(packets(bytes).at(-1));globalThis.WebSocket=StreamSocket
 assert.deepEqual(await read(backendFileStream({config:config(),id:'id',signal:AbortSignal.timeout(1000),maximum:1024,socketIdentity:()=>998877,sockets:()=>['ws://127.0.0.1:3001/?access_token=test-ws']})),bytes)
 assert.ok(StreamSocket.all.at(-1).closed)
 }finally{globalThis.fetch=oldFetch;globalThis.WebSocket=oldWS}
})

test('自动发现的 WS 必须与 HTTP 登录账号一致，不匹配则关闭并尝试下一监听',async()=>{
 const old=globalThis.fetch;let events
 class VerifiedSocket extends FakeSocket {send(text){const request=JSON.parse(text);queueMicrotask(()=>this.emit({status:'ok',echo:request.echo,data:{user_id:this.url.includes(':34001')?998877:112233}}))}}
 FakeSocket.all=[]
 globalThis.fetch=async url=>url.endsWith('get_version_info')?Response.json({status:'ok',data:{app_name:'SnowLuma'}}):url.endsWith('get_login_info')?Response.json({status:'ok',data:{user_id:998877}}):new Response(null,{status:404})
 try{
  events=createFileEvents({config:config,WebSocketImpl:VerifiedSocket,discover:async()=>['ws://127.0.0.1:34001/?access_token=separate-ws']});events.tick();await until(()=>events.status()==='WebSocket 已连接')
  assert.ok(FakeSocket.all.slice(0,-1).every(s=>s.closed));assert.match(FakeSocket.all.at(-1).url,/:34001/)
 }finally{events?.stop();globalThis.fetch=old}
})
test('WS 下载完成后服务端立即关闭仍可完整接收，取消未完成下载关闭连接',async()=>{
 const oldFetch=globalThis.fetch,oldWS=globalThis.WebSocket,bytes=Buffer.from('done'),controller=new AbortController()
 class ClosingSocket extends FakeSocket {send(text){const {echo,action}=JSON.parse(text);if(action==='get_login_info')return super.send(text);queueMicrotask(()=>{packets(bytes).forEach(p=>this.emit({...p,echo}));this.close()})}}
 try{
  globalThis.fetch=async()=>Response.json({status:'failed'});globalThis.WebSocket=ClosingSocket
  assert.deepEqual(await read(backendFileStream({config:config(),id:'id',signal:AbortSignal.timeout(1000),maximum:1024,socketIdentity:()=>998877,sockets:()=>['ws://127.0.0.1:3001/']})),bytes)
  class HangingSocket extends FakeSocket {send(text){if(JSON.parse(text).action==='get_login_info')return super.send(text);queueMicrotask(()=>controller.abort())}}
  globalThis.WebSocket=HangingSocket
  await assert.rejects(read(backendFileStream({config:config(),id:'id',signal:controller.signal,maximum:1024,socketIdentity:()=>998877,sockets:()=>['ws://127.0.0.1:3001/']})))
  assert.ok(FakeSocket.all.at(-1).closed)
 }finally{globalThis.fetch=oldFetch;globalThis.WebSocket=oldWS}
})
