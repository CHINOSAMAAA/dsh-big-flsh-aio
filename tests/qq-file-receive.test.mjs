import test from 'node:test'
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { receiveQQFiles, qqFileName } from '../modules/qq/lib/inbound-files.mjs'

const file = (name, extra = {}) => ({ type: 'file', data: { name, file_id: 'qq-id', ...extra } })
function fixture(patch = {}) {
  const api = [], admitted = []
  const options = { files: [file('报告.txt')], binding: { 类型: '私聊', 号码: '123456' }, config: { 收文件: true, 收文件最多: 3, 收文件上限MB: 1, NapCat: 'http://127.0.0.1:3000' },
    attachments: { async saveFileStream({ name, data }) { const chunks = []; for await (const c of data) chunks.push(c); const bytes = Buffer.concat(chunks); admitted.push({ name, bytes }); return { name, bytes: bytes.length, attachmentId: 'sha256:' + createHash('sha256').update(bytes).digest('hex') } } },
    call: async (action, body) => { api.push({ action, body }); return { url: 'https://download.ftn.qq.com/file' } }, ...patch }
  return { api, admitted, options, run: () => receiveQQFiles(options) }
}
test('私聊文件通过真实附件形状交给 DSH，文件名清理且不执行文件',async()=>{
 const original=globalThis.fetch;try{
  const payload=Buffer.from('QQ 文件正文'),downloads=[];globalThis.fetch=async(...args)=>{downloads.push(args);return new Response(payload)}
  const f=fixture({files:[file('../../报告.txt')]});const result=await f.run()
  assert.equal(f.api[0].action,'get_private_file_url');assert.deepEqual(f.api[0].body,{file_id:'qq-id',user_id:'123456'})
  assert.deepEqual(f.admitted[0],{name:'报告.txt',bytes:payload});assert.equal(result.content[0].type,'file');assert.equal(result.content[0].attachment.bytes,payload.length)
  assert.match(result.notes[0],/已作为附件/);assert.equal(downloads[0][1].redirect,'manual');assert.equal(downloads[0][1].headers,undefined)
  assert.equal(qqFileName({name:'C:\\tmp\\资料.pdf'}),'资料.pdf')
 }finally{globalThis.fetch=original}
})
test('群文件 URL 不可用时使用 get_file 的 Base64，保留群号和后端文件名',async()=>{
 const f=fixture({files:[{data:{file_id:'group-id',busid:102}}],binding:{类型:'群',号码:'654321'}})
 f.options.call=async(action,body)=>{f.api.push({action,body});return action==='get_file'?{base64:Buffer.from('正文').toString('base64'),file_name:'文档.txt'}:null}
 const result=await f.run();assert.deepEqual(f.api[0],{action:'get_group_file_url',body:{file_id:'group-id',group_id:'654321',busid:102}})
 assert.deepEqual(f.api[1],{action:'get_file',body:{file_id:'group-id'}});assert.equal(result.content.length,1);assert.equal(f.admitted[0].name,'文档.txt')
})
test('关闭不请求附件，数量限制跨一批生效，缺少宿主能力明确反馈',async()=>{
 const f=fixture();f.options.config.收文件=false;assert.deepEqual(await f.run(),{content:[],notes:[]});assert.equal(f.api.length,0)
 f.options.config.收文件=true;f.options.config.收文件最多=1;f.options.files=[file('一.txt'),file('二.txt')];f.options.call=async()=>({base64:'YQ=='})
 const result=await f.run();assert.equal(f.admitted.length,1);assert.match(result.notes.at(-1),/只接收前 1/)
 f.options.attachments={};const failed=await f.run();assert.equal(failed.content.length,0);assert.match(failed.notes[0],/宿主缺少/)
})
test('声明大小、HTTP 长度和流式实际大小都受限，单张失败继续接收其余文件',async()=>{
 const original=globalThis.fetch;try{
  const f=fixture({files:[file('超限.txt',{size:2*1048576}),file('超长头.txt',{url:'https://download.ftn.qq.com/header'}),file('超长流.txt',{url:'https://download.ftn.qq.com/stream'}),file('正常.txt',{url:'https://download.ftn.qq.com/ok'})]});f.options.config.收文件最多=4
  globalThis.fetch=async url=>url.endsWith('header')?new Response('x',{headers:{'content-length':String(2*1048576)}}):url.endsWith('stream')?new Response(new ReadableStream({start(c){c.enqueue(new Uint8Array(1048576));c.enqueue(new Uint8Array(1));c.close()}}),{headers:{'content-length':'1'}}):new Response('normal')
  const result=await f.run();assert.equal(f.api.length,0);assert.equal(result.content.length,1);assert.equal(f.admitted[0].name,'正常.txt');assert.equal(result.notes.filter(x=>x.includes('未接收')).length,3)
 }finally{globalThis.fetch=original}
})
test('拒绝消息本地路径、非 QQ 地址、账号口令与跳转到内网，支持配置后端文件 URL',async()=>{
 const original=globalThis.fetch;try{
  const downloads=[];globalThis.fetch=async url=>{downloads.push(url);return url.includes('redirect')?new Response(null,{status:302,headers:{location:'http://127.0.0.1:9999/private'}}):new Response('ok')}
  const f=fixture({files:[file('路径',{file_id:'/etc/passwd'}),file('内网',{url:'http://127.0.0.1:9999/private'}),file('口令',{url:'https://user:secret@qq.com/file'}),file('跳转',{url:'https://download.ftn.qq.com/redirect'}),file('后端',{url:'http://127.0.0.1:3000/files/id'})]});f.options.config.收文件最多=5
  const result=await f.run();assert.equal(f.api.length,0);assert.equal(downloads.length,2);assert.equal(result.content.length,1);assert.equal(f.admitted[0].name,'后端')
 }finally{globalThis.fetch=original}
})
test('处理中取消或配置变化不提交文件，超限 Base64 拒绝',async()=>{
 const f=fixture(),controller=new AbortController();f.options.signal=controller.signal
 f.options.call=async()=>{controller.abort();return{base64:'YQ=='}};await assert.rejects(f.run());assert.equal(f.admitted.length,0)
 const g=fixture();let active=true;g.options.active=()=>active;g.options.call=async()=>{active=false;return{base64:'YQ=='}}
 assert.equal((await g.run()).content.length,0);assert.equal(g.admitted.length,0)
 const h=fixture();h.options.call=async()=>({base64:'A'.repeat(2*1048576)});assert.equal((await h.run()).content.length,0);assert.equal(h.admitted.length,0)
})

test('仅向配置后端传递令牌，重定向到 QQ 时移除令牌',async()=>{
 const original=globalThis.fetch;try{
  const calls=[];globalThis.fetch=async(url,options)=>{calls.push({url,headers:options.headers});return url.startsWith('http://127.')?new Response(null,{status:302,headers:{location:'https://download.ftn.qq.com/file'}}):new Response('file')}
  const f=fixture({files:[file('报告.txt',{url:'http://127.0.0.1:3000/files/id'})],backendHeaders:{authorization:'Bearer fixture-token'}})
  assert.equal((await f.run()).content.length,1);assert.equal(calls[0].headers.authorization,'Bearer fixture-token');assert.equal(calls[1].headers,undefined)
 }finally{globalThis.fetch=original}
})

test('宿主拒绝文件时关闭未消费的下载流',async()=>{
 const original=globalThis.fetch;try{
  let cancelled=false
  globalThis.fetch=async()=>new Response(new ReadableStream({cancel(){cancelled=true}}))
  const f=fixture({attachments:{async saveFileStream(){throw new Error('文件服务不可用')}}})
  assert.equal((await f.run()).content.length,0);assert.equal(cancelled,true)
 }finally{globalThis.fetch=original}
})
