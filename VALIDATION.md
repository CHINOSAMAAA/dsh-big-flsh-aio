# 仓库 0.1.1 验证记录

验证日期：2026-11-05（Asia/Shanghai）。仓库版本 `repositoryVersion=0.1.1`，npm 包版本 `version=0.0.1`。本次只推送 GitHub，不发布 npm；npm registry 的 latest 已核对仍为 0.0.1。

## 可复现检查

```bash
npm run build
npm test
npm pack --dry-run --json
git diff --check
```

- Node.js 24.1.0：共 230 项 node:test 测试通过（根 11、QQ 18、记忆 144、心情 57），0 失败、0 跳过；QQ 与搭话附带脚本合计 506 条 PASS 断言，0 FAIL。
- 新增 `tests/module-flow.test.mjs`：实际加载四个内置模块，检查管理路由不冲突；由记忆工具落盘，搭话演练不投递、手动真发投递 `source.kind=speak-up`，复用记忆上下文，心情判断写入时间线并仅注入一次，回复经 QQ 策略送到模拟 OneBot 接口；本地手动输入仍受出站策略保护。
- 同一联调检查挂饰注入去重、widget.js 语法和全部十张 PNG 路由。所有读写均在生成的临时 DSH_HOME 内，Agent、模型和 OneBot 使用测试替身，不使用真实聊天或凭据。
- 新增 `tests/version-channels.test.mjs`：GitHub 只比较仓库版本，npm 镜像只比较 npm 包版本；npm 版本相同时，仓库新版本仍可交给宿主安装；无效仓库版本被拒绝。
- 构建的 `client.js` 包含四个原功能界面；来源表的四个原作者项目、原仓库版本、实际 Plus 版本与提交号均由根 package.json 生成。原许可逐字保留。
- 打包 dry-run：75 个文件，约 7.90 MB 压缩 / 9.88 MB 展开；含心情的完整挂饰资源与搭话宿主，只有根 `lib/selfupdate.mjs` 更新器，不含凭据、聊天记录、临时状态或日志。

## 浏览器检查

使用本机 Chrome（Playwright 驱动）及 React 18.3.1，对隔离临时宿主加载生成的 client.js，功能 API 由实际内置模块处理；外围服务使用测试替身。

- 1440×1100 与 390×844 两种视口。
- 六个主页面可切换，鱼的心情的四个子页签可切换。
- 搭话「演练一次」通过实际模块路由返回成功，页面显示「已演练一次（没有真发）」。
- 来源表包含四行，显示心情 0.9.0、搭话 0.3.0 和两个 Plus 的对应版本；同时显示仓库 0.1.1 / npm 包 0.0.1。
- 窄屏来源表横向滚动，不将仓库地址挤成单字长列；未发生浏览器页面异常。

## 实际环境边界

本次未改动当前 DSH desktop profile，未发送真实 QQ 消息、调用付费模型或发布 npm。真实 DSH 的安装与热重载、NapCat/SnowLuma 双向收发、真实模型判断质量和跨版本数据升级仍需在实际环境验收。自动化结果不代表这些外部环节已获真机验收。
