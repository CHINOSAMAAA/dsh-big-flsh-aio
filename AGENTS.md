# 大肥鱼项目约定

- 根包名固定为 dsh-big-flsh-aio，展示名称为大肥鱼。
- 每次功能修改完成并验证后，使用「版本号：中文改动说明」提交，推送到 origin/main；不得把本地凭据、QQ 聊天或记忆数据提交到仓库。
- 根 package.json 是整合包版本和 upstreamCompatibility 的唯一真源。提升版本时同步 CHANGELOG.md，并运行 npm run build 提交生成的 client.js。
- 不更改或删减 Yuuyuko-uu 原许可、署名和来源；根 LICENSE 保持完整原文，LICENSE.md 为带来源的署名首页。
- modules 下保留原包名、接口及数据路径用于兼容；不恢复模块独立更新器。所有更新只通过根 lib/selfupdate.mjs 从本仓库 main 获取。
- 修改后运行 npm test 与 npm pack --dry-run；如涉及宿主、QQ、模型的外部行为，如实区分自动测试与真实联调。
