import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
const { fishStickerInTag, fishStickerTagGroups } = runInNewContext(readFileSync(new URL('../src/stickers.js',import.meta.url),'utf8')+';({fishStickerInTag,fishStickerTagGroups})')
test('素材库按实际标签分组，始终保留未分类，多标签素材不重复计数',()=>{
 const items=[{tags:['开心','庆祝','开心'],category:'日常互动'},{tags:[]},{tags:['开心']},{tags:['未分类']}]
 const groups=JSON.parse(JSON.stringify(fishStickerTagGroups(items)))
 assert.equal(groups.find(x=>x.id==='all').count,4)
 assert.equal(groups.find(x=>x.id==='tag:开心').count,2)
 assert.equal(groups.find(x=>x.id==='untagged').count,1)
 assert.equal(groups.find(x=>x.id==='tag:未分类').name,'未分类（标签）')
 assert.equal(items.filter(x=>fishStickerInTag(x,'tag:庆祝')).length,1)
 assert.equal(items.filter(x=>fishStickerInTag(x,'untagged')).length,1)
 assert.equal(items.filter(x=>fishStickerInTag(x,'all')).length,4)
 assert.equal(fishStickerTagGroups([]).find(x=>x.id==='untagged').count,0)
})

test('批量导入逐张上传，失败继续处理，名称和场景由后端生成',async()=>{
 const data={settings:{processingSession:'processor'},items:[],tagging:{pending:0}},updates=[],requests=[]
 let firstState=true,nextId=0
 const React={
  createElement:(type,props,...children)=>({type,props:props||{},children:children.flat(Infinity)}),
  useState(initial){const value=firstState?data:initial;firstState=false;return[value,next=>updates.push(next)]},
  useRef:()=>({current:null}),useId:()=>String(++nextId),useEffect(){},
 }
 class FileReader {
  readAsDataURL(file){this.result='data:image/gif;base64,'+Buffer.from(file.name).toString('base64');this.onload()}
 }
 const FishStickers=runInNewContext(readFileSync(new URL('../src/stickers.js',import.meta.url),'utf8')+';FishStickers',{
  require:()=>React,FileReader,
  async fetch(url,options){
   const body=JSON.parse(options.body);requests.push({url,body})
   const failed=Buffer.from(body.base64,'base64').toString()==='失败.gif'
   return{ok:!failed,async json(){return failed?{ok:false,error:'不支持的图片'}:{ok:true,...data}}}
  },
 })
 const tree=FishStickers({}),find=node=>node?.props?.multiple?node:node?.children?.map(find).find(Boolean)
 await find(tree).props.onChange({target:{files:[{name:'一.gif',size:30},{name:'失败.gif',size:30},{name:'超限.gif',size:9*1048576},{name:'二.gif',size:30}]}})
 assert.equal(requests.length,3)
 assert.ok(requests.every(x=>x.url.endsWith('/import')&&x.body.tags===''&&x.body.scope===''&&!('name'in x.body)&&!('scenes'in x.body)))
 assert.ok(updates.some(x=>typeof x==='string'&&x.startsWith('导入完成：2 / 4 张已入库')))
 assert.ok(updates.some(x=>typeof x==='string'&&x.includes('失败.gif：不支持的图片')&&x.includes('超限.gif：单张图片')))
 assert.equal(updates.at(-1),false)
})
