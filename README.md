<div align="center">

<img src="icon.svg" alt="大肥鱼图标" width="72" />

# 大肥鱼 AIO

**QQ 互通 · 长期记忆 · 鱼的心情 · 主动搭话**

![GitHub](https://img.shields.io/badge/GitHub-0.1.1-4b70e2?style=flat-square)
![npm](https://img.shields.io/badge/npm-0.0.1-cb3837?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A522-43853d?style=flat-square)

[原作者与来源](#原作者与来源) · [安装方法](#安装方法) · [支持功能](#支持功能)

</div>

## 原作者与来源

本项目派生自下列 Yuuyuko-uu 源仓库，原作者 **Yuuyuko-uu**；由 **CHINOSAMAAA** 维护衍生整合版。继续采用 **[Yuuyuko-uu 插件许可 1.2](LICENSE)**，完整许可、署名和第三方声明见 [LICENSE.md](LICENSE.md)。

| 项目 | 原作者 | 源仓库 | 本项目的子仓库 | 许可 |
| :--- | :--- | :--- | :--- | :--- |
| 通到 QQ | [Yuuyuko-uu](https://github.com/Yuuyuko-uu) | [dsh-qq-link](https://github.com/Yuuyuko-uu/dsh-qq-link) | [dsh-qq-link-plus](https://github.com/CHINOSAMAAA/dsh-qq-link-plus) | [插件许可 1.2](modules/qq/LICENSE) |
| 鱼的记忆 | [Yuuyuko-uu](https://github.com/Yuuyuko-uu) | [dsh-fish-memory](https://github.com/Yuuyuko-uu/dsh-fish-memory) | [dsh-fish-memory-plus](https://github.com/CHINOSAMAAA/dsh-fish-memory-plus) | [插件许可 1.2](modules/memory/LICENSE) |
| 鱼的心情 | [Yuuyuko-uu](https://github.com/Yuuyuko-uu) | [dsh-feiyu-mood](https://github.com/Yuuyuko-uu/dsh-feiyu-mood) | — | [插件许可 1.2](modules/mood/LICENSE) |
| 主动搭话 | [Yuuyuko-uu](https://github.com/Yuuyuko-uu) | [dsh-speak-up](https://github.com/Yuuyuko-uu/dsh-speak-up) | — | [插件许可 1.2](modules/speak/LICENSE) |

AIO 将四个模块统一到 DSH 主界面，增加统一总览、安装更新和来源展示；同时保留 [QQ Plus](https://github.com/CHINOSAMAAA/dsh-qq-link-plus) 的历史导入，以及 [记忆 Plus](https://github.com/CHINOSAMAAA/dsh-fish-memory-plus) 的 QQ 来源分库和 Qwen 语义召回。原版功能说明可直接访问上表源仓库。

## 安装方法

> **运行环境：**Node.js ≥ 22，DSH ≥ 0.2.1-rc.2。

### 在 DSH 软件中安装（推荐 npm）

1. 打开 DSH **设置 → 插件 → 安装**。
2. 停用旧模板和单独安装的 QQ、记忆、心情、搭话插件，**保留已有数据**。
3. 在安装来源中输入本项目的 **npm 包名**：

```text
dsh-big-flsh-aio@latest
```

4. 确认安装并启用，按提示重载或重启 DSH。
5. 点击左侧栏 **大肥鱼**，配置 QQ 后端、会话绑定，再开启需要的功能。

> **版本说明：**当前 npm `0.0.1` 包含 QQ、记忆和统一工作台；GitHub 仓库 `0.1.1` 另外包含心情与搭话。两种版本独立，功能范围以安装来源为准。

<details>
<summary><strong>npm 连接较慢？使用国内镜像安装包</strong></summary>

在 DSH 同一个安装来源输入框中，改填以下地址：

```text
https://registry.npmmirror.com/dsh-big-flsh-aio/-/dsh-big-flsh-aio-0.0.1.tgz
```

这是 npm `0.0.1` 的国内镜像安装包，无需访问 GitHub。安装后同样重载或重启 DSH。

</details>

<details>
<summary><strong>需要心情与搭话？使用 GitHub 仓库版</strong></summary>

在 DSH 同一个安装来源输入框中，填写：

```text
github:CHINOSAMAAA/dsh-big-flsh-aio#main
```

此来源包含当前仓库中的全部模块，需要网络可以访问 GitHub。

</details>

**后续更新：**进入 **大肥鱼 → 更新与来源**，npm 版推荐选择 **国内镜像 · npmmirror**，点击 **检查更新 → 一键更新整合包**，完成后按提示重载。仓库版新增功能使用 GitHub 渠道更新。

AIO 与独立插件共用部分接口和数据路径，同一环境只启用一套；切换前先停止正在进行的导入任务。

## 支持功能

| 功能 | 可以做什么 |
| :--- | :--- |
| **统一工作台** | 在 DSH 主内容区查看 QQ、记忆、心情与搭话状态，并进入各模块管理页面。 |
| **QQ 双向互通** | 对接 NapCat / SnowLuma 等 OneBot 后端，配置私聊、群聊、会话绑定、回复策略及图片、文件和语音处理。 |
| **历史聊天导入** | 读取 OneBot 历史、QCE / OneBot JSON 和 QQ TXT，按时间分段整理后写入目标记忆库，支持暂停与恢复。 |
| **长期记忆** | 浏览、编辑、整理记忆与档案，配置遗忘和召回；按 QQ 可信来源分库，管理隔离群与授权召回范围。 |
| **Qwen 语义召回** | 按需启用 Embedding，与关键词共同筛选候选；支持索引补齐、续跑和重建，故障时回退关键词。 |
| **鱼的心情** | AI 心情判断、七维情绪、时间线、会话 / 工作区绑定、模型与注入策略，以及可拖拽挂饰。 |
| **主动搭话** | 配置空闲时段、概率、目标会话和冷却，支持演练与手动真发，复用目标会话的人格、工具及记忆。 |
| **更新提醒** | 支持国内镜像和 GitHub 更新；后台检测 npm 新包，使用 DSH 原生 Toast 提醒，旧宿主显示兼容提示条。 |

**使用提示：**历史整理、心情判断与真实搭话会调用配置的模型；启用语义召回后，正文和查询会发送到配置的服务商，并可能产生费用。QQ 默认关闭转发并开启试运行，Embedding 默认关闭，搭话默认试运行，可按需逐项启用。
