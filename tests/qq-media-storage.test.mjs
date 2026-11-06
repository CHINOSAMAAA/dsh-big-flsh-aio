import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, readdirSync, existsSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { Readable } from 'node:stream'
import { createMediaStorage } from '../modules/qq/lib/media-storage.mjs'
const stream = (...parts) => (async function*(){for(const part of parts)yield Buffer.from(part)})()
function fixture(){
 const home=mkdtempSync(join(tmpdir(),'qq-archive-')),workspace=join(home,'BigFish');mkdirSync(workspace);mkdirSync(join(home,'storages'))
 writeFileSync(join(home,'storages/workspace.json'),JSON.stringify({tables:{workspaces:{fish:{path:workspace}}}}))
  writeFileSync(join(home,'qq-bridge-config.json'),JSON.stringify({工作区:'fish'}))
 const lib=createMediaStorage({home}),save=patch=>lib.save({kind:'files',name:'报告.txt',data:stream('hello'),binding:{类型:'私聊',号码:'123',会话:'a'},endpoint:'http://onebot',maxBytes:1024,...patch})
 return{home,workspace,lib,save,close:()=>rmSync(home,{recursive:true,force:true})}
}
test('关闭不创建归档，图片与文件独立目录、原字节与名称、去重及管理删除',async()=>{
 const f=fixture();try{
  assert.equal(f.lib.view({}).images.enabled,false);assert.equal(f.lib.view({}).files.enabled,false)
  assert.deepEqual(readdirSync(f.workspace),[]);await assert.rejects(f.save({active:()=>false}),/已关闭/);assert.deepEqual(readdirSync(f.workspace),[])
  const image=await f.save({kind:'images',name:'图.gif',mediaType:'image/gif',data:stream('GIF89a','original')})
  const file=await f.save({name:'../../报告.txt'});assert.deepEqual(readFileSync(file.path),Buffer.from('hello'));assert.match(image.path,/QQ图片/);assert.match(file.path,/QQ文件/)
  assert.equal((await f.save()).item.id,file.item.id);assert.equal(f.lib.view({文件存储:true}).files.items.length,1)
  assert.equal(f.lib.view({}).files.items[0].name,'报告.txt')
  await f.save({binding:{类型:'群',号码:'456',会话:'b'}});assert.equal(f.lib.view({}).files.items.length,2)
  f.lib.remove('images',image.item.id);assert.equal(f.lib.view({}).images.items.length,0);assert.equal(existsSync(file.path),true)
 }finally{f.close()}
})
test('超限与中途关闭清理临时文件，损坏索引不覆盖数据',async()=>{
 const f=fixture();try{
  await assert.rejects(f.save({data:stream('1234','5678'),maxBytes:5}),/超过/)
  assert.deepEqual(readdirSync(join(f.workspace,'QQ文件')),[])
  let active=true;await assert.rejects(f.save({active:()=>active,data:(async function*(){yield Buffer.from('hello');active=false})()}),/已关闭/)
  assert.deepEqual(readdirSync(join(f.workspace,'QQ文件')),[])
  const good=await f.save();const catalog=join(f.workspace,'QQ文件','catalog.json');writeFileSync(catalog,'broken')
  await assert.rejects(f.save({data:stream('new file')}));assert.equal(readFileSync(catalog,'utf8'),'broken');assert.equal(readFileSync(good.path,'utf8'),'hello');assert.ok(!readdirSync(join(f.workspace,'QQ文件')).some(x=>x.startsWith('.incoming-')))
 }finally{f.close()}
})
test('重新接收可恢复被手动移走的归档原图',async()=>{
 const f=fixture();try{
  const old=await f.save();rmSync(old.path);assert.equal(f.lib.view({}).files.items.length,0)
  const restored=await f.save({name:'新名字.pdf'});assert.equal(restored.path,old.path);assert.equal(readFileSync(old.path,'utf8'),'hello')
 }finally{f.close()}
})
test('管理鉴权、路径限制、下载内容类型和删除只作用于指定归档',async()=>{
 const f=fixture();try{
  const item=(await f.save({name:'网页.html',data:stream('<html/>')})).item,routes=new Map();let denied=false
  f.lib.register({route:(path,fn)=>routes.set(path,fn),ctx:{get:()=>({requestRejection:()=>denied?403:undefined})},config:()=>({}),json:(res,v)=>res.end(JSON.stringify(v)),protect:fn=>async(req,res)=>{if(denied)throw new Error('forbidden');if(req.method!=='POST')throw new Error('POST required');return fn(req,res)}})
  const call=async(path,body)=>{const headers={};let value;const req=Readable.from(body?[JSON.stringify(body)]:[]);Object.assign(req,{method:body?'POST':'GET',url:'/dsh-qq-bridge/media-storage'+path});await routes.get(req.url.split('?')[0])(req,{setHeader(k,v){headers[k]=v},end(v){value=v}});return{headers,value}}
  denied=true;await assert.rejects(call(''),/forbidden/);await assert.rejects(call('/remove',{kind:'files',id:item.id}),/forbidden/);denied=false
  await assert.rejects(call('/file?kind=files&id=../../etc/passwd'),/无效/)
  const download=await call('/file?kind=files&id='+item.id);assert.equal(download.headers['Content-Type'],'application/octet-stream');assert.ok(download.headers['Content-Disposition'].startsWith('attachment;'));assert.equal(download.value.toString(),'<html/>')
  await call('/remove',{kind:'files',id:item.id});assert.equal(f.lib.view({}).files.items.length,0)
 }finally{f.close()}
})

test('长 Unicode 文件名可以安全下载编码',async()=>{
 const f=fixture();try{const saved=await f.save({name:'😀'.repeat(170)+'.txt'});assert.doesNotThrow(()=>encodeURIComponent(saved.item.name));assert.equal(Array.from(saved.item.name).length,160)}finally{f.close()}
})
