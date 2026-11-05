# 大肥鱼 · dsh-big-flsh-aio

本项目派生自 [Yuuyuko-uu/dsh-qq-link](https://github.com/Yuuyuko-uu/dsh-qq-link)、[Yuuyuko-uu/dsh-fish-memory](https://github.com/Yuuyuko-uu/dsh-fish-memory)、[Yuuyuko-uu/dsh-feiyu-mood](https://github.com/Yuuyuko-uu/dsh-feiyu-mood) 与 [Yuuyuko-uu/dsh-speak-up](https://github.com/Yuuyuko-uu/dsh-speak-up)，原作者 **Yuuyuko-uu**。整合输入为 CHINOSAMAAA 的 [QQ Plus](https://github.com/CHINOSAMAAA/dsh-qq-link-plus) 和 [记忆 Plus](https://github.com/CHINOSAMAAA/dsh-fish-memory-plus)。继续使用原作者许可，完整保留 [LICENSE](LICENSE)，署名首页见 [LICENSE.md](LICENSE.md)。

**本项目改动：**将侧栏模板改为「大肥鱼」主内容区工作台，内置 QQ 互通、历史导入、长期记忆、鱼的心情和主动搭话模块；统一检查与安装更新，提供本项目的国内镜像和 GitHub 两种渠道；加入来源、版本对应表和整合测试。Plus 的历史导入、QQ 来源分库和 Qwen 语义召回一并保留。本项目是衍生整合版本，不代表原作者出品。

## 主界面

在 DSH 左侧栏点击「大肥鱼」，内容直接显示在主内容区：

- **总览**：QQ 连接与转发、记忆开关和条目数、心情值、搭话状态，以及常用入口。
- **QQ 互通**：后端连接、绑定与角色、消息/媒体/语音策略、QQ 空间、历史导入。
- **长期记忆**：记忆库浏览、编辑、提炼、档案、遗忘参数、QQ 隔离和 Qwen Embedding。
- **鱼的心情**：AI 判断心情、七维情绪、时间线、会话/工作区绑定、判断模型与注入策略；保留可拖拽挂饰和全部图片资源。
- **主动搭话**：空闲时段、本地概率、目标会话、冷却、演练及手动真发，复用目标 Agent 的人格、工具和长期记忆。
- **更新与来源**：检查更新、一键安装整合包、原作者及项目地址、本版本对应的上游和 Plus 版本。

切换工作台页签会保留已打开页面的状态。离开整个工作台或重载仍会结束页面中的历史导入控制，已写入记忆不撤回；可按原流程恢复导入任务。

**当前仓库版本为 0.1.1，npm 已发布包仍为 0.0.1。心情和搭话本次仅在 GitHub 提供，使用下方 GitHub 来源安装；旧 npm 包不含这两项。**

## 在 DSH 中安装

要求 **Node.js ≥ 22，DSH ≥ 0.2.1-rc.2**。AIO 已包含 QQ、记忆、心情和搭话模块，安装一份即可。

### 桌面版：使用插件管理器

1. 打开 DSH **设置 → 插件 → 安装**。
2. 停用旧侧栏模板、单独的 QQ / 记忆 / 心情 / 搭话插件或旧版 Plus，保留已有数据。
3. 在安装来源中粘贴下面的**国内镜像安装包地址**：

```text
https://registry.npmmirror.com/dsh-big-flsh-aio/-/dsh-big-flsh-aio-0.0.1.tgz
```

4. 确认安装并启用，按宿主提示重载或重启 DSH。
5. 点击左侧栏的 **大肥鱼**。首次使用时配置 QQ 后端与会话绑定，再启用需要的记忆功能。

这里的 `0.0.1` 是固定安装版本。安装其他版本时，将地址中的版本号替换为镜像已同步的版本；可从 [国内镜像版本信息](https://registry.npmmirror.com/dsh-big-flsh-aio/latest) 查看当前 latest 的 `version` 字段。

如果已经下载了 `.tgz` 文件，也可以在插件管理器填写该文件的**绝对路径**进行本地安装。开发目录通过 link 安装的副本不支持页面一键更新；切换到发行包时，先停用或移除旧 link 条目，再安装发行包，保留 `DSH_HOME` 中的数据。

### Web 版：使用命令行

在终端执行：

```bash
dsh plugin --profile web add https://registry.npmmirror.com/dsh-big-flsh-aio/-/dsh-big-flsh-aio-0.0.1.tgz --registry=https://registry.npmmirror.com/
```

安装后重载或重启对应的 DSH Web 实例。`web` 按实际 profile 名称替换；**desktop profile 由桌面应用管理，请使用桌面版插件管理器**。

插件需要安装到 DSH 对应的 profile；在普通项目目录执行 `npm install` 或全局 `npm install -g` 不会自动启用 DSH 插件。

### 其他安装来源

网络可访问 GitHub 时，也可在插件管理器安装：

```text
github:CHINOSAMAAA/dsh-big-flsh-aio#main
```

或者使用 Web profile 命令：

```bash
dsh plugin --profile web add github:CHINOSAMAAA/dsh-big-flsh-aio#main
```

## 更新已安装的插件

DSH 界面启动后会自动检查 npm 国内镜像，此后每 30 分钟检查一次；回到窗口或恢复可见时补查，两次后台请求至少间隔 5 分钟。检查挂在全局界面上，不需要先打开大肥鱼页面。没有打开 DSH 界面或应用退出时，不运行此客户端检查。

发现比当前安装版本更新的包后，优先使用 DSH 自带 `Toast` 提示，点击「查看更新」直接打开「更新与来源」。同一版本在当前界面会话中只提示一次；旧宿主没有 Toast 时显示兼容提示条。后台网络失败不弹窗打扰，后续自动重试；不会自动安装。

1. 打开 **大肥鱼 → 更新与来源**。
2. 将「更新渠道」选为 **国内镜像 · npmmirror**。
3. 点击 **检查更新**；发现新版本后点击 **一键更新整合包**。
4. 安装完成后，按宿主提示重载或重启，再检查页面版本号。

| 渠道 | 检查与安装方式 |
| --- | --- |
| 国内镜像（默认） | 从本项目的 npmmirror 包获取版本和安装包，核验 SHA-512 后交给宿主安装，不需要访问 GitHub。 |
| GitHub | 读取本仓库 main 的最新提交，比较 `repositoryVersion` 并校验包名和版本后安装，需要能访问 GitHub。 |

npm 渠道只比较 `version`，GitHub 渠道只比较 `repositoryVersion`；两种编号互不比较。

两个渠道都沿用宿主的 `pluginManager.installBundle` 安装机制。检查结果按渠道缓存 6 小时，手动点击「检查更新」会绕过缓存。镜像同步可能有延迟；未同步、下载失败或校验失败时页面会明确报错，不会显示为已更新。

**旧界面没有国内渠道，或 GitHub 更新一直失败：**先按上面的桌面版 / Web 版安装步骤，使用国内镜像 `.tgz` 地址或本地安装包更新一次；重载后即可使用新更新页。

## 已有数据与使用注意

- 同一环境不要同时启用原版、Plus 和 AIO，它们共用部分接口与数据路径。不要在历史导入或模型写入过程中切换插件。
- 已有数据继续使用原 `DSH_HOME`（默认 `~/.dsh`）中的 `qq-bridge-config.json`、`qq-history-imports/`、`fish-memory-config.json`、`fish-memory/`、`feiyu-mood/`、`speak-up-config.json` 等位置；改包名不会迁移或删除这些文件。
- 新环境沿用 QQ 总开关关闭、试运行开启、Embedding 关闭的默认值。QQ 历史整理会调用目标会话的模型服务并消耗额度；启用 Embedding 后，正文和查询会发送到配置的云端。
- 心情判断会使用配置的模型并消耗额度；搭话默认试运行，只有真发才调用目标会话模型。若希望搭话回复推送 QQ，请在 QQ 页按需开启「自动触发也发」，并配置会话绑定和出站策略。
- 详细功能说明保留在 [QQ 模块文档](modules/qq/README.md)、[记忆模块文档](modules/memory/README.md)、[心情模块文档](modules/mood/README.md) 与 [搭话模块文档](modules/speak/README.md)。其中旧包的单独安装和独立更新步骤由本页替代。

## AIO 版本规则

仓库版本 `repositoryVersion` 为对内版本，当前 **0.1.1**，供自己使用并经 GitHub 更新。npm 包版本 `version` 为对外版本，当前 **0.0.1**；项目内容经过验证并明确发布后才递增。本次不发布 npm。两种编号独立，详见 [AGENTS.md](AGENTS.md)。

旧编号 `1.5.1-1` 保留为历史发布记录。新版检查器将历史编号视为迁移前版本，不会把镜像里残留的旧编号误报为新版本；仍运行旧检查器的用户，需先手动安装一次新系列安装包。兼容表中的上游版本仍按模块实际来源单独记录。

## 版本对应与兼容范围

大肥鱼当前仓库版本 **0.1.1**（npm 包版本 **0.0.1**）的可复现来源如下；“对应”表示实际整合基线，不是保证兼容所有上游新版，也不是要求再安装这些插件。

| 项目名称 | 本项目子仓库 | 原作者仓库 | 整合时的原仓库版本 | 实际内置版本 |
| --- | --- | --- | --- | --- |
| 通到 QQ | [dsh-qq-link-plus](https://github.com/CHINOSAMAAA/dsh-qq-link-plus) | [Yuuyuko-uu/dsh-qq-link](https://github.com/Yuuyuko-uu/dsh-qq-link) | 1.5.1 · `fba7e3e` | QQ Plus 1.5.1-3 · `1d49ee0` |
| 鱼的记忆 | [dsh-fish-memory-plus](https://github.com/CHINOSAMAAA/dsh-fish-memory-plus) | [Yuuyuko-uu/dsh-fish-memory](https://github.com/Yuuyuko-uu/dsh-fish-memory) | 1.5.2 · `5124cc1` | 记忆 Plus 1.5.4 · `10b5765` |
| 鱼的心情 | `modules/mood` | [Yuuyuko-uu/dsh-feiyu-mood](https://github.com/Yuuyuko-uu/dsh-feiyu-mood) | 0.9.0 · `02fddca` | 0.9.0 |
| 主动搭话 | `modules/speak` | [Yuuyuko-uu/dsh-speak-up](https://github.com/Yuuyuko-uu/dsh-speak-up) | 0.3.0 · `e3bc636` | 0.3.0 |

全部四个源仓库都记录在根 `package.json` 的 `upstreamCompatibility`，工作台「更新与来源」从该表生成；固定记录整合时的版本与完整提交号。直接内置模块显示本地目录，Plus 模块显示子仓库。

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

`src/panel.js` 是工作台界面；`scripts/build-client.mjs` 将四个原客户端组件与工作台打包为根 `client.js`，无需浏览器动态加载其他插件。`index.js` 加载四个 Host 子插件；`lib/selfupdate.mjs` 为整合包唯一更新器。原功能、测试及文档分置于 `modules/qq`、`modules/memory`、`modules/mood`、`modules/speak`，包内旧名称用于保留署名、数据和协议兼容。

测试覆盖见测试输出；真实 QQ 收发、云端模型费用与输出、真实 DSH 的热重载和跨版本升级仍需在实际安装环境验收。
