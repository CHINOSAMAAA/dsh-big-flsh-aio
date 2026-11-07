// 自动生成：修改 src/panel.js 或 modules/*/lib/client.js 后运行 npm run build。
window.__ModuleLoader__.load({ id: "dsh-big-flsh-aio", factory(require) {
const FISH_THEME_CSS = "/* 大肥鱼 · 深海手帐。\n   浅色是奶油纸 + 深海军蓝装订；深色是夜海纸 + 金色墨水。\n   所有样式都收在 .big-fish / .big-fish-notice 内，不碰宿主。 */\n.big-fish,\n.big-fish-notice {\n  --fish-font: 'HarmonyOS Sans SC', -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif;\n  --fish-title: var(--fish-font);\n  --fish-body: 15px;\n  --fish-small: 12.5px;\n  --fish-label: 14px;\n  --fish-radius: 24px;\n  --fish-radius-mid: 18px;\n  --fish-radius-sm: 11px;\n  --fish-gap: 24px;\n  --fish-motion: 180ms;\n\n  --fish-cream: #f3e9d5;\n  --fish-bg: var(--fish-cream);\n  --fish-paper-bg: #fcf6e9;\n  --fish-paper-2: #f5ebd8;\n  --fish-paper-glow: #ffffffd9;\n  --fish-fade-mid: rgba(252, 246, 233, .55);\n  --fish-paper-border: #e4d5bb;\n  --fish-dot: rgba(58, 73, 112, .1);\n  --fish-stitch: rgba(80, 94, 128, .28);\n  --fish-card-bg: #fffdf8;\n  --fish-surface: #fffdf8;\n  --fish-soft: #f5ecdb;\n  --fish-hover: #eddfc8;\n  --fish-line: #eadfcb;\n  --fish-border: #dfd0b6;\n  --fish-control-border: #c2b097;\n  --fish-control-shadow: inset 0 1px 0 #ffffffc7, 0 1px 2px rgba(43, 58, 96, .06);\n  --fish-focus-ring: rgba(91, 121, 196, .16);\n  --fish-select-arrow: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9'%3E%3Cpath d='m1 1 6 6 6-6' fill='none' stroke='%23806a43' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  --fish-ink: #1b2a4e;\n  --fish-text: var(--fish-ink);\n  --fish-muted: #59627d;\n  --fish-accent: #5b79c4;\n  --fish-action: #22345c;\n  --fish-on-accent: #fff8ea;\n  --fish-accent-soft: #e6ecfb;\n  --fish-blue: #6f8bd4;\n  --fish-blue-soft: #e6ecfb;\n  --fish-blue-strong: #3f5798;\n  --fish-gold: #c69a4a;\n  --fish-gold-soft: #f6e7c3;\n  --fish-pink: #cf7e93;\n  --fish-pink-soft: #fbe7ec;\n  --fish-mint: #4d9b86;\n  --fish-mint-soft: #e2f2ec;\n  --fish-navy: #16223d;\n  --fish-navy-2: #22345c;\n  --fish-link: #38549a;\n  --fish-success: #2f7d63;\n  --fish-warning: #9a641c;\n  --fish-danger: #b0475c;\n  --fish-info: #3f5d9f;\n  --fish-rim: #ffffffd9;\n  --fish-edge: #d7c7aa;\n  --fish-bottom: #efe2cc;\n  --fish-panel: linear-gradient(180deg, #fffdf8, #fffaf1);\n  --fish-shell-fill: #16223d;\n  --fish-control-fill: linear-gradient(180deg, #fffdf9, #f7eedf);\n  --fish-inset: inset 0 1px 2px rgba(43, 58, 96, .07);\n  --fish-small-shadow: inset 0 1px 0 #ffffffcc, 0 1px 2px rgba(43, 58, 96, .08);\n  --fish-shadow: inset 0 1px 0 #ffffffbf, 0 2px 0 rgba(43, 58, 96, .05), 0 14px 28px rgba(43, 58, 96, .07);\n  --fish-control-border-strong: #8f7a5d;\n  --fish-pink-decor: #d794a5;\n  --fish-decor: #8ba0d6;\n  --fish-foam: #fffdf8;\n  --fish-workspace: #fcf6e9;\n  --fish-wave: #c9d7f5;\n  --fish-wave-back: #dfe8fb;\n  --fish-switch-off: #b9aa91;\n  --fish-switch-on: #3f5798;\n  --fish-tape-warm: #e9d8b3;\n  --fish-tape-blue: #c9d9f6;\n  --fish-tape-rose: #f2d7de;\n  --fish-app-glow-1: #fffaf0;\n  --fish-app-glow-2: #ead9bb;\n  --fish-tag-bg: #ffffff8c;\n  --fish-stamp-bg: radial-gradient(circle at 50% 25%, #fffdf7, #f6e8ca);\n  --fish-stamp-ink: #7d5a1e;\n  --fish-gold-ink: #7d5a1e;\n  --fish-rose-ink: #9a5267;\n  --fish-mint-ink: #397463;\n  --fish-symbol-3-bg: radial-gradient(circle at 40% 30%, #fff, #f6dbe3);\n  --fish-symbol-4-bg: radial-gradient(circle at 40% 30%, #fff, #dcefe8);\n  --fish-hero-bg: radial-gradient(120% 130% at 86% 0%, #34507f 0%, #203356 46%, #152442 100%);\n  --fish-hero-text: #f8f1e2;\n  --fish-hero-lead: #dfe5f3;\n  --fish-hero-gold: #f3d697;\n  --fish-chip-bg: rgba(255, 255, 255, .07);\n  --fish-feature-1: linear-gradient(145deg, #eef3ff 0%, #fffdf8 62%);\n  --fish-feature-2: linear-gradient(145deg, #fff6e5 0%, #fffdf8 62%);\n  --fish-feature-3: linear-gradient(145deg, #fbe9ee 0%, #fffdf8 62%);\n  --fish-feature-4: linear-gradient(145deg, #e6f3ee 0%, #fffdf8 62%);\n  --fish-update-bg: linear-gradient(145deg, #eef3ff 0%, #fffdf8 62%);\n  --fish-portrait-glow: rgba(255, 255, 255, .55);\n\n  --dsw-alias-bg-base: var(--fish-bg);\n  --dsw-alias-bg-layer-1: var(--fish-surface);\n  --dsw-alias-bg-layer-2: var(--fish-soft);\n  --dsw-alias-label-primary: var(--fish-text);\n  --dsw-alias-label-secondary: var(--fish-muted);\n  --dsw-alias-label-tertiary: var(--fish-muted);\n  --dsw-alias-border-l1: var(--fish-line);\n  --dsw-alias-border-l2: var(--fish-border);\n  --dsw-alias-state-business-primary: var(--fish-action);\n  --dsw-alias-interactive-bg-hover: var(--fish-hover);\n\n  color-scheme: light;\n  color: var(--fish-text);\n  font: var(--fish-body)/1.7 var(--fish-font);\n  font-weight: 400;\n}\n\nbody[data-ds-dark-theme] .big-fish,\nbody[data-ds-dark-theme] .big-fish-notice {\n  --fish-cream: #0c1424;\n  --fish-bg: #0c1424;\n  --fish-paper-bg: #111a2d;\n  --fish-paper-2: #17213a;\n  --fish-paper-glow: #5a78b414;\n  --fish-fade-mid: rgba(17, 26, 45, .55);\n  --fish-paper-border: #2d3850;\n  --fish-dot: rgba(220, 230, 255, .055);\n  --fish-stitch: rgba(210, 222, 255, .18);\n  --fish-card-bg: #19233a;\n  --fish-surface: #182238;\n  --fish-soft: #202a42;\n  --fish-hover: #2a3752;\n  --fish-line: #2b3550;\n  --fish-border: #37435e;\n  --fish-control-border: #4d5a75;\n  --fish-ink: #f1ead9;\n  --fish-text: var(--fish-ink);\n  --fish-muted: #b8b5aa;\n  --fish-accent: #a9bef0;\n  --fish-action: #e4c98d;\n  --fish-on-accent: #182238;\n  --fish-accent-soft: #2a3b5e;\n  --fish-blue: #9db4ee;\n  --fish-blue-soft: #25344f;\n  --fish-blue-strong: #b9cbf4;\n  --fish-gold: #e4c98d;\n  --fish-gold-soft: #3a3221;\n  --fish-pink: #f0a9bd;\n  --fish-pink-soft: #3a2833;\n  --fish-mint: #8bcdb8;\n  --fish-mint-soft: #223a35;\n  --fish-navy: #0c1526;\n  --fish-navy-2: #17233a;\n  --fish-link: #e7cf9d;\n  --fish-success: #8acbb6;\n  --fish-warning: #ecc38b;\n  --fish-danger: #ffabb9;\n  --fish-info: #a9bdf0;\n  --fish-rim: #ffffff1a;\n  --fish-edge: #070d19;\n  --fish-bottom: #0d1627;\n  --fish-panel: linear-gradient(180deg, #1c2740, #182136);\n  --fish-shell-fill: #0c1526;\n  --fish-control-fill: linear-gradient(180deg, #26324b, #1b263c);\n  --fish-inset: inset 0 1px 2px rgba(0, 0, 0, .4);\n  --fish-small-shadow: inset 0 1px 0 #ffffff0f, 0 1px 2px rgba(0, 0, 0, .3);\n  --fish-shadow: inset 0 1px 0 #ffffff0d, 0 2px 0 #00000033, 0 14px 28px #0000004d;\n  --fish-control-border-strong: #78849f;\n  --fish-control-shadow: inset 0 1px 0 #ffffff0d, 0 1px 2px rgba(0, 0, 0, .3);\n  --fish-focus-ring: rgba(185, 203, 244, .18);\n  --fish-select-arrow: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9'%3E%3Cpath d='m1 1 6 6 6-6' fill='none' stroke='%23d8c39a' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");\n  --fish-pink-decor: #e7a1b4;\n  --fish-decor: #6d84bf;\n  --fish-foam: #dbe5ff;\n  --fish-workspace: #111a2d;\n  --fish-wave: #22365a;\n  --fish-wave-back: #1a2a48;\n  --fish-switch-off: #4b556c;\n  --fish-switch-on: #7f9cdd;\n  --fish-tape-warm: #574a36;\n  --fish-tape-blue: #3c4d6d;\n  --fish-tape-rose: #513b46;\n  --fish-app-glow-1: #17263f;\n  --fish-app-glow-2: #1a2c4a;\n  --fish-tag-bg: #ffffff0d;\n  --fish-stamp-bg: radial-gradient(circle at 50% 25%, #23324e, #1a2438);\n  --fish-stamp-ink: #e4c98d;\n  --fish-gold-ink: #f0d49a;\n  --fish-rose-ink: #f2b6c6;\n  --fish-mint-ink: #9ed9c8;\n  --fish-symbol-3-bg: radial-gradient(circle at 40% 30%, #2b2433, #3a2833);\n  --fish-symbol-4-bg: radial-gradient(circle at 40% 30%, #1e302d, #223a35);\n  --fish-hero-bg: radial-gradient(120% 130% at 86% 0%, #1b2c4b 0%, #101b31 50%, #0a1120 100%);\n  --fish-hero-text: #fbf4e6;\n  --fish-hero-lead: #c9d0e0;\n  --fish-hero-gold: #edcf92;\n  --fish-chip-bg: rgba(255, 255, 255, .06);\n  --fish-feature-1: linear-gradient(145deg, #1c2b49 0%, #141d30 62%);\n  --fish-feature-2: linear-gradient(145deg, #292418 0%, #141d30 62%);\n  --fish-feature-3: linear-gradient(145deg, #2b1f2a 0%, #141d30 62%);\n  --fish-feature-4: linear-gradient(145deg, #1a2c28 0%, #141d30 62%);\n  --fish-update-bg: linear-gradient(145deg, #1c2b49 0%, #141d30 62%);\n  --fish-portrait-glow: rgba(120, 150, 210, .18);\n  color-scheme: dark;\n}\n\n@font-face {\n  font-family: 'HarmonyOS Sans SC';\n  src: local('HarmonyOS Sans SC'), local('HarmonyOS Sans SC Regular'), local('HarmonyOS_Sans_SC_Regular');\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'HarmonyOS Sans SC';\n  src: local('HarmonyOS Sans SC Medium'), local('HarmonyOS_Sans_SC_Medium');\n  font-weight: 500 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'HarmonyOS Sans SC';\n  src: local('HarmonyOS Sans SC Bold'), local('HarmonyOS_Sans_SC_Bold');\n  font-weight: 700 900;\n  font-style: normal;\n  font-display: swap;\n}\n\n.big-fish {\n  box-sizing: border-box;\n  container-type: inline-size;\n  width: 100%;\n  height: 100%;\n  min-width: 0;\n  overflow: hidden;\n  padding: calc(12px + var(--dsh-frame-top-clearance, 0px)) 12px 12px;\n  background:\n    radial-gradient(80% 60% at 12% 0%, var(--fish-app-glow-1) 0%, transparent 64%),\n    radial-gradient(70% 50% at 100% 100%, var(--fish-app-glow-2) 0%, transparent 60%),\n    var(--fish-bg);\n}\n\n.big-fish *,\n.big-fish-notice * {\n  box-sizing: border-box;\n}\n\n.big-fish [hidden]:not([hidden=\"until-found\"]) {\n  display: none !important;\n}\n\n.big-fish .fish-logo-img {\n  display: block;\n  object-fit: contain;\n}\n\n.big-fish .fish-glyph {\n  display: block;\n  flex: none;\n}\n\n.big-fish .fish-frame {\n  position: relative;\n  display: grid;\n  grid-template-columns: 236px minmax(0, 1fr);\n  gap: 18px;\n  height: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\n/* ── 装订侧栏 ─────────────────────────────────────────────── */\n\n.big-fish .fish-binder {\n  position: relative;\n  isolation: isolate;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  min-height: 0;\n  padding: 22px 14px 16px;\n  border-radius: 30px;\n  color: #f7eeda;\n  background:\n    radial-gradient(90% 60% at 100% 0%, rgba(121, 153, 219, .28), transparent 64%),\n    radial-gradient(70% 46% at 0% 100%, rgba(214, 174, 100, .16), transparent 66%),\n    linear-gradient(160deg, #1b2a4a 0%, #111c34 58%, #0c1628 100%);\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, .16),\n    0 3px 0 rgba(8, 16, 32, .24),\n    0 22px 46px rgba(9, 19, 40, .28);\n}\n\n.big-fish .fish-binder::before {\n  content: '';\n  position: absolute;\n  inset: 9px;\n  z-index: 3;\n  border: 1px dashed rgba(246, 231, 197, .22);\n  border-radius: 23px;\n  pointer-events: none;\n}\n\n.big-fish .fish-rings {\n  position: absolute;\n  z-index: 4;\n  top: 92px;\n  bottom: 92px;\n  right: -10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  pointer-events: none;\n}\n\n.big-fish .fish-rings span {\n  width: 20px;\n  height: 12px;\n  border-radius: 99px;\n  background: linear-gradient(180deg, #f8e8bd, #c39743);\n  box-shadow: inset 0 1px 0 #fff9e7, 0 2px 4px rgba(8, 16, 34, .45);\n}\n\n.big-fish .fish-brand {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 2px 6px 16px;\n  border-bottom: 1px dashed rgba(246, 231, 197, .24);\n}\n\n.big-fish .fish-logo {\n  display: grid;\n  place-items: center;\n  flex: none;\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background: transparent;\n  box-shadow: none;\n  transform: none;\n}\n\n.big-fish .fish-logo .fish-logo-img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  filter: drop-shadow(0 5px 10px rgba(5, 12, 26, .32));\n}\n\n.big-fish .fish-brand-text {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n\n.big-fish .fish-brand-name {\n  font: 800 22px/1.2 var(--fish-title);\n  letter-spacing: .06em;\n  color: #fff9ec;\n  white-space: nowrap;\n}\n\n.big-fish .fish-brand-sub {\n  margin-top: 2px;\n  color: #c4cee5;\n  font-size: 10.5px;\n  letter-spacing: .16em;\n  white-space: nowrap;\n}\n\n.big-fish .fish-version-pin {\n  flex: none;\n  padding: 3px 7px;\n  border: 1px solid rgba(246, 231, 197, .24);\n  border-radius: 99px;\n  background: rgba(255, 255, 255, .06);\n  color: #ecdaac;\n  font-size: 10px;\n  line-height: 1.4;\n}\n\n.big-fish .fish-nav {\n  position: relative;\n  isolation: isolate;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  gap: 5px;\n  min-height: 0;\n  overflow: auto;\n  overflow-x: hidden;\n  padding: 2px;\n  scrollbar-width: thin;\n}\n\n.big-fish .fish-nav-group {\n  min-width: 0;\n}\n\n.big-fish .fish-nav button {\n  box-shadow: none;\n  transform: none;\n}\n\n.big-fish .fish-tab {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  min-height: 44px;\n  padding: 9px 11px;\n  border: 0;\n  border-radius: 14px;\n  background: transparent;\n  color: #d5ddef;\n  font: 600 14px/1.4 var(--fish-font);\n  text-align: left;\n  letter-spacing: .01em;\n  transition: color var(--fish-motion), background-color var(--fish-motion);\n}\n\n.big-fish .fish-tab-icon {\n  display: grid;\n  place-items: center;\n  flex: none;\n  width: 28px;\n  height: 28px;\n  border-radius: 10px;\n  color: #aebfe6;\n  background: rgba(255, 255, 255, .055);\n  transition: color var(--fish-motion), background-color var(--fish-motion);\n}\n\n.big-fish .fish-tab-label {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.big-fish .fish-tab-no {\n  flex: none;\n  color: rgba(233, 224, 199, .48);\n  font: 600 9.5px/1 var(--fish-font);\n  letter-spacing: .12em;\n}\n\n.big-fish .fish-tab[aria-selected=true] {\n  color: #1b2a4e;\n}\n\n.big-fish .fish-tab[aria-selected=true] .fish-tab-icon {\n  color: #3d579b;\n  background: rgba(61, 87, 155, .1);\n}\n\n.big-fish .fish-tab[aria-selected=true] .fish-tab-no {\n  color: #9a7a3d;\n}\n\n.big-fish .fish-nav-highlight {\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 2px;\n  right: 2px;\n  height: 44px;\n  border-radius: 14px;\n  background: linear-gradient(135deg, #fff8e9, #f3e4c4);\n  box-shadow: 0 2px 0 rgba(8, 16, 34, .25), 0 8px 18px rgba(6, 14, 30, .24);\n  pointer-events: none;\n  transition: transform .32s cubic-bezier(.22, 1, .36, 1), height .25s;\n}\n\n.big-fish .fish-tab:hover {\n  color: #fff9ec;\n  background: rgba(255, 255, 255, .06);\n}\n\n.big-fish .fish-tab[aria-selected=true]:hover {\n  color: #1b2a4e;\n  background: transparent;\n}\n\n.big-fish .fish-submenu {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin: 4px 0 8px 34px;\n  padding: 4px 0 4px 12px;\n  border-left: 1px dashed rgba(246, 231, 197, .28);\n}\n\n.big-fish .fish-submenu button {\n  display: block;\n  width: 100%;\n  min-height: 34px;\n  padding: 6px 10px;\n  border: 0;\n  border-radius: 10px;\n  background: transparent;\n  color: #c2cce2;\n  font: 500 13px/1.4 var(--fish-font);\n  text-align: left;\n  white-space: nowrap;\n  box-shadow: none;\n}\n\n.big-fish .fish-submenu button[aria-current=page] {\n  color: #ffe6ac;\n  background: rgba(246, 231, 197, .12);\n  box-shadow: inset 2px 0 0 #e7c478;\n  font-weight: 700;\n}\n\n.big-fish .fish-submenu button:hover {\n  color: #fff9ec;\n  background: rgba(255, 255, 255, .07);\n}\n\n.big-fish .fish-submenu button[aria-current=page]:hover {\n  color: #ffe6ac;\n  background: rgba(246, 231, 197, .16);\n}\n\n.big-fish .fish-binder-foot {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex: none;\n  flex-direction: column;\n  gap: 10px;\n  padding-top: 12px;\n  border-top: 1px dashed rgba(246, 231, 197, .22);\n}\n\n.big-fish .fish-sidebar-scene {\n  position: relative;\n  display: grid;\n  place-items: center;\n  margin: 0;\n  padding: 2px 0;\n}\n\n.big-fish .fish-sidebar-scene::before {\n  content: '';\n  position: absolute;\n  width: 146px;\n  height: 146px;\n  border-radius: 50%;\n  background: radial-gradient(circle, var(--fish-portrait-glow), transparent 72%);\n  transform: none;\n}\n\n.big-fish .fish-sidebar-scene img {\n  position: relative;\n  display: block;\n  width: 132px;\n  height: 132px;\n  padding: 0;\n  border-radius: 0;\n  background: transparent;\n  object-fit: contain;\n  transform: rotate(-3deg);\n  filter: drop-shadow(0 9px 12px rgba(4, 10, 24, .42));\n  box-shadow: none;\n}\n\n.big-fish .fish-sidebar-note {\n  display: flex;\n  align-items: flex-start;\n  gap: 7px;\n  margin: 0;\n  padding: 8px 10px;\n  border: 1px solid rgba(255, 255, 255, .09);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, .05);\n  color: #ced7e8;\n  font-size: 11.5px;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n\n.big-fish .fish-connection-dot {\n  flex: none;\n  width: 7px;\n  height: 7px;\n  margin-top: 5px;\n  border-radius: 99px;\n  background: #e7b96d;\n  box-shadow: 0 0 0 3px rgba(231, 185, 109, .16);\n}\n\n.big-fish .fish-connection-dot[data-connected=true] {\n  background: #7fd2b5;\n  box-shadow: 0 0 0 3px rgba(127, 210, 181, .16);\n}\n\n/* ── 手帐纸面 ─────────────────────────────────────────────── */\n\n.big-fish .fish-workspace {\n  position: relative;\n  min-width: 0;\n  min-height: 0;\n  height: 100%;\n}\n\n.big-fish .fish-paper {\n  --fish-paper-radius: 30px;\n  --fish-scroll-inset: 12px;\n  --fish-scroll-radius: 18px;\n  --fish-fade-height: 28px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  min-height: 0;\n  overflow: visible;\n  border: 1px solid var(--fish-paper-border);\n  border-radius: var(--fish-paper-radius);\n  background-color: var(--fish-paper-bg);\n  background-image:\n    radial-gradient(90% 44% at 50% 0%, var(--fish-paper-glow), transparent 70%),\n    radial-gradient(var(--fish-dot) 1px, transparent 1px);\n  background-size: auto, 20px 20px;\n  box-shadow:\n    inset 0 1px 0 var(--fish-rim),\n    0 2px 0 rgba(43, 58, 96, .05),\n    0 20px 50px rgba(42, 54, 92, .1);\n}\n\n.big-fish .fish-scroll {\n  position: relative;\n  z-index: 1;\n  flex: 1 1 auto;\n  min-height: 0;\n  margin: var(--fish-scroll-inset);\n  padding: 24px 34px 34px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  scrollbar-gutter: stable;\n  border-radius: var(--fish-scroll-radius);\n  clip-path: inset(0 round var(--fish-scroll-radius));\n  scrollbar-color: var(--fish-control-border) transparent;\n}\n\n.big-fish .fish-fade {\n  position: absolute;\n  z-index: 2;\n  right: calc(var(--fish-scroll-inset) + 11px);\n  left: var(--fish-scroll-inset);\n  height: var(--fish-fade-height);\n  opacity: .9;\n  pointer-events: none;\n}\n\n.big-fish .fish-fade-top {\n  top: 0;\n  background: linear-gradient(180deg, var(--fish-paper-bg) 0%, var(--fish-fade-mid) 42%, transparent 100%);\n}\n\n.big-fish .fish-fade-bottom {\n  bottom: 0;\n  background: linear-gradient(0deg, var(--fish-paper-bg) 0%, var(--fish-fade-mid) 42%, transparent 100%);\n}\n\n.big-fish .fish-paper::before {\n  content: '';\n  position: absolute;\n  z-index: 3;\n  inset: 11px;\n  border: 1px dashed var(--fish-stitch);\n  border-radius: 22px;\n  opacity: .55;\n  pointer-events: none;\n}\n\n.big-fish .fish-content {\n  position: relative;\n  z-index: 1;\n  max-width: 1180px;\n  margin: 0 auto;\n}\n\n.big-fish .fish-tape {\n  position: absolute;\n  z-index: 4;\n  width: 86px;\n  height: 24px;\n  background-color: var(--fish-tape-warm);\n  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, .4) 0 6px, transparent 6px 12px);\n  opacity: .92;\n  clip-path: polygon(2% 0, 100% 4%, 98% 100%, 0 94%);\n  box-shadow: 0 1px 2px rgba(40, 50, 80, .14);\n  pointer-events: none;\n}\n\n.big-fish .fish-tape-corner {\n  top: -11px;\n}\n\n.big-fish .fish-tape-left {\n  left: 72px;\n  transform: rotate(-6deg);\n}\n\n.big-fish .fish-tape-right {\n  right: 96px;\n  background-color: var(--fish-tape-blue);\n  transform: rotate(5deg);\n}\n\n.big-fish .fish-kicker {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--fish-blue-strong);\n  font: 700 10.5px/1.6 var(--fish-font);\n  letter-spacing: .18em;\n  text-transform: uppercase;\n}\n\n.big-fish .fish-kicker-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 99px;\n  background: var(--fish-gold);\n  box-shadow: 0 0 0 4px rgba(198, 154, 74, .15);\n}\n\n.big-fish .fish-kicker-light {\n  color: #f3d697;\n}\n\n.big-fish .fish-muted {\n  color: var(--fish-muted);\n  font-size: var(--fish-small);\n}\n\n.big-fish h1 {\n  margin: 0;\n  font: 800 clamp(28px, 3cqi, 38px)/1.25 var(--fish-title);\n  letter-spacing: -.01em;\n}\n\n.big-fish h2 {\n  margin: 0 0 8px;\n  font: 800 20px/1.35 var(--fish-title);\n  letter-spacing: -.005em;\n}\n\n.big-fish h3 {\n  margin: 0 0 8px;\n  font-size: 16px;\n  line-height: 1.7;\n}\n\n.big-fish p {\n  margin: 8px 0;\n  max-width: 70ch;\n  overflow-wrap: anywhere;\n}\n\n.big-fish .fish-page-head {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 28px;\n  margin: 0 0 28px;\n  padding: 0 0 24px;\n  border-bottom: 1px dashed var(--fish-stitch);\n}\n\n.big-fish .fish-page-head-copy {\n  min-width: 0;\n}\n\n.big-fish .fish-page-head h1 {\n  margin: 6px 0 8px;\n}\n\n.big-fish .fish-page-desc {\n  margin: 0;\n  max-width: 62ch;\n  color: var(--fish-muted);\n  font-size: 14.5px;\n  line-height: 1.75;\n}\n\n.big-fish .fish-page-stamp {\n  position: relative;\n  display: flex;\n  flex: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1px;\n  width: 96px;\n  height: 96px;\n  border: 2px solid rgba(198, 154, 74, .55);\n  border-radius: 50%;\n  background: var(--fish-stamp-bg);\n  color: var(--fish-stamp-ink);\n  box-shadow: 0 3px 0 rgba(198, 154, 74, .16);\n  transform: rotate(-7deg);\n}\n\n.big-fish .fish-page-stamp::after {\n  content: '';\n  position: absolute;\n  inset: 5px;\n  border: 1px dashed currentColor;\n  border-radius: 50%;\n  opacity: .42;\n}\n\n.big-fish .fish-page-stamp .fish-glyph {\n  color: var(--fish-blue-strong);\n}\n\n.big-fish .fish-page-stamp-no {\n  color: var(--fish-blue-strong);\n  font: 800 17px/1 var(--fish-title);\n  letter-spacing: .08em;\n}\n\n.big-fish .fish-page-stamp-label {\n  font: 600 10px/1.4 var(--fish-font);\n  letter-spacing: .12em;\n}\n\n/* ── 总览 · 深海封面 ──────────────────────────────────────── */\n\n.big-fish .fish-overview {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n.big-fish .fish-hero {\n  position: relative;\n  isolation: isolate;\n  display: grid;\n  grid-template-columns: minmax(0, 1.12fr) minmax(238px, .88fr);\n  align-items: center;\n  gap: clamp(18px, 3cqi, 40px);\n  min-height: 396px;\n  padding: clamp(28px, 4cqi, 50px) clamp(24px, 4cqi, 52px) 92px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, .12);\n  border-radius: 30px;\n  background: var(--fish-hero-bg);\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, .16),\n    0 24px 48px rgba(18, 29, 57, .28);\n  color: var(--fish-hero-text);\n}\n\n.big-fish .fish-hero::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: radial-gradient(70% 80% at 4% 100%, rgba(94, 130, 206, .25), transparent 60%);\n  pointer-events: none;\n}\n\n.big-fish .fish-hero-copy {\n  position: relative;\n  z-index: 2;\n  min-width: 0;\n}\n\n.big-fish .fish-hero h1 {\n  margin: 14px 0 16px;\n  color: #fff8ea;\n  font: 800 clamp(30px, 4.2cqi, 52px)/1.28 var(--fish-title);\n  letter-spacing: -.02em;\n  text-wrap: balance;\n}\n\n.big-fish .fish-mark {\n  position: relative;\n  display: inline-block;\n  z-index: 1;\n  color: #ffdf9d;\n}\n\n.big-fish .fish-mark::after {\n  content: '';\n  position: absolute;\n  z-index: -1;\n  right: -4px;\n  bottom: 1px;\n  left: -4px;\n  height: .32em;\n  border-radius: 99px;\n  background: rgba(255, 208, 126, .2);\n}\n\n.big-fish .fish-hero-lead {\n  max-width: 46ch;\n  margin: 0;\n  color: var(--fish-hero-lead);\n  font-size: 15.5px;\n  line-height: 1.85;\n}\n\n.big-fish .fish-hero-quote {\n  max-width: 38ch;\n  margin: 20px 0 0;\n  padding-left: 14px;\n  border-left: 2px dashed rgba(243, 214, 151, .55);\n  color: var(--fish-hero-gold);\n  font: 500 15px/1.7 'Kaiti SC', STKaiti, KaiTi, serif;\n  letter-spacing: .04em;\n}\n\n.big-fish .fish-hero-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 24px;\n}\n\n.big-fish .fish-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 6px 11px;\n  border: 1px solid rgba(255, 255, 255, .16);\n  border-radius: 99px;\n  background: var(--fish-chip-bg);\n  color: #e8edf8;\n  font-size: 11.5px;\n  line-height: 1.4;\n  letter-spacing: .02em;\n}\n\n.big-fish .fish-chip-status {\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: var(--fish-hero-lead);\n  font-weight: 600;\n}\n\n.big-fish .fish-chip b {\n  color: var(--fish-hero-gold);\n  font-weight: 700;\n}\n\n.big-fish .fish-chip-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 99px;\n  background: #e7b96d;\n}\n\n.big-fish .fish-chip[data-ok] .fish-chip-dot {\n  background: #84d8bb;\n}\n\n.big-fish .fish-welcome {\n  position: relative;\n  z-index: 2;\n  justify-self: center;\n  width: clamp(220px, 24cqi, 320px);\n  margin: 0;\n  padding: 12px 12px 10px;\n  border-radius: 20px;\n  background: #fffdf8;\n  box-shadow: 0 18px 34px rgba(6, 14, 31, .35);\n  transform: rotate(2.5deg);\n  pointer-events: none;\n  animation: fish-float 7s ease-in-out infinite;\n}\n\n.big-fish .fish-welcome img {\n  display: block;\n  width: 100%;\n  height: auto;\n  border-radius: 12px;\n  background: #fff;\n}\n\n.big-fish .fish-welcome figcaption {\n  padding-top: 8px;\n  color: #4d5878;\n  font: 600 12.5px/1.5 'Kaiti SC', STKaiti, KaiTi, serif;\n  text-align: center;\n  letter-spacing: .02em;\n}\n\n.big-fish .fish-welcome-tape {\n  top: -12px;\n  left: 50%;\n  width: 94px;\n  transform: translateX(-50%) rotate(-3deg);\n}\n\n.big-fish .fish-hero-wave {\n  position: absolute;\n  z-index: 0;\n  right: 0;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  height: 118px;\n  pointer-events: none;\n}\n\n.big-fish .fish-wave-back {\n  fill: rgba(106, 140, 205, .34);\n  transform-box: fill-box;\n  transform-origin: center bottom;\n  animation: fish-wave-breathe 12s ease-in-out infinite;\n}\n\n.big-fish .fish-wave-front {\n  fill: rgba(145, 177, 232, .22);\n  transform-box: fill-box;\n  transform-origin: center bottom;\n  animation: fish-wave-breathe 9s ease-in-out -2.2s infinite;\n}\n\n.big-fish .fish-wave-foam {\n  fill: none;\n  stroke: rgba(255, 246, 224, .45);\n  stroke-width: 2;\n  transform-box: fill-box;\n  transform-origin: center;\n  animation: fish-foam-drift 8s ease-in-out infinite;\n}\n\n@keyframes fish-wave-breathe {\n  0%, 100% { transform: translateX(-1px) scale(1, 1); }\n  50% { transform: translateX(1px) scale(1.01, 1.03); }\n}\n\n@keyframes fish-foam-drift {\n  0%, 100% { transform: translateX(-3px) scaleX(1.008); }\n  50% { transform: translateX(3px) scaleX(1.008); }\n}\n\n.big-fish .fish-bubbles {\n  position: absolute;\n  stroke: rgba(240, 230, 204, .28);\n  stroke-width: 2;\n  pointer-events: none;\n}\n\n.big-fish .fish-hero-bubbles {\n  z-index: 1;\n  right: 7%;\n  bottom: 8px;\n  width: 174px;\n  height: 174px;\n  opacity: .82;\n}\n\n.big-fish .fish-hero-bubbles circle,\n.big-fish .fish-hero-bubbles path {\n  transform-box: fill-box;\n  transform-origin: center;\n  animation: fish-bubble-float 6.5s ease-in-out infinite;\n}\n\n.big-fish .fish-hero-bubbles circle:nth-of-type(2) {\n  animation-delay: -2.1s;\n  animation-duration: 7.5s;\n}\n\n.big-fish .fish-hero-bubbles circle:nth-of-type(3) {\n  animation-delay: -4.2s;\n  animation-duration: 5.8s;\n}\n\n.big-fish .fish-hero-bubbles circle:nth-of-type(4) {\n  animation-delay: -1.2s;\n  animation-duration: 8.2s;\n}\n\n.big-fish .fish-hero-bubbles circle:nth-of-type(5) {\n  animation-delay: -3.6s;\n  animation-duration: 6.8s;\n}\n\n.big-fish .fish-hero-bubbles path {\n  animation-delay: -2.8s;\n  animation-duration: 9s;\n}\n\n@keyframes fish-bubble-float {\n  0%, 100% { transform: translateY(2px); opacity: .55; }\n  50% { transform: translateY(-5px); opacity: .95; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .big-fish .fish-wave-back,\n  .big-fish .fish-wave-front,\n  .big-fish .fish-wave-foam,\n  .big-fish .fish-hero-bubbles circle,\n  .big-fish .fish-hero-bubbles path {\n    animation: none;\n  }\n}\n\n.big-fish .fish-sparkle {\n  fill: currentColor;\n  stroke: none;\n  color: var(--fish-hero-gold);\n  pointer-events: none;\n}\n\n.big-fish .fish-hero-spark {\n  position: absolute;\n  z-index: 1;\n  top: 26px;\n  right: 32%;\n  width: 38px;\n  height: 38px;\n  opacity: .76;\n}\n\n/* ── 总览 · 状态与分区 ────────────────────────────────────── */\n\n.big-fish .fish-board {\n  display: block;\n}\n\n.big-fish .fish-section-head {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n\n.big-fish .fish-section-head h2 {\n  margin: 5px 0 0;\n  font: 800 clamp(22px, 2.2cqi, 27px)/1.3 var(--fish-title);\n}\n\n.big-fish .fish-section-note {\n  max-width: 34ch;\n  color: var(--fish-muted);\n  font-size: 12px;\n  line-height: 1.6;\n  text-align: right;\n}\n\n.big-fish .fish-stats {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.big-fish .fish-stat {\n  display: grid;\n  grid-template-columns: 44px minmax(0, 1fr);\n  align-items: start;\n  gap: 12px;\n  padding: 18px;\n  border-radius: 20px;\n  background: var(--fish-card-bg);\n  border: 1px solid var(--fish-border);\n  box-shadow: var(--fish-small-shadow);\n}\n\n.big-fish .fish-stat-icon {\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  border: 1px solid rgba(79, 109, 187, .18);\n  border-radius: 14px;\n  background: var(--fish-blue-soft);\n  color: var(--fish-blue-strong);\n}\n\n.big-fish .fish-stat[data-tone=gold] .fish-stat-icon {\n  border-color: rgba(198, 154, 74, .26);\n  background: var(--fish-gold-soft);\n  color: var(--fish-gold-ink);\n}\n\n.big-fish .fish-stat[data-tone=rose] .fish-stat-icon {\n  border-color: rgba(207, 126, 147, .28);\n  background: var(--fish-pink-soft);\n  color: var(--fish-rose-ink);\n}\n\n.big-fish .fish-stat[data-tone=mint] .fish-stat-icon {\n  border-color: rgba(77, 155, 134, .26);\n  background: var(--fish-mint-soft);\n  color: var(--fish-mint-ink);\n}\n\n.big-fish .fish-stat-copy {\n  min-width: 0;\n}\n\n.big-fish .fish-stat-label {\n  display: block;\n  color: var(--fish-muted);\n  font-size: 12px;\n  letter-spacing: .04em;\n}\n\n.big-fish .fish-value {\n  margin: 2px 0 4px;\n  color: var(--fish-text);\n  font: 800 clamp(20px, 2.2cqi, 26px)/1.3 var(--fish-title);\n  letter-spacing: -.01em;\n}\n\n.big-fish .fish-stat-hint {\n  display: block;\n  color: var(--fish-muted);\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.big-fish .fish-chapters {\n  margin-top: 2px;\n}\n\n.big-fish .fish-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px;\n}\n\n@container (min-width: 1320px) {\n  .big-fish .fish-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .big-fish .fish-feature {\n    grid-template-columns: minmax(0, 1fr) 150px;\n    padding: 24px;\n  }\n\n\n  .big-fish .fish-feature h2 {\n    font-size: 22px;\n  }\n\n  .big-fish .fish-feature p {\n    font-size: 13px;\n  }\n}\n\n.big-fish .fish-feature {\n  position: relative;\n  isolation: isolate;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 172px;\n  align-items: center;\n  gap: 18px;\n  min-width: 0;\n  padding: 26px 26px;\n  overflow: hidden;\n  border: 1px solid var(--fish-border);\n  border-radius: 26px;\n  background: var(--fish-feature-1);\n  box-shadow: 0 2px 0 rgba(49, 62, 98, .06), 0 14px 30px rgba(50, 64, 105, .07);\n  transform: rotate(-.35deg);\n  transition: transform .32s cubic-bezier(.22, 1, .36, 1), box-shadow .32s;\n}\n\n.big-fish .fish-feature:nth-child(2) {\n  background: var(--fish-feature-2);\n  transform: rotate(.4deg);\n}\n\n.big-fish .fish-feature:nth-child(3) {\n  background: var(--fish-feature-3);\n  transform: rotate(.3deg);\n}\n\n.big-fish .fish-feature:nth-child(4) {\n  background: var(--fish-feature-4);\n  transform: rotate(-.4deg);\n}\n\n.big-fish .fish-feature:hover {\n  box-shadow: 0 20px 40px rgba(50, 64, 105, .12);\n  transform: rotate(0) translateY(-3px);\n}\n\n.big-fish .fish-feature::before {\n  content: attr(data-index);\n  position: absolute;\n  z-index: -1;\n  right: 14px;\n  bottom: -22px;\n  color: rgba(54, 75, 122, .06);\n  font: 800 92px/1 var(--fish-title);\n  pointer-events: none;\n}\n\n.big-fish .fish-feature-copy {\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n}\n\n.big-fish .fish-feature-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 4px 10px;\n  border: 1px dashed rgba(138, 100, 36, .4);\n  border-radius: 99px;\n  background: var(--fish-tag-bg);\n  color: var(--fish-stamp-ink);\n  font-size: 11px;\n  letter-spacing: .08em;\n}\n\n.big-fish .fish-feature-tag b {\n  color: var(--fish-blue-strong);\n  font: 800 11px/1 var(--fish-title);\n}\n\n.big-fish .fish-feature h2 {\n  margin: 10px 0 8px;\n  font: 800 24px/1.3 var(--fish-title);\n}\n\n.big-fish .fish-feature p {\n  margin: 0;\n  max-width: 40ch;\n  color: var(--fish-muted);\n  font-size: 13.5px;\n  line-height: 1.75;\n}\n\n.big-fish .fish-feature .fish-actions {\n  margin-top: 16px;\n}\n\n.big-fish .fish-feature-sticker {\n  position: relative;\n  justify-self: center;\n  align-self: end;\n  width: clamp(120px, 14cqi, 168px);\n  margin: 0;\n  padding: 8px 8px 6px;\n  border-radius: 16px;\n  background: #fffdf8;\n  box-shadow: 0 12px 24px rgba(37, 51, 88, .15);\n  transform: rotate(-4deg);\n  pointer-events: none;\n}\n\n.big-fish .fish-feature:nth-child(2) .fish-feature-sticker {\n  transform: rotate(4deg);\n}\n\n.big-fish .fish-feature-sticker img {\n  display: block;\n  width: 100%;\n  height: auto;\n  border-radius: 10px;\n}\n\n.big-fish .fish-feature-tape {\n  top: -10px;\n  left: 50%;\n  width: 64px;\n  height: 19px;\n  background-color: var(--fish-tape-rose);\n  transform: translateX(-50%) rotate(2deg);\n}\n\n.big-fish .fish-feature-light {\n  grid-template-columns: minmax(0, 1fr) auto;\n}\n\n.big-fish .fish-feature-sticker-small {\n  align-self: center;\n  width: clamp(96px, 12cqi, 152px);\n  transform: rotate(-4deg);\n}\n\n.big-fish .fish-feature:nth-child(4) .fish-feature-sticker-small {\n  transform: rotate(4deg);\n}\n\n/* ── 通用控件 ─────────────────────────────────────────────── */\n\n.big-fish button,\n.big-fish input,\n.big-fish select,\n.big-fish textarea,\n.big-fish-notice button {\n  max-width: 100%;\n  font-family: var(--fish-font);\n  font-size: var(--fish-label);\n  line-height: 1.6;\n}\n\n.big-fish button,\n.big-fish-notice button {\n  min-height: 38px;\n  cursor: pointer;\n  letter-spacing: .02em;\n  transition: box-shadow var(--fish-motion), transform var(--fish-motion), background-color var(--fish-motion), color var(--fish-motion);\n}\n\n.big-fish .fish-button,\n.big-fish-notice button {\n  padding: 9px 16px;\n  border: 1px solid var(--fish-border);\n  border-radius: 12px;\n  background: var(--fish-control-fill);\n  color: var(--fish-text);\n  font-weight: 600;\n  box-shadow: 0 2px 0 var(--fish-edge);\n}\n\n.big-fish .fish-button:not(:disabled):hover,\n.big-fish-notice button:not(:disabled):hover {\n  transform: translateY(-1px);\n  box-shadow: 0 3px 0 var(--fish-edge), 0 8px 16px rgba(43, 58, 96, .12);\n}\n\n.big-fish .fish-button:not(:disabled):active,\n.big-fish-notice button:not(:disabled):active {\n  transform: translateY(1px);\n  box-shadow: var(--fish-inset);\n}\n\n.big-fish .fish-button.fish-danger {\n  border-color: var(--fish-danger);\n  background: var(--fish-danger);\n  color: #fffdf8;\n  box-shadow: 0 2px 0 rgba(90, 24, 40, .28);\n}\n\nbody[data-ds-dark-theme] .big-fish .fish-button.fish-danger {\n  color: #2a1420;\n}\n\n.big-fish .fish-primary {\n  border-color: var(--fish-action);\n  background: var(--fish-action);\n  color: var(--fish-on-accent);\n}\n\n.big-fish .fish-primary:not(:disabled):hover {\n  background: var(--fish-blue-strong);\n  border-color: var(--fish-blue-strong);\n  color: #fff8ea;\n}\n\n.big-fish .fish-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 11px;\n  border: 1px dashed var(--fish-border);\n  border-radius: 99px;\n  background: var(--fish-soft);\n  color: var(--fish-blue-strong);\n  font-size: 11.5px;\n  line-height: 1.6;\n  white-space: nowrap;\n}\n\n.big-fish .fish-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 14px;\n}\n\n.big-fish .fish-card {\n  min-width: 0;\n  padding: 20px;\n  border: 1px solid var(--fish-border);\n  border-radius: 22px;\n  background: var(--fish-panel);\n  box-shadow: var(--fish-shadow);\n}\n\n.big-fish input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]):not([type=color]):not([type=button]):not([type=submit]):not([type=reset]),\n.big-fish select,\n.big-fish textarea {\n  appearance: none !important;\n  -webkit-appearance: none !important;\n  min-width: 0;\n  min-height: 42px;\n  padding: 10px 14px !important;\n  border: 1px solid var(--fish-control-border) !important;\n  border-radius: 12px !important;\n  background-color: var(--fish-surface) !important;\n  background-image: none !important;\n  color: var(--fish-text) !important;\n  box-shadow: var(--fish-control-shadow) !important;\n  font-family: var(--fish-font) !important;\n  font-size: var(--fish-label) !important;\n  line-height: 1.5 !important;\n  transition: border-color var(--fish-motion), box-shadow var(--fish-motion), background-color var(--fish-motion) !important;\n}\n\n.big-fish select {\n  padding-right: 38px !important;\n  background-image: var(--fish-select-arrow) !important;\n  background-repeat: no-repeat !important;\n  background-position: right 13px center !important;\n  background-size: 13px 9px !important;\n  cursor: pointer;\n}\n\n.big-fish textarea {\n  min-height: 112px;\n  padding: 12px 14px !important;\n}\n\n.big-fish select option {\n  background: var(--fish-surface);\n  color: var(--fish-text);\n}\n\n.big-fish input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]):not([type=color]):not([type=button]):not([type=submit]):not([type=reset]):not(:disabled):hover,\n.big-fish select:not(:disabled):hover,\n.big-fish textarea:not(:disabled):hover {\n  border-color: var(--fish-control-border-strong) !important;\n}\n\n.big-fish input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]):not([type=color]):not([type=button]):not([type=submit]):not([type=reset]):focus,\n.big-fish select:focus,\n.big-fish textarea:focus {\n  border-color: var(--fish-blue-strong) !important;\n  outline: none !important;\n  box-shadow: 0 0 0 3px var(--fish-focus-ring), var(--fish-control-shadow) !important;\n}\n\n.big-fish input[type=number]::-webkit-inner-spin-button,\n.big-fish input[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.big-fish input[type=number] {\n  appearance: textfield !important;\n  -moz-appearance: textfield !important;\n}\n\n.big-fish input[type=file] {\n  min-height: 42px;\n  padding: 7px 10px;\n  border: 1px solid var(--fish-control-border);\n  border-radius: 12px;\n  background-color: var(--fish-surface);\n  color: var(--fish-text);\n  box-shadow: var(--fish-control-shadow);\n  font-family: var(--fish-font);\n  font-size: var(--fish-label);\n}\n\n.big-fish input[type=file]::file-selector-button {\n  margin-right: 10px;\n  padding: 7px 12px;\n  border: 1px solid var(--fish-border);\n  border-radius: 9px;\n  background: var(--fish-control-fill);\n  color: var(--fish-text);\n  font-family: var(--fish-font);\n  font-size: var(--fish-small);\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.big-fish input::placeholder,\n.big-fish textarea::placeholder {\n  color: var(--fish-muted);\n  opacity: .62;\n}\n\n.big-fish .fish-input-box,\n.big-fish .fish-select-box {\n  position: relative;\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n.big-fish .fish-input-box .fish-input,\n.big-fish .fish-select-box .fish-select-input {\n  width: 100%;\n}\n\n.big-fish .fish-input-icon {\n  position: absolute;\n  top: 50%;\n  left: 12px;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  color: var(--fish-muted);\n  pointer-events: none;\n  transform: translateY(-50%);\n}\n\n.big-fish .fish-input-with-icon {\n  padding-left: 40px !important;\n}\n\n.big-fish input[type=checkbox],\n.big-fish input[type=radio] {\n  flex: none;\n  width: 18px;\n  height: 18px;\n  accent-color: var(--fish-action);\n  vertical-align: middle;\n}\n\n.big-fish input[type=range],\n.big-fish progress {\n  max-width: 100%;\n  accent-color: var(--fish-action);\n}\n\n.big-fish textarea {\n  resize: vertical;\n  overflow-wrap: anywhere;\n}\n\n.big-fish :disabled,\n.big-fish-notice :disabled {\n  cursor: not-allowed;\n  opacity: .54;\n}\n\n.big-fish :is(button, a, input, select, textarea, summary, [tabindex]):focus-visible,\n.big-fish-notice button:focus-visible {\n  outline: 2px solid var(--fish-gold);\n  outline-offset: 3px;\n}\n\n.big-fish a {\n  color: var(--fish-link);\n  text-decoration: none;\n  overflow-wrap: anywhere;\n}\n\n.big-fish a:hover {\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n\n.big-fish summary {\n  min-height: 40px;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n/* 原生 checkbox 开关保留键盘与回弹手感。 */\n.big-fish input[role=switch],\n.big-fish button[role=switch] {\n  position: relative;\n  display: inline-block;\n  flex: 0 0 46px;\n  width: 46px !important;\n  min-width: 46px !important;\n  max-width: 46px;\n  height: 26px !important;\n  min-height: 26px !important;\n  margin: 6px 0;\n  padding: 0 !important;\n  border: 0 !important;\n  border-radius: 999px !important;\n  appearance: none;\n  -webkit-appearance: none;\n  background: var(--fish-switch-off) !important;\n  box-shadow: inset 0 1px 2px rgba(20, 30, 55, .18) !important;\n  color: transparent !important;\n  font-size: 0 !important;\n  vertical-align: middle;\n  transform: none !important;\n}\n\n.big-fish [role=switch]::before {\n  content: '';\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #fffdf6;\n  box-shadow: 0 1px 3px #0003;\n  transition: transform .42s cubic-bezier(.34, 1.56, .64, 1), width .18s, border-radius .18s;\n}\n\n.big-fish input[role=switch]:checked,\n.big-fish button[role=switch][aria-checked=true] {\n  background: var(--fish-switch-on) !important;\n}\n\n.big-fish input[role=switch]:checked::before,\n.big-fish button[role=switch][aria-checked=true]::before {\n  transform: translateX(20px);\n}\n\n.big-fish [role=switch]:not(:disabled):active::before {\n  width: 24px;\n  border-radius: 12px;\n}\n\n.big-fish input[role=switch]:checked:active::before,\n.big-fish button[role=switch][aria-checked=true]:active::before {\n  transform: translateX(16px);\n}\n\n/* ── 更新与来源 ───────────────────────────────────────────── */\n\n.big-fish .fish-updates {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.big-fish .fish-updates {\n  gap: 18px;\n}\n\n.big-fish .fish-update-card {\n  position: relative;\n  isolation: isolate;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(220px, 300px);\n  align-items: center;\n  gap: 30px;\n  min-height: 300px;\n  padding: 32px 34px;\n  overflow: hidden;\n  background: var(--fish-update-bg);\n}\n\n.big-fish .fish-update-card::after {\n  content: 'EVOLVE';\n  position: absolute;\n  right: 12px;\n  bottom: -28px;\n  z-index: 0;\n  color: var(--fish-ink);\n  font: 800 clamp(72px, 9cqi, 118px)/1 var(--fish-title);\n  letter-spacing: .04em;\n  opacity: .045;\n  pointer-events: none;\n}\n\n.big-fish .fish-update-body {\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n}\n\n.big-fish .fish-update-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px 20px;\n}\n\n.big-fish .fish-update-body h2 {\n  margin: 6px 0 10px;\n  font: 800 clamp(30px, 3.4cqi, 40px)/1.15 var(--fish-title);\n  letter-spacing: -.01em;\n}\n\n.big-fish .fish-update-desc {\n  max-width: 560px;\n  margin: 0;\n}\n\n.big-fish .fish-update-controls {\n  display: flex;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  gap: 16px 20px;\n  margin-top: 26px;\n  padding-top: 20px;\n  border-top: 1px dashed var(--fish-line);\n}\n\n.big-fish .fish-channel-field {\n  display: flex;\n  flex: 0 1 310px;\n  flex-direction: column;\n  gap: 7px;\n  min-width: 250px;\n  max-width: 100%;\n}\n\n.big-fish .fish-channel-field > span {\n  color: var(--fish-text);\n  font-size: 12.5px;\n  font-weight: 600;\n}\n\n.big-fish .fish-channel-field .fish-select-box {\n  width: 100%;\n}\n\n.big-fish .fish-channel-field .fish-select-input {\n  width: 100%;\n  min-width: 250px;\n}\n\n.big-fish .fish-update-operations {\n  display: flex;\n  flex: 1 1 440px;\n  align-items: center;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 10px 12px;\n}\n\n.big-fish .fish-update-status {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin: 6px 0 0;\n  padding: 8px 13px;\n  border: 1px solid var(--fish-line);\n  border-radius: 999px;\n  background: var(--fish-soft);\n  color: var(--fish-text);\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n\n.big-fish .fish-update-dot {\n  width: 7px;\n  height: 7px;\n  flex: none;\n  border-radius: 99px;\n  background: var(--fish-gold);\n  box-shadow: 0 0 0 3px rgba(198, 154, 74, .16);\n}\n\n.big-fish .fish-update-operations .fish-actions {\n  margin: 0;\n  gap: 10px;\n}\n\n.big-fish .fish-update-operations .fish-button {\n  min-height: 44px;\n  padding: 11px 20px;\n  border-radius: 13px;\n}\n\n.big-fish .fish-update-note {\n  max-width: 620px;\n  margin: 12px 0 0;\n  font-size: var(--fish-small);\n}\n\n.big-fish .fish-update-art {\n  position: relative;\n  z-index: 1;\n  justify-self: center;\n  width: min(100%, 280px);\n  margin: 0;\n  padding: 10px 10px 8px;\n  border-radius: 20px;\n  background: var(--fish-card-bg);\n  box-shadow: 0 20px 42px rgba(37, 51, 88, .16), 0 2px 0 rgba(49, 62, 98, .06);\n  transform: rotate(3deg);\n  transition: transform .35s cubic-bezier(.22, 1, .36, 1), box-shadow .35s;\n}\n\n.big-fish .fish-update-art::before {\n  content: '';\n  position: absolute;\n  inset: -32px;\n  z-index: -1;\n  border-radius: 50%;\n  background: radial-gradient(circle at 50% 45%, rgba(198, 154, 74, .18), transparent 68%);\n  pointer-events: none;\n}\n\n.big-fish .fish-update-art img {\n  display: block;\n  width: 100%;\n  height: auto;\n  border-radius: 13px;\n}\n\n.big-fish .fish-update-art:hover {\n  transform: rotate(1deg) translateY(-3px);\n  box-shadow: 0 26px 50px rgba(37, 51, 88, .2), 0 2px 0 rgba(49, 62, 98, .06);\n}\n\n.big-fish .fish-update-tape {\n  top: -12px;\n  left: 50%;\n  width: 82px;\n  height: 21px;\n  background-color: var(--fish-tape-warm);\n  transform: translateX(-50%) rotate(-2deg);\n}\n\n.big-fish .fish-sources {\n  padding: 24px 28px 26px;\n}\n\n.big-fish .fish-sources-head {\n  align-items: flex-start;\n  gap: 20px;\n}\n\n.big-fish .fish-sources h2 {\n  margin: 4px 0 0;\n  font-size: 23px;\n}\n\n.big-fish .fish-source-link {\n  margin: 7px 0 0;\n  font-size: 12.5px;\n}\n\n.big-fish .fish-sources .fish-table-wrap {\n  margin-top: 16px;\n}\n\n.big-fish .fish-source-name {\n  font-weight: 700;\n  color: var(--fish-text);\n}\n\n.big-fish .fish-table-wrap {\n  overflow-x: auto;\n  border: 1px solid var(--fish-border);\n  border-radius: 18px;\n  background: var(--fish-card-bg);\n}\n\n.big-fish .fish-table {\n  width: 100%;\n  min-width: 760px;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n\n.big-fish .fish-table th {\n  padding: 13px 16px;\n  background: var(--fish-navy);\n  color: #f6ecd6;\n  font-weight: 600;\n  text-align: left;\n  white-space: nowrap;\n}\n\n.big-fish .fish-table td {\n  padding: 14px 16px;\n  border-bottom: 1px dashed var(--fish-line);\n  vertical-align: top;\n}\n\n.big-fish .fish-table tbody tr:last-child td {\n  border-bottom: 0;\n}\n\n.big-fish .fish-table tbody tr:nth-child(even) {\n  background: rgba(198, 154, 74, .05);\n}\n\n\n/* ── QQ 绑定表格 ─────────────────────────────────────────── */\n\n.big-fish .qq-binding-groups {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.big-fish .qq-bind-group-head {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n\n.big-fish .qq-bind-group-head h3 {\n  margin: 0;\n  font: 800 18px/1.4 var(--fish-title);\n  white-space: nowrap;\n}\n\n.big-fish .qq-bind-group-head .fish-muted {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n\n.big-fish .qq-bind-group-head .fish-button {\n  flex: none;\n}\n\n.big-fish .qq-bind-scroll {\n  overflow-x: auto;\n  padding-bottom: 4px;\n}\n\n.big-fish .qq-bind-table {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.big-fish .qq-bind-row {\n  display: grid;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 0;\n  border-bottom: 1px dashed var(--fish-line);\n  white-space: nowrap;\n}\n\n.big-fish .qq-bind-row:last-child {\n  border-bottom: 0;\n}\n\n.big-fish .qq-bind-row-private {\n  grid-template-columns: 90px 100px minmax(160px, 1fr) 120px 52px;\n}\n\n.big-fish .qq-bind-row-group {\n  grid-template-columns: 90px 100px minmax(160px, 1fr) 76px 76px 120px 52px;\n}\n\n.big-fish .qq-bind-row.qq-bind-head {\n  padding: 4px 0 8px;\n  color: var(--fish-muted);\n  font-size: 12px;\n  border-bottom: 1px solid var(--fish-border);\n}\n\n.big-fish .qq-bind-row.qq-bind-head > :nth-last-child(2),\n.big-fish .qq-bind-row.qq-bind-head > :last-child {\n  display: flex;\n  justify-content: flex-start;\n  text-align: left;\n}\n\n.big-fish .qq-bind-row.qq-bind-head > *,\n.big-fish .qq-bind-row:not(.qq-bind-head) > * {\n  text-align: left;\n}\n\n.big-fish .qq-bind-table.qq-bind-hide-enable .qq-bind-row-private {\n  grid-template-columns: 90px 100px minmax(160px, 1fr) 120px;\n}\n\n.big-fish .qq-bind-table.qq-bind-hide-enable .qq-bind-row-group {\n  grid-template-columns: 90px 100px minmax(160px, 1fr) 76px 76px 120px;\n}\n\n.big-fish .qq-bind-table.qq-bind-hide-enable .qq-bind-row > :last-child {\n  display: none;\n}\n\n.big-fish .qq-bind-row input {\n  width: 100%;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.big-fish .qq-bind-session {\n  min-width: 0;\n}\n\n.big-fish .qq-bind-session select {\n  width: 100%;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.big-fish .qq-bind-cell {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  min-width: 0;\n}\n\n.big-fish .qq-bind-read {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--fish-text);\n  font-size: 13.5px;\n  line-height: 1.6;\n}\n\n.big-fish .qq-bind-session-read {\n  color: var(--fish-muted);\n}\n\n.big-fish .qq-bind-actions {\n  justify-content: flex-start;\n  gap: 6px;\n  flex-wrap: nowrap;\n}\n\n.big-fish .qq-bind-actions .fish-button {\n  min-width: 0;\n}\n\n.big-fish .qq-bind-editing {\n  padding-inline: 8px;\n  border-radius: 12px;\n  background: var(--fish-soft);\n}\n\n.big-fish .qq-bind-save {\n  min-width: 64px;\n}\n\n.big-fish .qq-bind-row .fish-button {\n  min-height: 32px;\n  padding: 5px 10px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.big-fish .qq-bind-detail {\n  display: grid;\n  gap: 6px;\n  margin: 0 0 10px;\n  padding: 12px 14px;\n  border: 1px dashed var(--fish-border);\n  border-radius: 14px;\n  background: var(--fish-soft);\n}\n\n.big-fish .qq-bind-detail-head {\n  font: 700 14px/1.4 var(--fish-title);\n  color: var(--fish-text);\n}\n\n.big-fish .qq-bind-extra {\n  display: block;\n  margin-top: 4px;\n}\n\n.big-fish .qq-bind-extra-label {\n  display: block;\n  margin-bottom: 4px;\n  color: var(--fish-muted);\n  font-size: 12.5px;\n}\n\n\n.big-fish .qq-role-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 14px;\n}\n\n.big-fish .qq-role-head h2 {\n  margin: 0;\n}\n\n.big-fish .qq-role-toggle {\n  display: flex;\n  align-items: center;\n  margin-top: 2px;\n}\n\n.big-fish .qq-role-desc {\n  margin: 0;\n  color: var(--fish-muted);\n  font-size: var(--fish-small);\n  line-height: 1.8;\n}\n\n.big-fish .qq-role-hint {\n  margin: 8px 0 0;\n  color: var(--fish-muted);\n  font-size: var(--fish-small);\n  line-height: 1.8;\n}\n\n.big-fish .qq-role-writer-open {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 44px;\n}\n\n.big-fish .qq-role-card h3 {\n  margin: 0 0 4px;\n}\n\n.big-fish .qq-role-table-wrap {\n  margin-top: 10px;\n  overflow-x: auto;\n}\n\n.big-fish .qq-role-table {\n  width: 100%;\n  min-width: 680px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.big-fish .qq-role-table th {\n  padding: 4px 8px 8px;\n  color: var(--fish-muted);\n  font-size: var(--fish-small);\n  font-weight: 500;\n  text-align: left;\n  white-space: nowrap;\n  border-bottom: 1px solid var(--fish-border);\n}\n\n.big-fish .qq-role-table td {\n  padding: 10px 8px;\n  border-bottom: 1px dashed var(--fish-line);\n  color: var(--fish-text);\n  font-size: 13.5px;\n  vertical-align: middle;\n  text-align: left;\n}\n\n.big-fish .qq-role-table tbody tr:last-child td {\n  border-bottom: 0;\n}\n\n.big-fish .qq-role-number {\n  width: 110px;\n  white-space: nowrap;\n}\n\n.big-fish .qq-role-session {\n  width: 170px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--fish-muted);\n}\n\n.big-fish .qq-role-text-cell {\n  min-width: 0;\n}\n\n.big-fish .qq-role-text {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.big-fish .qq-role-inherit {\n  color: var(--fish-muted);\n  font-size: 13px;\n}\n\n.big-fish .qq-role-col-icon {\n  width: 58px;\n  text-align: center !important;\n}\n\n.big-fish .qq-role-icon {\n  display: inline-grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  min-height: 30px;\n  padding: 0;\n  border: 1px solid transparent;\n  border-radius: 9px;\n  background: transparent;\n  color: var(--fish-blue-strong);\n  box-shadow: none;\n  cursor: pointer;\n}\n\n.big-fish .qq-role-icon:hover:not(:disabled) {\n  border-color: var(--fish-border);\n  background: var(--fish-blue-soft);\n}\n\n.big-fish .qq-role-icon-danger {\n  color: var(--fish-danger);\n}\n\n.big-fish .qq-role-icon:disabled {\n  opacity: .35;\n  cursor: not-allowed;\n}\n\n.big-fish .qq-text-modal {\n  width: min(760px, 100%);\n  max-height: calc(100vh - 40px);\n  overflow: auto;\n}\n\n.big-fish .qq-text-modal-input {\n  display: block;\n  width: 100%;\n  min-height: 220px;\n  margin-top: 14px;\n  padding: 12px;\n  border: 1px solid var(--fish-control-border);\n  border-radius: var(--fish-radius-sm);\n  background: var(--fish-surface);\n  color: var(--fish-text);\n  font: inherit;\n  line-height: 1.75;\n  box-sizing: border-box;\n  resize: vertical;\n}\n\n.big-fish .qq-role-writer-card {\n  width: min(680px, 100%);\n  max-height: calc(100vh - 40px);\n  overflow: auto;\n}\n\n.big-fish .qq-role-writer-input {\n  display: block;\n  width: 100%;\n  min-height: 96px;\n  margin-top: 14px;\n  padding: 12px;\n  border: 1px solid var(--fish-control-border);\n  border-radius: var(--fish-radius-sm);\n  background: var(--fish-surface);\n  color: var(--fish-text);\n  font: inherit;\n  line-height: 1.75;\n  box-sizing: border-box;\n  resize: vertical;\n}\n\n.big-fish .qq-role-writer-result {\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px dashed var(--fish-border);\n}\n\n.big-fish .qq-role-writer-result-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.big-fish .qq-role-writer-result-text {\n  max-height: 260px;\n  margin: 8px 0 0;\n  padding: 10px 12px;\n  overflow: auto;\n  border: 1px solid var(--fish-border);\n  border-radius: 12px;\n  background: var(--fish-soft);\n  color: var(--fish-text);\n  font: inherit;\n  font-size: 13.5px;\n  line-height: 1.8;\n  white-space: pre-wrap;\n}\n\n.big-fish .qq-bind-reminder {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 16px;\n  border: 1px dashed var(--fish-border);\n  border-radius: 16px;\n  background: var(--fish-soft);\n  color: var(--fish-text);\n  font-size: 13px;\n  line-height: 1.7;\n}\n\n.big-fish .qq-bind-reminder-icon {\n  display: grid;\n  flex: none;\n  place-items: center;\n  width: 20px;\n  height: 20px;\n  margin-top: 1px;\n  border-radius: 50%;\n  background: var(--fish-gold-soft);\n  color: var(--fish-blue-strong);\n  font: 800 12px/1 var(--fish-font);\n}\n\n.big-fish .qq-bind-add-disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n\n.big-fish .qq-bind-add-disabled:hover {\n  transform: none;\n  box-shadow: 0 2px 0 var(--fish-edge);\n}\n\n.big-fish .qq-bind-mark {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  color: var(--fish-danger);\n  font: 800 17px/1 var(--fish-font);\n}\n\n.big-fish .qq-bind-mark[data-on=\"true\"] {\n  color: var(--fish-success);\n}\n\n.big-fish .qq-bind-note {\n  margin-top: 8px;\n  color: var(--fish-muted);\n  font-size: 12.5px;\n  line-height: 1.7;\n}\n\n.big-fish .qq-bind-tools {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 12px 16px;\n  border: 1px dashed var(--fish-border);\n  border-radius: 14px;\n  background: var(--fish-soft);\n}\n\n.big-fish .qq-bind-empty {\n  padding: 14px 0;\n  color: var(--fish-muted);\n  font-size: 13px;\n}\n\n/* ── 未保存确认 ───────────────────────────────────────────── */\n\n.big-fish .fish-modal {\n  position: absolute;\n  inset: 0;\n  z-index: 50;\n  display: grid;\n  place-items: center;\n  padding: 20px;\n  background: rgba(8, 16, 32, .55);\n  backdrop-filter: blur(3px);\n}\n\n.big-fish .fish-modal-card {\n  width: min(460px, 100%);\n  padding: 28px;\n  border: 1px solid var(--fish-border);\n  border-radius: 24px;\n  background: var(--fish-panel);\n  box-shadow: inset 0 1px 0 var(--fish-rim), 0 24px 54px rgba(7, 15, 32, .35);\n}\n\n.big-fish .fish-modal-card h2 {\n  margin: 8px 0 6px;\n  font: 800 24px/1.35 var(--fish-title);\n}\n\n.big-fish .fish-modal-desc {\n  margin: 0;\n  color: var(--fish-muted);\n  font-size: 13.5px;\n  line-height: 1.8;\n}\n\n.big-fish .fish-modal-error {\n  margin: 12px 0 0;\n  padding: 8px 10px;\n  border-radius: 10px;\n  background: var(--fish-pink-soft);\n  color: var(--fish-danger);\n  font-size: 12.5px;\n}\n\n.big-fish .fish-modal-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 20px;\n}\n\n.big-fish .fish-modal-actions .fish-button {\n  flex: 1 1 auto;\n}\n\n.big-fish .fish-modal-cancel {\n  border-color: transparent;\n  background: transparent;\n  color: var(--fish-muted);\n  box-shadow: none;\n}\n\n/* ── 模块内页 ─────────────────────────────────────────────── */\n\n.big-fish .fish-module {\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n\n.big-fish .fish-speak > .fish-section-title:first-child {\n  display: none;\n}\n\n.big-fish .fish-section-title {\n  font: 800 21px/1.5 var(--fish-title);\n}\n\n.big-fish .fish-settings-stack {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 16px;\n}\n\n.big-fish .fish-form-row {\n  align-items: flex-start;\n  gap: 12px 24px;\n  padding: 14px 0;\n  margin-bottom: 0 !important;\n  border-bottom: 1px dashed var(--fish-line);\n}\n\n.big-fish .fish-form-row:last-child {\n  border-bottom: 0;\n}\n\n.big-fish .fish-form-label {\n  flex: 0 1 190px;\n  padding-top: 8px;\n  color: var(--fish-text);\n  font-weight: 600;\n}\n\n.big-fish .fish-control {\n  flex: 1 1 300px;\n  min-width: 0;\n}\n\n.big-fish .fish-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin: 0 0 20px;\n  padding: 12px 16px;\n  border: 1px dashed var(--fish-border);\n  border-radius: 16px;\n  background: var(--fish-paper-2);\n}\n\n.big-fish .fish-subnav,\n.big-fish .fish-qq .fish-subnav {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  overflow: visible;\n  margin: 0 0 20px;\n  padding: 0 0 14px;\n  border-bottom: 1px dashed var(--fish-line);\n}\n\n.big-fish .fish-subnav button {\n  flex: none;\n  padding: 6px 12px;\n  border-radius: 99px;\n  white-space: normal;\n}\n\n.big-fish .fish-message {\n  margin: 12px 0;\n  overflow-wrap: anywhere;\n  white-space: pre-wrap;\n}\n\n.big-fish .fish-message:not(:empty) {\n  padding: 10px 14px;\n  border: 1px dashed rgba(154, 100, 28, .35);\n  border-radius: 12px;\n  background: var(--fish-gold-soft);\n  color: var(--fish-warning);\n  font-size: 12.5px;\n}\n\n.big-fish .fish-test-action {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding: 12px 16px;\n  border: 1px dashed var(--fish-border);\n  border-radius: 14px;\n  background: var(--fish-soft);\n}\n\n.big-fish .fish-rule-section {\n  margin-top: 24px;\n  padding-top: 22px;\n  border-top: 1px dashed var(--fish-line);\n}\n\n.big-fish .fish-log {\n  overflow-wrap: anywhere;\n  white-space: pre-wrap;\n}\n\n.big-fish .fish-diagnostics {\n  margin-top: 24px;\n  padding-top: 16px;\n  border-top: 1px dashed var(--fish-line);\n  color: var(--fish-muted);\n  font-size: 12.5px;\n  overflow-wrap: anywhere;\n}\n\n.big-fish .fish-diagnostics summary {\n  color: var(--fish-text);\n}\n\n.big-fish .fish-binding-row {\n  display: grid;\n  grid-template-columns: 80px minmax(100px, 1fr) minmax(120px, 1.5fr) 44px 76px 60px;\n  gap: 8px;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px dashed var(--fish-line);\n}\n\n.big-fish .fish-schedule-row {\n  display: grid;\n  grid-template-columns: 120px 140px minmax(60px, 1fr) 60px;\n  gap: 8px;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px dashed var(--fish-line);\n}\n\n.big-fish .fish-feed-result {\n  max-height: 480px;\n  margin-top: 20px;\n  padding: 18px;\n  overflow: auto;\n  border: 1px dashed var(--fish-border);\n  border-radius: 14px;\n  background: var(--fish-paper-2);\n  color: var(--fish-text);\n  font: 13px/1.8 ui-monospace, Consolas, monospace;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n\n.big-fish .fish-embedding {\n  padding: 22px 0;\n  border-block: 1px dashed var(--fish-border);\n}\n\n.big-fish .fish-embedding label {\n  display: grid !important;\n  grid-template-columns: minmax(180px, 1fr) minmax(100px, 2fr);\n  gap: 12px;\n  align-items: center;\n  margin: 12px 0;\n}\n\n.big-fish .fish-embedding label:has([role=switch]) {\n  display: flex !important;\n}\n\n.big-fish .fish-embedding input:not([role=switch]) {\n  width: 100% !important;\n}\n\n.big-fish .fish-embedding button {\n  margin: 4px 8px 4px 0;\n  padding: 8px 12px;\n  border: 1px solid var(--fish-border);\n  border-radius: 10px;\n  background: var(--fish-soft);\n  color: var(--fish-text);\n}\n\n.big-fish .fish-dimensions {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px 32px;\n}\n\n.big-fish .fish-dimension-label {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 4px;\n  font-size: 13px;\n}\n\n.big-fish .fish-dimension-track {\n  height: 9px;\n  overflow: hidden;\n  border-radius: 99px;\n  background: var(--fish-line);\n}\n\n.big-fish .fish-dimension-track span {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, var(--fish-blue), var(--fish-gold));\n}\n\n.big-fish .fish-library-row {\n  margin: 12px 0;\n  padding: 20px;\n  border: 1px solid var(--fish-border);\n  border-radius: 18px;\n  background: var(--fish-card-bg);\n  box-shadow: var(--fish-shadow);\n}\n\n.big-fish .fish-memory .fish-record {\n  padding: 16px 0;\n  border-bottom: 1px dashed var(--fish-line);\n}\n\n.big-fish .fish-memory .fish-record:last-child {\n  border-bottom: 0;\n}\n\n.big-fish .fish-memory .fish-record-row {\n  align-items: center;\n  gap: 12px;\n  padding: 8px 0;\n}\n\n.big-fish .fish-memory .fish-record-note {\n  padding: 4px 0;\n  color: var(--fish-muted);\n  font-size: 13px;\n}\n\n.big-fish .fish-memory .fish-link {\n  padding: 4px 0;\n  border: 0;\n  background: transparent;\n  text-align: left;\n  text-decoration: underline;\n  text-underline-offset: 4px;\n}\n\n.big-fish .fish-memory details {\n  padding: 16px 20px;\n  border: 1px solid var(--fish-border);\n  border-radius: 18px;\n  background: var(--fish-card-bg);\n  box-shadow: var(--fish-shadow);\n}\n\n.big-fish .fish-memory [role=button] {\n  cursor: pointer;\n}\n\n.big-fish .fish-memory [role=button]:hover {\n  text-decoration: underline;\n  text-underline-offset: 4px;\n}\n\n.big-fish .fish-memory [role=button][style] {\n  box-shadow: none;\n}\n\n/* 心情页自带的样式也用同一套纸面材质，只补圆角和底色。 */\n.big-fish .fish-panel [data-fm-wrap] {\n  gap: 18px;\n}\n\n.big-fish .fish-panel [data-fm-hero] {\n  border-radius: 22px;\n  background: var(--fish-card-bg);\n  box-shadow: var(--fish-shadow);\n}\n\n.big-fish .fish-panel [data-fm-slot] {\n  border-radius: 18px;\n  background: var(--fish-card-bg);\n}\n\n.big-fish .fish-panel [data-fm-big] {\n  color: var(--fish-text);\n}\n\n.big-fish .fish-panel [data-fm-quote] {\n  border-radius: 14px;\n  background: var(--fish-paper-2);\n}\n\n.big-fish .fish-panel [data-fm-btn],\n.big-fish .fish-panel [data-fm-pick] {\n  border-radius: 10px;\n  background: var(--fish-control-fill);\n  box-shadow: 0 2px 0 var(--fish-edge);\n}\n\n.big-fish .fish-panel [data-fm-on] {\n  background: var(--fish-accent-soft);\n  box-shadow: none;\n}\n\n/* ── 兼容提示条 ───────────────────────────────────────────── */\n\n.big-fish-notice {\n  position: fixed;\n  z-index: 1000;\n  right: 20px;\n  bottom: 24px;\n  max-width: min(400px, calc(100vw - 40px));\n  padding: 18px 20px;\n  border: 1px solid rgba(198, 154, 74, .5);\n  border-radius: 20px;\n  background:\n    radial-gradient(120% 120% at 100% 0%, #2c4570, #16223d);\n  color: #f8f1e2;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .16), 0 20px 44px rgba(6, 13, 28, .4);\n  pointer-events: auto;\n}\n\n.big-fish-notice > div:first-child {\n  font-size: 13.5px;\n  line-height: 1.7;\n}\n\n.big-fish-notice button {\n  border-color: rgba(255, 255, 255, .2);\n  background: rgba(255, 255, 255, .08);\n  color: #f8f1e2;\n  box-shadow: none;\n}\n\n/* ── 适配 ─────────────────────────────────────────────────── */\n\n@container (max-width: 1240px) {\n  .big-fish .fish-frame {\n    grid-template-columns: 220px minmax(0, 1fr);\n  }\n\n  .big-fish .fish-hero h1 {\n    font-size: clamp(28px, 3.8cqi, 44px);\n  }\n\n  .big-fish .fish-welcome {\n    width: clamp(210px, 22cqi, 280px);\n  }\n\n  .big-fish .fish-feature {\n    grid-template-columns: minmax(0, 1fr) 150px;\n  }\n}\n\n@container (max-width: 1180px) {\n  .big-fish .fish-feature {\n    grid-template-columns: minmax(0, 1fr) 138px;\n  }\n\n}\n\n@container (max-width: 1040px) {\n  .big-fish .fish-frame {\n    grid-template-columns: minmax(0, 1fr);\n    grid-template-rows: auto minmax(0, 1fr);\n    height: 100%;\n    min-height: 0;\n    gap: 12px;\n  }\n\n  .big-fish .fish-binder {\n    min-height: 0;\n    padding: 14px 16px;\n    border-radius: 24px;\n    gap: 12px;\n  }\n\n  .big-fish .fish-binder::before {\n    inset: 7px;\n    border-radius: 18px;\n  }\n\n  .big-fish .fish-rings {\n    display: none;\n  }\n\n  .big-fish .fish-brand {\n    padding: 0 2px 10px;\n  }\n\n  .big-fish .fish-logo {\n    width: 38px;\n    height: 38px;\n    border-radius: 13px;\n  }\n\n  .big-fish .fish-brand-name {\n    font-size: 20px;\n  }\n\n  .big-fish .fish-nav {\n    flex: none;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 6px;\n    overflow: visible;\n    padding: 0;\n  }\n\n  .big-fish .fish-nav-group {\n    display: contents;\n  }\n\n  .big-fish .fish-tab {\n    order: 0;\n    width: auto;\n    min-height: 40px;\n    padding: 8px 12px;\n  }\n\n  .big-fish .fish-nav-highlight {\n    display: none;\n  }\n\n  .big-fish .fish-tab[aria-selected=true] {\n    background: linear-gradient(135deg, #fff8e9, #f3e4c4);\n    box-shadow: 0 2px 0 rgba(8, 16, 34, .22);\n  }\n\n  .big-fish .fish-tab[aria-selected=true]:hover {\n    background: linear-gradient(135deg, #fff8e9, #f3e4c4);\n  }\n\n  .big-fish .fish-submenu {\n    order: 1;\n    flex: 1 0 100%;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 4px;\n    margin: 2px 0 0;\n    padding: 0;\n    border-left: 0;\n    overflow-x: auto;\n  }\n\n  .big-fish .fish-submenu button {\n    width: auto;\n    min-height: 30px;\n    padding: 4px 10px;\n    border-radius: 99px;\n    background: rgba(255, 255, 255, .04);\n  }\n\n  .big-fish .fish-binder-foot {\n    display: none;\n  }\n\n  .big-fish .fish-workspace {\n    height: 100%;\n    min-height: 0;\n  }\n\n  .big-fish .fish-stats {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@container (max-width: 900px) {\n  .big-fish .fish-hero {\n    grid-template-columns: minmax(0, 1fr);\n    padding-bottom: 88px;\n  }\n\n  .big-fish .fish-welcome {\n    grid-row: 1;\n    width: min(260px, 56cqi);\n    margin-bottom: 4px;\n  }\n\n  .big-fish .fish-hero-copy {\n    grid-row: 2;\n  }\n\n  .big-fish .fish-hero h1 {\n    font-size: clamp(30px, 5.6cqi, 42px);\n  }\n\n  .big-fish .fish-hero-bubbles {\n    right: 6%;\n    bottom: 12px;\n    width: 140px;\n    height: 140px;\n  }\n\n  .big-fish .fish-hero-spark {\n    top: 14px;\n    right: 10%;\n  }\n\n  .big-fish .fish-stats {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .big-fish .fish-update-card {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 24px;\n    padding: 28px 24px;\n  }\n\n  .big-fish .fish-update-art {\n    order: 2;\n    width: min(210px, 52cqi);\n  }\n\n  .big-fish .fish-update-heading {\n    align-items: flex-start;\n  }\n\n  .big-fish .fish-update-status {\n    white-space: normal;\n  }\n\n  .big-fish .fish-update-controls {\n    align-items: stretch;\n  }\n\n  .big-fish .fish-channel-field {\n    flex-basis: 100%;\n  }\n\n  .big-fish .fish-update-operations {\n    flex-basis: 100%;\n    justify-content: flex-start;\n  }\n}\n\n@container (max-width: 760px) {\n  .big-fish .fish-paper {\n    --fish-paper-radius: 24px;\n    --fish-scroll-inset: 10px;\n    --fish-scroll-radius: 16px;\n    --fish-fade-height: 20px;\n  }\n\n  .big-fish .fish-scroll {\n    padding: 14px 10px 22px;\n  }\n\n  .big-fish .fish-paper::before {\n    inset: 8px;\n    border-radius: 18px;\n  }\n\n  .big-fish .fish-tape {\n    display: none;\n  }\n\n  .big-fish .fish-page-head {\n    align-items: flex-start;\n    gap: 16px;\n    margin-bottom: 22px;\n    padding-bottom: 18px;\n  }\n\n  .big-fish .fish-page-stamp {\n    width: 76px;\n    height: 76px;\n  }\n\n  .big-fish .fish-page-stamp .fish-glyph {\n    width: 24px;\n    height: 24px;\n  }\n\n  .big-fish .fish-page-stamp-no {\n    font-size: 14px;\n  }\n\n  .big-fish .fish-page-stamp-label {\n    font-size: 9px;\n  }\n\n  .big-fish .fish-feature {\n    grid-template-columns: minmax(0, 1fr) 128px;\n    padding: 22px 20px;\n  }\n\n  .big-fish .fish-dimensions {\n    grid-template-columns: 1fr;\n  }\n\n  .big-fish .fish-binding-row,\n  .big-fish .fish-schedule-row {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .big-fish .fish-binding-head {\n    display: none;\n  }\n}\n\n@container (max-width: 620px) {\n  .big-fish .fish-brand-sub,\n  .big-fish .fish-version-pin {\n    display: none;\n  }\n\n  .big-fish .fish-tab {\n    padding: 7px 9px;\n    font-size: 13px;\n  }\n\n  .big-fish .fish-tab-icon {\n    width: 24px;\n    height: 24px;\n    border-radius: 8px;\n  }\n\n  .big-fish .fish-tab-no {\n    display: none;\n  }\n\n  .big-fish .fish-stats {\n    grid-template-columns: 1fr;\n  }\n\n  .big-fish .fish-feature {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n\n  .big-fish .fish-feature-sticker {\n    justify-self: start;\n    width: 118px;\n    margin-left: 2px;\n  }\n\n\n  .big-fish .fish-section-head {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 4px;\n  }\n\n  .big-fish .fish-section-note {\n    text-align: left;\n  }\n\n  .big-fish .fish-form-label {\n    flex-basis: 100%;\n    padding-top: 0;\n  }\n\n  .big-fish .fish-embedding label {\n    grid-template-columns: 1fr;\n  }\n\n  .big-fish .fish-subnav button {\n    flex: 1 1 auto;\n  }\n\n  .big-fish .fish-sources {\n    padding: 20px 16px;\n  }\n\n  .big-fish .fish-update-card {\n    padding: 22px 18px;\n  }\n}\n\n@container (max-width: 520px) {\n  .big-fish {\n    padding: calc(8px + var(--dsh-frame-top-clearance, 0px)) 8px 8px;\n  }\n\n  .big-fish .fish-binder {\n    padding: 12px;\n  }\n\n  .big-fish .fish-brand {\n    gap: 8px;\n  }\n\n  .big-fish .fish-brand-name {\n    font-size: 18px;\n  }\n\n  .big-fish .fish-logo {\n    width: 34px;\n    height: 34px;\n  }\n\n  .big-fish .fish-paper {\n    --fish-paper-radius: 20px;\n    --fish-scroll-inset: 9px;\n    --fish-scroll-radius: 14px;\n    --fish-fade-height: 16px;\n  }\n\n  .big-fish .fish-scroll {\n    padding: 10px 8px 18px;\n  }\n\n  .big-fish .fish-page-head {\n    flex-direction: column;\n    gap: 12px;\n  }\n\n  .big-fish .fish-page-stamp {\n    display: none;\n  }\n\n  .big-fish .fish-hero {\n    min-height: 0;\n    padding: 24px 20px 78px;\n    border-radius: 24px;\n  }\n\n  .big-fish .fish-hero h1 {\n    margin-top: 10px;\n    font-size: clamp(27px, 8.2cqi, 34px);\n  }\n\n  .big-fish .fish-hero-lead {\n    font-size: 14px;\n    line-height: 1.8;\n  }\n\n  .big-fish .fish-hero-quote {\n    margin-top: 16px;\n    font-size: 13.5px;\n  }\n\n  .big-fish .fish-hero-chips {\n    margin-top: 18px;\n    gap: 6px;\n  }\n\n  .big-fish .fish-chip {\n    padding: 5px 9px;\n    font-size: 10.5px;\n  }\n\n  .big-fish .fish-welcome {\n    width: min(214px, 64cqi);\n    padding: 9px 9px 8px;\n  }\n\n  .big-fish .fish-welcome figcaption {\n    font-size: 11px;\n  }\n\n  .big-fish .fish-stat {\n    padding: 15px;\n  }\n\n  .big-fish .fish-feature {\n    padding: 20px 16px;\n    border-radius: 22px;\n  }\n\n  .big-fish .fish-feature h2 {\n    font-size: 22px;\n  }\n\n  .big-fish .fish-feature-sticker {\n    width: 108px;\n  }\n\n\n  .big-fish .fish-table {\n    min-width: 660px;\n  }\n\n  .big-fish .fish-update-body h2 {\n    font-size: 23px;\n  }\n\n  .big-fish .fish-actions {\n    gap: 8px;\n  }\n\n  .big-fish .fish-actions .fish-button {\n    flex: 1 1 auto;\n  }\n}\n\n@media (max-width: 720px) {\n  .big-fish .fish-hero-bubbles {\n    display: none;\n  }\n}\n\n@media (max-height: 760px) {\n  .big-fish .fish-sidebar-scene {\n    display: none;\n  }\n}\n\n@media (max-height: 620px) {\n  .big-fish .fish-binder-foot {\n    display: none;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .big-fish *,\n  .big-fish-notice * {\n    animation: none !important;\n    transition: none !important;\n    scroll-behavior: auto !important;\n  }\n\n  .big-fish button:not(:disabled):hover,\n  .big-fish button:not(:disabled):active,\n  .big-fish-notice button,\n  .big-fish .fish-feature,\n  .big-fish .fish-welcome {\n    transform: none !important;\n  }\n\n  .big-fish .fish-nav-highlight {\n    transition: none !important;\n  }\n\n  .big-fish [role=switch]::before {\n    transition: none !important;\n  }\n}\n\n@keyframes fish-float {\n  0%,\n  100% {\n    transform: translateY(0) rotate(2.5deg);\n  }\n\n  50% {\n    transform: translateY(-7px) rotate(1.5deg);\n  }\n}\n\n/* 主题滚动条：纸面用暖色，侧栏用金色。 */\n.big-fish,\n.big-fish * {\n  scrollbar-width: thin;\n  scrollbar-color: var(--fish-control-border) var(--fish-soft);\n}\n\n.big-fish::-webkit-scrollbar,\n.big-fish *::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n.big-fish::-webkit-scrollbar-track,\n.big-fish *::-webkit-scrollbar-track {\n  background: var(--fish-soft);\n  border-radius: 99px;\n}\n\n.big-fish::-webkit-scrollbar-thumb,\n.big-fish *::-webkit-scrollbar-thumb {\n  border: 2px solid var(--fish-soft);\n  border-radius: 99px;\n  background: var(--fish-control-border);\n}\n\n.big-fish::-webkit-scrollbar-thumb:hover,\n.big-fish *::-webkit-scrollbar-thumb:hover {\n  background: var(--fish-accent);\n}\n\n.big-fish::-webkit-scrollbar-corner,\n.big-fish *::-webkit-scrollbar-corner {\n  background: var(--fish-soft);\n}\n\n.big-fish .fish-scroll::-webkit-scrollbar {\n  width: 9px;\n}\n\n.big-fish .fish-scroll::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.big-fish .fish-scroll::-webkit-scrollbar-thumb {\n  border: 2px solid transparent;\n  background: var(--fish-control-border);\n  background-clip: padding-box;\n}\n\n.big-fish .fish-scroll::-webkit-scrollbar-thumb:hover {\n  background: var(--fish-accent);\n  background-clip: padding-box;\n}\n\n.big-fish .fish-nav::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.big-fish .fish-nav::-webkit-scrollbar-thumb {\n  border: 2px solid transparent;\n  background: rgba(246, 231, 197, .24);\n  background-clip: padding-box;\n}\n\n\n/* 绑定字段说明使用原生悬浮提示，不受横向表格滚动容器裁切。 */\n.big-fish .qq-bind-field-label {display:inline-flex;align-items:center;gap:3px}\n.big-fish .qq-bind-field-label .qq-field-help {\n  display: inline-grid;\n  place-items: center;\n  flex: none;\n  width: 16px;\n  height: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  margin-left: 3px;\n  padding: 0;\n  border: 1px solid var(--fish-border);\n  border-radius: 50%;\n  background: var(--fish-blue-soft);\n  color: var(--fish-blue-strong);\n  font: 700 10px/1 var(--fish-font);\n  box-shadow: none;\n  cursor: help;\n  transform: none;\n}\n\n.big-fish .qq-bind-field-label .qq-field-help:hover,\n.big-fish .qq-bind-field-label .qq-field-help:focus-visible {\n  color: var(--fish-on-accent);\n  border-color: var(--fish-action);\n  background: var(--fish-action);\n}\n\n.big-fish .fish-help-popover {\n  position: fixed;\n  z-index: 45;\n  padding: 12px 14px;\n  border: 1px solid var(--fish-border);\n  border-radius: 14px;\n  background: var(--fish-card-bg);\n  color: var(--fish-text);\n  box-shadow: var(--fish-shadow), 0 12px 26px rgba(30, 42, 74, .16);\n  pointer-events: auto;\n}\n\n.big-fish .fish-help-popover[data-placement=above] {\n  transform: translateY(-100%);\n}\n\n.big-fish .fish-help-popover::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  margin-left: -6px;\n  border: 6px solid transparent;\n}\n\n.big-fish .fish-help-popover[data-placement=below]::after {\n  top: -12px;\n  border-bottom-color: var(--fish-card-bg);\n}\n\n.big-fish .fish-help-popover[data-placement=above]::after {\n  bottom: -12px;\n  border-top-color: var(--fish-card-bg);\n}\n\n.big-fish .fish-help-label {\n  display: block;\n  color: var(--fish-blue-strong);\n  font: 700 10.5px/1.5 var(--fish-font);\n  letter-spacing: .12em;\n}\n\n.big-fish .fish-help-popover p {\n  margin: 4px 0 0;\n  color: var(--fish-text);\n  font-size: 13px;\n  line-height: 1.75;\n  white-space: normal;\n}\n\n.big-fish .fish-help-link {\n  display: inline;\n  min-height: 0;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  color: var(--fish-blue-strong);\n  font: inherit;\n  font-weight: 600;\n  line-height: inherit;\n  letter-spacing: 0;\n  text-align: left;\n  text-decoration: underline;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n  box-shadow: none;\n  cursor: pointer;\n}\n\n.big-fish .fish-help-link:hover {\n  text-decoration-thickness: 2px;\n}\n\n/* 角色设定模态框要覆盖默认 460px 卡片宽度（后定义的 .fish-modal-card 优先）。 */\n.big-fish .fish-modal-card.qq-text-modal {\n  width: min(760px, 100%);\n  max-height: calc(100vh - 40px);\n  overflow: auto;\n}\n\n.big-fish .fish-modal-card.qq-role-writer-card {\n  width: min(680px, 100%);\n  max-height: calc(100vh - 40px);\n  overflow: auto;\n}\n\n/* ── 文件管理 ─────────────────────────────────────────────── */\n\n.big-fish .fish-file-manager {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.big-fish .fish-file-manager-stickers > h2 {\n  margin: 0 0 8px;\n}\n\n.big-fish .fish-file-manager .fish-media-storage {\n  margin-top: 10px;\n}\n\n/* 跳转目标：滚动到位后闪一下，提醒用户看这里。 */\n.big-fish .fish-jump-flash {\n  position: relative;\n}\n\n.big-fish .fish-jump-flash::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  z-index: 2;\n  border-radius: inherit;\n  box-shadow: 0 0 0 2px var(--fish-gold), 0 0 26px rgba(198, 154, 74, .38);\n  opacity: 0;\n  pointer-events: none;\n  animation: fish-jump-glow 1.35s ease-in-out both;\n}\n\n@keyframes fish-jump-glow {\n  0% { opacity: 0; }\n  25% { opacity: 1; }\n  65% { opacity: 1; }\n  100% { opacity: 0; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .big-fish .fish-jump-flash::after {\n    opacity: 1;\n    box-shadow: inset 0 0 0 2px var(--fish-gold);\n  }\n}\n\n.big-fish #fish-sticker-files-card,\n.big-fish #qq-reply-threshold {\n  scroll-margin-top: 24px;\n}\n\n/* ── QQ 空间浏览 ─────────────────────────────────────────── */\n\n.big-fish .qq-space-browse-head h2 {\n  margin: 0 0 4px;\n}\n\n.big-fish .qq-space-browse-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px 18px;\n  margin: 16px 0 4px;\n}\n\n.big-fish .qq-space-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  color: var(--fish-muted);\n  font-size: var(--fish-small);\n}\n\n.big-fish .qq-space-field input {\n  width: 100%;\n}\n\n.big-fish .qq-space-browse-actions {\n  gap: 8px;\n  margin-top: 12px;\n}\n\n@container (max-width: 760px) {\n  .big-fish .qq-space-browse-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* ── QQ 语音转写 ─────────────────────────────────────────── */\n\n.big-fish .qq-voice-card .fish-form-row {\n  padding: 17px 0;\n}\n\n.big-fish .qq-voice-env {\n  margin-bottom: 6px;\n}\n\n.big-fish .qq-voice-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n\n.big-fish .qq-voice-env .fish-hint {\n  margin-top: 10px;\n}\n\n.big-fish .qq-voice-note {\n  margin-top: 14px;\n  line-height: 1.8;\n}\n\n@container (max-width: 620px) {\n  .big-fish .qq-voice-card .fish-form-row {\n    padding: 14px 0;\n  }\n}\n\n.big-fish .qq-voice-cost {\n  width: 50%;\n  max-width: 50%;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px dashed var(--fish-line);\n  overflow-x: auto;\n}\n\n.big-fish .qq-voice-cost-intro {\n  margin: 0 0 10px;\n  color: var(--fish-muted);\n  font-size: var(--fish-small);\n  line-height: 1.7;\n}\n\n.big-fish .qq-voice-cost-table {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: auto;\n}\n\n.big-fish .qq-voice-cost-table th,\n.big-fish .qq-voice-cost-table td {\n  padding: 9px 6px;\n  border-bottom: 1px solid var(--fish-line);\n  font-size: 12px;\n  line-height: 1.6;\n  text-align: left;\n  vertical-align: top;\n  white-space: nowrap;\n}\n\n.big-fish .qq-voice-cost-table thead th {\n  color: var(--fish-muted);\n  font-size: var(--fish-small);\n  font-weight: 500;\n}\n\n.big-fish .qq-voice-cost-table tbody th {\n  width: 92px;\n  color: var(--fish-text);\n  font-weight: 400;\n  white-space: nowrap;\n}\n\n.big-fish .qq-voice-cost-table tbody td {\n  color: var(--fish-muted);\n}\n\n.big-fish .qq-voice-cost-table tbody tr:last-child th,\n.big-fish .qq-voice-cost-table tbody tr:last-child td {\n  border-bottom: 0;\n}\n\n.big-fish .qq-voice-cost-note {\n  margin: 16px 0 0;\n  color: var(--fish-muted);\n  font-size: var(--fish-small);\n  line-height: 1.85;\n}\n\n@container (max-width: 620px) {\n  .big-fish .qq-voice-cost {\n    width: 100%;\n    max-width: 100%;\n  }\n\n  .big-fish .qq-voice-cost-table tbody th {\n    width: 82px;\n  }\n}\n\n/* ── 运行日志：命令行式实时终端 ─────────────────────────── */\n\n.big-fish .fish-run-log {\n  display: grid;\n  gap: 16px;\n}\n\n.big-fish .fish-terminal-card {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid rgba(194, 158, 92, .32);\n  border-radius: 22px;\n  background: #0b1725;\n  box-shadow: 0 18px 40px rgba(4, 12, 22, .28);\n}\n\n.big-fish .fish-terminal-head {\n  position: absolute;\n  inset: 0 0 auto;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 1px solid rgba(194, 158, 92, .18);\n  background: linear-gradient(180deg, #102132 0%, rgba(16, 33, 50, .97) 100%);\n  color: #d9e7e9;\n}\n\n.big-fish .fish-terminal-live {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: #8fe0b1;\n  font: 700 11px/1 ui-monospace, SFMono-Regular, Consolas, monospace;\n  letter-spacing: .12em;\n}\n\n.big-fish .fish-terminal-live i {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #65d69a;\n  box-shadow: 0 0 0 3px rgba(101, 214, 154, .14);\n}\n\n.big-fish .fish-terminal-title {\n  color: rgba(217, 231, 233, .72);\n  font-size: 12.5px;\n}\n\n.big-fish .fish-terminal-count {\n  margin-left: auto;\n  color: rgba(217, 231, 233, .45);\n  font: 11.5px/1 ui-monospace, SFMono-Regular, Consolas, monospace;\n}\n\n.big-fish .fish-terminal {\n  height: min(68vh, 760px);\n  min-height: 320px;\n  overflow: auto;\n  padding: 68px 18px 20px;\n  background: #08131f;\n  color: #cfe3e8;\n  font: 12.5px/1.75 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;\n}\n\n.big-fish .fish-terminal-line {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n  padding: 1px 0;\n}\n\n.big-fish .fish-terminal-time {\n  flex: none;\n  color: rgba(194, 158, 92, .82);\n  white-space: nowrap;\n}\n\n.big-fish .fish-terminal-prompt {\n  flex: none;\n  color: #c2a05f;\n}\n\n.big-fish .fish-terminal-text {\n  min-width: 0;\n  overflow-wrap: anywhere;\n  white-space: pre-wrap;\n}\n\n.big-fish .fish-terminal-empty {\n  color: rgba(207, 227, 232, .48);\n}\n\n.big-fish .fish-terminal-error {\n  margin: 0;\n  padding: 10px 18px;\n  border-top: 1px solid rgba(194, 158, 92, .18);\n  color: #f0b5a7;\n  font-size: var(--fish-small);\n}\n\n@container (max-width: 640px) {\n  .big-fish .fish-terminal-head {\n    padding: 12px 14px;\n  }\n\n  .big-fish .fish-terminal {\n    height: 58vh;\n    padding: 60px 14px 14px;\n    font-size: 12px;\n  }\n}\n\n/* 表单控件使用自己的焦点环，不再叠加浏览器默认 outline。 */\n.big-fish input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]):not([type=color]):not([type=button]):not([type=submit]):not([type=reset]):focus-visible,\n.big-fish select:focus-visible,\n.big-fish textarea:focus-visible {\n  outline: none !important;\n}\n\n/* 自定义下拉浮层：替代原生 option 弹层。 */\n.big-fish .fish-select-popup {\n  position: fixed;\n  z-index: 12000;\n  overflow-y: auto;\n  padding: 6px;\n  border: 1px solid var(--fish-control-border);\n  border-radius: 14px;\n  background: var(--fish-surface);\n  box-shadow: 0 18px 40px rgba(15, 25, 45, .22), var(--fish-control-shadow);\n  animation: fish-select-pop 140ms ease-out;\n}\n\n.big-fish .fish-select-option {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 38px;\n  margin: 2px 0;\n  padding: 8px 12px 8px 32px;\n  border: 1px solid transparent;\n  border-radius: 9px;\n  background: transparent;\n  color: var(--fish-text);\n  font-family: var(--fish-font);\n  font-size: var(--fish-label);\n  line-height: 1.45;\n  text-align: left;\n  cursor: pointer;\n}\n\n.big-fish .fish-select-option::before {\n  content: '✓';\n  position: absolute;\n  left: 10px;\n  color: var(--fish-gold);\n  font-weight: 700;\n  opacity: 0;\n}\n\n.big-fish .fish-select-option[aria-selected=true] {\n  background: var(--fish-gold-soft);\n}\n\n.big-fish .fish-select-option[aria-selected=true]::before {\n  opacity: 1;\n}\n\n.big-fish .fish-select-option.is-active:not([aria-selected=true]) {\n  background: var(--fish-soft);\n}\n\n.big-fish .fish-select-option:hover {\n  background: var(--fish-hover);\n}\n\n.big-fish .fish-select-option:disabled {\n  cursor: not-allowed;\n  opacity: .45;\n}\n\n@keyframes fish-select-pop {\n  from { opacity: 0; transform: translateY(-3px) scale(.99); }\n  to { opacity: 1; transform: translateY(0) scale(1); }\n}\n\n.big-fish .fish-update-check {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 142px;\n  min-height: 44px;\n  padding: 11px 22px;\n  border-radius: 13px;\n}\n\n.big-fish .fish-button.fish-gold {\n  border-color: var(--fish-gold);\n  background: var(--fish-gold);\n  color: var(--fish-navy);\n  box-shadow: 0 2px 0 var(--fish-gold-ink);\n}\n\n.big-fish .fish-button.fish-gold:not(:disabled):hover {\n  border-color: var(--fish-gold);\n  background: var(--fish-gold);\n  color: var(--fish-navy);\n  filter: brightness(1.06);\n}\n\n.big-fish .fish-spin {\n  animation: fish-spin 900ms linear infinite;\n}\n\n@keyframes fish-spin {\n  to { transform: rotate(360deg); }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .big-fish .fish-spin {\n    animation-duration: 2.4s;\n  }\n}\n\n/* 新建 QQ 映射：字段竖向排列，不显示目标会话。 */\n.big-fish .fish-modal-card.qq-bind-add-modal {\n  width: min(520px, 100%);\n}\n\n.big-fish .qq-bind-modal-fields {\n  display: grid;\n  gap: 14px;\n  margin: 18px 0 4px;\n}\n\n.big-fish .qq-bind-modal-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  color: var(--fish-muted);\n  font-size: var(--fish-small);\n}\n\n.big-fish .qq-bind-modal-field input {\n  width: 100%;\n}\n\n.big-fish .qq-bind-modal-toggles {\n  display: grid;\n  gap: 10px;\n}\n\n.big-fish .qq-bind-modal-toggle {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  color: var(--fish-muted);\n  font-size: var(--fish-small);\n}\n\n.big-fish .qq-bind-modal-name-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.big-fish .qq-bind-modal-name-row input {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n\n.big-fish .qq-bind-modal-name-row .fish-button {\n  flex: none;\n  min-height: 38px;\n  padding: 8px 12px;\n  white-space: nowrap;\n}\n\n.big-fish .qq-bind-modal-lookup {\n  margin-top: -6px;\n  color: var(--fish-muted);\n  font-size: var(--fish-small);\n}\n";
const components = {};
const moduleLoader = { load({id, factory}) { components[id] = factory(require) } };
function FishStickers({ notify, mode = 'full', onOpenFiles }) {
  const React = require('react'), h = React.createElement
  const [data, setData] = React.useState(null), [busy, setBusy] = React.useState(false), [error, setError] = React.useState('')
  const [bindings, setBindings] = React.useState([]), [sessions, setSessions] = React.useState([]), [processingSession, setProcessingSession] = React.useState('')
  const [scope, setScope] = React.useState(''), [query, setQuery] = React.useState(''), [category, setCategory] = React.useState('')
  const fileRef = React.useRef(null), batchRef = React.useRef(null), sessionList = React.useId(), tagList = React.useId()
  const [file, setFile] = React.useState(null), [tags, setTags] = React.useState(''), [importStatus, setImportStatus] = React.useState('')
  const [libraryOpen, setLibraryOpen] = React.useState(false), [selected, setSelected] = React.useState(null)
  const base = '/dsh-qq-bridge/stickers'
  const load = async (path = '', body) => {
    const response = await fetch(base + path, { cache: 'no-store', ...(body === undefined ? {} : { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }) })
    const result = await response.json()
    if (!response.ok || !result.ok) throw new Error(result.说 || result.error || '表情库请求失败')
    setData(result); return result
  }
  React.useEffect(() => {
    load().catch(e => setError(e.message))
    fetch('/dsh-qq-bridge/state', { cache: 'no-store' }).then(r => r.json()).then(r => { setBindings(r.配置?.绑定 || []); setSessions(r.活着的会话 || []) }).catch(e => setError(e.message))
  }, [])
  React.useEffect(() => setProcessingSession(data?.settings.processingSession || ''), [data?.settings.processingSession])
  React.useEffect(() => {
    if (!data?.settings.autoCollect && !data?.tagging?.pending) return
    const timer = setInterval(() => load().catch(e => setError(e.message)), 5000)
    return () => clearInterval(timer)
  }, [data?.settings.autoCollect, data?.tagging?.pending])
  const act = async (path, body) => {
    setBusy(true); setError('')
    try { await load(path, body); notify?.('表情库已更新', { tone: 'success' }); return true }
    catch (e) { setError(e.message); return false } finally { setBusy(false) }
  }
  const uploadFiles = async (files, batch = false) => {
    if (!files.length) return
    if (files.length > 500) { setError('一次最多选择 500 张表情'); return }
    setBusy(true); setError(''); let done = 0; const failed = []
    try {
      for (const [index, image] of files.entries()) {
        setImportStatus('正在导入 ' + (index + 1) + ' / ' + files.length + '…')
        try {
          if (!image.size || image.size > 8 * 1048576) throw new Error('单张图片须为 1 字节～8 MB')
          const base64 = await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result).split(',')[1]); reader.onerror = () => reject(new Error('读取图片失败')); reader.readAsDataURL(image) })
          await load('/import', { base64, tags: batch ? '' : tags, scope: batch ? '' : scope }); done++
        } catch (e) { failed.push(image.name + '：' + e.message) }
      }
      setImportStatus('导入完成：' + done + ' / ' + files.length + ' 张已入库，等待专用会话识别、命名和分类。' + (failed.length ? '失败 ' + failed.length + ' 张。' : ''))
      if (failed.length) setError(failed.join('\n'))
      if (!batch && done) { setFile(null); setTags(''); if (fileRef.current) fileRef.current.value = '' }
      if (done) notify?.('表情已入库，正在排队处理', { tone: 'success' })
    } finally { setBusy(false); if (batchRef.current) batchRef.current.value = '' }
  }
  const openFolder = async () => {
    setBusy(true); setError('')
    try {
      const response = await fetch('/dsh-qq-bridge/open-folder', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ kind: 'stickers' }) })
      const result = await response.json().catch(() => null)
      if (!response.ok || !result?.ok) throw new Error(result?.说 || '打开文件夹失败')
      notify?.('已打开本地文件夹', { tone: 'success' })
    } catch (e) { setError(e.message) } finally { setBusy(false) }
  }
  const sw = (key, label, note) => h('div', { className: 'fish-form-row' }, h('div', { className: 'fish-form-label' }, label), h('div', { className: 'fish-control' },
    h('input', { type: 'checkbox', role: 'switch', 'aria-label': label, checked: !!data.settings[key], disabled: busy, onChange: async e => { const value = e.target.checked, previous = data.settings[key]; setData(old => ({ ...old, settings: { ...old.settings, [key]: value } })); if (!await act('/settings', { [key]: value })) setData(old => ({ ...old, settings: { ...old.settings, [key]: previous } })) } }), h('p', { className: 'fish-muted' }, note)))
  const tagGroups = fishStickerTagGroups(data?.items || [])
  const activeTag = tagGroups.some(x => x.id === category) ? category : 'all'
  const filtered = (data?.items || []).filter(x => fishStickerInTag(x, activeTag) && [x.name,...x.tags,...x.scenes].join(' ').toLowerCase().includes(query.toLowerCase()))
  const preview = data?.items.find(x => x.id === selected)
  React.useEffect(() => { if (selected && !preview) setSelected(null) }, [selected, Boolean(preview)])
  if (!data) return h('p', { role: 'status' }, error || '正在读取表情库…')
  const ready = Boolean(data.settings.processingSession) && processingSession.trim() === data.settings.processingSession
  const 存储提示 = data.storage?.path ? '素材原图目录：' + data.storage.path : (data.storage?.error && !/工作区/.test(data.storage.error) ? data.storage.error : '素材原图目录暂不可用。')
  const tagPrefix = tags.match(/^.*[,，、;；]/)?.[0] || ''
  const 自动化卡 = h('section', { className: 'fish-card' }, h('h2', null, '表情包自动化'),
    sw('autoSend', '根据语境自动发送表情', '每轮最多附一张，已有图片时不追加。使用目标会话模型判断是否合适，会产生模型用量；没有合适素材或判断失败时不发图。遵守 QQ 试运行、收发开关和素材来源隔离。'),
    sw('autoCollect', '自动收藏收到的表情', '从已启用绑定的聊天中自动收藏 QQ 大表情、表情图片和 GIF；无需触发模型回复，原文件按来源隔离与内容去重。不会重新扫描启动前的历史记录。'),
    sw('collectAllImages', '同时收藏普通图片', '默认关闭，避免把普通照片收进素材库；只对自动收藏生效。'),
    sw('autoTag', '自动给新表情打标签', '自动收藏的表情使用所属绑定会话的模型标注。手动导入和扫描补标签使用下方专用会话，不受此开关影响。已有手动标签不会被覆盖，会产生模型用量。'),
    sw('autoClassify', '自动分类表情包', '按视觉结果和标签、场景自动归类，手动选定的分类保持不变。手动导入及扫描识别完成后自动分类。'),
    data.collection?.error ? h('p', { role: 'status', className: 'fish-message' }, data.collection.error) : null,
    h('label', null, '自动发送冷却（秒） ', h('input', { type: 'number', min: 10, max: 86400, 'aria-label': '自动发送冷却', defaultValue: data.settings.cooldownSeconds, disabled: busy, onBlur: e => act('/settings', { cooldownSeconds: Number(e.target.value) }) })),
    h('label', null, '素材处理会话 ', h('input', { value: processingSession, list: sessionList, placeholder: '输入专用 DSH 会话 ID', 'aria-label': '素材处理会话', 'aria-describedby': sessionList + '-help', disabled: busy, onChange: e => setProcessingSession(e.target.value), onBlur: () => { if (processingSession.trim() !== data.settings.processingSession) act('/settings', { processingSession: processingSession.trim() }) } })),
    h('datalist', { id: sessionList }, ...sessions.map(s => h('option', { key: s.id, value: s.id }, s.标题 || s.id))),
    h('p', { id: sessionList + '-help', className: 'fish-muted' }, '先在 DSH 中创建并打开一个专用会话，选择现有 DeepSeek 模型，再填入会话 ID；离开输入框自动保存。仅用于手动导入、批量导入、扫描补标签及重试，每张图片独立处理，不向聊天记录追加消息。请勿将该会话绑定到 QQ、记忆或主动搭话。'),
    h('p', { className: 'fish-muted', role: data.storage?.error && !/工作区/.test(data.storage.error) ? 'status' : undefined }, 存储提示))

  const 素材库按钮 = h('button', { type: 'button', className: 'fish-button fish-primary', onClick: () => {
    if (typeof onOpenFiles === 'function') { onOpenFiles(); return }
    setLibraryOpen(true); load().catch(e => setError(e.message))
  } }, '打开表情包素材库')
  const 素材库弹窗 = h(FishStickerDialog, { open: libraryOpen, onClose: () => { setLibraryOpen(false); setSelected(null) }, title: '表情包素材库' },
    h('div', { className: 'fish-actions' },
      h('button', { type: 'button', className: 'fish-button fish-primary', disabled: busy || !ready || !!data.tagging?.pending || !data.items.some(x => !x.tags.length), onClick: () => act('/tag', { onlyUntagged: true }) }, '扫描并识别未打标签表情'),
      h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: () => load().catch(e => setError(e.message)) }, '刷新素材库')),
    h('p', { className: 'fish-muted', role: 'status' }, data.tagging?.pending ? '正在处理 ' + data.tagging.pending + ' 张表情，可关闭窗口，任务继续运行。' : '扫描全部素材，只给无标签的图片排队；使用配置的专用会话识别，会产生模型用量。'),
    h('label', null, '搜索名称、标签和场景 ', h('input', { value: query, onChange: e => setQuery(e.target.value), 'aria-label': '搜索表情' })),
    h('div', { className: 'fish-actions fish-sticker-tags', role: 'group', 'aria-label': '表情标签筛选' }, ...tagGroups.map(tag => h('button', { type: 'button', key: tag.id, className: 'fish-button' + (activeTag === tag.id ? ' fish-primary' : ''), 'aria-pressed': activeTag === tag.id, onClick: () => setCategory(tag.id) }, tag.name + '（' + tag.count + '）'))),
    h('div', { className: 'fish-sticker-grid' }, ...filtered.map(item => h('article', { className: 'fish-sticker-tile', key: item.id },
      h('button', { className: 'fish-sticker-thumb', type: 'button', 'aria-label': '预览 ' + item.name, onClick: () => setSelected(item.id) }, h('img', { src: item.url, alt: '', loading: 'lazy', width: 144, height: 120 })),
      h('h3', null, item.name), h('p', { className: 'fish-muted' }, item.tags.length ? item.tags.join(' · ') : '未分类')))),
    filtered.length ? null : h('p', { className: 'fish-muted' }, data.items.length ? '当前标签或搜索下没有表情。' : '素材库为空，可关闭窗口后导入表情包。'),
    error ? h('p', { className: 'fish-message', role: 'alert' }, error) : null)
  const 预览弹窗 = h(FishStickerDialog, { open: Boolean(preview) && libraryOpen, onClose: () => setSelected(null), title: '表情预览与编辑' },
    preview ? h(FishStickerCard, { key: preview.id, item: preview, busy, processingReady: ready, act, bindings, categories: data.categories }) : null,
    error ? h('p', { className: 'fish-message', role: 'alert' }, error) : null)

  if (mode === 'settings') {
    return h('div', { className: 'fish-settings-stack fish-stickers' },
      h('style', null, FISH_STICKER_CSS),
      自动化卡,
      素材库按钮,
      素材库弹窗,
      预览弹窗,
      !libraryOpen && error ? h('p', { className: 'fish-message', role: 'alert', style: { whiteSpace: 'pre-wrap' } }, error) : null)
  }

  if (mode === 'files') {
    return h('div', { className: 'fish-settings-stack fish-stickers' },
      h('style', null, FISH_STICKER_CSS),
      h('section', { id: 'fish-sticker-files-card', className: 'fish-card fish-sticker-files' },
        h('h2', null, '表情包'),
        h('p', { className: 'fish-muted', role: data.storage?.error && !/工作区/.test(data.storage.error) ? 'status' : undefined }, 存储提示),
        h('input', { ref: fileRef, type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp', hidden: true, style: { display: 'none' }, 'aria-label': '单张表情文件', onChange: e => { const f = e.target.files?.[0]; if (f) uploadFiles([f], false) } }),
        h('input', { ref: batchRef, type: 'file', multiple: true, accept: '.png,.jpg,.jpeg,.gif,.webp', hidden: true, style: { display: 'none' }, 'aria-label': '批量表情文件', onChange: e => uploadFiles(Array.from(e.target.files || []), true) }),
        h('div', { className: 'fish-actions' },
          h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: openFolder }, '打开本地文件夹'),
          h('button', { type: 'button', className: 'fish-button', onClick: () => { setLibraryOpen(true); load().catch(e => setError(e.message)) } }, '管理素材库（' + data.items.length + '）'),
          h('button', { type: 'button', className: 'fish-button', disabled: busy || !ready || !!data.storage?.error, onClick: () => fileRef.current?.click() }, '单张导入'),
          h('button', { type: 'button', className: 'fish-button', disabled: busy || !ready || !!data.storage?.error, onClick: () => batchRef.current?.click() }, '批量导入')),
        h('p', { className: 'fish-muted' }, ready ? '单张 / 批量导入会使用「QQ 互通 → 表情包」中配置的素材处理会话进行识别、命名和分类。' : '先在「QQ 互通 → 表情包」配置素材处理会话后，才能导入。'),
        importStatus ? h('p', { role: 'status', className: 'fish-muted' }, importStatus) : null,
        data.tagging?.pending ? h('p', { role: 'status', className: 'fish-muted' }, '正在识别 ' + data.tagging.pending + ' 张表情，处理完成后可在素材库中查看。') : null,
        !libraryOpen && error ? h('p', { className: 'fish-message', role: 'alert', style: { whiteSpace: 'pre-wrap' } }, error) : null),
      素材库弹窗,
      预览弹窗)
  }

  return h('div', { className: 'fish-settings-stack fish-stickers' },
    h('style', null, FISH_STICKER_CSS),
    h('section', { className: 'fish-card' }, h('h2', null, '表情包自动化'),
      sw('autoSend', '根据语境自动发送表情', '每轮最多附一张，已有图片时不追加。使用目标会话模型判断是否合适，会产生模型用量；没有合适素材或判断失败时不发图。遵守 QQ 试运行、收发开关和素材来源隔离。'),
      sw('autoCollect', '自动收藏收到的表情', '从已启用绑定的聊天中自动收藏 QQ 大表情、表情图片和 GIF；无需触发模型回复，原文件按来源隔离与内容去重。不会重新扫描启动前的历史记录。'),
      sw('collectAllImages', '同时收藏普通图片', '默认关闭，避免把普通照片收进素材库；只对自动收藏生效。'),
      sw('autoTag', '自动给新表情打标签', '自动收藏的表情使用所属绑定会话的模型标注。手动导入和扫描补标签使用下方专用会话，不受此开关影响。已有手动标签不会被覆盖，会产生模型用量。'),
      sw('autoClassify', '自动分类表情包', '按视觉结果和标签、场景自动归类，手动选定的分类保持不变。手动导入及扫描识别完成后自动分类。'),
      data.collection?.error ? h('p', { role: 'status', className: 'fish-message' }, data.collection.error) : null,
      h('label', null, '自动发送冷却（秒） ', h('input', { type: 'number', min: 10, max: 86400, 'aria-label': '自动发送冷却', defaultValue: data.settings.cooldownSeconds, disabled: busy, onBlur: e => act('/settings', { cooldownSeconds: Number(e.target.value) }) })),
      h('label', null, '素材处理会话 ', h('input', { value: processingSession, list: sessionList, placeholder: '输入专用 DSH 会话 ID', 'aria-label': '素材处理会话', 'aria-describedby': sessionList + '-help', disabled: busy, onChange: e => setProcessingSession(e.target.value), onBlur: () => { if (processingSession.trim() !== data.settings.processingSession) act('/settings', { processingSession: processingSession.trim() }) } })),
      h('datalist', { id: sessionList }, ...sessions.map(s => h('option', { key: s.id, value: s.id }, s.标题 || s.id))),
      h('p', { id: sessionList + '-help', className: 'fish-muted' }, '先在 DSH 中创建并打开一个专用会话，选择现有 DeepSeek 模型，再填入会话 ID；离开输入框自动保存。仅用于手动导入、批量导入、扫描补标签及重试，每张图片独立处理，不向聊天记录追加消息。请勿将该会话绑定到 QQ、记忆或主动搭话。'),
      h('p', { className: 'fish-muted', role: data.storage?.error && !/工作区/.test(data.storage.error) ? 'status' : undefined }, 存储提示)),
    h('button', { type: 'button', className: 'fish-button fish-primary', onClick: () => { setLibraryOpen(true); load().catch(e => setError(e.message)) } }, '打开表情包素材库（' + data.items.length + '）'),
    h('section', { className: 'fish-card fish-sticker-import' }, h('h2', null, '单张导入'),
      h('label', null, '图片文件 ', h('input', { ref: fileRef, type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp', disabled: busy, onChange: e => setFile(e.target.files?.[0] || null) })),
      h('label', null, '使用范围 ', h('select', { 'aria-label': '素材使用范围', value: scope, disabled: busy, onChange: e => setScope(e.target.value) }, h('option', { value: '' }, '共享素材（所有绑定可用）'), ...bindings.map(b => h('option', { key: b.会话, value: b.会话 }, b.类型 + ' ' + b.号码)))),
      h('label', null, '标签 ', h('input', { 'aria-label': '导入标签', value: tags, list: tagList, placeholder: '选择已有标签或输入新标签，多个用逗号分隔', disabled: busy, onChange: e => setTags(e.target.value) })),
      h('datalist', { id: tagList }, ...tagGroups.filter(t => t.id.startsWith('tag:')).map(t => h('option', { key: t.id, value: tagPrefix + t.id.slice(4) }))),
      h('p', { className: 'fish-muted' }, '支持 PNG、JPEG、GIF、WebP，单张最多 8 MB。标签留空则自动识别；DeepSeek 自动生成“标签-图片描述”短名称、使用场景和分类。'),
      h('button', { type: 'button', className: 'fish-button fish-primary', disabled: busy || !file || !ready || !!data.storage?.error, onClick: () => uploadFiles([file]) }, '导入单张表情')),
    h('section', { className: 'fish-card' }, h('h2', null, '批量导入'),
      h('input', { ref: batchRef, type: 'file', multiple: true, accept: '.png,.jpg,.jpeg,.gif,.webp', hidden: true, style: { display: 'none' }, 'aria-label': '批量表情文件', onChange: e => uploadFiles(Array.from(e.target.files || []), true) }),
      h('button', { type: 'button', className: 'fish-button fish-primary', disabled: busy || !ready || !!data.storage?.error, onClick: () => batchRef.current?.click() }, '批量导入表情包')),
    importStatus ? h('p', { role: 'status', className: 'fish-muted' }, importStatus) : null,
    data.tagging?.pending ? h('p', { role: 'status', className: 'fish-muted' }, '正在识别 ' + data.tagging.pending + ' 张表情，处理完成后可在素材库中查看。') : null,
    h(FishStickerDialog, { open: libraryOpen, onClose: () => { setLibraryOpen(false); setSelected(null) }, title: '表情包素材库' },
      h('div', { className: 'fish-actions' },
        h('button', { type: 'button', className: 'fish-button fish-primary', disabled: busy || !ready || !!data.tagging?.pending || !data.items.some(x => !x.tags.length), onClick: () => act('/tag', { onlyUntagged: true }) }, '扫描并识别未打标签表情'),
        h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: () => load().catch(e => setError(e.message)) }, '刷新素材库')),
      h('p', { className: 'fish-muted', role: 'status' }, data.tagging?.pending ? '正在处理 ' + data.tagging.pending + ' 张表情，可关闭窗口，任务继续运行。' : '扫描全部素材，只给无标签的图片排队；使用配置的专用会话识别，会产生模型用量。'),
      h('label', null, '搜索名称、标签和场景 ', h('input', { value: query, onChange: e => setQuery(e.target.value), 'aria-label': '搜索表情' })),
      h('div', { className: 'fish-actions fish-sticker-tags', role: 'group', 'aria-label': '表情标签筛选' }, ...tagGroups.map(tag => h('button', { type: 'button', key: tag.id, className: 'fish-button' + (activeTag === tag.id ? ' fish-primary' : ''), 'aria-pressed': activeTag === tag.id, onClick: () => setCategory(tag.id) }, tag.name + '（' + tag.count + '）'))),
      h('div', { className: 'fish-sticker-grid' }, ...filtered.map(item => h('article', { className: 'fish-sticker-tile', key: item.id },
        h('button', { className: 'fish-sticker-thumb', type: 'button', 'aria-label': '预览 ' + item.name, onClick: () => setSelected(item.id) }, h('img', { src: item.url, alt: '', loading: 'lazy', width: 144, height: 120 })),
        h('h3', null, item.name), h('p', { className: 'fish-muted' }, item.tags.length ? item.tags.join(' · ') : '未分类')))),
      filtered.length ? null : h('p', { className: 'fish-muted' }, data.items.length ? '当前标签或搜索下没有表情。' : '素材库为空，可关闭窗口后导入表情包。'),
      error ? h('p', { className: 'fish-message', role: 'alert' }, error) : null),
    h(FishStickerDialog, { open: Boolean(preview) && libraryOpen, onClose: () => setSelected(null), title: '表情预览与编辑' },
      preview ? h(FishStickerCard, { key: preview.id, item: preview, busy, processingReady: ready, act, bindings, categories: data.categories }) : null,
      error ? h('p', { className: 'fish-message', role: 'alert' }, error) : null),
    !libraryOpen && error ? h('p', { className: 'fish-message', role: 'alert', style: { whiteSpace: 'pre-wrap' } }, error) : null)
}

function fishStickerInTag(item, tag) {
  return tag === 'all' || (tag === 'untagged' ? !item.tags.length : item.tags.includes(tag.slice(4)))
}
function fishStickerTagGroups(items) {
  const counts = new Map()
  for (const item of items) for (const tag of new Set(item.tags)) counts.set(tag, (counts.get(tag) || 0) + 1)
  return [{ id: 'all', name: '全部', count: items.length }, ...[...counts].sort(([a],[b]) => a.localeCompare(b, 'zh-CN')).map(([tag,count]) => ({ id: 'tag:' + tag, name: tag === '未分类' ? '未分类（标签）' : tag, count })), { id: 'untagged', name: '未分类', count: items.filter(x => !x.tags.length).length }]
}
function FishStickerDialog({ open, onClose, title, children }) {
  const React = require('react'), h = React.createElement, ref = React.useRef(null)
  React.useEffect(() => {
    const dialog = ref.current
    if (open && !dialog.open) dialog.showModal()
    else if (!open && dialog.open) dialog.close()
  }, [open])
  return h('dialog', { ref, className: 'fish-modal-card fish-sticker-dialog fish-stickers', 'aria-label': title,
    onCancel: e => { e.preventDefault(); onClose() }, onClose,
    onClick: e => { if (e.target !== e.currentTarget) return; const r = e.currentTarget.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onClose() } },
    h('header', { className: 'fish-sticker-dialog-header' }, h('h2', null, title), h('button', { type: 'button', className: 'fish-button', onClick: onClose, 'aria-label': '关闭' + title }, '关闭')),
    h('div', { className: 'fish-sticker-dialog-body' }, children))
}
const FISH_STICKER_CSS = `
.big-fish .fish-stickers label{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin:12px 0}
.big-fish .fish-stickers .fish-form-row{display:flex;flex-wrap:wrap;align-items:center;gap:12px;padding:12px 0}
.big-fish .fish-stickers label>input:not([role=switch]),.big-fish .fish-stickers label>select{flex:1 1 240px;min-width:0;max-width:100%}
.big-fish .fish-stickers .fish-muted,.big-fish .fish-stickers .fish-message{overflow-wrap:anywhere}
.big-fish .fish-stickers article{display:grid;gap:12px;margin-top:16px}
.big-fish .fish-stickers article label{margin:0}
.big-fish .fish-stickers .fish-actions{display:flex;flex-wrap:wrap;gap:12px}
.big-fish .fish-sticker-dialog{width:min(1040px,calc(100vw - 32px));max-width:calc(100vw - 32px);max-height:calc(100dvh - 40px);padding:0 0 18px;overflow:hidden;border:1px solid var(--fish-border);border-radius:24px;background:var(--fish-panel);box-shadow:var(--fish-shadow);color:var(--fish-text);font-family:var(--fish-font)}
.big-fish .fish-sticker-dialog[open]{display:flex;flex-direction:column}
.big-fish .fish-sticker-dialog-body{min-height:0;overflow:auto;padding:0 24px 8px;overscroll-behavior:contain}
.big-fish .fish-sticker-dialog:not([open]){display:none}
.big-fish .fish-sticker-dialog::backdrop{background:rgba(8,16,32,.65);backdrop-filter:blur(3px)}
.big-fish .fish-sticker-dialog-header{display:flex;align-items:center;justify-content:space-between;gap:16px;flex:none;padding:24px 24px 16px}
.big-fish .fish-sticker-dialog-header h2{margin:0}
.big-fish .fish-sticker-tags{margin:16px 0}
.big-fish .fish-sticker-tags .fish-button{min-width:0;overflow-wrap:anywhere}
.big-fish .fish-sticker-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,160px),1fr));gap:16px}
.big-fish .fish-sticker-tile{min-width:0;border:1px solid var(--fish-border);border-radius:12px;padding:12px;background:var(--fish-surface)}
.big-fish .fish-sticker-tile h3,.big-fish .fish-sticker-tile p{margin:0;overflow-wrap:anywhere}
.big-fish .fish-sticker-thumb{width:100%;padding:4px;border:0;border-radius:8px;background:var(--fish-soft);cursor:zoom-in}
.big-fish .fish-sticker-thumb img{display:block;width:100%;height:120px;object-fit:contain}
.big-fish .fish-sticker-preview-image{display:block;width:100%;height:min(45dvh,400px);object-fit:contain;background:var(--fish-soft);border-radius:12px}
@media(max-width:520px){.big-fish .fish-sticker-dialog-header{padding:16px}.big-fish .fish-sticker-dialog-body{padding:0 16px 8px}.big-fish .fish-sticker-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.big-fish .fish-sticker-dialog-header h2{font-size:20px}}
`

function FishStickerCard({ item, busy, processingReady, act, bindings, categories }) {
  const React = require('react'), h = React.createElement
  const [dirty,setDirty] = React.useState(false)
  const [name,setName] = React.useState(item.name), [tags,setTags] = React.useState(item.tags.join(',')), [scenes,setScenes] = React.useState(item.scenes.join(','))
  React.useEffect(() => { if (!dirty) { setName(item.name); setTags(item.tags.join(',')); setScenes(item.scenes.join(',')) } }, [dirty, item.name, item.tags.join(','), item.scenes.join(',')])
  const binding = bindings.find(b => b.会话 === item.scope)
  return h('article', { className: 'qq-bind-detail' },
    h('img', { className: 'fish-sticker-preview-image', src: item.url, alt: item.name }),
    h('label', {className:'fish-form-row'}, '分类 ', h('select', { 'aria-label': item.id+' 分类', value:item.categorySource==='manual'?item.category:'',disabled:busy,onChange:e=>act('/edit',{id:item.id,category:e.target.value}) }, h('option',{value:''}, '自动归类 · '+(item.category || '未分类')), ...(categories || []).map(c=>h('option',{key:c,value:c},c)))),
    h('p', { className: 'fish-muted', role: 'status' }, '标签状态：' + ({pending:'等待处理',running:'识别中',complete:'已完成',error:'失败',cancelled:'已取消'}[item.tagStatus] || '未自动标注') + (item.tagError ? ' · '+item.tagError : '')),
    h('button', { type:'button',className:'fish-button',disabled:busy || !processingReady || ['pending','running'].includes(item.tagStatus),onClick:()=>act('/tag',{id:item.id}) }, '识别 / 重试标签'),
    h('p', { className: 'fish-muted' }, item.scope ? (binding ? binding.类型 + ' ' + binding.号码 : '原来源绑定已移除') : '共享素材'),
    ...[['名称',name,setName],['标签',tags,setTags],['场景',scenes,setScenes]].map(([label,value,set]) => h('label', { key: label, className: 'fish-form-row' }, label, h('input', { 'aria-label': item.id + ' ' + label, value, disabled: busy, onChange: e => { setDirty(true); set(e.target.value) } }))),
    h('div', { className: 'fish-actions' }, h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: async () => { if (await act('/edit', { id: item.id, name, tags, scenes })) setDirty(false) } }, '保存素材描述'),
      h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: () => { if (window.confirm('删除这张表情及其本地原文件？')) act('/remove', { id: item.id }) } }, '删除表情')))
}

function FishQQStorage({ kind, notify }) {
  const React = require('react'), h = React.createElement
  const [data,setData] = React.useState(null), [open,setOpen] = React.useState(false), [busy,setBusy] = React.useState(false), [error,setError] = React.useState(''), [preview,setPreview] = React.useState(null)
  const label = kind === 'images' ? '图片' : '文件', base = '/dsh-qq-bridge/media-storage'
  const load = async (path = '', body) => {
    const response = await fetch(base+path,{cache:'no-store',...(body?{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)}:{})})
    if(!response.ok) throw new Error('存储管理接口不可用，请重新加载插件')
    const result = await response.json()
    if(!result.ok) throw new Error(result.说 || result.error || '读取存储失败')
    setData(result[kind]);setError('')
  }
  React.useEffect(() => { load().catch(e=>setError(e.message)) },[])
  React.useEffect(() => { if(!open)return;const timer=setInterval(()=>load().catch(e=>setError(e.message)),5000);return()=>clearInterval(timer) },[open])
  const remove = async item => {
    if(!window.confirm('删除归档副本「'+item.name+'」？DSH 会话附件不会被删除。'))return
    setBusy(true)
    try { await load('/remove',{kind,id:item.id,workspace:data.workspace});if(preview?.id===item.id)setPreview(null) }
    catch(e){setError(e.message)}finally{setBusy(false)}
  }
  const openFolder = async () => {
    setBusy(true); setError('')
    try {
      const response = await fetch('/dsh-qq-bridge/open-folder', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ kind }) })
      const result = await response.json().catch(() => null)
      if (!response.ok || !result?.ok) throw new Error(result?.说 || '打开文件夹失败')
      notify?.('已打开本地文件夹', { tone: 'success' })
    } catch (e) { setError(e.message) } finally { setBusy(false) }
  }
  const size = bytes => bytes < 1048576 ? (bytes/1024).toFixed(1)+' KB' : (bytes/1048576).toFixed(1)+' MB'
  const items = data?.items || [], selected = items.find(x=>x.id===preview?.id)
  return h('div',{className:'fish-media-storage'},
    h('style',null,FISH_STICKER_CSS+'\n.big-fish .fish-media-storage p{overflow-wrap:anywhere}.big-fish .fish-stickers .fish-archive-file{display:flex;align-items:center;gap:12px;flex-wrap:wrap;border-bottom:1px solid var(--fish-border);padding:16px 0}.big-fish .fish-archive-name{flex:1 1 240px;min-width:0;overflow-wrap:anywhere}.big-fish .fish-archive-name p{margin:4px 0;overflow-wrap:anywhere}'),
    h('p',{className:'fish-muted'},data?.path?'存储目录：'+data.path:(data?.error && !/工作区/.test(data.error) ? data.error : '归档目录暂不可用。')),
    h('div',{className:'fish-actions'},
      h('button',{type:'button',className:'fish-button',disabled:busy,onClick:openFolder},'打开本地文件夹'),
      h('button',{type:'button',className:'fish-button',onClick:()=>{setPreview(null);setOpen(true);load().catch(e=>setError(e.message))}},'管理已存'+label+'（'+items.length+'）')),
    !open&&error?h('p',{className:'fish-message',role:'status'},error):null,
    h(FishStickerDialog,{open,onClose:()=>{setOpen(false);setPreview(null)},title:'已存'+label+'管理'},
      h('p',{className:'fish-muted'},'关闭存储只停止新增归档，已有内容可继续管理。这里删除的是归档副本，DSH 会话附件由宿主单独管理。'),
      h('div',{className:'fish-actions'},h('button',{type:'button',className:'fish-button',disabled:busy,onClick:()=>load().catch(e=>setError(e.message))},'刷新存储'),selected?h('button',{type:'button',className:'fish-button',onClick:()=>setPreview(null)},'返回图片列表'):null),
      error||data?.error?h('p',{className:'fish-message',role:'alert'},error||data.error):null,
      selected?h('div',null,h('h3',null,selected.name),h('img',{className:'fish-sticker-preview-image',src:selected.url,alt:selected.name})):
        h('div',{className:kind==='images'?'fish-sticker-grid':undefined},...items.map(item=>h('article',{key:item.id,className:kind==='images'?'fish-sticker-tile':'fish-archive-file'},
          kind==='images'?h('button',{type:'button',className:'fish-sticker-thumb','aria-label':'预览已存图片 '+item.name,onClick:()=>setPreview(item)},h('img',{src:item.url,alt:'',loading:'lazy',width:144,height:120})):null,
          h('div',{className:'fish-archive-name'},h('h3',null,item.name),h('p',{className:'fish-muted'},size(item.size)+' · '+item.source+' · '+new Date(item.createdAt).toLocaleString())),
          h('div',{className:'fish-actions'},h('a',{href:item.url,download:item.name,className:'fish-button'},'下载'),h('button',{type:'button',className:'fish-button',disabled:busy,onClick:()=>remove(item)},'删除归档'))))),
      !items.length?h('p',{className:'fish-muted'},'尚无已存'+label+'。开启对应存储开关并保存后，新接收的内容会归档到专用文件夹。'):null))
}

// 大肥鱼通用表单控件：输入框 / 下拉框 / 多行文本。
// 全局面板仍会统一修饰原生控件；这些组件给新页面提供一致的结构与图标位。
function FishInput({ icon, className = '', ...props } = {}) {
  const React = require('react'), h = React.createElement
  return h('span', { className: 'fish-input-box' + (className ? ' ' + className : '') },
    icon ? h('span', { className: 'fish-input-icon', 'aria-hidden': true }, icon) : null,
    h('input', { ...props, className: 'fish-input' + (icon ? ' fish-input-with-icon' : '') }))
}

function FishSelect({ children, className = '', ...props } = {}) {
  const React = require('react'), h = React.createElement
  return h('span', { className: 'fish-select-box' + (className ? ' ' + className : '') },
    h('select', { ...props, className: 'fish-select-input' }, children))
}

function FishTextarea({ className = '', ...props } = {}) {
  const React = require('react'), h = React.createElement
  return h('textarea', { ...props, className: 'fish-textarea-input' + (className ? ' ' + className : '') })
}

// 全局 select 浮层：接管原生下拉菜单，统一成手帐风格。
function FishSelectLayer() {
  const React = require('react'), h = React.createElement
  const [popup, setPopup] = React.useState(null)
  const popupRef = React.useRef(null)
  const selectRef = React.useRef(null)
  const lastClosed = React.useRef({ select: null, at: 0 })

  const close = (focus = true, toggle = false) => {
    const select = selectRef.current
    selectRef.current = null
    if (toggle && select) lastClosed.current = { select, at: Date.now() }
    if (select) {
      select.removeAttribute('aria-expanded')
      if (focus && typeof document !== 'undefined' && document.contains(select)) select.focus({ preventScroll: true })
    }
    setPopup(null)
  }

  const open = (select) => {
    if (!select || select.disabled || select.multiple) return
    if (selectRef.current === select) { close(true, true); return }
    const options = Array.from(select.options).map((option, index) => ({
      value: option.value,
      label: String(option.textContent || '').trim(),
      disabled: option.disabled,
      selected: index === select.selectedIndex,
    }))
    if (!options.length) return
    if (popupRef.current) {
      selectRef.current?.removeAttribute('aria-expanded')
    }
    const rect = select.getBoundingClientRect()
    const width = Math.max(220, Math.ceil(rect.width))
    const left = Math.min(Math.max(8, rect.left), Math.max(8, window.innerWidth - width - 8))
    const below = Math.max(0, window.innerHeight - rect.bottom - 12)
    const above = Math.max(0, rect.top - 12)
    const wanted = Math.min(300, options.length * 42 + 14)
    const openUp = below < wanted && above > below
    const maxHeight = Math.max(80, Math.min(300, openUp ? above : below))
    const top = openUp ? Math.max(8, rect.top - maxHeight - 6) : rect.bottom + 6
    const selectedIndex = Math.max(0, select.selectedIndex)
    selectRef.current = select
    select.setAttribute('aria-expanded', 'true')
    select.setAttribute('aria-haspopup', 'listbox')
    setPopup({ select, options, active: selectedIndex, left, top, width, maxHeight })
  }

  const choose = (option) => {
    const select = selectRef.current
    if (!select || option.disabled) return
    const setter = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value')?.set
    if (setter) setter.call(select, option.value)
    else select.value = option.value
    select.dispatchEvent(new Event('input', { bubbles: true }))
    select.dispatchEvent(new Event('change', { bubbles: true }))
    close(true)
  }

  React.useEffect(() => {
    if (typeof document === 'undefined') return undefined
    const onPointerDown = (event) => {
      const target = event.target
      if (popupRef.current && target instanceof Node && popupRef.current.contains(target)) return
      const select = target && target.closest ? target.closest('select') : null
      if (select && select.closest('.big-fish') && !select.disabled && !select.multiple) {
        event.preventDefault()
        event.stopPropagation()
        open(select)
        return
      }
      if (popupRef.current) close(false)
    }
    const onClick = (event) => {
      const target = event.target
      const select = target && target.closest ? target.closest('select') : null
      if (select) { event.preventDefault(); event.stopPropagation() }
    }
    const onMouseDown = (event) => {
      const target = event.target
      const select = target && target.closest ? target.closest('select') : null
      if (!select || !select.closest('.big-fish') || select.disabled || select.multiple) return
      event.preventDefault()
      event.stopPropagation()
      const closed = lastClosed.current
      if (closed.select === select && Date.now() - closed.at < 300) return
      if (!popupRef.current || selectRef.current !== select) open(select)
    }
    const onKeyDown = (event) => {
      const target = event.target
      if (!target || target.tagName !== 'SELECT' || !target.closest?.('.big-fish')) return
      if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
        event.preventDefault()
        open(target)
      }
    }
    const onViewportChange = (event) => {
      if (!popupRef.current) return
      if (event?.target instanceof Node && popupRef.current.contains(event.target)) return
      close(false)
    }
    document.addEventListener('pointerdown', onPointerDown, true)
    document.addEventListener('mousedown', onMouseDown, true)
    document.addEventListener('click', onClick, true)
    document.addEventListener('keydown', onKeyDown, true)
    window.addEventListener('scroll', onViewportChange, true)
    window.addEventListener('resize', onViewportChange)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown, true)
      document.removeEventListener('mousedown', onMouseDown, true)
      document.removeEventListener('click', onClick, true)
      document.removeEventListener('keydown', onKeyDown, true)
      window.removeEventListener('scroll', onViewportChange, true)
      window.removeEventListener('resize', onViewportChange)
    }
  }, [])

  React.useEffect(() => {
    if (popup) popupRef.current?.focus({ preventScroll: true })
  }, [popup && popup.select])

  React.useEffect(() => {
    if (!popup) return
    const active = popupRef.current?.querySelector('.fish-select-option.is-active')
    active?.scrollIntoView({ block: 'nearest' })
  }, [popup && popup.active])

  if (!popup) return null
  const move = (step) => {
    if (!popup.options.length) return
    let next = popup.active
    for (let i = 0; i < popup.options.length; i++) {
      next = (next + step + popup.options.length) % popup.options.length
      if (!popup.options[next].disabled) break
    }
    setPopup(current => current ? { ...current, active: next } : current)
  }
  const onKeyDown = (event) => {
    if (event.key === 'Escape') { event.preventDefault(); close(true); return }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); move(event.key === 'ArrowDown' ? 1 : -1); return }
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); choose(popup.options[popup.active]); return }
    if (event.key === 'Tab') close(false)
  }
  return h('div', {
    ref: popupRef, className: 'fish-select-popup', role: 'listbox', tabIndex: -1,
    'aria-label': popup.select.getAttribute('aria-label') || '选项',
    style: { left: popup.left + 'px', top: popup.top + 'px', width: popup.width + 'px', maxHeight: popup.maxHeight + 'px' },
    onKeyDown, onPointerDown: event => event.stopPropagation(),
  }, ...popup.options.map((option, index) => h('button', {
    key: index, type: 'button', role: 'option', disabled: option.disabled,
    'aria-selected': option.selected ? 'true' : 'false',
    className: 'fish-select-option' + (index === popup.active ? ' is-active' : ''),
    onClick: () => choose(option),
    onMouseEnter: () => setPopup(current => current ? { ...current, active: index } : current),
  }, h('span', null, option.label))))
}

// 大肥鱼整合修改：供主界面直接挂载，更新入口统一到「更新与来源」。
// DSH「通到 QQ」· 网页半边
//
// 在 **DSH 设置** 左侧栏加一项「通到 QQ」，Plus 增加历史导入页。
// 绑定是核心：一行 = 一个聊天（私聊 或 群）→ 一间 DSH 会话，各回各的，不串。
//
// 注意：这里不碰会话、不发消息，只是往宿主那几条 /dsh-qq-bridge/* 路由上读写。

moduleLoader.load({
  id: 'dsh-qq-link-plus',
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports

    const React = require('react')
    const inject = ['slots']

    const B = '/dsh-qq-bridge'
    const get = (p) => fetch(B + p, { cache: 'no-store' }).then((r) => r.json()).catch(() => null)
    const post = (p, body) =>
      fetch(B + p, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body || {}) })
        .then((r) => r.json())
        .catch(() => null)

    const h = React.createElement

    const S = {
      wrap: { padding: '0 0 24px', fontSize: 'var(--fish-body)', lineHeight: 1.75, minWidth: 0 },
      h: { fontFamily: 'var(--fish-title)', fontSize: 20, fontWeight: 700, margin: '0 0 16px', lineHeight: 1.5 },
      dim: { color: 'var(--fish-muted)', fontSize: 'var(--fish-small)' },
      card: { border: '1px solid var(--fish-border)', borderRadius: 'var(--fish-radius)', padding: '24px', marginBottom: 8, minWidth: 0, background: 'var(--fish-panel)', boxShadow: 'var(--fish-shadow)' },
      row: { display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap' },
      lab: { flex: '0 1 200px', paddingTop: 8, fontSize: 'var(--fish-label)', fontWeight: 550 },
      ctl: { flex: '1 1 260px', minWidth: 0 },
      hint: { color: 'var(--fish-muted)', fontSize: 'var(--fish-small)', marginTop: 8, lineHeight: 1.75 },
      input: { border: '1px solid var(--fish-control-border)', borderRadius: 'var(--fish-radius-sm)', padding: '8px 12px', background: 'var(--fish-surface)', color: 'var(--fish-text)', fontSize: 'var(--fish-label)', width: '100%', maxWidth: '100%', boxSizing: 'border-box' },
      small: { border: '1px solid var(--fish-control-border)', borderRadius: 'var(--fish-radius-sm)', padding: '8px 12px', background: 'var(--fish-surface)', color: 'var(--fish-text)', fontSize: 'var(--fish-label)', width: 136, maxWidth: '100%', boxSizing: 'border-box' },
      wide: { border: '1px solid var(--fish-control-border)', borderRadius: 'var(--fish-radius-sm)', padding: '8px 12px', background: 'var(--fish-surface)', color: 'var(--fish-text)', fontSize: 'var(--fish-label)', width: '100%', boxSizing: 'border-box' },
      ta: { border: '1px solid var(--fish-control-border)', borderRadius: 'var(--fish-radius-sm)', padding: '12px', background: 'var(--fish-surface)', color: 'var(--fish-text)', fontSize: 'var(--fish-body)', width: '100%', minHeight: 112, boxSizing: 'border-box', lineHeight: 1.75, fontFamily: 'inherit', resize: 'vertical' },
      ok: { color: 'var(--fish-success)', fontSize: 'var(--fish-small)' },
      warn: { color: 'var(--fish-warning)', border: '1px solid var(--fish-border)', background: 'var(--fish-soft)', borderRadius: 'var(--fish-radius-sm)', padding: 16, marginBottom: 16 },
      已同步: { margin: '8px 0 20px', fontSize: 'var(--fish-small)', color: 'var(--fish-success)' },
      未保存: { margin: '8px 0 20px', fontSize: 'var(--fish-small)', color: 'var(--fish-warning)', fontWeight: 550 },
      btn: { border: '1px solid var(--fish-border)', borderRadius: 'var(--fish-radius-sm)', padding: '8px 16px', background: 'var(--fish-control-fill)', color: 'var(--fish-text)', fontSize: 'var(--fish-label)', cursor: 'pointer' },
      btnOn: { border: '1px solid var(--fish-action)', borderRadius: 'var(--fish-radius-sm)', padding: '8px 16px', background: 'var(--fish-action)', color: 'var(--fish-on-accent)', fontSize: 'var(--fish-label)', cursor: 'pointer' },
      tabBar: { display: 'flex', gap: 8, overflowX: 'auto', margin: '16px 0 24px', paddingBottom: 16, borderBottom: '1px solid var(--fish-border)' },
      stack: { display: 'grid', gap: 20 },
      grid: { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 20, alignItems: 'start' },
      group: { borderTop: '1px solid var(--fish-border)', padding: '20px 0' },
      summary: { fontWeight: 600, fontSize: 16, cursor: 'pointer', padding: '8px 0 16px' },
      日志行: { fontFamily: 'ui-monospace, Consolas, monospace', fontSize: 'var(--fish-small)', whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', padding: '8px 0', borderBottom: '1px solid var(--fish-line)' },
      表头: {}, 表格行: {}, 空间表头: {}, 空间行: {},
      表头字: { fontSize: 'var(--fish-small)', color: 'var(--fish-muted)' },
      已勾: { border: '1px solid var(--fish-border)', background: 'var(--fish-soft)', borderRadius: 'var(--fish-radius-sm)', padding: '12px 16px', fontSize: 'var(--fish-small)' },
      清单: { border: '1px solid var(--fish-border)', borderRadius: 'var(--fish-radius-sm)', marginTop: 12, maxHeight: 320, overflowY: 'auto' },
      会话行: { display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', padding: '12px 16px', cursor: 'pointer', borderBottom: '1px solid var(--fish-line)' },
      会话行勾上: { background: 'var(--fish-accent-soft)', fontWeight: 550 },
      tag: { display: 'inline-block', border: '1px solid var(--fish-border)', borderRadius: 20, padding: '2px 8px', fontSize: 'var(--fish-small)', marginRight: 8 }
    }

    const 提示 = (文本) => h('div', { style: S.hint }, 文本)
    const 行 = (标签, 控件, 说明) =>
      h('div', { className: 'fish-form-row', style: S.row }, h('div', { className: 'fish-form-label', style: S.lab }, 标签), h('div', { className: 'fish-control', style: S.ctl }, (['input', 'select', 'textarea'].includes(控件?.type) ? React.cloneElement(控件, { 'aria-label': 标签 }) : 控件), 说明 ? 提示(说明) : null))
    const 按钮 = (文字, onClick, 亮, 关) =>
      h('button', { type: 'button', className: 亮 ? 'fish-primary' : '', style: 亮 ? S.btnOn : S.btn, onClick, disabled: !!关, title: 文字 }, 文字)
    const 勾 = (值, onChange, label = '切换设置', disabled = false) => h('input', {'aria-label': label, type: 'checkbox', role: 'switch', checked: !!值, disabled, onChange: (e) => onChange(e.target.checked) })
    const 短id = (id) => {
      const s = String(id)
      return s.length <= 8 ? s : s.slice(-8)
    }

    const 页签们 = ['连接', '绑定', '消息策略', '角色设定', '表情包', '语音转写', '语音发送', 'QQ 空间', '图片与文件']

    function QQSpaceActions({ 配置, 脏, notify }) {
      const [busy, setBusy] = React.useState(false)
      // 旧的内联操作提示保留占位，实际消息已走 DSH Toast。
      const [message, setMessage] = React.useState('')
      const [images, setImages] = React.useState('')
      const [qq, setQQ] = React.useState('')
      const [tid, setTid] = React.useState('')
      const [result, setResult] = React.useState('')
      const imageList = images.split(/\r?\n/).map(x => x.trim()).filter(Boolean)
      const tell = (text, options) => { if (typeof notify === 'function') notify(text, options) }
      const run = async (path, body, read = false) => {
        setBusy(true)
        try {
          const r = await post(path, body)
          if (!r?.ok) throw new Error(r?.说 || '请求失败，请检查后端连接')
          if (read) setResult(r.说)
          tell(r.说 || '已完成', { tone: 'success' })
        } catch (e) { tell('操作失败：' + e.message, { holdMs: 6000 }) }
        finally { setBusy(false) }
      }
      const imageField = 行('图片地址（每行一张）', h('textarea', { style: S.ta, value: images, placeholder: 'https://example.com/photo.jpg', onChange: e => setImages(e.target.value) }),
        '已填写 ' + imageList.length + ' / ' + 9 + ' 张。支持 HTTP(S) 地址和本地图片路径；空间配图路径由 QQ 后端读取。')
      const blocked = busy || 脏
      if (配置.空间浏览开 === false) return null
      return h('section', { className: 'fish-card qq-space-browse', style: S.card },
        h('div', { className: 'qq-space-browse-head' },
          h('h2', null, '浏览动态与评论'),
          h('p', { className: 'fish-muted' }, '查看好友动态、说说正文和评论；此处只读，不会点赞或代发评论。')),
        h('div', { className: 'qq-space-browse-grid' },
          h('label', { className: 'qq-space-field' },
            h('span', null, '查看谁的空间'),
            h('input', { style: S.wide, value: qq, inputMode: 'numeric', placeholder: '留空查看机器人自己的空间', onChange: e => setQQ(e.target.value) })),
          h('label', { className: 'qq-space-field' },
            h('span', null, '说说 ID'),
            h('input', { style: S.wide, value: tid, inputMode: 'numeric', placeholder: '填写说说列表中的 tid', onChange: e => setTid(e.target.value) }))),
        h('div', { className: 'fish-actions qq-space-browse-actions' },
          按钮('查看好友动态', () => run('/space', { action: 'qq_space_feeds', args: { count: 20 } }, true), false, busy),
          按钮('查看说说列表', () => run('/space', { action: 'qq_space_list', args: { qq, num: 20 } }, true), false, busy),
          按钮('查看正文与评论', () => run('/space', { action: 'qq_space_detail', args: { qq, tid: Number(tid) } }, true), false, busy || !/^\d+$/.test(tid))),
        h('pre', { className: 'fish-feed-result', role: 'status' }, result || '选择上方操作，动态会显示在这里。'))
    }

    function Section({ page, onPageChange, guard, notify, help, hideHelp, laterHideHelp, confirm, editRole, openRoleWriter, openFileManager, embedded = false } = {}) {
      const [态, 设态] = React.useState(null)
      const [脏, 设脏] = React.useState(false)
      const [忙, 设忙] = React.useState(false)
      // 旧的内联提示状态保留占位：提示已改由 DSH Toast 显示，保持 hook 顺序与旧测试/宿主兼容。
      const [说, 设说] = React.useState('')
      const 告知 = (text, options) => { if (typeof notify === 'function') notify(text, options) }
      const [localPage, setLocalPage] = React.useState('连接')
      const 页 = page ?? localPage
      const 设页 = onPageChange ?? setLocalPage
      const [asr, 设asr] = React.useState(null)
      const [asr忙, 设asr忙] = React.useState(false)
      const [群规则行, 设群规则行] = React.useState(null) // 哪一行展开了群规则
      const [人设忙, 设人设忙] = React.useState(false)
      const [人设说, 设人设说] = React.useState('')
      const [历史绑定, 设历史绑定] = React.useState('')
      const [历史文件, 设历史文件] = React.useState(null)
      const [历史AI, 设历史AI] = React.useState('')
      const [历史页数, 设历史页数] = React.useState(100)
      const [历史任务, 设历史任务] = React.useState(null)
      const [历史列表, 设历史列表] = React.useState([])
      const [历史忙, 设历史忙] = React.useState(false)
      const [历史说, 设历史说] = React.useState('')
      const [历史控制] = React.useState({ stop: false, running: false })
      const [已存绑定, 设已存绑定] = React.useState([])
      // 新增状态放在 hook 列表末尾，避免影响旧测试和宿主的状态槽顺序。
      const [编辑行, 设编辑行] = React.useState(null)
      const [启动检查中, 设启动检查中] = React.useState(false)
      const [新建映射, 设新建映射] = React.useState(null)
      const [新建忙, 设新建忙] = React.useState(false)
      const [新建错误, 设新建错误] = React.useState('')
      const [新建查名忙, 设新建查名忙] = React.useState(false)
      const [新建查名说, 设新建查名说] = React.useState('')
      const saveRef = React.useRef(null)
      const 总开关校验 = React.useRef(0)
      const 编辑快照 = React.useRef(null)
      const 最新配置 = React.useRef(null)
      const 新建计时 = React.useRef(null)
      最新配置.current = 态?.配置

      React.useEffect(() => {
        get('/history/jobs').then(r => r && r.ok && 设历史列表(r.jobs))
        return () => { 历史控制.stop = true; 总开关校验.current += 1 }
      }, [])

      React.useEffect(() => {
        拉()
        get('/asr-status').then((r) => r && 设asr(r)).catch(() => {})
      }, [])
      // 装依赖的时候每 2 秒看一眼进度（装完就停）
      React.useEffect(() => {
        if (!asr || !asr.进行中) return undefined
        const t = setInterval(() => {
          get('/asr-status').then((r) => { if (r) 设asr(r) }).catch(() => {})
        }, 2000)
        return () => clearInterval(t)
      }, [asr && asr.进行中])

      const 拉 = async () => {
        const s = await get('/state')
        if (s) { 设态(s); 设已存绑定(Array.isArray(s.配置?.绑定) ? s.配置.绑定 : []); 设编辑行(null); 编辑快照.current = null }
      }
      // 只刷新会话下拉需要的数据，不覆盖正在编辑的绑定草稿。
      const 刷新会话 = async () => {
        const s = await get('/state')
        if (!s) return
        设态(旧 => 旧 ? {
          ...旧,
          活着的会话: Array.isArray(s.活着的会话) ? s.活着的会话 : 旧.活着的会话,
          日志: Array.isArray(s.日志) ? s.日志 : 旧.日志,
          NapCat状态: s.NapCat状态 ?? 旧.NapCat状态,
          工作区列表: Array.isArray(s.工作区列表) ? s.工作区列表 : 旧.工作区列表,
          工作区错误: s.工作区错误 || '',
        } : 旧)
      }
      // ⭐ 1.1.2：人设「现在就生效」—— 不用等 QQ 那边来一条消息
      const 应用人设 = async () => {
        设人设忙(true)
        const r = await post('/persona-apply', {})
        设人设忙(false)
        if (!r || !r.ok) {
          告知('角色设定应用失败：' + ((r && r.说) || '请求未响应'), { holdMs: 6000 })
          return
        }
        const 行们 = Array.isArray(r.结果们) ? r.结果们 : []
        if (!行们.length) {
          告知('暂无可以应用角色设定的会话绑定')
          return
        }
        const 不顺 = 行们.filter((x) => !x.生效)
        告知((r.生效 ? '' + r.生效 + ' 个会话已应用' : '未应用到任何会话')
          + (不顺.length ? '；' + 不顺.map((x) => x.聊天 + '：' + x.说).join('；') : ''), { tone: r.生效 ? 'success' : undefined })
      }
      const 切换人设 = async (v) => {
        if (人设忙 || 忙) return
        if (v && !String(配置.人设 || '').trim()) {
          告知('请先填写全局角色设定，再打开开关', { holdMs: 6000 })
          return
        }
        const 旧状态 = Boolean(配置.人设开)
        if (Boolean(v) === 旧状态) return
        const 下一份配置 = { ...((态 && 态.配置) || {}), 人设开: Boolean(v) }
        改('人设开', Boolean(v))
        const 保存成功 = await 存(下一份配置)
        if (!保存成功) {
          改('人设开', 旧状态)
          return
        }
        await 应用人设()
      }
      const 改 = (k, v) => {
        设态((旧) => (旧 ? { ...旧, 配置: { ...(旧.配置 || {}), [k]: v } } : 旧))
        设脏(true)
      }
      // —— 绑定：整份数组替换（宿主那边会再规整一遍、并挡掉重复）——
      const 绑定们 = () => {
        const a = 态 && 态.配置 && 态.配置.绑定
        return Array.isArray(a) ? a : []
      }
      const 设绑定 = (下一份) => 改('绑定', 下一份)
      const 改绑定 = (i, 补) => 设绑定(绑定们().map((x, j) => (j === i ? { ...x, ...补 } : x)))
      const 加绑定 = (类型 = '群') => {
        const 脏前 = 脏
        const 新行 = { 类型, 号码: '', 会话: '', 称呼: '', 门槛: false, 开: false }
        // 群聊的收消息范围改为每条绑定自己说了算；新群默认仅点名（主动回应关闭）。
        if (类型 === '群') 新行.只听点名 = true
        const 下一份 = [...绑定们(), 新行]
        设绑定(下一份)
        编辑快照.current = { index: 下一份.length - 1, existed: false, row: null, dirtyBefore: 脏前 }
        设编辑行(下一份.length - 1)
        void 刷新会话()
      }
      const 打开新建 = (类型) => {
        if (编辑行 != null) { 告知('请先完成当前的映射编辑'); return }
        设新建错误(''); 设新建查名说('')
        if (新建计时.current) { clearTimeout(新建计时.current); 新建计时.current = null }
        设新建映射({ 类型, 号码: '', 称呼: '', 门槛: false, 主动: false, 开: true })
      }
      const 自动拉名称 = async (类型, 号码) => {
        if (!/^[1-9]\d*$/.test(号码)) return
        设新建查名忙(true)
        try {
          const r = await post('/lookup-name', { 类型, 号码 })
          if (!r || !r.ok) throw new Error('lookup failed')
          设新建映射(old => old && String(old.号码) === 号码 ? { ...old, 称呼: String(r.名称 || '') } : old)
          设新建查名说('')
        } catch (e) {
          设新建查名说('拉取失败，请自行填写 QQ 昵称/群名称')
        } finally { 设新建查名忙(false) }
      }
      const 安排拉名称 = (类型, 号码) => {
        if (新建计时.current) { clearTimeout(新建计时.current); 新建计时.current = null }
        设新建查名说('')
        if (!/^[1-9]\d*$/.test(号码)) return
        新建计时.current = setTimeout(() => {
          新建计时.current = null
          void 自动拉名称(类型, 号码)
        }, 450)
      }
      const 创建映射 = async () => {
        if (!新建映射 || 新建忙) return
        const 号码 = String(新建映射.号码 || '').trim()
        const 名称 = String(新建映射.称呼 || '').trim()
        if (!/^[1-9]\d*$/.test(号码)) { 设新建错误(新建映射.类型 === '群' ? '请填写有效的群号' : '请填写有效的 QQ 号'); return }
        if (!名称) { 设新建错误(新建映射.类型 === '群' ? '请填写群名' : '请填写 QQ 名'); return }
        设新建忙(true); 设新建错误('')
        try {
          const r = await post('/create-session', { 名称: 名称 + ' - ' + 号码 })
          if (!r || !r.ok) throw new Error((r && (r.说 || r.error)) || '创建会话失败')
          const 行 = { 类型: 新建映射.类型, 号码, 会话: r.会话, 称呼: 名称, 门槛: Boolean(新建映射.门槛), 开: 新建映射.开 !== false }
          if (新建映射.类型 === '群') 行.只听点名 = !新建映射.主动
          设绑定([...绑定们(), 行])
          设新建映射(null); 设编辑行(null)
          告知('会话已创建，映射已加入草稿；请保存设置。', { tone: 'success' })
          await 刷新会话()
        } catch (e) { 设新建错误(e.message) } finally { 设新建忙(false) }
      }
      const 删绑定 = (i) => {
        设绑定(绑定们().filter((_, j) => j !== i))
        设编辑行(old => old === null ? null : old === i ? null : old > i ? old - 1 : old)
        const 快照 = 编辑快照.current
        if (快照) {
          if (快照.index === i) 编辑快照.current = null
          else if (快照.index > i) 快照.index--
        }
        void 刷新会话()
      }
      const 开始编辑 = (i) => {
        const 目标 = 绑定们()[i]
        if (!目标) return
        编辑快照.current = { index: i, existed: true, row: { ...目标 }, dirtyBefore: 脏 }
        设编辑行(i)
        void 刷新会话()
      }
      const 结束编辑 = () => {
        const 快照 = 编辑快照.current
        if (快照 && 快照.index != null) {
          const 当前 = 绑定们()
          if (!快照.existed) 设绑定(当前.filter((_, j) => j !== 快照.index))
          else if (当前[快照.index]) 设绑定(当前.map((x, j) => j === 快照.index ? 快照.row : x))
          设脏(快照.dirtyBefore)
        }
        设编辑行(null)
        编辑快照.current = null
        void 刷新会话()
      }
      const 取消行编辑 = async () => {
        if (typeof confirm !== 'function') { 结束编辑(); return }
        const ok = await confirm({
          title: '是否取消编辑？',
          description: '当前行尚未保存的修改将被撤销。',
          confirmText: '取消编辑',
          cancelText: '继续编辑',
        })
        if (ok) 结束编辑()
      }

      const 存 = async (覆盖配置) => {
        设忙(true)
        const 当前配置 = 覆盖配置 || (态 && 态.配置) || {}
        // 旧群没有 只听点名 时沿用全局「群里听所有人」。首次保存把当前有效值固化到每条群绑定，
        // 之后每条群都用「主动回应」自己的开关，不再需要在回复门槛里保留全局开关。
        const 待存 = Array.isArray(当前配置.绑定)
          ? { ...当前配置, 绑定: 当前配置.绑定.map(x => (x && (x.类型 || '群') === '群' && x.只听点名 == null)
              ? { ...x, 只听点名: !当前配置.群里听所有人 }
              : x) }
          : 当前配置
        const s = await post('/save', 待存)
        设忙(false)
        if (s && s.ok) {
          设态(s)
          设已存绑定(Array.isArray(s.配置?.绑定) ? s.配置.绑定 : [])
          设编辑行(null)
          编辑快照.current = null
          设脏(false)
          告知(s.说 || '设置已保存', { tone: 'success' })
          void 刷新会话()
          return true
        }
        if (s?.启动检查失败) 改('总开关', false)
        告知((s && s.说) || '保存失败', { holdMs: s?.启动检查失败 ? 14000 : 6000 })
        return false
      }
      saveRef.current = 存
      React.useEffect(() => {
        if (!guard) return
        guard.current = { dirty: 脏, save: () => saveRef.current?.() }
        return () => { if (guard) guard.current = { dirty: false, save: null } }
      }, [脏, guard])
      const 装语音 = async () => {
        设asr忙(true)
        const r = await post('/asr-install', {})
        告知((r && r.说) || '任务已启动', { tone: 'success' })
        设asr忙(false)
        const s2 = await get('/asr-status')
        if (s2) 设asr(s2)
      }
      const 填语音命令 = async () => {
        const r = await get('/asr-status')
        if (r) 设asr(r)
        if (r && r.就绪 && r.命令) {
          改('语音转写', true)
          改('转写命令', r.命令)
          告知(String(配置.语音模型目录 || '').trim()
            ? '命令已填写，请保存设置'
            : '请填写语音模型目录后重新生成命令')
        } else if (r && !r.就绪) 告知('请先安装语音依赖')
        else 告知('无法读取状态')
      }

      const 试一句 = async () => {
        设忙(true)
        const s = await post('/test-send', {})
        设忙(false)
        告知((s && s.说) || '请求未响应')
        await 拉()
      }

      if (!态) return h('div', { className: 'fish-module fish-qq', style: S.wrap }, h('div', { className: 'fish-section-title', style: S.h }, '连接与转发'), h('div', { style: S.dim }, '读取中…'))

      const 配置 = 态.配置 || {}
      const 目标们 = Array.isArray(态.活着的会话) ? 态.活着的会话 : []
      const 日志 = Array.isArray(态.日志) ? 态.日志 : []
      const 绑定 = 绑定们()

      const 会话选项 = (值, onChange) =>
        h('select', {'aria-label': '目标会话', style: S.wide, value: 值 || '', onChange: (e) => onChange(e.target.value) },
          h('option', { value: '' }, '请选择目标会话'),
          ...目标们.map((s) => h('option', { value: s.id }, (s.标题 || '…' + 短id(s.id)) + ' · ' + 短id(s.id))),
          值 && !目标们.some((s) => s.id === 值)
            ? h('option', { value: 值 }, '（当前：' + 短id(值) + '）')
            : null)

      // ── 绑定表格：私聊和群聊分开，一行一条；长会话名也不换行 ──
      const 私聊们 = 绑定.map((x, i) => ({ x, i })).filter(({ x }) => (x.类型 || '群') === '私聊')
      const 群们 = 绑定.map((x, i) => ({ x, i })).filter(({ x }) => (x.类型 || '群') === '群')
      const 私聊编辑中 = 编辑行 != null && 私聊们.some(({ i }) => i === 编辑行)
      const 群编辑中 = 编辑行 != null && 群们.some(({ i }) => i === 编辑行)
      const 点名开 = x => x.类型 === '群' && (x.只听点名 == null ? !配置.群里听所有人 : Boolean(x.只听点名))
      const 字段说明 = {
        '称呼': '转给模型时对消息来源的描述，主要用于图片提示；例如私聊填“小明”，模型会看到“小明发来了图片”；群聊建议填“群友”等统称。',
        '回复门槛': '开启后，模型判断消息是否需要回复；未通过判断时不向 QQ 发送回复。',
        '主动回应': '控制这个群是否只接收点名大肥鱼的消息。关闭后，通常需要 @大肥鱼、引用大肥鱼的消息，或正文命中配置的“点名关键词”才接收；@全体不算。开启后，普通群消息也可以进入后续处理。',
      }
      const 会话名 = (id) => {
        if (!id) return '未选择会话'
        const 会话 = 目标们.find((s) => s.id === id)
        return 会话 ? (会话.标题 || '…' + 短id(会话.id)) : '…' + 短id(id)
      }
      const 状态标 = (开, 名称) => h('span', {
        className: 'qq-bind-mark', 'data-on': 开 ? 'true' : 'false', role: 'img',
        'aria-label': 名称 + (开 ? '：已开启' : '：未开启'),
      }, 开 ? '✓' : '✗')
      const 跳到回复门槛 = () => {
        if (typeof hideHelp === 'function') hideHelp()
        设页('消息策略')
        let 尝试 = 0
        const 滚动到卡片 = () => {
          const 目标 = typeof document !== 'undefined' ? document.getElementById('qq-reply-threshold') : null
          if (目标 && 目标.getClientRects().length) {
            目标.scrollIntoView({ behavior: 'smooth', block: 'center' })
            目标.classList.remove('fish-jump-flash')
            void 目标.offsetWidth
            目标.classList.add('fish-jump-flash')
            setTimeout(() => 目标.classList.remove('fish-jump-flash'), 1500)
            return
          }
          if (++尝试 < 20) setTimeout(滚动到卡片, 60)
        }
        setTimeout(滚动到卡片, 80)
      }
      const 表头格 = 文字 => {
        const 说明 = 字段说明[文字]
        const 帮助链接 = 文字 === '回复门槛' ? { text: '点击跳转回复门槛设置', onClick: 跳到回复门槛 } : null
        const 显示说明 = (e) => { if (typeof help === 'function') help(说明, e.currentTarget, 文字, 帮助链接) }
        const 稍后收起 = () => {
          if (typeof laterHideHelp === 'function') laterHideHelp()
          else if (typeof hideHelp === 'function') hideHelp()
        }
        const 立即收起 = () => { if (typeof hideHelp === 'function') hideHelp() }
        return h('div', { className: 说明 ? 'qq-bind-field-label' : undefined, style: S.表头字 }, 文字,
          说明 ? h('button', {
            type: 'button', className: 'qq-field-help',
            'aria-label': 文字 + '说明：' + 说明, 'data-help': 说明,
            onMouseEnter: 显示说明, onFocus: 显示说明, onClick: 显示说明,
            onMouseLeave: 稍后收起, onBlur: 稍后收起,
            onKeyDown: (e) => { if (e.key === 'Escape') 立即收起() },
          }, '?') : null)
      }

      const 保存行 = async () => {
        if (忙) return
        await 存()
      }

      const 绑定行 = (x, i, 类型) => {
        const 编辑 = 编辑行 === i
        const 是群 = 类型 === '群'
        const 本表编辑中 = 编辑行 != null && ((绑定[编辑行] && (绑定[编辑行].类型 || '群')) === 类型)
        const 请求删除 = async () => {
          if (typeof confirm !== 'function') { 删绑定(i); return }
          const ok = await confirm({
            title: '删除这条映射？',
            description: (是群 ? '群 ' : '私聊 ') + String(x.号码 || '未填写') + ' → ' + 会话名(x.会话)
              + '。确认后会从当前草稿移除，保存设置后才真正生效。',
            confirmText: '删除',
            cancelText: '取消',
            danger: true,
          })
          if (ok) 删绑定(i)
        }
        return h(React.Fragment, { key: i },
          h('div', { className: 'qq-bind-row ' + (是群 ? 'qq-bind-row-group' : 'qq-bind-row-private') + (编辑 ? ' qq-bind-editing' : '') },
            !编辑
              ? h('span', { className: 'qq-bind-read', title: String(x.号码 || '') }, String(x.号码 || '—'))
              : h('input', {
                  'aria-label': 是群 ? '群号' : 'QQ 号',
                  style: S.wide, value: String(x.号码 || ''), placeholder: 是群 ? '群号' : 'QQ 号',
                  onChange: (e) => 改绑定(i, { 号码: e.target.value.trim() }),
                }),
            !编辑
              ? h('span', { className: 'qq-bind-read', title: String(x.称呼 || '') }, String(x.称呼 || '—'))
              : h('input', {
                  'aria-label': '对方称呼', style: S.wide, value: String(x.称呼 || ''),
                  placeholder: 是群 ? '群成员' : '对方',
                  onChange: (e) => 改绑定(i, { 称呼: e.target.value }),
                }),
            !编辑
              ? h('span', { className: 'qq-bind-read qq-bind-session-read', title: 会话名(x.会话) }, 会话名(x.会话))
              : h('div', { className: 'qq-bind-session' }, 会话选项(x.会话, (v) => 改绑定(i, { 会话: v }))),
            是群 ? h('div', { className: 'qq-bind-cell qq-bind-center' },
              编辑 ? 勾(x.门槛, (v) => 改绑定(i, { 门槛: v }), '启用回复门槛') : 状态标(Boolean(x.门槛), '回复门槛')) : null,
            是群 ? h('div', { className: 'qq-bind-cell qq-bind-center' },
              编辑 ? 勾(!点名开(x), (v) => 改绑定(i, { 只听点名: !v }), '主动回应') : 状态标(!点名开(x), '主动回应')) : null,
            h('div', { className: 'qq-bind-cell qq-bind-actions' },
              编辑
                ? [
                    h('button', { key: 'save', type: 'button', className: 'fish-button fish-primary qq-bind-save', disabled: 忙, onClick: 保存行 }, 忙 ? '保存中…' : '保存'),
                    h('button', { key: 'cancel', type: 'button', className: 'fish-button fish-modal-cancel', disabled: 忙, onClick: 取消行编辑 }, '取消'),
                  ]
                : [
                    h('button', { key: 'edit', type: 'button', className: 'fish-button', disabled: 忙, onClick: () => 开始编辑(i) }, '修改'),
                    h('button', { key: 'delete', type: 'button', className: 'fish-button', disabled: 忙, onClick: 请求删除 }, '删除'),
                  ]),
            编辑 || 本表编辑中
              ? h('div', { className: 'qq-bind-cell', 'aria-hidden': true })
              : h('div', { className: 'qq-bind-cell qq-bind-center' },
                  勾(x.开 !== false, (v) => 改绑定(i, { 开: v }), '启用收发 ' + String(x.号码 || '')))),
          是群 && 编辑
            ? h('div', { className: 'qq-bind-detail' },
                h('div', { className: 'qq-bind-detail-head' }, '群规则'),
                h('p', { style: S.dim }, 点名开(x)
                  ? '当前只接收点名消息；下面名单里的号码即使没有点名也会被接收。'
                  : '当前会主动回应普通群消息；关闭主动回应后，可在这里配置点名豁免名单。'),
                点名开(x) ? h('label', { className: 'qq-bind-extra' },
                  h('span', { className: 'qq-bind-extra-label' }, '点名豁免名单（QQ 号，以逗号或空格分隔）'),
                  h('input', {
                    'aria-label': '点名豁免名单',
                    style: { ...S.input, display: 'block', width: '100%', marginTop: 4, boxSizing: 'border-box' },
                    value: String(x.点名例外 || ''),
                    placeholder: '例如 3274796953',
                    onChange: (e) => 改绑定(i, { 点名例外: e.target.value }),
                  })) : null)
            : null)
      }

      const 加映射按钮 = (类型, 文字) => h('button', {
        type: 'button',
        className: 'fish-button' + (编辑行 != null ? ' qq-bind-add-disabled' : ''),
        'aria-disabled': 编辑行 != null || undefined,
        onClick: () => {
          if (编辑行 != null) { 告知('请先完成当前的映射编辑'); return }
          打开新建(类型)
        },
      }, 文字)

      const 私聊卡 = h('div', { style: S.card },
        h('div', { className: 'qq-bind-group-head' },
          h('h3', null, '私聊映射'),
          h('span', { className: 'fish-muted' }, 'QQ 号 → DSH 会话，一行一条。'),
          加映射按钮('私聊', '+ 添加私聊')),
        h('div', { className: 'qq-bind-scroll' },
          h('div', { className: 'qq-bind-table' + (私聊编辑中 ? ' qq-bind-hide-enable' : '') },
            h('div', { className: 'qq-bind-row qq-bind-row-private qq-bind-head' },
              表头格('QQ 号'), 表头格('称呼'), 表头格('目标会话'), 表头格('操作'),
              私聊编辑中 ? h('div', { 'aria-hidden': true, style: S.表头字 }) : 表头格('启用')),
            ...私聊们.map(({ x, i }) => 绑定行(x, i, '私聊')),
            私聊们.length ? null : h('div', { className: 'qq-bind-empty' }, '还没有私聊映射。')),
        ),
        h('div', { className: 'qq-bind-note' }, '新增或修改时只显示保存和取消；保存成功后才会出现启用、修改和删除操作。'))

      const 群卡 = h('div', { style: S.card },
        h('div', { className: 'qq-bind-group-head' },
          h('h3', null, '群聊映射'),
          h('span', { className: 'fish-muted' }, '群号 → DSH 会话；回复门槛与主动回应只对群生效。'),
          加映射按钮('群', '+ 添加群聊')),
        h('div', { className: 'qq-bind-scroll' },
          h('div', { className: 'qq-bind-table' + (群编辑中 ? ' qq-bind-hide-enable' : '') },
            h('div', { className: 'qq-bind-row qq-bind-row-group qq-bind-head' },
              表头格('群号'), 表头格('称呼'), 表头格('目标会话'), 表头格('回复门槛'), 表头格('主动回应'), 表头格('操作'),
              群编辑中 ? h('div', { 'aria-hidden': true, style: S.表头字 }) : 表头格('启用')),
            ...群们.map(({ x, i }) => 绑定行(x, i, '群')),
            群们.length ? null : h('div', { className: 'qq-bind-empty' }, '还没有群聊映射。')),
        ),
        h('div', { className: 'qq-bind-note' }, '回复门槛与主动回应仅适用于群聊；新增或修改时只显示保存和取消，保存成功后才会出现启用、修改和删除操作。'))

      const 绑定提醒 = h('div', { className: 'qq-bind-reminder', role: 'note' },
        h('span', { className: 'qq-bind-reminder-icon', 'aria-hidden': true }, '!'),
        h('span', null, '点击添加映射后，会自动在工作区创建一间会话；创建后可在表格中修改会话。'))

      const 页签 = h('div', { className: 'fish-subnav', style: S.tabBar },
        ...页签们.map((名) => h('button', { type: 'button', key: 名, 'aria-pressed': 页 === 名, style: 页 === 名 ? S.btnOn : S.btn, onClick: () => 设页(名) }, 名)))

      const 历史请求 = async (path, body, memory = false) => {
        const response = await fetch((memory ? '/dsh-fish-memory' : B + '/history') + path, {
          method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body),
        })
        let result
        try { result = await response.json() } catch { throw new Error(memory ? '记忆模块未加载，请重启 DSH 并检查大肥鱼插件状态' : '导入接口未返回 JSON') }
        if (!response.ok || !result.ok) throw new Error(result.说 || result.error || result.message || '请求失败')
        return result
      }
      const 预览历史 = async source => {
        if (历史控制.running) return
        历史控制.running = true
        设历史忙(true); 设历史说('正在读取记录…')
        try {
          if (脏) throw new Error('请先保存绑定设置')
          const binding = 绑定[Number(历史绑定)]
          if (历史绑定 === '' || !binding) throw new Error('请选择 QQ 会话绑定')
          if (source === 'file' && !历史文件) throw new Error('请选择 QCE JSON、OneBot JSON 或 QQ TXT 文件')
          if (历史文件 && source === 'file' && 历史文件.size > 50 * 1024 * 1024) throw new Error('单文件最大 50 MB，请先分文件导出')
          let content
          if (source === 'file') {
            const bytes = await 历史文件.arrayBuffer()
            // QQ 旧版 TXT 常用 GB18030；解码失败再回退，不用替换符静默损坏原文。
            try { content = new TextDecoder('utf-8', { fatal: true }).decode(bytes) }
            catch {
              if (/\.json$/i.test(历史文件.name)) throw new Error('JSON 文件须使用 UTF-8 编码')
              content = new TextDecoder('gb18030', { fatal: true }).decode(bytes)
            }
          }
          const r = await 历史请求('/prepare', { source, type: binding.类型, number: binding.号码, session: binding.会话,
            aiQQ: 历史AI, maxPages: 历史页数, filename: source === 'file' ? 历史文件.name : undefined, content })
          设历史任务(r.job)
          const list = await get('/history/jobs')
          if (list?.ok) 设历史列表(list.jobs)
          设历史说('读取完成，请核对记录范围和发言人身份。')
          告知('历史记录读取完成，请核对范围。', { tone: 'success' })
        } catch (e) { 设历史说('失败：' + e.message); 告知('历史记录读取失败：' + e.message, { holdMs: 6000 }) }
        finally { 历史控制.running = false; 设历史忙(false) }
      }
      const 整理历史 = async () => {
        if (!历史任务 || 历史控制.running) return
        历史控制.running = true; 历史控制.stop = false
        设历史忙(true)
        try {
          const res = await fetch('/dsh-fish-memory/list', { cache: 'no-store' })
          if (!res.ok) throw new Error('记忆模块未加载，请重启 DSH 并检查大肥鱼插件状态')
          const memory = await res.json()
          if (!memory.ok || !Array.isArray(memory.sessions)) throw new Error('鱼的记忆接口不兼容')
          if (memory.模式 !== 'session') throw new Error('请在「鱼的记忆」启用按会话模式，避免跨会话共享历史记录')
          const target = memory.sessions.find(s => s.id === 历史任务.session)
          if (!memory.全局开关 || !target?.enabled) throw new Error('请在「鱼的记忆」启用总开关及目标会话记忆')
          let job = 历史任务
          while (!job.done && !历史控制.stop) {
            设历史说(`正在处理 ${job.completed + 1} / ${job.total} 段（消耗模型额度）…`)
            const analysis = await 历史请求('/analyze', { id: job.id })
            if (历史控制.stop) break
            if (analysis.done) { job = analysis.job; break }
            const pending = analysis.pending
            let receipt = { ok: true, added: 0, batch: null }
            if (pending.items.length) receipt = await 历史请求('/import/apply', { session: job.session, storeId: job.memoryStoreId, items: pending.items }, true)
            const committed = await 历史请求('/commit', { id: job.id, token: pending.token, result: receipt })
            job = committed.job; 设历史任务(job)
          }
          设历史任务(job)
          设历史说(job.done ? '处理完成，可在「鱼的记忆」核查结果。' : '已暂停，可从已保存进度继续。')
          告知(job.done ? '历史整理完成，可在「鱼的记忆」核查结果。' : '历史整理已暂停，进度已保存。', { tone: job.done ? 'success' : undefined, holdMs: 6000 })
          const list = await get('/history/jobs')
          if (list?.ok) 设历史列表(list.jobs)
        } catch (e) { 设历史说('失败：' + e.message + '；进度已保存，可重试。'); 告知('历史整理失败：' + e.message + '；进度已保存，可重试。', { holdMs: 7000 }) }
        finally { 历史控制.running = false; 设历史忙(false) }
      }
      const 历史页 = h('div', { style: S.stack },
        h('div', { style: S.card },
          h('div', { className: 'fish-section-title', style: S.h }, '导入 QQ 聊天记录'),
          h('p', null, '按时间分段读取记录，通过摘要衔接上下文并写入「鱼的记忆 Plus」。目标会话需使用 DeepSeek。'),
          行('目标会话绑定', h('select', { style: S.wide, value: 历史绑定, disabled: 历史忙, 'aria-label': '历史导入绑定', onChange: e => 设历史绑定(e.target.value) },
            h('option', { value: '' }, '请选择已保存的绑定'),
            ...绑定.map((b, i) => h('option', { key: i, value: String(i) }, `${b.类型} ${b.号码} → ${b.会话}`)))),
          行('AI 对应的 QQ 号（选填）', h('input', { style: S.input, value: 历史AI, disabled: 历史忙, 'aria-label': 'AI 对应的 QQ 号', onChange: e => 设历史AI(e.target.value) }),
            '指定 AI 身份对应的 QQ 号；留空则保留原发言人姓名。'),
          行('历史读取上限（页）', h('input', { style: S.small, type: 'number', min: 1, max: 1000, value: 历史页数, disabled: 历史忙, 'aria-label': '最多读取页数', onChange: e => 设历史页数(Number(e.target.value)) }),
            '每页请求 100 条；可读取范围取决于后端缓存。'),
          按钮('读取后端记录', () => 预览历史('backend'), false, 历史忙),
          行('聊天记录文件', h('input', { type: 'file', accept: '.json,.txt', disabled: 历史忙, 'aria-label': '聊天记录文件', onChange: e => 设历史文件(e.target.files?.[0] || null) }),
            '支持 QCE 单文件 JSON、OneBot JSON、QQ 原生 TXT（UTF-8 / GB18030），单文件最大 50 MB。'),
          按钮('预览文件', () => 预览历史('file'), false, 历史忙),
          h('p', { style: S.dim }, '原文和进度保存在本机 qq-history-imports。整理将调用模型并消耗额度；图片、语音仅保留文字标记。'),
        ),
        h('div', { style: S.card },
          行('已保存任务', h('select', { style: S.wide, value: 历史任务?.id || '', disabled: 历史忙, 'aria-label': '恢复历史导入任务', onChange: e => 设历史任务(历史列表.find(j => j.id === e.target.value) || null) },
            h('option', { value: '' }, '请选择导入任务'),
            ...历史列表.map(j => h('option', { key: j.id, value: j.id }, `${j.filename} → ${j.session}（${j.completed}/${j.total}）`)))),
          历史任务 ? h('div', null,
            h('div', null, `${历史任务.format}｜${历史任务.count} 条｜去重 ${历史任务.duplicates} 条｜${历史任务.completed}/${历史任务.total} 段`),
            h('div', null, `目标：${历史任务.binding.类型} ${历史任务.binding.号码} → ${历史任务.session}；AI QQ：${历史任务.aiQQ || '未指定'}`),
            h('div', null, `时间：${历史任务.start || '未知'} ～ ${历史任务.end || '未知'}`),
            h('p', null, 历史任务.warning),
            h('progress', { value: 历史任务.completed, max: 历史任务.total, 'aria-label': '历史导入进度' }),
            h('pre', { style: { ...S.日志行, maxHeight: 240, overflow: 'auto' } }, 历史任务.preview),
            按钮(历史任务.done ? '已完成' : '开始 / 继续导入', 整理历史, true, 历史忙 || 历史任务.done),
          ) : null,
          历史忙 ? 按钮('暂停导入', () => { 历史控制.stop = true; 设历史说('正在暂停，等待当前请求结束并保存结果…') }, false, false) : null,
          h('div', { role: 'status', style: { whiteSpace: 'pre-wrap' } }, 历史说),
        ),
      )

      // ───────────── 总览 ─────────────
      const 总开关卡片 = h('div', { style: S.card },
        h('div', { style: { ...S.h, margin: '0 0 8px' } }, '大肥鱼，启动！'),
        行('总开关', 勾(配置.总开关, async v => {
          if (v && (启动检查中 || 忙)) return
          const 校验号 = ++总开关校验.current
          if (!v) { 设启动检查中(false); 改('总开关', false); return }
          const 快照 = JSON.stringify(配置)
          设启动检查中(true)
          const r = await post('/startup-check', { ...配置, 总开关: true })
          if (总开关校验.current !== 校验号) return
          设启动检查中(false)
          if (!r?.ok) {
            告知(r?.说 || '无法完成启动检查，请确认 DSH 后端正在运行后重试。', { holdMs: 14000 })
            return
          }
          if (JSON.stringify(最新配置.current) !== 快照) {
            告知('检查期间配置已修改，请重新开启总开关进行检查。', { holdMs: 8000 })
            return
          }
          改('总开关', true)
          if (r.用户) 设态(旧 => 旧 ? { ...旧, NapCat状态: { 用户: r.用户, 昵称: r.昵称 } } : 旧)
          告知(r.说 || '启动检查已通过，请保存设置后启动大肥鱼。', { tone: 'success', holdMs: 6000 })
        }, '大肥鱼总开关', 启动检查中 || 忙), 启动检查中 ? '正在检查 QQ 连接、聊天映射和 DSH 会话…' : undefined),
        行('绑定工作区', h('select', { 'aria-label': '绑定工作区', style: S.input, value: 配置.工作区 || '', onFocus: 刷新会话, onChange: e => 改('工作区', e.target.value) },
          h('option', { value: '' }, '请选择工作区'),
          配置.工作区 && !(态.工作区列表 || []).some(w => w.id === 配置.工作区) ? h('option', { value: 配置.工作区, disabled: true }, '原绑定工作区已不可用，请重新选择') : null,
          ...(态.工作区列表 || []).map(w => h('option', { key: w.id, value: w.id, disabled: w.available === false }, w.title + ' · ' + w.path + (w.available === false ? '（目录不可用）' : '')))),
          '选择将大肥鱼养在哪个工作区中'),
        态.工作区错误 ? h('p', { style: S.dim, role: 'alert' }, 态.工作区错误) : null,
      )
      const 总览卡片 = [
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '基础策略与通知'),
          行('试运行', 勾(配置.试运行, (v) => 改('试运行', v)), '仅记录发送日志，不实际发送 QQ 消息。'),
          // ⭐ 1.5.0（issue #29）：戳一戳这类通知 —— 它们不是消息，拉历史拉不到，只能让 OneBot 主动推
          行('接收 QQ 通知', 勾(配置.收通知, (v) => 改('收通知', v)),
            '通知通过 OneBot HTTP 上报接收。'
            + '上报地址：'
            + 'http://127.0.0.1:<DSH 端口>' + B + '/notice。'
            + '仅处理 notice，消息仍通过轮询接收。'),
          行('上报口令（选填）', h('input', {'aria-label': '通知口令',
            style: S.wide,
            value: String(配置.通知口令 || ''),
            placeholder: '留空不校验口令',
            onChange: (e) => 改('通知口令', e.target.value),
          }), '填写后，上报地址须附带 ?token=口令；留空不校验来源口令。'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '会话绑定（' + 绑定.length + ' 条）'),
          绑定.length === 0
            ? h('div', { style: S.dim }, '暂无绑定，请在「绑定」中添加 QQ 与 DSH 会话映射。')
            : h('div', null,
              ...绑定.map((x, i) => h('div', { key: i, style: { marginBottom: 4 } },
                (x.类型 === '群' ? '群 ' : '私聊 ') + String(x.号码 || '?')
                + ' → ' + (x.会话 ? 短id(x.会话) : '未选择会话')
                + (x.称呼 ? '　称呼：' + x.称呼 : '')
                + (x.类型 === '群' && x.门槛 ? '　回复门槛：已启用' : '')))),
          h('div', { style: { marginTop: 6 } }, 按钮('管理配置', () => 设页('绑定'))),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '最近 ' + 日志.length + ' 条日志（按时间升序）'),
          h('div', { style: { marginTop: 6, maxHeight: 220, overflowY: 'auto' } },
            日志.length === 0
              ? h('div', { style: S.dim }, '暂无日志。')
              : 日志.map((条, i) => h('div', { key: i, style: S.日志行 }, 条.时间 + '　' + 条.文本))),
        ),
      ]

      // ───────────── 绑定 ─────────────
      const 绑定卡片 = [
        h('div', { style: S.card },
          h('div', { className: 'qq-role-head' },
            h('h2', { style: { ...S.h, margin: 0 } }, '全局角色设定'),
            h('label', { className: 'qq-role-toggle', title: String(配置.人设 || '').trim() || 配置.人设开 ? '启用或停用全局角色设定' : '请先填写全局角色设定' },
              h('input', {
                'aria-label': '启用角色设定', type: 'checkbox', role: 'switch',
                checked: Boolean(配置.人设开),
                disabled: 人设忙 || 忙 || (!配置.人设开 && !String(配置.人设 || '').trim()),
                onChange: (e) => 切换人设(e.target.checked),
              }))),
          h('p', { className: 'qq-role-desc' }, '未配置独立角色的会话使用全局设定。'),
          h('p', { className: 'qq-role-hint' }, '建议简洁描述，减少上下文占用。'),
          h('textarea', {'aria-label': '人设',
            style: { ...S.input, display: 'block', width: '100%', height: 88, marginTop: 14, resize: 'vertical', fontFamily: 'inherit', lineHeight: 1.5, boxSizing: 'border-box' },
            value: String(配置.人设 || ''),
            placeholder: '输入角色身份、表达风格与交互要求。',
            onChange: (e) => 改('人设', e.target.value),
          }),
        ),
        h('div', { className: 'qq-binding-groups' }, 私聊卡, 群卡,
        新建映射 ? h('div', { className: 'fish-modal', onMouseDown: (e) => { if (e.target === e.currentTarget && !新建忙) { 设新建映射(null); 设新建错误('') } } },
          h('div', { className: 'fish-modal-card qq-bind-add-modal', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'qq-bind-add-title',
            onKeyDown: (e) => { if (e.key === 'Escape' && !新建忙) { 设新建映射(null); 设新建错误('') } } },
            h('span', { className: 'fish-kicker' }, 'BIND · 新建映射'),
            h('h2', { id: 'qq-bind-add-title' }, 新建映射.类型 === '群' ? '添加群聊映射' : '添加私聊映射'),
            h('div', { className: 'qq-bind-modal-fields' },
              h('label', { className: 'qq-bind-modal-field' },
                h('span', null, 新建映射.类型 === '群' ? '群号' : 'QQ 号'),
                h('input', { style: S.wide, value: 新建映射.号码, inputMode: 'numeric', placeholder: 新建映射.类型 === '群' ? '填写群号' : '填写 QQ 号', onChange: (e) => { const v = e.target.value.trim(); 设新建映射(old => ({ ...old, 号码: v })); 安排拉名称(新建映射.类型, v) } })),
              h('label', { className: 'qq-bind-modal-field' },
                h('span', null, 新建映射.类型 === '群' ? '群名' : 'QQ 昵称'),
                h('input', { style: S.wide, value: 新建映射.称呼, placeholder: 新建映射.类型 === '群' ? '填写或自动获取群名' : '填写或自动获取 QQ 昵称', onChange: (e) => 设新建映射(old => ({ ...old, 称呼: e.target.value })) })),
              新建查名说 ? h('div', { className: 'qq-bind-modal-lookup', role: 'status' }, 新建查名说) : null,
              新建映射.类型 === '群' ? h('div', { className: 'qq-bind-modal-toggles' },
                h('label', { className: 'qq-bind-modal-toggle' }, h('span', null, '启用回复门槛'), 勾(新建映射.门槛, (v) => 设新建映射(old => ({ ...old, 门槛: v })), '启用回复门槛')),
                h('label', { className: 'qq-bind-modal-toggle' }, h('span', null, '主动回应'), 勾(新建映射.主动, (v) => 设新建映射(old => ({ ...old, 主动: v })), '主动回应'))) : null,
              h('label', { className: 'qq-bind-modal-toggle' }, h('span', null, '启用收发'), 勾(新建映射.开 !== false, (v) => 设新建映射(old => ({ ...old, 开: v })), '启用收发'))),
            新建错误 ? h('p', { className: 'fish-modal-error', role: 'alert' }, 新建错误) : null,
            h('div', { className: 'fish-modal-actions' },
              h('button', { type: 'button', className: 'fish-button fish-primary', disabled: 新建忙, onClick: () => { void 创建映射() } }, 新建忙 ? '创建中…' : '创建并绑定'),
              h('button', { type: 'button', className: 'fish-button fish-modal-cancel', disabled: 新建忙, onClick: () => { 设新建映射(null); 设新建错误('') } }, '取消')))) : null),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '群聊频率与概率'),
          h('div', { style: S.dim },
            '以下设置控制群聊处理频率与回复概率。'),
          行('回复冷却时间（秒）', h('input', {'aria-label': '回复冷却秒',  type: 'number', min: 0, max: 300, style: S.small, value: String(配置.回复冷却秒 ?? 5), onChange: (e) => 改('回复冷却秒', Number(e.target.value)) }), '冷却期间的消息等待合并处理，默认 5 秒。'),
          行('每分钟处理上限（条）', h('input', {'aria-label': '每分钟最多条',  type: 'number', min: 1, max: 120, style: S.small, value: String(配置.每分钟最多条 ?? 4), onChange: (e) => 改('每分钟最多条', Number(e.target.value)) }), '超出限制的消息等待下一时间窗口，默认 4 条。'),
          行('单批合并上限（条）', h('input', {'aria-label': '合并最多条',  type: 'number', min: 1, max: 50, style: S.small, value: String(配置.合并最多条 ?? 8), onChange: (e) => 改('合并最多条', Number(e.target.value)) }), '合并时保留发言人标识，默认 8 条。'),
          行('私聊来源标识', h('select', {'aria-label': '私聊署名',  style: S.small, value: String(配置.私聊署名 || '关'), onChange: (e) => 改('私聊署名', e.target.value) },
            h('option', { value: '关' }, '无标识'), h('option', { value: '前缀' }, '[QQ] 前缀'), h('option', { value: '署名' }, '署名（对方：…）')),
            '区分 QQ 消息与 DSH 手动输入，默认不标记。'),
          行('点名消息必回', h('input', {'aria-label': '点名必回',  type: 'checkbox', role: 'switch', checked: 配置.点名必回 !== false, onChange: (e) => 改('点名必回', Boolean(e.target.checked)) }), '默认启用；禁用后，点名消息也受回复概率限制。'),
          行('回复概率（%）', h('input', {'aria-label': '回复概率',  type: 'number', min: 0, max: 100, style: S.small, value: String(配置.回复概率 ?? 100), onChange: (e) => 改('回复概率', Number(e.target.value)) }), '默认 100%；未选中的消息不进入模型上下文。'),
          h('div', { style: { ...S.dim, marginTop: 4 } }, '合并窗口可在「消息收发」中配置，默认 3 秒。'),
        ),
      ]

      // ───────────── 消息 ─────────────
      const 消息卡片 = [
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, 'QQ 后端连接'),
          行('接口地址', h('input', {'aria-label': 'QQ 后端连接', style: S.wide, value: String(配置.NapCat || 'http://127.0.0.1:3000'), onChange: (e) => 改('NapCat', e.target.value) }), 'OneBot HTTP 地址'),
          行('接口令牌', h('input', {'aria-label': '令牌', type: 'password', style: S.wide, value: String(配置.令牌 || ''), onChange: (e) => 改('令牌', e.target.value) }), 'HTTP API 服务 -> 鉴权 -> 授权 Token'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '发送格式'),
          行('仅发送 [QQ] 标记内容', 勾(配置.只发标记内, (v) => 改('只发标记内', v)), '仅发送 [QQ]…[/QQ] 内的内容；转入消息会附带格式提示。'),
          行('仅转发 QQ 触发的回复', 勾(配置.只回QQ唤醒, (v) => 改('只回QQ唤醒', v)), '仅转发由 QQ 消息触发的回复。'),
          行('包含自动触发的回复', 勾(配置.自动触发也发, (v) => 改('自动触发也发', v)), '启用后包含主动消息和定时任务；DSH 手动对话不转发。'),
          行('拆分长回复', 勾(配置.长回复拆段, (v) => 改('长回复拆段', v)), '默认按空行拆分；禁用后整段发送。'),
          行('按句拆分', 勾(配置.按句拆, (v) => 改('按句拆', v)), '按句末标点拆分，括号内标点除外；默认禁用。'),
          行('分段发送间隔（毫秒）', h('input', {'aria-label': '拆段间隔毫秒',  type: 'number', min: 0, max: 5000, style: S.small, value: String(配置.拆段间隔毫秒 ?? 450), onChange: (e) => 改('拆段间隔毫秒', Number(e.target.value)) }), '仅在启用拆分时生效，默认 450 毫秒。'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '接收与合并'),
          行('合并窗口（秒）', h('input', {'aria-label': '合并窗口秒',  type: 'number', min: 0, max: 60, style: S.small, value: String(配置.合并窗口秒 ?? 3), onChange: (e) => 改('合并窗口秒', Number(e.target.value)) }), '同一发言人的连续消息合并处理；0 为禁用，默认 3 秒。'),
          行('最长合并等待（秒）', h('input', {'aria-label': '合并最多秒',  type: 'number', min: 3, max: 300, style: S.small, value: String(配置.合并最多秒 ?? 20), onChange: (e) => 改('合并最多秒', Number(e.target.value)) }), '达到时限后处理已接收的消息，默认 20 秒。'),
          行('消息轮询间隔（毫秒）', h('input', {'aria-label': '轮询间隔毫秒',  type: 'number', min: 800, max: 30000, style: S.small, value: String(配置.轮询间隔毫秒 ?? 2000), onChange: (e) => 改('轮询间隔毫秒', Number(e.target.value)) }), '默认 2000 毫秒，修改后需重启 DSH。'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, 'QQ 图片接收'),
          行('接收图片（QQ → DSH）', 勾(配置.收图, (v) => 改('收图', v)), '将 QQ 消息中的图片交给 DSH 理解，受图片页的单张大小上限约束。'),
          行('每条消息最多接收图片', h('input', {'aria-label': '收图最多', type: 'number', min: 1, max: 10, style: S.small, value: String(配置.收图最多 ?? 4), onChange: (e) => 改('收图最多', Number(e.target.value)) }), '接收最多 10 张，超出部分跳过。'),
          行('开启图片存储', 勾(配置.图片存储, v => 改('图片存储', v)), '默认关闭。开启后额外保存 QQ 接收图片的原图；关闭只停止新增归档，不影响 DSH 正常接收与理解图片。'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, 'DSH 生成文件转发'),
          行('发送文件（DSH → QQ）', 勾(配置.发文件, (v) => 改('发文件', v)), '将 DSH 会话回复中的生成文件链接上传至 QQ；图片语法单独处理。'),
          行('单文件上限（MB）', h('input', {'aria-label': '文件上限MB',  type: 'number', min: 1, max: 2048, style: S.small, value: String(配置.文件上限MB ?? 50), onChange: (e) => 改('文件上限MB', Number(e.target.value)) }), '超限时发送说明；同时受 QQ 后端限制。'),
          行('文件仅发送至私聊', 勾(配置.文件仅私聊 !== false, (v) => 改('文件仅私聊', v)), '默认启用；禁用后允许向群聊上传文件。'),
          h('div', { style: S.dim }, '含空格的路径需使用尖括号：[报告](<D:\\我的 文档\\报告.docx>)。网页链接不作为文件处理。'),
        ),
        h('div', { className: 'qq-voice-card', style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 18px' } }, '语音转写'),
          行('转写语音（DSH → QQ）', 勾(配置.语音转写, (v) => 改('语音转写', v)), '通过指定命令转写语音；禁用时仅保留语音标记。'),
          // —— 一键装依赖 ——
          h('div', { className: 'fish-form-row qq-voice-env', style: { ...S.row, alignItems: 'flex-start' } },
            h('div', { className: 'fish-form-label', style: S.lab }, '语音识别环境'),
            h('div', { className: 'fish-control', style: S.ctl },
              h('div', { className: 'qq-voice-actions' },
                按钮(asr忙 ? '…' : (asr && asr.就绪 ? '重新安装' : '安装语音依赖'), 装语音, !(asr && asr.就绪), asr忙 || Boolean(asr && asr.进行中)),
                按钮('生成转写命令', 填语音命令, false, false)),
              h('div', { style: S.hint },
                asr && asr.就绪 && asr.模型就绪
                  ? '环境与模型已就绪：' + String(asr.python || '')
                  : asr && asr.就绪
                    ? '环境已就绪，模型未下载完成，可重新安装以继续下载。'
                  : '安装独立环境及 sherpa-onnx、numpy 和语音模型。'),
              // 进度
              asr && asr.步骤 && asr.步骤.length
                ? h('div', { style: { marginTop: 8 } },
                  ...asr.步骤.map((x, i) => h('div', { key: i, style: { fontSize: 'var(--fish-small)' } },
                    (x.态 === '完成' ? '' : x.态 === '失败' ? '失败：' : '⋯ ') + x.名 + (x.附 ? '（' + x.附 + '）' : ''))))
                : null,
              // —— 下载进度条（模型 230MB，得让人看见下了多少）——
              asr && asr.下载
                ? h('div', { style: { marginTop: 8 } },
                  h('div', { style: { height: 8, borderRadius: 6, background: 'var(--fish-line)', overflow: 'hidden' } },
                    h('div', {
                      style: {
                        height: '100%', width: String(asr.下载.百分比 || 0) + '%',
                        background: 'var(--dsw-alias-state-business-primary)', transition: 'width .4s',
                      },
                    })),
                  h('div', { style: { ...S.dim, marginTop: 4 } },
                    (asr.下载.文件 ? '正在下载 ' + asr.下载.文件 + '：' : '')
                    + '已下载 ' + Math.round((asr.下载.已收 || 0) / 1048576) + 'MB'
                    + (asr.下载.总 ? ' / ' + Math.round(asr.下载.总 / 1048576) + 'MB' : '')
                    + '（' + String(asr.下载.百分比 || 0) + '%）'
                    + (asr.下载.速度KB ? '　约 ' + (asr.下载.速度KB > 1024 ? (asr.下载.速度KB / 1024).toFixed(1) + 'MB/s' : asr.下载.速度KB + 'KB/s') : '')))
                : null,
              asr && asr.进行中 ? h('div', { style: { ...S.dim, marginTop: 4 } }, '正在安装，已用时 ' + String(asr.用时秒 || 0) + ' 秒（每 2 秒刷新一次）') : null,
              asr && asr.失败 ? h('div', { style: { color: 'var(--fish-danger)', fontSize: 'var(--fish-small)', marginTop: 4 } }, '失败：' + asr.失败) : null,
              asr && asr.日志
                ? h('div', { style: { marginTop: 8 } },
                  h('div', { style: S.dim }, '安装日志'),
                  h('div', { style: { ...S.日志行, maxHeight: 160, overflowY: 'auto', whiteSpace: 'pre-wrap', marginTop: 4 } }, String(asr.日志)))
                : null)),
          行('转写命令', h('input', {'aria-label': '转写命令',
            style: S.wide,
            placeholder: 'python D:\\asr_cli.py "{file}"',
            value: String(配置.转写命令 || ''),
            onChange: (e) => 改('转写命令', e.target.value),
          }), '命令须包含 {file}，向 stdout 输出转写文本；非零退出码视为失败。'),
          行('语音模型目录', h('input', {'aria-label': '语音模型目录',
            style: S.wide,
            placeholder: '安装依赖后自动填写',
            value: String(配置.语音模型目录 || ''),
            onChange: (e) => 改('语音模型目录', e.target.value),
          }), '安装时自动下载模型并填写目录；使用自备模型时可手动修改。'),
          行('超时（秒）', h('input', {'aria-label': '转写超时秒',  type: 'number', min: 5, max: 600, style: S.small, value: String(配置.转写超时秒 ?? 60), onChange: (e) => 改('转写超时秒', Number(e.target.value)) }), '超时后终止命令，默认 60 秒。'),
          h('div', { className: 'qq-voice-cost' },
            h('p', { className: 'qq-voice-cost-intro' }, '语音转写的本地性能开销如下'),
            h('table', { className: 'qq-voice-cost-table' },
              h('thead', null, h('tr', null, h('th', { scope: 'col' }, '项目'), h('th', { scope: 'col' }, '预计开销'))),
              h('tbody', null, ...[
                ['CPU', '当前默认使用 4 个推理线程，转写期间短暂占用 CPU'],
                ['内存', '每次识别进程可先预留约 0.5～1.5GB'],
                ['本地处理延迟', '可先按每条约 1～5 秒预留，另加下载及格式转换时间'],
                ['磁盘', '模型约 230MB，连同 Python 环境和依赖建议预留 1～2GB'],
                ['API 费用', '本地识别不产生 API 费用；转写文字交给 DeepSeek 后，对话用量照常计算'],
              ].map(([项目, 开销]) => h('tr', { key: 项目 }, h('th', { scope: 'row' }, 项目), h('td', null, 开销))))),
            h('p', { className: 'qq-voice-cost-note' },
              '当前每条语音都会重新启动 Python、加载模型，结束后识别进程退出，模型不常驻。低频聊天负担通常可控；连续语音会反复加载，而且转写等待会拖延当前收消息流程。')),
        ),
      ]

      // ───────────── 门槛 ─────────────
      const 门槛卡片 = [
        h('div', { id: 'qq-reply-threshold', style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '回复门槛'),
          h('div', { style: S.dim },
            '回复门槛按绑定单独启用。'
            + '私聊不执行门槛判断。'),
          h('div', { style: { ...S.dim, marginTop: 6 } },
            '模型判断消息是否需要回复；未通过判断时不向 QQ 发送回复。'),
          行('未通过门槛时终止推理', 勾(配置.门槛真停轮, (v) => 改('门槛真停轮', v)), '默认仅阻止转发；启用后终止当前轮次，可能显示 tool call aborted。'),
          h('div', { style: { ...S.dim, marginTop: 6 } },
            '启用门槛会新增工具，目标会话的下一次请求可能重新计算上下文。'),
          行('点名关键词', h('input', {'aria-label': '点名关键词',
            style: S.wide,
            value: String(配置.点名关键词 || ''),
            placeholder: '留空仅识别 @ 和引用',
            onChange: (e) => 改('点名关键词', e.target.value),
          }), '正文匹配关键词时视为点名；多个关键词以逗号或空格分隔。'),
          // ⭐ 群聊接收范围已挪到「绑定」页每条群绑定自己的「主动回应」开关；
          //    旧配置里 只听点名 == null 的群会在保存时固化，不再需要这个全局开关。
          h('div', { style: { ...S.dim, marginTop: 8 } },
            '每个群是否接收全部消息，改由「绑定」页对应群的「主动回应」单独控制；旧配置会在下次保存时固化当前值。'),
          // ⭐ 1.4.1：被点名之后，同一个群后面紧跟着的几句也放进来（不然接话接不上前文）
          行('点名后续接收上限（条）', h('input', {'aria-label': '点名后接听条',  type: 'number', min: 0, max: 50, style: S.small, value: String(配置.点名后接听条 ?? 5), onChange: (e) => 改('点名后接听条', Number(e.target.value)) }),
            '点名后继续接收同群后续消息，默认 5 条；0 为禁用。'),
          行('点名后续接收时限（秒）', h('input', {'aria-label': '点名后接听秒',  type: 'number', min: 0, max: 600, style: S.small, value: String(配置.点名后接听秒 ?? 120), onChange: (e) => 改('点名后接听秒', Number(e.target.value)) }),
            '到期后恢复仅接收点名消息，默认 120 秒。'),
        ),
      ]

      // ───────────── 空间 ─────────────
      const 空间定时 = () => {
        const a = 配置.空间定时发
        return Array.isArray(a) ? a : []
      }
      const 设空间定时 = (下一份) => 改('空间定时发', 下一份)
      const 改空间定时 = (i, 补) => 设空间定时(空间定时().map((x, j) => (j === i ? { ...x, ...补 } : x)))
      const 加空间定时 = () => 设空间定时([...空间定时(), { 时: '09:30', 权: 1, 开: true }].slice(0, 12))
      const 删空间定时 = (i) => 设空间定时(空间定时().filter((_, j) => j !== i))

      const 空间卡片 = [
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '开关'),
          行('允许发布 QQ 空间动态', 勾(配置.允许发空间动态, (v) => 改('允许发空间动态', v)), '默认禁用发布，不影响查看动态。'),
          行('浏览动态与评论', 勾(配置.空间浏览开 !== false, (v) => 改('空间浏览开', v)), '关闭后隐藏手动浏览卡片；不影响定时发布和自动同步。'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '定时发布'),
          h('div', { style: S.dim }, '按宿主所在时区，每分钟检查一次；到点提醒一个已绑定且打开的会话。模型自行决定是否发布，不保证每次都发；可见范围作为提示传给模型，实际以其调用参数为准。发布需开启空间发布开关；空间任务独立于消息转发总开关和试运行。'),
          h('div', { className: 'fish-schedule-row fish-binding-head', style: { ...S.空间表头, marginTop: 10 } },
            h('div', { style: S.表头字 }, '时间'),
            h('div', { style: S.表头字 }, '提示可见范围'),
            h('div', { style: S.表头字 }, '启用'),
            h('div', { style: S.表头字 }, '')),
          空间定时().length === 0
            ? h('div', { style: { ...S.dim, margin: '8px 0' } }, '暂无条目，请添加。')
            : h('div', null, ...空间定时().map((x, i) => h('div', { key: i, className: 'fish-schedule-row', style: S.空间行 },
              h('input', {'aria-label': '发布时间 ' + (i + 1),
                type: 'time', style: S.wide, value: String(x.时 || '09:30'),
                onChange: (e) => 改空间定时(i, { 时: e.target.value }),
              }),
              h('select', {'aria-label': '可见范围 ' + (i + 1),
                style: S.wide, value: String(x.权 || 1),
                onChange: (e) => 改空间定时(i, { 权: Number(e.target.value) }),
              },
                h('option', { value: '1' }, '所有人'),
                h('option', { value: '4' }, '好友'),
                h('option', { value: '64' }, '仅自己')),
              h('div', null, 勾(x.开 !== false, (v) => 改空间定时(i, { 开: v }), '启用计划 ' + (i + 1))),
              h('div', null, 按钮('删除', () => 删空间定时(i), false, false))))),
          h('div', { style: { marginTop: 8 } },
            按钮('+ 添加条目', 加空间定时, false, false),
            h('span', { style: S.dim }, '　最多 12 条')),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '好友动态同步'),
          行('同步间隔（分钟）', h('input', {'aria-label': '空间看圈分',  type: 'number', min: 5, max: 1440, style: S.small, value: String(配置.空间看圈分 ?? 30), onChange: (e) => 改('空间看圈分', Number(e.target.value)) }), '5～1440，默认 30。'),
          行('启用同步', 勾(配置.空间看圈开, (v) => 改('空间看圈开', v)), '至少启用点赞或动态递送之一才会请求好友动态；空间任务不受消息转发总开关和试运行控制。'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '点赞 / 评论'),
          行('自动点赞', 勾(配置.空间点赞开, (v) => 改('空间点赞开', v)), '同步时点赞近期未处理动态，每次最多 3 条、每日最多 20 条。'),
          行('递送动态给模型（评论提醒）', 勾(配置.空间评论开, (v) => 改('空间评论开', v)), '将新动态转入会话。当前模块没有发表评论的工具，真正评论需要会话另有可用工具；打开此开关不代表会自动发表评论。'),
        ),
      ]

      const 角色编辑图标 = () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' },
        h('path', { d: 'M4 20h4l10-10-4-4L4 16v4Z' }), h('path', { d: 'm13 7 4 4' }))
      const 角色删除图标 = () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' },
        h('path', { d: 'M4 7h16' }), h('path', { d: 'M9 7V4h6v3' }), h('path', { d: 'm6 7 1 13h10l1-13' }), h('path', { d: 'M10 11v5M14 11v5' }))

      const 角色会话名 = id => {
        if (!id) return '未选择会话'
        const 会话 = 目标们.find(s => s.id === id)
        return 会话 ? (会话.标题 || '…' + 短id(会话.id)) : '…' + 短id(id)
      }
      const 编辑角色 = async (i, x, label) => {
        if (i < 0 || typeof editRole !== 'function') return
        const 文字 = await editRole({
          title: '编辑角色设定',
          description: label + ' · 目标会话：' + 角色会话名(x.会话),
          value: String((绑定[i] && 绑定[i].人设) || ''),
          placeholder: '留空表示继承全局角色设定。',
          confirmText: '保存',
          cancelText: '取消',
        })
        if (文字 !== null) 改绑定(i, { 人设: 文字 })
      }
      const 删除角色 = async (i, label) => {
        if (i < 0) return
        if (typeof confirm === 'function') {
          const ok = await confirm({
            title: '删除后本会话的角色设定将还原到全局角色设定，是否确认删除？',
            description: label + '。只清除这个会话的单独设定，不会删除聊天绑定。',
            confirmText: '删除',
            cancelText: '取消',
            danger: true,
          })
          if (!ok) return
        }
        改绑定(i, { 人设: '' })
      }
      const 映射角色 = 类型 => {
        const 行们 = 已存绑定.filter(x => x.类型 === 类型)
        const 标题 = 类型 === '群' ? '群聊角色设定' : '私聊角色设定'
        return h('section', { style: S.card, className: 'qq-role-card' },
          h('h3', null, 标题),
          行们.length ? h('div', { className: 'qq-role-table-wrap' },
            h('table', { className: 'qq-role-table' },
              h('thead', null, h('tr', null,
                h('th', null, 类型 === '群' ? '群号' : 'QQ 号'),
                h('th', null, '目标会话'),
                h('th', null, '角色设定文字'),
                h('th', { className: 'qq-role-col-icon' }, '编辑'),
                h('th', { className: 'qq-role-col-icon' }, '删除'))),
              h('tbody', null, ...行们.map(x => {
                const i = 绑定.findIndex(b => b.类型 === x.类型 && b.号码 === x.号码 && b.会话 === x.会话)
                const row = i >= 0 ? 绑定[i] : x
                const label = 类型 + ' ' + x.号码 + ' 的角色设定'
                const 文字 = String((row && row.人设) || '').trim()
                const 会话 = 角色会话名(x.会话)
                return h('tr', { key: JSON.stringify([x.类型, x.号码, x.会话]) },
                  h('td', { className: 'qq-role-number' }, String(x.号码 || '—')),
                  h('td', { className: 'qq-role-session', title: 会话 }, 会话),
                  h('td', { className: 'qq-role-text-cell' },
                    文字 ? h('span', { className: 'qq-role-text', title: 文字 }, 文字) : h('span', { className: 'qq-role-inherit' }, '继承全局角色设定')),
                  h('td', { className: 'qq-role-col-icon' },
                    h('button', { type: 'button', className: 'qq-role-icon', 'aria-label': '编辑 ' + label, title: i < 0 ? '请先保存绑定页的改动' : '编辑角色设定', disabled: i < 0 || 忙, onClick: () => 编辑角色(i, x, label) }, 角色编辑图标())),
                  h('td', { className: 'qq-role-col-icon' },
                    h('button', { type: 'button', className: 'qq-role-icon qq-role-icon-danger', 'aria-label': '删除 ' + label, title: i < 0 ? '请先保存绑定页的改动' : '删除角色设定', disabled: i < 0 || 忙, onClick: () => 删除角色(i, label) }, 角色删除图标())))
              }))))
            : h('p', { style: S.dim }, '暂无已保存的' + 类型 + '映射，请先在「绑定」中添加并保存。'))
      }

      const 代写按钮 = h('button', {
        type: 'button', className: 'fish-button fish-primary qq-role-writer-open',
        onClick: () => { if (typeof openRoleWriter === 'function') openRoleWriter(); else 告知('代写功能当前不可用') },
      }, '大肥鱼专业代写')

      const 文件接收卡片 = h('section', { style: S.card },
        h('h2', null, 'QQ 文件接收'),
        h('p', { style: S.dim, role: 'status' }, '文件接收通道：' + (态?.文件接收通道 || '等待宿主连接')),
        行('接收文件（QQ → DSH）', 勾(配置.收文件, v => 改('收文件', v)), '将 QQ 文件作为附件提交到对应绑定的 DSH 会话，默认关闭。遵守现有群聊接收规则；文件不会被自动执行。'),
        行('接收单文件上限（MB）', h('input', { type: 'number', min: 1, max: 100, style: S.small, value: String(配置.收文件上限MB ?? 20), onChange: e => 改('收文件上限MB', Number(e.target.value)) }), '默认 20 MB，最多 100 MB；下载过程中也会校验实际大小，超限跳过。'),
        行('每次最多接收文件', h('input', { type: 'number', min: 1, max: 10, style: S.small, value: String(配置.收文件最多 ?? 3), onChange: e => 改('收文件最多', Number(e.target.value)) }), '默认 3 个，最多 10 个；连续消息合并后共用此数量限制。'),
        行('开启文件存储', 勾(配置.文件存储, v => 改('文件存储', v)), '默认关闭。开启后额外保存 QQ 接收文件；关闭不删除已有归档，也不影响 DSH 文件附件处理。'),
        h('p', { style: S.dim }, '自动适配 NapCat / SnowLuma，复用已保存的连接配置接收文件消息与上传通知；直链不可用时尝试由后端传回文件内容，兼容 Docker 部署，无需填写额外 HTTP 地址或 API。图片与文件归档在「文件管理」中管理；具体格式的读取能力取决于 DSH、模型及工具，失败原因会随消息告知。'))

      const 分区 = (...内容) => h('div', { className: 'fish-settings-stack' }, ...内容)
      const 页面 = {
        '连接': 分区(总开关卡片, 消息卡片[0], 总览卡片[0]),
        '绑定': 分区(绑定提醒, 绑定卡片[1]),
        '消息策略': 分区(消息卡片[1], 消息卡片[2], 绑定卡片[2], 门槛卡片[0]),
        '角色设定': 分区(代写按钮, 绑定卡片[0], 映射角色('私聊'), 映射角色('群')),
        '图片与文件': 分区(消息卡片[3], h('section', { style: S.card },
          h('h2', null, 'DSH 生成图片转发'),
          h('p', { style: S.dim }, '仅将绑定 DSH 会话回复中生成的图片自动发送到 QQ。此转发功能不提供手动发送或图片上传。'),
          行('发送生成图片（DSH → QQ）', 勾(配置.发图, v => 改('发图', v)), '支持会话回复中的图片附件和 Markdown 图片，发送到该会话绑定的 QQ 聊天；遵守总开关、试运行和消息转发策略。每轮最多 4 张。'),
          行('单张图片上限（MB）', h('input', { 'aria-label': '图上限MB', type: 'number', min: 1, max: 30, style: S.small, value: String(配置.图上限MB ?? 5), onChange: e => 改('图上限MB', Number(e.target.value)) }), '读取会话已有生成图片进行转发；QQ 收图也共用此大小限制。')), 文件接收卡片, 消息卡片[4]),
        '表情包': typeof FishStickers === 'function' ? h(FishStickers, { mode: 'settings', notify: typeof notify === 'function' ? notify : undefined, onOpenFiles: openFileManager }) : h('p', null, '请在大肥鱼整合界面使用表情库'),
        '语音转写': 分区(消息卡片[5]),
        '语音发送': 分区(h('div', { className: 'qq-voice-send', style: S.card },
          h('h2', null, '语音发送'),
          行('发送语音（QQ → DSH）', 勾(false, () => {}, '发送语音（QQ → DSH）', true), '目前服务暂不可用'))),
        '历史导入': 历史页,
      }

      return h(
        'div',
        { className: 'fish-module fish-qq', style: S.wrap },

        onPageChange ? null : 页签,
        embedded ? null : h('div', { className: 'fish-toolbar' },
          h('span', { style: { ...S.dim, flex: '1 1 160px', ...(脏 ? { color: 'var(--fish-warning)', fontWeight: 600 } : null) } }, 脏 ? '存在未保存的配置' : '配置已保存'),
          按钮('保存设置', () => 存(), true, 忙)),
        embedded ? null : (页 === '连接' ? h('div', { className: 'fish-test-action' }, 按钮('发送测试消息', 试一句, false, 忙 || 脏), h('span', { style: S.dim }, '会实际发送至首个绑定的 QQ 聊天，不受试运行限制。')) : null),
        页面[页] || null,
        h('div', { hidden: 页 !== 'QQ 空间' }, 分区(空间卡片[0], h(QQSpaceActions, { 配置, 脏, notify }), ...空间卡片.slice(1))),
      )
    }

    function apply(ctx) {
      const slots = ctx.get('slots')
      if (slots === undefined) return
      slots.inject('settings.section', () =>
        slots.register(
          { name: 'settings.section', id: 'qq-bridge', order: 54, label: () => '连接与转发' },
          Section,
        ),
      )
    }

    exports.Section = Section
    exports.apply = apply
    exports.inject = inject
    return module.exports
  },
})

// 大肥鱼整合修改：供主界面直接挂载，更新入口由整合包统一提供。
// DSH 鱼的记忆 · 客户端半边（设置左侧栏一项「鱼的记忆」）
moduleLoader.load({
  id: 'dsh-fish-memory',
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports

    const React = require('react')
    const inject = ['slots']
  function EmbeddingSettings({ session, storeId, notify }) {
    const [status, setStatus] = React.useState(null)
    const [config, setConfig] = React.useState(null)
    const [key, setKey] = React.useState('')
    const [busy, setBusy] = React.useState(false)
    const 告知 = (text, options) => { if (typeof notify === 'function') notify(text, options) }
    const base = '/dsh-fish-memory/embedding'
    const refresh = () => fetch(base + '/status' + (session ? '?session=' + encodeURIComponent(session) : ''), { cache: 'no-store' }).then(r => r.json()).then(r => { setStatus(r); setConfig(old => old || r.config) })
    React.useEffect(() => { refresh().catch(() => 告知('Embedding 状态不可用', { holdMs: 6000 })) }, [session])
    React.useEffect(() => {
      if (!status?.running) return
      const timer = setInterval(() => refresh().catch(() => {}), 1000)
      return () => clearInterval(timer)
    }, [status?.running, session])
    const post = async (path, body) => {
      setBusy(true)
      try {
        const result = await fetch(base + path, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }).then(r => r.json())
        if (!result.ok) throw new Error(result.error || '操作失败')
        setKey(''); 告知('Embedding 操作完成', { tone: 'success' }); await refresh()
      } catch (e) { 告知('Embedding 操作失败：' + e.message, { holdMs: 6000 }) } finally { setBusy(false) }
    }
    if (!config) return React.createElement('div', null, 'Qwen Embedding：加载中…')
    const field = (name, label, type = 'text') => React.createElement('label', { key: name, style: { display: 'block', margin: '6px 0' } }, label + ' ', React.createElement('input', {
      'aria-label': label, type, value: config[name], min: type === 'number' ? 0 : undefined, style: { maxWidth: '100%', width: type === 'number' ? 100 : 500 },
      onChange: e => setConfig({ ...config, [name]: type === 'number' ? Number(e.target.value) : e.target.value }),
    }))
    return React.createElement('section', { className: 'fish-embedding', style: { margin: '24px 0' } },
      React.createElement('h2', null, 'Qwen 语义召回（默认关闭）'),
      React.createElement('p', null, '启用后，记忆正文与查询会发送给配置的云服务商并可能产生费用。正文仍以鱼的记忆为准，断网回退关键词；QQ 权限保持不变。'),
      React.createElement('label', null, React.createElement('input', {'aria-label': '启用语义召回',  type: 'checkbox', role: 'switch', checked: config.enabled, onChange: e => setConfig({ ...config, enabled: e.target.checked }) }), '启用语义召回'),
      field('endpoint', 'DashScope 完整服务地址'), field('model', 'Qwen 模型'), field('dimensions', '维度', 'number'),
      field('minSimilarity', '语义门槛（需用自己的数据校准）', 'number'), field('topK', '语义候选上限', 'number'), field('timeoutMs', '本轮超时毫秒', 'number'),
      React.createElement('label', null, '密钥（只写） ', React.createElement('input', { 'aria-label': 'Embedding 密钥', type: 'password', autoComplete: 'new-password', value: key, disabled: !status?.writable, onChange: e => setKey(e.target.value) })),
      React.createElement('p', null, status?.configured ? '密钥已配置（不会返回前端）' : '未配置密钥。可用宿主凭据 FISH_MEMORY_QWEN_API_KEY；旧宿主使用同名或 DASHSCOPE_API_KEY 环境变量。'),
      React.createElement('button', {type: 'button',  disabled: busy, onClick: () => post('/settings', { config, ...(key ? { key } : {}) }) }, '保存 Embedding 设置'),
      React.createElement('button', {type: 'button',  disabled: busy || !status?.writable, onClick: () => post('/settings', { config, clearKey: true }) }, '清除保存的密钥'),
      session ? React.createElement('div', null,
        React.createElement('p', null, '当前库索引：' + (status?.indexed ?? '—') + ' / ' + (status?.total ?? '—') + '；缺失 ' + (status?.missing ?? '—') + '；本次完成 ' + (status?.completed || 0) + (status?.running ? '（运行中）' : '') + (status?.error ? '；回退原因 ' + status.error : '')),
        React.createElement('button', {type: 'button',  disabled: busy || status?.running, onClick: () => post('/index', { session, storeId }) }, '补齐当前库索引'),
        React.createElement('button', {type: 'button',  disabled: busy || status?.running, onClick: () => post('/index', { session, storeId, rebuild: true }) }, '重建索引（保留正文）'),
        React.createElement('button', {type: 'button',  disabled: busy, onClick: () => post('/index', { stop: true }) }, '中断补齐'),
      ) : React.createElement('p', null, '打开下方一个记忆库后，可分批补齐或重建其索引。'),
      React.createElement('button', {type: 'button',  onClick: () => refresh().catch(() => 告知('Embedding 状态不可用', { holdMs: 6000 })) }, '刷新索引状态'),
    )
  }
    const B = '/dsh-fish-memory'

    const get = (p) => fetch(B + p, { cache: 'no-store' }).then((r) => r.json())
    const rawPost = (p, body) =>
      fetch(B + p, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body || {}) }).then((r) => r.json())

    const fmt = (t) => {
      if (!t) return '（没记时间）'
      const d = new Date(t)
      const p = (n) => String(n).padStart(2, '0')
      return p(d.getMonth() + 1) + '-' + p(d.getDate()) + ' ' + p(d.getHours()) + ':' + p(d.getMinutes())
    }
    const rel = (t, now) => {
      if (!t) return '（没记时间）'
      const dayIdx = (x) => Math.floor((new Date(x).getTime() + 8 * 3600000) / 86400000)
      const days = dayIdx(now) - dayIdx(t)
      if (!isFinite(days)) return fmt(t)
      // ⚠注意：2026-09-22 修（反馈：「为什么还有今天的事儿」）：
      //   原来是 `if (days <= 0) return '今天 …'` —— **负数的（未来的）也被算成今天** ✗
      //   实测：一条日期在未来的记忆→ 页面显示「今天 12:00」✗✗
      //   → 今天 / 明天 / N 天后 分开写
      if (days === 0) return '今天 ' + fmt(t).slice(6)
      if (days === -1) return '明天 ' + fmt(t).slice(6)
      if (days < 0) {
        const 后 = -days
        if (后 < 30) return 后 + ' 天后'
        return fmt(t).slice(0, 5) + '（' + Math.floor(后 / 30) + ' 个月后）'
      }
      if (days === 1) return '昨天 ' + fmt(t).slice(6)
      if (days < 30) return days + ' 天前'
      // ⭐ 2026-09-21 晚：**跨年了就必须带年份** —— 不然「09-17」看不出是哪一年 ✗
      //   （反馈：的：「过了一年会怎么显示呢？我现在看没有年份，只有月份」）
      const 今年 = new Date(new Date(now).getTime() + 8 * 3600000).getUTCFullYear()
      const 那年 = new Date(new Date(t).getTime() + 8 * 3600000).getUTCFullYear()
      if (那年 !== 今年) {
        const 差 = 今年 - 那年
        if (差 === 1) return '去年 ' + fmt(t).slice(0, 5)
        return 那年 + '-' + fmt(t).slice(0, 5) + '（' + 差 + ' 年前）'
      }
      // ⚠注意：2026-09-22 修（反馈：「不是两个月前啊」）：
      //   原来是 `Math.round(days / 30)` —— **四舍五入**把 47 天说成了「2 个月」✗
      //   47 天明明才一个半月。→ 改成**只进不退**（floor），零头够 15 天就说「个多月」✓
      const 月 = Math.floor(days / 30)
      const 零头 = days - 月 * 30
      return fmt(t).slice(0, 5) + '（' + 月 + (零头 >= 15 ? ' 个多' : ' 个') + '月前）'
    }
    const impName = (v) => (v >= 1 ? '非常重要' : v >= 0.5 ? '比较重要' : '随口提过')

    // ---------- 提炼 / 扩词的进度放在**组件外面** ----------
    // 为什么：跑一轮要十几二十分钟，她中途切走再回来，进度不该消失
    // 注意：两个**各占一格** —— 共用一个格子的话，两个一起跑会互相盖，
    //   看起来就像「点了扩词，过一会儿自己取消了」✗（2026-09-20 踩到）
    const 进度 = { 扩词: { 状态: null, 说明: null }, 提炼: { 状态: null, 说明: null }, 订阅: new Set() }
    // ⭐ 2026-09-22（反馈「点了判断，但他没有弹进度条啊，他就卡着判着呢」）：
    //   「补标不淡」原来**只有一行字、没有进度条** —— 跑起来看不出它在动 ✗
    //   （其实一直在跑，日志里一批批都有；她以为卡死了）
    //   → 给它也配一条进度条（放在组件外面，切走再回来还在）
    // 注意：2026-09-22（她的反馈）：这条原来跟提炼/扩词挤在同一张卡里，
    //   点了重判得往上翻才看得见 失败：→ 挪到按钮行下面，并记下**是哪一种**：
    //   「补标不淡」还是「重判一遍」，进度条上写清楚
    const 补标进度 = { 已: 0, 总: 0, 在跑: false, 重判: false }
// ⭐⭐ 2026-09-23：**清洗补键**的进度（老数据补事实键）✓
//   跟 补标 分开一份 —— 两条进度条同时跑的时候不许互相盖 ✗
const 洗键进度 = { 已: 0, 总: 0, 在跑: false, 干跑: false }
    const 改进度 = (格, 状态, 说明) => {
      const s = 进度[格] || (进度[格] = { 状态: null, 说明: null })
      s.状态 = 状态
      s.说明 = 说明
      for (const f of 进度.订阅) {
        try {
          f()
        } catch (e) {}
      }
    }

    // 一次别画太多行 —— 库里 800 多条的时候，全画出来整个页面都会卡（连别的插件面板一起卡）✗
    const 一次最多画 = 200

    // 权重在页面上按百分比显示（0.55 → 55）
    const toPct = (v) => Math.round(Number(v) * 1000) / 10
    const fromPct = (v) => Math.round(Number(v) * 10) / 1000

    const S = {
      wrap: { padding: '0 0 24px', fontSize: 'var(--fish-body)', lineHeight: 1.75, minWidth: 0 },
      dim: { color: 'var(--dsw-alias-label-tertiary, #8a8a8a)' },
      h: { fontFamily: 'var(--fish-title)', fontSize: 20, margin: '28px 0 16px', fontWeight: 700, lineHeight: 1.5 },
      // ⚠注意：2026-09-23（她的反馈：「右边堆的东西太多，左边的文字成了竖着的一条」）：
      //   这一行**必须能换行** ✗
      //   原来没有 flexWrap —— 行里全是 flex:'none' 的牌子/列（日期、鲜活度、重要度、原文、改、删…），
      //   它们一多，那条 flex:1 的正文就被挤成**竖着的一条**（一个字一行）。
      //   清洗补键给两百多条补上键之后，行里又多一个牌子 → 立刻犯病。
      //   加 flexWrap：装不下就让牌子们**掉到下一行**，正文始终有地方
      //   （跟上面 nameBox 那条是同一个教训）
      // ⚠注意：2026-09-24（她说的「能搜到它的词和讲的是，移到下一条的那一格里面去了」）：
      //   分隔线**原来画在「行」上** —— 可每条下面还有一两行小字
      //   （「提炼前：…」「能搜到它的词：…」「讲的是：…」），
      //   它们在线的**下面** → 看着就像属于**下一条**了 ✗
      //   → 线挪到「整条」上（见 S.条），行自己不再画线
      row: { padding: '12px 16px', display: 'flex', flexWrap: 'wrap', gap: 10, rowGap: 2, alignItems: 'baseline' },
      // 「一整条」的分隔线：**连着下面那几行小字一起**框住
      条: { borderBottom: '1px solid var(--fish-line)' },
      btn: { padding: '8px 12px', borderRadius: 'var(--fish-radius-sm)', border: '1px solid var(--fish-border)', background: 'var(--fish-control-fill)', color: 'inherit', cursor: 'pointer', fontSize: 'var(--fish-small)' },
      inp: { width: 88, padding: '8px 12px', borderRadius: 'var(--fish-radius-sm)', border: '1px solid var(--fish-control-border)', background: 'transparent', color: 'inherit', fontSize: 'var(--fish-small)' },
      link: { color: 'var(--dsw-alias-label-secondary, var(--fish-info))', cursor: 'pointer', textDecoration: 'underline' },
      confirm: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', margin: '4px 0 8px 8px', padding: '6px 10px', borderRadius: 'var(--fish-radius-mid)', background: 'var(--fish-panel)', boxShadow: 'var(--fish-small-shadow)', border: '1px solid var(--fish-danger)', fontSize: 'var(--fish-small)' },
      // 注意：flexWrap：放大或窗口窄的时候要能换行，不然会横向撑出容器（右边就看不见了）✗
      nameBox: { display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', margin: '10px 0', padding: '12px 0', borderBottom: '1px solid var(--fish-line)', fontSize: 'var(--fish-small)' },
      editBox: { margin: '12px 0 20px', padding: '16px', borderRadius: 'var(--fish-radius-mid)', background: 'var(--fish-panel)', boxShadow: 'var(--fish-small-shadow)', border: '1px solid var(--fish-border)' },
      askBox: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', margin: '8px 0', padding: '16px', borderRadius: 'var(--fish-radius-mid)', background: 'var(--fish-panel)', boxShadow: 'var(--fish-small-shadow)', border: '1px solid var(--fish-warning)', fontSize: 'var(--fish-small)' },
      barOut: { height: 10, borderRadius: 'var(--fish-radius-sm)', background: 'var(--fish-line)', overflow: 'hidden', border: '1px solid var(--fish-border)' },
      barIn: { height: '100%', background: 'var(--fish-accent)' },
      area: { width: '100%', boxSizing: 'border-box', padding: '12px 16px', borderRadius: 'var(--fish-radius-sm)', border: '1px solid var(--fish-control-border)', background: 'transparent', color: 'inherit', fontSize: 'var(--fish-small)', lineHeight: 1.7, fontFamily: 'inherit', resize: 'vertical' },
      btnDanger: { padding: '8px 12px', borderRadius: 'var(--fish-radius-sm)', border: '1px solid var(--fish-danger)', background: 'var(--fish-soft)', color: 'inherit', cursor: 'pointer', fontSize: 'var(--fish-small)' },
      ok: { color: 'var(--fish-success)' },
      drop: { color: 'var(--fish-danger)' },
      warn: { color: 'var(--fish-warning)' },
    }

    const GROUPS = [
      ['weight', '权重', '决定「什么更容易被想起来」。四项加起来必须是 100% —— 你改一项，其余三项自动让位，你填的数会尽量保住。'],
      ['time', '遗忘速度', '数字越大 = 忘得越慢。淡了只是不容易被想起来，不会删。'],
      ['gate', '门槛与条数', '控制「一次塞多少给她」。'],
    ]

    function Section({ page, onPageChange, detailPage: selectedDetailPage, onDetailPageChange, detailOpen, onDetailChange, notify, historyImport } = {}) {
      const 告知 = (text, options) => { if (typeof notify === 'function') notify(text, options) }
      const [d, setD] = React.useState(null)
      const post = (p, body) => {
        const selected = d?.sessions?.find(s => s.id === body?.session)
        const target = d?.sessions?.find(s => s.id === body?.to)
        return rawPost(p, { ...body, ...(selected?.qq ? { storeId: selected.storeId } : {}), ...(target?.qq ? { toStoreId: target.storeId } : {}) })
      }
      const [err, setErr] = React.useState(null)
      const [open, setOpen] = React.useState(null) // 打开哪个会话（两级结构）
      const [params, setParams] = React.useState(null)
      const [pin, setPin] = React.useState(null) // 她刚改的那一项权重
      const [editing, setEditing] = React.useState(null) // 正在打字的那格（原样显示她敲的字）
      const [notes, setNotes] = React.useState(null)
      const [busy, setBusy] = React.useState(false)
      const [confirm, setConfirm] = React.useState(null) // 正在等确认的删除（二次确认，手滑不了）
      const [并入, set并入] = React.useState(null) // ⭐ 1.4.5：切成按工作区前的「合并预览」
      const [showDeleted, setShowDeleted] = React.useState(false)
      const [selfDraft, setSelfDraft] = React.useState({}) // 每个会话「她自己叫什么」的草稿
      const [ownerDraft, setOwnerDraft] = React.useState({}) // 每个会话「怎么称呼对方」的草稿
      const [pronounDraft, setPronounDraft] = React.useState(null) // 用户的称呼草稿
      const [edit, setEdit] = React.useState(null) // 正在改的那条：{id, text, importance}
      const [pronounAsk, setPronounAsk] = React.useState(null) // 改了称呼，问要不要连旧记忆一起改
      const [imp, setImp] = React.useState(null) // 档案导入：扫描结果 + 勾选状态
      const [impBusy, setImpBusy] = React.useState(false)
      const [impNote, setImpNote] = React.useState(null)
      const [impOpen, setImpOpen] = React.useState(false)
      // 进度放在组件外面（见上面「进度」那段）—— 她切走再回来，进度不该消失
      const [exp, setExpState] = React.useState(进度.扩词.状态)
      const [expNote, setExpNoteState] = React.useState(进度.扩词.说明)
      const [rf, setRfState] = React.useState(进度.提炼.状态)
      const [rfNote, setRfNoteState] = React.useState(进度.提炼.说明)
      const [复制开, set复制开] = React.useState(false) // 「复制记忆到别的会话」展开没有
      const [复制到, set复制到] = React.useState('') // 复制到哪个会话
      const [搜词, set搜词] = React.useState('') // 记忆列表的检索词
      const setExp = (v) => 改进度('扩词', v, 进度.扩词.说明)
      const setExpNote = (v) => 改进度('扩词', 进度.扩词.状态, v)
      const setRf = (v) => 改进度('提炼', v, 进度.提炼.说明)
      const setRfNote = (v) => 改进度('提炼', 进度.提炼.状态, v)
      const [画全部, set画全部] = React.useState(false) // 记忆列表要不要一次画完（默认只画前 200）
      const [看记忆, set看记忆] = React.useState(true) // 常用记忆列表默认展开
      // ⭐ 2026-09-21：列表顺序。记忆库是 push 顺序（老的在前），而下面只画前 200 条 ——
      //   不翻过来的话，她永远看不到刚写进来的那条（851 条里画的是最老的 200 条）。
      //   '新' = 最新的在最上面（默认）；'旧' = 最早的在前（想从头翻的时候用）
      const [顺序, set顺序] = React.useState('新')
      // ⭐ 2026-09-24（反馈）：**「记了时间的」和「没记时间的」混在一坨了** ✗
      //   库里 850 条只有 188 条有日期 —— 混在一起排，「中间那一段」全是没日期的，排序就白排了。
      //   原话：「要么就是这样分类，记了时间的和没记时间的分开……
      //            不然的话记和没记的就全混在一起了，这个排序就没办法用了」
      //   她要的是**自己切**（不是固定的两块）→ 三种视图轮着切
      //     '全部' = 老样子；'有时间' = 只看有日期的；'没时间' = 只看没日期的
      const [看哪边, set看哪边] = React.useState('全部')
      // ⭐ 2026-09-22（她要的）：长期事实那个「收理的文件夹」展开没有（**默认收着**）
      const [看事实, set看事实] = React.useState(false)
      // 参数和索引使用独立页签，保留各页草稿。
      const [localPage, setLocalPage] = React.useState('记忆库')
      const memoryPage = page ?? localPage
      const setMemoryPage = onPageChange ?? setLocalPage
      const [localDetailPage, setLocalDetailPage] = React.useState('记忆与档案')
      const detailPage = selectedDetailPage ?? localDetailPage
      const setDetailPage = onDetailPageChange ?? setLocalDetailPage
      React.useEffect(() => { onDetailChange?.(Boolean(open)) }, [open])
      React.useEffect(() => { if (detailOpen === false) setOpen(null) }, [detailOpen])
      // ⭐⭐ 2026-09-22（反馈：「查重我们是不是还没找到按钮」）：
      //   去重一直有，但都是**自动**的（召回时、导入时）—— **库里已有的重复没人管** ✗
      //   这里补一个手动查重：列出来、挑、才合
      const [查重, set查重] = React.useState(null) // 查重结果：{组, 真重复组数, 汇总组数, 能少}
      const [查重选, set查重选] = React.useState({}) // 第几组 → 留哪条的 id
      // ⭐⭐ 2026-09-23（她真被坑过一次）：**哪几组要合**。
      //   原来「按我选的合」是**把每一组都合掉** —— 而每组默认都选中了，
      //   于是一点就把「汇总+明细」那 105 组也合了，**123 条记忆没了**（回收站还被清空）✗
      //   → 改成：**「汇总+明细」默认不参与**，要合得一组一组自己勾
      const [查重合, set查重合] = React.useState({}) // 第几组 → 要不要合
      const [查重开, set查重开] = React.useState(false) // 面板展开没有
      // ⭐⭐ 2026-09-22（她要的）：**批量删除**，但**必须二次确认**
      //   原话：「再出一个批量删除，但还是需要 2 次确认的」
      //   ① 勾选（每条行首一个框）② 点「批量删」→ 出一个确认条 ③ 点「确定删」才真删
      //   删掉的是**收进「已删」**（不是销毁），能找回来
      const [选中, set选中] = React.useState({}) // 勾了哪些 id
      const [批删问, set批删问] = React.useState(false) // 二次确认条出来了没
      // ⭐ 2026-09-22（反馈「回收站还没有批量删除，就批量清空」）：
      //   「已删掉的」那一栏原来只有「一条条清」和「全清空」→ 补一个**批量清掉**
      //   注意：这个是**真销毁**（不是收起来）→ 界面必须问两遍
      const [选中清, set选中清] = React.useState({}) // 「已删」里勾了哪些
      const [批清问, set批清问] = React.useState(false)
      // ⭐⭐ 2026-09-23（反馈「这里没有批量找回呀」）：批量找回的确认
      const [批回问, set批回问] = React.useState(false)
      const [mdl, setMdl] = React.useState(null) // DSH 里有哪些模型可选
      // ⭐⭐ 2026-09-22（她的第十件）：**从会话生成档案** —— 给别人用的功能
      //   用户导入自己的会话 → 模型读一遍 → 出一份档案 → 再走「从旧档案导入」变成条目
      //   注意：四步分开，因为**第三步调模型、花钱**，得一批一批停下来看
      const [生成开, set生成开] = React.useState(false) // 面板展开没有
      const [生成会话, set生成会话] = React.useState(null) // 这个工作区有哪些会话
      const [生成选, set生成选] = React.useState({}) // 勾了哪几个
      const [生成计划, set生成计划] = React.useState(null) // 算出来的：几批、多少字、多少 token
      const [生成条目, set生成条目] = React.useState([]) // 攒下来的条目
      const [生成进度, set生成进度] = React.useState(null) // {批号, 批数, 在跑, 模型}
      const [生成档, set生成档] = React.useState(null) // 存好了：{存到, 条数, 预览}
      const [生成备, set生成备] = React.useState(null) // 给模型用的备用模型（可选）
      const [生成诊断, set生成诊断] = React.useState(null) // 列表跟 DSH 对不上时，看这几个数
      // ⭐⭐ 2026-09-22（反馈：「点存档案的地方应该自定义」）：
      //   原来存到哪儿是我**写死的**（`.dsh\生成的档案.md`）失败：→ 能打、能选
      const [生成存到, set生成存到] = React.useState('')
      const [生成目录列, set生成目录列] = React.useState(null) // 文件夹选择器的列表
      const [生成选目录, set生成选目录] = React.useState(false)
      const [impDir, setImpDir] = React.useState(null) // 档案目录草稿
      const [impNames, setImpNames] = React.useState(null) // 「指她的名字」草稿
      const [impDirs, setImpDirs] = React.useState(null) // 文件夹选择器的列表
      const [找名字, set找名字] = React.useState(null) // 自动找出来的称呼候选
      const [看原文, set看原文] = React.useState({}) // 哪几条在对照「提炼前」的原文
      // ---- 2026-09-21 新加：后台手动加一条记忆 ----
      const [加内容, set加内容] = React.useState('')
      const [加时间, set加时间] = React.useState('') // 留空 = 现在
      const [加重要, set加重要] = React.useState('0.5') // 三档是快捷，也能自己填
      const [加词, set加词] = React.useState('') // 关键词，空格分开
      const [加在谁, set加在谁] = React.useState('') // 加到哪个会话（默认第一个开着的，没有就第一个）
      const set加结果 = result => {
        const text = result && result.文字
        if (text) 告知(text, result && result.ok ? { tone: 'success' } : { holdMs: 6000 })
      }

      // 「指她的名字」那一格：读出来、点一下加/减
      const 名字串 = () => (impNames !== null ? impNames : (imp.data && imp.data.用户名字 ? imp.data.用户名字 : []).join(','))
      const 名字们 = () => 名字串().split(/[,，]/).map((x) => x.trim()).filter(Boolean)
      const 已选名字 = (n) => 名字们().indexOf(n) >= 0
      const 点名字 = (n) => {
        const 有 = 名字们()
        const i = 有.indexOf(n)
        if (i >= 0) 有.splice(i, 1)
        else 有.push(n)
        setImpNames(有.join(','))
      }
      // 「这个不是名字」—— 昵称、旧事里的称呼…… 标了就存起来，以后不再出现、也不会被换掉
      const 标掉名字 = (n) => {
        const 现有 = 找名字 && Array.isArray(找名字.不是名字) ? 找名字.不是名字.slice() : []
        if (现有.indexOf(n) < 0) 现有.push(n)
        post('/names', { notNames: 现有 })
          .then(() => post('/names/scan', { session: open, dir: 现在目录 }))
          .then((r) => {
            set找名字(r)
            const 剩 = 名字们().filter((x) => x !== n)
            setImpNames(剩.join(','))
          })
          .catch((e) => setExpNote('标不了：' + String((e && e.message) || e)))
      }

      // 一个候选名字块：点名字=加/减，点 ✕ = 标成「不是名字」✓
      const 一个名字块 = (x, 淡) =>
        React.createElement(
          'span',
          {
            key: x.name,
            style: Object.assign({}, S.btn, {
              cursor: 'pointer',
              opacity: 淡 ? 0.7 : 1,
              color: 已选名字(x.name) ? 'var(--fish-success)' : 'inherit',
            }),
          },
          React.createElement('span', {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  onClick: () => 点名字(x.name) }, (已选名字(x.name) ? '' : '') + x.name + ' ' + x.n),
          React.createElement(
            'span',
            {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },
              style: Object.assign({}, S.dim, { marginLeft: 5, cursor: 'pointer' }),
              title: '不是名字（昵称、旧事里的称呼…）—— 标了就再也不出现，也不会被换掉',
              onClick: (e) => {
                if (e && e.stopPropagation) e.stopPropagation()
                标掉名字(x.name)
              },
            },
            '✕',
          ),
        )

      const load = React.useCallback(() => {
        get('/list')
          .then((x) => {
            setD(x)
            if (x && x.policy) setParams(Object.assign({}, x.policy))
            setErr(null)
          })
          .catch((e) => setErr(String((e && e.message) || e)))
      }, [])

      React.useEffect(() => {
        load()
      }, [load])

      // ---- 2026-09-21 新加：手动加一条（提交）----
      // 加到哪个会话：她选的；没选就挑第一个开着的，都没有就第一个
      // ⭐ 1.2.8（issue #8「手动加的记忆跑到别的会话去了」）：
      //   以前没选就**默默挑第一个开着的会话** —— 两个都开着时，她打开的是 B，记忆却加到了 A。
      //   现在优先用「你正打开的这个会话」，再退回第一个开着的。
      const 加哪个会话 = React.useCallback(() => {
        if (加在谁) return 加在谁
        if (open) return String(open)
        const 列 = (d && d.sessions) || []
        const 开着的 = 列.find((x) => x.enabled)
        return (开着的 || 列[0] || {}).id || ''
      }, [加在谁, open, d])

      const 提交一条 = React.useCallback(() => {
        const 内容 = 加内容.trim()
        if (!内容) {
          set加结果({ ok: false, 文字: '内容不能空' })
          return
        }
        const 会话 = 加哪个会话()
        if (!会话) {
          set加结果({ ok: false, 文字: '没有会话可加' })
          return
        }
        const 重要 = Number(加重要)
        post('/add', {
          session: 会话,
          text: 内容,
          at: 加时间.trim(),
          importance: Number.isFinite(重要) ? 重要 : 0.5,
          tags: 加词.trim() ? 加词.trim().split(/[\s,，、]+/).filter(Boolean) : [],
        })
          .then((r) => {
            if (r && r.ok) {
              set加结果({ ok: true, 文字: '加上了（这个会话现在 ' + r.count + ' 条）' })
              set加内容('')
              set加时间('')
              set加词('')
              load()
            } else {
              set加结果({ ok: false, 文字: (r && (r.error || r.message)) || '没加上' })
            }
          })
          .catch((e) => set加结果({ ok: false, 文字: String((e && e.message) || e) }))
      }, [加内容, 加时间, 加重要, 加词, 加哪个会话, load])

      // 订阅外面那个「进度」—— 切走再回来也看得到还在跑
      React.useEffect(() => {
        const 同步 = () => {
          setExpState(进度.扩词.状态)
          setExpNoteState(进度.扩词.说明)
          setRfState(进度.提炼.状态)
          setRfNoteState(进度.提炼.说明)
        }
        进度.订阅.add(同步)
        同步()
        return () => {
          进度.订阅.delete(同步)
        }
      }, [])

      // 切回这个页面就重读一遍 —— 不然得手动按「刷新」才看得到别处刚发生的变化
      // 注意：但一定要**限流**：库里有 800 多条的时候，/list 要吐 1 MB 左右，
      //   每次切窗口都重读 + 重画一遍，整个页面（连带别的插件面板）都会卡住 ✗
      React.useEffect(() => {
        if (typeof window === 'undefined' || !window.addEventListener) return
        let 上次 = 0
        const 回来就重读 = () => {
          if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return
          if ((进度.扩词.状态 && 进度.扩词.状态.running) || (进度.提炼.状态 && 进度.提炼.状态.running)) return // 正跑着提炼/扩词，别抢
          const 现在 = Date.now()
          if (现在 - 上次 < 10000) return // 10 秒内只读一次
          上次 = 现在
          load()
        }
        window.addEventListener('focus', 回来就重读)
        document.addEventListener('visibilitychange', 回来就重读)
        return () => {
          window.removeEventListener('focus', 回来就重读)
          document.removeEventListener('visibilitychange', 回来就重读)
        }
      }, [load])

      if (err) return React.createElement('div', { className: 'fish-module fish-memory', style: S.wrap }, React.createElement('div', { style: S.drop }, '出错了：' + err))
      if (!d || !params) return React.createElement('div', { className: 'fish-module fish-memory', style: S.wrap }, '加载中…')

      const now = Date.now()

      // ---- 第二级：某个会话的详情 ----
      // ⭐ 1.4.8（issue #26）：合并预览抽成一个函数 —— 以前它只写在「会话详情」那个
      //   `if (open) return …` 分支里，可触发它的按钮在主面板，于是没展开会话时永远渲染不出来，
      //   看着就是「点了没反应」（试算其实成功了）。现在主面板和详情都能用同一个状态。
      const 合并预览 = () =>
        并入 && 并入.length
          ? React.createElement(
              'div',
              { style: S.askBox },
              React.createElement(
                'div',
                { style: { flex: 1 } },
                '切成「按工作区」要把这些会话的记忆并成一份：',
                React.createElement(
                  'div',
                  { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 4, lineHeight: 1.7 }) },
                  并入.map((r) =>
                    '· ' + r.叫什么 + '：' + r.会话数 + ' 间会话，共 ' + r.合计 + ' 条' +
                    (r.去重 ? '（' + r.去重 + ' 条重复，并完 ' + r.并完 + ' 条）' : ''),
                  ).join(String.fromCharCode(10)),
                ),
                React.createElement(
                  'div',
                  { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 4 }) },
                  '归档的会话不会并进来。旧库都留着 —— 想退回「按会话」随时能退。',
                ),
              ),
              React.createElement(
                'button',
                {type: 'button',
                  style: S.btnDanger,
                  disabled: busy,
                  onClick: () => {
                    setBusy(true)
                    post('/merge-workspace', { 试算: false })
                      .then(() => post('/mode', { 模式: 'workspace' }))
                      .then(() => { setBusy(false); set并入(null); load() })
                      .catch(() => setBusy(false))
                  },
                },
                busy ? '并着呢…' : '并进来',
              ),
              React.createElement('button', {type: 'button',  style: S.btn, onClick: () => set并入(null) }, '算了'),
            )
          : null

      if (open) {
        const s = (d.sessions || []).find((x) => x.id === open)
        if (!s) return React.createElement('div', { className: 'fish-module fish-memory', style: S.wrap }, '找不到这个会话')
        const tr = (s.traces || []).slice(-1)[0]
        const 删 = (id, action) => post('/delete', { session: open, id, action }).then(() => { setConfirm(null); load() })
        // ⭐⭐ 2026-09-23（反馈「过期条目没标作废」）：
        //   撤销「已被取代」—— 标错了、或者状态又变回来了
        //   （不删任何东西，只把那面小旗子摘掉，摘完它又能被想起来）
        const 撤销作废 = (id) => {
          setBusy(true)
          post('/delete', { session: open, action: 'unsupersede', id: id })
            .then((r) => {
              setBusy(false)
              if (!r || !r.ok) {
                setNotes(['撤销失败：' + ((r && r.message) || '？')])
                return
              }
              setNotes(['' + r.message])
              load()
            })
            .catch((e) => {
              setBusy(false)
              setNotes(['撤销失败：' + ((e && e.message) || e)])
            })
        }
        // 提炼改坏了 —— 退回原文（单条 / 全部）✓
        const 退原文 = (id) =>
          post('/refine/undo', id === '*' ? { session: open, all: true } : { session: open, id: id })
            .then((r) => {
              setConfirm(null)
              setExpNote('退回了 ' + ((r && r.退了) || 0) + ' 条原文')
              load()
            })
            .catch((e) => setExpNote('退不回：' + String((e && e.message) || e)))
        // 把这一份记忆复制到别的会话（新对话没有上下文，测起来最干净）✓
        const 复制过去 = () =>
          post('/copy-to', { session: open, to: 复制到 })
            .then((r) => {
              setConfirm(null)
              const 尾巴 = []
              if (r && r.复制了) 尾巴.push('新加 ' + r.复制了 + ' 条')
              else 尾巴.push('一条也没加')
              if (r && r.重复) 尾巴.push('重复跳过 ' + r.重复 + ' 条')
              if (r && r.保留) 尾巴.push('那边原有的 ' + r.保留 + ' 条都留着')
              setExpNote(r && r.ok ? '' + 尾巴.join('，') + '；那个会话的开关也开了' : '失败：' + ((r && r.message) || '？'))
              load()
            })
            .catch((e) => setExpNote('失败：' + String((e && e.message) || e)))

        // 二次确认条（点「删」之后才出现，手滑不了）
        const 确认条 = (text, okLabel, action, id) =>
          React.createElement(
            'div',
            { style: S.confirm },
            React.createElement('span', { style: { flex: 1, minWidth: 0, overflowWrap: 'anywhere' } }, text),
            React.createElement('button', {type: 'button',  style: S.btnDanger, onClick: () => 删(id, action) }, okLabel),
            React.createElement('button', {type: 'button',  style: S.btn, onClick: () => setConfirm(null) }, '算了'),
          )

        // 改一条：文本框 + 重要度 + 存 / 算了
        const 改一条 = (m) =>
          React.createElement(
            'div',
            { style: S.editBox },
            React.createElement('textarea', {'aria-label': '记忆正文',
              style: S.area,
              rows: 3,
              value: edit.text,
              onChange: (e) => setEdit(Object.assign({}, edit, { text: e.target.value })),
            }),
            React.createElement(
              'div',
              { style: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginTop: 6 } },
              React.createElement('span', { style: S.dim }, '重要度'),
              React.createElement(
                'select',
                {'aria-label': '重要度',
                  style: S.inp,
                  value: String(edit.importance),
                  onChange: (e) => setEdit(Object.assign({}, edit, { importance: Number(e.target.value) })),
                },
                React.createElement('option', { value: '0' }, '随口提过'),
                React.createElement('option', { value: '0.5' }, '比较重要'),
                React.createElement('option', { value: '1' }, '非常重要（会变成「一直」记得）'),
              ),
              React.createElement('span', { style: Object.assign({}, S.dim, { flex: 1, fontSize: 'var(--fish-small)' }) }, '改之前会自动备份'),
              React.createElement(
                'button',
                {type: 'button',
                  style: S.btn,
                  disabled: !String(edit.text || '').trim(),
                  onClick: () =>
                    post('/edit', { session: open, id: m.id, text: edit.text, importance: edit.importance }).then(() => {
                      setEdit(null)
                      load()
                    }),
                },
                '保存修改',
              ),
              React.createElement('button', {type: 'button',  style: S.btn, onClick: () => setEdit(null) }, '算了'),
            ),
          )

        const 一条记忆 = (m) =>
          React.createElement(
            'div',
            // 注意：分隔线画在**整条**上（不是里面那个「行」）——
            //   这样下面那几行小字（能搜到它的词 / 讲的是）算在**这一条**里
            { key: m.id, style: S.条 },
            React.createElement(
              'div',
              { className: 'fish-record-row', style: S.row },
              // ⭐ 2026-09-22（她要的批量删除）：行首一个勾选框
              React.createElement('input', {'aria-label': '选择记忆：' + m.text,
                type: 'checkbox',
                checked: !!选中[m.id],
                title: '勾上它，再点上面的「批量删」',
                onChange: () => set选中(Object.assign({}, 选中, { [m.id]: !选中[m.id] })),
              }),
              React.createElement('div', { style: Object.assign({}, S.dim, { width: 96, flex: 'none' }) }, rel(m.at, now)),
              React.createElement(
                // ⚠注意：正文这一格给个**下限**（flexBasis 260 / minWidth 200）✗
                //   光有 flex:1 是不够的：它允许被压到 0，右边牌子一多就成竖条。
                //   有了下限 + 上面那条 flexWrap，装不下时是**牌子换行**，不是正文变窄
                'div',
                { style: { flex: '1 1 260px', minWidth: 200, overflowWrap: 'anywhere', wordBreak: 'break-word' } },
                m.已被取代
                  ? React.createElement(
                      'span',
                      {
                        style: Object.assign({}, S.dim, { textDecoration: 'line-through', opacity: 1 }),
                        title: '这条已被取代（' + (m.已被取代.为什么 || '') + '）—— 不再被想起来，东西还留着',
                      },
                      m.text,
                    )
                  : m.text,
              ),
              // ⭐⭐ 2026-09-23（反馈「过期条目没标作废」）：
              //   标了「已被取代」的，行里直接挂一个「已被取代」的牌子 + 一个撤销口
              m.已被取代
                ? React.createElement(
                    'div',
                    {
                      style: { flex: 'none', fontSize: 'var(--fish-small)', marginRight: 10, padding: '1px 6px', borderRadius: 8, background: 'var(--fish-soft)', color: 'var(--fish-warning)', overflowWrap: 'anywhere' },
                      title: (m.已被取代.为什么 || '') + '（' + rel(m.已被取代.作废于, now) + '）—— 它不再被注入，但东西还在',
                    },
                    '已被取代',
                  )
                : null,
              m.已被取代
                ? React.createElement(
                    'div',
                    {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },
                      style: Object.assign({}, S.link, { flex: 'none', fontSize: 'var(--fish-small)', marginRight: 10 }),
                      title: '撤销「已被取代」—— 它又能被想起来了（标错了 / 状态又变回来了）',
                      onClick: () => 撤销作废(m.id),
                    },
                    '恢复',
                  )
                : null,
              // ⭐⭐ 2026-09-23：**事实键** —— 注意：不挂在行里，改挂到下面那行小字
              //   行里每多一个固定宽的牌子，正文就被挤窄一分；
              //   键本来就是「附注」性质，跟「能搜到它的词」放一起正合适（见下面那条）
              React.createElement(
                'div',
                { style: Object.assign({}, S.dim, { whiteSpace: 'nowrap', flex: 'none', fontSize: 'var(--fish-small)' }), title: '鲜活度：越近就越鲜活，只影响排序。长期事实本来就不淡；没记时间的不知道是什么时候的事' },
                // ⭐⭐ 2026-09-22（反馈：「没标时间的还是鲜活 100%」）：
                //   光显示百分比会骗人 —— 长期事实本来就不淡，写「100%」像在说「刚发生」✗
                //   → 长期事实写「**不淡**」✓
                //   ⭐ 2026-09-22 再改（发现流水账来问）：**没记时间的也会淡了**
                //     （从「记下来的那天」开始算）→ 它们照常显示百分比
                //     （原来显示「没记时间」，那是我上一版判错了 —— 它们并不是不淡）
                m.freshKind === 'fact' ? '不淡'
                  : typeof m.activation === 'number' && isFinite(m.activation) ? '鲜活 ' + Math.round(m.activation * 100) + '%' : '—',
              ),
              React.createElement('div', { style: Object.assign({}, S.dim, { whiteSpace: 'nowrap', flex: 'none', fontSize: 'var(--fish-small)' }) }, impName(m.importance)),
              m.textBefore
                ? React.createElement(
                    'div',
                    {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },
                      style: Object.assign({}, S.link, { flex: 'none', fontSize: 'var(--fish-small)', marginRight: 10 }),
                      title: '看看提炼之前长什么样',
                      onClick: () => set看原文(Object.assign({}, 看原文, { [m.id]: !看原文[m.id] })),
                    },
                    看原文[m.id] ? '收起' : '原文',
                  )
                : null,
              m.textBefore
                ? React.createElement(
                    'div',
                    {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },
                      style: Object.assign({}, S.link, { flex: 'none', fontSize: 'var(--fish-small)', marginRight: 10, color: 'var(--fish-warning)' }),
                      title: '把这条退回提炼前的原文（退回后可以再提炼一遍）',
                      onClick: () => setConfirm({ id: m.id, kind: 'refineundo' }),
                    },
                    '退回',
                  )
                : null,
              React.createElement(
                'div',
                {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  style: Object.assign({}, S.link, { flex: 'none', fontSize: 'var(--fish-small)', marginRight: 10 }), onClick: () => setEdit({ id: m.id, text: m.text, importance: typeof m.importance === 'number' ? m.importance : 0.5 }) },
                '编辑',
              ),
              React.createElement('div', {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  style: Object.assign({}, S.link, { flex: 'none', fontSize: 'var(--fish-small)' }), onClick: () => setConfirm({ id: m.id, kind: 'delete' }) }, '删除'),
            ),
            m.qqSource ? React.createElement('div', { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', overflowWrap: 'anywhere' }) },
              '来源：' + m.qqSource.type + ' ' + m.qqSource.chatId + ' · ' + ({ owner: '主人私聊', member: '群成员', peer: '私聊对象', manual: '人工记录（对象待核对）' }[m.qqSource.role] || '对象待核对') + ' · 发送者：' + ((m.qqSource.senders || []).join(', ') || '未确认')) : null,
            edit && edit.id === m.id ? 改一条(m) : null,
            confirm && confirm.id === m.id && confirm.kind === 'refineundo'
              ? React.createElement(
                  'div',
                  { style: S.confirm },
                  React.createElement('span', { style: { flex: 1 } }, '把这条退回提炼前的原文？退回后它会变回「还没提炼」。'),
                  React.createElement('button', {type: 'button',  style: S.btn, onClick: () => 退原文(m.id) }, '退回'),
                  React.createElement('button', {type: 'button',  style: S.btn, onClick: () => setConfirm(null) }, '算了'),
                )
              : null,
            m.textBefore && 看原文[m.id]
              ? React.createElement(
                  'div',
                  {
                    style: Object.assign({}, S.dim, {
                      margin: '4px 0 8px',
                      fontSize: 'var(--fish-small)',
                      whiteSpace: 'pre-wrap',
                      // 注意：pre-wrap 只在空格/换行处断，长串（网址、长英文）照样横向撑破面板 —— 得补这两条
                      overflowWrap: 'anywhere',
                      wordBreak: 'break-word',
                      borderLeft: '2px solid var(--fish-warning)',
                      paddingLeft: 8,
                    }),
                  },
                  '提炼前：' + m.textBefore,
                )
              : null,
            m.related && m.related.length
              ? React.createElement(
                  'div',
                  { style: Object.assign({}, S.dim, { margin: '4px 0 8px', fontSize: 'var(--fish-small)', overflowWrap: 'anywhere', wordBreak: 'break-word' }) },
                  '能搜到它的词：' + m.related.join(' '),
                )
              : null,
            // ⭐⭐ 2026-09-23：**「这条讲的是哪件事」** —— 挂在这儿（第二行小字），不占行里的宽度
            //   ⚠注意：别用「事实键」这种我自己造的词 ——
            //     她说了「让人看不懂，写通俗一点的」✗
            m.事实键
              ? React.createElement(
                  'div',
                  { style: { margin: '4px 0 8px', fontSize: 'var(--fish-small)', overflowWrap: 'anywhere', wordBreak: 'break-word' } },
                  React.createElement('span', { style: S.dim }, '讲的是：'),
                  React.createElement(
                    'span',
                    {
                      style: { padding: '1px 6px', borderRadius: 8, background: 'var(--fish-soft)', color: 'var(--fish-info)', overflowWrap: 'anywhere' },
                      title:
                        '这条讲的是「' + m.事实键 + '」这件事。' +
                        '讲同一件事的记忆只留最新那条 —— 旧的收起来了（还能恢复）',
                    },
                    m.事实键,
                  ),
                )
              : null,
            confirm && confirm.id === m.id && confirm.kind === 'delete'
              ? 确认条('把这条收起来？它会进「已删掉的」，还能找回来。', '收起来', 'delete', m.id)
              : null,
          )

        const 已删 = s.deleted || []
        // ⭐⭐ 2026-09-24（她说的「那已被取代应该回回收站呀」）：
        //   被取代的**从主列表挪走**，收进「已删掉的」那一栏
        //   理由：它们已经不再被注入了，跟「收起来的」是一个性质，
        //         摆在主列表里只是占地方（还会挂个牌子把正文挤窄）
        //
        //   ⚠注意：但**不许挪进 `s.deleted`** —— 那是「她亲手删的」那一栏，
        //     「批量清掉」「把已删掉的清空」会**真销毁**它们 ✗
        //     被取代的是**自动标的**（几百条一起），
        //     不该被那两个按钮连坐销毁 —— 那正是丢 157 条那次的教训 ✗✗
        //   → 所以：**显示上**收进回收站，**数据上**还留在 memories 里，
        //     只是带一个「已被取代」的旗子
        const 被取代的 = (s.memories || []).filter((m) => m.已被取代)
        const 活着的 = (s.memories || []).filter((m) => !m.已被取代)

        // ---- 记忆列表的检索（几百条的时候靠翻是翻不到的）----
        // 正文、提炼前的原文、检索词、来源、id 都能搜
        const 关键字 = 搜词.trim().toLowerCase()
        const 搜过 = 关键字
          ? 活着的.filter((m) => {
              const 包 = (x) => String(x || '').toLowerCase().indexOf(关键字) >= 0
              return (
                包(m.text) ||
                包(m.textBefore) ||
                包(m.source) ||
                包(m.id) ||
                (Array.isArray(m.related) && 包(m.related.join(' ')))
              )
            })
          : 活着的

        // ⭐ 2026-09-24（反馈）：**把「记了时间的」和「没记时间的」分开**
        //   上一版它们混在一个列表里 —— 188 条有日期的排在上面，下面 662 条没日期的
        //   挤成「中间一坨」，看着就像排序坏了。原话：
        //   「还有中间没有记日期的，全卡在中间一坨了……不然的话记和没记的就全混在一起了，
        //     这个排序就没办法用了」
        //   她要**自己切** → 三种视图轮着切
        const 有时间 = (m) => !!m.at
        // ⭐⭐ 2026-09-22（她要的）：**「永远不淡」单独收成一栏**
        //   原话：「改了就会归纳到那个永远不会淡的那一行里去了，就是那一行，
        //              我们是**单独做一个收理的文件夹一样**的，不然的话那些就不需要露在外面」
        //   ⭐ 又说：「**外面都是会淡的，里面才是不会淡的**，就不用管里面了」
        //   ⚠注意：2026-09-22 再改（发现两条流水账被误标）：
        //     **「不会淡」的只有一类：长期事实**
        //     上一版我拿「鲜活度是不是钉住的」当判据 —— 那是**算分的副作用**，不是语义 ✗
        //     结果把 394 条**没抠到日期的流水账**错收进「不会淡的」里 ✗✗
        //     （一眼就看出不对）
        //     没记时间的现在**也会淡**（从「记下来的那天」开始算）→ 算「会淡的」✓
        const 不会淡 = (m) => m.category === 'stable_profile'
        const 过滤后 =
          看哪边 === '有时间'
            ? 搜过.filter(有时间)
            : 看哪边 === '没时间'
              ? 搜过.filter((m) => !有时间(m))
              : 看哪边 === '长期事实'
                ? 搜过.filter(不会淡)
                : 看哪边 === '会淡的'
                  ? 搜过.filter((m) => !不会淡(m))
                  : 搜过

        // ⭐ 排好序再画 —— 按**最左边那一列的日期**排 ✗✗
        //   上一版写的是 过滤后.slice().reverse()，那是把数组倒过来（谁先记谁在前翻个个儿），
        //   **根本没看日期**。所以补完日期顺序一点没变 —— 她一眼就看出来了 ✗
        // 这一版：有日期的按日期排，**没日期的排最后**（没日期 = 不知道啥时候的事，
        //   搁在中间会把有日期的顶散）✓
        // 注意：「没时间」那个视图里全是没日期的 → 保留类里原来的相对次序（谁先记谁在前），
        //   这样「旧的在前 / 新的在前」切一下还能看出入库先后来
        const 排序 = (m) => {
          const t = m.at ? new Date(m.at).getTime() : NaN
          return isFinite(t) ? t : null
        }
        const 排好 = 过滤后.slice().sort((a, b) => {
          const ta = 排序(a)
          const tb = 排序(b)
          if (ta === null && tb === null) return 0 // 都没日期：保持原来的相对次序
          if (ta === null) return 1 // 没日期的沉到最后
          if (tb === null) return -1
          return 顺序 === '旧' ? ta - tb : tb - ta
        })
        // 「没时间」那个视图里没有日期可比 —— 想按入库先后翻的时候还得能用
        const 画这个 = 看哪边 === '没时间' && 顺序 === '新' ? 排好.slice().reverse() : 排好
        const 有时间数 = 活着的.filter(有时间).length
        const 没时间数 = 活着的.length - 有时间数
        // ⭐ 2026-09-22：**不会淡的**单独收一栏（「全部」视图里才拆）
        //   ⭐ 判据 = 鲜活度钉住的那批（长期事实 + 没时间的）——
        //     原话：「外面都是会淡的，里面才是不会淡的」
        //   注意：2026-09-24：口径换成**活着的** —— 被取代的已经收进回收站了，
        //     不该还算在「会淡的/不会淡的」这些数里 ✗
        const 事实总数 = 活着的.filter(不会淡).length
        const 会淡总数 = 活着的.length - 事实总数

        // ⭐ 2026-09-21 晚：补日期 —— 正文里写着日期、当时却没抠出来的
        //   （老版本 抠日期 必须要四位数年份，而档案里写的是「09-17」「8月26日」）
        const 没日期的 = 活着的.filter((m) => !m.at).length
        const 补日期 = () => {
          setConfirm(null)
          setBusy(true)
          post('/backfill-dates', { session: s.id })
            .then((r) => {
              setBusy(false)
              setNotes([
                r && r.补了
                  ? '补了 ' + r.补了 + ' 条日期' + (r.猜的 ? '（其中 ' + r.猜的 + ' 条年份是按最近的算的）' : '') + '，还有 ' + r.还是没 + ' 条正文里真没写日期'
                  : '没有能补的 —— 正文里找不到日期',
              ])
              load()
            })
            .catch((e) => {
              setBusy(false)
              setNotes(['补日期失败：' + ((e && e.message) || e)])
            })
        }

        // ⭐⭐ 2026-09-22（反馈）：**补标「永远不淡」** ——
        //   提炼原来只改重要度、不碰分类（0.7.6 才修好），
        //   所以实测库里 135 条该「永远不淡」的被标成了会淡的（重要的日子就在里面）。
        //   修好提炼只影响以后的，已经记下的那些得**单独补一遍**
        //   一条条问模型太慢 → 一批一批来，界面循环调（照「补日期」的样子）
        //   ⭐⭐ 2026-09-22 晚（反馈：「有好多那种就不该是长期事实的」）：
        //     现在判**所有没判过的**（不只「会淡的」）—— 该升的升、**该降的降**
        const 没判过的 = (s.memories || []).filter((m) => !m.stableChecked).length
        // ⭐ 2026-09-22（她要的批量删除）：勾了几条
        const 已选几条 = Object.keys(选中).filter((k) => 选中[k]).length
        // ⭐ 2026-09-22：判过几条（用来显示「重判一遍」）
        const 判过的 = (s.memories || []).filter((m) => m.stableChecked).length
        // ⭐ 2026-09-22（回收站的批量清掉）：勾了几条
        const 已选清几条 = Object.keys(选中清).filter((k) => 选中清[k]).length
        const 补不淡 = (重判) => {
          setConfirm(null)
          setBusy(true)
          let 累计判 = 0
          let 累计升 = 0
          let 累计降 = 0
          let 连着失败 = 0
          let 连着空 = 0
          let 头一趟 = true
          补标进度.在跑 = true
          补标进度.重判 = !!重判
          补标进度.已 = 0
          补标进度.总 = (s.memories || []).length
          补标进度.等 = 0
          const 跑 = () => {
            // 注意：重判：只在**第一趟**带这个参数（服务端会把所有「判过」标记清掉再从头判）
            const 体 = { session: s.id, 每批: 20 }
            if (重判 && 头一趟) 体.重判 = true
            头一趟 = false
            post('/backfill-stable', 体)
              .then((r) => {
                if (!r || !r.ok) {
                  // ⚠注意：2026-09-22（反馈：跑到一半「模型报错：429 status code (no body)」）：
                  //   限流是**暂时的**，不该直接放弃 —— 等一等再试同一批
                  //   指数退避：5s → 10s → 20s → 40s → 60s，最多 6 次
                  const 是限流 = /429|rate.?limit|too many|限流|超限/i.test(String((r && r.message) || ''))
                  if (是限流 && 连着失败 < 6) {
                    连着失败++
                    const 等 = Math.min(60000, 5000 * Math.pow(2, 连着失败 - 1))
                    补标进度.等 = Math.round(等 / 1000)
                    setNotes([
                      '注意：模型那边限流了（429），等 ' + Math.round(等 / 1000) + ' 秒再试…（第 ' + 连着失败 + ' 次）',
                      '已经判好的都存下来了，不用重头来',
                    ])
                    setTimeout(跑, 等)
                    return
                  }
                  补标进度.在跑 = false
                  setBusy(false)
                  setNotes([
                    '补标失败：' + ((r && r.message) || '？'),
                    '已经判好的都存下来了 —— 再点一次会接着跑，不会重头来',
                  ])
                  return
                }
                连着失败 = 0
                补标进度.等 = 0
                累计判 += r.判了 || 0
                累计升 += r.改成不淡 || 0
                累计降 += r.降成会淡 || 0
                补标进度.已 = 累计判
                if (r.共) 补标进度.总 = r.共
                // ⚠注意：2026-09-22 修（反馈「他就卡着判着呢」）：
                //   原来这里判「完了没」用的是 `判了 > 0` ——
                //   **一批回 0 条（模型没回东西）就被当成「判完了」直接停** ✗
                //   日志实锤：07:09:21「判了 0 条，还剩 665」之后就没动静了
                //   → 改成看**服务端的 done**；一批回 0 就**接着试下一批**
                //     连着 3 批都空才停（说明模型那边真出问题了），并说清楚
                连着空 = (r.判了 || 0) === 0 ? 连着空 + 1 : 0
                setNotes([
                  '正在判… 已判 ' + 累计判 + ' 条：' + 累计升 + ' 条标成「永远不淡」、' +
                    累计降 + ' 条改成会淡' + (r.done ? '' : '，还剩 ' + r.剩 + ' 条') +
                    (r.判了 === 0 && !r.done ? '　（这批模型没回东西，再试一批）' : ''),
                ])
                // 注意：每批之间**慢一点** —— 300ms 太急，容易撞限流（反馈就是 429 挂的）
                if (!r.done) {
                  if (连着空 >= 3) {
                    补标进度.在跑 = false
                    setBusy(false)
                    setNotes([
                      '注意：连着 3 批模型都没回东西，先停了（还剩 ' + r.剩 + ' 条）。',
                      '已经判好的都存下来了 —— 再点一次会接着跑，不会重头来',
                    ])
                    return
                  }
                  setTimeout(跑, 1500)
                } else {
                  补标进度.在跑 = false
                  setBusy(false)
                  setNotes([
                    '判完了：看了 ' + 累计判 + ' 条 —— ' + 累计升 + ' 条标成「永远不淡」，' +
                      累计降 + ' 条从「永远不淡」改成会淡',
                    '（这一趟把所有还没判过的都过了一遍：该升的升、该降的降）',
                  ])
                  load()
                }
              })
              .catch((e) => {
                补标进度.在跑 = false
                setBusy(false)
                setNotes(['补标失败：' + ((e && e.message) || e), '已经判好的都存下来了 —— 再点一次会接着跑'])
              })
          }
          跑()
        }

        // ⭐⭐ 2026-09-23（第三步）：**清洗补键** —— 给老记忆补「事实键」✓
        //
        //   为什么单独一步：提炼只影响**以后**导入的；
        //   老库里那些条目是导入时进来的，**本来就没有键** ——
        //   不补的话「同一个 key 只留最新一条」对老数据一点用都没有 ✗
        //
        //   ⚠注意：**只在设置页点按钮跑，不在对话里跑**（她的死规矩）：
        //     几百条要调几百次模型，挂在对话那一轮上会把那轮卡死。
        //   注意：先「干跑」看一眼，确认了再真洗 —— 这一步要改几百条，别一上来就动库
        // 注意：算「还剩几条要洗」要跟服务端的 `要洗` **同一个口径** ——
        //   洗过的（含判了留空的）不算，不然按钮上的数字永远不消 ✗
        const 没键的 = (s.memories || []).filter((m) => !m.已被取代 && !m.refinedSkip && !m.事实键 && !m.洗键过).length
        // 判了「留空」的那些（洗过、但没键）—— 单独报个数，免得她以为漏了
        const 判留空的 = (s.memories || []).filter((m) => !m.事实键 && m.洗键过).length
        // ⚠注意：撤回按钮上的数字要跟**它真能撤的**对得上 ✗
        //   原来用的是「所有带键的」—— 把她自己手工填的也算进去了，
        //   于是按钮写「撤掉这次标的（5）」、真撤只撤掉 2 条，数对不上（她会以为坏了）
        const 可撤的 = (s.memories || []).filter((m) => m.键来源 === '清洗补键' || m.洗键过).length
        const 洗键 = (干跑) => {
          setConfirm(null)
          setBusy(true)
          let 累计洗 = 0
          let 累计给 = 0
          let 累计空 = 0
          let 累计废 = 0
          let 连着失败 = 0
          let 连着空 = 0
          洗键进度.在跑 = true
          洗键进度.干跑 = !!干跑
          洗键进度.已 = 0
          洗键进度.总 = 没键的
          const 跑 = () => {
            // 注意：干跑：只跑**一批**就停 —— 让她看几个例子再决定，
            //   不许拿几百次模型调用去"试" ✗
            const 体 = { session: s.id, 每批: 8, 干跑: !!干跑 }
            post('/wash-keys', 体)
              .then((r) => {
                if (!r || !r.ok) {
                  const 是限流 = /429|rate.?limit|too many|限流|超限/i.test(String((r && r.message) || ''))
                  if (是限流 && 连着失败 < 6) {
                    连着失败++
                    const 等 = Math.min(60000, 5000 * Math.pow(2, 连着失败 - 1))
                    setNotes([
                      '注意：模型那边限流了（429），等 ' + Math.round(等 / 1000) + ' 秒再试…（第 ' + 连着失败 + ' 次）',
                      '已经补好的都存下来了，不用重头来',
                    ])
                    setTimeout(跑, 等)
                    return
                  }
                  洗键进度.在跑 = false
                  setBusy(false)
                  setNotes([
                    '清洗失败：' + ((r && r.message) || '？'),
                    '已经补好的都存下来了 —— 再点一次会接着跑，不会重头来',
                  ])
                  return
                }
                连着失败 = 0
                累计洗 += r.洗了 || 0
                累计给 += r.给了键 || 0
                累计空 += r.留空 || 0
                累计废 += r.作废了 || 0
                洗键进度.已 = 累计洗
                if (r.总数) 洗键进度.总 = 没键的
                // ⚠注意：「模型整批没回出东西」才算失败，**不许拿「给了键 === 0」当信号** ✗
                //   模型正常地把一批全判成留空时，给了键也是 0 ——
                //   原来按那个数，连着 3 批就误报「模型没回出键」停下来（实测踩到过）
                连着空 = (r.没回出东西 || 0) >= (r.洗了 || 0) ? 连着空 + 1 : 0
                if (干跑) {
                  // 干跑：把几个例子摆出来，让她看一眼标得对不对
                  洗键进度.在跑 = false
                  setBusy(false)
                  const 例 = (r.示例 || []).map((x) => '　「' + x.键 + '」　←　' + x.正文)
                  setNotes(
                    [
                      '先试了 ' + (r.洗了 || 0) + ' 条（一个字都没改）：标了 ' + (r.给了键 || 0) + ' 条、说不用标 ' + (r.留空 || 0) + ' 条',
                      '它标出来是这样的（左边是「这条讲的是哪件事」，右边是记忆本身）：',
                    ]
                      .concat(例.length ? 例 : ['　（这批它都说不用标）'])
                      .concat(['', '看着行就点「全部开始」；不行就先别动 —— 这一步不做也不影响别的']),
                  )
                  return
                }
                setNotes([
                  '正在认… 已过 ' + 累计洗 + ' 条：标了 ' + 累计给 + ' 条、说不用标 ' + 累计空 + ' 条' +
                    (累计废 ? '、顺手收起来 ' + 累计废 + ' 条' : '') +
                    (r.done ? '' : '，还剩 ' + r.剩 + ' 条'),
                ])
                if (!r.done) {
                  if (连着空 >= 3) {
                    洗键进度.在跑 = false
                    setBusy(false)
                    setNotes([
                      '注意：连着 3 批模型一个字都没回，先停了（还剩 ' + r.剩 + ' 条）。',
                      '已经标好的都存下来了 —— 再点一次会接着跑',
                      '（要是它只是说「这批都不用标」，那不算出错、会自己往下走）',
                    ])
                    return
                  }
                  setTimeout(跑, 1500)
                } else {
                  洗键进度.在跑 = false
                  setBusy(false)
                  setNotes([
                    '跑完了：过了 ' + 累计洗 + ' 条 —— 标了 ' + 累计给 + ' 条、说不用标 ' + 累计空 + ' 条' +
                      (累计废 ? '，其中 ' + 累计废 + ' 条因为「讲的是同一件事」被收起来了（还留着、能恢复）' : ''),
                    '说不用标的那批一个字都没动（要退回来就点「撤掉这次标的」）',
                  ])
                  load()
                }
              })
              .catch((e) => {
                洗键进度.在跑 = false
                setBusy(false)
                setNotes(['跑失败了：' + ((e && e.message) || e), '已经标好的都存下来了 —— 再点一次会接着跑'])
              })
          }
          跑()
        }

        // 整份撤回（把这次自动标的全撤掉、顺手收起来的全放回来）✓
        const 撤销洗键 = () => {
          setConfirm(null)
          setBusy(true)
          post('/wash-keys/undo', { session: s.id })
            .then((r) => {
              setBusy(false)
              if (!r || !r.ok) {
                setNotes(['撤回失败：' + ((r && r.message) || '？')])
                return
              }
              setNotes([
                '撤完了：撤掉 ' + (r.摘了 || 0) + ' 条自动标的、放回来 ' + (r.恢复 || 0) + ' 条被收起来的',
                '（你自己填的那些没动 —— 这个按钮只管自动标的）',
              ])
              load()
            })
            .catch((e) => {
              setBusy(false)
              setNotes(['撤回失败：' + ((e && e.message) || e)])
            })
        }

        // ⭐ 2026-09-22（反馈「回收站还没有批量删除，就批量清空」）：
        //   「已删掉的」那一栏补一个**批量清掉**
        //   注意：这个是**真销毁**（不是收起来）→ 界面必须问两遍
        // ⭐⭐ 2026-09-23（反馈：「那这里没有批量找回呀」）：
        //   「已删掉的」原来只有**批量清掉**，想全捞回来只能一条条点「找回来」✗
        //   → 补一个**批量找回**（勾了哪几条就捞哪几条）
        //   注意：`只合并` = 只捞「合并掉的」那批 —— 等于**一键撤销整次合并**
        //   注意：这个**不是销毁**，是往回捞，所以不用问两遍；但界面上还是先说一句捞几条
        const 批回 = (会话, 只合并) => {
          const ids = 只合并 ? [] : Object.keys(选中清).filter((k) => 选中清[k])
          if (!只合并 && !ids.length) {
            set批回问(false)
            return
          }
          setBusy(true)
          post('/delete', Object.assign({ session: 会话.id, action: 'restorebatch', ids: ids }, 只合并 ? { 只找回合并掉的: true } : {}))
            .then((r) => {
              setBusy(false)
              set批回问(false)
              if (!r || !r.ok) {
                setNotes(['批量找回失败：' + ((r && r.message) || '？')])
                return
              }
              set选中清({})
              setNotes(['' + r.message + '（「已删」里还剩 ' + r.剩 + ' 条）'])
              load()
            })
            .catch((e) => {
              setBusy(false)
              setNotes(['批量找回失败：' + ((e && e.message) || e)])
            })
        }
        const 批清 = (会话) => {
          const ids = Object.keys(选中清).filter((k) => 选中清[k])
          if (!ids.length) {
            set批清问(false)
            return
          }
          setBusy(true)
          post('/delete', { session: 会话.id, action: 'purgebatch', ids: ids })
            .then((r) => {
              setBusy(false)
              set批清问(false)
              if (!r || !r.ok) {
                setNotes(['批量清掉失败：' + ((r && r.message) || '？')])
                return
              }
              set选中清({})
              setNotes(['' + r.message + '（「已删」里还剩 ' + r.剩 + ' 条）'])
              load()
            })
            .catch((e) => {
              setBusy(false)
              setNotes(['批量清掉失败：' + ((e && e.message) || e)])
            })
        }

        // ⭐⭐ 2026-09-22（反馈：「查重我们是不是还没做啊？我怎么没有找到按钮」）：
        //   去重一直有，但都是**自动**的 —— 召回时（注入前只留一条）、导入时。
        //   **库里已经存着的重复没人管** ✗
        //   注意：不能一键全合：「汇总+明细」那种一长一短，合了会丢信息
        //     → 真重复给「一键合」，汇总+明细只列出来让她自己挑
        const 去查重 = (会话) => {
          setBusy(true)
          // ⚠注意：面板在**记忆列表那一块里**（跟「补标不淡」的确认框一样），
          //   列表默认是折叠的 —— 不展开就看不见面板 ✗
          //   → 点查重时**顺手把列表展开**（按钮本身在标题行，永远看得见）
          set看记忆(true)
          post('/duplicates', { session: 会话.id })
            .then((r) => {
              setBusy(false)
              if (!r || !r.ok) {
                setNotes(['查重失败：' + ((r && r.message) || '？')])
                return
              }
              const 选 = {}
              const 勾 = {}
              ;(r.组 || []).forEach((g, i) => {
                // 默认留**最长**的那条 —— 「汇总+明细」时长的信息更全，别默认留短的 ✗
                选[i] = g.条们.reduce((a, b) => (b.长 > a.长 ? b : a), g.条们[0]).id
                // ⭐ 「真重复」默认勾上（合了安全）；「汇总+明细」默认**不勾**（合了会丢信息）✓
                勾[i] = g.类型 === '真重复'
              })
              set查重(r)
              set查重选(选)
              set查重合(勾)
              set查重开(true)
              if (!(r.组 || []).length) setNotes(['查过了：没有「几乎一样」的记忆'])
            })
            .catch((e) => {
              setBusy(false)
              setNotes(['查重失败：' + ((e && e.message) || e)])
            })
        }
        // 合掉：每组留一条，其余交给**服务端再验一遍**（不像的会被保住）✓
        //   ⚠注意：2026-09-22 修（反馈：「把一些别的对的事实给删了」）：
        //     原来客户端自己算好「删哪些」就发过去，服务端不验 ✗
        //     现在发的是「组」（留哪条、删哪些），**服务端自己再算一遍相似度**
        const 合重复 = (会话, 只合真重复) => {
          if (!查重) return
          const 组们 = []
          ;(查重.组 || []).forEach((g, i) => {
            if (只合真重复 && g.类型 !== '真重复') return
            // ⭐⭐ 2026-09-23：「按我选的合」**只合勾上的组** ——
            //   原来它把每一组都合掉（默认全选中），一点就丢掉 123 条 ✗
            if (!只合真重复 && !查重合[i]) return
            const 留 = 查重选[i] || g.条们[0].id
            const 删 = g.条们.filter((t) => t.id !== 留).map((t) => t.id)
            if (删.length) 组们.push({ 留: 留, 删: 删 })
          })
          if (!组们.length) {
            setNotes([
              只合真重复 ? '这一批里没有「真重复」组' : '一组都没勾（「汇总+明细」默认不勾，要合得先勾上）',
            ])
            return
          }
          setBusy(true)
          post('/duplicates/merge', { session: 会话.id, 组: 组们 })
            .then((r) => {
              setBusy(false)
              if (!r || !r.ok) {
                setNotes(['合并：' + ((r && r.message) || '？')])
                return
              }
              const 行 = ['' + r.message + '（剩下的：' + r.剩 + ' 条）', '合掉的都收在「已删」里，点开能找回来']
              if (r.保住) {
                行.push('注意：有 ' + r.保住 + ' 条不够像、没敢合（保住了）：')
                ;(r.保住明细 || []).forEach((x) => 行.push('　　' + x.像度 + '  ' + x.text))
              }
              setNotes(行)
              set查重(null)
              set查重开(false)
              load()
            })
            .catch((e) => {
              setBusy(false)
              setNotes(['合并失败：' + ((e && e.message) || e)])
            })
        }

        // ⭐⭐ 2026-09-22（她要的）：**批量删** —— 收进「已删」，不是销毁
        //   「还是需要 2 次确认的」→ 点按钮只出确认条，确认条上再点才删
        const 批删 = (会话) => {
          const ids = Object.keys(选中).filter((k) => 选中[k])
          if (!ids.length) {
            set批删问(false)
            return
          }
          setBusy(true)
          post('/delete', { session: 会话.id, action: 'batchdelete', ids: ids })
            .then((r) => {
              setBusy(false)
              set批删问(false)
              if (!r || !r.ok) {
                setNotes(['批量删失败：' + ((r && r.message) || '？')])
                return
              }
              set选中({})
              setNotes(['' + r.message + '（剩下的：' + r.剩 + ' 条）', '删掉的都收在「已删」里，点开能找回来'])
              load()
            })
            .catch((e) => {
              setBusy(false)
              setNotes(['批量删失败：' + ((e && e.message) || e)])
            })
        }

        // ═══════════════════════════════════════════════════════════
        // ⭐⭐ 2026-09-22（她的第十件）：**从会话生成档案** —— 给别人用的功能
        //
        //   ① 看这个工作区有哪些会话、勾几个
        //   ② 算要切几批、多少字（**不花钱**）
        //   ③ 一批一批跑（注意：这一步调模型、花钱）—— 跑完一批就把条目攒起来，
        //      下一批带上「已经记过的」，同一件事不会被收两遍
        //   ④ 存成档案文件 → 再走已有的「从旧档案导入」变成记忆条目
        // ═══════════════════════════════════════════════════════════════
        const 开生成 = () => {
          set生成开(true)
          set生成会话(null)
          set生成计划(null)
          set生成条目([])
          set生成档(null)
          set生成进度(null)
          post('/gen-sessions', { session: s.id })
            .then((r) => {
              if (!r || !r.ok) {
                setNotes(['读会话列表失败：' + ((r && r.message) || '？')])
                return
              }
              set生成会话(r.会话 || [])
              set生成诊断(r.诊断 || null)
              // 建议路径（服务端按这个会话的工作目录算的）—— 用户能改
              if (r.建议存到) set生成存到(String(r.建议存到))
              // ⚠注意：2026-09-22（反馈：「默认不该全选」）：
              //   原来我默认**全勾上** —— 那等于替用户决定「全都处理一遍」，
              //   而这一步后面是要**调模型、花钱**的 ✗
              //   → 默认**一个都不勾**，让用户自己挑
              set生成选({})
            })
            .catch((e) => setNotes(['读会话列表失败：' + ((e && e.message) || e)]))
        }

        const 勾的sid = () => Object.keys(生成选).filter((k) => 生成选[k])

        const 算生成 = () => {
          const sids = 勾的sid()
          if (!sids.length) {
            setNotes(['一个会话都没勾'])
            return
          }
          setBusy(true)
          setNotes(['算着呢…（要读一遍会话、去重、切段，一个会话约一秒）'])
          post('/gen-plan', { session: s.id, sids: sids })
            .then((r) => {
              setBusy(false)
              if (!r || !r.ok) {
                setNotes(['算失败：' + ((r && r.message) || '？')])
                return
              }
              set生成计划(r)
              set生成条目([])
              set生成档(null)
              setNotes([])
            })
            .catch((e) => {
              setBusy(false)
              setNotes(['算失败：' + ((e && e.message) || e)])
            })
        }

        const 跑生成 = () => {
          const sids = 勾的sid()
          if (!sids.length || !生成计划) return
          const 总批 = 生成计划.批数
          setBusy(true)
          set生成档(null)
          const 攒 = 生成条目.slice()
          let 连着空 = 0
          const 跑一批 = (批号) => {
            if (批号 > 总批) {
              setBusy(false)
              set生成进度(null)
              setNotes(['跑完了：' + 总批 + ' 批，攒了 ' + 攒.length + ' 条。' + (攒.length ? '点「存成档案文件」' : '模型这一轮一条都没收；回文长度记在诊断日志里，换个会话或再点一次试试')])
              return
            }
            set生成进度({ 批号, 批数: 总批, 在跑: true, 模型: (生成进度 && 生成进度.模型) || '' })
            post('/gen-run', {
              session: s.id,
              sids: sids,
              批号: 批号,
              // 注意：把前面攒的条目当「已记清单」传过去 —— 这是防重复的机制
              已记: 攒.map((x) => x.章 + '|' + x.日期 + '|' + x.话),
              provider: 生成备 ? 生成备.provider : undefined,
              model: 生成备 ? 生成备.model : undefined,
            })
              .then((r) => {
                if (!r || !r.ok) {
                  setBusy(false)
                  set生成进度(null)
                  setNotes(['第 ' + 批号 + ' 批失败：' + ((r && r.message) || '？'), '已经跑好的 ' + 攒.length + ' 条留着，再点一次会接着跑'])
                  return
                }
                if (r.条目 && r.条目.length) {
                  r.条目.forEach((x) => 攒.push(x))
                  连着空 = 0
                } else {
                  连着空++
                }
                set生成条目(攒.slice())
                set生成进度({ 批号, 批数: 总批, 在跑: true, 模型: r.模型 || '' })
                if (r.done) {
                  setBusy(false)
                  set生成进度(null)
                  setNotes(['跑完了：' + 总批 + ' 批，攒了 ' + 攒.length + ' 条。' + (攒.length ? '点「存成档案文件」' : '模型这一轮一条都没收；回文长度记在诊断日志里，换个会话或再点一次试试')])
                  return
                }
                // 一批回 0 条不算失败，但也别无限跑 —— 连着 3 批空就停
                if (连着空 >= 3) {
                  setBusy(false)
                  set生成进度(null)
                  setNotes(['连着 3 批模型没回东西，先停了。再点一次会接着跑'])
                  return
                }
                setTimeout(() => 跑一批(批号 + 1), 300)
              })
              .catch((e) => {
                setBusy(false)
                set生成进度(null)
                setNotes(['第 ' + 批号 + ' 批失败：' + ((e && e.message) || e), '再点一次会接着跑'])
              })
          }
          跑一批(1)
        }

        const 存生成 = () => {
          if (!生成条目.length) {
            setNotes(['还没有条目'])
            return
          }
          setBusy(true)
          post('/gen-save', { session: s.id, 条目: 生成条目, 来源: (生成计划 && 生成计划.天数 + ' 天') || '', 存到: 生成存到 })
            .then((r) => {
              setBusy(false)
              if (!r || !r.ok) {
                setNotes(['存失败：' + ((r && r.message) || '？')])
                return
              }
              set生成档(r)
              setNotes(['档案存到：' + r.存到, '共 ' + r.条数 + ' 条' + (r.去掉重复 ? '（去掉了 ' + r.去掉重复 + ' 条重复）' : '')])
            })
            .catch((e) => {
              setBusy(false)
              setNotes(['存失败：' + ((e && e.message) || e)])
            })
        }

        // ---- 用 DSH 自己的模型给记忆扩词 ----
        // 「直接用我们 deepseek 的可不可以」→ 可以 插件能调宿主模型，不用外部 key
        const 没扩的 = (s.memories || []).filter((m) => !m.related || !m.related.length).length
        // 要提炼的：档案导入进来的、还没提炼过的
        const 没提炼的 = (s.memories || []).filter((m) => String(m.source || '').indexOf('档案导入') === 0 && !m.refined).length
        const 扩词区 = () => {
          const 小件 = []
          小件.push(React.createElement('div', { key: 'h', style: S.h }, '提炼 / 扩词（用 DSH 自己的模型）'))
          小件.push(
            React.createElement(
              'div',
              { key: 'd', style: S.dim },
              React.createElement('div', null, '两件事不一样，分开的：'),
              React.createElement(
                'div',
                { style: { margin: '4px 0 0 8px' } },
                React.createElement('b', null, '① 扩词'),
                '：给每条记忆加一批「以后可能搜到它的词」，比如「她的衣服是蓝色的」加上「颜色 蓝色 衣着 穿搭」。' +
                  '这样问「她喜欢什么颜色」也能捞到它。不改记忆本身，只是加索引。',
              ),
              React.createElement(
                'div',
                { style: { margin: '4px 0 0 8px' } },
                React.createElement('b', null, '② 提炼'),
                '：把导入进来的档案原文改写成「一条第一人称的记忆」。' +
                  '比如「- 极致温柔：他会第一时间接住她的情绪」→「我会第一时间接住她的情绪」。' +
                  '会改记忆本身（原文留在底里，能对照）。',
              ),
              React.createElement(
                'div',
                { style: { margin: '4px 0 0 8px' } },
                '两个都在后台跑一次就行；跑完之后每轮对话不再调用模型，所以不卡、不额外花钱。',
              ),
            ),
          )

          // ---- 选模型 ----
          const 当前 = mdl && mdl.选中的 ? mdl.选中的 : (mdl && mdl.默认) || null
          const 当前串 = 当前 ? 当前.provider + ' / ' + 当前.model : '（还没读到）'
          小件.push(
            React.createElement(
              'div',
              { key: 'pick', style: S.nameBox },
              React.createElement('div', { style: { flex: 'none', width: 100 } }, '用哪个模型'),
              mdl
                ? React.createElement(
                    'select',
                    {'aria-label': '用哪个模型',
                      style: Object.assign({}, S.inp, { width: 300 }),
                      value: 当前 ? 当前.provider + '|' + 当前.model : '',
                      onChange: (e) => {
                        const v = String(e.target.value || '')
                        const i = v.indexOf('|')
                        const 选 = i > 0 ? { provider: v.slice(0, i), model: v.slice(i + 1) } : null
                        post('/names', { llmModel: 选 }).then(() => {
                          setMdl(Object.assign({}, mdl, { 选中的: 选 }))
                          setExpNote(选 ? '以后就用 ' + 选.provider + ' / ' + 选.model + '' : '改回用会话自己的模型')
                        })
                      },
                    },
                    React.createElement('option', { value: '' }, '（用会话自己的：' + (mdl.默认 ? mdl.默认.provider + '/' + mdl.默认.model : '？') + '）'),
                    (mdl.providers || []).map((p) =>
                      React.createElement(
                        'optgroup',
                        { key: p.id, label: p.name + '（' + (p.models || []).length + ' 个）' },
                        (p.models || []).map((m) =>
                          React.createElement('option', { key: p.id + '|' + m.id, value: p.id + '|' + m.id }, m.name + '　（' + p.id + '）'),
                        ),
                      ),
                    ),
                  )
                : React.createElement('span', { style: S.dim }, '点右边「读一下有哪些模型」'),
              React.createElement(
                'button',
                {type: 'button',
                  style: S.btn,
                  onClick: () => {
                    setExpNote('读着呢…')
                    post('/models', { session: open })
                      .then((r) => {
                        setMdl(r)
                        setExpNote(
                          r && r.ok
                            ? 'DSH 里有 ' + (r.providers || []).length + ' 个 provider，共 ' +
                              (r.providers || []).reduce((a, p) => a + (p.models || []).length, 0) + ' 个模型。现在用：' + 当前串
                            : '失败：' + ((r && r.message) || '？'),
                        )
                      })
                      .catch((e) => setExpNote('失败：' + String((e && e.message) || e)))
                  },
                },
                '读一下有哪些模型',
              ),
            ),
          )

          // ⚠⚠注意：2026-09-22（她的反馈，原话）：
          //   「他那个就是重判的进度条跟那个提炼的是在一起呀。我发现我得往下翻
          //     才能看到进度条，那就不对呀。重判应该有个单独的进度条吧？如果你
          //     点了的话，它就会弹出来；如果没点，它就没有。」
          //   她说得对 —— 补标/重判的进度条原来**跟「模型与扩词」「提炼」挤在
          //   同一张卡里**，点了重判得往上翻才看得见，没点的人还会以为那条是
          //   自己点出来的 ✗
          //   → 搬走：谁点的，进度条就跟在谁的按钮旁边（下面那个按钮行里）✓
          // ---- 进度条 ----
          if (exp && exp.总) {
            const 已 = Math.max(0, exp.总 - exp.剩)
            const 百 = exp.总 ? Math.round((已 / exp.总) * 100) : 0
            小件.push(
              React.createElement(
                'div',
                { key: 'bar', style: { margin: '8px 0' } },
                React.createElement(
                  'div',
                  { style: S.barOut },
                  React.createElement('div', { style: Object.assign({}, S.barIn, { width: 百 + '%' }) }),
                ),
                React.createElement(
                  'div',
                  { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 4 }) },
                  (exp.模式 || '扩词') + '：' + 已 + ' / ' + exp.总 + ' 条（' + 百 + '%）' + (exp.剩 ? '　还剩 ' + exp.剩 + ' 条' : '　完事了'),
                ),
              ),
            )
          }
          // 提炼的进度条（跟扩词各一条，不互相盖）✓
          if (rf && rf.总) {
            const 已 = Math.max(0, rf.总 - rf.剩)
            const 百 = rf.总 ? Math.round((已 / rf.总) * 100) : 0
            小件.push(
              React.createElement(
                'div',
                { key: 'rfbar', style: { margin: '8px 0' } },
                React.createElement(
                  'div',
                  { style: S.barOut },
                  React.createElement('div', { style: Object.assign({}, S.barIn, { width: 百 + '%' }) }),
                ),
                React.createElement(
                  'div',
                  { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 4 }) },
                  '提炼：' + 已 + ' / ' + rf.总 + ' 条（' + 百 + '%）' + (rf.剩 ? '　还剩 ' + rf.剩 + ' 条' : '　完事了'),
                ),
              ),
            )
          }

          小件.push(
            React.createElement(
              'div',
              { key: 'b', style: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', margin: '8px 0', flexWrap: 'wrap' } },
              React.createElement(
                'button',
                {type: 'button',
                  style: S.btn,
                  disabled: !!(exp && exp.running),
                  onClick: () => {
                    setExpNote('测着呢…')
                    post('/llm-check', { session: open })
                      .then((r) => {
                        setExpNote(
                          r && r.ok
                            ? '模型通了（' + r.provider + ' / ' + r.model + '，' + r.ms + 'ms）→ 它回了「' + String(r.text || '').slice(0, 20) + '」'
                            : '失败：不通：' + ((r && r.message) || '？'),
                        )
                      })
                      .catch((e) => setExpNote('失败：' + String((e && e.message) || e)))
                  },
                },
                '先测一下模型',
              ),
              React.createElement(
                'button',
                {type: 'button',
                  style: S.btnDanger,
                  disabled: !!(exp && exp.running) || 没扩的 === 0,
                  onClick: () => {
                    let 累计 = 0
                    let 空批 = 0 // 连着几批一条词都没扩出来
                    let 每批 = 6 // 空批就把批量减半 —— 输入越少、思考越少，越不容易被截断
                    const 跑 = () => {
                      post('/expand', { session: open, 每批: 每批 })
                        .then((r) => {
                          if (!r || !r.ok) {
                            setExp({ running: false, 累计: 累计, 总: s.memories.length, 剩: r ? r.剩 : 0 })
                            setExpNote('失败：' + ((r && r.message) || '？'))
                            load()
                            return
                          }
                          累计 += r.改了
                          setExp({ running: !r.done, 累计: 累计, 总: r.总数, 剩: r.剩, 模型: r.provider + '/' + r.model })
                          // 注意：一批没扩出词就收手的话，模型偶发抽风会让它看起来「自己取消」✗
                          //   空批就把**批量减半**（输入少 → 思考少 → 不容易被截断），
                          //   连着空三批才停，并说清楚原因
                          if (r.改了 > 0) {
                            空批 = 0
                            每批 = 6
                          } else {
                            空批++
                            每批 = Math.max(1, Math.floor(每批 / 2))
                          }
                          setExpNote(
                            r.改了
                              ? '这批扩了 ' + r.改了 + ' 条，还剩 ' + r.剩 + ' 条（' + r.ms + 'ms/批，' + r.provider + '/' + r.model + '）'
                              : '模型这批没回可用的词（可能思考吃光了预算）—— 下一批缩到 ' + 每批 + ' 条再试（还剩 ' + r.剩 + ' 条）',
                          )
                          if (!r.done && (r.改了 > 0 || 空批 < 3)) setTimeout(跑, 400)
                          else {
                            setExp({ running: false, 累计: 累计, 总: r.总数, 剩: r.剩 })
                            if (空批 >= 3) {
                              setExpNote('连着 ' + 空批 + ' 批模型没回可用的词（缩到 ' + 每批 + ' 条也不行），先停了 —— 过会儿再点一次「开始扩词」')
                            }
                            load()
                          }
                        })
                        .catch((e) => {
                          setExp({ running: false, 累计: 累计, 总: s.memories.length, 剩: 没扩的 })
                          setExpNote('失败：' + String((e && e.message) || e))
                        })
                    }
                    setExp({ running: true, 累计: 0, 总: s.memories.length, 剩: 没扩的 })
                    setExpNote('开始…')
                    跑()
                  },
                },
                exp && exp.running ? '扩着呢…' : '开始扩词',
              ),
              React.createElement('span', { style: S.dim }, '② 扩词：还没扩的 ' + 没扩的 + ' / ' + (s.memories || []).length + ' 条'),
            ),
          )

          // ---- 提炼（导入进来的档案原文 → 真正的记忆）----
          小件.push(
            React.createElement(
              'div',
              { key: 'rf', style: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', margin: '4px 0 8px', flexWrap: 'wrap' } },
              React.createElement(
                'button',
                {type: 'button',
                  style: S.btnDanger,
                  disabled: !!(rf && rf.running) || 没提炼的 === 0,
                  onClick: () => {
                    let 累计 = 0
                    let 跳 = 0
                    let 词 = 0
                    let 日 = 0
                    let 重 = 0
                    let 没解 = 0
                    const 跑 = () => {
                      post('/refine', { session: open, 每批: 6 })
                        .then((r) => {
                          if (!r || !r.ok) {
                            setRf({ running: false, 累计: 累计, 总: s.memories.length, 剩: r ? r.剩 : 0, 模式: '提炼' })
                            setRfNote('失败：' + ((r && r.message) || '？'))
                            load()
                            return
                          }
                          累计 += r.改了
                          跳 += r.跳过 || 0
                          词 += r.出了词的 || 0
                          日 += r.出了日期的 || 0
                          重 += r.出了重要度 || 0
                          没解 += r.没解析出来 || 0
                          setRf({ running: !r.done, 累计: 累计, 总: 累计 + r.剩, 剩: r.剩, 模式: '提炼' })
                          setRfNote(
                            '这批改写 ' + r.改了 + ' 条、跳过 ' + (r.跳过 || 0) + ' 条，还剩 ' + r.剩 + ' 条（' +
                              r.ms + 'ms/批，' + r.provider + '/' + r.model + '）',
                          )
                          if (!r.done) setTimeout(跑, 400)
                          else {
                            setRf({ running: false, 累计: 累计, 总: 累计, 剩: 0, 模式: '提炼' })
                            // 检索词是提炼顺手出的，所以跑完这趟通常不用再单独跑扩词
                            setRfNote(
                              '提炼完了：改写 ' + 累计 + ' 条，跳过 ' + 跳 + ' 条' +
                                (词 ? '；其中 ' + 词 + ' 条顺手出了检索词，不用再跑扩词了' : '（这批没出检索词，可以再点「② 扩词」补）') +
                                (日 ? '；' + 日 + ' 条顺手出了日期' : '') +
                                (重 ? '；' + 重 + ' 条顺手判了重要度' : '') +
                                (没解 ? '；有 ' + 没解 + ' 条模型没回出东西，点「重跑跳过的」再试一次' : ''),
                            )
                            load()
                          }
                        })
                        .catch((e) => {
                          setRf({ running: false, 累计: 累计, 总: s.memories.length, 剩: 没提炼的, 模式: '提炼' })
                          setRfNote('失败：' + String((e && e.message) || e))
                        })
                    }
                    setRf({ running: true, 累计: 0, 总: 没提炼的, 剩: 没提炼的, 模式: '提炼' })
                    setRfNote('开始提炼…')
                    跑()
                  },
                },
                rf && rf.running ? '提炼着呢…' : '开始提炼',
              ),
              React.createElement('span', { style: S.dim }, '① 提炼：还没提炼的 ' + 没提炼的 + ' 条'),
            ),
          )
          // 提炼改坏了能退回 —— 单条的在下面每条记忆上，这里是整批
          {
            const 提炼过的 = (s.memories || []).filter((m) => m.textBefore).length
            if (提炼过的 > 0) {
              小件.push(
                React.createElement(
                  'div',
                  { key: 'undo', style: { margin: '2px 0 6px' } },
                  confirm && confirm.kind === 'refineundoall'
                    ? React.createElement(
                        'div',
                        { style: S.confirm },
                        React.createElement('span', { style: { flex: 1 } }, '把提炼过的 ' + 提炼过的 + ' 条全退回原文？退回后它们会变回「还没提炼」。'),
                        React.createElement('button', {type: 'button',  style: S.btn, onClick: () => 退原文('*') }, '全退回'),
                        React.createElement('button', {type: 'button',  style: S.btn, onClick: () => setConfirm(null) }, '算了'),
                      )
                    : React.createElement(
                        'button',
                        {type: 'button',
                          style: S.btn,
                          disabled: !!(rf && rf.running),
                          title: '把提炼过的记忆全部退回提炼前的原文',
                          onClick: () => setConfirm({ id: '*', kind: 'refineundoall' }),
                        },
                        '退回全部原文（' + 提炼过的 + ' 条）',
                      ),
                ),
              )
            }
          }
          // 被「跳过」的（没改写过的）能放回队列重跑 ——
          // 模型偶尔整批回不出东西，那种不该永远躺着
          {
            const 跳过的 = (s.memories || []).filter((m) => m.refinedSkip && !m.textBefore).length
            if (跳过的 > 0) {
              小件.push(
                React.createElement(
                  'div',
                  { key: 'retry', style: { margin: '0 0 6px', fontSize: 'var(--fish-small)' } },
                  React.createElement(
                    'button',
                    {type: 'button',
                      style: S.btn,
                      disabled: !!(rf && rf.running),
                      title: '把「跳过」的那些放回队列，再提炼一遍（模型偶尔会整批回不出东西）',
                      onClick: () =>
                        post('/refine/retry', { session: open })
                          .then((r) => {
                            setRfNote('放回了 ' + ((r && r.放回) || 0) + ' 条，可以再点「开始提炼」')
                            load()
                          })
                          .catch((e) => setRfNote('放不回：' + String((e && e.message) || e))),
                    },
                    '重跑跳过的（' + 跳过的 + ' 条）',
                  ),
                ),
              )
            }
          }
          if (expNote) 小件.push(React.createElement('div', { key: 'n', style: Object.assign({}, S.ok, { fontSize: 'var(--fish-small)', margin: '4px 0' }) }, expNote))
          if (rfNote) 小件.push(React.createElement('div', { key: 'n2', style: Object.assign({}, S.ok, { fontSize: 'var(--fish-small)', margin: '4px 0' }) }, rfNote))

          // ---- 复制记忆到别的会话 ----
          // 新开一个空对话把记忆复制过去 —— 那边一点历史都没有，测起来最干净
          {
            const 别的 = (d.sessions || []).filter((x) => x.id !== open)
            if (别的.length) {
              小件.push(
                React.createElement(
                  'div',
                  { key: 'copy', style: { marginTop: 14 } },
                  React.createElement(
                    'div',
                    {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  style: Object.assign({}, S.h, { cursor: 'pointer' }), onClick: () => set复制开(!复制开) },
                    (复制开 ? '▾ ' : '▸ ') + '复制记忆到别的会话',
                  ),
                  复制开
                    ? React.createElement(
                        'div',
                        null,
                        React.createElement(
                          'div',
                          { style: S.nameBox },
                          React.createElement('div', { style: { flex: 'none', width: 76 } }, '复制到'),
                          React.createElement(
                            'select',
                            {'aria-label': '复制到',  style: Object.assign({}, S.inp, { flex: 1, width: 'auto', minWidth: 150 }), value: 复制到, onChange: (e) => set复制到(e.target.value) },
                            React.createElement('option', { value: '' }, '（选一个会话）'),
                            别的.map((x) =>
                              React.createElement('option', { key: x.id, value: x.id }, (x.title || x.id.slice(0, 18)) + '（' + x.count + ' 条）'),
                            ),
                          ),
                          React.createElement(
                            'button',
                            {type: 'button',
                              style: S.btnDanger,
                              disabled: !复制到 || !!(exp && exp.running) || !!(rf && rf.running),
                              onClick: () => setConfirm({ id: '*', kind: 'copyto' }),
                            },
                            '复制过去（' + (s.memories || []).length + ' 条）',
                          ),
                        ),
                        confirm && confirm.kind === 'copyto'
                          ? React.createElement(
                              'div',
                              { style: S.confirm },
                              React.createElement('span', { style: { flex: 1 } }, '把这一份 ' + (s.memories || []).length + ' 条加进那个会话？那边**原来的都留着**，只补它还没有的（同一句会跳过）。'),
                              React.createElement('button', {type: 'button',  style: S.btnDanger, onClick: 复制过去 }, '确认复制'),
                              React.createElement('button', {type: 'button',  style: S.btn, onClick: () => setConfirm(null) }, '算了'),
                            )
                          : null,
                        React.createElement(
                          'div',
                          { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)' }) },
                          '做法：新开一个空对话 → 回来这里把它选中 → 复制过去。那边一点历史都没有，她答得上来就一定是插件给的（复制过去会自动把那个会话的开关打开；只加不删，那边原本记的不会被换掉）',
                        ),
                      )
                    : null,
                ),
              )
            }
          }
          return 小件
        }

        // ---- 从旧档案导入 ----
        // 原则（照 AAAAGENT 的「导入旧聊天」）：
        //   ① 先扫出候选，挑完再落库 —— 不直接写进库
        //   ② 已遗忘的内容不能因为再导一次就复活
        //   ③ 猜不到日期就 null，绝不编
        const 扫描 = () => {
          setImpBusy(true)
          setImpNote(null)
          post('/import/scan', { session: open })
            .then((r) => {
              setImpBusy(false)
              if (!r || !r.ok) {
                setImpNote('扫不了：' + ((r && r.message) || '？'))
                return
              }
              // 默认只勾「记忆卡 / 总档案」这种明显是记忆的 ——
              // 同一个文件夹里还有我自己的工程笔记，那个不能导 ✗
              //
              // ⚠注意：2026-09-24 修（反馈：「别人导入会踩什么坑」时发现的）：
              //   原来**只认「记忆卡 / 总档案」两个词** —— 别人的档案叫
              //   `my_memories.md`、`关于我.md`、`profile.txt` → **一个都不勾**，
              //   扫完看着一片空白，很容易以为没扫到 ✗
              //   → 分三层：先认像记忆的名字；一个都没认出来就**勾上有内容的**（排除明显的笔记/说明）；
              //     实在拿不准就全勾上（她还能自己取消）✓
              const 像记忆 = /记忆卡|总档案|记忆|档案|回忆|自传|memory|memoir|profile|about|diary|journal/i
              const 像笔记 = /笔记|notes?|log|readme|说明|索引|目录|index|changelog|todo|草稿|draft|脚本|script/i
              const 文件们 = r.files || []
              const files = {}
              const 第一批 = 文件们.filter((f) => 像记忆.test(f.name))
              if (第一批.length) {
                for (const f of 文件们) files[f.name] = 像记忆.test(f.name)
              } else {
                const 第二批 = 文件们.filter((f) => f.候选 > 0 && !像笔记.test(f.name))
                if (第二批.length) {
                  for (const f of 文件们) files[f.name] = f.候选 > 0 && !像笔记.test(f.name)
                } else {
                  // 实在认不出来 → 有内容的都勾上，让她自己取消（总比一个都不勾好）
                  for (const f of 文件们) files[f.name] = f.候选 > 0
                }
              }
              setImp({ data: r, files: files, off: {}, open: {} })
              setImpOpen(true)
              // ⭐ 扫到 0 条时把**原因**显示出来 —— 静默的「0 条」最坑人 ✗
              if (r.提示) setImpNote(r.提示)
            })
            .catch((e) => {
              setImpBusy(false)
              setImpNote('扫不了：' + String((e && e.message) || e))
            })
        }

        const 选中条目 = () => {
          if (!imp) return []
          return (imp.data.items || []).filter((it) => imp.files[it.file] && imp.off[it.key] !== true)
        }

        const 导入 = () => {
          const 要导 = 选中条目()
          if (!要导.length) return
          setImpBusy(true)
          setImpNote(null)
          post('/import/apply', { session: open, storeId: s.storeId, items: 要导 })
            .then((r) => {
              setImpBusy(false)
              setImpNote(
                r && r.ok
                  ? '导进去了 ' + r.added + ' 条' + (r.重复 ? '（跳过重复 ' + r.重复 + ' 条）' : '') + (r.近似 ? '（跳过跟已有的几乎一样的 ' + r.近似 + ' 条）' : '') + (r.删过 ? '（跳过你删过的 ' + r.删过 + ' 条）' : '')
                  : '导不了：' + ((r && r.message) || '？'),
              )
              setImp(null)
              load()
            })
            .catch((e) => {
              setImpBusy(false)
              setImpNote('导不了：' + String((e && e.message) || e))
            })
        }

        const 导入区 = () => {
          const 小件 = []
          小件.push(React.createElement('div', { key: 'h', style: S.h }, '从旧档案导入'))
          小件.push(
            React.createElement(
              'div',
              { key: 'd', style: S.dim },
              '记忆插件只管「往后」—— 装上之后它才开始自己记。你以前那些日子，得你先归纳一下：' +
                '把旧对话、日记、设定、备忘，整理成几个文本文件（.md / .txt）放进一个文件夹，这里再把它们拆成一条条记忆。',
            ),
          )
          小件.push(
            React.createElement(
              'div',
              {
                key: 'how',
                style: Object.assign({}, S.dim, {
                  margin: '6px 0 8px',
                  padding: '6px 10px',
                  borderRadius: 'var(--fish-radius-sm)',
                  background: 'var(--fish-soft)',
                  borderLeft: '2px solid var(--fish-border)',
                }),
              },
              React.createElement('div', { style: { fontWeight: 600 } }, '怎么归纳（一句话：一个文件一个主题，一行一件事）'),
              React.createElement('div', null, '· 分几份写：「我是谁」「重要的人和事」「约定」「时间线」……'),
              React.createElement('div', null, '· 一行写清一件事，别写成一大段流水账 —— 拆起来才准'),
              React.createElement('div', null, '· 有日期就写上；没日期不写也行，它不会瞎猜'),
              React.createElement('div', null, '· 拆完先给你过目，挑中的才进库；导错了能整批撤销'),
              React.createElement('div', null, '· 想更干净，拆完再点「② 提炼」，让模型改写成第一人称'),
            ),
          )
          小件.push(
            React.createElement(
              'div',
              { key: 'b', style: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', margin: '8px 0' } },
              React.createElement('button', {type: 'button',  style: S.btn, disabled: impBusy, onClick: 扫描 }, impBusy ? '扫着呢…' : '扫描档案'),
              imp ? React.createElement('span', { style: S.dim }, '目录：' + imp.data.dir) : null,
              imp && imp.data.selfName
                ? React.createElement('span', { style: S.dim }, '（人称：「' + imp.data.selfName + '」→「我」）')
                : React.createElement('span', { style: S.warn, fontSize: 'var(--fish-small)' }, '（这个会话还没设「她自己叫什么」，导进去的人称不会自动换 —— 建议先在上面填好）'),
            ),
          )
          // 只导哪些文件 —— 同一个文件夹里常常还堆着别的文档，得能挑
          if (imp && imp.data && (imp.data.files || []).length) {
            小件.push(
              React.createElement(
                'div',
                {
                  key: 'files',
                  style: {
                    margin: '0 0 8px',
                    padding: '6px 10px',
                    borderRadius: 'var(--fish-radius-sm)',
                    background: 'var(--fish-soft)',
                    border: '1px solid var(--fish-border)',
                    fontSize: 'var(--fish-small)',
                  },
                },
                React.createElement('div', { style: S.dim }, '只导这些文件（默认只勾了「记忆卡／总档案」—— 别的文档别导进来）：'),
                React.createElement(
                  'div',
                  { style: { display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 4 } },
                  (imp.data.files || []).map((f) =>
                    React.createElement(
                      'label',
                      {
                        key: f.name,
                        style: { cursor: 'pointer', display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center', opacity: imp.files[f.name] ? 1 : 0.5 },
                      },
                      React.createElement('input', {'aria-label': f.name,
                        type: 'checkbox',
                        checked: !!imp.files[f.name],
                        onChange: (e) =>
                          setImp(Object.assign({}, imp, { files: Object.assign({}, imp.files, { [f.name]: e.target.checked }) })),
                      }),
                      f.name + '（' + f.候选 + ' 条）',
                    ),
                  ),
                ),
              ),
            )
          }
          if (impNote) 小件.push(React.createElement('div', { key: 'n', style: Object.assign({}, S.ok, { margin: '6px 0' }) }, impNote))

          // 导过几批 + 撤销 —— 注意：必须在 `if (!imp)` **之前**：
          // 导入完 imp 就清空了，放后面的话撤销按钮根本看不到 ✗
          const 批次 = s.importBatches || []
          if (批次.length) {
            小件.push(
              React.createElement(
                'div',
                { key: 'bt', style: { marginTop: 4 } },
                React.createElement('div', { style: { fontWeight: 600, margin: '8px 0 2px' } }, '导过 ' + 批次.length + ' 批'),
                批次.map((b) =>
                  React.createElement(
                    'div',
                    { key: b.id, style: Object.assign({}, S.row, S.条) },
                    React.createElement('div', { style: { flex: 1 } }, (b.at ? rel(b.at, Date.now()) : '（不知道什么时候）') + '　' + b.n + ' 条'),
                    React.createElement(
                      'div',
                      {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },
                        style: Object.assign({}, S.drop, { flex: 'none', fontSize: 'var(--fish-small)', cursor: 'pointer' }),
                        onClick: () => {
                          setImpBusy(true)
                          post('/import/undo', { session: open, batch: b.id }).then((r) => {
                            setImpBusy(false)
                            setImpNote(
                              r && r.ok
                                ? '撤销了：收起了 ' + r.撤了 + ' 条（在「已删掉的」里，能一条条找回来）'
                                : '撤不了：' + ((r && r.message) || '？'),
                            )
                            load()
                          })
                        },
                      },
                      '撤销这次导入',
                    ),
                  ),
                ),
              ),
            )
          }

          if (!imp) return 小件

          // 档案目录（能选也能打）+ 档案里指她的名字
          const 现在目录 = impDir !== null ? impDir : imp.data.dir
          const 列目录 = (p) => {
            post('/dirs', { path: p || '' })
              .then((r) => {
                setImpDirs(r)
                if (r && r.ok && r.path) setImpDir(r.path)
              })
              .catch((e) => setExpNote('列不了目录：' + String((e && e.message) || e)))
          }
          // 注意：拆成两行、输入框用弹性宽度 ——
          //   原来四个控件挤一行，加起来 880px 撑破了 780px 的容器（放大之后更糟）✗
          小件.push(
            React.createElement(
              'div',
              { key: 'cfg', style: S.nameBox },
              React.createElement('div', { style: { flex: 'none', width: 92 } }, '档案目录'),
              React.createElement('input', {'aria-label': '档案目录',
                style: Object.assign({}, S.inp, { flex: 1, width: 'auto', minWidth: 130 }),
                value: 现在目录,
                onChange: (e) => setImpDir(e.target.value),
              }),
              React.createElement('button', {type: 'button',  style: S.btn, onClick: () => 列目录(现在目录) }, '选文件夹'),
            ),
          )
          小件.push(
            React.createElement(
              'div',
              { key: 'cfg2', style: Object.assign({}, S.nameBox, { marginTop: -4 }) },
              React.createElement('div', { style: { flex: 'none', width: 92 } }, '指她的名字'),
              React.createElement('input', {'aria-label': '可以不填 —— 或者点右边「自动找」',
                style: Object.assign({}, S.inp, { flex: 1, width: 'auto', minWidth: 130 }),
                placeholder: '可以不填 —— 或者点右边「自动找」',
                value: 名字串(),
                onChange: (e) => setImpNames(e.target.value),
              }),
              React.createElement(
                'button',
                {type: 'button',
                  style: S.btn,
                  onClick: () =>
                    post('/names/scan', { session: open, dir: 现在目录 })
                      .then((r) => set找名字(r))
                      .catch((e) => setExpNote('自动找名字失败：' + String((e && e.message) || e))),
                },
                '自动找',
              ),
              React.createElement(
                'button',
                {type: 'button',
                  style: S.btn,
                  onClick: () =>
                    post('/names', {
                      archiveDir: 现在目录,
                      userNames: 名字们(),
                    }).then(() => {
                      setImpDir(null)
                      setImpNames(null)
                      扫描()
                    }),
                },
                '存了重扫',
              ),
            ),
          )
          // 自动找出来的候选 —— 点一下加进上面那格，再点一下减掉
          if (找名字) {
            小件.push(
              React.createElement(
                'div',
                { key: 'names', style: { margin: '0 0 8px', padding: '6px 10px', borderRadius: 'var(--fish-radius-sm)', background: 'var(--fish-soft)', border: '1px solid var(--fish-border)', fontSize: 'var(--fish-small)' } },
                找名字.ok === false
                  ? React.createElement('div', { style: S.drop }, '失败：' + (找名字.message || '找不了'))
                  : React.createElement(
                      'div',
                      null,
                      React.createElement('div', null, '只喊她的 —— 点一下加进去：'),
                      React.createElement(
                        'div',
                        { style: { display: 'flex', flexWrap: 'wrap', gap: 6, margin: '6px 0' } },
                        (找名字.候选 || []).map((x) => 一个名字块(x)),
                      ),
                      (找名字.互称 || []).length
                        ? React.createElement(
                            'div',
                            null,
                            React.createElement('div', { style: Object.assign({}, S.dim, { marginTop: 4 }) }, '互相都叫的 —— 加了会把「' + 找名字.互称[0].name + '」全换成称呼，一般别加：'),
                            React.createElement(
                              'div',
                              { style: { display: 'flex', flexWrap: 'wrap', gap: 6, margin: '6px 0' } },
                              (找名字.互称 || []).map((x) => 一个名字块(x, true)),
                            ),
                          )
                        : null,
                      React.createElement(
                        'div',
                        { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)' }) },
                        '数字是出现次数。底下混着界面词没关系，不点就行。填不填都不影响导入。',
                      ),
                    ),
              ),
            )
          }
          // 现在扫的是哪个目录 —— 用文字再写一遍，不靠输入框
          小件.push(
            React.createElement(
              'div',
              { key: 'nowdir', style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', margin: '2px 0 6px' }) },
              '现在扫的是：' + imp.data.dir + '　（' + (imp.data.files || []).length + ' 个文件，' + (imp.data.items || []).length + ' 条候选）',
            ),
          )
          // 文件夹选择器
          if (impDirs) {
            小件.push(
              React.createElement(
                'div',
                { key: 'dirs', style: { margin: '0 0 8px', padding: '6px 10px', borderRadius: 'var(--fish-radius-sm)', background: 'var(--fish-soft)', border: '1px solid var(--fish-border)', fontSize: 'var(--fish-small)' } },
                impDirs.ok === false
                  ? React.createElement('div', { style: S.drop }, '失败：' + (impDirs.message || '列不了'))
                  : React.createElement(
                      'div',
                      null,
                      React.createElement(
                        'div',
                        { style: Object.assign({}, S.dim, { marginBottom: 4 }) },
                        impDirs.path ? '「' + impDirs.path + '」下的文件夹（点一下就进去）：' : '选一个盘：',
                      ),
                      React.createElement(
                        'div',
                        { style: { display: 'flex', flexWrap: 'wrap', gap: 10, flexWrap: 'wrap' } },
                        impDirs.parent
                          ? React.createElement('span', {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  style: S.link, onClick: () => 列目录(impDirs.parent) }, '↑ 上一级')
                          : null,
                        (impDirs.dirs || []).map((d) =>
                          React.createElement('span', {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  key: d.path, style: S.link, onClick: () => 列目录(d.path) }, '📁 ' + d.name),
                        ),
                        (impDirs.dirs || []).length === 0 && !impDirs.parent
                          ? React.createElement('span', { style: S.dim }, '（这里没有子文件夹）')
                          : null,
                      ),
                      React.createElement(
                        'div',
                        { style: Object.assign({}, S.dim, { marginTop: 4 }) },
                        '看好了就点「存了重扫」✓',
                      ),
                    ),
              ),
            )
          }

          // 文件勾选
          小件.push(
            React.createElement(
              'div',
              { key: 'files', style: S.nameBox },
              React.createElement('div', { style: { flex: 'none', width: 100 } }, '扫到这些文件'),
              React.createElement(
                'div',
                { style: { flex: 1 } },
                (imp.data.files || []).map((f) =>
                  React.createElement(
                    'label',
                    { key: f.name, style: { display: 'block', cursor: 'pointer' } },
                    React.createElement('input', {'aria-label': f.name,
                      type: 'checkbox',
                      checked: !!imp.files[f.name],
                      onChange: (e) => setImp(Object.assign({}, imp, { files: Object.assign({}, imp.files, { [f.name]: e.target.checked }) })),
                    }),
                    ' ' + f.name + '　' + f.候选 + ' 条',
                    /记忆卡|总档案/.test(f.name) ? null : React.createElement('span', { style: S.dim }, '　（不是她的记忆？自己看着勾）'),
                  ),
                ),
              ),
            ),
          )

          // 按小节分组（只列勾了的文件）
          const 组 = {}
          for (const it of imp.data.items || []) {
            if (!imp.files[it.file]) continue
            const k = it.file + '｜' + (it.section || '（没有小节）')
            if (!组[k]) 组[k] = { file: it.file, section: it.section || '（没有小节）', items: [] }
            组[k].items.push(it)
          }
          const 组们 = Object.keys(组)
          const 选中 = 选中条目()
          const 字数 = 选中.reduce((a, it) => a + String(it.改后 || it.text).length, 0)

          小件.push(
            React.createElement(
              'div',
              { key: 'secbar', style: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', margin: '10px 0 4px' } },
              React.createElement('span', { style: { fontWeight: 600 } }, '按小节挑'),
              React.createElement('button', {type: 'button',  style: S.btn, onClick: () => setImp(Object.assign({}, imp, { off: {} })) }, '全选'),
              React.createElement(
                'button',
                {type: 'button',
                  style: S.btn,
                  onClick: () => {
                    const off = {}
                    for (const it of imp.data.items || []) if (imp.files[it.file] && it.importance < 1) off[it.key] = true
                    setImp(Object.assign({}, imp, { off: off }))
                  },
                },
                '只留「一直」记得的',
              ),
              React.createElement(
                'button',
                {type: 'button',
                  style: S.btn,
                  onClick: () => {
                    const off = {}
                    for (const it of imp.data.items || []) if (imp.files[it.file]) off[it.key] = true
                    setImp(Object.assign({}, imp, { off: off }))
                  },
                },
                '全不选',
              ),
            ),
          )

          for (const k of 组们) {
            const g = 组[k]
            const 开 = !!imp.open[k]
            const 选了几条 = g.items.filter((it) => imp.off[it.key] !== true).length
            小件.push(
              React.createElement(
                'div',
                { key: 'sec' + k, style: { margin: '2px 0' } },
                React.createElement(
                  'div',
                  { style: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'baseline' } },
                  React.createElement(
                    'div',
                    {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  style: Object.assign({}, S.link, { flex: 1 }), onClick: () => setImp(Object.assign({}, imp, { open: Object.assign({}, imp.open, { [k]: !开 }) })) },
                    (开 ? '▾ ' : '▸ ') + g.section,
                  ),
                  React.createElement('div', { style: Object.assign({}, S.dim, { width: 90, flex: 'none' }) }, 选了几条 + ' / ' + g.items.length + ' 条'),
                  React.createElement(
                    'div',
                    {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },
                      style: Object.assign({}, S.link, { flex: 'none', fontSize: 'var(--fish-small)' }),
                      onClick: () => {
                        const 全选这节 = 选了几条 < g.items.length
                        const off = Object.assign({}, imp.off)
                        for (const it of g.items) if (全选这节) delete off[it.key]
                        else off[it.key] = true
                        setImp(Object.assign({}, imp, { off: off }))
                      },
                    },
                    '全选这节',
                  ),
                ),
                开
                  ? g.items.map((it) =>
                      React.createElement(
                        'div',
                        { key: it.key, style: { margin: '2px 0 6px 18px', fontSize: 'var(--fish-small)' } },
                        React.createElement(
                          'label',
                          { style: { cursor: 'pointer' } },
                          React.createElement('input', {'aria-label': it.改后 || it.text,
                            type: 'checkbox',
                            checked: imp.off[it.key] !== true,
                            onChange: (e) => setImp(Object.assign({}, imp, { off: Object.assign({}, imp.off, { [it.key]: !e.target.checked }) })),
                          }),
                          ' ',
                          React.createElement('span', { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)' }) }, it.file + ' 第 ' + it.line + ' 行　'),
                          String(it.改后 || it.text),
                          it.at ? React.createElement('span', { style: Object.assign({}, S.ok, { fontSize: 'var(--fish-small)' }) }, '　[' + it.at.slice(0, 10) + ']') : null,
                          it.改后 && it.改后 !== it.text
                            ? React.createElement('div', { style: Object.assign({}, S.dim, { marginLeft: 18, fontSize: 'var(--fish-small)' }) }, '原文：' + it.text)
                            : null,
                        ),
                      ),
                    )
                  : null,
              ),
            )
          }

          小件.push(
            React.createElement(
              'div',
              { key: 'go', style: Object.assign({}, S.askBox, { marginTop: 10 }) },
              React.createElement('div', { style: { flex: 1 } }, '已选 ' + 选中.length + ' 条，共约 ' + 字数 + ' 字' + (选中.length ? '（一次只注入 6 条，其余在库里等着）' : '')),
              React.createElement('button', {type: 'button',  style: S.btnDanger, disabled: impBusy || !选中.length, onClick: 导入 }, impBusy ? '导着呢…' : '导入选中的'),
            ),
          )
          return 小件
        }

        return React.createElement(
          'div',
          { className: 'fish-module fish-memory', style: S.wrap },
          React.createElement('div', {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  style: S.link, onClick: () => setOpen(null) }, '← 所有会话'),
          React.createElement('div', { style: S.h }, s.title || s.id),
          onPageChange ? null : React.createElement('div', { className: 'fish-subnav' }, ...['记忆与档案', '语义索引'].map(name => React.createElement('button', { type: 'button', key: name, className: 'fish-button' + (detailPage === name ? ' fish-primary' : ''), 'aria-pressed': detailPage === name, onClick: () => setDetailPage(name) }, name))),
          React.createElement('div', { hidden: detailPage !== '语义索引' }, React.createElement(EmbeddingSettings, { session: s.id, storeId: s.storeId, notify })),
          React.createElement('div', { hidden: detailPage !== '记忆与档案' },
          s.qq ? React.createElement('div', { style: S.dim }, '记忆库：' + s.storeId) : null,
          React.createElement('div', { style: S.dim }, s.id + '　' + s.memories.length + ' 条记忆' + (已删.length ? '　（另外还收着 ' + 已删.length + ' 条）' : '')),
          React.createElement(
            'div',
            { style: { padding: '10px 12px', borderRadius: 8, border: '1px solid var(--fish-border)', background: 'var(--fish-soft)' } },
            React.createElement(
              'div',
              { style: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 8 } },
              React.createElement('span', { style: { flex: 'none', width: 96, fontSize: 'var(--fish-small)' } }, '她自己叫什么'),
              React.createElement('input', {'aria-label': '她在这儿的名字',
                style: Object.assign({}, S.inp, { width: 160 }),
                placeholder: '她在这儿的名字',
                value: selfDraft[open] !== undefined ? selfDraft[open] : s.selfName || s.titleName || '',
                onChange: (e) => setSelfDraft(Object.assign({}, selfDraft, { [open]: e.target.value })),
              }),
              s.selfName
                ? null
                : (s.titleName ? React.createElement('span', { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)' }) }, '（先填的是会话标题，确认没问题再点「存」）') : null),
            ),
            React.createElement(
              'div',
              { style: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 8 } },
              React.createElement('span', { style: { flex: 'none', width: 96, fontSize: 'var(--fish-small)' } }, '她怎么称呼你'),
              React.createElement('input', {'aria-label': '她平时怎么叫你（小名、昵称都行）',
                style: Object.assign({}, S.inp, { width: 160 }),
                placeholder: '她平时怎么叫你（小名、昵称都行）',
                value: ownerDraft[open] !== undefined ? ownerDraft[open] : s.ownerName || '',
                onChange: (e) => setOwnerDraft(Object.assign({}, ownerDraft, { [open]: e.target.value })),
              }),
            ),
            React.createElement(
              'div',
              { style: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 } },
              React.createElement(
                'button',
                {type: 'button',
                  style: S.btn,
                  onClick: () =>
                    post('/names', {
                      session: open,
                      selfName: (selfDraft[open] !== undefined ? selfDraft[open] : s.selfName) || '',
                      ownerName: (ownerDraft[open] !== undefined ? ownerDraft[open] : s.ownerName) || '',
                    }).then(() => {
                      setSelfDraft({})
                      setOwnerDraft({})
                      load()
                    }),
                },
                '存',
              ),
              React.createElement(
                'span',
                { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', flex: 1, lineHeight: 1.5 }) },
                '她自己的名字写进记忆时会换成「我」；她怎么称呼你，会换成「你」。已有的记忆也会顺手洗一遍。',
              ),
            ),
          ),
          // ---- 2026-09-21 新加：她自己后台手动加一条 ----
          // 跟模型自己记是两回事：它记受上面那个开关管，**手动加不受管**
          // （开关管的是「他自己记不记、注不注入」，管不到她手动写）
          React.createElement(
            'div',
            { style: S.h },
            '新增记忆（开关关闭时也能添加）',
          ),
          React.createElement(
                'div',
                { style: S.editBox },
                React.createElement(
                  'div',
                  { style: Object.assign({}, S.nameBox, { margin: '0 0 8px' }) },
                  React.createElement('div', { style: { flex: 'none', width: 80 } }, '加到哪里'),
                  React.createElement(
                    'select',
                    {'aria-label': '加到哪里',
                      style: Object.assign({}, S.inp, { flex: 1, width: 'auto', minWidth: 160 }),
                      value: 加在谁 || open || '',
                      onChange: (e) => set加在谁(e.target.value),
                    },
                    (((d && d.sessions) || []).map((x) => React.createElement(
                      'option',
                      { key: x.id, value: x.id },
                      (x.title || ('…' + String(x.id).slice(-6))) + (x.enabled ? '' : '（没开记忆）'),
                    ))),
                  ),
                  React.createElement('span', { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)' }) }, '默认是你正打开的这个'),
                ),
                React.createElement('textarea', {'aria-label': '一句话说清。人称：你自己是「我」，她是「她」——写「小明」会自动换成「我」。',
                  style: Object.assign({}, S.area, { minHeight: 54 }),
                  placeholder: '一句话说清。人称：你自己是「我」，她是「她」——写「小明」会自动换成「我」。',
                  value: 加内容,
                  onChange: (e) => set加内容(e.target.value),
                }),
                React.createElement(
                  'div',
                  { style: Object.assign({}, S.nameBox, { margin: '8px 0 0' }) },
                  React.createElement('div', { style: { flex: 'none', width: 80 } }, '时间'),
                  React.createElement('input', {'aria-label': '这件事什么时候发生的（留空＝现在）',
                    style: Object.assign({}, S.inp, { flex: 1, width: 'auto', minWidth: 150 }),
                    placeholder: '这件事什么时候发生的（留空＝现在）',
                    value: 加时间,
                    onChange: (e) => set加时间(e.target.value),
                  }),
                  React.createElement('span', { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)' }) }, '比如 2026-09-19 或 2026-09-19 14:30'),
                ),
                React.createElement(
                  'div',
                  { style: Object.assign({}, S.nameBox, { margin: '6px 0 0' }) },
                  React.createElement('div', { style: { flex: 'none', width: 80 } }, '重要'),
                  ['0', '0.5', '1'].map((v) =>
                    React.createElement(
                      'button',
                      {type: 'button',
                        key: v,
                        style: Object.assign({}, S.btn, String(加重要) === v ? { borderColor: 'var(--fish-info)', color: 'var(--fish-info)' } : null),
                        onClick: () => set加重要(v),
                      },
                      v === '0' ? '0 随口提过' : v === '0.5' ? '0.5 比较重要' : '1 非常重要',
                    ),
                  ),
                  React.createElement('input', {'aria-label': '记忆重要度',
                    style: Object.assign({}, S.inp, { width: 88 }),
                    value: 加重要,
                    onChange: (e) => set加重要(e.target.value),
                  }),
                  React.createElement('span', { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)' }) }, '也能自己填 0~1'),
                ),
                React.createElement(
                  'div',
                  { style: Object.assign({}, S.nameBox, { margin: '6px 0 0' }) },
                  React.createElement('div', { style: { flex: 'none', width: 80 } }, '关键词'),
                  React.createElement('input', {'aria-label': '空格分开，方便以后被想起来（可留空）',
                    style: Object.assign({}, S.inp, { flex: 1, width: 'auto', minWidth: 150 }),
                    placeholder: '空格分开，方便以后被想起来（可留空）',
                    value: 加词,
                    onChange: (e) => set加词(e.target.value),
                  }),
                ),
                React.createElement(
                  'div',
                  { style: Object.assign({}, S.askBox, { margin: '8px 0 0' }) },
                  React.createElement('button', {type: 'button', className: 'fish-primary', style: { ...S.btn, background: 'var(--fish-action)', color: 'var(--fish-on-accent)' }, onClick: 提交一条 }, '加进这个会话'),
                ),
                React.createElement(
                  'div',
                  { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 4 }) },
                  '加完记得点一下「开始扩词」—— 不然这条只有正文能搜到，检索词还是空的。',
                ),
              ),
          // 常用列表默认展开，管理工具保持在列表前面。
          React.createElement(
            'div',
            { style: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginTop: 16 } },
            React.createElement(
              'div',
              {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  style: Object.assign({}, S.h, { cursor: 'pointer', margin: 0, flex: 1 }), onClick: () => set看记忆(!看记忆) },
              (看记忆 ? '▾ ' : '▸ ') + '记忆列表（' + s.memories.length + ' 条）',
            ),
            // ⭐⭐ 2026-09-22（反馈：「查重我们是不是还没做啊？我怎么没有找到按钮」）：
            //   ⚠注意：第一次我把它放进了**折叠起来的**记忆列表块里 ——
            //     不点开列表就看不见，那就等于没有按钮 ✗
            //     → 挪到**标题这一行**（这一行永远看得见）✓
            React.createElement(
              'button',
              {type: 'button',
                style: S.btn,
                title:
                  '找出库里「几乎一样」的记忆。自动去重只管召回和导入，管不到已经存着的。' +
                  '真重复能一键合；「汇总+明细」会列出来让你自己挑；合之前自动备份',
                onClick: () => 去查重(s),
              },
              '查重',
            ),
            // ⭐⭐ 2026-09-22（她的第十件）：**从会话生成档案**
            //   「别的用户导入自己的会话 → 模型读一遍 → 出一份档案」
            //   注意：这是**给别人用的功能**，跟「手工维护一份档案」是两码事
            React.createElement(
              'button',
              {type: 'button',
                style: S.btn,
                title:
                  '把你自己的会话读一遍，提炼出一份长期档案（分九章）。' +
                  '出好的档案再走「从旧档案导入」变成记忆条目。' +
                  '会调用模型、会花钱，所以分四步：先看会话 → 算一下要多少 → 一批一批跑 → 存文件',
                onClick: () => 开生成(),
              },
              '从会话生成档案',
            ),
            // ⭐⭐ 2026-09-22（她要的）：**批量删除** —— 勾了几条就显示几条
            //   注意：二次确认：点这里**不删**，只出确认条；确认条上再点「确定删」才真删
            已选几条 > 0
              ? React.createElement(
                  'button',
                  {type: 'button',
                    style: S.btnDanger,
                    title: '把勾上的这几条收进「已删」（不是销毁，能找回来）。点它不会直接删，会先问一遍',
                    onClick: () => set批删问(true),
                  },
                  '批量删（' + 已选几条 + '）',
                )
              : null,
            已选几条 > 0
              ? React.createElement(
                  'button',
                  {type: 'button',  style: S.btn, onClick: () => { set选中({}); set批删问(false) } },
                  '取消勾选',
                )
              : null,
          ),
          // ⭐ 2026-09-24：折叠着也能一眼看出「记了时间的」有多少 ——
          //   反馈那个「中间一坨」的根源就是 850 条里只有 188 条有日期，
          //   这个数字摆在标题下面，心里有底
          React.createElement(
            'div',
            { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 2 }) },
            '记了时间的 ' + 有时间数 + ' 条 · 没记时间的 ' + 没时间数 + ' 条' +
              (看哪边 === '全部' ? '' : '（现在只看' + (看哪边 === '有时间' ? '记了时间的' : '没记时间的') + '）'),
          ),
          看记忆
            ? React.createElement(
                'div',
                null,
                // ---- 检索框：几百条的时候，靠翻是翻不到的 ----
                React.createElement(
                  'div',
                  { style: S.nameBox },
                  React.createElement('div', { style: { flex: 'none', width: 80 } }, '找'),
                  React.createElement('input', {'aria-label': '打几个字，只留含它的（正文、原文、检索词、来源都能搜）',
                    style: Object.assign({}, S.inp, { flex: 1, width: 'auto', minWidth: 140 }),
                    placeholder: '打几个字，只留含它的（正文、原文、检索词、来源都能搜）',
                    value: 搜词,
                    onChange: (e) => set搜词(e.target.value),
                  }),
                  搜词
                    ? React.createElement('button', {type: 'button',  style: S.btn, onClick: () => set搜词('') }, '清掉')
                    : null,
                  // ⭐ 2026-09-24（她要的）：**记了时间的 / 没记时间的分开看**
                  // ⭐ 2026-09-22 又加两档：**长期事实 / 会淡的**
                  //   点一下就轮到下一种：
                  //   全部 → 只记了时间的 → 只有没记时间的 → 不会淡的 → 会淡的 → 全部…
                  React.createElement(
                    'button',
                    {type: 'button',
                      style: S.btn,
                      title:
                        '点一下换个看法：全部 → 只记了时间的 → 只有没记时间的 → ' +
                        '不会淡的 → 会淡的 → 全部。' +
                        '「全部」那个视图里，不会淡的收在一个折叠的分组里（外面只剩会淡的）',
                      onClick: () =>
                        set看哪边(
                          看哪边 === '全部'
                            ? '有时间'
                            : 看哪边 === '有时间'
                              ? '没时间'
                              : 看哪边 === '没时间'
                                ? '长期事实'
                                : 看哪边 === '长期事实'
                                  ? '会淡的'
                                  : '全部',
                        ),
                    },
                    '看：' +
                      (看哪边 === '全部'
                        ? '全部'
                        : 看哪边 === '有时间'
                          ? '只记了时间的（' + 有时间数 + '）'
                          : 看哪边 === '没时间'
                            ? '只有没记时间的（' + 没时间数 + '）'
                            : 看哪边 === '长期事实'
                              ? '不会淡的（' + 事实总数 + '）'
                              : '会淡的（' + 会淡总数 + '）'),
                  ),
                  // ⭐ 顺序开关：按日期排，默认「日期新的在前」
                  //   （851 条里只画前 200 条，不排的话看到的永远是最老的）
                  React.createElement(
                    'button',
                    {type: 'button',
                      style: S.btn,
                      title: '按最左边的日期排。没写日期的排在最后 —— 它们不知道是什么时候的事',
                      onClick: () => set顺序(顺序 === '新' ? '旧' : '新'),
                    },
                    '日期：' + (顺序 === '新' ? '新的在前' : '老的在前'),
                  ),
                  // ⭐ 补日期：从正文里认出日期，只补没日期的（补之前自动备份）
                  没日期的 > 0
                    ? React.createElement(
                        'button',
                        {type: 'button',
                          style: S.btn,
                          title: '从正文里认出日期（09-17、8月26日…）。只补没日期的，已有的不动；补之前会自动备份',
                          onClick: () => setConfirm({ id: '*', kind: 'backfill' }),
                        },
                        '补日期（' + 没日期的 + '）',
                      )
                    : null,
                  // ⭐⭐ 2026-09-22：补标「永远不淡」——
                  //   提炼原来只改重要度、不碰分类，所以老记忆该不淡的没标上
                  没判过的 > 0
                    ? React.createElement(
                        'button',
                        {type: 'button',
                          style: S.btn,
                          title:
                            '拿模型一条条判「该不该一直记得」，判成要记一辈子的就标成「永远不淡」' +
                            '（会收进「长期事实」那一栏）。判过的不会重复问；动之前自动备份',
                          onClick: () => setConfirm({ id: '*', kind: 'stable' }),
                        },
                        '补标不淡（' + 没判过的 + '）',
                      )
                    : null,
                  // ⭐ 2026-09-22（反馈「判定太松了就得改」）：判据改严之后，
                  //   **已经判过的那批得用新判据重来一遍** —— 否则老结果一直留着 ✗
                  判过的 > 0
                    ? React.createElement(
                        'button',
                        {type: 'button',
                          style: S.btn,
                          title:
                            '把所有「判过」的标记清掉，用现在的判据从头判一遍。' +
                            '判据改过之后要用这个 —— 不然老结果一直留着。会重新调模型，动之前自动备份',
                          onClick: () => setConfirm({ id: '*', kind: 'restable' }),
                        },
                        '重判一遍（' + 判过的 + '）',
                      )
                    : null,
                  // ⭐⭐ 2026-09-23（第三步）：**老数据清洗补键**
                  //   提炼只管以后；老条目本来就没键 → 这里单独过一遍
                  //   注意：先「试几条」再真洗 —— 一条命令改几百条，得让她先看一眼
                  //   ⚠注意：按钮上**不许写「清洗补键」** —— 那是我自己造的词，她看不懂 ✗
                  //     改成说**它有什么用**：「讲同一件事的，只留最新那条」
                  没键的 > 0
                    ? React.createElement(
                        'button',
                        {type: 'button',
                          style: S.btn,
                          title:
                            '让老记忆认出「讲的是同一件事」。\n' +
                            '比如「她身高一米七」和「她身高一米六八」是同一件事 —— ' +
                            '认出来之后只留最新那条，旧的收起来（还能恢复）。\n' +
                            '光看句子像不像认不出来，所以要一条条问模型。\n' +
                            '注意：先点「试 8 条看看」看一眼它标的对不对，再决定要不要全跑。',
                          onClick: () => setConfirm({ id: '*', kind: 'washkeys' }),
                        },
                        '同一件事只留最新（' + 没键的 + '）',
                      )
                    : null,
                  // 补过了就想退回来（几百条自动改的，得能一键回到洗之前）✓
                  可撤的 > 0
                    ? React.createElement(
                        'button',
                        {type: 'button',
                          style: S.btn,
                          title:
                            '把这次自动标的全撤掉、顺手收起来的也全放回来 —— 回到没跑之前。\n' +
                            '（只撤自动标的 —— 你自己填的那些不动）',
                          onClick: () => setConfirm({ id: '*', kind: 'unwashkeys' }),
                        },
                        '撤掉这次标的（' + 可撤的 + '）',
                      )
                    : null,
                ),
                // ⭐⭐ 2026-09-23：她说了「这个让人看不懂，写通俗一点的」——
                //   光按钮上有个名字不够，旁边得有一句人话解释它到底干嘛
                //   （只在按钮露着的时候出现，平时不占地方）
                没键的 > 0
                  ? React.createElement(
                      'div',
                      { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', margin: '4px 0 0' }) },
                      '「同一件事只留最新」是干嘛的：给老记忆一条条标上「这条讲的是哪件事」。' +
                        '标好之后，讲同一件事的只留最新那条，旧的收起来（还能恢复）。',
                    )
                  : null,
                // ⭐⭐ 2026-09-23：跑过之后跟她交代一句「剩下的去哪儿了」✓
                //   模型会把一批判成「这条不用标」（一次性的、拿不准的）——
                //   那种**不标但算问过了**。不说明的话她会以为漏了/白跑了 ✗
                判留空的 > 0
                  ? React.createElement(
                      'div',
                      { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', margin: '4px 0 0' }) },
                      '（另外 ' + 判留空的 + ' 条，模型看了说「这条不用标」—— 一次性的、或者拿不准的。' +
                        '那种一个字都没改，也不会再问一遍）',
                    )
                  : null,
                confirm && confirm.kind === 'stable'
                  ? React.createElement(
                      'div',
                      { style: S.askBox },
                      React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        '拿模型判一遍这 ' + 没判过的 + ' 条该不该「永远不淡」？',
                        React.createElement(
                          'div',
                          { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 2 }) },
                          '会调用模型（走你 DSH 里那个），一批 20 条慢慢跑。判过的不会重复问。',
                        ),
                      ),
                      React.createElement('button', {type: 'button',  style: S.btnDanger, disabled: busy, onClick: () => 补不淡(false) }, busy ? '判着呢…' : '开始'),
                      React.createElement('button', {type: 'button',  style: S.btn, onClick: () => setConfirm(null) }, '算了'),
                    )
                  : null,
                // ⭐ 重判：判据改过之后，把老结果清掉重来
                confirm && confirm.kind === 'restable'
                  ? React.createElement(
                      'div',
                      { style: S.askBox },
                      React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        '把 ' + 判过的 + ' 条的「判过」标记全清掉，用现在的判据重判一遍？',
                        React.createElement(
                          'div',
                          { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 2 }) },
                          '判据改过之后要用这个 —— 不然老结果一直留着。会重新调模型（全库 ' +
                            (s.memories || []).length + ' 条，一批 20 条），动之前自动备份。',
                        ),
                      ),
                      React.createElement('button', {type: 'button',  style: S.btnDanger, disabled: busy, onClick: () => 补不淡(true) }, busy ? '判着呢…' : '重判'),
                      React.createElement('button', {type: 'button',  style: S.btn, onClick: () => setConfirm(null) }, '算了'),
                    )
                  : null,
                // ⭐⭐ 2026-09-23：清洗补键 —— 先「试几条」✓
                confirm && confirm.kind === 'washkeys'
                  ? React.createElement(
                      'div',
                      { style: S.askBox },
                      React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        '这 ' + 没键的 + ' 条老记忆，让它们认出「讲的是同一件事」？',
                        React.createElement(
                          'div',
                          { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 2 }) },
                          '每条记忆贴一个说明：「这条讲的是哪件事」。讲同一件事的，以后只留最新那条，' +
                            '旧的收起来（还能恢复）—— 就不用再靠「句子像不像」去猜了。' +
                            '会调用模型（走你 DSH 里那个），一批 8 条慢慢跑，只在设置页跑、不碰对话。动之前自动备份。',
                        ),
                      ),
                      React.createElement('button', {type: 'button',  style: S.btn, disabled: busy, onClick: () => 洗键(true) }, busy ? '跑着呢…' : '先试 8 条看看'),
                      React.createElement('button', {type: 'button',  style: S.btnDanger, disabled: busy, onClick: () => 洗键(false) }, busy ? '跑着呢…' : '全部开始'),
                      React.createElement('button', {type: 'button',  style: S.btn, onClick: () => setConfirm(null) }, '算了'),
                    )
                  : null,
                // 撤退：把这次自动标的全撤掉
                confirm && confirm.kind === 'unwashkeys'
                  ? React.createElement(
                      'div',
                      { style: S.askBox },
                      React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        '把这次自动标的 ' + 可撤的 + ' 条全撤掉、顺手收起来的也全放回来？',
                        React.createElement(
                          'div',
                          { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 2 }) },
                          '回到没跑之前的样子。只撤自动标的 —— 你自己填的那些不动。' +
                            '记忆本身一条都不会被删。',
                        ),
                      ),
                      React.createElement('button', {type: 'button',  style: S.btnDanger, disabled: busy, onClick: 撤销洗键 }, busy ? '撤着呢…' : '撤掉'),
                      React.createElement('button', {type: 'button',  style: S.btn, onClick: () => setConfirm(null) }, '算了'),
                    )
                  : null,
                // ⭐⭐ 2026-09-23：**进度条**（跟补标那条分开，不互相盖）✓
                洗键进度.在跑 && 洗键进度.总 > 0
                  ? (() => {
                      const 百 = Math.round((洗键进度.已 / 洗键进度.总) * 100)
                      return React.createElement(
                        'div',
                        { style: Object.assign({}, S.editBox, { marginTop: 8 }) },
                        React.createElement(
                          'div',
                          { style: { fontSize: 'var(--fish-small)', marginBottom: 4 } },
                          '⭐ 正在认「讲的是同一件事」' + (洗键进度.干跑 ? '（先试几条）' : '') + '　跑着呢',
                        ),
                        React.createElement(
                          'div',
                          { style: { fontSize: 'var(--fish-small)', color: 'var(--fish-warning)' } },
                          '已过 ' + 洗键进度.已 + ' / ' + 洗键进度.总 + ' 条（' + 百 + '%）' +
                            '　还剩 ' + Math.max(0, 洗键进度.总 - 洗键进度.已) + ' 条　（每批 8 条，跑着就动）',
                        ),
                      )
                    })()
                  : null,
                // ⭐⭐ 2026-09-22（她要的）：**补标/重判的进度条，就贴在按钮这一行下面**
                //   点了才出现，没点就没有 —— 不跟提炼/扩词那条挤在一起
                补标进度.在跑 && 补标进度.总 > 0
                  ? (() => {
                      const 百 = Math.round((补标进度.已 / 补标进度.总) * 100)
                      return React.createElement(
                        'div',
                        { style: Object.assign({}, S.editBox, { marginTop: 8 }) },
                        React.createElement(
                          'div',
                          { style: { fontSize: 'var(--fish-small)', marginBottom: 4 } },
                          '⭐ ' + (补标进度.重判 ? '重判一遍' : '补标不淡') + '　跑着呢',
                        ),
                        React.createElement(
                          'div',
                          { style: S.barOut },
                          React.createElement('div', { style: Object.assign({}, S.barIn, { width: 百 + '%' }) }),
                        ),
                        React.createElement(
                          'div',
                          { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 4 }) },
                          '已判 ' + 补标进度.已 + ' / ' + 补标进度.总 + ' 条（' + 百 + '%）' +
                            '　还剩 ' + Math.max(0, 补标进度.总 - 补标进度.已) + ' 条' +
                            (补标进度.等 ? '　注意：撞限流了，正在等 ' + 补标进度.等 + ' 秒' : '　（每批 20 条，跑着就动）'),
                        ),
                      )
                    })()
                  : null,
                // ⭐⭐ 2026-09-22（她要的）：**批量删的二次确认条**
                //   第一次点是「批量删（N）」，出这条；第二次点「确定删」才真删
                批删问 && 已选几条 > 0
                  ? React.createElement(
                      'div',
                      { style: S.confirm },
                      React.createElement(
                        'div',
                        { style: { flex: 1 } },
                        '要删掉这 ' + 已选几条 + ' 条吗？',
                        React.createElement(
                          'div',
                          { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 2 }) },
                          '不是销毁 —— 收进「已删」里，点开还能找回来。动之前也会自动备份。',
                        ),
                      ),
                      React.createElement('button', {type: 'button',  style: S.btnDanger, disabled: busy, onClick: () => 批删(s) }, busy ? '删着…' : '确定删（' + 已选几条 + ' 条）'),
                      React.createElement('button', {type: 'button',  style: S.btn, onClick: () => set批删问(false) }, '算了'),
                    )
                  : null,
                // ⚠注意：2026-09-22（我发现的）：`notes` 原来**只在第一级**渲染 ——
                //   而会话详情是 `if (open) return …` **提前返回**的，
                //   所以在详情页里 setNotes 的东西**一个字都看不到** ✗
                //   「补日期」「补标不淡」「查重」的结果提示全落在这儿 → 补一份
                notes && notes.length
                  ? React.createElement(
                      'div',
                      { style: Object.assign({}, S.warn, { margin: '8px 0', fontSize: 'var(--fish-small)', whiteSpace: 'pre-line' }) },
                      '　· ' + notes.join('\n　· '),
                    )
                  : null,
                // ⭐⭐ 2026-09-22（她的第十件）：**从会话生成档案** 的面板
                //   四步分开 —— 因为第三步**调模型、花钱**，得让人看清再点
                生成开
                  ? React.createElement(
                      'div',
                      { style: Object.assign({}, S.editBox, { marginTop: 8 }) },
                      [
                        React.createElement(
                          'div',
                          { key: 'h', style: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', flexWrap: 'wrap' } },
                          React.createElement('b', null, '从会话生成档案'),
                          React.createElement(
                            'span',
                            { style: S.dim },
                            '把会话读一遍，提炼出一份长期档案（九章）。出好的档案再走「从旧档案导入」变成记忆条目。',
                          ),
                          React.createElement('div', { style: { flex: 1 } }),
                          React.createElement('button', {type: 'button',  style: S.btn, onClick: () => set生成开(false) }, '收起'),
                        ),

                        // ① 选会话
                        React.createElement(
                          'div',
                          { key: 's', style: { marginTop: 8 } },
                          React.createElement('div', { style: S.dim }, '① 选会话' + (生成会话 ? '（这个工作区里找到 ' + 生成会话.length + ' 个）' : '（读着呢…）')),
                          生成会话 && 生成会话.length
                            ? React.createElement(
                                'div',
                                { style: { margin: '4px 0 0 8px', maxHeight: 260, overflow: 'auto' } },
                                生成会话.map((x) =>
                                  React.createElement(
                                    'label',
                                    { key: x.sid, style: { display: 'block', fontSize: 'var(--fish-small)', cursor: 'pointer', padding: '2px 0' } },
                                    React.createElement('input', {'aria-label': x.标题 || x.sid,
                                      type: 'checkbox',
                                      checked: !!生成选[x.sid],
                                      onChange: () => set生成选(Object.assign({}, 生成选, { [x.sid]: !生成选[x.sid] })),
                                    }),
                                    // ⚠注意：2026-09-22（反馈：「不显示名字」）：
                                    //   光有 `session-a1b2c3d4-…` 这种**没法挑** —— 得显示标题
                                    ' ',
                                    React.createElement('span', { style: x.标题 ? null : S.dim }, x.标题 || '（没起名字）'),
                                    React.createElement(
                                      'span',
                                      { style: Object.assign({}, S.dim, { marginLeft: 6 }) },
                                      (x.话数 ? x.话数 + ' 句　' : '') + x.MB + ' MB　' + x.sid.slice(0, 12) + '…',
                                    ),
                                  ),
                                ),
                              )
                            : 生成会话
                              ? React.createElement(
                                  'div',
                                  { style: Object.assign({}, S.dim, { marginTop: 4 }) },
                                  '这个工作区里没找到会话（归档的、子代理跑出来的、空壳的都不列）',
                                )
                              : null,
                          // 注意：默认一个都不勾 —— 让用户自己挑（后面是要花钱的）✓
                          生成会话 && 生成会话.length
                            ? React.createElement(
                                'div',
                                { style: { marginTop: 4, display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' } },
                                React.createElement(
                                  'button',
                                  {type: 'button',
                                    style: S.btn,
                                    onClick: () => {
                                      const 勾 = {}
                                      生成会话.forEach((x) => {
                                        勾[x.sid] = true
                                      })
                                      set生成选(勾)
                                    },
                                  },
                                  '全选',
                                ),
                                React.createElement('button', {type: 'button',  style: S.btn, onClick: () => set生成选({}) }, '全不选'),
                                React.createElement('span', { style: S.dim }, '勾了 ' + 勾的sid().length + ' 个'),
                              )
                            : null,
                          // 注意：诊断：列表跟 DSH 对不上时，这几个数能看出卡在哪一道
                          // 注意：2026-11-03：诊断只在**一个会话都没列出来**时才显示。
                          //   有列表的时候它就是一大坨内部数字，挤在勾选框下面很难看。
                          生成诊断 && 生成会话 && 生成会话.length === 0
                            ? React.createElement(
                                'div',
                                { style: Object.assign({}, S.dim, { marginTop: 4, fontSize: 'var(--fish-small)' }) },
                                '磁盘上 ' + 生成诊断.文件夹里 + ' 个会话文件　归档 ' + 生成诊断.归档 + ' 个　可挑 ' + 生成诊断.筛完剩 + ' 个',
                                (生成诊断.被我筛掉的 || []).length
                                  ? React.createElement(
                                      'div',
                                      { style: { marginTop: 2 } },
                                      '筛掉的：' +
                                        (生成诊断.被我筛掉的 || [])
                                          .map((x) => (x.标题 || x.sid) + '（' + x.因 + '）')
                                          .join('　'),
                                    )
                                  : null,
                              )
                            : null,
                          React.createElement(
                            'div',
                            { style: { marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: 8, flexWrap: 'wrap' } },
                            React.createElement(
                              'button',
                              {type: 'button',  style: S.btn, disabled: busy || 勾的sid().length === 0, onClick: () => 算生成() },
                              '② 算一下要多少',
                            ),
                            React.createElement(
                              'span',
                              { style: S.dim },
                              !勾的sid().length ? '先勾几个会话' : '（这一步不调模型、不花钱；要读一遍会话、去重、切段，慢一点）',
                            ),
                          ),
                        ),

                        // ② 计划
                        生成计划
                          ? React.createElement(
                              'div',
                              { key: 'p', style: { marginTop: 8 } },
                              React.createElement(
                                'div',
                                { style: S.dim },
                                '② 算出来了：' + 生成计划.批数 + ' 批　' + 生成计划.天数 + ' 天　' +
                                  生成计划.总字.toLocaleString() + ' 字　粗算约 ' + 生成计划.token.toLocaleString() + ' token',
                              ),
                              React.createElement(
                                'div',
                                { style: Object.assign({}, S.dim, { marginTop: 2 }) },
                                '（每批最多 ' + 生成计划.每批字上限.toLocaleString() + ' 字；挑出来「不是聊天」的 ' +
                                  生成计划.挑出来 + ' 条没算进去）',
                              ),
                              React.createElement(
                                'div',
                                { style: { marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', flexWrap: 'wrap' } },
                                React.createElement(
                                  'button',
                                  {type: 'button',  style: S.btnDanger, disabled: busy, onClick: () => 跑生成() },
                                  busy ? '跑着呢…' : '③ 开始跑（会调模型、会花钱）',
                                ),
                                React.createElement(
                                  'span',
                                  { style: S.dim },
                                  '一批一批跑，跑完一批就把条目攒起来；下一批会带上「已经记过的」，同一件事不会收两遍',
                                ),
                              ),
                              (生成计划.会话 || []).length
                                ? React.createElement(
                                    'div',
                                    { style: Object.assign({}, S.dim, { marginTop: 4, fontSize: 'var(--fish-small)' }) },
                                    '会话情况：' +
                                      生成计划.会话
                                        .map((x) => (x.标题 || x.sid.slice(0, 12)) + '（独有 ' + x.独有 + '／副本 ' + x.副本 + '）')
                                        .join('　'),
                                  )
                                : null,
                            )
                          : null,

                        // ③ 进度
                        生成进度 && 生成进度.在跑
                          ? (() => {
                              const 百 = Math.round(((生成进度.批号 - 1) / 生成进度.批数) * 100)
                              return React.createElement(
                                'div',
                                { key: 'bar', style: { marginTop: 8 } },
                                React.createElement(
                                  'div',
                                  { style: S.barOut },
                                  React.createElement('div', { style: Object.assign({}, S.barIn, { width: 百 + '%' }) }),
                                ),
                                React.createElement(
                                  'div',
                                  { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 4 }) },
                                  '第 ' + 生成进度.批号 + ' / ' + 生成进度.批数 + ' 批（' + 百 + '%）' +
                                    '　已攒 ' + 生成条目.length + ' 条' +
                                    (生成进度.模型 ? '　' + 生成进度.模型 : ''),
                                ),
                              )
                            })()
                          : null,

                        // ④ 存到哪儿 —— ⚠注意：2026-09-22（反馈：「选了文件夹点了过后
                        //   再想换的话就会卡住，就没有那个选项了，就不能再修改了」）
                        //   两个毛病：
                        //     ① 这块原来在 `生成条目.length` 里面 —— **跑完才出现** ✗
                        //        → 挪到外面，面板一开就能设
                        //     ② 再点「选文件夹」时**不重新读目录**（`if (!生成目录列)`）——
                        //        看到的还是上次那份，像卡住 失败：→ 每次打开都重读
                        React.createElement(
                          'div',
                          { key: 'save', style: { marginTop: 8 } },
                          React.createElement(
                            'div',
                            { style: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', flexWrap: 'wrap' } },
                            React.createElement('b', null, '④ 存到哪儿'),
                            React.createElement('span', { style: S.dim }, '跑完就存到这个文件 —— 能直接改，也能点「选文件夹」挑'),
                          ),
                          React.createElement(
                            'div',
                            { style: Object.assign({}, S.nameBox, { marginTop: 6 }) },
                            React.createElement('div', { style: { flex: 'none', width: 72 } }, '存到'),
                            React.createElement('input', {'aria-label': '要存的完整路径（比如 D:\\档案\\生成的档案.md）',
                              style: Object.assign({}, S.inp, { flex: 1, width: 'auto', minWidth: 140 }),
                              value: 生成存到,
                              placeholder: '要存的完整路径（比如 D:\\档案\\生成的档案.md）',
                              onChange: (e) => set生成存到(e.target.value),
                            }),
                            React.createElement(
                              'button',
                              {type: 'button',
                                style: S.btn,
                                onClick: () => {
                                  const 要开 = !生成选目录
                                  set生成选目录(要开)
                                  // 注意：每次打开都**重读一遍**（原来只在第一次读，再打开看到的是旧的）
                                  if (要开) {
                                    // 从当前路径所在的目录开始（拿不到就从盘符列表开始）
                                    const 起点 = /[\\/]/.test(生成存到) ? 生成存到.replace(/[\\/][^\\/]*$/, '') : ''
                                    post('/dirs', { path: 起点 })
                                      .then((r) => set生成目录列(r))
                                      .catch((e) => setNotes(['列不了目录：' + ((e && e.message) || e)]))
                                  }
                                },
                              },
                              生成选目录 ? '收起' : '选文件夹',
                            ),
                          ),
                          // 文件夹选择器（跟「从旧档案导入」那个是同一个接口）
                          生成选目录 && 生成目录列
                            ? React.createElement(
                                'div',
                                { style: { margin: '4px 0 0', padding: '6px 10px', borderRadius: 'var(--fish-radius-sm)', background: 'var(--fish-soft)', border: '1px solid var(--fish-border)', fontSize: 'var(--fish-small)' } },
                                React.createElement(
                                  'div',
                                  { style: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 4 } },
                                  React.createElement('span', { style: S.dim }, 生成目录列.path ? '当前：' + 生成目录列.path : '选一个盘'),
                                  React.createElement('div', { style: { flex: 1 } }),
                                  // 注意：选择器里也放一个「收起」—— 别只能靠上面那个按钮
                                  React.createElement('button', {type: 'button',  style: S.btn, onClick: () => set生成选目录(false) }, '收起'),
                                ),
                                生成目录列.ok === false
                                  ? React.createElement('div', { style: S.drop }, '失败：' + (生成目录列.message || '列不了'))
                                  : React.createElement(
                                      'div',
                                      null,
                                      React.createElement(
                                        'div',
                                        { style: Object.assign({}, S.dim, { marginBottom: 4 }) },
                                        生成目录列.path
                                          ? '「' + 生成目录列.path + '」下的文件夹（点一下就进去）：'
                                          : '选一个盘：',
                                      ),
                                      React.createElement(
                                        'div',
                                        { style: { display: 'flex', flexWrap: 'wrap', gap: 10, flexWrap: 'wrap' } },
                                        生成目录列.parent
                                          ? React.createElement(
                                              'span',
                                              {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },
                                                style: S.link,
                                                onClick: () =>
                                                  post('/dirs', { path: 生成目录列.parent }).then((r) => set生成目录列(r)).catch(() => {}),
                                              },
                                              '↑ 上一级',
                                            )
                                          : null,
                                        (生成目录列.dirs || []).map((d) =>
                                          React.createElement(
                                            'span',
                                            {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },
                                              key: d.path,
                                              style: S.link,
                                              onClick: () =>
                                                post('/dirs', { path: d.path }).then((r) => set生成目录列(r)).catch(() => {}),
                                            },
                                            '📁 ' + d.name,
                                          ),
                                        ),
                                      ),
                                      // 「就用这个文件夹」—— 把路径拼成 <文件夹>\生成的档案.md
                                      生成目录列.path
                                        ? React.createElement(
                                            'div',
                                            { style: { marginTop: 6 } },
                                            React.createElement(
                                              'button',
                                              {type: 'button',
                                                style: S.btn,
                                                onClick: () => {
                                                  const p = String(生成目录列.path).replace(/[\\/]+$/, '')
                                                  set生成存到(p + '\\生成的档案.md')
                                                  set生成选目录(false)
                                                },
                                              },
                                              '就用这个文件夹',
                                            ),
                                            React.createElement(
                                              'span',
                                              { style: Object.assign({}, S.dim, { marginLeft: 8 }) },
                                              '→ 存成「生成的档案.md」（也可以先点进去子文件夹再点这个）',
                                            ),
                                          )
                                        : React.createElement(
                                            'div',
                                            { style: Object.assign({}, S.dim, { marginTop: 6 }) },
                                            '先点进一个盘，再点「就用这个文件夹」',
                                          ),
                                    ),
                              )
                            : null,
                        ),

                        // 攒下来的条目 + 存文件
                        // 注意：2026-10-26：原来只在「条目 > 0」时渲染 —— 0 条时界面上只留一句
                        //   「点『存成档案文件』」，按钮根本不存在，用户只能到处找 ✗
                        //   → 算过计划就画出来；0 条时按钮置灰、旁边写明为什么。
                        生成计划
                          ? React.createElement(
                              'div',
                              { key: 'r', style: { marginTop: 8 } },
                              React.createElement(
                                'div',
                                { style: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', flexWrap: 'wrap' } },
                                React.createElement('b', null, '攒了 ' + 生成条目.length + ' 条'),
                                React.createElement(
                                  'button',
                                  {type: 'button',
                                    style: S.btn,
                                    disabled: busy || !!(生成进度 && 生成进度.在跑) || !生成条目.length,
                                    onClick: () => 存生成(),
                                  },
                                  '存成档案文件',
                                ),
                                React.createElement(
                                  'span',
                                  { style: S.dim },
                                  生成条目.length
                                    ? '存成一份 markdown；然后再用下面的「从旧档案导入」把它变成记忆条目'
                                    : '还没有条目可存 —— 这一轮模型一条都没收（也可能输出被截断，诊断日志里有回文长度）',
                                ),
                              ),
                              生成条目.length
                                ? React.createElement(
                                    'div',
                                    { style: Object.assign({}, S.dim, { marginTop: 4, maxHeight: 200, overflow: 'auto', fontSize: 'var(--fish-small)', whiteSpace: 'pre-line' }) },
                                    生成条目.slice(0, 40).map((x) => x.章 + '|' + x.日期 + '|' + x.话).join('\n') +
                                      (生成条目.length > 40 ? '\n…（还有 ' + (生成条目.length - 40) + ' 条）' : ''),
                                  )
                                : null,
                            )
                          : null,

                        // 存好了
                        生成档
                          ? React.createElement(
                              'div',
                              { key: 'ok', style: { marginTop: 8 } },
                              React.createElement('div', null, '档案存到：' + 生成档.存到),
                              React.createElement(
                                'div',
                                { style: Object.assign({}, S.dim, { marginTop: 2 }) },
                                '共 ' + 生成档.条数 + ' 条' + (生成档.去掉重复 ? '（去掉了 ' + 生成档.去掉重复 + ' 条重复）' : ''),
                              ),
                            )
                          : null,
                      ],
                    )
                  : null,
                查重 && 查重开
                  ? React.createElement(
                      'div',                      { style: Object.assign({}, S.editBox, { marginTop: 8 }) },
                      [
                        React.createElement(
                          'div',
                          { key: '头', style: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', flexWrap: 'wrap' } },
                          React.createElement('b', null, '查重：'),
                          React.createElement('span', null, (查重.组 || []).length + ' 组、能少 ' + 查重.能少 + ' 条'),
                          React.createElement(
                            'span',
                            { style: S.dim },
                            '（真重复 ' + 查重.真重复组数 + ' 组 / 汇总+明细 ' + 查重.汇总组数 + ' 组）',
                          ),
                          React.createElement(
                            'button',
                            {type: 'button',  style: S.btn, disabled: busy || !查重.真重复组数, onClick: () => 合重复(s, true) },
                            '一键合真重复（' + 查重.真重复组数 + ' 组）',
                          ),
                          React.createElement(
                            'button',
                            {type: 'button',
                              style: S.btn,
                              disabled: busy || !(查重.组 || []).some((g, i) => 查重合[i]),
                              onClick: () => 合重复(s, false),
                            },
                            '按我勾的合（' + (查重.组 || []).filter((g, i) => 查重合[i]).length + ' 组、少 ' +
                              (查重.组 || []).reduce((a, g, i) => a + (查重合[i] ? g.条们.length - 1 : 0), 0) + ' 条）',
                          ),
                          React.createElement(
                            'button',
                            {type: 'button',
                              style: S.btn,
                              title: '把「汇总+明细」那些也勾上。注意：一长一短，合了会丢短的里的细节',
                              onClick: () => {
                                const 全 = {}
                                ;(查重.组 || []).forEach((g, i) => {
                                  全[i] = true
                                })
                                set查重合(全)
                              },
                            },
                            '把「汇总+明细」也全勾上',
                          ),
                          React.createElement('button', {type: 'button',  style: S.btn, onClick: () => { set查重(null); set查重开(false) } }, '收起'),
                        ),
                        React.createElement(
                          'div',
                          { key: '说明', style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 4 }) },
                          '「真重复」= 两条长度差不多，合了安全，默认勾上；' +
                            '「汇总+明细」= 一长一短（长的把短的包住了），默认不勾 —— ' +
                            '长的那条未必真的包含了短的每个细节，合了会丢东西。要合哪一组，自己勾那一组。' +
                            '合掉的不销毁，收在「已删」里。',
                        ),
                      ]
                        .concat(
                          (查重.组 || []).slice(0, 60).map((g, i) =>
                            React.createElement(
                              'div',
                              {
                                key: 'g' + i,
                                style: { marginTop: 10, paddingTop: 8, borderTop: '1px solid var(--fish-line)' },
                              },
                              [
                                React.createElement(
                                  'div',
                                  {
                                    key: 'h',
                                    style: { fontSize: 'var(--fish-small)', marginBottom: 4, display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center', flexWrap: 'wrap' },
                                  },
                                  // ⭐⭐ 2026-09-23：每组一个「要合」的勾 —— 不勾的组「按我勾的合」不会碰
                                  React.createElement('input', {'aria-label': '合并第 ' + (i + 1) + ' 组',
                                    key: 'c',
                                    type: 'checkbox',
                                    checked: !!查重合[i],
                                    title: '勾上它，这一组才会被「按我勾的合」合掉',
                                    onChange: () => set查重合(Object.assign({}, 查重合, { [i]: !查重合[i] })),
                                  }),
                                  '第 ' + (i + 1) + ' 组 · ' + g.条们.length + ' 条 · ',
                                  React.createElement('b', { style: g.类型 === '真重复' ? S.ok : S.warn }, g.类型),
                                  查重合[i]
                                    ? null
                                    : React.createElement(
                                        'span',
                                        { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)' }) },
                                        '（不参与）',
                                      ),
                                ),
                              ].concat(
                                g.条们.map((t) =>
                                  React.createElement(
                                    'label',
                                    {
                                      key: t.id,
                                      style: { display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'flex-start', padding: '3px 0', cursor: 'pointer' },
                                    },
                                    [
                                      React.createElement('input', {'aria-label': '保留记忆：' + t.text,
                                        key: 'r',
                                        type: 'radio',
                                        name: '查重组' + i,
                                        checked: 查重选[i] === t.id,
                                        onChange: () => set查重选(Object.assign({}, 查重选, { [i]: t.id })),
                                      }),
                                      React.createElement(
                                        'span',
                                        { key: 't', style: { flex: 1, minWidth: 0, overflowWrap: 'anywhere' } },
                                        t.text,
                                      ),
                                      React.createElement(
                                        'span',
                                        { key: 'n', style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', overflowWrap: 'anywhere' }) },
                                        t.长 + ' 字',
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ),
                          ),
                        )
                        .concat(
                          (查重.组 || []).length > 60
                            ? [
                                React.createElement(
                                  'div',
                                  { key: '更多', style: Object.assign({}, S.dim, { marginTop: 8 }) },
                                  '（只画了前 60 组，先合这些再点一次查重）',
                                ),
                              ]
                            : [],
                        ),
                    )
                  : null,
                confirm && confirm.kind === 'backfill'
                  ? React.createElement(
                      'div',
                      { style: S.confirm },
                      React.createElement('span', { style: { flex: 1 } }, '从正文里补日期？只补那 ' + 没日期的 + ' 条没日期的，已有的不动（补之前会自动备份）。'),
                      React.createElement('button', {type: 'button',  style: S.btn, onClick: 补日期 }, '补'),
                      React.createElement('button', {type: 'button',  style: S.btn, onClick: () => setConfirm(null) }, '算了'),
                    )
                  : null,
                搜词 || 看哪边 !== '全部'
                  ? React.createElement(
                      'div',
                      { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', margin: '0 0 6px' }) },
                      '这里 ' + 过滤后.length + ' 条 / 共 ' + s.memories.length + ' 条' +
                        (看哪边 === '有时间' ? '（只看记了时间的）' : 看哪边 === '没时间' ? '（只看没记时间的）' : '') +
                        (过滤后.length === 0 ? ' —— 换几个字试试，或者点上面的「看」换个范围' : ''),
                    )
                  : null,
                React.createElement(
                  'div',
                  { style: { marginTop: 10 } },
                  过滤后.length === 0
                    ? React.createElement(
                        'div',
                        { style: S.dim },
                        搜词 ? '（没有含「' + 搜词 + '」的）' : '（这个范围里没有记忆）',
                      )
                    : (() => {
                        // ⭐⭐ 2026-09-22（她要的）：**「全部」视图里，不会淡的收进一个折叠的分组**
                        //   原话：「那一行，我们是单独做一个收理的文件夹一样的，
                        //              不然的话那些就不需要露在外面」
                        //   ⭐ 又说：「**外面都是会淡的，里面才是不会淡的**，就不用管里面了」
                        //   → 外面只列**会淡的**；不会淡的（长期事实 + 没时间的）
                        //     塞进「▸ 不会淡的（N 条）」里，点开才看
                        const 上 = 画这个.slice(0, 画全部 ? 画这个.length : 一次最多画)
                        // 注意：搜的时候**不许折叠** —— 不然搜到了却看不见 ✗
                        //   （自检逮到的：搜「衣服」时匹配的那条是长期事实，被收进分组里了）
                        if (看哪边 !== '全部' || 搜词) return 上.map(一条记忆)
                        const 会淡的 = 上.filter((m) => !不会淡(m))
                        const 不淡的 = 上.filter(不会淡)
                        return [
                          ...会淡的.map(一条记忆),
                          不淡的.length
                            ? React.createElement(
                                'div',
                                { key: '事实组' },
                                React.createElement(
                                  'div',
                                  {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },
                                    style: Object.assign({}, S.h, { cursor: 'pointer', marginTop: 14 }),
                                    onClick: () => set看事实(!看事实),
                                  },
                                  (看事实 ? '▾ ' : '▸ ') + '不会淡的（' + 不淡的.length + ' 条）',
                                ),
                                React.createElement(
                                  'div',
                                  { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginBottom: 4 }) },
                                  '里面这些是长期事实（要记一辈子的事，不会淡）。' +
                                    '外面那些都会淡 —— 包括没记时间的（它们从「记下来的那天」开始淡）。',
                                ),
                                看事实 ? 不淡的.map(一条记忆) : null,
                              )
                            : null,
                        ]
                      })(),
                ),
                过滤后.length > 一次最多画
                  ? React.createElement(
                      'div',
                      { style: { margin: '6px 0 0', fontSize: 'var(--fish-small)' } },
                      画全部
                        ? React.createElement('span', {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  style: S.link, onClick: () => set画全部(false) }, '↑ 收起来（只画前 ' + 一次最多画 + ' 条）')
                        : React.createElement(
                            'span',
                            {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  style: S.link, onClick: () => set画全部(true) },
                            '还有 ' + (过滤后.length - 一次最多画) + ' 条' +
                              (看哪边 === '没时间' ? '（更早记的）' : 顺序 === '新' ? '（更早的）' : '（更新的）') +
                              '没画出来 —— 点这里全部显示（多了会卡）',
                          ),
                    )
                  : null,
              )
            : null,
          React.createElement(
            'div',
            null,
            React.createElement('div', {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  style: Object.assign({}, S.h, { cursor: 'pointer' }), onClick: () => setShowDeleted(!showDeleted) }, (showDeleted ? '▾ ' : '▸ ') + '已删掉的（' + (已删.length + 被取代的.length) + '）'),
            React.createElement('div', { style: S.dim }, '收起来的记忆不会被注入，但还留着，随时能找回来。'),
            showDeleted
              ? React.createElement(
                  'div',
                  { style: { marginTop: 6 } },
                  // ⭐⭐ 2026-09-22（反馈「你放在最下面的呀，你改到最上面去，
                  //     谁那么多条？如果有100条，我得翻到最下面才能全选吗？」）：
                  //   工具条原来在**列表最下面** —— 68 条就得翻到底才能点「全选」✗
                  //   → 挪到**最上面**，跟标题挨着
                  // ⭐⭐ 2026-09-23（反馈「点『清空』之后提示在最下面，看都看不到」）：
                  //   确认条原来渲染在**列表下面** —— 68 条就得翻到底才看得见那两句问话 ✗
                  //   （跟 0.9.7 修过的「工具条在最下面」是同一个毛病）
                  //   → 改成**就地替换工具条**：两样都在最上面，点了「清空」，
                  //     工具条那一格立刻变成确认条，不用滚
                  已删.length > 0 && confirm && confirm.kind === 'purgeall'
                    ? 确认条('把收着的 ' + 已删.length + ' 条全清掉？找不回来了。', '全清掉', 'purgeall', '*')
                    : null,
                  // ⭐⭐ 2026-09-23（反馈「这里没有批量找回呀」）：批量找回的确认
                  //   注意：这个**不是销毁**（是往回捞），所以文案跟「清掉」正好相反
                  已删.length > 0 && !(confirm && confirm.kind === 'purgeall') && 批回问
                    ? React.createElement(
                        'div',
                        { style: S.confirm },
                        React.createElement(
                          'div',
                          { style: { flex: 1 } },
                          批回问.只合并
                            ? '把「合并掉的」那 ' + 已删.filter((m) => m.合并掉的 === true).length + ' 条全捞回来？'
                            : '把勾上的这 ' + 已选清几条 + ' 条捞回来？',
                          React.createElement(
                            'div',
                            { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 2 }) },
                            '捞回来之后它们又会被注入（跟原来一样）。不是销毁，随时能再删。',
                          ),
                        ),
                        React.createElement('button', {type: 'button',  style: S.btn, disabled: busy, onClick: () => 批回(s, 批回问.只合并) }, busy ? '捞着…' : '确定找回'),
                        React.createElement('button', {type: 'button',  style: S.btn, onClick: () => set批回问(false) }, '算了'),
                      )
                    : null,
                  已删.length > 0 && !(confirm && confirm.kind === 'purgeall') && !批回问 && 批清问 && 已选清几条 > 0
                    ? React.createElement(
                        'div',
                        { style: S.confirm },
                        React.createElement(
                          'div',
                          { style: { flex: 1 } },
                          '要彻底清掉这 ' + 已选清几条 + ' 条吗？',
                          React.createElement(
                            'div',
                            { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 2 }) },
                            '清掉就找不回来了（备份目录里可能还有一份）。想留就用「找回来」。',
                          ),
                        ),
                        React.createElement('button', {type: 'button',  style: S.btnDanger, disabled: busy, onClick: () => 批清(s) }, busy ? '清着…' : '确定清掉（' + 已选清几条 + ' 条）'),
                        React.createElement('button', {type: 'button',  style: S.btn, onClick: () => set批清问(false) }, '算了'),
                      )
                    : null,
                  已删.length > 0 && !(confirm && confirm.kind === 'purgeall') && !批回问 && !(批清问 && 已选清几条 > 0)
                    ? React.createElement(
                        'div',
                        { style: { margin: '8px 0', display: 'flex', flexWrap: 'wrap', gap: 8, flexWrap: 'wrap', alignItems: 'center' } },
                        // ⭐ 一键全选
                        React.createElement(
                          'button',
                          {type: 'button',
                            style: S.btn,
                            title: '把这一栏里的全勾上（再点一下取消）',
                            onClick: () => {
                              if (已选清几条 === 已删.length) {
                                set选中清({})
                                set批清问(false)
                                return
                              }
                              const 全 = {}
                              for (const m of 已删) 全[m.id] = true
                              set选中清(全)
                            },
                          },
                          已选清几条 === 已删.length && 已删.length > 0 ? '取消全选' : '全选（' + 已删.length + '）',
                        ),
                        // ⭐ 批量清掉（勾了几条就显示几条）—— 点了**不直接清**，先问一遍
                        已选清几条 > 0
                          ? React.createElement(
                              'button',
                              {type: 'button',  style: S.btnDanger, onClick: () => set批清问(true) },
                              '批量清掉（' + 已选清几条 + '）',
                            )
                          : null,
                        // ⭐⭐ 2026-09-23（反馈「这里没有批量找回呀」）：**批量找回**
                        已选清几条 > 0
                          ? React.createElement(
                              'button',
                              {type: 'button',
                                style: S.btn,
                                title: '把勾上的这几条从「已删」里捞回来（不是销毁，随时能再删）',
                                onClick: () => set批回问({ 只合并: false }),
                              },
                              '批量找回（' + 已选清几条 + '）',
                            )
                          : null,
                        // ⭐ 一键撤销整次合并：把「合并掉的」那批全捞回来
                        已删.filter((m) => m.合并掉的 === true).length > 0
                          ? React.createElement(
                              'button',
                              {type: 'button',
                                style: S.btn,
                                title: '把「合并掉的」那批全捞回来 —— 等于撤销整次合并',
                                onClick: () => set批回问({ 只合并: true }),
                              },
                              '撤销合并：全找回（' + 已删.filter((m) => m.合并掉的 === true).length + '）',
                            )
                          : null,
                        已选清几条 > 0
                          ? React.createElement(
                              'button',
                              {type: 'button',  style: S.btn, onClick: () => { set选中清({}); set批清问(false); set批回问(false) } },
                              '取消勾选',
                            )
                          : null,
                        React.createElement('button', {type: 'button',  style: S.btn, onClick: () => setConfirm({ id: '*', kind: 'purgeall' }) }, '把「已删掉的」清空'),
                      )
                    : null,
                  已删.length === 0
                    ? React.createElement('div', { style: S.dim }, '（空的）')
                    : 已删.map((m) =>
                        React.createElement(
                          'div',
                          { key: m.id, style: S.条 },
                          React.createElement(
                            'div',
                            { className: 'fish-record-row', style: S.row },
                            // ⭐ 批量清掉：行首一个勾选框（跟上面那栏一样）
                            React.createElement('input', {'aria-label': '选择已删记忆：' + m.text,
                              type: 'checkbox',
                              checked: !!选中清[m.id],
                              title: '勾上它，再点上面的「批量清掉」',
                              onChange: () => set选中清(Object.assign({}, 选中清, { [m.id]: !选中清[m.id] })),
                            }),
                            React.createElement('div', { style: Object.assign({}, S.dim, { width: 108, flex: 'none' }) }, '收于 ' + rel(m.deletedAt, now)),
                            React.createElement('div', { style: Object.assign({}, S.dim, { flex: 1, minWidth: 0, overflowWrap: 'anywhere', wordBreak: 'break-word' }) }, m.text),
                            React.createElement('div', {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  style: Object.assign({}, S.link, { flex: 'none', fontSize: 'var(--fish-small)', marginRight: 10 }), onClick: () => 删(m.id, 'restore') }, '找回来'),
                            React.createElement('div', {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  style: Object.assign({}, S.drop, { flex: 'none', fontSize: 'var(--fish-small)', cursor: 'pointer' }), onClick: () => setConfirm({ id: m.id, kind: 'purge' }) }, '彻底清掉'),
                          ),
                          confirm && confirm.id === m.id && confirm.kind === 'purge'
                            ? 确认条('彻底清掉就找不回来了（备份里可能还有）。', '确认清掉', 'purge', m.id)
                            : null,
                        ),
                      ),
                  // ⭐⭐ 2026-09-24（她说的「那已被取代应该回回收站呀」）：
                  //   **被取代的**从主列表挪出来，收在回收站里（就在这一栏下面）✓
                  //   注意：放在 `showDeleted ?` **里面** —— 跟回收站一起折叠
                  //     （放外面的话，回收站收起来了它们还杵在那儿，看着像两栏）
                  //
                  //   ⚠注意：它们**不在 `s.deleted` 里** —— 所以上面那排
                  //     「全选 / 批量清掉 / 把已删掉的清空」**碰不到它们**，
                  //     这是故意的：被取代是自动标的（可能几百条），
                  //     不该被「清空」连坐销毁（丢 157 条那次的教训）✗✗
                  被取代的.length
                    ? React.createElement(
                        'div',
                        null,
                        React.createElement(
                          'div',
                          { style: Object.assign({}, S.h, { marginTop: 16 }) },
                          '被取代的（' + 被取代的.length + '）',
                        ),
                        React.createElement(
                          'div',
                          { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginBottom: 4 }) },
                          '这些是「讲的是同一件事」里比较旧的那条，自动收起来的 —— 不再被注入，但东西还留着。',
                        ),
                        React.createElement(
                          'div',
                          { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginBottom: 4 }) },
                          '注意：「清空」不会清掉它们（只有你亲手删的那些才会被清掉）。想让它回来就点「恢复」。',
                        ),
                        被取代的.map((m) =>
                          React.createElement(
                            'div',
                            { key: m.id, style: S.条 },
                            React.createElement(
                              'div',
                              { className: 'fish-record-row', style: S.row },
                              React.createElement(
                                'div',
                                { style: Object.assign({}, S.dim, { width: 108, flex: 'none' }) },
                                m.已被取代 && m.已被取代.作废于 ? '收于 ' + rel(m.已被取代.作废于, now) : '收起来了',
                              ),
                              React.createElement(
                                'div',
                                { style: { flex: '1 1 260px', minWidth: 200, overflowWrap: 'anywhere', wordBreak: 'break-word' } },
                                React.createElement(
                                  'span',
                                  { style: Object.assign({}, S.dim, { textDecoration: 'line-through', opacity: 1 }) },
                                  m.text,
                                ),
                              ),
                              React.createElement(
                                'div',
                                {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },
                                  style: Object.assign({}, S.link, { flex: 'none', fontSize: 'var(--fish-small)' }),
                                  title: '让它回来 —— 又能被想起来了（标错了 / 状态又变回来了）',
                                  onClick: () => 撤销作废(m.id),
                                },
                                '恢复',
                              ),
                            ),
                            m.已被取代 && m.已被取代.为什么
                              ? React.createElement(
                                  'div',
                                  {
                                    style: Object.assign({}, S.dim, {
                                      margin: '4px 0 8px',
                                      fontSize: 'var(--fish-small)',
                                      overflowWrap: 'anywhere',
                                      wordBreak: 'break-word',
                                    }),
                                  },
                                  '为什么收起来：' + m.已被取代.为什么,
                                )
                              : null,
                          ),
                        ),
                      )
                    : null,
                  // 注意：工具条和两个确认条**都在上面**了（见前面那段）——
                  //   原来「批量清掉」和「清空」的确认条渲染在这儿（列表最下面），
                  //   条数一多就看不见 失败：→ 挪走了，这里不再重复
                )
              : null,
          ),
          // 注意：2026-09-22：**「备份」原来插在这里**（在「扩词」「导入」前面），
          //   可它后面跟的却是那两个区块 —— 看着像它俩的标题，其实只是句说明 ✗
          //   （「设置页面会不会有点乱」）
          //   → 挪到**末尾**，跟「这一页到底会怎么变」那些说明放一起
          React.createElement('div', null, 扩词区()),
          React.createElement(
            'div',
            {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  style: Object.assign({}, S.h, { cursor: 'pointer' }), onClick: () => setImpOpen(!impOpen) },
            (impOpen ? '▾ ' : '▸ ') + '从旧档案导入',
          ),
          React.createElement('div', { style: S.dim }, '把一个文件夹里的档案拆成一条条记忆，你挑完再导。文件夹在下面选。'),
          impOpen ? React.createElement('div', null, 导入区()) : null,
          tr
            ? React.createElement(
                'div',
                null,
                React.createElement('div', { style: S.h }, '最近一次召回'),
                React.createElement('div', { style: S.dim }, '线索：「' + String(tr.query || '').slice(0, 50) + '」'),
                tr.semantic ? React.createElement('div', { style: S.dim }, '语义：缺失向量 ' + tr.semantic.missing + '；耗时 ' + tr.semantic.latencyMs + 'ms；回退 ' + (tr.semantic.fallback || '无')) : null,
                (() => {
                  // 注意：按分数排再显示 —— 老记录是按**入库顺序**存的，
                  //   直接取前 12 条全是 0 分的老条目，看不出到底挑中了什么 ✗
                  //   （反馈：「这里为什么只有这些，该显示最近标中的」）
                  const 排好 = (tr.rows || []).slice().sort((a, b) => (b.P || 0) - (a.P || 0) || (b.C || 0) - (a.C || 0))
                  const 进去的 = 排好.filter((r) => !r.omission)
                  return React.createElement(
                    'div',
                    null,
                    React.createElement(
                      'div',
                      { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', margin: '2px 0 4px' }) },
                      进去的.length
                        ? '挑中并塞进去了 ' + 进去的.length + ' 条（排在最前面）'
                        : '这次一条都没挑中（线索跟记忆对不上）',
                    ),
                    排好.slice(0, 20).map((r, i) => {
                      const origin = r.storeId ? d.sessions.find(x => x.storeId === r.storeId) || s : s
                      const mm = origin.memories.find((x) => x.id === r.id) || (origin.deleted || []).find((x) => x.id === r.id)
                      const why = r.resident ? '常驻事实' : r.omission
                        ? { hard_gate: '没命中线索', below_threshold: '分数不够', limit: '超过条数上限', budget: '超过字数上限', duplicate: '跟另一条重复', fact_cap: '长期事实占满了名额' }[r.omission] || r.omission
                        : { assembled: '进去了', consumed: '像是用上了', invalidated: '已失效' }[r.status] || '进去了'
                      const 色 = r.omission
                        ? S.drop
                        : r.status === 'consumed'
                          ? S.ok
                          : S.dim
                      return React.createElement(
                        'div',
                        { key: i, style: Object.assign({}, S.row, S.条) },
                        React.createElement(
                          'div',
                          { style: { flex: 1 } },
                          (r.omission ? '　' : '') + String((mm && mm.text) || r.id).slice(0, 60),
                          r.storeId ? React.createElement('button', {type: 'button',  style: S.btn, onClick: () => setOpen(origin.id) }, '原库：' + r.storeId) : null,
                        ),
                        React.createElement('div', { style: Object.assign({}, S.dim, { width: 54 }) }, 'C ' + r.C + (r.vectorMissing ? ' / 向量缺失' : '') + (r.semantic !== null && r.semantic !== undefined ? ' / cos ' + r.semantic.toFixed(3) + ' / R ' + r.R : '')),
                        React.createElement('div', { style: Object.assign({}, S.dim, { width: 54 }) }, 'P ' + r.P),
                        React.createElement('div', { style: Object.assign({}, 色, { width: 96 }) }, why + (r.timeHit ? ' ⭐' : '')),
                      )
                    }),
                  )
                })(),
                React.createElement(
                  'div',
                  { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 6 }) },
                  '「进去了」= 这一轮塞进提示词了；「像是用上了」= 她回复里的实词跟这条重合得多（这是猜的）；「已失效」= 这条后来被删了或改过。',
                ),
              )
            : null,
          // ⭐ 2026-09-22：说明都放末尾（原来「备份」插在中间，看着像别的区块的标题）
          React.createElement('div', { style: S.h }, '备份'),
          React.createElement(
            'div',
            { style: S.dim },
            '记忆一变就会自动备份：上一版存在同目录的 .bak，另外每天存一份，留 14 天。' +
              '「补日期」「补标不淡」「改」「删」之前也都会先备一份。',
          ),
          ),
        )
      }

      // ---- 第一级：会话列表 + 参数 ----
      const spec = (d.spec || []).slice()
      const byKey = {}
      for (const s of spec) byKey[s.key] = s
      const WK = spec.filter((s) => s.group === 'weight').map((s) => s.key)

      const setOne = (k, native) => {
        // 函数式更新 —— 连着改两格不会互相覆盖
        setParams((prev) => Object.assign({}, prev, { [k]: native }))
        if (WK.indexOf(k) >= 0) setPin(k)
        setNotes(null)
      }

      const wSum = WK.length ? Math.round(WK.reduce((a, k) => a + toPct(params[k] || 0), 0) * 10) / 10 : 0

      // 2026-09-21 修版式：原来五个东西挤在一行里（标签写死 110px ＋ 一整句长提示），
      // flexWrap 一装不下就拆散成「一行一个」；而 9 个字的标签在 110px 盒子里还会自己折行
      // —— 她看到那个孤零零的「活」就是「没写时间的算多鲜活」的尾巴。
      // 现在拆两行：① 标签＋数字＋单位＋范围（短，不会挤）② 提示独占一行，自己换行。
      // 单位没写就不占位（原来会留一个空的 20px 盒子）。
      const oneRow = (s) => {
        const isW = s.group === 'weight'
        const lo = isW ? toPct(s.min) : s.min
        const hi = isW ? toPct(s.max) : s.max
        const cur = isW ? toPct(params[s.key]) : params[s.key]
        const typing = editing && editing.key === s.key
        const unit = isW ? '%' : s.unit || ''
        const head = [
          React.createElement('span', { key: 'lbl', style: { flex: '0 0 auto' } }, s.label),
          React.createElement('input', {'aria-label': s.label,
            key: 'inp',
            type: 'number',
            style: S.inp,
            min: lo,
            max: hi,
            step: isW ? 0.1 : s.step,
            value: typing ? editing.text : String(cur),
            onChange: (e) => {
              const t = e.target.value
              setEditing({ key: s.key, text: t })
              const n = Number(t)
              if (t !== '' && isFinite(n)) setOne(s.key, isW ? fromPct(n) : n)
            },
            onBlur: () => setEditing(null),
          }),
        ]
        if (unit) head.push(React.createElement('span', { key: 'unit', style: S.dim }, unit))
        head.push(React.createElement('span', { key: 'rng', style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', opacity: 1 }) }, '（' + lo + ' ~ ' + hi + '）'))
        return React.createElement(
          'div',
          { key: s.key, style: { margin: '7px 0' } },
          React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 6, flexWrap: 'wrap' } }, head),
          s.tip
            ? React.createElement('div', { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 2, lineHeight: 1.5 }) }, s.tip)
            : null,
        )
      }

      const save = (body) => {
        setBusy(true)
        setNotes(null)
        post('/policy', body)
          .then((r) => {
            if (r && r.policy) setParams(Object.assign({}, r.policy))
            setNotes((r && r.notes) || [])
            setBusy(false)
            load()
          })
          .catch((e) => {
            setBusy(false)
            setNotes(['保存失败：' + ((e && e.message) || e)])
          })
      }

      const blocks = []
      for (const [gid, gname, gtip] of GROUPS) {
        const rows = spec.filter((s) => s.group === gid)
        if (!rows.length) continue
        blocks.push(React.createElement('div', { key: gid, style: S.h }, gname))
        blocks.push(React.createElement('div', { key: gid + '-tip', style: S.dim }, gtip))
        if (gid === 'weight') {
          blocks.push(
            React.createElement(
              'div',
              { key: 'wsum', style: { margin: '8px 0 2px' } },
              React.createElement('span', { style: { display: 'inline-block', width: 110 } }, '合计'),
              React.createElement('span', { style: wSum === 100 ? S.ok : S.warn, fontWeight: 600 }, wSum + '%'),
              wSum === 100
                ? React.createElement('span', { style: Object.assign({}, S.dim, { marginLeft: 10, fontSize: 'var(--fish-small)' }) }, '正好')
                : React.createElement('span', { style: Object.assign({}, S.dim, { marginLeft: 10, fontSize: 'var(--fish-small)' }) }, '不是 100% —— 保存时会自动调平'),
            ),
          )
        }
        for (const s of rows) blocks.push(oneRow(s))
      }

      return React.createElement(
        'div',
        { className: 'fish-module fish-memory', style: S.wrap },
        onPageChange ? null : React.createElement('div', { className: 'fish-subnav' }, ...['记忆库', '语义召回', '召回与遗忘', ...(historyImport ? ['历史导入'] : [])].map(name => React.createElement('button', { type: 'button', key: name, className: 'fish-button' + (memoryPage === name ? ' fish-primary' : ''), 'aria-pressed': memoryPage === name, onClick: () => setMemoryPage(name) }, name))),
        historyImport ? React.createElement('div', { hidden: memoryPage !== '历史导入' }, historyImport) : null,
        React.createElement('div', { hidden: memoryPage !== '记忆库' },
        React.createElement(
          'div',
          { style: { display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 8, marginBottom: 10 } },
          React.createElement('span', { style: { fontSize: 15, fontWeight: 600 } }, '长期记忆'),
          React.createElement('span', { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)' }) }, 'v' + (d.version || '?')),
        ),
        React.createElement('div', { style: Object.assign({}, S.h, { marginTop: 0 }) }, '哪些会话用记忆'),
        React.createElement(
          'div',
          { style: S.dim },
          '装好就是开着的 —— 每个会话都能记、也能读。想给某个会话单独关掉，点它右边那个「关」。每个会话一份记忆，淡了只是不容易被想起来，不会删。',
        ),
        React.createElement(
          'div',
          { style: S.nameBox },
          React.createElement('div', { style: { flex: 'none', width: 132 } }, '用户的称呼'),
          React.createElement('input', {'aria-label': 'ta / 她 / 他',
            style: Object.assign({}, S.inp, { width: 90 }),
            placeholder: 'ta / 她 / 他',
            value: pronounDraft !== null ? pronounDraft : d.userPronoun || 'ta',
            onChange: (e) => setPronounDraft(e.target.value),
          }),
          React.createElement(
            'button',
            {type: 'button',
              style: S.btn,
              onClick: () => {
                const p = pronounDraft !== null ? pronounDraft : d.userPronoun || 'ta'
                post('/names', { userPronoun: p }).then((r) => {
                  setPronounDraft(null)
                  // 影响到了旧记忆就先问一句，不偷偷改
                  if (r && r.称呼影响几条 > 0 && !r.称呼已改) setPronounAsk({ n: r.称呼影响几条, to: p, 例子: r.称呼例子 || [] })
                  else setPronounAsk(null)
                  load()
                })
              },
            },
            '存',
          ),
          React.createElement('span', { style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', flex: 1 }) }, '记忆里提到你时用哪个字。默认「ta」；设成「她」或「他」就按你设的记。'),
        ),
        pronounAsk
          ? React.createElement(
              'div',
              { style: S.askBox },
              React.createElement(
                'div',
                { style: { flex: 1 } },
                React.createElement('div', null, '已有 ' + pronounAsk.n + ' 条旧记忆里还写着旧的字。要一起改成「' + pronounAsk.to + '」吗？'),
                (pronounAsk.例子 || []).slice(0, 2).map((e, i) =>
                  React.createElement('div', { key: i, style: Object.assign({}, S.dim, { fontSize: 'var(--fish-small)', marginTop: 2 }) }, '　「' + e.旧 + '」→「' + e.新 + '」'),
                ),
              ),
              React.createElement(
                'button',
                {type: 'button',
                  style: S.btn,
                  onClick: () =>
                    post('/names', { userPronoun: pronounAsk.to, applyToExisting: true }).then(() => {
                      setPronounAsk(null)
                      load()
                    }),
                },
                '一起改',
              ),
              React.createElement('button', {type: 'button',  style: S.btn, onClick: () => setPronounAsk(null) }, '以后再说'),
            )
          : null,
        // ⭐ 1.3.4：**总开关**（管整个插件）+ 下面每个会话自己的开关
        //   放同一块，是因为它们管的是同一件事（记不记），只是范围不同。
        React.createElement(
          'div',
          { style: Object.assign({}, S.row, S.条, { alignItems: 'center' }) },
          React.createElement(
            'button',
            {type: 'button', role: 'switch', 'aria-checked': d.全局开关 !== false, 'aria-label': '启用长期记忆',
              style: Object.assign({}, S.btn, {
                flex: 'none',
                color: d.全局开关 !== false ? 'var(--fish-success)' : 'inherit',
                borderColor: d.全局开关 !== false ? 'var(--fish-success)' : 'var(--fish-border)',
              }),
              disabled: busy,
              onClick: () => {
                setBusy(true)
                post('/global', { on: d.全局开关 === false })
                  .then(() => {
                    setBusy(false)
                    load()
                  })
                  .catch(() => setBusy(false))
              },
            },
            (d.全局开关 !== false ? '● ' : '○ ') + 'remember 工具',
          ),
          React.createElement(
            'div',
            { style: Object.assign({}, S.dim, { flex: 1, minWidth: 0 }) },
            d.全局开关 !== false
              ? '所有会话都能记、也能读。单独不想要哪个，用下面那一行关掉。'
              : '全关着 —— 哪个会话都不记也不读，工具列表里也不会出现它。',
          ),
        ),

        React.createElement('div', { className: 'fish-record', style: S.条 },
          React.createElement('div', { style: S.h }, 'QQ 记忆隔离'),
          React.createElement('label', null, '主人 QQ ', React.createElement('input', {
            'aria-label': '主人 QQ', value: d.qqOwner || '', style: S.inp,
            onChange: e => setD({ ...d, qqOwner: e.target.value }),
          })),
          React.createElement('label', null, ' 隔离群号 ', React.createElement('input', {
            'aria-label': '隔离群号', value: Array.isArray(d.qqIsolatedGroups) ? d.qqIsolatedGroups.join(',') : d.qqIsolatedGroups || '', style: S.inp,
            onChange: e => setD({ ...d, qqIsolatedGroups: e.target.value }),
          })),
          React.createElement('button', {type: 'button',  style: S.btn, disabled: busy, onClick: async () => {
            setBusy(true)
            try {
              const result = await post('/qq-settings', { qqOwner: d.qqOwner, qqIsolatedGroups: Array.isArray(d.qqIsolatedGroups) ? d.qqIsolatedGroups.join(',') : d.qqIsolatedGroups })
              if (!result.ok) throw new Error(result.error || result.message || '保存失败')
              load()
            } catch (e) { setErr(e.message) } finally { setBusy(false) }
          } }, '保存 QQ 设置'),
          React.createElement('p', { style: S.dim }, '群号以逗号分隔。其余已绑定群默认共用普通群库。主人仅在可信私聊轮次跨库检索；其他私聊独立。每个聊天仍须独立会话，未绑定群不会接入。切换隔离后旧库保留，可在下方按库管理。'),
          React.createElement('button', {type: 'button',  style: S.btn, disabled: busy, onClick: async () => {
            setBusy(true)
            try {
              const preview = await post('/qq-migrate', {})
              if (!preview.ok) throw new Error(preview.error || '预览失败')
              setD(old => ({ ...old, qqMigration: preview }))
            } catch (e) { setErr(e.message) } finally { setBusy(false) }
          } }, '预览旧数据迁移'),
          d.qqMigration ? React.createElement('div', null,
            React.createElement('pre', { style: { maxHeight: 240, overflow: 'auto', whiteSpace: 'pre-wrap' } }, JSON.stringify(d.qqMigration, null, 2)),
            React.createElement('button', {type: 'button',  style: S.btn, disabled: busy || !d.qqMigration.preview, onClick: async () => {
              setBusy(true)
              try { const result = await post('/qq-migrate', { execute: true }); setD(old => ({ ...old, qqMigration: result })) }
              catch (e) { setErr(e.message) } finally { setBusy(false) }
            } }, '备份并迁移可信条目（保留原件）')) : null,
        ),
        // ⭐ 1.4.5：记忆按什么归类 —— 按会话 / 按工作区
        React.createElement(
          'div',
          { style: Object.assign({}, S.row, S.条, { alignItems: 'center' }) },
          React.createElement(
            'button',
            {type: 'button',
              style: Object.assign({}, S.btn, {
                flex: 'none',
                color: d.模式 === 'workspace' ? 'var(--fish-success)' : 'inherit',
                borderColor: d.模式 === 'workspace' ? 'var(--fish-success)' : 'var(--fish-border)',
              }),
              disabled: busy,
              onClick: () => {
                const 要切 = d.模式 === 'workspace' ? 'session' : 'workspace'
                if (要切 !== 'workspace') {
                  // 切回按会话：不涉及合并，直接切
                  setBusy(true)
                  post('/mode', { 模式: 要切 }).then(() => { setBusy(false); load() }).catch(() => setBusy(false))
                  return
                }
                // 切成按工作区：先**试算**（每间会话现有几条、并完剩几条），看清楚再决定
                setBusy(true)
                post('/merge-workspace', { 试算: true })
                  .then((j) => {
                    setBusy(false)
                    const 报告 = (j && j.报告) || []
                    if (!j || !j.ok || !报告.length) {
                      // 没有可并的（都还是空的）→ 直接切
                      setBusy(true)
                      post('/mode', { 模式: 要切 }).then(() => { setBusy(false); load() }).catch(() => setBusy(false))
                      return
                    }
                    set并入(报告)
                  })
                  .catch(() => setBusy(false))
              },
            },
            (d.模式 === 'workspace' ? '按工作区' : '按会话'),
          ),
          React.createElement(
            'div',
            { style: Object.assign({}, S.dim, { flex: 1, minWidth: 0 }) },
            d.模式 === 'workspace'
              ? '整个工作区共用一个记忆库 —— 新开的会话自动接上，归档旧会话记忆也不会跟着走。'
              : '每个会话各记各的。会话开久了变卡、要归档换新会话时，切成「按工作区」就接得上了。',
          ),
        ),
        合并预览(),
        (d.sessions || []).map((s) =>
          React.createElement(
            'div',
            { key: s.id, className: 'fish-library-row', style: Object.assign({}, S.row, S.条) },
            React.createElement(
              'button',
              {type: 'button', role: 'switch', 'aria-checked': !!s.enabled, 'aria-label': '启用记忆：' + (s.title || s.id),
                style: Object.assign({}, S.btn, {
                  flex: 'none',
                  minWidth: 72,
                  color: s.enabled ? 'var(--fish-success)' : 'inherit',
                  borderColor: s.enabled ? 'var(--fish-success)' : 'var(--fish-border)',
                }),
                disabled: busy,
                onClick: () => {
                  setBusy(true)
                  post('/toggle', { session: s.id, on: !s.enabled })
                    .then(() => {
                      setBusy(false)
                      load()
                    })
                    .catch(() => setBusy(false))
                },
              },
              s.enabled ? '● 开' : '○ 关',
            ),
            React.createElement('div', {role: 'button', tabIndex: 0, onKeyDown: e => { if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.currentTarget.click() } },  style: Object.assign({}, S.link, { flex: 1, minWidth: 0, overflowWrap: 'anywhere' }), onClick: () => setOpen(s.id) }, s.title || s.id.slice(0, 24)),
            s.live ? null : React.createElement('div', { style: Object.assign({}, S.dim, { width: 48, fontSize: 'var(--fish-small)' }) }, '不在线'),
            React.createElement('div', { style: Object.assign({}, S.dim, { width: 60 }) }, s.count + ' 条'),
            React.createElement('div', { style: Object.assign({}, S.dim, { width: 90 }) }, s.lastTrace ? rel(s.lastTrace, now) : '—'),
          ),
        ),
        React.createElement('p', { style: S.dim }, '点击记忆库名称，查看、编辑记忆和档案。')),
        React.createElement('div', { hidden: memoryPage !== '语义召回' }, React.createElement(EmbeddingSettings, { notify })),
        memoryPage === '召回与遗忘'
          ? React.createElement(
              'div',
              null,
              React.createElement('div', { style: S.dim }, '这些是所有会话共用的。每项都有范围，超出会被收到范围内。'),
              blocks,
              React.createElement(
                'div',
                { style: { marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' } },
                React.createElement(
                  'button',
                  {type: 'button',  style: S.btn, disabled: busy, onClick: () => save(Object.assign({}, params, { pin })) },
                  busy ? '保存中…' : '保存参数',
                ),
                React.createElement('button', {type: 'button',  style: S.btn, disabled: busy, onClick: () => save({ reset: true }) }, '恢复默认'),
                React.createElement('button', {type: 'button',  style: S.btn, disabled: busy, onClick: () => load() }, '刷新'),
              ),
            )
          : null,
        notes && notes.length
          ? React.createElement(
              'div',
              { style: Object.assign({}, S.warn, { marginTop: 8, fontSize: 'var(--fish-small)', whiteSpace: 'pre-line' }) },
              '　· ' + notes.join('\n　· '),
            )
          : null,

      )
    }

    function apply(ctx) {
      const slots = ctx.get('slots')
      if (slots === undefined) return
      slots.inject('settings.section', () =>
        slots.register(
          {
            name: 'settings.section',
            id: 'memory',
            order: 51,
            label: () => '长期记忆',
          },
          () => React.createElement('div', null, null, React.createElement(Section)),
        ),
      )
    }

    exports.Section = Section
    exports.apply = apply
    exports.inject = inject
    return module.exports
  },
})

/**
 * dsh-feiyu-mood —— 浏览器半端（设置里的一页「心情」）
 * ============================================================================
 * 自注册脚本（和 dsh-bili-scroll 一样的约定）：
 *
 *     moduleLoader.load({ id: '<包名>', factory: (require) => ({ inject, apply }) })
 *
 * 这一页要满足的想法（主人 2026-10-19）：
 *   · 心情插件**也能给别人用** ⇒ 名字得能改（它叫什么叫什么、你叫什么叫什么）
 *   · 目标会话、基线、下限、注入开关、自动判断开关，都在面板里改，不用去翻 config.json
 *   · 改完**立刻生效**（宿主那边是原地改 cfg，不用重启）
 *
 * ⭐ 0.6.0：设置页分四个页签（心情 / 会话绑定 / 判断与注入 / 挂饰）。
 *    一份心情可以绑好几个会话 —— 这些会话共用一份心情、一条时间线、每天的额度；
 *    分页签只是把「看」和「改」分开，切页签不动任何设置。
 *
 * ⭐ 0.7.0：「会话绑定」页签顶上多了**模式切换**，二选一：
 *    · 会话模式：跟以前一样，按点名的会话绑；
 *    · 工作区模式：按工作区绑 —— 那个工作区下所有会话都归这一份，新开的自动进来。
 *    名字那栏的文案也改清楚了：那只是「这份叫什么」，不是称呼（称呼在「判断与注入」）。
 * ============================================================================
 */
moduleLoader.load({
  id: 'dsh-feiyu-mood',
  factory: (require) => {
    const React = require('react')
    const h = React.createElement

    const API = '/dsh-feiyu-mood'

    // 四个页签（默认第一个）
    const 页签 = [
      ['mood', '心情'],
      ['bind', '会话绑定'],
      ['judge', '判断与注入'],
      ['charm', '挂饰'],
    ]

    // 五档表情：用的就是挂饰那五张图（assets/face-*.png，448×352）
    const faceImg = (v) => {
      const m = Number(v)
      if (!Number.isFinite(m)) return API + '/face-ok.png'
      if (m >= 80) return API + '/face-great.png'
      if (m >= 62) return API + '/face-good.png'
      if (m >= 42) return API + '/face-ok.png'
      if (m >= 25) return API + '/face-worry.png'
      return API + '/face-sad.png'
    }

    const getJson = async (url) => {
      const res = await fetch(url, { headers: { accept: 'application/json' } })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      return res.json()
    }
    const postJson = async (url, body) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body || {}),
      })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      return res.json()
    }

    const CSS = `
.big-fish [data-fm-wrap]{display:flex;flex-direction:column;gap:24px;min-width:0;padding-bottom:24px}
.big-fish [data-fm-hero]{display:flex;align-items:center;gap:24px;padding:24px;background:var(--fish-panel);border:1px solid var(--fish-border);border-radius:var(--fish-radius);box-shadow:var(--fish-shadow);flex-wrap:wrap}
.big-fish [data-fm-face]{width:112px;height:auto;aspect-ratio:448/352;object-fit:contain;flex:none}
.big-fish [data-fm-big]{font:700 32px/1.4 var(--fish-title)}
.big-fish [data-fm-sub],.big-fish [data-fm-note]{font-size:14px;line-height:1.75;color:var(--fish-muted);overflow-wrap:anywhere}
.big-fish [data-fm-sec]{display:flex;flex-direction:column;gap:16px;padding:8px 0 24px;border-bottom:1px solid var(--fish-border)}
.big-fish [data-fm-h]{font:700 20px/1.5 var(--fish-title);margin-bottom:4px}
.big-fish [data-fm-row]{display:flex;align-items:center;gap:16px;flex-wrap:wrap;padding:8px 0}
.big-fish [data-fm-grow]{flex:1 1 220px;min-width:0}
.big-fish [data-fm-label]{font-size:16px}
.big-fish [data-fm-input]{padding:8px 12px;border-radius:var(--fish-radius-sm);border:1px solid var(--fish-control-border);background:var(--fish-surface);color:var(--fish-text);font-size:14px;max-width:100%;min-width:0}
.big-fish [data-fm-num]{width:104px}
.big-fish [data-fm-btn],.big-fish [data-fm-pick]{padding:8px 16px;border-radius:var(--fish-radius-sm);border:1px solid var(--fish-border);background:var(--fish-control-fill);color:var(--fish-text);font-size:14px;cursor:pointer}
.big-fish [data-fm-msg]{font-size:14px;min-height:24px;color:var(--fish-text)}
.big-fish [data-fm-tabs]{display:flex;gap:8px;overflow-x:auto;padding-bottom:16px;border-bottom:1px solid var(--fish-border)}
.big-fish [data-fm-tab]{padding:8px 16px;border-radius:var(--fish-radius-sm);border:1px solid transparent;background:transparent;color:var(--fish-muted);font-size:14px;white-space:nowrap;flex:none}
.big-fish [data-fm-on]{background:var(--fish-accent-soft);border-color:var(--fish-border);color:var(--fish-action);font-weight:600}
.big-fish [data-fm-pane]{display:flex;flex-direction:column;gap:24px;min-width:0}
.big-fish [data-fm-slot]{display:flex;flex-direction:column;gap:16px;padding:24px;border:1px solid var(--fish-border);border-radius:var(--fish-radius);box-shadow:var(--fish-shadow);background:var(--fish-panel)}
.big-fish [data-fm-sess]{display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:8px 0}
.big-fish [data-fm-sessname]{flex:1;min-width:0;font-size:14px;overflow-wrap:anywhere}
.big-fish [data-fm-faces]{display:flex;gap:24px;flex-wrap:wrap}
.big-fish [data-fm-faces] img{width:84px;height:auto;aspect-ratio:448/352;object-fit:contain;display:block}
.big-fish [data-fm-quote]{font-size:16px;line-height:1.8;white-space:pre-wrap;overflow-wrap:anywhere;padding:24px;border-radius:var(--fish-radius-sm);background:var(--fish-soft)}
.big-fish [data-fm-quote][data-fm-dim]{color:var(--fish-muted)}
.big-fish [data-fm-tl]{display:flex;flex-direction:column;max-height:400px;overflow:auto}
.big-fish [data-fm-tlrow]{display:grid;grid-template-columns:136px 40px 48px minmax(0,1fr);gap:12px;padding:16px 0;border-bottom:1px solid var(--fish-line);font-size:14px;line-height:1.75}
.big-fish [data-fm-time]{color:var(--fish-muted)}
.big-fish [data-fm-mood]{font-weight:600}
.big-fish [data-fm-delta]{color:var(--fish-action)}
.big-fish [data-fm-reason]{overflow-wrap:anywhere}
.big-fish [data-fm-ver]{display:flex;align-items:center;gap:16px;padding:16px;border-radius:var(--fish-radius-sm);background:var(--fish-soft)}
@container(max-width:520px){.big-fish [data-fm-tlrow]{grid-template-columns:minmax(0,1fr) 40px 48px}.big-fish [data-fm-reason]{grid-column:1/-1}.big-fish [data-fm-slot]{padding:16px}}
`

    function Panel({ page, onPageChange, notify } = {}) {
      const [cfg, setCfg] = React.useState(null)
      const [st, setSt] = React.useState(null)
      const [sessions, setSessions] = React.useState([])
      const [工作区们, set工作区们] = React.useState([])   // 工作区模式的下拉清单
      const [看哪份, set看哪份] = React.useState('')      // 多份心情时看的是哪一份
      const 看哪份Ref = React.useRef('')
      const keyNow = () => (看哪份Ref.current ? '?key=' + encodeURIComponent(看哪份Ref.current) : '')
      const [models, setModels] = React.useState([])
      const [busy, setBusy] = React.useState('')
      const 告知 = (text, options) => { if (typeof notify === 'function') notify(text, options) }
      const [localPage, setLocalPage] = React.useState('mood')
      const 页 = page ?? localPage
      const set页 = onPageChange ?? setLocalPage       // 页签：mood / bind / judge / charm

      const flash = (t, options) => 告知(t, options)

      const load = React.useCallback(async () => {
        try {
          const [c, s] = await Promise.all([getJson(API + '/config'), getJson(API + '/state' + keyNow())])
          if (c && c.config) setCfg(c.config)
          if (s && s.ok) setSt(s)
        } catch (e) {
          flash('读取失败：' + (e && e.message), { holdMs: 6000 })
        }
      }, [])

      React.useEffect(() => {
        load()
        getJson(API + '/sessions').then((r) => setSessions((r && r.sessions) || [])).catch(() => {})
        getJson(API + '/workspaces').then((r) => set工作区们((r && r.workspaces) || [])).catch(() => {})
        getJson(API + '/models').then((r) => setModels((r && r.providers) || [])).catch(() => {})
        const t = setInterval(() => { getJson(API + '/state' + keyNow()).then((s) => s && s.ok && setSt(s)).catch(() => {}) }, 20000)
        return () => clearInterval(t)
      }, [load])

      // ⭐ 0.7.5（最小化的时候心情以前不刷新，得点一下才变）：
      //   页面在后台时浏览器会把定时器节流到一分钟以上，切回来那一瞬间还显示旧值。
      //   所以「重新可见 / 重新获得焦点」时立刻拉一次 —— 不用她点任何东西。
      React.useEffect(() => {
        const 立刻刷 = () => {
          if (document.hidden) return
          getJson(API + '/state' + keyNow()).then((s) => { if (s && s.ok) setSt(s) }).catch(() => {})
        }
        document.addEventListener('visibilitychange', 立刻刷)
        window.addEventListener('focus', 立刻刷)
        return () => {
          document.removeEventListener('visibilitychange', 立刻刷)
          window.removeEventListener('focus', 立刻刷)
        }
      }, [])

      const patch = async (p, label) => {
        setCfg((c) => ({ ...c, ...p }))
        try {
          const r = await postJson(API + '/config', p)
          if (r && r.config) setCfg(r.config)
          flash((label || '设置') + ' 已保存', { tone: 'success' })
        } catch (e) { flash('保存失败：' + (e && e.message)) }
      }

      /* ⭐ 一份心情可以绑好几个会话（或一个工作区）：这里照这份清单画
         （没配置过就当成「第一份」；id 尽量沿用宿主给的 st.key，别凭空造一个） */
      const 份列表 = (() => {
        const raw = Array.isArray(cfg && cfg.slots) && cfg.slots.length
          ? cfg.slots
          : [{ id: String((st && st.key) || ''), label: '', selfName: '', ownerName: '', 工作区: '', sessions: [] }]
        return raw.map((s) => ({
          id: String((s && s.id) || ''),
          label: String((s && s.label) || ''),
          selfName: String((s && s.selfName) || ''),
          ownerName: String((s && s.ownerName) || ''),
          工作区: String((s && s.工作区) || (s && s.workspace) || ''),
          sessions: Array.isArray(s && s.sessions)
            ? s.sessions.map((x) => String(x || ''))
            : ((s && s.session) ? [String(s.session)] : []),
        }))
      })()
      const 会话名 = (id) => {
        const hit = (sessions || []).find((x) => x.id === id)
        return (hit && hit.title) || String(id)
      }
      const 份标题 = (sl) => sl.label
        || (sl.sessions || []).map(会话名).filter(Boolean).join('、')
        || (sl.工作区 ? String(sl.工作区) : '')
        || '（还没绑会话）'
      const 已绑 = new Set()
      份列表.forEach((p) => p.sessions.forEach((s) => 已绑.add(s)))
      const 可加会话 = (sessions || []).filter((x) => !已绑.has(x.id))

      const 改份 = (i, 变) => patch({ slots: 份列表.map((x, j) => (j === i ? { ...x, ...变 } : x)) }, '绑定')

      const 切份 = (e) => {
        const v = e.target.value
        set看哪份(v)
        看哪份Ref.current = v
        getJson(API + '/state?key=' + encodeURIComponent(v)).then((x) => { if (x && x.ok) setSt(x) }).catch(() => {})
      }

      const onReset = async () => {
        setBusy('reset')
        try {
          await postJson(API + '/reset', { key: 看哪份 || (st && st.key) || '' })
          await load()
          flash('已重置到基线')
        } catch (e) { flash('重置失败：' + (e && e.message)) }
        setBusy('')
      }

      if (!cfg) return h('div', { 'data-fm-wrap': '' }, h('div', { 'data-fm-note': '' }, '读取中…'))

      const sw = (key, label) => h('input', {
        type: 'checkbox', role: 'switch', 'aria-label': label,
        checked: Boolean(cfg[key]),
        onChange: (e) => patch({ [key]: e.target.checked }, label),
      })

      const numInput = (key, label, note, min, max) => h('div', { 'data-fm-row': '' },
        h('div', { 'data-fm-grow': '' },
          h('div', { 'data-fm-label': '' }, label),
          note ? h('div', { 'data-fm-note': '' }, note) : null),
        h('input', {
          'data-fm-input': '', 'data-fm-num': '', type: 'number', min, max, 'aria-label': label,
          value: String(cfg[key] ?? ''),
          onChange: (e) => setCfg((c) => ({ ...c, [key]: e.target.value })),
          onBlur: () => {
            const n = Math.max(min, Math.min(Number(cfg[key]) || 0, max))
            patch({ [key]: n }, label)
          },
        }))


      /* ── 页签 1：心情（当前心情 / 它会听到的话 / 完整记录） ── */
      const 心情页 = (() => {
        const 项 = []
        if (st && st.multi) {
          项.push(h('div', { key: 'pick', 'data-fm-sec': '' },
            h('div', { 'data-fm-h': '' }, '这是哪一份心情'),
            h('div', { 'data-fm-note': '' },
              '现在有 ' + (st.slots || []).length + ' 份，各自绑各自的会话、互不影响。这里只切换「看」哪一份，不改任何设置。'),
            h('select', {'aria-label': '选择心情',
              'data-fm-input': '', value: 看哪份 || (st.key || ''),
              onChange: 切份,
            },
              (st.slots || []).map((sl) => h('option', { key: sl.id, value: sl.id }, 份标题(sl))))))
        }
        项.push(h('div', { key: 'hero', 'data-fm-hero': '' },
          h('img', { 'data-fm-face': '', src: faceImg(st && st.mood), alt: '' }),
          h('div', { 'data-fm-grow': '' },
            h('div', { 'data-fm-big': '' }, (st && st.mood != null ? st.mood : '—')
              + (st && st.moodLabel ? '　' + st.moodLabel : '')),
            h('div', { 'data-fm-sub': '' },
              ((st && st.lastReason) || '还没有记录 —— 跟 TA 聊起来就有了'),
              (st && st.updatedAt ? '（' + new Date(st.updatedAt).toLocaleString() + '）' : ''),
              (st && st.lastReason
                ? (st.injectMode === 'off'
                  ? '　· 心情不告诉它'
                  : (st.injectable ? '　· 这条还没跟它说' : '　· 这条已经说过了'))
                : ''))),
          h('button', {type: 'button',  'data-fm-btn': '', disabled: busy === 'reset', onClick: onReset }, '重置到基线')))
        项.push(h('div', { key: 'dimensions', 'data-fm-sec': '' },
          h('div', { 'data-fm-h': '' }, '七维情绪'),
          h('div', { className: 'fish-dimensions' },
            [['happy', '开心'], ['calm', '踏实'], ['sweet', '甜蜜'], ['heartache', '心疼'], ['worry', '担心'], ['sad', '难过'], ['jealous', '吃醋']].map(([key, label]) => {
              const dimension = (st?.dims || []).find(item => item.key === key)
              const value = Number(dimension?.value)
              const available = dimension && Number.isFinite(value)
              return h('div', { key }, h('div', { className: 'fish-dimension-label' }, h('span', null, label), h('span', null, available ? value + ' / 100' : '暂无数据')),
                h('div', { className: 'fish-dimension-track', 'aria-hidden': true }, h('span', { style: { width: available ? Math.max(0, Math.min(100, value)) + '%' : '0%' } })))
            }))))
        项.push(h('div', { key: 'preview', 'data-fm-sec': '' },
          h('div', { 'data-fm-h': '' }, '它会听到的那句话'),
          (st && st.injectPreview && st.injectPreview.state === 'off')
            ? h('div', { 'data-fm-note': '' }, '现在选的是「不告诉它」—— 心情只记在后台，不影响它说话。')
            : null,
          (st && st.injectPreview && st.injectPreview.state === 'pending')
            ? h('div', {},
              h('div', { 'data-fm-note': '' }, '下一次它开口时，会看到这句（预览 —— 括号里的话会随机换一句）：'),
              h('div', { 'data-fm-quote': '' }, st.injectPreview.text || '（这会儿没有可说的）'))
            : null,
          (st && st.injectPreview && st.injectPreview.state === 'minor')
            ? h('div', { 'data-fm-note': '' }, '这次只是个小波动，够不上门槛 —— 记在后台，不打扰它。')
            : null,
          (st && st.injectPreview && st.injectPreview.state === 'blocked')
            ? h('div', {},
              h('div', { 'data-fm-note': '' },
                '今天已经说过 ' + (st.injectPreview.said != null ? st.injectPreview.said : st.saidToday)
                + ' 次（上限 ' + (st.injectPreview.cap != null ? st.injectPreview.cap : st.injectPerDay)
                + '）—— 这一次的心情今天不会再说了，明天 0 点重新算。'),
              st.lastInjectedText
                ? h('div', {},
                  h('div', { 'data-fm-note': '' },
                    '最近一次说过的话'
                    + (st.lastInjectedAt ? '（' + new Date(st.lastInjectedAt).toLocaleString() + '）' : '')
                    + ' —— 不是这次的：'),
                  h('div', { 'data-fm-quote': '', 'data-fm-dim': '' }, st.lastInjectedText))
                : null)
            : null,
          (st && st.injectPreview && st.injectPreview.state === 'said')
            ? h('div', {},
              h('div', { 'data-fm-note': '' },
                '最近一次说给 TA 的话'
                + (st.lastInjectedAt ? '（' + new Date(st.lastInjectedAt).toLocaleString() + '）' : '')
                + (st.injectPreview.replay
                  ? ' —— 这句是按当时的记录还原的，字面可能略有出入：'
                  : ' —— 同一件事不会再说第二遍，之后这句就留在对话记录里：')),
              h('div', { 'data-fm-quote': '', 'data-fm-dim': st.lastInjectedText ? undefined : '' },
                st.lastInjectedText || '（还没有说过；等下一次心情有变化就有了）'))
            : null))
        项.push(h('div', { key: 'timeline', 'data-fm-sec': '' },
          h('div', { 'data-fm-h': '' }, '完整记录'),
          h('div', { 'data-fm-tl': '' },
            ((st && st.timeline) || []).slice().reverse().slice(0, 40).map((t, i) => h('div', { 'data-fm-tlrow': '', key: i },
              h('span', { 'data-fm-time': '' }, new Date(t.at).toLocaleString()),
              h('span', { 'data-fm-mood': '' }, String(t.mood)),
              h('span', { 'data-fm-delta': '' }, (t.delta > 0 ? '+' : '') + (t.delta ?? 0)),
              h('span', { 'data-fm-reason': '' }, (t.reason || '—')
                + (t.kind === 'decay' ? '（自己平的）' : '')
                + (t.minor ? '（小波动，没告诉它）' : '')
                + (t.conf != null && t.kind !== 'decay' ? '（可信 ' + t.conf + '）' : ''))))),
          (st && st.timeline && st.timeline.length > 40
            ? h('div', { 'data-fm-note': '' }, '只显示最近 40 条，共 ' + st.timeline.length + ' 条')
            : null)))
        return h('div', { 'data-fm-pane': '' }, ...项)
      })()

      /* ── 页签 2：绑定（会话模式按会话绑 / 工作区模式按工作区绑，二选一） ── */
      const 模式 = cfg.模式 === 'workspace' ? 'workspace' : 'session'
      const 工作区显示 = (name) => {
        const 命中 = (工作区们 || []).find((w) => w.name === name)
        return (命中 && (命中.path || 命中.name)) || String(name || '')
      }
      const 刷新工作区 = () => {
        getJson(API + '/workspaces').then((r) => set工作区们((r && r.workspaces) || [])).catch(() => {})
      }
      const 绑定页 = (() => {
        const 项 = []
        const 模式钮 = (id, 名) => h('button', {type: 'button',
          key: id,
          'data-fm-pick': '',
          'data-fm-on': 模式 === id ? '' : undefined,
          onClick: () => {
            if (模式 !== id) patch({ 模式: id }, '模式')
            if (id === 'workspace') 刷新工作区()
          },
        }, 名)
        项.push(h('div', { key: 'mode', 'data-fm-sec': '' },
          h('div', { 'data-fm-h': '' }, '按什么认这一份'),
          h('div', { 'data-fm-note': '' },
            '两种模式只能选一种，不能同时开。'
            + '会话模式：只有下面点名的会话用这一份。'
            + '工作区模式：整个工作区里的会话都用这一份 —— 新开的会话自动进来，共用这一份心情、一条时间线和每天的额度。'),
          h('div', { 'data-fm-row': '' },
            模式钮('session', '会话模式'),
            模式钮('workspace', '工作区模式'))))
        项.push(h('div', { key: 'h', 'data-fm-h': '' }, 模式 === 'workspace' ? '工作区绑定' : '会话绑定'))
        项.push(h('div', { key: 'note', 'data-fm-note': '' },
          模式 === 'workspace'
            ? '每一份填一个工作区：那个工作区下所有会话都归这一份，不用一个个加。切回会话模式时，原来绑的会话还在。'
            : '每一份心情可以绑好几个会话：绑在同一份上的会话共用这一份心情、一条时间线和每天的额度；不同份之间互不影响。'
              + '一个会话只会归一份，重复加进来的会被丢掉。'))
        份列表.forEach((sl, i) => {
          const 标题 = i === 0 ? '第一份' : ('第 ' + (i + 1) + ' 份')
          const 这块工作区 = (工作区们 || []).find((w) => w.name === (sl.工作区 || ''))
          // 会话模式：这一份绑的会话，能删能加
          const 会话块 = h('div', {},
            sl.sessions.length
              ? sl.sessions.map((sid) => h('div', { key: sid, 'data-fm-sess': '' },
                h('span', { 'data-fm-sessname': '', title: sid }, 会话名(sid)),
                h('button', {type: 'button',
                  'data-fm-btn': '', style: { padding: '2px 8px', fontSize: 'var(--fish-small)', flex: '0 0 auto' },
                  onClick: () => 改份(i, { sessions: sl.sessions.filter((x) => x !== sid) }),
                }, '删掉')))
              : h('div', { 'data-fm-note': '' }, '还没绑会话 —— 从下面加一个。'),
            h('div', { style: { marginTop: '6px' } },
              h('select', {'aria-label': '添加绑定会话',
                'data-fm-input': '', value: '',
                onChange: (e) => {
                  const v = e.target.value
                  if (v) 改份(i, { sessions: [...sl.sessions, v] })
                },
              },
                h('option', { value: '' }, '+ 加一个会话'),
                ((sessions || []).filter((x) => !已绑.has(x.id))).map((x) => h('option', { key: x.id, value: x.id }, x.title || x.id)))))
          // 工作区模式：这一份只填一个工作区（工作区里所有会话都归它）
          const 工作区块 = h('div', {},
            h('div', { 'data-fm-row': '' },
              h('select', {'aria-label': '绑定工作区',
                'data-fm-input': '', 'data-fm-grow': '', value: sl.工作区 || '',
                onChange: (e) => 改份(i, { 工作区: e.target.value }),
              },
                h('option', { value: '' }, '（还没选工作区）'),
                (工作区们 || []).map((w) => h('option', { key: w.name, value: w.name },
                  (w.path ? w.path + (w.title ? '（' + w.title + '）' : '') : w.name)
                  + ' · ' + (w.sessions || 0) + ' 个会话')),
                sl.工作区 && !(工作区们 || []).some((w) => w.name === sl.工作区)
                  ? h('option', { value: sl.工作区 }, sl.工作区 + '（不在清单里，可能是别的机器上的）')
                  : null),
              h('button', {type: 'button',  'data-fm-btn': '', onClick: 刷新工作区, style: { flex: '0 0 auto' } }, '刷新')),
            h('div', { 'data-fm-note': '' },
              sl.工作区
                ? (这块工作区
                  ? '这个工作区现在有 ' + (这块工作区.sessions || 0) + ' 个会话 —— 全部用这一份，新开的也会自动进来。'
                  : '清单里没有这个工作区（可能是别的机器上的目录名）—— 它下面新出现的会话照样归这一份。')
                : '选一个工作区；选好以后这个工作区里的会话都归这一份。'))
          项.push(h('div', { key: 'slot' + i, 'data-fm-slot': '' },
            h('div', { 'data-fm-row': '' },
              h('div', { 'data-fm-grow': '', style: { fontWeight: 600, fontSize: 'var(--fish-small)' } },
                标题 + (模式 === 'workspace'
                  ? (sl.工作区 ? ' · ' + 工作区显示(sl.工作区) : ' · 还没选工作区')
                  : (sl.sessions.length ? ' · ' + sl.sessions.length + ' 个会话' : ' · 还没绑会话'))),
              h('button', {type: 'button',
                'data-fm-btn': '', style: { padding: '2px 8px', fontSize: 'var(--fish-small)' },
                onClick: () => patch({ slots: 份列表.filter((_, j) => j !== i) }, '删掉这一份'),
              }, '删掉')),
            h('div', { 'data-fm-row': '' },
              h('div', { 'data-fm-grow': '' },
                h('div', { 'data-fm-label': '', style: { fontSize: 'var(--fish-small)' } },
                  '这份叫什么（只是用来区分，不是称呼）')),
              h('input', {'aria-label': '心情名称',
                'data-fm-input': '', value: sl.label || '', placeholder: '比如：这份叫大肥鱼，那份叫修路的',
                onChange: (e) => {
                  const v = e.target.value
                  setCfg((c) => ({ ...c, slots: 份列表.map((x, j) => (j === i ? { ...x, label: v } : x)) }))
                },
                onBlur: () => patch({ slots: 份列表 }, '名字'),
              })),
            模式 === 'workspace' ? 工作区块 : 会话块))
        })
        项.push(份列表.length < 6
          ? h('div', { key: 'add', 'data-fm-row': '' },
            h('button', {type: 'button',
              'data-fm-btn': '',
              onClick: () => patch({ slots: [...份列表, { id: '', label: '', selfName: '', ownerName: '', 工作区: '', sessions: [] }] }, '再加一份心情'),
            }, '+ 再加一份心情'))
          : h('div', { key: 'max', 'data-fm-note': '' }, '最多 6 份。'))
        项.push(h('div', { key: 'tip', 'data-fm-note': '' },
          模式 === 'workspace'
            ? '工作区下拉里，能反查到路径的显示路径，查不到的显示目录名 —— 两种都能选。'
            : '下拉里是真会话（跳过归档和空会话）；同一个会话重复加是加不进去的。换会话、加会话都不用重启。'))
        return h('div', { 'data-fm-pane': '' }, ...项)
      })()

      /* ── 页签 3：判断与注入（称呼 / 模型 / 开关 / 数值） ── */
      const 判断页 = (() => {
        const 项 = []
        项.push(h('div', { key: 'names', 'data-fm-sec': '' },
          h('div', { 'data-fm-h': '' }, '称呼'),
          h('div', { 'data-fm-note': '' }, '这两个名字会写进判断提示词；换了名字，心情描述里也跟着换。'),
          h('div', { 'data-fm-row': '' },
            h('div', { 'data-fm-grow': '' }, h('div', { 'data-fm-label': '' }, 'TA 叫什么（被关心的那个人）')),
            h('input', {'aria-label': '对方的称呼',
              'data-fm-input': '', value: cfg.ownerName || '',
              placeholder: '用户',
              onChange: (e) => setCfg((c) => ({ ...c, ownerName: e.target.value })),
              onBlur: () => patch({ ownerName: cfg.ownerName }, '称呼'),
            })),
          h('div', { 'data-fm-row': '' },
            h('div', { 'data-fm-grow': '' }, h('div', { 'data-fm-label': '' }, 'TA 自己叫什么（有心情的那个人）')),
            h('input', {'aria-label': '伙伴的称呼',
              'data-fm-input': '', value: cfg.selfName || '',
              placeholder: '伙伴',
              onChange: (e) => setCfg((c) => ({ ...c, selfName: e.target.value })),
              onBlur: () => patch({ selfName: cfg.selfName }, '称呼'),
            })),
          h('div', { 'data-fm-row': '' },
            h('div', { 'data-fm-grow': '' },
              h('div', { 'data-fm-label': '' }, 'TA 平时怎么叫你（昵称）'),
              h('div', { 'data-fm-note': '' }, '逗号分隔，写成 TA 平时怎么喊你，比如：小鱼,宝贝,亲爱的。判断时会把这些词当成「在叫你」，不会把「宝宝视频」当成一个东西')),
            h('input', {'aria-label': '伙伴的昵称',
              'data-fm-input': '', value: cfg.selfAliases || '',
              placeholder: '小鱼,宝贝,亲爱的',
              onChange: (e) => setCfg((c) => ({ ...c, selfAliases: e.target.value })),
              onBlur: () => patch({ selfAliases: cfg.selfAliases }, '昵称'),
            })),
          // ⭐ 它自己怎么自称：写进 reason 的那个「我」
          h('div', { 'data-fm-row': '' },
            h('div', { 'data-fm-grow': '' },
              h('div', { 'data-fm-label': '' }, 'TA 自称什么'),
              h('div', { 'data-fm-note': '' }, '心情描述里它管自己叫什么。默认「我」；跑角色设定重的模型、它平时说「本小姐」「在下」，就填进去')),
            h('input', {'aria-label': '伙伴的自称',
              'data-fm-input': '', value: cfg.selfPronoun || '我',
              placeholder: '我',
              onChange: (e) => setCfg((c) => ({ ...c, selfPronoun: e.target.value })),
              onBlur: () => patch({ selfPronoun: cfg.selfPronoun }, '自称'),
            }))))
        项.push(h('div', { key: 'model', 'data-fm-sec': '' },
          h('div', { 'data-fm-h': '' }, '判断用哪个模型'),
          h('div', { 'data-fm-note': '' }, '心情判断是一次很短的小调用。想更准就指到更强的模型，想省钱就指到便宜的；留空 = 跟着当前会话的模型走。'),
          h('div', { 'data-fm-row': '' },
            h('div', { 'data-fm-grow': '' }, h('div', { 'data-fm-label': '' }, '模型提供方')),
            h('select', {'aria-label': '模型提供方',
              'data-fm-input': '', value: cfg.judgeProvider || '',
              onChange: (e) => {
                const v = e.target.value
                const list = ((models || []).find((p) => p.id === v)?.models) || []
                const nextModel = v ? (list[0]?.id || '') : ''
                setCfg((c) => ({ ...c, judgeProvider: v, judgeModel: nextModel }))
                patch({ judgeProvider: v, judgeModel: nextModel }, '判断模型')
              },
            },
              h('option', { value: '' }, '（跟着会话走）'),
              (models || []).map((p) => h('option', { key: p.id, value: p.id }, p.name || p.id)),
              cfg.judgeProvider && !(models || []).some((p) => p.id === cfg.judgeProvider)
                ? h('option', { value: cfg.judgeProvider }, cfg.judgeProvider)
                : null)),
          h('div', { 'data-fm-row': '' },
            h('div', { 'data-fm-grow': '' }, h('div', { 'data-fm-label': '' }, '模型型号')),
            h('select', {'aria-label': '模型型号',
              'data-fm-input': '', value: cfg.judgeModel || '', disabled: !cfg.judgeProvider,
              onChange: (e) => { const v = e.target.value; setCfg((c) => ({ ...c, judgeModel: v })); patch({ judgeModel: v }, '判断模型') },
            },
              h('option', { value: '' }, '（默认）'),
              (((models || []).find((p) => p.id === cfg.judgeProvider) || {}).models || [])
                .map((m) => h('option', { key: m.id, value: m.id }, m.name || m.id)),
              cfg.judgeModel && !((((models || []).find((p) => p.id === cfg.judgeProvider) || {}).models) || []).some((m) => m.id === cfg.judgeModel)
                ? h('option', { value: cfg.judgeModel }, cfg.judgeModel)
                : null))))
        项.push(h('div', { key: 'switch', 'data-fm-sec': '' },
          h('div', { 'data-fm-h': '' }, '开关'),
          h('div', { 'data-fm-row': '' },
            h('div', { 'data-fm-grow': '' },
              h('div', { 'data-fm-label': '' }, '每轮判断心情'),
              h('div', { 'data-fm-note': '' }, '关掉就完全不判断、不改数值（也不花判断的 token）')),
            sw('autoJudge', '每轮判断')),
          h('div', { 'data-fm-row': '' },
            h('div', { 'data-fm-grow': '' },
              h('div', { 'data-fm-label': '' }, '心情怎么告诉它'),
              h('div', { 'data-fm-note': '' }, '影响它说话口气的唯一开关。选「说心情和那件事」时，它看到的是两行：第一行是这一刻的心情底子，第二行是这段时间发生了什么 —— 底子会真的影响它怎么说话，那件事只是来历。')),
            h('select', {'aria-label': '心情注入方式',
              'data-fm-input': '', value: cfg.injectMode || 'event',
              onChange: (e) => patch({ injectMode: e.target.value }, '心情怎么告诉它'),
            },
              h('option', { value: 'off' }, '不告诉它（只记录，不影响）'),
              h('option', { value: 'label' }, '只说心情，不说为什么'),
              h('option', { value: 'event' }, '说心情 + 那件事（推荐）'))),
          h('div', { 'data-fm-note': '' }, '同一次变化只说一次 —— 说完就留在对话记录里，下次不再重复，不会变成反复出现的背景音。'),
          numInput('injectConfidence', '可信度门槛', '判断模型自己对这次判断有多确定；低于这个数就只记进后台、不进它的嘴（0–100，默认 60）。调高更保守，调低更爱说。', 0, 100)))
        项.push(h('div', { key: 'num', 'data-fm-sec': '' },
          h('div', { 'data-fm-h': '' }, '心情怎么变'),
          numInput('moodBase', '基线心情', '没事的时候，心情会慢慢回到这个数（30–100）', 30, 100),
          numInput('moodFloor', '心情下限', '最低能掉到多少；0 = 不设底线（0–100）', 0, 100),
          numInput('decayHalfHours', '多久平复一半', '受一次影响之后，心里多久淡掉一半（小时）。大 = 隔夜还留着余温，小 = 情绪来得快去得也快', 1, 168),
          h('div', { 'data-fm-note': '' }, '下面两个数决定"什么才算一次值得告诉它的变化"。够不着就只记账（面板里看得到，不影响它说话）。调小 = 它更敏感，调大 = 它只在真动心的时候才变。'),
          numInput('sigMood', '心情变这么多才算', '判定给的涨跌够这个数就算一次「真有事」（1–30，默认 3）。注意： 心情值本身每轮只吃 1/3，所以这里比的是判定原始值', 1, 30),
          numInput('sigDim', '或者某根情绪变这么多', '开心/心疼/担心……任意一根涨跌够这个数也算（1–100，默认 5）。心疼+5、担心+5 这种「突然一下」才触发', 1, 100),
          numInput('injectPerDay', '每天最多说几次',
            '这一份今天已经说过 ' + String((st && st.saidToday) || 0) + ' 次（同一份的几个会话合起来算）。到上限就只记账、不再打扰它，明天重新算。填 0 = 一次都不说（只看面板）', 0, 50)))
        return h('div', { 'data-fm-pane': '' }, ...项)
      })()

      /* ── 页签 4：挂饰（说明；挂饰本身没有开关） ── */
      const 挂饰页 = h('div', { 'data-fm-pane': '' },
        h('div', { 'data-fm-sec': '' },
          h('div', { 'data-fm-h': '' }, '右下角的挂饰'),
          h('div', { 'data-fm-note': '' },
            '桌面上右下角那个小挂饰，点一下就能看心情和记录；按住可以拖着换位置。'),
          h('div', { 'data-fm-note': '' },
            '面板右上角的钮只管切换形态（大图 ↔ 小圆）：缩成小圆以后照样能拖，点一下照样打开记录。这些状态记在浏览器本地，每台机器各记各的。'),
          h('div', { 'data-fm-note': '' },
            '挂饰显示的是「最近在聊的那一份」—— 在哪个绑定的会话里说话，它就跟着显示那一份；想换着看，去「心情」页切换。'),
          h('div', { 'data-fm-note': '' },
            '没看到它？刷新一下页面就出来了。')),
        h('div', { 'data-fm-sec': '' },
          h('div', { 'data-fm-h': '' }, '五档表情'),
          h('div', { 'data-fm-faces': '' },
            [['great', '≥ 80 欢喜'], ['good', '62–79 开心'], ['ok', '42–61 一般'], ['worry', '25–41 心疼'], ['sad', '< 25 难过']]
              .map(([f, t]) => h('div', { key: f, style: { textAlign: 'center' } },
                h('img', { src: API + '/face-' + f + '.png', alt: '' }),
                h('div', { 'data-fm-note': '' }, t))))))

      return h('div', { 'data-fm-wrap': '' },
        onPageChange ? null : h('div', { 'data-fm-tabs': '', role: 'tablist', 'aria-label': '心情页面' },
          页签.map(([id, 名]) => h('button', {type: 'button',
            key: id, role: 'tab', 'aria-selected': 页 === id, tabIndex: 页 === id ? 0 : -1, onKeyDown: e => { const i = 页签.findIndex(item => item[0] === id); const next = e.key === 'ArrowRight' ? (i + 1) % 页签.length : e.key === 'ArrowLeft' ? (i + 页签.length - 1) % 页签.length : e.key === 'Home' ? 0 : e.key === 'End' ? 页签.length - 1 : null; if (next !== null) { e.preventDefault(); set页(页签[next][0]); e.currentTarget.parentElement.querySelectorAll('[role=tab]')[next].focus() } }, 'data-fm-tab': '', 'data-fm-on': 页 === id ? '' : undefined,
            onClick: () => set页(id),
          }, 名))),
        页 === 'mood' ? 心情页 : null,
        页 === 'bind' ? 绑定页 : null,
        页 === 'judge' ? 判断页 : null,
        页 === 'charm' ? 挂饰页 : null,
      )
    }

    return { Section: function MoodSection(props) { return h('div', null, h('style', null, CSS), h(Panel, props)) } }
  },
})

// DSH「主动搭话」· 网页半边
//
// 只干一件事：在 **DSH 设置** 左侧栏加一项「主动搭话」，
// 把那 7 组设置全摆出来，外加两个安全的试法（演练 / 真发一次）和一份最近掷骰记录。
//
// 注意：这里**不碰会话、不发消息**，只是往宿主那几条 /dsh-speak-up/* 路由上读写。
//   真正的掷骰和 followup 都在宿主半边（lib/host.js），这样只有一份逻辑。
//
// 注意：槽位名 'settings.section' 跟 dsh-write / dsh-fish-memory 用的是同一个，
//   是在这个环境里已经跑通的路子（不确定换 DSH 版本会不会变，见 README）。

moduleLoader.load({
  id: 'dsh-speak-up',
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports

    const React = require('react')
    const inject = ['slots']

    const B = '/dsh-speak-up'
    const get = (p) => fetch(B + p, { cache: 'no-store' }).then((r) => r.json()).catch(() => null)
    const post = (p, body) =>
      fetch(B + p, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body || {}),
      })
        .then((r) => r.json())
        .catch(() => null)

    const h = React.createElement

    // 样式贴着主题变量走，换皮肤/换深浅色都跟着变（照 dsh-write 的做法）
    const S = {
      wrap: { padding: '0 0 24px', fontSize: 'var(--fish-body)', lineHeight: 1.75, minWidth: 0 },
      h: { fontFamily: 'var(--fish-title)', fontSize: 20, fontWeight: 700, margin: '0 0 16px', lineHeight: 1.5 },
      dim: { color: 'var(--fish-muted)', fontSize: 'var(--fish-small)' },
      card: { border: '1px solid var(--fish-border)', borderRadius: 'var(--fish-radius)', padding: '24px', marginBottom: 8, minWidth: 0, background: 'var(--fish-panel)', boxShadow: 'var(--fish-shadow)' },
      row: { display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap' },
      lab: { flex: '0 1 200px', paddingTop: 8, fontSize: 'var(--fish-label)', fontWeight: 550 },
      ctl: { flex: '1 1 260px', minWidth: 0 },
      hint: { color: 'var(--fish-muted)', fontSize: 'var(--fish-small)', marginTop: 8, lineHeight: 1.75 },
      input: { border: '1px solid var(--fish-control-border)', borderRadius: 'var(--fish-radius-sm)', padding: '8px 12px', background: 'var(--fish-surface)', color: 'var(--fish-text)', fontSize: 'var(--fish-label)', width: '100%', maxWidth: '100%', boxSizing: 'border-box' },
      small: { border: '1px solid var(--fish-control-border)', borderRadius: 'var(--fish-radius-sm)', padding: '8px 12px', background: 'var(--fish-surface)', color: 'var(--fish-text)', fontSize: 'var(--fish-label)', width: 136, maxWidth: '100%', boxSizing: 'border-box' },
      wide: { border: '1px solid var(--fish-control-border)', borderRadius: 'var(--fish-radius-sm)', padding: '8px 12px', background: 'var(--fish-surface)', color: 'var(--fish-text)', fontSize: 'var(--fish-label)', width: '100%', boxSizing: 'border-box' },
      ta: { border: '1px solid var(--fish-control-border)', borderRadius: 'var(--fish-radius-sm)', padding: '12px', background: 'var(--fish-surface)', color: 'var(--fish-text)', fontSize: 'var(--fish-body)', width: '100%', minHeight: 112, boxSizing: 'border-box', lineHeight: 1.75, fontFamily: 'inherit', resize: 'vertical' },
      ok: { color: 'var(--fish-success)', fontSize: 'var(--fish-small)' },
      warn: { color: 'var(--fish-warning)', border: '1px solid var(--fish-border)', background: 'var(--fish-soft)', borderRadius: 'var(--fish-radius-sm)', padding: 16, marginBottom: 16 },
      已同步: { margin: '8px 0 20px', fontSize: 'var(--fish-small)', color: 'var(--fish-success)' },
      未保存: { margin: '8px 0 20px', fontSize: 'var(--fish-small)', color: 'var(--fish-warning)', fontWeight: 550 },
      btn: { border: '1px solid var(--fish-border)', borderRadius: 'var(--fish-radius-sm)', padding: '8px 16px', background: 'var(--fish-control-fill)', color: 'var(--fish-text)', fontSize: 'var(--fish-label)', cursor: 'pointer' },
      btnOn: { border: '1px solid var(--fish-action)', borderRadius: 'var(--fish-radius-sm)', padding: '8px 16px', background: 'var(--fish-action)', color: 'var(--fish-on-accent)', fontSize: 'var(--fish-label)', cursor: 'pointer' },
      tabBar: { display: 'flex', gap: 8, overflowX: 'auto', margin: '16px 0 24px', paddingBottom: 16, borderBottom: '1px solid var(--fish-border)' },
      stack: { display: 'grid', gap: 20 },
      grid: { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 20, alignItems: 'start' },
      group: { borderTop: '1px solid var(--fish-border)', padding: '20px 0' },
      summary: { fontWeight: 600, fontSize: 16, cursor: 'pointer', padding: '8px 0 16px' },
      日志行: { fontFamily: 'ui-monospace, Consolas, monospace', fontSize: 'var(--fish-small)', whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', padding: '8px 0', borderBottom: '1px solid var(--fish-line)' },
      表头: {}, 表格行: {}, 空间表头: {}, 空间行: {},
      表头字: { fontSize: 'var(--fish-small)', color: 'var(--fish-muted)' },
      已勾: { border: '1px solid var(--fish-border)', background: 'var(--fish-soft)', borderRadius: 'var(--fish-radius-sm)', padding: '12px 16px', fontSize: 'var(--fish-small)' },
      清单: { border: '1px solid var(--fish-border)', borderRadius: 'var(--fish-radius-sm)', marginTop: 12, maxHeight: 320, overflowY: 'auto' },
      会话行: { display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', padding: '12px 16px', cursor: 'pointer', borderBottom: '1px solid var(--fish-line)' },
      会话行勾上: { background: 'var(--fish-accent-soft)', fontWeight: 550 },
      tag: { display: 'inline-block', border: '1px solid var(--fish-border)', borderRadius: 20, padding: '2px 8px', fontSize: 'var(--fish-small)', marginRight: 8 }
    }

    // ---------- 小控件 ----------

    const 提示 = (文本) => h('div', { style: S.hint }, 文本)
    const 行 = (标签, 控件, 说明) =>
      h(
        'div',
        { className: 'fish-form-row', style: S.row },
        h('div', { className: 'fish-form-label', style: S.lab }, 标签),
        h('div', { className: 'fish-control', style: S.ctl }, (['input', 'select', 'textarea'].includes(控件?.type) ? React.cloneElement(控件, { 'aria-label': 标签 }) : 控件), 说明 ? 提示(说明) : null),
      )
    const 按钮 = (文字, onClick, 亮, 关) =>
      h(
        'button',
        { type: 'button', className: 亮 ? 'fish-primary' : '', style: 亮 ? S.btnOn : S.btn, onClick, disabled: !!关, title: 文字 },
        文字,
      )
    const 勾 = (值, onChange) =>
      h('input', {'aria-label': '设置值',  type: 'checkbox', role: 'switch', checked: !!值, onChange: (e) => onChange(e.target.checked) })
    const 数 = (值, onChange, 步) =>
      h('input', {'aria-label': '设置值',
        type: 'number',
        value: 值 === undefined || 值 === null ? '' : 值,
        step: 步 || 1,
        style: S.small,
        onChange: (e) => onChange(e.target.value),
      })
    /** 会话 id 的后 8 位 —— 前面那截（session- 和 uuid 开头）全都一样，只有尾巴分得出谁是谁。 */
    const 短id = (id) => {
      const s = String(id)
      return s.length <= 8 ? s : s.slice(-8)
    }

    /** 标题拿不到就明说「（还没起名）」，**绝不留空白**（空白会让人以为坏了）。 */
    const 题 = (s) => (s && typeof s.标题 === 'string' && s.标题.trim() !== '' ? s.标题 : '（还没起名）')

    /** 逗号/空格/顿号都能当分隔（照抄老版输入框的行为）。 */
    const 拆id = (文) => String(文 || '').split(/[\s,;，、]+/).filter((x) => x !== '')

    // ---------- 设置页 ----------

    function Section({ guard, notify } = {}) {
      const [态, 设态] = React.useState(null)
      const 告知 = (text, options) => { if (typeof notify === 'function') notify(text, options) }
      const [忙, 设忙] = React.useState(false)
      // 次要路径（手填 id）的草稿：null = 没动过，直接显示配置里那份
      const [手填, 设手填] = React.useState(null)
      // 「改了但还没按保存」——填了不按保存等于没填，这个标志就是让这件事写在脸上
      const [脏, 设脏] = React.useState(false)
      const [同步话, 设同步话] = React.useState('')
      const saveRef = React.useRef(null)

      React.useEffect(() => {
        if (!guard) return
        guard.current = { dirty: 脏, save: () => saveRef.current?.() }
        return () => { if (guard) guard.current = { dirty: false, save: null } }
      }, [脏, guard])

      const 拉 = React.useCallback(
        () => get('/state').then((r) => { if (r && r.ok) 设态(r); else 告知('读不到宿主那边的状态（插件加载了吗？）', { holdMs: 6000 }) }),
        [],
      )

      React.useEffect(() => { 拉() }, [拉])

      if (!态 || !态.配置) {
        return h('div', { className: 'fish-module fish-speak', style: S.wrap }, h('div', { className: 'fish-section-title', style: S.h }, '主动搭话'), h('div', { style: S.dim }, '读取中…'))
      }

      const 配置 = 态.配置
      /** 改「要点保存」的字段（数字/文案/开关）→ 置脏。 */

      const 改 = (k, v) => {
        设态((旧) => ({ ...旧, 配置: { ...旧.配置, [k]: v } }))
        设脏(true)
      }

      /** 勾上的会话列表（组件里以本地状态为准，不等刷新，点一下立刻变色）。 */
      const 目标们 = Array.isArray(配置.目标会话) ? 配置.目标会话 : []
      // ⭐ 2026-10-23：会话 id 有两种写法（`xxx` / `session-xxx`）。host 那边现在统一存带前缀的，
      //    这里比较也要先洗一遍 —— 否则会出现「面板说已勾 1 个，框却是空的 / 点一下变 2 / 取消不掉」。
      const 会话键 = (v) => {
        const s = String(v == null ? '' : v).trim()
        return s.startsWith('session-') ? s.slice('session-'.length) : s
      }
      const 已勾 = (id) => 目标们.map(会话键).indexOf(会话键(id)) >= 0

      /**
       * 勾上/取消 → **立刻自动保存**（她原话：「有打勾不就完了嘛」）。
       * 注意：这是踩过坑改的：最早那版是「填进输入框 → 再按下面的『保存设置』」，
       *   结果她填了没按保存（按钮在另一张卡片里、页面上也没有任何"还没保存"的提示），
       *   host 一直报「还没配目标会话」。勾选这类核心设置就该点一下就落盘。
       * 注意：自动存只把「目标会话」这一个补丁发上去（host 的 /save 是合并语义），
       *   所以不会覆盖她在别的字段里还没保存的改动。
       */
      const 切换 = (id, 勾上) => {
        const 键 = 会话键(id)
        const 下一个 = 勾上
          ? (目标们.map(会话键).indexOf(键) >= 0 ? 目标们 : [...目标们, String(id)])
          : 目标们.filter((x) => 会话键(x) !== 键)
        设态((旧) => ({ ...旧, 配置: { ...旧.配置, 目标会话: 下一个 } }))
        自动存({ 目标会话: 下一个 })
      }

      const 自动存 = async (补丁) => {
        设同步话('保存中…')
        const r = await post('/save', 补丁)
        if (r && r.ok) {
          // 注意：只把「服务端算出来的东西」刷回来，**不整体替换 配置** ——
          //   否则她在别的字段里还没保存的改动会被这次自动保存悄悄抹掉。
          设态((旧) => ({
            ...旧,
            日志: r.日志,
            目标情况: r.目标情况,
            目标活着: r.目标活着,
            活着的会话: r.活着的会话,
          }))
          设同步话('已保存')
        } else {
          设同步话('保存失败 ✗')
        }
      }

      const 存 = async () => {
        设忙(true)
        // 手填框里还有没提交的草稿 → 存的时候一起带上
        const 要存 = 手填 === null ? 配置 : { ...配置, 目标会话: 拆id(手填) }
        const r = await post('/save', 要存)
        if (r && r.ok) {
          设态(r)
          设手填(null)
          设脏(false)
          设同步话('已保存')
          告知(r.说 || '保存好了', { tone: 'success' })
          设忙(false)
          return true
        }
        告知((r && r.说) || '保存失败', { holdMs: 6000 })
        设同步话('保存失败 ✗')
        设忙(false)
        return false
      }
      saveRef.current = 存

      const 掷 = async (模式) => {
        设忙(true)
        const r = await post('/roll', { 模式 })
        if (r && r.ok) 设态((旧) => ({ ...旧, 日志: r.日志 }))
        告知((r && r.说) || '跑完了')
        设忙(false)
      }

      const 新建小屋 = async () => {
        if (!window.confirm('新建一个空会话，并自动勾上它？（会在你的会话列表里多出一条）')) return
        设忙(true)
        const r = await post('/new-session', { 设为目标: true })
        if (r && (r.ok || r.新会话)) {
          // 同样只刷服务端那份，别把她在别的字段里还没保存的改动抹掉
          设态((旧) => ({
            ...旧,
            配置: { ...旧.配置, 目标会话: r.配置 ? r.配置.目标会话 : 旧.配置.目标会话 },
            日志: r.日志,
            目标情况: r.目标情况,
            目标活着: r.目标活着,
            活着的会话: r.活着的会话,
          }))
        }
        告知((r && r.说) || '做完了')
        设忙(false)
      }

      const 会话们 = Array.isArray(态.活着的会话) ? 态.活着的会话 : []
      const 日志 = Array.isArray(态.日志) ? 态.日志 : []
      const 目标情况 = Array.isArray(态.目标情况) ? 态.目标情况 : []
      const 目标活着数 = 目标情况.filter((x) => x.活着).length
      const 手填文本 = 手填 === null ? 目标们.join(', ') : 手填

      /** 清单里的一行：`☐ 标题 · …后8位 · 状态`，整行点一下就勾/取消（勾选立刻自动保存）。 */
      const 会话行 = (s) =>
        h(
          'label',
          {
            key: s.id,
            style: { ...S.会话行, ...(已勾(s.id) ? S.会话行勾上 : null) },
            title:
              String(s.id) +
              (s.标题来源 ? '｜标题来源：' + String(s.标题来源) : '') +
              (s.有agent ? '' : '（这个会话现在没有活着的 agent，掷中时会跳过它）') +
              (s.归档 ? '（注意：这个会话已经归档了，建议取消勾选）' : ''),
          },
          h('input', {'aria-label': 题(s),
            type: 'checkbox',
            checked: 已勾(s.id),
            onChange: (e) => 切换(s.id, e.target.checked),
          }),
          h(
            'span',
            { style: { marginLeft: 8, ...(s.有agent ? null : S.dim) } },
            题(s),
          ),
          h('span', { style: { ...S.dim, marginLeft: 8, whiteSpace: 'nowrap' } }, '…' + 短id(s.id) + ' · ' + String(s.状态 || '?')),
        )

      return h(
        'div',
        { className: 'fish-module fish-speak', style: S.wrap },

        h('div', { className: 'fish-section-title', style: S.h }, '主动搭话'),
        h(
          'div',
          { style: S.dim },
          '没人在跟她说话的时候，她也有可能先开口：按下面的间隔掷一次骰子（纯本地随机，不花模型），' +
            '掷中了才往「目标会话」里送一句话，让 DSH 自己开一轮（人格、历史、工具、记忆都是她自己的）。',
        ),

        // 注意：「填了不按保存等于没填」这件事必须写在脸上（踩过坑：她在输入框里填了 id
        //   却没按保存，host 一直报「还没配目标会话」，而她不知道差在哪一步）
        h('div', { className: 'fish-toolbar' },
          h('span', { style: { ...(脏 ? S.未保存 : S.已同步), flex: '1 1 220px', margin: 0 } },
            (脏 ? '有未保存的改动，请保存设置' : '设置' + (同步话 || '已同步')) +
              '（勾选会话不用点保存，点一下立刻生效）'),
          按钮('保存设置', 存, true, 忙)),

        // —— 总开关 + 试运行 ——
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '开关'),
          行('总开关', 勾(配置.总开关, (v) => 改('总开关', v)), '关掉就完全不动（定时器还在，但什么都不做）。'),
          行(
            '试运行（默认开）',
            勾(配置.试运行, (v) => 改('试运行', v)),
            '开着的时候：掷中了也只写一条记录，不真的发。先看几轮记录，确认时机合适了再关掉它。',
          ),
        ),

        // —— 骰子 ——
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '触发频率与安静时段'),
          h('div', { style: S.dim },
            '每轮掷一个 0~100 的数，比命中线小就开口。命中线 =（峰时或谷时的那格命中线）× 时机因子，再加上攒下来的没中加成。'),
          行('掷骰子间隔（分钟）', 数(配置.间隔分钟, (v) => 改('间隔分钟', v)), '默认 30。范围 1~1440；改完保存，下一轮就按新间隔走（不用重启）。'),
          行(
            '搭话冷却（分钟）',
            数(配置.搭话冷却分钟, (v) => 改('搭话冷却分钟', v)),
            '她真的说了话之后，这么多分钟内不再开口（默认 20）。' +
              '只是把一句念头投进去、她看完没开口，**不算**开过口、不吃冷却。0 = 不冷却（刚开口过也照投）。' +
              '手动按钮不受它限制。',
          ),
          行(
            '没中加成（百分点）',
            数(配置.没中加成, (v) => 改('没中加成', v)),
            '每没掷中一次，下一次命中线加这么多（默认 10）。填 0 = 关掉这个功能（一分都不加）。',
          ),
          行(
            '加成上限（百分点）',
            数(配置.加成上限, (v) => 改('加成上限', v)),
            '加成最多加到这么多（默认 40）。',
          ),
          h('div', { style: S.dim },
            '掷中（含试运行掷中）就清零，从头开始；连着没中就一次一次往上加，加到上限为止。',
          ),
          h('div', { style: { ...S.dim, marginTop: 2 } },
            '这两格只影响自动的定时掷骰；手动按钮（演练/真发）不掷骰子，也不动这个计数器。',
          ),
          h('div', { style: { ...S.dim, marginTop: 2 } },
            '注意：「连着没中」这个数只记在内存里：DSH 一重启就回到 0。',
          ),
          行(
            '安静时段（起 / 止，小时）',
            h('div', null, 数(配置.安静起, (v) => 改('安静起', v)), h('span', { style: S.dim }, ' 点 ~ '), 数(配置.安静止, (v) => 改('安静止', v)), h('span', { style: S.dim }, ' 点')),
            '默认 1 ~ 8 点不掷（含 1 点、不含 8 点）。跨午夜也行（比如 23 ~ 7）。',
          ),
          // 注意：这条她特意提过两次，所以从上面那句里拎出来单独成一行、用红字（不新造颜色，复用 S.未保存）
          h('div', { style: S.未保存 }, '注意：两个数字填成一样（比如 8 和 8）= 不启用安静时段：整天都可能掷骰子'),
        ),

        // —— 时机因子 ——
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '时机因子（刚聊过就少开口，冷太久了就多开口）'),
          行(
            '近：刚聊过 → 命中线 ×0.15',
            h('div', null, 数(配置.近阈值分钟, (v) => 改('近阈值分钟', v)), h('span', { style: S.dim }, ' 分钟内 → ×'), 数(配置.近因子, (v) => 改('近因子', v), 0.05)),
            '距她上次说话不到这个分钟数 → 命中线乘这个因子（更难开口）。默认 20 分钟 ×0.15。',
          ),
          行(
            '远：冷太久 → 命中线 ×1.5',
            h('div', null, 数(配置.远阈值分钟, (v) => 改('远阈值分钟', v)), h('span', { style: S.dim }, ' 分钟以上 → ×'), 数(配置.远因子, (v) => 改('远因子', v), 0.1)),
            '超过这个分钟数没说话 → 命中线乘这个因子（更容易开口）。默认 360 分钟（6 小时）×1.5。',
          ),
          h('div', { style: S.dim }, '中间那一段：命中线 ×1（既不加也不减）。最后会夹在 0~100。'),
        ),

        // —— 峰谷分时（贵的时候少开口，便宜的时候多开口）——
        // 注意：时段是**写死的**（不给格子填），这里只有两个命中线数字 —— 她的要求。
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '峰谷分时（贵的时候少开口，便宜的时候多开口）'),
          h('div', { style: S.dim }, '时段是固定的，不用你填；只有这两个数字要你定：'),
          行(
            '峰时命中线（%）',
            数(配置.峰时命中线, (v) => 改('峰时命中线', v)),
            '每轮掷一个 0~100 的数，掷到命中线以下才开口；掷在上面就不开。' +
              '这是峰时的基础命中线（峰时 = 周一~周五 9:00~12:00、14:00~18:00，贵）。默认 20 —— 贵的时候少开口。',
          ),
          行(
            '谷时命中线（%）',
            数(配置.谷时命中线, (v) => 改('谷时命中线', v)),
            '这是谷时的基础命中线（其余全是谷时：午休 12:00~14:00、18:00 到次日 9:00、周六周日全天，便宜）。默认 60。',
          ),
          行(
            '按哪个时区算峰谷',
            h('input', {'aria-label': '峰谷时区',
              style: S.small,
              placeholder: '留空 = 本机时区；北京填 Asia/Shanghai',
              value: String(配置.峰谷时区 || ''),
              onChange: (e) => 改('峰谷时区', e.target.value),
            }),
            '峰谷是**北京时间**算的。机器不在东八区时，这里填 Asia/Shanghai，峰谷就不会按你的本地时间错判。' +
              '写成别的 IANA 名字也行（比如 Europe/Berlin）；写得不对会当没填。',
          ),
          h('div', { style: { ...S.dim, marginTop: 4 } },
            '最终命中线 = 这格（看是峰时还是谷时）× 时机因子 + 攒下来的没中加成（最后夹在 0~100）。',
          ),
          h('div', { style: S.未保存 }, '注意：两个数字填成一样 = 不分峰谷，全天一个命中线'),
          h('div', { style: S.未保存 },
            '注意：注意：安静时段会盖住谷时 —— 你现在安静时段是 ' +
              String(配置.安静起) + '~' + String(配置.安静止) +
              ' 点，那段时间根本不掷，谷时命中线再高也用不上。',
          ),
        ),

        // —— 目标会话（勾选清单；手填只是次要路径）——
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '目标会话'),
          h('div', { style: S.dim }, '勾了谁，她就会在谁的会话里自己开口。勾几个都行；一次掷中只在其中一个里开口（随机挑一个活着、又不忙的）。'),
          h('div', { style: { ...S.dim, marginTop: 2, fontWeight: 600 } }, '勾选/取消一点就生效（自动保存，不用再按保存）'),
          h('div', { style: { marginTop: 4 } },
            目标们.length
              ? h('div', { style: S.已勾 },
                  '已勾 ' + 目标们.length + ' 个' +
                    (目标情况.length
                      ? '：' + 目标情况.map((x) => (x.标题 ? x.标题 : '…' + 短id(x.id)) + (x.活着 ? '' : '（现在没活着）')).join('、')
                      : '') +
                    (目标情况.length ? '。其中 ' + 目标活着数 + ' 个现在活着' + (目标活着数 === 0 ? ' —— 掷中也会跳过，先把它打开' : '') : ''),
                )
              : h('div', { style: { ...S.dim, color: 'var(--fish-danger)' } }, '现在一个都没勾 —— 掷中了也不会开口。'),
          ),

          会话们.length
            ? h('div', { style: { marginTop: 8 } },
                h('div', { style: S.dim }, '现在开着的会话（点一下 = 勾上/取消，立刻生效）：'),
                h('div', { style: S.清单 }, 会话们.map(会话行)),
                h('div', { style: { ...S.dim, marginTop: 4 } },
                  '已归档的会话不再列出来（它们掷中也会被 DSH 拦掉）；' +
                    '只有你已经勾着的归档会话还会显示，带「注意：已归档」——看到就取消勾选。' +
                    '没起名字的会话显示「（还没起名）」+ 短 id，照样能勾；' +
                    '标着「没活着」的是现在没打开的会话，勾上也没用（掷中会跳过它）。',
                ),
              )
            : h('div', { style: { ...S.dim, marginTop: 8 } }, '现在没有开着的会话（在 DSH 里打开一个再回来点「刷新清单」）。'),

          h('div', { className: 'fish-actions' },
            按钮('刷新清单', 拉, false, 忙),
            按钮('新建并选中会话', 新建小屋, false, 忙),
          ),

          // 次要路径：手填 / 粘贴 id（她要求「不再是主路径」，但留着）
          h('div', { style: { marginTop: 10, borderTop: '1px solid var(--dsw-alias-border-l2)', paddingTop: 8 } },
            h('div', { style: S.dim }, '也可以直接手填 / 粘贴会话 id（逗号分隔）—— 手填的必须点保存才生效：'),
            h('div', { style: { marginTop: 4 } },
              h('input', {'aria-label': 'session-xxxxxxxx-…, session-yyyyyyyy-…',
                type: 'text',
                style: S.input,
                value: 手填文本,
                placeholder: 'session-xxxxxxxx-…, session-yyyyyyyy-…',
                onChange: (e) => 设手填(e.target.value),
              }),
            ),
            h('div', { style: { marginTop: 6 } }, 按钮('保存手填的 id', 存, true, 忙)),
          ),
        ),

        // —— 文案 ——
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '触发文案'),
          行(
            '掷中之后送出去的那句话',
            h('textarea', {'aria-label': '触发文案',
              style: S.ta,
              value: 配置.触发文案 === undefined ? '' : String(配置.触发文案),
              onChange: (e) => 改('触发文案', e.target.value),
            }),
            '用她自己的口吻写一句「心里话」（比如「好久没人跟我说话了，我该主动去打个招呼」）。发出去时会自动加上一句说明「这是你自己冒出来的念头、不是对方说的」，所以别在这里再写解释。',
          ),
        ),

        // —— 角色（做不到的地方，老实写在这儿）——
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '触发消息的角色'),
          行(
            '角色',
            h('select', {'aria-label': '角色',
              style: S.input,
              value: 配置.角色,
              onChange: (e) => 改('角色', e.target.value),
            },
              h('option', { value: 'user' }, 'user（当前唯一跑得通的）'),
              h('option', { value: 'developer' }, 'developer（当前 DSH 送不了）'),
            ),
            '选 developer 时本插件会主动拒发并记一条，不会去写坏会话日志。原因与证据见 README「做不到的地方」。',
          ),
        ),

        // —— 动作 ——
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '保存与手动操作'),
          h('div', { className: 'fish-actions' },
            按钮('保存设置', 存, true, 忙),
            按钮('演练一次（绝不真发）', () => 掷('演练'), false, 忙),
            按钮('真发一次（跳过等待）', () => 掷('真发'), false, 忙),
            按钮('刷新', 拉, false, 忙),
          ),
          h('div', { style: { marginTop: 6 } },
            h('div', { style: S.dim },
              '「保存设置」要按的场合：改了数字 / 触发文案 / 开关 / 角色之后（「目标会话」的勾选不用按，一点就生效）。'),
            h('div', { style: S.dim },
              '「演练一次」会完整走一遍判断（安静时段、概率、因子都跳过，一定走到最后一步），但绝不真发，' +
                '只告诉你「本来要发什么」。「真发一次」会当场真的送出去一轮，用于验证能不能跑通。'),
          ),
        ),

        // —— 记录 ——
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '最近 ' + 日志.length + ' 条记录（新的在最下面）'),
          h('div', { style: S.dim }, '定时器每轮都会留一条：没掷中也留（好确认它到底有没有在跑）。'),
          h('div', { style: { marginTop: 6, maxHeight: 260, overflowY: 'auto' } },
            日志.length === 0
              ? h('div', { style: S.dim }, '暂无运行记录，启用后可在这里查看每次判断。')
              : 日志.map((条, i) => h('div', { key: i, style: S.日志行 }, 条.时间 + '　' + 条.文本)),
          ),
        ),

        h('div', { style: S.dim },
          '注意：掷骰子是纯本地随机，不花模型；只有「掷中之后真发」才会走 DSH 的一轮（会花 token）。',
        ),

        h('details', { className: 'fish-diagnostics' }, h('summary', null, '诊断信息'),
          h('p', null, '模块版本 ' + String(态.版本 || '?')),
          h('p', null, '配置文件：' + String(态.配置文件 || '未知'))),
      )
    }

    function apply(ctx) {
      const slots = ctx.get('slots')
      if (slots === undefined) return
      slots.inject('settings.section', () =>
        slots.register(
          { name: 'settings.section', id: 'speak-up', order: 53, label: () => '主动搭话' },
          Section,
        ),
      )
    }

    exports.Section = Section
    exports.apply = apply
    exports.inject = inject
    return module.exports
  },
})

const META = {"name":"dsh-big-flsh-aio","version":"0.2.3","repositoryVersion":"0.2.3","upstreamCompatibility":[{"name":"通到 QQ","author":"Yuuyuko-uu","url":"https://github.com/Yuuyuko-uu/dsh-qq-link","version":"1.5.1","commit":"fba7e3ee8ffb3a8f819a7823eb05186cfb782ecb","forkName":"dsh-qq-link-plus","forkUrl":"https://github.com/CHINOSAMAAA/dsh-qq-link-plus","forkVersion":"1.5.1-10","forkCommit":"9b43ff8027ffbeb87dccb3bea61c4dcb34dafbe0"},{"name":"鱼的记忆","author":"Yuuyuko-uu","url":"https://github.com/Yuuyuko-uu/dsh-fish-memory","version":"1.5.2","commit":"5124cc1fa5a3149e8a68cf1d858e24b5bf2a2eea","forkName":"dsh-fish-memory-plus","forkUrl":"https://github.com/CHINOSAMAAA/dsh-fish-memory-plus","forkVersion":"1.5.2-2","forkCommit":"6767011c1831e48a864f816d6a78f2c25f9eb7f9"},{"name":"鱼的心情","author":"Yuuyuko-uu","url":"https://github.com/Yuuyuko-uu/dsh-feiyu-mood","version":"0.9.0","commit":"02fddcaae0763651ecd65af5f644fe61f19de4bd","modulePath":"modules/mood"},{"name":"主动搭话","author":"Yuuyuko-uu","url":"https://github.com/Yuuyuko-uu/dsh-speak-up","version":"0.3.0","commit":"e3bc6362208c693bb833ecf463ec6a20df4b6419","modulePath":"modules/speak"}]};
let NativeToast = null
try { NativeToast = require('@deepseek-ai/dsh-client-ui-primitives').Toast || null } catch {}

let openUpdatesRequested = false
let showUpdates = null

function UpdateNotifier({ open }) {
  const [notice, setNotice] = React.useState(null)
  React.useEffect(() => {
    let stopped = false, running = false, checkedAt = 0, active = null
    const notified = new Set()
    const check = async () => {
      if (stopped || running || (checkedAt && Date.now() - checkedAt < 5 * 60000)) return
      running = true; checkedAt = Date.now()
      const controller = new AbortController()
      active = controller
      const timeout = setTimeout(() => controller.abort(), 15000)
      try {
        const result = await request('/dsh-big-flsh-aio/update?channel=mirror&refresh=1', { signal: controller.signal })
        if (!stopped && result.hasUpdate && !notified.has(result.latest)) {
          notified.add(result.latest)
          setNotice(result.latest)
        }
      } catch { /* 后台查询失败不打扰用户，下一次检查重试。 */ }
      finally { clearTimeout(timeout); active = null; running = false }
    }
    const onVisible = () => { if (document.visibilityState !== 'hidden') void check() }
    void check()
    const interval = setInterval(check, 30 * 60000)
    window.addEventListener('focus', onVisible)
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      stopped = true; active?.abort(); clearInterval(interval)
      window.removeEventListener('focus', onVisible)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])
  if (!notice) return null
  const view = () => { open(); setNotice(null) }
  const text = '大肥鱼 v' + notice + ' 已发布，可更新插件。'
  if (NativeToast) return h(NativeToast, { key: notice, text, holdMs: 12000, onDone: () => setNotice(null), actions: [{ prefix: ' ', label: '查看更新', onClick: view }] })
  return h('aside', { className: 'big-fish-notice', role: 'alert', 'aria-label': '大肥鱼更新提醒' },
    h('div', null, text), h('div', { style: { display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap' } },
      h('button', { type: 'button', onClick: view }, '查看更新'),
      h('button', { type: 'button', onClick: () => setNotice(null), 'aria-label': '关闭更新提醒' }, '稍后')),
    h('style', null, FISH_THEME_CSS))
}

const React = require('react')
const h = React.createElement
const QQ = components['dsh-qq-link-plus'].Section
const Memory = components['dsh-fish-memory'].Section
const Mood = components['dsh-feiyu-mood'].Section
const Speak = components['dsh-speak-up'].Section
const PANEL_ID = 'big-flsh-aio'
const tabs = ['总览', 'QQ 互通', '长期记忆', '鱼的心情', '主动搭话', '文件管理', '运行日志', '更新与来源']
const UPDATES_TAB = tabs.length - 1
const FILE_MANAGER_TAB = tabs.indexOf('文件管理')
const TAB_ICONS = ['home', 'qq', 'memory', 'mood', 'speak', 'folder', 'log', 'update']
const TAB_STAMPS = ['封面', '连接', '收藏', '观测', '问候', '归档', '回声', '来处']
const DESCRIPTIONS = [
  '',
  '把 QQ 那边的消息接过来，让每段对话都找到自己的位置。',
  '值得留下的事，收进鱼的口袋，想的时候慢慢翻。',
  '今天开心几分？看见情绪的变化，也给它一点平复的时间。',
  '把主动交给恰当的时机。先演练一遍，再决定要不要真的开口。',
  '统一管理 QQ 图片、QQ 文件和表情包素材。',
  '看大肥鱼和 QQ 桥在后台说了什么。',
  '看看大肥鱼的来处，也看看有没有换上新衣裳。',
]
const submenus = {
  1: ['连接', '绑定', '消息策略', '角色设定', '表情包', '语音转写', '语音发送', 'QQ 空间', '图片与文件'].map(x => [x, x]),
  2: ['记忆库', '语义召回', '召回与遗忘', '历史导入'].map(x => [x, x]),
  3: [['mood', '心情'], ['bind', '会话绑定'], ['judge', '判断与注入'], ['charm', '挂饰']],
}
const css = FISH_THEME_CSS

// ── 更新后自动重开插件页：更新会重载插件并关掉页面，用 localStorage 记住“刚更新过” ──
const REOPEN_KEY = 'big-flsh-aio.reopen-after-update'
const 标记更新后重开 = () => {
  try { if (typeof window !== 'undefined') window.localStorage.setItem(REOPEN_KEY, String(Date.now())) } catch {}
}
const 清除更新后重开 = () => {
  try { if (typeof window !== 'undefined') window.localStorage.removeItem(REOPEN_KEY) } catch {}
}
const 需要更新后重开 = () => {
  try {
    if (typeof window === 'undefined') return false
    const at = Number(window.localStorage.getItem(REOPEN_KEY) || 0)
    return at > 0 && Date.now() - at < 5 * 60000
  } catch { return false }
}
let 重开面板 = null

// ── 统一通知：所有模块的临时提示都走 DSH 原生 Toast ─────────
const FISH_TOAST = { current: null, queue: [], serial: 0, listeners: new Set() }
function fishNotify(text, options = {}) {
  const value = String(text == null ? '' : text).trim()
  if (!value) return
  if (FISH_TOAST.current && FISH_TOAST.current.text === value) return
  if (FISH_TOAST.queue.some(item => item.text === value)) return
  FISH_TOAST.queue.push({
    id: ++FISH_TOAST.serial,
    text: value,
    tone: options.tone,
    holdMs: options.holdMs || (value.length > 90 ? 7000 : 4200),
    actions: options.actions,
  })
  fishToastPump()
}
function fishToastPump() {
  if (FISH_TOAST.current || !FISH_TOAST.queue.length) return
  FISH_TOAST.current = FISH_TOAST.queue.shift()
  FISH_TOAST.listeners.forEach(fn => fn())
}
function fishToastDone(id) {
  if (!FISH_TOAST.current || FISH_TOAST.current.id !== id) return
  FISH_TOAST.current = null
  FISH_TOAST.listeners.forEach(fn => fn())
  if (FISH_TOAST.queue.length) setTimeout(fishToastPump, 120)
}
function FishFallbackToast({ item, onDone }) {
  React.useEffect(() => {
    const timer = setTimeout(onDone, item.holdMs)
    return () => clearTimeout(timer)
  }, [item.id])
  return h('aside', { className: 'big-fish-notice', role: 'alert' },
    h('div', { style: { whiteSpace: 'pre-line' } }, item.text),
    h('style', null, FISH_THEME_CSS))
}
const FISH_HELP = { current: null, serial: 0, timer: null, listeners: new Set() }
function fishHideHelp() {
  if (FISH_HELP.timer) { clearTimeout(FISH_HELP.timer); FISH_HELP.timer = null }
  if (!FISH_HELP.current) return
  FISH_HELP.current = null
  FISH_HELP.listeners.forEach(fn => fn())
}
function fishScheduleHelpHide(delay = 160) {
  if (!FISH_HELP.current) return
  if (FISH_HELP.timer) clearTimeout(FISH_HELP.timer)
  FISH_HELP.timer = setTimeout(() => { FISH_HELP.timer = null; fishHideHelp() }, delay)
}
function fishCancelHelpHide() {
  if (!FISH_HELP.timer) return
  clearTimeout(FISH_HELP.timer)
  FISH_HELP.timer = null
}
function fishShowHelp(text, anchor, label, link) {
  if (!text || !anchor || typeof window === 'undefined') return
  fishCancelHelpHide()
  const rect = anchor.getBoundingClientRect()
  const width = Math.min(340, Math.max(200, window.innerWidth - 24))
  const left = Math.max(12, Math.min(rect.left + rect.width / 2 - width / 2, window.innerWidth - width - 12))
  const placement = rect.bottom + 190 > window.innerHeight && rect.top > 190 ? 'above' : 'below'
  FISH_HELP.current = {
    id: ++FISH_HELP.serial,
    text,
    label: label || '字段说明',
    link: link || null,
    anchor,
    left,
    top: placement === 'above' ? rect.top - 8 : rect.bottom + 8,
    width,
    placement,
  }
  FISH_HELP.listeners.forEach(fn => fn())
}
const FISH_CONFIRM = { current: null, serial: 0, listeners: new Set() }
function fishFinishConfirm(ok) {
  const item = FISH_CONFIRM.current
  if (!item) return
  FISH_CONFIRM.current = null
  FISH_CONFIRM.listeners.forEach(fn => fn())
  item.resolve(Boolean(ok))
}
function fishAskConfirm(options = {}) {
  if (FISH_CONFIRM.current) fishFinishConfirm(false)
  return new Promise(resolve => {
    FISH_CONFIRM.current = {
      id: ++FISH_CONFIRM.serial,
      title: options.title || '确认操作？',
      description: options.description || '',
      confirmText: options.confirmText || '确认',
      cancelText: options.cancelText || '取消',
      danger: options.danger === true,
      resolve,
    }
    FISH_CONFIRM.listeners.forEach(fn => fn())
  })
}
function FishConfirmHost() {
  const [item, setItem] = React.useState(FISH_CONFIRM.current)
  React.useEffect(() => {
    const update = () => setItem(FISH_CONFIRM.current)
    FISH_CONFIRM.listeners.add(update)
    update()
    return () => FISH_CONFIRM.listeners.delete(update)
  }, [])
  if (!item) return null
  return h('div', { className: 'fish-modal fish-confirm' },
    h('div', {
      className: 'fish-modal-card', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'fish-confirm-title', 'aria-describedby': 'fish-confirm-desc',
      onKeyDown: (e) => { if (e.key === 'Escape') fishFinishConfirm(false) },
    },
    h('span', { className: 'fish-kicker' }, 'CONFIRM · 操作确认'),
    h('h2', { id: 'fish-confirm-title' }, item.title),
    h('p', { id: 'fish-confirm-desc', className: 'fish-modal-desc' }, item.description),
    h('div', { className: 'fish-modal-actions' },
      h('button', { type: 'button', className: 'fish-button fish-modal-cancel', autoFocus: true, onClick: () => fishFinishConfirm(false) }, item.cancelText),
      h('button', { type: 'button', className: 'fish-button ' + (item.danger ? 'fish-danger' : 'fish-primary'), onClick: () => fishFinishConfirm(true) }, item.confirmText))))
}

const FISH_TEXT = { current: null, serial: 0, listeners: new Set() }
function fishFinishText(value) {
  const item = FISH_TEXT.current
  if (!item) return
  FISH_TEXT.current = null
  FISH_TEXT.listeners.forEach(fn => fn())
  item.resolve(value === null || value === undefined ? null : String(value))
}
function fishAskText(options = {}) {
  if (FISH_TEXT.current) fishFinishText(null)
  return new Promise(resolve => {
    FISH_TEXT.current = {
      id: ++FISH_TEXT.serial,
      title: options.title || '编辑文字',
      description: options.description || '',
      value: options.value == null ? '' : String(options.value),
      placeholder: options.placeholder || '',
      confirmText: options.confirmText || '保存',
      cancelText: options.cancelText || '取消',
      maxLength: options.maxLength || 20000,
      resolve,
    }
    FISH_TEXT.listeners.forEach(fn => fn())
  })
}
function FishTextHost() {
  const [item, setItem] = React.useState(FISH_TEXT.current)
  const [text, setText] = React.useState('')
  React.useEffect(() => {
    const update = () => setItem(FISH_TEXT.current)
    FISH_TEXT.listeners.add(update)
    update()
    return () => FISH_TEXT.listeners.delete(update)
  }, [])
  React.useEffect(() => { setText(item?.value || '') }, [item && item.id])
  if (!item) return null
  return h('div', { className: 'fish-modal' },
    h('div', { className: 'fish-modal-card qq-text-modal', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'fish-text-title', 'aria-describedby': 'fish-text-desc',
      onKeyDown: (e) => { if (e.key === 'Escape') fishFinishText(null) } },
    h('span', { className: 'fish-kicker' }, 'EDIT · 角色设定'),
    h('h2', { id: 'fish-text-title' }, item.title),
    item.description ? h('p', { id: 'fish-text-desc', className: 'fish-modal-desc' }, item.description) : null,
    h('textarea', { className: 'qq-text-modal-input', 'aria-label': '角色设定内容', autoFocus: true, maxLength: item.maxLength, value: text, placeholder: item.placeholder,
      onChange: (e) => setText(e.target.value) }),
    h('div', { className: 'fish-modal-actions' },
      h('button', { type: 'button', className: 'fish-button fish-modal-cancel', onClick: () => fishFinishText(null) }, item.cancelText),
      h('button', { type: 'button', className: 'fish-button fish-primary', onClick: () => fishFinishText(text) }, item.confirmText))))
}

const FISH_WRITER = { open: false, serial: 0, listeners: new Set() }
function fishOpenRoleWriter() {
  FISH_WRITER.open = true
  FISH_WRITER.serial++
  FISH_WRITER.listeners.forEach(fn => fn())
}
function FishRoleWriterHost() {
  const [open, setOpen] = React.useState(FISH_WRITER.open)
  const [need, setNeed] = React.useState('')
  const [result, setResult] = React.useState('')
  const [busy, setBusy] = React.useState(false)
  const [error, setError] = React.useState('')
  React.useEffect(() => {
    const update = () => setOpen(Boolean(FISH_WRITER.open))
    FISH_WRITER.listeners.add(update)
    update()
    return () => FISH_WRITER.listeners.delete(update)
  }, [])
  const close = () => {
    if (busy) return
    FISH_WRITER.open = false
    FISH_WRITER.listeners.forEach(fn => fn())
    setNeed(''); setResult(''); setError('')
  }
  const generate = async () => {
    if (!need.trim() || busy) return
    setBusy(true); setError(''); setResult('')
    try {
      const response = await fetch('/dsh-qq-bridge/role-draft', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ 需求: need.trim() }),
      })
      const data = await response.json().catch(() => null)
      if (!response.ok || !data?.ok) throw new Error(data?.说 || '生成失败')
      setResult(String(data.文字 || '').trim())
    } catch (e) { setError(String((e && e.message) || e)) }
    finally { setBusy(false) }
  }
  const copy = async () => {
    if (!result) return
    try {
      await navigator.clipboard.writeText(result)
      fishNotify('角色设定已复制', { tone: 'success' })
    } catch (e) { fishNotify('复制失败，请手动选择文本', { holdMs: 6000 }) }
  }
  if (!open) return null
  return h('div', { className: 'fish-modal' },
    h('div', { className: 'fish-modal-card qq-role-writer-card', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'fish-writer-title',
      onKeyDown: (e) => { if (e.key === 'Escape') close() } },
    h('span', { className: 'fish-kicker' }, 'AI · 专业代写'),
    h('h2', { id: 'fish-writer-title' }, '大肥鱼专业代写'),
    h('p', { className: 'fish-modal-desc' }, '简单输入需求，让大肥鱼帮你写角色设定。需要注意本功能将消耗 Deepseek Token。'),
    h(FishTextarea, { className: 'qq-role-writer-input', 'aria-label': '角色设定需求', autoFocus: true, value: need, placeholder: '例如：想要一个嘴硬心软、说话简短、会默默关心人的角色。', onChange: (e) => setNeed(e.target.value) }),
    h('div', { className: 'fish-modal-actions' },
      h('button', { type: 'button', className: 'fish-button fish-primary', disabled: busy || !need.trim(), onClick: generate }, busy ? '生成中…' : '鞭策大肥鱼工作'),
      h('button', { type: 'button', className: 'fish-button fish-modal-cancel', disabled: busy, onClick: close }, '关闭')),
    error ? h('p', { className: 'fish-modal-error', role: 'alert' }, error) : null,
    result ? h('div', { className: 'qq-role-writer-result' },
      h('div', { className: 'qq-role-writer-result-head' }, h('strong', null, '生成结果'), h('button', { type: 'button', className: 'fish-button', onClick: copy }, '一键复制')),
      h('pre', { className: 'qq-role-writer-result-text' }, result)) : null))
}

function FishHelpHost() {
  const [item, setItem] = React.useState(FISH_HELP.current)
  const cardRef = React.useRef(null)
  React.useEffect(() => {
    const update = () => setItem(FISH_HELP.current)
    FISH_HELP.listeners.add(update)
    update()
    return () => FISH_HELP.listeners.delete(update)
  }, [])
  React.useEffect(() => {
    if (!item) return
    const hide = () => fishHideHelp()
    const outside = (e) => {
      if (cardRef.current && cardRef.current.contains(e.target)) return
      if (item.anchor && item.anchor !== e.target && !item.anchor.contains(e.target)) fishHideHelp()
    }
    window.addEventListener('scroll', hide, true)
    window.addEventListener('resize', hide)
    document.addEventListener('pointerdown', outside, true)
    return () => {
      window.removeEventListener('scroll', hide, true)
      window.removeEventListener('resize', hide)
      document.removeEventListener('pointerdown', outside, true)
    }
  }, [item && item.id])
  if (!item) return null
  return h('div', {
    ref: cardRef,
    className: 'fish-help-popover', 'data-placement': item.placement, role: 'tooltip',
    style: { left: item.left + 'px', top: item.top + 'px', width: item.width + 'px' },
    onMouseEnter: fishCancelHelpHide,
    onMouseLeave: () => fishScheduleHelpHide(120),
  },
  h('span', { className: 'fish-help-label' }, item.label),
  h('p', null, item.text, item.link ? ' ' : null,
    item.link ? h('button', {
      type: 'button', className: 'fish-help-link',
      onClick: (e) => {
        e.preventDefault()
        const action = item.link.onClick
        fishHideHelp()
        if (typeof action === 'function') action()
      },
    }, item.link.text) : null))
}

function NotificationHost() {
  const [item, setItem] = React.useState(FISH_TOAST.current)
  React.useEffect(() => {
    const update = () => setItem(FISH_TOAST.current)
    FISH_TOAST.listeners.add(update)
    update()
    return () => FISH_TOAST.listeners.delete(update)
  }, [])
  if (!item) return null
  const done = () => fishToastDone(item.id)
  if (NativeToast) return h('div', { style: { whiteSpace: 'pre-line' } },
    h(NativeToast, { key: item.id, text: item.text, tone: item.tone, holdMs: item.holdMs, actions: item.actions, onDone: done }))
  return h(FishFallbackToast, { key: item.id, item, onDone: done })
}

// 线性图标统一走这一份，保证侧栏、状态卡和页头图章的手感一致。
const ICONS = {
  home: { paths: ['M4 11.2 12 4l8 7.2V20a1 1 0 0 1-1 1h-4.6v-5.6H10V21H5a1 1 0 0 1-1-1Z'] },
  qq: { paths: ['M5 5.5h14A1.5 1.5 0 0 1 20.5 7v8.5A1.5 1.5 0 0 1 19 17h-7l-4.6 3.6V17H5a1.5 1.5 0 0 1-1.5-1.5V7A1.5 1.5 0 0 1 5 5.5Z'], dots: [[7.6, 11.2, 1], [12, 11.2, 1], [16.4, 11.2, 1]] },
  memory: { paths: ['M12 6.2C10 4.9 7.5 4.5 4 4.8v14c3.5-.3 6 .1 8 1.4 2-1.3 4.5-1.7 8-1.4v-14c-3.5-.3-6 .1-8 1.4Z', 'M12 6.2v14'] },
  mood: { paths: ['M12 20s-7-4.2-7-9.4A3.6 3.6 0 0 1 12 7a3.6 3.6 0 0 1 7 3.6C19 15.8 12 20 12 20Z', 'M7.4 12.1h2.2l1.2-2 1.8 4 1.3-2h2.7'] },
  speak: { paths: ['M4 5.5h16v10H9l-5 4Z', 'M18 2.6l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6Z'], dots: [[8.2, 10.5, 1], [12, 10.5, 1], [15.8, 10.5, 1]] },
  update: { paths: ['M20 12a8 8 0 1 1-2.4-5.7', 'M20 4v4h-4', 'M12 8.4v3.8l2.4 1.4'] },
  link: { paths: ['M9.4 14.6 14.6 9.4', 'M8.1 11.9 6.5 13.5a3.4 3.4 0 0 0 4.8 4.8l1.6-1.6', 'M15.9 12.1l1.6-1.6a3.4 3.4 0 0 0-4.8-4.8l-1.6 1.6'] },
  send: { paths: ['M4 11.5 20 4l-4.5 16-4-6.5Z', 'M11.5 13.5 20 4'] },
  layers: { paths: ['M12 3 21 8l-9 5-9-5Z', 'M3 12l9 5 9-5', 'M3 16l9 5 9-5'] },
  folder: { paths: ['M3 7.2A1.2 1.2 0 0 1 4.2 6h5l2 2.4h8.6A1.2 1.2 0 0 1 21 9.6v8.2a1.2 1.2 0 0 1-1.2 1.2H4.2A1.2 1.2 0 0 1 3 17.8Z', 'M3 10h18'] },
  log: { paths: ['M4 5h16v14H4Z', 'm8 9 3 3-3 3', 'M13 15h4'] },
  heart: { paths: ['M12 20s-7-4.2-7-9.4A3.6 3.6 0 0 1 12 7a3.6 3.6 0 0 1 7 3.6C19 15.8 12 20 12 20Z'] },
  spark: { paths: ['M12 3.2l1.7 5 5 1.7-5 1.7-1.7 5-1.7-5-5-1.7 5-1.7Z', 'M18.8 16.2l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7Z'] },
  pin: { paths: ['M12 21s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z'], dots: [[12, 11, 2]] },
  sparkle: { paths: ['M12 2.5l1.2 3.6 3.6 1.2-3.6 1.2L12 12.1 10.8 8.5 7.2 7.3l3.6-1.2Z'] },
}

function Glyph({ name, size = 22, className = '' }) {
  const icon = ICONS[name] || ICONS.spark
  return h('svg', {
    className: 'fish-glyph' + (className ? ' ' + className : ''), width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round',
    'aria-hidden': true, focusable: 'false',
  },
  ...icon.paths.map((d, i) => h('path', { key: 'p' + i, d })),
  ...(icon.dots || []).map(([cx, cy, r], i) => h('circle', { key: 'd' + i, cx, cy, r, fill: 'currentColor', stroke: 'none' })))
}

function FishIcon({ size = 24 }) {
  return h('img', {
    src: '/dsh-feiyu-mood/logo.png', width: size, height: size,
    className: 'fish-logo-img', alt: '', 'aria-hidden': true, decoding: 'async', style: { display: 'block' },
  })
}

function Wave({ className = '' }) {
  return h('svg', { className: 'fish-hero-wave ' + className, viewBox: '0 0 1200 190', preserveAspectRatio: 'none', 'aria-hidden': true, focusable: 'false' },
    h('path', { className: 'fish-wave-back', d: 'M0 94C130 44 260 42 388 80S648 160 802 130 1050 58 1200 96V190H0Z' }),
    h('path', { className: 'fish-wave-front', d: 'M0 134C150 94 284 98 432 128S704 178 864 148 1084 100 1200 128V190H0Z' }),
    h('path', { className: 'fish-wave-foam', d: 'M0 108C160 62 300 64 456 98S720 154 880 126 1090 84 1200 108' }))
}

function Bubbles({ className = '' }) {
  return h('svg', { className: 'fish-bubbles ' + className, viewBox: '0 0 220 220', fill: 'none', 'aria-hidden': true, focusable: 'false' },
    h('circle', { cx: 42, cy: 158, r: 26 }),
    h('circle', { cx: 94, cy: 196, r: 10 }),
    h('circle', { cx: 150, cy: 172, r: 5 }),
    h('circle', { cx: 186, cy: 118, r: 16 }),
    h('circle', { cx: 158, cy: 74, r: 4 }),
    h('path', { d: 'M24 148c2-8 8-12 16-13M176 108c1-6 6-9 12-10' }))
}

function Sparkle({ className = '' }) {
  return h('svg', { className: 'fish-sparkle ' + className, viewBox: '0 0 40 40', fill: 'none', 'aria-hidden': true, focusable: 'false' },
    h('path', { d: 'M20 3Q23 17 34 20Q23 23 20 37Q17 23 6 20Q17 17 20 3Z' }),
    h('path', { d: 'M33 4Q34 10 39 11Q34 12 33 18Q32 12 27 11Q32 10 33 4Z' }))
}

async function request(path, options) {
  const response = await fetch(path, { cache: 'no-store', ...options })
  const data = await response.json()
  if (!response.ok || !data.ok) throw new Error(data.error || data.说 || '接口请求失败：' + response.status)
  return data
}
const button = (label, onClick, primary = false, disabled = false) => h('button', { type: 'button', className: 'fish-button' + (primary ? ' fish-primary' : ''), onClick, disabled }, label)
const link = (url, label) => h('a', { href: url, target: '_blank', rel: 'noreferrer' }, label)

// 总览的每日一句：从最近一条未被取代的记忆里取一小段，再按心情基调选语气。
// 同一天、同一份数据会得到同一句；换一天会换模板。没有记忆/心情时用通用句。
function 记忆片段(text) {
  let t = String(text || '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_#>~“”"「」『』]/g, ' ')
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  t = t.replace(/^[，,。；;：:\s-]+/, '')
  const first = t.split(/[。！？!?；;]/)[0].trim()
  if (first.length < 4) return ''
  return first.length > 30 ? first.slice(0, 30).replace(/[，,、\s]+$/, '') + '…' : first
}
function 最近记忆(memory) {
  const all = []
  for (const session of (memory?.sessions || [])) {
    for (const item of (session?.memories || [])) {
      if (!item || !item.text || item.已被取代) continue
      const text = 记忆片段(item.text)
      if (!text) continue
      all.push({
        text,
        id: item.id || '',
        time: Date.parse(item.at || '') || 0,
        importance: Number(item.importance) || 0,
      })
    }
  }
  all.sort((a, b) => (b.time - a.time) || (b.importance - a.importance))
  return all[0] || null
}
function 每天一句({ memory, mood } = {}) {
  const 记忆 = 最近记忆(memory)
  const 分值 = Number(mood?.mood)
  const dims = Object.fromEntries((mood?.dims || []).map(d => [d.key, Number(d.value) || 0]))
  let tone = '平静'
  if (Number.isFinite(分值) && (分值 >= 66 || dims.happy >= 60 || dims.sweet >= 60)) tone = '明亮'
  else if (Number.isFinite(分值) && (分值 <= 38 || dims.sad >= 55 || dims.worry >= 55 || dims.heartache >= 55)) tone = '低落'
  const today = new Date()
  const dayNumber = Math.floor(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) / 86400000)
  const memo = 记忆?.text || ''
  const withMemo = {
    明亮: [
      `今天的光是亮的。想起「${memo}」，连呼吸都轻快了一点。`,
      `好心情值得收好。就像想起「${memo}」时那样，慢慢笑一下。`,
      `今天有一点小小的亮。想起「${memo}」，觉得日子在往好的方向走。`,
      `把今天的开心和「${memo}」一起收进胃袋里。`,
    ],
    低落: [
      `今天先不用急着振作。想起「${memo}」，就给自己留一点软和的时间。`,
      `辛苦了。那些沉下去的情绪先放着，想起「${memo}」，慢慢来就好。`,
      `今天可以慢一点。想起「${memo}」，至少还有一件事是暖的。`,
      `不要求今天很好。想起「${memo}」，先照顾好此刻的自己。`,
    ],
    平静: [
      `今天也辛苦了。想起「${memo}」，慢慢来就好。`,
      `把今天安安静静地收好。想起「${memo}」，心里就有了一点着落。`,
      `日子不急。想起「${memo}」，就按自己的速度往前走。`,
      `今天没有惊天动地的事，但「${memo}」值得被记住。`,
    ],
  }
  const plain = {
    明亮: [
      '今天的心情在发光，记得把这份轻快收好。',
      '今天适合把开心多留一会儿，慢慢来也很好。',
      '今天的风是轻的，愿你也是。',
    ],
    低落: [
      '今天也辛苦了，不用急着变好，慢慢来就好。',
      '如果今天有点难，就先照顾好自己，别急着往前赶。',
      '累了就停一停，今天不用勉强自己发光。',
    ],
    平静: [
      '今天也辛苦了，慢慢来就好。',
      '平平常常的一天，也值得被好好收进胃袋里。',
      '不着急，今天按自己的节奏走就好。',
    ],
  }
  const pool = memo ? (withMemo[tone] || withMemo.平静) : (plain[tone] || plain.平静)
  const seed = tone + '|' + memo + '|' + String(mood?.moodLabel || '')
  let hash = 0
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0
  // 日期每加一天，索引正好加一：同样的记忆/心情下，相邻两天不会撞同一句。
  return pool[(dayNumber + hash) % pool.length]
}

function Overview({ navigate, notify }) {
  const [state, setState] = React.useState({})
  const refresh = async () => {
    const results = await Promise.allSettled([request('/dsh-qq-bridge/state'), request('/dsh-fish-memory/list'), request('/dsh-feiyu-mood/state'), request('/dsh-speak-up/state')])
    const errors = results.filter(r => r.status === 'rejected').map(r => r.reason.message)
    setState({ qq: results[0].value, memory: results[1].value, mood: results[2].value, speak: results[3].value })
    if (errors.length && typeof notify === 'function') notify('读取部分模块状态失败：' + errors.join('；'), { holdMs: 7000 })
  }
  React.useEffect(() => { void refresh() }, [])
  const qq = state.qq, memory = state.memory, mood = state.mood
  const libraries = [...new Map((memory?.sessions || []).map(s => [s.storeId || s.id, s])).values()]
  const connected = Boolean(qq?.NapCat状态?.用户 && !qq?.NapCat状态?.错)
  const moodValue = mood ? String(mood.mood ?? '—') + (mood.moodLabel ? ' · ' + mood.moodLabel : '') : '—'
  const stats = [
    { label: 'QQ 后端', value: !qq ? '—' : qq.NapCat状态?.错 ? '未连接' : qq.NapCat状态?.用户 ? '已连接' : '未连接', hint: qq?.NapCat状态?.昵称 || '在 QQ 互通里配置 NapCat / SnowLuma', icon: 'link', tone: connected ? 'mint' : 'blue' },
    { label: '消息转发', value: !qq ? '—' : qq.配置?.总开关 ? qq.配置?.试运行 ? '试运行' : '已开启' : '已关闭', hint: '沿用原插件的收发开关与绑定策略', icon: 'send', tone: 'blue' },
    { label: '长期记忆', value: !memory ? '—' : memory.全局开关 ? '已开启' : '已关闭', hint: '按会话与 QQ 来源隔离，按需语义召回', icon: 'memory', tone: 'gold' },
    { label: '记忆条目', value: memory ? String(libraries.reduce((n, s) => n + (s.count || 0), 0)) : '—', hint: memory ? libraries.length + ' 个记忆库' : '等待宿主记忆服务', icon: 'layers', tone: 'gold' },
    { label: '鱼的心情', value: moodValue, hint: '按会话或工作区绑定，保留情绪时间线', icon: 'heart', tone: 'rose' },
    { label: '主动搭话', value: !state.speak ? '—' : state.speak.配置?.总开关 ? state.speak.配置?.试运行 ? '试运行' : '已开启' : '已关闭', hint: '复用目标会话的人格、历史、工具和记忆', icon: 'spark', tone: 'mint' },
  ]
  return h('div', { className: 'fish-overview' },
    h('section', { className: 'fish-hero' },
      h('div', { className: 'fish-hero-copy' },
        h('span', { className: 'fish-kicker fish-kicker-light' }, h('span', { className: 'fish-kicker-dot' }), 'BIG FISH · QQ陪伴手帐'),
        h('h1', null, '把日常，收进', h('span', { className: 'fish-mark' }, '鱼的胃袋'), '里。'),
        h('p', { className: 'fish-hero-lead' }, 'QQ 的消息、一起记住的事、今天的心情，还有一句恰到好处的问候——都替你收好，慢慢翻。'),
        h('p', { className: 'fish-hero-quote' }, '“' + 每天一句({ memory, mood }) + '”')),
      h('figure', { className: 'fish-welcome', 'aria-hidden': true },
        h('span', { className: 'fish-tape fish-welcome-tape' }),
        h('img', { src: '/dsh-feiyu-mood/welcome.png', alt: '', width: 1254, height: 1254, decoding: 'async' }),
        h('figcaption', null, '大肥鱼 · 今天也要开心')),
      h(Wave), h(Bubbles, { className: 'fish-hero-bubbles' }), h(Sparkle, { className: 'fish-hero-spark' })),
    h('section', { className: 'fish-board' },
      h('header', { className: 'fish-section-head' },
        h('div', null, h('span', { className: 'fish-kicker' }, 'TODAY · 今日状态'), h('h2', null, '鱼缸里的小读数')),
        h('span', { className: 'fish-section-note' }, '连接、记忆与心情，一页看完')),
      h('div', { className: 'fish-stats' }, ...stats.map(({ label, value, hint, icon, tone }) => h('article', { className: 'fish-card fish-stat', 'data-tone': tone, key: label },
        h('span', { className: 'fish-stat-icon', 'aria-hidden': true }, h(Glyph, { name: icon, size: 20 })),
        h('div', { className: 'fish-stat-copy' },
          h('span', { className: 'fish-stat-label' }, label),
          h('div', { className: 'fish-value' }, value),
          h('span', { className: 'fish-stat-hint' }, hint)))))),
    h('section', { className: 'fish-board fish-chapters' },
      h('header', { className: 'fish-section-head' },
        h('div', null, h('span', { className: 'fish-kicker' }, 'CHAPTERS · 功能 ALL IN ONE'), h('h2', null, '今天想先翻哪一本？')),
        h('span', { className: 'fish-section-note' }, '点击进入对应功能区')),
      h('div', { className: 'fish-grid' },
        h('article', { className: 'fish-card fish-feature fish-feature-character', 'data-fish-feature': 'qq', 'data-index': '01' },
          h('div', { className: 'fish-feature-copy' },
            h('span', { className: 'fish-feature-tag' }, h('b', null, '01'), '连接'),
            h('h2', null, 'QQ 互通'),
            h('p', { className: 'fish-muted' }, '统一设置后端连接、私聊与群聊绑定、回复策略。历史记录按段整理后，写进目标会话的记忆。'),
            h('div', { className: 'fish-actions' }, button('打开 QQ 手帐 →', () => navigate(1), true))),
          h('figure', { className: 'fish-feature-sticker', 'aria-hidden': true },
            h('span', { className: 'fish-tape fish-feature-tape' }),
            h('img', { src: '/dsh-feiyu-mood/sticker-chat.png', alt: '', width: 1254, height: 1254, decoding: 'async' }))),
        h('article', { className: 'fish-card fish-feature fish-feature-character', 'data-fish-feature': 'memory', 'data-index': '02' },
          h('div', { className: 'fish-feature-copy' },
            h('span', { className: 'fish-feature-tag' }, h('b', null, '02'), '记忆'),
            h('h2', null, '长期记忆'),
            h('p', { className: 'fish-muted' }, '浏览与编辑记忆，整理档案，配置遗忘与召回。Qwen 语义检索按需启用，保留原有来源隔离。'),
            h('div', { className: 'fish-actions' }, button('翻翻记忆口袋 →', () => navigate(2), true))),
          h('figure', { className: 'fish-feature-sticker', 'aria-hidden': true },
            h('span', { className: 'fish-tape fish-feature-tape' }),
            h('img', { src: '/dsh-feiyu-mood/sticker-read.png', alt: '', width: 1254, height: 1254, decoding: 'async' }))),
        h('article', { className: 'fish-card fish-feature fish-feature-light', 'data-fish-feature': 'mood', 'data-index': '03' },
          h('div', { className: 'fish-feature-copy' },
            h('span', { className: 'fish-feature-tag' }, h('b', null, '03'), '心情'),
            h('h2', null, '鱼的心情'),
            h('p', { className: 'fish-muted' }, '自动判断心情、查看情绪时间线，管理会话或工作区绑定与挂饰。'),
            h('div', { className: 'fish-actions' }, button('看看今天的心情 →', () => navigate(3)))),
          h('figure', { className: 'fish-feature-sticker fish-feature-sticker-small', 'aria-hidden': true },
            h('span', { className: 'fish-tape fish-feature-tape' }),
            h('img', { src: '/dsh-feiyu-mood/sticker-heart.png', alt: '', width: 1254, height: 1254, decoding: 'async' }))),
        h('article', { className: 'fish-card fish-feature fish-feature-light', 'data-fish-feature': 'speak', 'data-index': '04' },
          h('div', { className: 'fish-feature-copy' },
            h('span', { className: 'fish-feature-tag' }, h('b', null, '04'), '搭话'),
            h('h2', null, '主动搭话'),
            h('p', { className: 'fish-muted' }, '配置空闲触发、时段与目标会话，先演练，再按需启用真发。'),
            h('div', { className: 'fish-actions' }, button('安排一次问候 →', () => navigate(4)))),
          h('figure', { className: 'fish-feature-sticker fish-feature-sticker-small', 'aria-hidden': true },
            h('span', { className: 'fish-tape fish-feature-tape' }),
            h('img', { src: '/dsh-feiyu-mood/sticker-wave.png', alt: '', width: 1254, height: 1254, decoding: 'async' }))))))
}

function Updates({ notify } = {}) {
  const [update, setUpdate] = React.useState(null)
  const [busy, setBusy] = React.useState(false)
  const tell = typeof notify === 'function' ? notify : () => {}
  const [channel, setChannel] = React.useState('mirror')
  const check = async (force = true) => {
    setBusy(true)
    try { setUpdate(await request('/dsh-big-flsh-aio/update?channel=' + channel + (force ? '&refresh=1' : ''))) }
    catch (e) { setUpdate(null); tell('检查更新失败：' + e.message, { holdMs: 6000 }) }
    finally { setBusy(false) }
  }
  const install = async () => {
    setBusy(true); tell('正在安装大肥鱼整合包…')
    标记更新后重开()
    try {
      await request('/dsh-big-flsh-aio/install?channel=' + channel, { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}' })
      setUpdate(current => current ? { ...current, hasUpdate: false } : current)
      tell('安装已完成。更新会重载插件，完成后会自动回到大肥鱼页面。', { tone: 'success', holdMs: 7000 })
      重开面板?.()
      if (typeof setTimeout === 'function') setTimeout(() => { 重开面板?.() }, 2000)
    } catch (e) { 清除更新后重开(); tell('安装未完成：' + e.message, { holdMs: 7000 }) }
    finally { setBusy(false) }
  }
  React.useEffect(() => { void check(false) }, [channel])
  const status = !update ? (busy ? '正在检查…' : '暂未取得更新信息')
    : update.error ? '检查失败，可重试'
    : update.legacyRelease ? '此渠道仍为旧编号版本，请等待新系列同步'
    : update.hasUpdate ? (update.commitUpdate ? '仓库有新提交 ' + String(update.latestCommit || '').slice(0, 7) : '可更新至 v' + update.latest)
    : update.ahead ? '本地版本高于仓库版本'
    : '已是最新版本'
  const changeChannel = async next => {
    if (next === 'github') {
      const ok = await fishAskConfirm({
        title: '切换到 Github 仓库？',
        description: 'Github 仓库代码为测试版本，不保证功能正常，是否继续选择？',
        confirmText: '是，继续',
        cancelText: '否，使用镜像',
      })
      if (!ok) { setChannel('mirror'); return }
    }
    setUpdate(null)
    setChannel(next)
  }
  return h('div', { className: 'fish-updates' },
    h('section', { className: 'fish-card fish-update-card' },
      h('div', { className: 'fish-update-body' },
        h('span', { className: 'fish-kicker' }, 'UPGRADE · 保持新鲜'),
        h('div', { className: 'fish-update-heading' },
          h('div', null,
            h('h2', null, '大肥鱼超进化！'),
            h('p', { className: 'fish-update-desc fish-muted' }, '普通用户只建议使用国内镜像更新')),
          h('p', { className: 'fish-update-status', role: 'status', 'aria-live': 'polite', title: update?.error || undefined }, h('span', { className: 'fish-update-dot' }), status)),
        h('div', { className: 'fish-update-controls' },
          h('label', { className: 'fish-channel-field', htmlFor: 'fish-update-channel' },
            h('span', null, '更新渠道'),
            h(FishSelect, {
              id: 'fish-update-channel', 'aria-label': '更新渠道', value: channel, disabled: busy,
              onChange: e => { void changeChannel(e.target.value) },
            }, h('option', { value: 'mirror' }, '国内镜像 · npmmirror'), h('option', { value: 'github' }, 'GitHub 仓库'))),
          h('div', { className: 'fish-update-operations' },
            h('button', {
              type: 'button',
              className: 'fish-button fish-update-check' + (update?.hasUpdate && !busy ? ' fish-gold' : ''),
              disabled: busy || Boolean(update?.hasUpdate && update?.canInstall === false),
              'aria-label': busy ? (update?.hasUpdate ? '正在安装更新' : '正在检查更新') : (update?.hasUpdate ? '立即更新' : '检查更新'),
              onClick: update?.hasUpdate ? install : () => check(true),
            }, busy
              ? h(Glyph, { name: 'update', size: 18, className: 'fish-spin' })
              : (update?.hasUpdate ? '立即更新' : '检查更新')))),
        update?.error ? h('p', { className: 'fish-update-note fish-muted' }, '检查更新失败：' + update.error) : null,
        update?.commitUpdate ? h('p', { className: 'fish-update-note fish-muted' }, 'GitHub main 有新提交，仓库版本仍是 v' + update.latest + '；点「立即更新」会安装该提交。') : null,
        update?.devCopy ? h('p', { className: 'fish-update-note fish-muted' }, '当前是本地开发副本，自动安装已禁用。请在项目目录执行 git pull，再运行 npm run build 并重载 DSH。') : null),
      h('figure', { className: 'fish-update-art', 'aria-hidden': true },
        h('span', { className: 'fish-tape fish-update-tape' }),
        h('img', { src: '/dsh-feiyu-mood/update.png', alt: '', width: 512, height: 512, decoding: 'async', loading: 'lazy' }))),
    h('section', { className: 'fish-card fish-sources' },
      h('header', { className: 'fish-section-head fish-sources-head' },
        h('div', null,
          h('span', { className: 'fish-kicker' }, 'PROVENANCE · 手帐来处'),
          h('h2', null, '原作者、项目来源与版本对应'),
          h('p', { className: 'fish-source-link' }, link('https://github.com/CHINOSAMAAA/dsh-big-flsh-aio', 'CHINOSAMAAA/dsh-big-flsh-aio ↗'))),
        h('span', { className: 'fish-section-note' }, '固定记录整合基线，不随上游最新版本变化')),
      h('div', { className: 'fish-table-wrap' }, h('table', { className: 'fish-table' },
        h('thead', null, h('tr', null,
          ...['项目名称', '本项目子仓库', '原作者仓库'].map(x => h('th', { key: x, scope: 'col' }, x)),
          h('th', { scope: 'col' }, '整合时的原仓库版本'),
          h('th', { scope: 'col' }, '实际内置版本'))),
        h('tbody', null, ...META.upstreamCompatibility.map(item => h('tr', { key: item.url },
          h('td', null, h('span', { className: 'fish-source-name' }, item.name)),
          h('td', null, item.forkUrl ? link(item.forkUrl, item.forkName) : '-'),
          h('td', null, link(item.url, item.url.replace('https://github.com/', ''))),
          h('td', null, item.version, h('div', { className: 'fish-muted', title: item.commit }, item.commit.slice(0, 7))),
          h('td', null, item.forkVersion || item.version, h('div', { className: 'fish-muted', title: item.forkCommit || item.commit }, (item.forkCommit || item.commit).slice(0, 7))))))))))
}

function FileManager({ notify } = {}) {
  return h('div', { className: 'fish-file-manager' },
    typeof FishStickers === 'function' ? h(FishStickers, { notify, mode: 'files' }) : h('p', { className: 'fish-muted' }, '表情包管理组件不可用'),
    h('section', { className: 'fish-card' },
      h('h2', null, 'QQ 图片'),
      h('p', { className: 'fish-muted' }, '管理 QQ 接收图片的本地归档；删除归档副本不会影响 DSH 会话附件。'),
      typeof FishQQStorage === 'function' ? h(FishQQStorage, { kind: 'images', notify }) : h('p', { className: 'fish-muted' }, '图片存储管理组件不可用')),
    h('section', { className: 'fish-card' },
      h('h2', null, 'QQ 文件'),
      h('p', { className: 'fish-muted' }, '管理 QQ 接收文件的本地归档；文件不会被自动执行。'),
      typeof FishQQStorage === 'function' ? h(FishQQStorage, { kind: 'files', notify }) : h('p', { className: 'fish-muted' }, '文件存储管理组件不可用')))
}

function RunLog({ notify } = {}) {
  const [lines, setLines] = React.useState([])
  const [error, setError] = React.useState('')
  const terminalRef = React.useRef(null)
  React.useEffect(() => {
    let active = true
    const load = async () => {
      try {
        const result = await request('/dsh-qq-bridge/logs')
        if (!active) return
        setLines(Array.isArray(result.日志) ? result.日志 : [])
        setError('')
      } catch (e) {
        if (active) setError(e.message)
      }
    }
    void load()
    const timer = setInterval(load, 1200)
    return () => { active = false; clearInterval(timer) }
  }, [])
  React.useEffect(() => {
    const node = terminalRef.current
    if (node) node.scrollTop = node.scrollHeight
  }, [lines])
  return h('div', { className: 'fish-run-log' },
    h('section', { className: 'fish-terminal-card' },
      h('div', { className: 'fish-terminal-head' },
        h('span', { className: 'fish-terminal-live' }, h('i', { 'aria-hidden': true }), 'LIVE'),
        h('span', { className: 'fish-terminal-title' }, 'QQ 互通 · 实时日志'),
        h('span', { className: 'fish-terminal-count' }, lines.length + ' 行')),
      h('div', { ref: terminalRef, className: 'fish-terminal', role: 'log', 'aria-label': 'QQ 互通实时日志', 'aria-live': 'polite' },
        lines.length
          ? lines.map((line, i) => h('div', { className: 'fish-terminal-line', key: i },
            h('span', { className: 'fish-terminal-time' }, line.时间),
            h('span', { className: 'fish-terminal-prompt', 'aria-hidden': true }, '›'),
            h('span', { className: 'fish-terminal-text' }, line.文本)))
          : h('div', { className: 'fish-terminal-empty' }, error || '等待日志…')),
      error && lines.length ? h('p', { className: 'fish-terminal-error', role: 'status' }, '日志连接中断：' + error) : null))
}

const LOCATION_KEY = 'big-fish:last-location-v2'
function readSavedLocation() {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return null
    const raw = window.localStorage.getItem(LOCATION_KEY)
    if (!raw) return null
    const saved = JSON.parse(raw)
    if (!saved || !Number.isInteger(saved.tab) || saved.tab < 0 || saved.tab >= tabs.length) return null
    const defaults = { 1: '连接', 2: '记忆库', 3: 'mood' }
    const sub = { ...defaults }
    for (const id of [1, 2, 3]) {
      const key = saved.subpage && saved.subpage[id]
      if (typeof key === 'string' && (submenus[id] || []).some(pair => Array.isArray(pair) && pair[0] === key)) sub[id] = key
    }
    const detail = saved.memoryDetail === true && ['记忆与档案', '语义索引'].includes(saved.memoryPage)
    return { tab: saved.tab, subpage: sub, memoryDetail: detail, memoryPage: detail ? saved.memoryPage : '记忆与档案' }
  } catch (error) { return null }
}

function Page() {
  const savedLocation = readSavedLocation()
  const initialTab = openUpdatesRequested ? UPDATES_TAB : (savedLocation?.tab ?? 0)
  const [tab, setTab] = React.useState(initialTab)
  const [visited, setVisited] = React.useState([initialTab])
  const [subpage, setSubpage] = React.useState(savedLocation?.subpage || { 1: '连接', 2: '记忆库', 3: 'mood' })
  const [memoryDetail, setMemoryDetail] = React.useState(Boolean(savedLocation?.memoryDetail))
  const [memoryPage, setMemoryPage] = React.useState(savedLocation?.memoryPage || '记忆与档案')
  const [qqStatus, setQQStatus] = React.useState(null)
  const [leavePrompt, setLeavePrompt] = React.useState(false)
  const [leaveBusy, setLeaveBusy] = React.useState(false)
  const [leaveError, setLeaveError] = React.useState('')
  const [versionInfo, setVersionInfo] = React.useState(null)
  const navRef = React.useRef(null), workspaceRef = React.useRef(null), contentRef = React.useRef(null), highlightRef = React.useRef(null)
  const enterAnimation = React.useRef(null)
  const pendingLeave = React.useRef(null)
  const qqGuard = React.useRef({ dirty: false, save: null })
  const speakGuard = React.useRef({ dirty: false, save: null })
  const navigateRef = React.useRef(null)
  const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  // 立即换内容，再由 useLayoutEffect 做一次淡入；不再先把旧内容淡成空白。
  const animateChange = change => change()
  const activeGuard = () => tab === 1 ? qqGuard.current : tab === 4 ? speakGuard.current : null
  const requestLeave = action => {
    const guard = activeGuard()
    if (guard?.dirty && typeof guard.save === 'function') {
      pendingLeave.current = action
      setLeaveError('')
      setLeavePrompt(true)
      return
    }
    action()
  }
  const navigate = id => {
    if (id === tab) return
    requestLeave(() => animateChange(() => { setTab(id); setVisited(old => old.includes(id) ? old : [...old, id]) }))
  }
  const selectSubpage = (id, key) => {
    const current = id === 2 && memoryDetail ? memoryPage : subpage[id]
    if (id === tab && key === current) return
    requestLeave(() => animateChange(() => {
      setTab(id); setVisited(old => old.includes(id) ? old : [...old, id])
      if (id === 2 && memoryDetail) {
        if (key === 'back') setMemoryDetail(false)
        else setMemoryPage(key)
      } else setSubpage(old => ({ ...old, [id]: key }))
    }))
  }
  const flashJumpTarget = (id) => {
    let tries = 0
    const tick = () => {
      const el = typeof document !== 'undefined' ? document.getElementById(id) : null
      if (el && el.getClientRects().length) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        el.classList.remove('fish-jump-flash')
        void el.offsetWidth
        el.classList.add('fish-jump-flash')
        setTimeout(() => el.classList.remove('fish-jump-flash'), 1500)
        return
      }
      if (++tries < 50) setTimeout(tick, 80)
    }
    setTimeout(tick, 50)
  }
  const openFileManager = () => {
    navigate(FILE_MANAGER_TAB)
    flashJumpTarget('fish-sticker-files-card')
  }
  const closeLeave = () => {
    if (leaveBusy) return
    pendingLeave.current = null
    setLeavePrompt(false)
    setLeaveError('')
  }
  const skipLeave = () => {
    if (leaveBusy) return
    const action = pendingLeave.current
    pendingLeave.current = null
    setLeavePrompt(false)
    setLeaveError('')
    action?.()
  }
  const confirmLeave = async () => {
    if (leaveBusy) return
    const guard = activeGuard()
    if (!guard?.save) { skipLeave(); return }
    setLeaveBusy(true)
    setLeaveError('')
    try {
      const saved = await guard.save()
      if (saved === false) { setLeaveError('保存失败，请检查设置后再试。'); return }
      const action = pendingLeave.current
      pendingLeave.current = null
      setLeavePrompt(false)
      setLeaveError('')
      action?.()
    } catch (e) {
      setLeaveError('保存失败：' + ((e && e.message) || e))
    } finally {
      setLeaveBusy(false)
    }
  }
  navigateRef.current = navigate
  React.useEffect(() => {
    let active = true
    const loadVersion = () => request('/dsh-big-flsh-aio/version')
      .then(info => { if (active && info && info.version) setVersionInfo(info) })
      .catch(() => {})
    void loadVersion()
    const onFocus = () => { void loadVersion() }
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') window.addEventListener('focus', onFocus)
    const timer = setInterval(loadVersion, 30000)
    return () => {
      active = false
      clearInterval(timer)
      if (typeof window !== 'undefined' && typeof window.removeEventListener === 'function') window.removeEventListener('focus', onFocus)
    }
  }, [])
  React.useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(LOCATION_KEY, JSON.stringify({ tab, subpage, memoryDetail, memoryPage }))
      }
    } catch (error) {}
  }, [tab, subpage, memoryDetail, memoryPage])
  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') return undefined
    const onBeforeUnload = (event) => {
      const dirty = Boolean(qqGuard.current?.dirty || speakGuard.current?.dirty)
      if (!dirty) return undefined
      event.preventDefault()
      event.returnValue = '当前配置未保存，是否刷新？'
      return event.returnValue
    }
    window.addEventListener('beforeunload', onBeforeUnload)
    return () => window.removeEventListener('beforeunload', onBeforeUnload)
  }, [tab])
  React.useEffect(() => {
    openUpdatesRequested = false
    showUpdates = () => navigateRef.current?.(UPDATES_TAB)
    return () => { showUpdates = null; enterAnimation.current?.cancel() }
  }, [])
  React.useEffect(() => {
    let active = true
    const refresh = () => request('/dsh-qq-bridge/state').then(s => { if (active) setQQStatus(s.NapCat状态) }).catch(() => { if (active) setQQStatus({ 错: '无法读取连接状态' }) })
    void refresh()
    const timer = setInterval(refresh, 15000)
    return () => { active = false; clearInterval(timer) }
  }, [])
  React.useLayoutEffect(() => {
    const nav = navRef.current, highlight = highlightRef.current
    if (!nav || !highlight) return
    const update = () => {
      const selected = nav.querySelector('[role=tab][aria-selected=true]')
      if (selected) { highlight.style.transform = 'translateY(' + selected.offsetTop + 'px)'; highlight.style.height = selected.offsetHeight + 'px' }
    }
    update()
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(update); observer.observe(nav)
    return () => observer.disconnect()
  }, [tab, memoryDetail])
  React.useLayoutEffect(() => {
    const node = contentRef.current
    if (!node) return
    if (workspaceRef.current) workspaceRef.current.scrollTop = 0
    if (reducedMotion()) return
    enterAnimation.current?.cancel()
    if (node.animate) enterAnimation.current = node.animate([{ opacity: .35, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 260, easing: 'cubic-bezier(.22,1,.36,1)' })
    return () => enterAnimation.current?.cancel()
  }, [tab, subpage, memoryPage, memoryDetail])
  const render = [
    () => h(Overview, { navigate, notify: fishNotify }),
    () => h(QQ, { page: subpage[1], onPageChange: key => selectSubpage(1, key), guard: qqGuard, notify: fishNotify, help: fishShowHelp, hideHelp: fishHideHelp, laterHideHelp: fishScheduleHelpHide, confirm: fishAskConfirm, editRole: fishAskText, openRoleWriter: fishOpenRoleWriter, openFileManager }),
    () => h(Memory, { page: subpage[2], onPageChange: key => selectSubpage(2, key), detailPage: memoryPage, onDetailPageChange: setMemoryPage, detailOpen: memoryDetail, onDetailChange: setMemoryDetail, notify: fishNotify, historyImport: subpage[2] === '历史导入' ? h(QQ, { page: '历史导入', onPageChange: () => {}, embedded: true, notify: fishNotify }) : null }),
    () => h(Mood, { page: subpage[3], onPageChange: key => selectSubpage(3, key), notify: fishNotify }),
    () => h(Speak, { guard: speakGuard, notify: fishNotify }), () => h(FileManager, { notify: fishNotify }), () => h(RunLog, { notify: fishNotify }), () => h(Updates, { notify: fishNotify }),
  ]
  const connected = Boolean(qqStatus?.用户 && !qqStatus?.错)
  const connection = !qqStatus ? '正在读取 QQ 连接…' : qqStatus?.错 ? 'QQ 连接读取失败' : connected ? 'QQ 已连接 · ' + (qqStatus.昵称 || '伙伴') : 'QQ 未连接'
  return h('div', { className: 'big-fish' }, h('style', null, css),
    h('div', { className: 'fish-frame' },
      leavePrompt ? h('div', { className: 'fish-modal' },
        h('div', {
          className: 'fish-modal-card', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'fish-leave-title', 'aria-describedby': 'fish-leave-desc',
          onKeyDown: e => { if (e.key === 'Escape') closeLeave() },
        },
          h('span', { className: 'fish-kicker' }, 'UNSAVED · 未保存'),
          h('h2', { id: 'fish-leave-title' }, '要先保存再切换吗？'),
          h('p', { id: 'fish-leave-desc', className: 'fish-modal-desc' }, '当前页签还有未保存的设置。保存并切换会立即生效；不保存切换会保留草稿，下次回来还能继续改。'),
          leaveError ? h('p', { className: 'fish-modal-error', role: 'alert' }, leaveError) : null,
          h('div', { className: 'fish-modal-actions' },
            h('button', { type: 'button', className: 'fish-button fish-primary', autoFocus: true, disabled: leaveBusy, onClick: confirmLeave }, leaveBusy ? '保存中…' : '保存并切换'),
            h('button', { type: 'button', className: 'fish-button', disabled: leaveBusy, onClick: skipLeave }, '不保存切换'),
            h('button', { type: 'button', className: 'fish-button fish-modal-cancel', disabled: leaveBusy, onClick: closeLeave }, '取消')))) : null,
      h(FishTextHost),
      h(FishRoleWriterHost),
      h(FishHelpHost),
      h(FishConfirmHost),
      h(FishSelectLayer),
      h('aside', { className: 'fish-binder' },
        h('div', { className: 'fish-rings', 'aria-hidden': true }, ...[0, 1, 2, 3, 4, 5, 6].map(i => h('span', { key: i }))),
        h('header', { className: 'fish-brand' },
          h('span', { className: 'fish-logo' }, h(FishIcon, { size: 30 })),
          h('span', { className: 'fish-brand-text' },
            h('span', { className: 'fish-brand-name' }, '大肥鱼'),
            h('span', { className: 'fish-brand-sub' }, 'QQ陪伴手帐')),
          h('span', { className: 'fish-version-pin', title: '项目 v' + (versionInfo?.version || META.version) + ' · 仓库 v' + (versionInfo?.repositoryVersion || META.repositoryVersion) }, 'v' + (versionInfo?.version || META.version))),
        h('nav', { ref: navRef, className: 'fish-nav', 'aria-label': '大肥鱼功能', role: 'tablist', 'aria-orientation': 'vertical' },
          h('span', { ref: highlightRef, className: 'fish-nav-highlight', 'aria-hidden': true }),
          ...tabs.map((label, id) => {
            const items = id === 2 && memoryDetail ? [['记忆与档案', '记忆与档案'], ['语义索引', '语义索引'], ['back', '返回记忆库']] : submenus[id]
            const selected = id === 2 && memoryDetail ? memoryPage : subpage[id]
            return h('div', { key: label, className: 'fish-nav-group' },
              h('button', {
                type: 'button', role: 'tab', id: 'fish-tab-' + id, 'aria-label': label, 'aria-selected': tab === id, 'aria-controls': 'fish-panel-' + id,
                tabIndex: tab === id ? 0 : -1, className: 'fish-tab', onClick: () => navigate(id), onKeyDown: e => {
                  const next = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? (id + 1) % tabs.length : (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? (id + tabs.length - 1) % tabs.length : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : null
                  if (next !== null) { e.preventDefault(); navigate(next); e.currentTarget.closest('[role=tablist]').querySelectorAll('[role=tab]')[next].focus() }
                },
              }, h('span', { className: 'fish-tab-icon', 'aria-hidden': true }, h(Glyph, { name: TAB_ICONS[id], size: 19 })), h('span', { className: 'fish-tab-label' }, label), h('span', { className: 'fish-tab-no', 'aria-hidden': true }, String(id + 1).padStart(2, '0'))),
              items && tab === id ? h('div', { className: 'fish-submenu', role: 'group', 'aria-label': label + '子菜单' },
                ...items.map(([key, name]) => h('button', { key, type: 'button', 'aria-current': selected === key ? 'page' : undefined, onClick: () => selectSubpage(id, key) }, name))) : null)
          })),
        h('div', { className: 'fish-binder-foot' },
          h('figure', { className: 'fish-sidebar-scene', 'aria-hidden': true }, h('img', { src: '/dsh-feiyu-mood/sticker-book.png', alt: '', width: 1254, height: 1254, decoding: 'async' })),
          h('div', { className: 'fish-sidebar-note', role: 'status', title: qqStatus?.错 || connection },
            h('span', { className: 'fish-connection-dot', 'data-connected': connected }), h('span', null, connection)))),
      h('main', { className: 'fish-workspace' },
        h('div', { className: 'fish-paper' },
          h('span', { className: 'fish-tape fish-tape-corner fish-tape-left', 'aria-hidden': true }),
          h('span', { className: 'fish-tape fish-tape-corner fish-tape-right', 'aria-hidden': true }),
          h('span', { className: 'fish-fade fish-fade-top', 'aria-hidden': true }),
          h('span', { className: 'fish-fade fish-fade-bottom', 'aria-hidden': true }),
          h('div', { ref: workspaceRef, className: 'fish-scroll' },
            h('div', { ref: contentRef, className: 'fish-content' + (tab === 0 ? ' fish-overview-content' : ' fish-flat') },
              tab === 0 ? null : h('header', { className: 'fish-page-head' },
                h('div', { className: 'fish-page-head-copy' },
                  h('span', { className: 'fish-kicker' }, 'BIG FISH · 第 ' + String(tab + 1).padStart(2, '0') + ' 页'),
                  h('h1', null, tabs[tab]),
                  h('p', { className: 'fish-page-desc' }, DESCRIPTIONS[tab])),
                h('div', { className: 'fish-page-stamp', 'aria-hidden': true },
                  h(Glyph, { name: TAB_ICONS[tab], size: 30 }),
                  h('span', { className: 'fish-page-stamp-no' }, String(tab + 1).padStart(2, '0')),
                  h('span', { className: 'fish-page-stamp-label' }, TAB_STAMPS[tab]))),
              ...visited.map(id => h('section', { key: id, id: 'fish-panel-' + id, role: 'tabpanel', 'aria-labelledby': 'fish-tab-' + id, className: 'fish-panel', hidden: tab !== id }, render[id]()))))))))
}


return {
  inject: ['slots'],
  apply(ctx) {
    const slots = ctx.get('slots')
    if (!slots) return
    重开面板 = () => {
      try {
        const layout = ctx.get('layout')
        if (!layout || typeof layout.selectPanel !== 'function') return false
        layout.selectPanel(PANEL_ID)
        return true
      } catch { return false }
    }
    slots.inject('sidebar.panellist', () => slots.register({ name: 'sidebar.panellist', id: PANEL_ID, order: 20, label: () => '大肥鱼' }, FishIcon))
    slots.inject('main', () => {
      slots.register({ name: 'main', key: PANEL_ID }, Page)
      if (!需要更新后重开()) return
      // 更新重载后 layout/面板注册可能比 apply 晚一点就绪，补两次重试。
      const 打开 = () => { if (重开面板?.()) 清除更新后重开() }
      打开()
      if (typeof setTimeout === 'function') {
        setTimeout(打开, 400)
        setTimeout(打开, 1500)
      }
    })
    slots.inject('shell.overlay', () => slots.register({ name: 'shell.overlay', id: 'big-flsh-update-notice' }, () => h(React.Fragment, null,
      h(NotificationHost),
      h(UpdateNotifier, { open: () => {
        openUpdatesRequested = true
        ctx.get('layout')?.selectPanel(PANEL_ID)
        showUpdates?.()
      } }))))
  },
}

} });
