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

要求 **Node.js ≥ 22，DSH ≥ 0.2.1-rc.2**。可从 GitHub 安装；国内镜像更新需先完成下文的 npm 发布。

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

更新页默认使用 **npmmirror 国内镜像**，也可切换 GitHub。两个渠道均由原作者采用的宿主 `pluginManager.installBundle` 完成安装，本地 link 开发副本禁用自动安装。

| 渠道 | 检查与安装方式 |
| --- | --- |
| 国内镜像（默认） | 从 `registry.npmmirror.com/dsh-big-flsh-aio/latest` 读取版本，下载该版本的镜像 tarball，核验 SHA-512 后交给宿主安装；不依赖 GitHub、Git 或原作者的 npm 包。 |
| GitHub | 解析本仓库 main 的提交，读取固定提交的 package.json 并安装；API 失败时用 Git 查询提交。 |

检查缓存按渠道分开保存 6 小时，手动检查绕过缓存。镜像未同步、下载失败、校验失败均明确报错，不会静默切回 GitHub 或显示为已更新。安装后按宿主提示重载或重启。镜像可访问和延迟以实际网络为准，不能保证所有地区速度一致。

### 首次发布与旧版接入

先在项目目录完成检查和发布：

```bash
npm login --registry=https://registry.npmjs.org/
npm run build
npm test
npm pack --dry-run
npm publish --access public --tag latest --registry=https://registry.npmjs.org/
```

`1.5.1-1` 属于 SemVer 预发布格式，发布时显式指定 `--tag latest`，国内更新器才能通过 latest 标签找到本项目。首次发布需 npm 账号和交互验证；不要将令牌提交到仓库。镜像同步存在延迟，只有镜像返回本项目版本后，国内渠道才可用。

仍在使用旧版更新页、且 GitHub 不可达时，先在 DSH 插件管理器安装本次 `npm pack` 生成的本地 `.tgz` 文件并重载，即可使用新更新页。也可在镜像同步后安装以下地址（版本号按实际发布替换）：

```text
https://registry.npmmirror.com/dsh-big-flsh-aio/-/dsh-big-flsh-aio-1.5.1-1.tgz
```

### 后续修改

1. 根版本按 `dsh-qq-link` 的实际同步基线加修订号递增，例如 `1.5.1-2`。同步上游时更新 `upstreamVersionBase` 与 `upstreamCompatibility`，各模块适配基线分别记录。
2. 更新中文 CHANGELOG，执行 `npm run build`、`npm test` 和 `npm pack --dry-run`，提交生成的 client.js。
3. 使用「版本号：中文改动说明」自动提交并推送 origin/main，再执行上述 npm 发布命令，让国内镜像获得新版。仅推送 GitHub 不会发布到 npm。

## 版本对应与兼容范围

大肥鱼 **1.5.1-1** 的可复现来源如下；“对应”表示实际整合基线，不是保证兼容所有上游新版，也不是要求再安装这些插件。

| 项目名称 | 本项目子仓库 | 原作者仓库 | 适配的原仓库版本 |
| --- | --- | --- | --- |
| 通到 QQ | [dsh-qq-link-plus](https://github.com/CHINOSAMAAA/dsh-qq-link-plus) | [Yuuyuko-uu/dsh-qq-link](https://github.com/Yuuyuko-uu/dsh-qq-link) | 1.5.1 |
| 鱼的记忆 | [dsh-fish-memory-plus](https://github.com/CHINOSAMAAA/dsh-fish-memory-plus) | [Yuuyuko-uu/dsh-fish-memory](https://github.com/Yuuyuko-uu/dsh-fish-memory) | 1.5.2 |

第四列只表示本项目目前适配的原仓库版本，不代表源仓库的最新版本。实际内置 QQ Plus 1.5.1-3（1d49ee0）、记忆 Plus 1.5.4（10b5765）；后续独立仓库的文档及版本修正不改变本包已复制代码的版本记录。

Embedding 实现参考 [Aonysen/dsh-memory-rag](https://github.com/Aonysen/dsh-memory-rag/tree/9527a91f49863e7f16e109335e44b137e436dc41)，Copyright 2026 aonysen，Apache-2.0；参考项目不是内置子插件，许可和 NOTICE 保留于 `modules/memory/lib/notices/`。

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
