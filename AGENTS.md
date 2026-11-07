# 大肥鱼项目约定

- 根包名固定为 `dsh-big-fish-aio`，展示名称为「大肥鱼」。
- 本会话及后续本仓库的修改完成并验证后，自动使用「版本号：中文改动说明」提交并推送到 `origin/main`；不得提交本地凭据、QQ 聊天或记忆数据。
- 根 `package.json` 是仓库版本 `repositoryVersion`、npm 包版本 `version` 和 `upstreamCompatibility` 的唯一真源。任一版本变化后同步 `CHANGELOG.md`，运行 `npm run build` 并提交生成的 `client.js`。
- 不更改或删减 Yuuyuko-uu 原许可、署名和来源；根 `LICENSE` 保持完整原文，`LICENSE.md` 为带来源的署名首页。
- `modules` 下保留原包名、接口及数据路径用于兼容，不恢复模块独立更新器。所有更新通过根 `lib/selfupdate.mjs` 获取：国内渠道使用本项目 npm 包的 npmmirror 镜像，GitHub 渠道使用本仓库 main，不得安装原作者的同名包。
- 修改后运行 `npm test` 与 `npm pack --dry-run`；涉及宿主、QQ 或模型的外部行为时，如实区分自动测试与真实联调。

## AIO 独立版本规则

- 仓库版本 `repositoryVersion` 是对内版本，供自己使用；当前为 `0.3.16`。按用户要求递增，GitHub 检查更新先比较仓库版本；仓库版本没变时再比较 main 提交，安装副本有新提交也算可更新。
- npm 包版本 `version` 是对外可发行版，只有项目更新经过验证并明确要求发布 npm 时才递增。新名称 npm 预备版本为 `0.3.15`，用户已要求暂缓 npm 发布；后续发布以用户明确要求为准。
- 两个版本独立编号，不与任何上游或 Plus 模块共用版本号。界面同时展示两者；npm 镜像更新只比较 npm 包版本，不能与仓库版本交叉比较。
- 提交、推送、打标签和运行 `npm pack` 都不等于 npm 发布，也不自动授权发布 npm。
- 内置模块的原包名、接口和数据路径保持兼容；QQ、记忆、心情、搭话的更新一律由根更新器处理。

## 上游来源与兼容记录

- QQ 原作者仓库为 https://github.com/Yuuyuko-uu/dsh-qq-link，记忆原作者仓库为 https://github.com/Yuuyuko-uu/dsh-fish-memory。
- 各模块的原作者版本、实际内置的 Plus 版本及提交号分别记录在 `upstreamCompatibility`，只表示实际来源和适配基线，不决定 AIO 版本，也不代表源仓库最新版本。
- 同步模块时更新实际对应的来源、版本及提交号，不得只改编号而声称已同步上游。本仓库规则不修改两个独立 Plus 仓库原有的「上游版本-x」约定。
- 心情源仓库为 https://github.com/Yuuyuko-uu/dsh-feiyu-mood，搭话源仓库为 https://github.com/Yuuyuko-uu/dsh-speak-up。来源表记录整合时的版本及提交号，不自动跟随上游最新版本。
