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
