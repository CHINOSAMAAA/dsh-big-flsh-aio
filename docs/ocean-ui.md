# 大肥鱼界面与插画

## 深海手帐 · 当前视觉，2026-11-05

界面以「深海手帐」为方向：左侧深海军蓝装订侧栏（虚线内框、金色书环、奶油纸标签），右侧奶油纸面工作区（点阵纸纹、虚线内框、和纸胶带、页角印章）。总览是深海封面：大号欢迎拍立得、每日一句、状态读数卡和「功能 ALL IN ONE」入口；品牌副标题为「QQ陪伴手帐」，主标语为「把日常，收进鱼的胃袋里。」；操作页沿用同一纸面、虚线分隔和金色印章。浅色为奶油纸 + 海军蓝，深色为夜海纸 + 金色墨水。字体优先使用本机 HarmonyOS Sans SC，标题用 800，手写文案使用系统楷体。

总览每日一句由日期、最近一条未被取代的记忆和心情基调共同决定，同一天内保持稳定，相邻两天换句；没有可用记忆时退回按心情生成的通用句，不额外调用模型。封面海浪与气泡使用低幅度 CSS 动画，系统开启「减少动态效果」时停止。

右侧纸面固定为与左侧栏等高，页面内容只在纸面内部滚动；滚动区域收在虚线框以内，内容层位于虚线边框、胶带和页角装饰下方，上下边缘各有半透明渐隐。侧栏底部的抱书小像使用透明底、无白色卡片框，显示宽度略大于正文装饰图。

当前主页面、子页和记忆详情会写入浏览器 localStorage，刷新后恢复到原位置；QQ / 主动搭话有未保存配置时使用浏览器 `beforeunload` 拦截刷新（确认文案由浏览器控制）。

页签切换采用「立即换页 + 新内容淡入」：不再先把旧内容淡出成空白，避免右侧内容跳闪；内容从 35% 不透明度、下移 8px 开始，用 260ms 缓动回到原位。系统开启「减少动态效果」时不做位移与淡入。

项目 logo 使用用户提供的 `assets/logo.png`，在心情模块中提供 256px 透明 PNG（`modules/mood/assets/logo.png`），用于侧栏品牌、DSH 设置入口和预览页 favicon / 顶部 mark；原 SVG 鱼 logo 不再使用。

六张大肥鱼表情包通过心情模块的固定图片白名单提供（前四张与仓库根 `assets/` 内原有四张图字节一致，后两张来自用户后来新增的两张图），分别用于：

- `welcome.png`：总览欢迎拍立得；
- `sticker-chat.png`：QQ 互通卡；
- `sticker-read.png`：长期记忆卡；
- `sticker-book.png`：侧栏底部抱书小像（透明底，无白色卡片框）。
- `sticker-heart.png`：鱼的心情卡（新增，来源为用户后来提供的爱心手表情）；
- `sticker-wave.png`：主动搭话卡（新增，来源为用户后来提供的挥手表情）。

八入口、二级菜单、键盘操作、四模块接口和明暗主题保持兼容；实现见 `src/panel.js` 与 `src/theme.css`。

### QQ 互通表单

- 连接页：接口地址为空时显示 `http://127.0.0.1:3000`；接口令牌与地址同宽，提示为「HTTP API 服务 -> 鉴权 -> 授权 Token」；总开关单独成一张「消息转发」卡片，位于「QQ 后端连接」上方；不显示诊断信息，也不再显示「禁用后停止转发」。
- 总开关打开时，后台用当前草稿里的地址与令牌请求 `/dsh-qq-bridge/probe`；连不上、超时、HTTP 状态异常或 QQ 后端未返回登录信息时，用 DSH Toast 弹出具体原因（含地址与网络错误码 / HTTP 状态）。
- 绑定页：私聊与群聊分成两张表，每行一条绑定；表头文字左对齐，表头与表体使用同一套列宽；「操作」「启用」使用共享的 120 / 52px 列宽贴在行最右，启用紧跟操作，目标会话列吃掉左侧剩余宽度；1440 / 960px 下一行能放下全部列，窄屏时才在表格内部横向滚动。
- 绑定页顶部常驻提醒「新增映射前请先在 DSH 中新建一个会话用于绑定聊天」。
- 绑定行有只读 / 编辑两态：只读时按「操作 → 启用」顺序显示修改 / 删除和启用开关，群聊的回复门槛与主动回应显示勾 / 叉；编辑时可以改号、称呼、会话和群规则，操作列只显示保存和取消，启用列表头与整列暂时隐藏，保存成功后自动回到只读态。新增映射默认进入编辑态，保存后默认不启用。
- 编辑态添加私聊 / 群聊无效并提示「请先完成当前的映射编辑」；取消编辑会弹出「是否取消编辑？」确认框，确认后撤销当前行未保存的修改。
- 删除映射前会弹出主题化确认模态框，默认焦点在取消；确认后才从当前草稿移除，仍需保存设置才会真正生效。
- 不再提供「刷新会话列表」按钮；保存、进入修改、取消、删除和新增后自动刷新会话下拉数据，不覆盖正在编辑的绑定草稿。
- 称呼、回复门槛、主动回应的 `?` 使用自绘即时悬浮说明：鼠标悬停、键盘聚焦或触摸点击即出现，离开 / 失焦 / 点击外部立即收起，不再使用原生 `title`。回复门槛说明以「开启后」开头，末尾有深蓝下划线链接「点击跳转回复门槛设置」，点击后切到「消息策略」、滚动到「回复门槛」卡片并闪烁高亮（页面渲染后重试查找目标）；链接悬停下划线加粗。
- 回复门槛页不再提供全局「接收全部群消息」；群聊是否全收由绑定页每条群自己的「主动回应」控制。旧配置中未显式设置 `只听点名` 的群会在下一次保存时按保存前生效值固化，新群默认仅点名；底层 `群里听所有人` 仅保留为旧配置兼容，不再暴露。
- 角色设定从绑定页独立出来，位于「消息策略」之后的二级页签。页首是「大肥鱼专业代写」长条按钮：输入需求后调用 DSH 当前模型生成角色设定，结果可一键复制，并明确提示会消耗 Deepseek Token；系统提示词限定身份、性格、说话方式、关系、边界和 500 字内纯正文输出。
- 全局角色设定标题右上角只有主题开关；说明与「建议简洁描述」间距加大后接输入框。没有全局设定文字时开关禁用；输入后打开开关会先自动保存再应用到已打开会话，关闭时同样保存并撤销。私聊 / 群聊角色设定改为表格（号码、目标会话、设定文字、编辑、删除）；编辑图标打开 760px 多行输入模态框，删除图标确认「删除后本会话的角色设定将还原到全局角色设定」后清空该会话的单独设定。
- 「图片与文件」页从上到下依次是 QQ 图片接收、DSH 生成图片转发、文件发送；消息策略页不再重复展示这三组设置。
- QQ 与主动搭话不再使用悬浮保存条，只在顶部状态行提示未保存；切换主页面或子页面时若存在未保存改动，会弹出主题化确认框，可选择保存并切换、不保存切换或取消。

### 通知

- 面板挂载一个常驻 `NotificationHost`，订阅统一的 `fishNotify` 队列；QQ、长期记忆、鱼的心情、主动搭话和更新页的临时保存结果、操作结果与错误都调用 `@deepseek-ai/dsh-client-ui-primitives` 的 `Toast`。
- 队列一次只显示一条，重复文本会去重；`tone: 'success'` 使用宿主成功态，长文本延长停留时间，自动结束后再显示下一条。
- 宿主没有该原生组件时回退到本插件兼容提示条；顶部持久状态和未保存确认框不当作临时通知处理。

### 早前冰蓝海洋阶段

界面曾以用户提供的参考图为视觉方向：冰蓝底色、清透白色面板、深蓝无衬线标题、分层海浪、水泡、星光与粉色手绘点缀。圆角面板通过内高光、叠边和短投影体现浮起的立体感。浅深主题继续跟随 DSH；深色使用夜海蓝。

按用户增加表情包的要求，早前阶段的角色分布为欢迎区、侧栏抱书、QQ 聊天气泡卡和记忆阅读卡四处，使用不同姿态。窄屏优先保证文字与操作空间，缩小或隐藏次要装饰。既有心情表情和可拖动挂饰保留其功能。

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

总览保留海洋插画和立体面板，其余页面使用纯色表面、细分隔线与小圆角。更新页标题为「大肥鱼超进化！」，右侧使用 `assets/update.png` 的拍立得插画，状态贴近标题、渠道与操作独占一行；检查中按钮只显示旋转图标，发现更新后变为金色「立即更新」，点击即安装。表单控件统一使用奶油纸底、12px 圆角、内阴影与自绘下拉箭头，下拉菜单由 `FishSelectLayer` 接管为项目风浮层，浅深色分别有金色 / 浅蓝悬停与焦点环；新页面可调用 `FishInput`、`FishSelect`、`FishTextarea`。QQ 的连接、绑定、消息策略、表情包、语音转写、语音发送、QQ 空间、图片与文件各有入口；图片/文件归档与表情包文件框统一放到顶层「文件管理」；历史导入位于长期记忆最底部；运行日志是文件管理下方的顶层页签，只保留命令行式实时终端；保存为主操作，测试为次操作。记忆库、语义召回、召回参数分开，单库索引与正文管理分开。常用表单直接显示，诊断、回收站和按需管理工具仍可收起。

布尔配置使用原生 input 或 button 的 switch 语义；滑块采用弹性曲线、按压形变，保留键盘焦点与空格切换，并尊重 prefers-reduced-motion。文件、会话、记忆的多项选择保持复选框语义。

截图能力核对依据为工作区独立 `dsh-qq-link-plus/lib/host.js`（1.5.1-3）及 AIO 内置同源实现：

| 功能 | 源码实际能力与本次界面入口 |
| --- | --- |
| 静态表情 | 「图片」仅自动转发绑定 DSH 会话回复中生成的图片，每轮最多 4 张；不提供手动发送、上传或图片存储。 |
| GIF 表情 | 本地文件原字节转 base64、网址原样交给后端；没有主动转静态帧。能否播放仍由 QQ 后端与客户端决定。 |
| 自动挑选 | 「表情包」配置素材库与语境选图，独立于生成图片转发页面；素材导入及识别使用专用处理会话。 |
| 发布说说 | 后端保留 qq_space_post 供定时 / 主动任务使用；前端不再提供手动发布卡片。 |
| 说说附图 | 已有最多 9 张；前端按行填写，超出数量禁用发布，接口再次校验。路径由 QQ 后端读取。 |
| 定时说说 | 每分钟检查并提醒一个绑定会话，模型自行决定是否发；时间按宿主时区。计划可见范围作为提示传入，实际取决于模型调用参数。 |
| 浏览好友动态 | 已有 qq_space_feeds，另有列表及详情工具；前端提供查看动态、说说与评论入口，结果按纯文本显示。 |
| 自动点赞 / 评论 | 点赞有真实 like_qzone 调用（每圈 3 条、每日 20 条）；评论仅递送动态，缺少发表评论工具，界面明确说明。 |

旧 `/dsh-qq-bridge/send-images` 管理接口明确拒绝手动发送，生成图仅随会话回复转发；`/dsh-qq-bridge/space` 复用原空间工具的发布开关。语音转写独立放在表情包之后，QQ 收图与文件设置位于图片与文件；QQ 图片、QQ 文件和表情包文件归档管理放在顶层文件管理，三者均可打开本地文件夹。没有修改独立 Plus 仓库，也没有声称已经同步新上游版本。
