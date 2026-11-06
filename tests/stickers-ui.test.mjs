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
