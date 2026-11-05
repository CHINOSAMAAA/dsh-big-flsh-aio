# 大肥鱼 · dsh-big-flsh-aio

本项目派生自 [Yuuyuko-uu/dsh-qq-link](https://github.com/Yuuyuko-uu/dsh-qq-link) 与 [Yuuyuko-uu/dsh-fish-memory](https://github.com/Yuuyuko-uu/dsh-fish-memory)，原作者 **Yuuyuko-uu**。整合输入为 CHINOSAMAAA 的 [QQ Plus](https://github.com/CHINOSAMAAA/dsh-qq-link-plus) 和 [记忆 Plus](https://github.com/CHINOSAMAAA/dsh-fish-memory-plus)。继续使用原作者许可，完整保留 [LICENSE](LICENSE)，署名首页见 [LICENSE.md](LICENSE.md)。

**本项目改动：**将侧栏模板改为「大肥鱼」主内容区工作台，内置 QQ 互通、历史导入和长期记忆模块；统一检查与安装更新，改从本仓库获取整合包；加入来源、版本对应表和整合测试。Plus 的历史导入、QQ 来源分库和 Qwen 语义召回一并保留。本项目是衍生整合版本，不代表原作者出品。

## 主界面

在 DSH 左侧栏点击「大肥鱼」，内容直接显示在主内容区：

- **总览**：QQ 后端连接、转发开关、记忆开关和条目数，以及常用入口。
- **QQ 互通**：后端连接、绑定与角色、消息/媒体/语音策略、QQ 空间、历史导入。
- **长期记忆**：记忆库浏览、编辑、提炼、档案、遗忘参数、QQ 隔离和 Qwen Embedding。
- **更新与来源**：检查更新、一键安装整合包、原作者及项目地址、本版本对应的上游和 Plus 版本。

切换工作台页签会保留已打开页面的状态。离开整个工作台或重载仍会结束页面中的历史导入控制，已写入记忆不撤回；可按原流程恢复导入任务。

## 安装与已有数据

要求 **Node.js ≥ 22，DSH ≥ 0.2.1-rc.2**。安装公开 GitHub 仓库即可，**无需 npm 发布**。

1. 在 DSH 插件管理器停用原来的侧栏模板、`dsh-qq-link` / `dsh-qq-link-plus`、`dsh-fish-memory` / `dsh-fish-memory-plus`。不要删除插件数据。
2. 安装 `github:CHINOSAMAAA/dsh-big-flsh-aio#main`，按宿主提示重载或重启。
3. 点击 DSH 左侧栏「大肥鱼」。先配置 QQ 后端与会话绑定，再启用记忆；新环境仍沿用 QQ 总开关关闭、试运行开启、Embedding 关闭的默认值。

Web profile 的命令行安装（profile 参数按环境替换；desktop 由桌面应用管理）：

```bash
dsh plugin --profile web add github:CHINOSAMAAA/dsh-big-flsh-aio#main
```

已有数据继续使用原 `DSH_HOME`（默认 `~/.dsh`）目录：`qq-bridge-config.json`、`qq-history-imports/`、`fish-memory-config.json`、`fish-memory/` 等。改包名不迁移、不删除这些文件。保留 `/dsh-qq-bridge/*` 与 `/dsh-fish-memory/*` 协议供模块互通，所以**不能同时启用旧插件**。不要在导入或模型写入过程中切换插件。

本地开发安装可指向本项目绝对路径；若旧模板以 link 方式安装，文件夹改名后应在 DSH 插件管理器移除旧模板条目并重新安装本目录。

QQ 历史整理会把文本发送到目标会话的模型服务并消耗额度；启用 Embedding 后，正文和查询会发送到配置的云端。来源隔离及导入限制沿用 Plus 实现。详细功能说明保留在 [QQ 模块文档](modules/qq/README.md) 与 [记忆模块文档](modules/memory/README.md)；其中旧包单独安装及独立更新步骤由本页替代。

## 更新与发布

沿用原作者的 `pluginManager.installBundle` 方案：解析本仓库 `main` 的最新提交，读取该提交的 `package.json` 比较版本，点击「一键更新整合包」后安装 `github:CHINOSAMAAA/dsh-big-flsh-aio#<最新提交号>`。使用最新提交号可避免同一 `#main` 被宿主当成重复安装或复用旧缓存。检查缓存 6 小时，手动检查绕过缓存。网络失败如实报错；本地 link 开发副本禁用自动安装，以免覆盖工作目录。安装后以宿主的重载/重启提示为准，页面不会在后台静默安装。

后续每次功能修改：

1. 修改代码；**在根 package.json 提升整合包版本**。同步上游时，还需更新 `upstreamCompatibility` 的版本及提交号；它是更新页的唯一版本清单。
2. 更新中文 `CHANGELOG.md`，运行 `npm run build`、`npm test`、`npm pack --dry-run`。`client.js` 是生成产物，也必须提交。
3. 使用中文提交并推送，例如：

```bash
git add .
git commit -m '0.1.1：修复历史导入状态提示'
git push origin main
```

推送后即可在安装版中检查更新。不会从原作者的 npm 包或 GitHub 仓库安装代码。GitHub 安装还需要机器可访问 GitHub，且宿主提供插件管理接口；缺失时页面明确提示使用宿主插件管理器手动更新。

**可选 npm 发布**：并非当前更新链路必需。若要在 npm 上额外分发，先确认包名归属，执行 `npm login` → `npm pack --dry-run` → `npm publish --access public`，按 npm 提示完成验证。npm 发布不会改变本项目的 GitHub 更新来源。不要把账号令牌提交到仓库。

## 版本对应与兼容范围

大肥鱼 **0.1.0** 的可复现来源如下；“对应”表示实际整合基线，不是保证兼容所有上游新版，也不是要求再安装这些插件。

| 项目 | 作者 / 维护者 | 对应版本 | 提交 |
| --- | --- | --- | --- |
| [dsh-qq-link](https://github.com/Yuuyuko-uu/dsh-qq-link) | Yuuyuko-uu | 1.5.1 | `fba7e3e` |
| [dsh-fish-memory](https://github.com/Yuuyuko-uu/dsh-fish-memory) | Yuuyuko-uu | 1.5.2 | `5124cc1` |
| [dsh-qq-link-plus](https://github.com/CHINOSAMAAA/dsh-qq-link-plus) | Yuuyuko-uu；CHINOSAMAAA 扩展 | 1.5.1-3 | `1d49ee0` |
| [dsh-fish-memory-plus](https://github.com/CHINOSAMAAA/dsh-fish-memory-plus) | Yuuyuko-uu；CHINOSAMAAA 扩展 | 1.5.4 | `10b5765` |
| [dsh-memory-rag](https://github.com/Aonysen/dsh-memory-rag) | aonysen | Embedding 源码参考，非运行依赖 | `9527a91` |

2026-11-05 核对原作者仓库：QQ 仍为 1.5.1，记忆已为 1.5.5。记忆上游 1.5.5 未包含在本整合版本中。

## 开发

无需增加依赖。使用 Node.js 22 及以上：

```bash
npm run build
npm test
npm pack --dry-run
```

`src/panel.js` 是工作台界面；`scripts/build-client.mjs` 将两个原客户端组件与工作台打包为根 `client.js`，无需浏览器动态加载其他插件。`index.js` 加载两个 Host 子插件；`lib/selfupdate.mjs` 为整合包唯一更新器。原功能、测试及文档分置于 `modules/qq`、`modules/memory`，包内旧名称用于保留署名、数据和协议兼容。

测试覆盖见测试输出；真实 QQ 收发、云端模型费用与输出、真实 DSH 的热重载和跨版本升级仍需在实际安装环境验收。
