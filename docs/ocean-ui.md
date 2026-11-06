# 冰蓝海洋界面与插画

界面以用户提供的参考图为视觉方向：冰蓝底色、清透白色面板、深蓝无衬线标题、分层海浪、水泡、星光与粉色手绘点缀。圆角面板通过内高光、叠边和短投影体现浮起的立体感。浅深主题继续跟随 DSH；深色使用夜海蓝。

按用户增加表情包的最新要求，主要角色分布为欢迎区、侧栏抱书、QQ 聊天气泡卡和记忆阅读卡四处，使用不同姿态。窄屏优先保证文字与操作空间，缩小或隐藏次要装饰。既有心情表情和可拖动挂饰保留其功能。

## 插画资产

- 文件：`modules/mood/assets/welcome.png`。
- 服务路径：`/dsh-feiyu-mood/welcome.png`，沿用心情模块的固定图片白名单。
- 来源：用户提供的图 2，经内置 imagegen 工具提取并清理左上角的挥手角色；不是从上游原素材中复制的新角色图。
- 规格：1254 × 1254、RGBA、透明背景。保留生成结果，不将整张表情图贴入页面。
- 新增文件：同目录的 `sticker-book.png`、`sticker-chat.png`、`sticker-read.png`，分别用于抱书、聊天气泡、阅读写字，规格同上。
- 新增三图同样通过内置 imagegen 工具清理、提取自用户提供的图 2，实际完整提示词记录在同目录文档 [sticker-prompts.json](sticker-prompts.json)。
- 原有角色素材、原作者许可及署名不变。

## 实际生成提示词

```text
Use case: background-extraction / identity-preserve. Asset type: ONE clean transparent PNG character illustration for the hero of a soft icy-blue ocean-themed dashboard. Edit target: supplied six-expression sheet. Extract and faithfully recreate ONLY the upper-left waving, cheerful, eyes-closed blue-haired chibi whale maid girl, keeping her exact face, navy/white maid outfit, frilled headband, blue hair shapes, whale ear fins, tail, proportions and friendly hand-wave pose. Keep the small three golden excitement marks beside her waving hand. Single complete full-body character, centered with comfortable transparent padding, feet/tail/head/hair all fully in frame, 1:1 square canvas. Remove ALL of the original sheet's colorful cyan/blue/red/white pixel noise, speckles, fragmented halos, black areas, and all other five characters. Outside of clean antialiased character contours must be genuinely transparent alpha, no background, no checkerboard, no gray or white backdrop, no shadow plate, no rectangular outline. Clean professional sticker-quality anime watercolor cel shading, closely match supplied original details and expression. No text, no watermark, no logo added. The output is the isolated character itself, NOT a UI mockup, no extra objects. It will be displayed at only ~200px tall, so crisp silhouette and natural edge alpha are essential.
```

自动测试和隔离浏览器验证见根目录 `VALIDATION.md`，真实 DSH、QQ 与模型联调另行验收。


## 操作页扁平化 · 2026-11-05

总览保留海洋插画和立体面板，其余页面使用纯色表面、细分隔线与小圆角。QQ 的连接、绑定、消息策略、图片、表情包、语音转写、QQ 空间、历史导入、运行日志各有独立入口；保存为主操作，测试和刷新为次操作。记忆库、语义召回、召回参数分开，单库索引与正文管理分开。常用表单直接显示，诊断、回收站和按需管理工具仍可收起。

布尔配置使用原生 input 或 button 的 switch 语义；滑块采用弹性曲线、按压形变，保留键盘焦点与空格切换，并尊重 prefers-reduced-motion。文件、会话、记忆的多项选择保持复选框语义。

截图能力核对依据为工作区独立 `dsh-qq-link-plus/lib/host.js`（1.5.1-3）及 AIO 内置同源实现：

| 功能 | 源码实际能力与本次界面入口 |
| --- | --- |
| 静态表情 | 「图片」仅自动转发绑定 DSH 会话回复中生成的图片，每轮最多 4 张；不提供手动发送、上传或图片存储。 |
| GIF 表情 | 本地文件原字节转 base64、网址原样交给后端；没有主动转静态帧。能否播放仍由 QQ 后端与客户端决定。 |
| 自动挑选 | 「表情包」配置素材库与语境选图，独立于生成图片转发页面；素材导入及识别使用专用处理会话。 |
| 发布说说 | 已有 qq_space_post；前端可填写正文、五档可见范围及部分可见 / 不可见 QQ 名单。 |
| 说说附图 | 已有最多 9 张；前端按行填写，超出数量禁用发布，接口再次校验。路径由 QQ 后端读取。 |
| 定时说说 | 每分钟检查并提醒一个绑定会话，模型自行决定是否发；时间按宿主时区。计划可见范围作为提示传入，实际取决于模型调用参数。 |
| 浏览好友动态 | 已有 qq_space_feeds，另有列表及详情工具；前端提供查看动态、说说与评论入口，结果按纯文本显示。 |
| 自动点赞 / 评论 | 点赞有真实 like_qzone 调用（每圈 3 条、每日 20 条）；评论仅递送动态，缺少发表评论工具，界面明确说明。 |

旧 `/dsh-qq-bridge/send-images` 管理接口明确拒绝手动发送，生成图仅随会话回复转发；`/dsh-qq-bridge/space` 复用原空间工具的发布开关。语音转写独立放在表情包之后，QQ 收图与文件设置位于消息策略。没有修改独立 Plus 仓库，也没有声称已经同步新上游版本。
