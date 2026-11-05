# 大肥鱼项目约定

- 根包名固定为 `dsh-big-flsh-aio`，展示名称为「大肥鱼」。
- 本会话及后续本仓库的修改完成并验证后，自动使用「版本号：中文改动说明」提交并推送到 `origin/main`；不得提交本地凭据、QQ 聊天或记忆数据。
- 根 `package.json` 是 AIO 版本和 `upstreamCompatibility` 的唯一真源。版本变化后同步 `CHANGELOG.md`，运行 `npm run build` 并提交生成的 `client.js`。
- 不更改或删减 Yuuyuko-uu 原许可、署名和来源；根 `LICENSE` 保持完整原文，`LICENSE.md` 为带来源的署名首页。
- `modules` 下保留原包名、接口及数据路径用于兼容，不恢复模块独立更新器。所有更新通过根 `lib/selfupdate.mjs` 获取：国内渠道使用本项目 npm 包的 npmmirror 镜像，GitHub 渠道使用本仓库 main，不得安装原作者的同名包。
- 修改后运行 `npm test` 与 `npm pack --dry-run`；涉及宿主、QQ 或模型的外部行为时，如实区分自动测试与真实联调。

## AIO 独立版本规则

- AIO 使用独立的 SemVer 版本，从 `0.0.1` 开始，不与 `dsh-qq-link-plus`、`dsh-fish-memory-plus` 或原作者项目共用版本规则，不采用「上游版本-x」。
- **只有发布新的 npm 包才递增 AIO 版本号**。首次独立版本为 `0.0.1`，之后每次 npm 发布默认依次使用 `0.0.2`、`0.0.3`；没有用户另行指定时不提升主版本或次版本。
- 日常功能修改、修复、文档维护、测试、构建及普通 GitHub 提交推送均不升级版本号；同一 npm 发布前的多次代码提交共用当前版本。
- 准备下一次 npm 发布时，再将版本改为下一个尚未发布的版本，并同步版本相关文件。发布失败且该版本未成功发布时，可以用同一版本重试；已成功发布的版本不得重复发布或覆盖。
- 不得因提交、推送、打标签或运行 `npm pack` 而自动递增版本；这些操作本身不等于 npm 发布。修改版本规则或推送代码也不自动授权执行 npm 发布。

## 上游来源与兼容记录

- QQ 原作者仓库为 https://github.com/Yuuyuko-uu/dsh-qq-link，记忆原作者仓库为 https://github.com/Yuuyuko-uu/dsh-fish-memory。
- 各模块的原作者版本、实际内置的 Plus 版本及提交号分别记录在 `upstreamCompatibility`，只表示实际来源和适配基线，不决定 AIO 版本，也不代表源仓库最新版本。
- 同步模块时更新实际对应的来源、版本及提交号，不得只改编号而声称已同步上游。本仓库规则不修改两个独立 Plus 仓库原有的「上游版本-x」约定。
