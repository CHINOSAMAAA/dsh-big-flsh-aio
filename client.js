// 自动生成：修改 src/panel.js 或 modules/*/lib/client.js 后运行 npm run build。
window.__ModuleLoader__.load({ id: "dsh-big-flsh-aio", factory(require) {
const FISH_THEME_CSS = "/* 大肥鱼 · scoped design tokens. DSH owns the body attribute. */\n.big-fish,.big-fish-notice{\n --fish-bg:#edf3ff;--fish-surface:#f8fbff;--fish-soft:#e8efff;--fish-hover:#dce7ff;--fish-text:#172d69;--fish-muted:#455b85;--fish-border:#c3d3f4;--fish-line:#d6e2f8;--fish-accent:#617bd0;--fish-action:#3e5cb0;--fish-on-accent:#fff;--fish-accent-soft:#dce6ff;--fish-success:#246b57;--fish-warning:#89571c;--fish-danger:#ae3f50;--fish-info:#3e5cb0;--fish-rim:#ffffffdf;--fish-edge:#b3c7f1;--fish-bottom:#cfddfa;--fish-panel:linear-gradient(155deg,#ffffff 0%,#f4f7ff 45%,#e8efff 100%);--fish-shell-fill:linear-gradient(155deg,#f8fbff,#edf3ff 60%,#e6eeff);--fish-control-fill:linear-gradient(180deg,#ffffff,#e4edff);--fish-inset:inset 0 2px 4px #294a7e14;--fish-small-shadow:inset 0 1px 0 var(--fish-rim),0 2px 0 var(--fish-edge),0 4px 8px #345c9c12;--fish-shadow:inset 0 2px 0 var(--fish-rim),inset 0 -3px 0 var(--fish-bottom),0 3px 0 var(--fish-edge),0 10px 24px #294b8714;--fish-pink:#d77497;--fish-decor:#91ace7;--fish-foam:#ffffffc9;--fish-workspace:#ffffffc9;--fish-wave:#c2d5ff;--fish-wave-back:#dce7ff;--fish-control-border:#7188b8;\n --fish-title:var(--fish-font);--fish-font:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif;--fish-body:16px;--fish-small:14px;--fish-label:14px;--fish-radius:24px;--fish-radius-sm:10px;--fish-radius-mid:16px;--fish-gap:24px;--fish-motion:180ms;\n --dsw-alias-bg-base:var(--fish-bg);--dsw-alias-bg-layer-1:var(--fish-surface);--dsw-alias-bg-layer-2:var(--fish-soft);--dsw-alias-label-primary:var(--fish-text);--dsw-alias-label-secondary:var(--fish-muted);--dsw-alias-label-tertiary:var(--fish-muted);--dsw-alias-border-l1:var(--fish-line);--dsw-alias-border-l2:var(--fish-border);--dsw-alias-state-business-primary:var(--fish-action);--dsw-alias-interactive-bg-hover:var(--fish-hover);\n color-scheme:light;color:var(--fish-text);font:var(--fish-body)/1.75 var(--fish-font)\n}\nbody[data-ds-dark-theme] .big-fish,body[data-ds-dark-theme] .big-fish-notice{\n --fish-bg:#101a32;--fish-surface:#182741;--fish-soft:#1d2f50;--fish-hover:#293f66;--fish-text:#e2ecff;--fish-muted:#b0c1e0;--fish-border:#344a70;--fish-line:#2d4264;--fish-accent:#a6bbff;--fish-action:#a6bbff;--fish-on-accent:#142442;--fish-accent-soft:#2c426c;--fish-success:#93d1bb;--fish-warning:#eac28c;--fish-danger:#ffacbb;--fish-info:#a6bbff;--fish-rim:#587aaa66;--fish-edge:#091426;--fish-bottom:#10213d;--fish-panel:linear-gradient(155deg,#243757 0%,#1b2c48 50%,#16253f 100%);--fish-shell-fill:linear-gradient(155deg,#1a2b49,#14213a 60%,#111e35);--fish-control-fill:linear-gradient(180deg,#2b4267,#1c304f);--fish-inset:inset 0 2px 4px #030b1b50;--fish-small-shadow:inset 0 1px 0 var(--fish-rim),0 2px 0 var(--fish-edge),0 4px 8px #030b1b33;--fish-shadow:inset 0 2px 0 var(--fish-rim),inset 0 -3px 0 var(--fish-bottom),0 3px 0 var(--fish-edge),0 10px 24px #03091555;--fish-pink:#efa2bf;--fish-decor:#587aaa;--fish-foam:#9dc0ff40;--fish-workspace:#14213a;--fish-wave:#233d65;--fish-wave-back:#1d3254;--fish-control-border:#718bb7;color-scheme:dark\n}\n.big-fish{box-sizing:border-box;container-type:inline-size;width:100%;height:100%;flex:1;min-width:0;min-height:0;overflow:auto;background:linear-gradient(145deg,var(--fish-soft),var(--fish-bg) 48%,var(--fish-soft)),var(--fish-bg);padding:calc(16px + var(--dsh-frame-top-clearance,0px)) 16px 16px}\n.big-fish *,.big-fish-notice *{box-sizing:border-box}\n.big-fish [hidden]:not([hidden=\"until-found\"]){display:none!important}\n.big-fish .fish-shell{display:grid;grid-template-columns:192px minmax(0,1fr);gap:16px;min-height:100%;max-width:1600px;margin:auto;align-items:start}\n.big-fish .fish-sidebar{padding:28px 12px 20px;background:var(--fish-shell-fill);border:1px solid var(--fish-border);border-radius:var(--fish-radius);box-shadow:var(--fish-shadow);display:flex;flex-direction:column;gap:20px;min-height:calc(100dvh - 104px - var(--dsh-frame-top-clearance,0px));position:sticky;top:var(--dsh-frame-top-clearance,0px)}\n.big-fish .fish-brand{display:flex;align-items:center;gap:8px;padding:0 4px;color:var(--fish-text)}\n.big-fish .fish-brand-name{font:700 24px/1.4 var(--fish-title)}\n.big-fish .fish-logo{color:var(--fish-accent);display:flex;flex:none}\n.big-fish .fish-nav{display:flex;flex-direction:column;gap:8px}\n.big-fish .fish-nav button{display:flex;align-items:center;gap:12px;width:100%;border:1px solid transparent;border-radius:14px;background:transparent;color:var(--fish-text);padding:12px;text-align:left;white-space:nowrap}\n.big-fish .fish-nav button[aria-selected=true]{background:var(--fish-accent-soft);border-color:var(--fish-border);color:var(--fish-text);font-weight:700}\n.big-fish .fish-sidebar-note{margin-top:0;padding:0 8px;font-size:12px;color:var(--fish-muted)}\n.big-fish .fish-workspace{min-width:0;padding:24px;position:relative;isolation:isolate;border:1px solid var(--fish-border);border-radius:var(--fish-radius);background:var(--fish-shell-fill);box-shadow:var(--fish-shadow)}\n.big-fish .fish-page-header{position:relative;isolation:isolate;display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:20px;border-bottom:1px solid var(--fish-line);padding-bottom:28px}\n.big-fish h1{font:700 clamp(26px,2.8cqi,32px)/1.4 var(--fish-title);letter-spacing:0;margin:0}\n.big-fish h2{font:700 20px/1.4 var(--fish-title);letter-spacing:0;margin:0 0 8px}\n.big-fish h3{font-size:16px;line-height:1.7;margin:0 0 8px}\n.big-fish p{margin:8px 0;max-width:70ch;overflow-wrap:anywhere}\n.big-fish .fish-muted{color:var(--fish-muted);font-size:var(--fish-small)}\n.big-fish .fish-icon,.big-fish-notice .fish-icon{width:20px;height:20px;flex:none;display:inline-block;vertical-align:middle}\n.big-fish button,.big-fish input,.big-fish select,.big-fish textarea,.big-fish-notice button{font-family:var(--fish-font);font-size:var(--fish-label);max-width:100%;line-height:1.6}\n.big-fish button,.big-fish-notice button{cursor:pointer;letter-spacing:.02em;transition:box-shadow var(--fish-motion),transform var(--fish-motion);white-space:normal;box-shadow:var(--fish-small-shadow)}\n.big-fish button:not([role=tab]),.big-fish-notice button{min-height:40px}\n.big-fish input:not([type=checkbox]):not([type=radio]):not([type=range]),.big-fish select,.big-fish textarea{border:1px solid var(--fish-control-border);border-radius:var(--fish-radius-sm);padding:8px 12px;background:var(--fish-surface);color:var(--fish-text);min-width:0;box-shadow:var(--fish-inset)}\n.big-fish input[type=checkbox],.big-fish input[type=radio]{width:18px;height:18px;accent-color:var(--fish-action);vertical-align:middle;flex:none}\n.big-fish input[type=range],.big-fish progress{accent-color:var(--fish-action);max-width:100%}\n.big-fish select option{background:var(--fish-surface);color:var(--fish-text)}\n.big-fish textarea{resize:vertical;overflow-wrap:anywhere}\n.big-fish :disabled,.big-fish-notice :disabled{cursor:not-allowed;opacity:.55}\n.big-fish :is(button,a,input,select,textarea,summary,[tabindex]):focus-visible,.big-fish-notice button:focus-visible{outline:2px solid var(--fish-accent);outline-offset:3px}\n.big-fish .fish-button,.big-fish-notice button{border:1px solid var(--fish-border);border-radius:14px;padding:8px 16px;background:var(--fish-control-fill);color:var(--fish-text)}\n.big-fish .fish-primary{background:var(--fish-action);color:var(--fish-on-accent);border-color:var(--fish-action)}\n.big-fish .fish-badge{display:inline-flex;align-items:center;gap:8px;padding:4px 12px;border:1px solid var(--fish-border);border-radius:24px;background:var(--fish-control-fill);box-shadow:var(--fish-small-shadow);color:var(--fish-action);font-size:12px;white-space:nowrap}\n.big-fish .fish-ocean-intro{position:relative;isolation:isolate;display:grid;grid-template-columns:minmax(0,1fr) 300px 140px;grid-template-rows:auto 1fr;column-gap:16px;min-height:320px;margin-bottom:16px;padding:4px 8px 16px}\n.big-fish .fish-overview-header{grid-column:1;grid-row:1;min-width:0}\n.big-fish .fish-overview-header p{margin-bottom:12px}\n.big-fish .fish-intro-status{grid-column:3;grid-row:1;align-self:start;justify-self:end;margin-top:8px}\n.big-fish .fish-hero-copy{grid-column:1;grid-row:2;align-self:center;min-width:0;position:relative;z-index:1;padding:12px 0}\n.big-fish .fish-hero-copy h2{font:700 clamp(26px,2.6cqi,36px)/1.4 var(--fish-title);margin:12px 0 0;text-wrap:balance;letter-spacing:0}\n.big-fish .fish-love-line{display:block;width:100%;max-width:600px;height:28px;fill:none;stroke:var(--fish-pink);stroke-width:1.8;pointer-events:none}\n.big-fish .fish-welcome{grid-column:2;grid-row:1/3;align-self:center;display:grid;place-items:center;min-width:0;margin:0;pointer-events:none}\n.big-fish .fish-welcome img{display:block;width:300px;max-width:100%;height:auto;object-fit:contain;filter:drop-shadow(0 8px 8px #294b8714)}\n.big-fish .fish-intro-tools{grid-column:3;grid-row:2;align-self:center;justify-self:end}\n.big-fish .fish-intro-tools button{white-space:nowrap}\n.big-fish .fish-waves{position:absolute;bottom:0;left:0;width:100%;height:80px;z-index:-1;pointer-events:none}\n.big-fish .fish-wave-back{fill:var(--fish-wave-back)}.big-fish .fish-wave-front{fill:var(--fish-wave)}.big-fish .fish-wave-foam{fill:none;stroke:var(--fish-foam);stroke-width:2}\n.big-fish .fish-ocean-intro>.fish-waves{height:180px;border-radius:0 0 20px 20px}\n.big-fish .fish-decoration{display:block;width:100px;height:84px;stroke:var(--fish-decor);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;pointer-events:none;flex:none}\n.big-fish .fish-decor-heart{stroke:var(--fish-pink)}.big-fish .fish-decor-star{fill:var(--fish-foam)}.big-fish .fish-decor-tail{fill:var(--fish-decor);stroke:none;opacity:.3}\n.big-fish .fish-decor-bubbles{stroke:var(--fish-foam);stroke-width:4;fill:var(--fish-wave-back)}\n.big-fish .fish-intro-bubbles{position:absolute;bottom:12px;right:12px;width:120px;height:100px;z-index:-1}\n.big-fish .fish-intro-stars{position:absolute;top:4px;right:440px;width:56px;height:48px;z-index:-1;opacity:.7}\n.big-fish .fish-eyebrow{font-size:12px;letter-spacing:.04em;color:var(--fish-action)}\n.big-fish .fish-sidebar-scene{position:relative;isolation:isolate;display:grid;place-items:center;margin:auto 0 0;min-height:208px;pointer-events:none}\n.big-fish .fish-sidebar-scene img{display:block;width:180px;max-width:100%;height:auto;align-self:end}\n.big-fish .fish-sidebar-scene>.fish-waves{height:180px;border-radius:0 0 16px 16px}\n.big-fish .fish-sidebar-scene>.fish-decoration{position:absolute;top:0;right:0;width:100px;height:84px;z-index:-1}\n.big-fish .fish-page-header>.fish-waves{height:56px;opacity:.65;border-radius:0 0 16px 16px}\n.big-fish .fish-page-header>.fish-decoration{position:absolute;right:176px;top:0;width:56px;height:48px;z-index:-1;opacity:.6}\n.big-fish .fish-stats{position:relative;isolation:isolate;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;border:1px solid var(--fish-border);border-radius:var(--fish-radius);background:var(--fish-panel);margin-bottom:24px;overflow:hidden;box-shadow:var(--fish-shadow)}\n.big-fish .fish-stats .fish-card{border:0;border-radius:0;background:none;padding:16px 24px;border-bottom:1px solid var(--fish-line);box-shadow:none}\n.big-fish .fish-value{font:700 26px/1.4 var(--fish-title);margin:4px 0;color:var(--fish-text)}\n.big-fish .fish-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}\n.big-fish .fish-card{min-width:0;padding:20px;border:1px solid var(--fish-border);border-radius:var(--fish-radius);background:var(--fish-panel);box-shadow:var(--fish-shadow)}\n.big-fish .fish-actions{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:16px}\n.big-fish .fish-start{padding:24px 0;margin-top:24px;border-top:1px solid var(--fish-border)}\n.big-fish .fish-table{border-collapse:collapse;width:100%;min-width:850px;font-size:14px}\n.big-fish .fish-table th,.big-fish .fish-table td{vertical-align:top;text-align:left;padding:16px;border-bottom:1px solid var(--fish-line)}\n.big-fish .fish-table th{font-weight:600;background:var(--fish-soft);color:var(--fish-muted)}\n.big-fish a{color:var(--fish-action);text-decoration:none;overflow-wrap:anywhere}\n.big-fish .fish-message{white-space:pre-wrap;overflow-wrap:anywhere;margin:12px 0;color:var(--fish-warning)}\n.big-fish .fish-footer{margin-top:40px;padding-top:16px;border-top:1px solid var(--fish-border);color:var(--fish-muted);font-size:12px}\n.big-fish .fish-module{min-width:0;overflow-wrap:anywhere}\n.big-fish .fish-section-title{font:600 20px/1.5 var(--fish-title)}\n.big-fish .fish-form-row{display:flex;flex-wrap:wrap;gap:16px;padding:12px 0;border-bottom:1px solid var(--fish-line);align-items:flex-start}\n.big-fish .fish-control{min-width:0;flex:1 1 260px}\n.big-fish .fish-form-label{flex:0 1 200px;font-weight:550}\n.big-fish .fish-subnav{display:flex;gap:8px;overflow-x:auto;flex-wrap:nowrap;padding:0 0 16px;margin-bottom:24px;border-bottom:1px solid var(--fish-border)}\n.big-fish .fish-subnav button{flex:none}\n.big-fish .fish-log{overflow-wrap:anywhere;white-space:pre-wrap}\n.big-fish .fish-diagnostics{margin-top:24px;color:var(--fish-muted);font-size:var(--fish-small);overflow-wrap:anywhere}\n.big-fish .fish-binding-row{display:grid;grid-template-columns:80px minmax(100px,1fr) minmax(120px,1.5fr) 44px 76px 60px;gap:8px;align-items:center;padding:8px 0}\n.big-fish .fish-schedule-row{display:grid;grid-template-columns:120px 140px minmax(60px,1fr) 60px;gap:8px;align-items:center;padding:8px 0}\n.big-fish .fish-memory .fish-record{padding:16px 0}\n.big-fish .fish-memory .fish-record-row{gap:12px;align-items:center;padding:8px 0}\n.big-fish .fish-memory .fish-record-note{padding:4px 0;color:var(--fish-muted);font-size:14px}\n.big-fish .fish-memory .fish-link{border:0;padding:4px 0;background:transparent;text-align:left;text-decoration:underline;text-underline-offset:4px}\n.big-fish .fish-memory details{border:1px solid var(--fish-border);border-radius:var(--fish-radius);padding:16px 20px;background:var(--fish-panel);box-shadow:var(--fish-shadow)}\n.big-fish summary{cursor:pointer;font-weight:600;min-height:40px}\n.big-fish .fish-embedding label{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin:16px 0}\n.big-fish .fish-embedding button{margin:4px 8px 4px 0;border:1px solid var(--fish-border);background:var(--fish-soft);color:var(--fish-text);border-radius:8px;padding:8px 12px}\n.big-fish .fish-dimensions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px 32px}\n.big-fish .fish-dimension-label{display:flex;justify-content:space-between;font-size:14px;margin-bottom:4px}\n.big-fish .fish-dimension-track{height:8px;background:var(--fish-line);border-radius:4px;overflow:hidden}\n.big-fish .fish-dimension-track span{display:block;height:100%;background:var(--fish-accent)}\n.big-fish-notice{position:fixed;right:20px;bottom:24px;z-index:1000;pointer-events:auto;max-width:min(420px,calc(100vw - 40px));padding:20px;border:1px solid var(--fish-border);border-radius:var(--fish-radius);background:var(--fish-panel);box-shadow:var(--fish-shadow)}\n@media(hover:hover){.big-fish button:not(:disabled):hover,.big-fish-notice button:not(:disabled):hover{transform:translateY(-1px);box-shadow:inset 0 1px 0 var(--fish-rim),0 3px 0 var(--fish-edge),0 6px 12px #294b8720}.big-fish .fish-nav button:hover{background:var(--fish-hover);color:var(--fish-text)}.big-fish a:hover{text-decoration:underline}}\n.big-fish button:not(:disabled):active,.big-fish-notice button:not(:disabled):active{transform:translateY(1px);box-shadow:var(--fish-inset)}\n.big-fish .fish-nav button{box-shadow:none}.big-fish .fish-nav button[aria-selected=true]{box-shadow:var(--fish-small-shadow);background:linear-gradient(180deg,var(--fish-accent-soft),var(--fish-hover))}\n@container(max-width:860px){.big-fish .fish-shell{grid-template-columns:minmax(0,1fr);gap:12px}.big-fish .fish-sidebar{padding:16px;gap:12px;min-height:0;position:static}.big-fish .fish-brand-name{font-size:20px}.big-fish .fish-nav{flex-direction:row;overflow-x:auto}.big-fish .fish-nav button{width:auto;flex:none;padding:10px 12px}.big-fish .fish-sidebar-note{display:none}.big-fish .fish-workspace{padding:24px}.big-fish .fish-page-header{gap:16px}.big-fish .fish-binding-row,.big-fish .fish-schedule-row{grid-template-columns:repeat(2,minmax(0,1fr));border-bottom:1px solid var(--fish-border)}.big-fish .fish-binding-head{display:none}}\n@container(max-width:520px){.big-fish .fish-workspace{padding:20px 16px}.big-fish .fish-sidebar{padding:16px}.big-fish .fish-page-header{align-items:flex-start;flex-direction:column;gap:12px;margin-bottom:16px}.big-fish .fish-stats{grid-template-columns:repeat(2,minmax(0,1fr))}.big-fish .fish-stats .fish-card{padding:16px 12px}.big-fish .fish-dimensions{grid-template-columns:1fr}.big-fish .fish-card{padding:20px}.big-fish .fish-form-label{flex-basis:100%}.big-fish button:not([role=tab]){min-height:44px}.big-fish .fish-value{font-size:24px}.big-fish .fish-nav{gap:4px}}\n@media(prefers-reduced-motion:reduce){.big-fish *,.big-fish-notice *{animation:none!important;transition:none!important;scroll-behavior:auto!important}}\n.big-fish .fish-library-row{background:var(--fish-panel);box-shadow:var(--fish-shadow);padding:20px;border:1px solid var(--fish-border);border-radius:var(--fish-radius-mid);margin:12px 0}\n.big-fish .fish-memory [role=button]{cursor:pointer}\n.big-fish .fish-memory [role=button]:hover{text-decoration:underline;text-underline-offset:4px}\n.big-fish .fish-qq .fish-subnav{flex-wrap:nowrap}\n\n.big-fish .fish-feature{position:relative;isolation:isolate;overflow:hidden;padding:20px 24px 24px}\n.big-fish .fish-feature-character{display:grid;grid-template-columns:minmax(0,1fr) 152px;gap:12px;align-items:center}\n.big-fish .fish-feature-copy{min-width:0;position:relative;z-index:1}.big-fish .fish-feature-copy h2{margin:8px 0}\n.big-fish .fish-feature-number{font-size:12px;padding:2px 12px;letter-spacing:.02em}\n.big-fish .fish-feature-sticker{margin:0;display:grid;place-items:center;min-width:0;align-self:end;pointer-events:none}\n.big-fish .fish-feature-sticker img{display:block;width:152px;max-width:100%;height:auto;object-fit:contain}\n.big-fish .fish-feature>.fish-waves{height:72px;opacity:.75}.big-fish .fish-feature-bubbles{position:absolute;bottom:20px;right:170px;z-index:-1;width:64px;height:56px;opacity:.65}\n.big-fish .fish-feature-light{display:grid;grid-template-columns:minmax(0,1fr) 76px;gap:12px;align-items:end}\n.big-fish .fish-feature-symbol{width:76px;height:64px;opacity:.8}\n.big-fish .fish-stats-tail{position:absolute;bottom:12px;right:16px;z-index:-1;width:72px;height:60px}\n.big-fish .fish-stats .fish-card:not(:nth-of-type(3n)){border-right:1px solid var(--fish-line)}.big-fish .fish-stats .fish-card:nth-last-of-type(-n+3){border-bottom:0}\n@container(max-width:1180px){.big-fish .fish-ocean-intro{grid-template-columns:minmax(0,1fr) 280px;grid-template-rows:auto auto auto;min-height:300px}.big-fish .fish-intro-status{grid-column:1;grid-row:2;justify-self:start;margin-top:0}.big-fish .fish-hero-copy{grid-row:3}.big-fish .fish-welcome{grid-row:1/4}.big-fish .fish-welcome img{width:280px}.big-fish .fish-intro-tools{grid-column:2;grid-row:4;justify-self:center}.big-fish .fish-intro-stars{right:250px}.big-fish .fish-feature-character{grid-template-columns:minmax(0,1fr) 130px;padding:20px;gap:8px}.big-fish .fish-feature-sticker img{width:130px}.big-fish .fish-feature-light{grid-template-columns:minmax(0,1fr) 52px}.big-fish .fish-feature-symbol{width:52px;height:52px}}\n@container(min-width:861px) and (max-width:1060px){.big-fish .fish-grid{grid-template-columns:1fr}.big-fish .fish-feature-character{grid-template-columns:minmax(0,1fr) 152px}.big-fish .fish-feature-sticker img{width:152px}}\n@container(max-width:860px){.big-fish .fish-sidebar-scene{display:none}.big-fish .fish-nav{padding-bottom:4px}.big-fish .fish-sidebar-note{display:block;margin:0;font-size:12px}.big-fish .fish-sidebar-note br{display:none}.big-fish .fish-sidebar-note{word-spacing:8px}}\n@container(max-width:680px){.big-fish .fish-grid{grid-template-columns:1fr}.big-fish .fish-ocean-intro{grid-template-columns:minmax(0,1fr) 180px;column-gap:8px}.big-fish .fish-welcome img{width:180px}.big-fish .fish-intro-stars{right:160px}.big-fish .fish-hero-copy h2{font-size:28px}.big-fish .fish-feature-character{grid-template-columns:minmax(0,1fr) 140px}.big-fish .fish-feature-sticker img{width:140px}}\n@container(max-width:520px){.big-fish .fish-ocean-intro{grid-template-columns:minmax(0,1fr) 120px;padding:0 0 20px;min-height:0}.big-fish .fish-welcome{grid-row:1/3}.big-fish .fish-welcome img{width:120px}.big-fish .fish-hero-copy{grid-column:1/-1;grid-row:3;padding-top:20px}.big-fish .fish-hero-copy h2{font-size:28px}.big-fish .fish-intro-tools{grid-column:1/-1;grid-row:4;justify-self:end}.big-fish .fish-intro-status{font-size:11px;padding:4px 8px}.big-fish .fish-overview-header p{font-size:14px}.big-fish .fish-feature-character{grid-template-columns:minmax(0,1fr) 96px;padding:20px 16px;gap:8px}.big-fish .fish-feature-sticker img{width:96px}.big-fish .fish-feature-copy .fish-actions{grid-column:1/-1}.big-fish .fish-feature-light{padding:20px 16px}.big-fish .fish-feature-bubbles{right:96px}.big-fish .fish-page-header>.fish-decoration{right:0}.big-fish .fish-stats .fish-card:not(:nth-of-type(3n)){border-right:0}.big-fish .fish-stats .fish-card:nth-of-type(odd){border-right:1px solid var(--fish-line)}.big-fish .fish-stats .fish-card:nth-last-of-type(-n+3){border-bottom:1px solid var(--fish-line)}.big-fish .fish-stats .fish-card:nth-last-of-type(-n+2){border-bottom:0}}\n@media(max-height:780px){.big-fish .fish-sidebar-scene{min-height:120px}.big-fish .fish-sidebar-scene img{width:120px}.big-fish .fish-sidebar-scene>.fish-waves{height:96px}}\n@media(max-height:640px){.big-fish .fish-sidebar-scene{display:none}}\n@media(prefers-reduced-motion:reduce){.big-fish button:not(:disabled):hover,.big-fish button:not(:disabled):active,.big-fish-notice button{transform:none}}\n\n/* 操作页使用平面材质；总览继续保留海洋插画与立体层次。 */\n.big-fish.fish-flat{--fish-panel:var(--fish-surface);--fish-shell-fill:var(--fish-surface);--fish-control-fill:var(--fish-surface);--fish-shadow:none;--fish-small-shadow:none;--fish-inset:none;--fish-radius:12px;--fish-radius-mid:10px;background:var(--fish-bg)}\n.big-fish.fish-flat .fish-sidebar,.big-fish.fish-flat .fish-workspace{box-shadow:none;border-radius:12px}\n.big-fish.fish-flat .fish-sidebar-scene{display:none}\n.big-fish.fish-flat .fish-sidebar-note{margin-top:auto}\n.big-fish.fish-flat .fish-nav button[aria-selected=true]{background:var(--fish-accent-soft);box-shadow:none}\n.big-fish.fish-flat button:not([role=switch]):hover{transform:none;box-shadow:none;background:var(--fish-hover);color:var(--fish-text)}\n.big-fish.fish-flat button:not([role=switch]):active{transform:none;box-shadow:none}\n.big-fish.fish-flat .fish-page-header{padding-bottom:24px;margin-bottom:24px}\n.big-fish.fish-flat .fish-card{border-radius:10px;box-shadow:none}\n.big-fish .fish-settings-stack{display:grid;grid-template-columns:minmax(0,1fr);gap:20px}\n.big-fish .fish-form-row{gap:12px 24px;padding:16px 0;margin-bottom:0!important;align-items:start}\n.big-fish .fish-form-row:last-child{border-bottom:0}\n.big-fish .fish-form-row .fish-form-label{flex:0 1 200px;padding-top:8px}\n.big-fish .fish-form-row .fish-control{flex:1 1 320px;max-width:100%}\n.big-fish .fish-form-row:has([role=switch])>.fish-form-label{padding-top:0}\n.big-fish .fish-subnav,.big-fish .fish-qq .fish-subnav{flex-wrap:wrap;overflow:visible;gap:8px}\n.big-fish .fish-subnav button{white-space:normal}\n.big-fish .fish-rule-section{border-top:1px solid var(--fish-border);margin-top:28px;padding-top:24px}\n.big-fish .fish-feed-result{white-space:pre-wrap;overflow-wrap:anywhere;font:14px/1.8 var(--fish-font);background:var(--fish-soft);padding:20px;border-radius:8px;max-height:480px;overflow:auto;margin-top:20px}\n.big-fish .fish-embedding{padding:24px 0;border-block:1px solid var(--fish-border)}\n.big-fish .fish-embedding label{display:grid!important;grid-template-columns:minmax(180px,1fr) minmax(100px,2fr);gap:12px;align-items:center;padding:8px 0}\n.big-fish .fish-embedding label:has([role=switch]){display:flex!important}\n.big-fish .fish-embedding input:not([role=switch]){width:100%!important}\n.big-fish.fish-flat .fish-memory .fish-library-row{border:0;border-bottom:1px solid var(--fish-border);border-radius:0;padding:20px 0;margin:0}\n.big-fish .fish-memory .fish-record:has(>label){display:flex;flex-wrap:wrap;gap:16px;align-items:end;padding:24px 0}\n.big-fish .fish-memory .fish-record>label{display:flex;flex-direction:column;gap:8px;flex:1 1 200px}\n.big-fish .fish-memory .fish-record>label input{width:100%!important}\n.big-fish .fish-memory .fish-record>div:first-child{flex-basis:100%}\n.big-fish .fish-memory .fish-record-row{row-gap:12px}\n.big-fish .fish-memory .fish-record-row>div:has(+div){min-width:0}\n.big-fish .fish-memory [role=button]{box-shadow:none}\n.big-fish .fish-binding-row{grid-template-columns:90px minmax(100px,1fr) minmax(120px,1.5fr) 56px 86px 64px;gap:12px;padding:16px 0}\n.big-fish .fish-schedule-row{grid-template-columns:minmax(120px,1fr) minmax(140px,1fr) 56px 70px;gap:16px;padding:16px 0;border-bottom:1px solid var(--fish-line)}\n/* Native checkbox switches preserve focus and keyboard behavior. */\n.big-fish input[role=switch],.big-fish button[role=switch]{appearance:none;-webkit-appearance:none;position:relative;display:inline-block;width:50px!important;min-width:50px!important;max-width:50px;height:30px!important;min-height:30px!important;flex:0 0 50px;border:0!important;border-radius:999px!important;background:#78869a!important;box-shadow:none!important;padding:0!important;margin:7px 0;vertical-align:middle;cursor:pointer;transition:background-color .2s;transform:none!important;font-size:0!important;color:transparent!important}\n.big-fish [role=switch]::before{content:'';position:absolute;top:3px;left:3px;width:24px;height:24px;border-radius:50%;background:#fff;box-shadow:0 1px 3px #0003;transition:transform .42s cubic-bezier(.34,1.56,.64,1),width .18s,border-radius .18s}\n.big-fish input[role=switch]:checked,.big-fish button[role=switch][aria-checked=true]{background:#248a50!important}\n.big-fish input[role=switch]:checked::before,.big-fish button[role=switch][aria-checked=true]::before{transform:translateX(20px)}\n.big-fish [role=switch]:not(:disabled):active::before{width:28px;border-radius:14px}\n.big-fish input[role=switch]:checked:active::before,.big-fish button[role=switch][aria-checked=true]:active::before{transform:translateX(16px)}\n@container(max-width:860px){.big-fish .fish-binding-row,.big-fish .fish-schedule-row{grid-template-columns:repeat(2,minmax(0,1fr))}.big-fish .fish-binding-head{display:none}}\n@container(max-width:520px){.big-fish .fish-form-row .fish-form-label{flex-basis:100%;padding-top:0}.big-fish .fish-embedding label{grid-template-columns:1fr}.big-fish .fish-subnav button{flex:1 1 auto}.big-fish .fish-feed-result{padding:12px}}\n.big-fish .fish-toolbar{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin:0 0 24px;padding:0 0 20px;border-bottom:1px solid var(--fish-border)}\n.big-fish .fish-test-action{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:24px}\n@container(max-width:860px){.big-fish.fish-flat .fish-sidebar-note{display:none}}\n@media(prefers-reduced-motion:reduce){.big-fish [role=switch]::before{transition:none!important}}\n";
const components = {};
const moduleLoader = { load({id, factory}) { components[id] = factory(require) } };
function FishStickers({ notify }) {
  const React = require('react'), h = React.createElement
  const [data, setData] = React.useState(null), [busy, setBusy] = React.useState(false), [error, setError] = React.useState('')
  const [bindings, setBindings] = React.useState([]), [scope, setScope] = React.useState(''), [query, setQuery] = React.useState(''), [category, setCategory] = React.useState('')
  const [analysisSession, setAnalysisSession] = React.useState(''), [visionProvider, setVisionProvider] = React.useState(''), [visionModel, setVisionModel] = React.useState('')
  const fileRef = React.useRef(null)
  const [file, setFile] = React.useState(null), [name, setName] = React.useState(''), [tags, setTags] = React.useState(''), [scenes, setScenes] = React.useState('')
  const base = '/dsh-qq-bridge/stickers'
  const load = async (path = '', body) => {
    const response = await fetch(base + path, { cache: 'no-store', ...(body === undefined ? {} : { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }) })
    const result = await response.json()
    if (!response.ok || !result.ok) throw new Error(result.说 || result.error || '表情库请求失败')
    setData(result); return result
  }
  React.useEffect(() => {
    load().catch(e => setError(e.message))
    fetch('/dsh-qq-bridge/state', { cache: 'no-store' }).then(r => r.json()).then(r => setBindings(r.配置?.绑定 || [])).catch(e => setError(e.message))
  }, [])
  React.useEffect(() => { if (data) { setAnalysisSession(data.settings.analysisSession || ''); setVisionProvider(data.settings.visionProvider || ''); setVisionModel(data.settings.visionModel || '') } }, [data?.settings.analysisSession, data?.settings.visionProvider, data?.settings.visionModel])
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
  const upload = async () => {
    if (!file || file.size > 8 * 1048576) { setError('请选择不超过 8 MB 的图片原文件'); return }
    setBusy(true)
    try {
      const base64 = await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result).split(',')[1]); reader.onerror = () => reject(new Error('读取图片失败')); reader.readAsDataURL(file) })
      if (await act('/import', { base64, name: name || file.name, tags, scenes, scope })) { setFile(null); if (fileRef.current) fileRef.current.value = ''; setName(''); setTags(''); setScenes('') }
    } catch (e) { setError(e.message) } finally { setBusy(false) }
  }
  const sw = (key, label, note) => h('div', { className: 'fish-form-row' }, h('div', { className: 'fish-form-label' }, label), h('div', { className: 'fish-control' },
    h('input', { type: 'checkbox', role: 'switch', 'aria-label': label, checked: !!data.settings[key], disabled: busy, onChange: async e => { const value = e.target.checked, previous = data.settings[key]; setData(old => ({ ...old, settings: { ...old.settings, [key]: value } })); if (!await act('/settings', { [key]: value })) setData(old => ({ ...old, settings: { ...old.settings, [key]: previous } })) } }), h('p', { className: 'fish-muted' }, note)))
  if (!data) return h('p', { role: 'status' }, error || '正在读取表情库…')
  return h('div', { className: 'fish-settings-stack fish-stickers' },
    h('style', null, `
.big-fish .fish-stickers label{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin:12px 0}
.big-fish .fish-stickers .fish-form-row{display:flex;flex-wrap:wrap;align-items:center;gap:12px;padding:12px 0}
.big-fish .fish-stickers label>input:not([role=switch]),.big-fish .fish-stickers label>select{flex:1 1 240px;min-width:0;max-width:100%}
.big-fish .fish-stickers article{display:grid;gap:12px;padding:20px 16px;border-top:1px solid var(--fish-border);margin-top:16px}
.big-fish .fish-stickers article label{margin:0}
.big-fish .fish-stickers article>button{justify-self:start}
.big-fish .fish-stickers .fish-actions{display:flex;flex-wrap:wrap;gap:12px}
`),
    h('section', { className: 'fish-card' }, h('h2', null, '表情包自动化'),
      sw('autoSend', '根据语境自动发送表情', '每轮最多附一张，已有图片时不追加。使用目标会话模型判断是否合适，会产生模型用量；没有合适素材或判断失败时不发图。遵守 QQ 试运行、收发开关和素材来源隔离。'),
      sw('autoCollect', '自动收藏收到的表情', '从已启用绑定的聊天中自动收藏 QQ 大表情、表情图片和 GIF；无需触发模型回复，原文件按来源隔离与内容去重。不会重新扫描启动前的历史记录。'),
      sw('collectAllImages', '同时收藏普通图片', '默认关闭，避免把普通照片收进素材库；只对自动收藏生效。'),
      sw('autoTag', '自动给新表情打标签', '导入或收藏新素材后，通过图片识别生成情绪、动作、可见文字标签及使用场景。使用支持图片的模型，会发送图片并产生用量；已有手动标签不会被覆盖，失败可重试。'),
      sw('autoClassify', '自动分类表情包', '按视觉识别结果及标签、场景自动归类。开启时整理现有素材；新增、标签生成和描述修改时继续归类。手动选定的分类保持不变，不能判断的进入未分类。'),
      data.collection?.error ? h('p', { role: 'status', className: 'fish-message' }, data.collection.error) : null,
      h('label', null, '自动发送冷却（秒） ', h('input', { type: 'number', min: 10, max: 86400, 'aria-label': '自动发送冷却', defaultValue: data.settings.cooldownSeconds, disabled: busy, onBlur: e => act('/settings', { cooldownSeconds: Number(e.target.value) }) }))),
    h('section', { className: 'fish-card' }, h('h2', null, '视觉标注模型'),
      h('label', { className: 'fish-form-row' }, '共享素材标注会话 ', h('select', { 'aria-label': '标注会话', value: analysisSession, onChange: e => setAnalysisSession(e.target.value) }, h('option', {value:''}, '请选择绑定会话'), ...bindings.map(b => h('option', {key:b.会话,value:b.会话}, b.类型+' '+b.号码)))),
      h('label', { className: 'fish-form-row' }, '视觉服务商 ID ', h('input', { 'aria-label': '视觉服务商 ID', value: visionProvider, onChange: e => setVisionProvider(e.target.value) })),
      h('label', { className: 'fish-form-row' }, '视觉模型 ', h('input', { 'aria-label': '视觉模型', value: visionModel, onChange: e => setVisionModel(e.target.value) })),
      h('p', { className: 'fish-muted' }, '服务商 ID 与模型同时留空时使用素材所属会话的模型；共享素材使用上方标注会话。GIF 根据可解码画面分析，原文件保持不变。'),
      h('div', { className: 'fish-actions' }, h('button', { type:'button',className:'fish-button',disabled:busy,onClick:()=>act('/settings',{analysisSession,visionProvider,visionModel}) },'保存标注模型'), h('button', {type:'button',className:'fish-button',disabled:busy,onClick:()=>act('/tag',{})}, '补齐缺失标签与场景'))),
    h('section', { className: 'fish-card' }, h('h2', null, '导入表情原图'),
      h('p', { className: 'fish-muted' }, '支持 PNG、JPEG、GIF、WebP，每张最多 8 MB；GIF 保留原字节。相同来源内按内容去重。'),
      h('div', { className: 'fish-form-row' }, h('label', null, '图片文件 ', h('input', { ref: fileRef, type: 'file', accept: '.png,.jpg,.jpeg,.gif,.webp', disabled: busy, onChange: e => setFile(e.target.files?.[0] || null) }))),
      h('div', { className: 'fish-form-row' }, h('label', null, '使用范围 ', h('select', { 'aria-label': '素材使用范围', value: scope, disabled: busy, onChange: e => setScope(e.target.value) }, h('option', { value: '' }, '共享素材（所有绑定可用）'), ...bindings.map(b => h('option', { key: b.会话, value: b.会话 }, b.类型 + ' ' + b.号码))))),
      ...[['名称',name,setName],['标签（逗号分隔）',tags,setTags],['使用场景（逗号分隔）',scenes,setScenes]].map(([label,value,set]) => h('label', { key: label, className: 'fish-form-row' }, label, h('input', { 'aria-label': label, value, disabled: busy, onChange: e => set(e.target.value) }))),
      h('button', { type: 'button', className: 'fish-button fish-primary', disabled: busy || !file, onClick: upload }, '导入表情')),
    h('section', { className: 'fish-card' }, h('h2', null, '素材库 · ' + data.items.length + ' 张'),
      h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: () => load().catch(e => setError(e.message)) }, '刷新素材库'),
      h('label', null, '搜索名称、标签和场景 ', h('input', { value: query, onChange: e => setQuery(e.target.value), 'aria-label': '搜索表情' })),
      h('label', { className: 'fish-form-row' }, '分类 ', h('select', { 'aria-label': '表情分类筛选', value: category, onChange:e=>setCategory(e.target.value) }, h('option',{value:''}, '全部分类'), ...(data.categories || []).map(c=>h('option',{key:c,value:c},c+' · '+data.items.filter(x=>(x.category || '未分类')===c).length)))),
      h('button',{type:'button',className:'fish-button',disabled:busy,onClick:()=>act('/classify',{})}, '重新整理自动分类'),
      ...data.items.filter(x => (!category || (x.category || '未分类') === category) && [x.name,...x.tags,...x.scenes].join(' ').toLowerCase().includes(query.toLowerCase())).map(item => h(FishStickerCard, { key: item.id, item, busy, act, bindings, categories: data.categories })),
      data.items.length ? null : h('p', { className: 'fish-muted' }, '素材库为空，先导入几张表情并填写使用场景。')),
    error ? h('p', { className: 'fish-message', role: 'alert' }, error) : null)
}
function FishStickerCard({ item, busy, act, bindings, categories }) {
  const React = require('react'), h = React.createElement
  const [dirty,setDirty] = React.useState(false)
  const [name,setName] = React.useState(item.name), [tags,setTags] = React.useState(item.tags.join(',')), [scenes,setScenes] = React.useState(item.scenes.join(','))
  React.useEffect(() => { if (!dirty) { setName(item.name); setTags(item.tags.join(',')); setScenes(item.scenes.join(',')) } }, [dirty, item.name, item.tags.join(','), item.scenes.join(',')])
  const binding = bindings.find(b => b.会话 === item.scope)
  return h('article', { className: 'qq-bind-detail' },
    h('img', { src: item.url, alt: item.name, loading: 'lazy', width: 100, height: 100, style: { objectFit: 'contain' } }),
    h('label', {className:'fish-form-row'}, '分类 ', h('select', { 'aria-label': item.id+' 分类', value:item.categorySource==='manual'?item.category:'',disabled:busy,onChange:e=>act('/edit',{id:item.id,category:e.target.value}) }, h('option',{value:''}, '自动归类 · '+(item.category || '未分类')), ...(categories || []).map(c=>h('option',{key:c,value:c},c)))),
    h('p', { className: 'fish-muted', role: 'status' }, '标签状态：' + ({pending:'等待处理',running:'识别中',complete:'已完成',error:'失败',cancelled:'已取消'}[item.tagStatus] || '未自动标注') + (item.tagError ? ' · '+item.tagError : '')),
    h('button', { type:'button',className:'fish-button',disabled:busy || ['pending','running'].includes(item.tagStatus),onClick:()=>act('/tag',{id:item.id}) }, '识别 / 重试标签'),
    h('p', { className: 'fish-muted' }, item.scope ? (binding ? binding.类型 + ' ' + binding.号码 : '原来源绑定已移除') : '共享素材'),
    ...[['名称',name,setName],['标签',tags,setTags],['场景',scenes,setScenes]].map(([label,value,set]) => h('label', { key: label, className: 'fish-form-row' }, label, h('input', { 'aria-label': item.id + ' ' + label, value, disabled: busy, onChange: e => { setDirty(true); set(e.target.value) } }))),
    h('div', { className: 'fish-actions' }, h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: async () => { if (await act('/edit', { id: item.id, name, tags, scenes })) setDirty(false) } }, '保存素材描述'),
      h('button', { type: 'button', className: 'fish-button', disabled: busy, onClick: () => { if (window.confirm('删除这张表情及其本地原文件？')) act('/remove', { id: item.id }) } }, '删除表情')))
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
      悬浮保存条: { position: 'sticky', bottom: 12, marginTop: 24, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', padding: '16px 20px', borderRadius: 'var(--fish-radius-mid)', border: '1px solid var(--fish-border)', background: 'var(--fish-panel)', boxShadow: 'var(--fish-shadow)', zIndex: 5 },
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
    const 勾 = (值, onChange, label = '切换设置') => h('input', {'aria-label': label, type: 'checkbox', role: 'switch', checked: !!值, onChange: (e) => onChange(e.target.checked) })
    const 短id = (id) => {
      const s = String(id)
      return s.length <= 8 ? s : s.slice(-8)
    }

    const 页签们 = ['连接', '绑定', '消息策略', '图片与语音', '表情包', 'QQ 空间', '历史导入', '运行日志']

    function QQActions({ mode, 配置, 脏, 改 }) {
      const [busy, setBusy] = React.useState(false)
      const [message, setMessage] = React.useState('')
      const [session, setSession] = React.useState('')
      const [images, setImages] = React.useState('')
      const [content, setContent] = React.useState('')
      const [right, setRight] = React.useState('4')
      const [targets, setTargets] = React.useState('')
      const [qq, setQQ] = React.useState('')
      const [tid, setTid] = React.useState('')
      const [result, setResult] = React.useState('')
      const imageList = images.split(/\r?\n/).map(x => x.trim()).filter(Boolean)
      const limit = mode === 'images' ? 4 : 9
      const run = async (path, body, read = false) => {
        setBusy(true); setMessage('处理中…')
        try {
          const r = await post(path, body)
          if (!r?.ok) throw new Error(r?.说 || '请求失败，请检查后端连接')
          if (read) setResult(r.说)
          setMessage(r.说 || '已完成')
        } catch (e) { setMessage(e.message) }
        finally { setBusy(false) }
      }
      const imageField = 行('图片地址（每行一张）', h('textarea', { style: S.ta, value: images, placeholder: mode === 'images' ? 'https://example.com/happy.gif\n_stickers/happy.png' : 'https://example.com/photo.jpg', onChange: e => setImages(e.target.value) }),
        '已填写 ' + imageList.length + ' / ' + limit + ' 张。支持 HTTP(S) 地址和本地图片路径；图片发送路径由 DSH 读取，空间配图路径由 QQ 后端读取。')
      const blocked = busy || 脏
      if (mode === 'images') return h('section', { style: S.card },
        h('h2', null, '发送图片与表情包'),
        h('p', { style: S.dim }, '静态表情和 GIF 均走原图发送；GIF 不会在这里转成静态图。发送到已保存的会话绑定，遵守总开关、试运行和发送图片开关。'),
        行('发送目标', h('select', { style: S.wide, value: session, onChange: e => setSession(e.target.value) },
          h('option', { value: '' }, '选择 QQ 聊天'), ...(配置.绑定 || []).filter(b => b.开 !== false).map(b => h('option', { key: b.会话, value: b.会话 }, b.类型 + ' ' + b.号码)))),
        imageField,
        h('div', { className: 'fish-actions' }, 按钮('发送图片到 QQ', () => run('/send-images', { session, images: imageList }), true, blocked || !session || !imageList.length || imageList.length > 4 || !配置.总开关 || !配置.发图)),
        h('p', { role: 'status', className: 'fish-message' }, message || (脏 ? '请先保存设置，再发送。' : 配置.试运行 ? '当前为试运行：只校验并记录，不实际发送。' : '点击后立即发送至所选 QQ 聊天。')),
        h('div', { className: 'fish-rule-section' }, h('h3', null, '让模型按语境选择表情'),
          h('p', { style: S.dim }, '现有插件没有自动素材库或独立选图器。可将素材路径和使用场景写入角色设定，让模型输出 Markdown 图片；具体选择由模型决定。'),
          行('表情素材与选择规则', h('textarea', { style: S.ta, value: String(配置.人设 || ''), placeholder: '例如：开心时可用 ![开心](_stickers/happy.gif)，安慰时可用 ![拥抱](_stickers/hug.png)。没有合适素材就只回复文字。', onChange: e => 改('人设', e.target.value) }), '与「绑定 → 全局角色设定」共用同一份文本；保留已有角色描述，在末尾补充规则。'),
          行('启用角色设定', 勾(配置.人设开, v => 改('人设开', v)), '有独立角色设定的绑定需要在对应绑定中补充规则。')))
      return h('div', { className: 'fish-settings-stack' },
        h('section', { style: S.card }, h('h2', null, '发布说说'),
          行('说说正文', h('textarea', { style: S.ta, value: content, onChange: e => setContent(e.target.value), placeholder: '分享今天想说的话…' })), imageField,
          行('可见范围', h('select', { style: S.wide, value: right, onChange: e => setRight(e.target.value) }, ...[['1','所有人'],['4','好友'],['16','部分可见'],['64','仅自己'],['128','部分不可见']].map(([value, label]) => h('option', { key: value, value }, label)))),
          ['16','128'].includes(right) ? 行('QQ 号名单', h('input', { style: S.wide, value: targets, onChange: e => setTargets(e.target.value), placeholder: '多个 QQ 号用逗号或空格分隔' })) : null,
          h('div', { className: 'fish-actions' }, 按钮('发布到 QQ 空间', () => run('/space', { action: 'qq_space_post', args: { content, images: imageList, ugc_right: Number(right), target_uins: targets.split(/[\s,，]+/).filter(Boolean) } }), true,
            blocked || !配置.允许发空间动态 || (!content.trim() && !imageList.length) || imageList.length > 9 || (['16','128'].includes(right) && !targets.trim()))),
          h('p', { style: S.dim }, 脏 ? '请先保存设置，再发布。' : '手动发布会立即发送，不受消息转发的试运行控制；受「允许发布 QQ 空间动态」控制。'),
          h('p', { className: 'fish-message', role: 'status' }, message)),
        h('section', { style: S.card }, h('h2', null, '浏览动态与评论'),
          h('p', { style: S.dim }, '空间功能要求 QQ 后端支持相应接口；此处查看不会点赞或发表评论。'),
          行('查看谁的空间', h('input', { style: S.wide, value: qq, inputMode: 'numeric', placeholder: '留空查看机器人自己的空间', onChange: e => setQQ(e.target.value) })),
          h('div', { className: 'fish-actions' }, 按钮('查看好友动态', () => run('/space', { action: 'qq_space_feeds', args: { count: 20 } }, true), false, busy), 按钮('查看说说列表', () => run('/space', { action: 'qq_space_list', args: { qq, num: 20 } }, true), false, busy)),
          行('说说 ID', h('input', { style: S.wide, value: tid, inputMode: 'numeric', placeholder: '填写上方说说列表中的 tid', onChange: e => setTid(e.target.value) })),
          按钮('查看正文与评论', () => run('/space', { action: 'qq_space_detail', args: { qq, tid: Number(tid) } }, true), false, busy || !/^\d+$/.test(tid)),
          h('pre', { className: 'fish-feed-result', role: 'status' }, result || '选择上方操作，动态会显示在这里。')))
    }

    function Section() {
      const [态, 设态] = React.useState(null)
      const [脏, 设脏] = React.useState(false)
      const [忙, 设忙] = React.useState(false)
      const [说, 设说] = React.useState('')
      const [页, 设页] = React.useState('连接')
      const [asr, 设asr] = React.useState(null)
      const [asr忙, 设asr忙] = React.useState(false)
      const [人设行, 设人设行] = React.useState(null) // 哪一行展开了「单独的人设」
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

      React.useEffect(() => {
        get('/history/jobs').then(r => r && r.ok && 设历史列表(r.jobs))
        return () => { 历史控制.stop = true }
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
        if (s) 设态(s)
      }
      // ⭐ 1.1.2：人设「现在就生效」—— 不用等 QQ 那边来一条消息
      const 人设现在生效 = async () => {
        设人设忙(true)
        设人设说('')
        const r = await post('/persona-apply', {})
        设人设忙(false)
        if (!r || !r.ok) {
          设人设说('失败：' + ((r && r.说) || '请求未响应'))
          return
        }
        const 行们 = Array.isArray(r.结果们) ? r.结果们 : []
        if (!行们.length) {
          设人设说('暂无会话绑定')
          return
        }
        const 不顺 = 行们.filter((x) => !x.生效)
        设人设说((r.生效 ? '' + r.生效 + ' 个会话已应用' : '未应用到任何会话')
          + (不顺.length ? '；' + 不顺.map((x) => x.聊天 + '：' + x.说).join('；') : ''))
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
      const 加绑定 = () => 设绑定([...绑定们(), { 类型: '群', 号码: '', 会话: '', 称呼: '', 门槛: false }])
      const 删绑定 = (i) => 设绑定(绑定们().filter((_, j) => j !== i))

      const 存 = async () => {
        设忙(true)
        const s = await post('/save', (态 && 态.配置) || {})
        设忙(false)
        if (s && s.ok) {
          设态(s)
          设脏(false)
          设说(s.说 || '设置已保存')
        } else {
          设说((s && s.说) || '保存失败')
        }
      }
      const 装语音 = async () => {
        设asr忙(true)
        const r = await post('/asr-install', {})
        设说((r && r.说) || '任务已启动')
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
          设说(String(配置.语音模型目录 || '').trim()
            ? '命令已填写，请保存设置'
            : '请填写语音模型目录后重新生成命令')
        } else if (r && !r.就绪) 设说('请先安装语音依赖')
        else 设说('无法读取状态')
      }

      const 试一句 = async () => {
        设忙(true)
        const s = await post('/test-send', {})
        设忙(false)
        设说((s && s.说) || '请求未响应')
        await 拉()
      }

      if (!态) return h('div', { className: 'fish-module fish-qq', style: S.wrap }, h('div', { className: 'fish-section-title', style: S.h }, '连接与转发'), h('div', { style: S.dim }, '读取中…'))

      const 配置 = 态.配置 || {}
      const 目标们 = Array.isArray(态.活着的会话) ? 态.活着的会话 : []
      const NapCat = 态.NapCat状态 || null
      const 日志 = Array.isArray(态.日志) ? 态.日志 : []
      const 绑定 = 绑定们()

      const 会话选项 = (值, onChange) =>
        h('select', {'aria-label': '目标会话', style: S.wide, value: 值 || '', onChange: (e) => onChange(e.target.value) },
          h('option', { value: '' }, '请选择目标会话'),
          ...目标们.map((s) => h('option', { value: s.id }, (s.标题 || '…' + 短id(s.id)) + ' · ' + 短id(s.id))),
          值 && !目标们.some((s) => s.id === 值)
            ? h('option', { value: 值 }, '（当前：' + 短id(值) + '）')
            : null)

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
        } catch (e) { 设历史说('失败：' + e.message) }
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
          const list = await get('/history/jobs')
          if (list?.ok) 设历史列表(list.jobs)
        } catch (e) { 设历史说('失败：' + e.message + '；进度已保存，可重试。') }
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
      const 总览卡片 = [
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '基础策略与通知'),
          行('总开关', 勾(配置.总开关, (v) => 改('总开关', v)), '禁用后停止转发。'),
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
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '全局角色设定'),
          h('div', { style: S.dim },
            '未配置独立角色的会话使用全局设定。'),
          h('div', { style: { marginTop: 6 } }, 勾(配置.人设开, (v) => 改('人设开', v), '启用角色设定'), ' ', '启用角色设定'),
          h('textarea', {'aria-label': '人设',
            style: { ...S.input, display: 'block', width: '100%', height: 88, marginTop: 6, resize: 'vertical', fontFamily: 'inherit', lineHeight: 1.5, boxSizing: 'border-box' },
            value: String(配置.人设 || ''),
            placeholder: '输入角色身份、表达风格与交互要求。',
            onChange: (e) => 改('人设', e.target.value),
          }),
          h('div', { style: { ...S.dim, marginTop: 4 } },
            '建议简洁描述，减少上下文占用。'),
          h('div', { style: { marginTop: 6 } },
            按钮('立即应用', 人设现在生效, false, 人设忙),
            h('span', { style: S.dim }, '　应用至已打开的目标会话。')),
          人设说 ? h('div', { style: { ...S.dim, marginTop: 4 } }, 人设说) : null,
        ),
        h('div', { style: { ...S.card, overflowX: 'auto' } },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, 'QQ 与 DSH 会话映射'),
          h('div', { style: S.dim },
            '私聊填写 QQ 号，群聊填写群号；回复按绑定关系转发。'
            + '每个聊天必须绑定独立 DSH 会话；普通群通过记忆库共享，不会转发彼此的回复。'),
          h('div', { className: 'fish-binding-row fish-binding-head', style: { ...S.表头, marginTop: 10 } },
            h('div', { style: S.表头字 }, '类型'),
            h('div', { style: S.表头字 }, '号码'),
            h('div', { style: S.表头字 }, '称呼'),
            h('div', { style: S.表头字 }, '门槛'),
            h('div', { style: S.表头字 }, '角色'),
            h('div', { style: S.表头字 }, '')),
          绑定.length === 0
            ? h('div', { style: { ...S.dim, margin: '8px 0' } }, '暂无条目，请添加。')
            : h('div', null, ...绑定.map((x, i) => h(React.Fragment, { key: i },
              h('div', { className: 'fish-binding-row', style: S.表格行 },
                h('select', {'aria-label': '绑定类型', style: S.wide, value: x.类型 || '群', onChange: (e) => 改绑定(i, { 类型: e.target.value }) },
                  h('option', { value: '私聊' }, '私聊'),
                  h('option', { value: '群' }, '群')),
                h('input', {'aria-label': 'QQ 号或群号',
                  style: S.wide, value: String(x.号码 || ''), placeholder: x.类型 === '私聊' ? 'QQ 号' : '群号',
                  onChange: (e) => 改绑定(i, { 号码: e.target.value.trim() }),
                }),
                h('input', {'aria-label': '对方称呼',
                  style: S.wide, value: String(x.称呼 || ''),
                  placeholder: x.类型 === '私聊' ? '对方' : '群成员',
                  onChange: (e) => 改绑定(i, { 称呼: e.target.value }),
                }),
                h('div', { style: { textAlign: 'center' } },
                  勾(x.门槛, (v) => 改绑定(i, { 门槛: v }), '启用回复门槛')),
                h('div', { style: { textAlign: 'center' } },
                  按钮(String(x.人设 || '').trim() ? '独立' : '独立', () => 设人设行(人设行 === i ? null : i), false, false)),
                h('div', null, 按钮('删除', () => 删绑定(i), false, false))),
              // ⭐ 1.1.0：会话单独占一整行，宽度给够
              h('div', { style: { display: 'grid', gridTemplateColumns: '70px 1fr', gap: 6, alignItems: 'center', margin: '0 0 6px' } },
                h('div', { style: S.表头字 }, '会话'),
                会话选项(x.会话, (v) => 改绑定(i, { 会话: v }))),
              // ⭐ 1.1.8：这一行自己的开关 —— 不想理就把「启用」取消，不用删掉
              h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', margin: '0 0 10px', paddingLeft: 2 } },
                h('span', { style: { display: 'flex', gap: 4, alignItems: 'center' } },
                  勾(x.开 !== false, (v) => 改绑定(i, { 开: v }), '启用收发'),
                  h('span', { style: S.dim }, '启用收发')),
                x.类型 === '群'
                  ? h('span', { style: { display: 'flex', gap: 4, alignItems: 'center' } },
                      勾(x.只听点名 == null ? !配置.群里听所有人 : Boolean(x.只听点名), (v) => 改绑定(i, { 只听点名: v }), '仅接收点名消息'),
                      h('span', { style: S.dim }, '仅接收点名消息'))
                  : null),
              i === 人设行
                ? h('div', { style: { margin: '0 0 8px', padding: '6px 8px', background: 'var(--fish-soft)', borderRadius: 'var(--fish-radius-sm)' } },
                    h('div', { style: { ...S.dim, marginBottom: 4 } }, '独立角色设定（留空使用全局设定）'),
                    h('textarea', {'aria-label': '输入此会话的角色设定。',
                      style: { ...S.input, display: 'block', width: '100%', height: 72, resize: 'vertical', fontFamily: 'inherit', lineHeight: 1.5, boxSizing: 'border-box' },
                      value: String(x.人设 || ''),
                      placeholder: '输入此会话的角色设定。',
                      onChange: (e) => 改绑定(i, { 人设: e.target.value }),
                    }),
                    h('div', { style: { marginTop: 4 } },
                      按钮('清空', () => 改绑定(i, { 人设: '' }), false, false),
                      h('span', { style: S.dim }, '　'),
                      按钮('收起', () => 设人设行(null), false, false)))
                : null,
              // ⭐ 1.4.3：这个群里「不听点名也直接收」的 QQ 号。
              //   「只听点名」一开，群里**所有人**（包括自己）都要点名才收；这里列出来的号例外。
              x.类型 === '群' && (x.只听点名 == null ? !配置.群里听所有人 : Boolean(x.只听点名))
                ? h('div', { style: { margin: '0 0 8px' } },
                    h('div', { style: { ...S.dim, marginBottom: 3 } },
                      '点名豁免名单（QQ 号，以逗号或空格分隔）'),
                    h('input', {'aria-label': '例如 3274796953',
                      style: { ...S.input, display: 'block', width: '100%', boxSizing: 'border-box' },
                      value: String(x.点名例外 || ''),
                      placeholder: '例如 3274796953',
                      onChange: (e) => 改绑定(i, { 点名例外: e.target.value }),
                    }))
                : null))),
          h('div', { style: { marginTop: 8 } },
            按钮('+ 添加条目', 加绑定, false, false),
            h('span', { style: S.dim }, '　'),
            按钮('刷新会话列表', 拉, false, 忙)),
          h('div', { style: { ...S.dim, marginTop: 6 } },
            '回复门槛仅适用于群聊，用于判断是否需要回复。'
            + '私聊不执行门槛判断。'),
        ),
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
          行('接口地址', h('input', {'aria-label': 'QQ 后端连接',  style: S.wide, value: String(配置.NapCat || ''), onChange: (e) => 改('NapCat', e.target.value) }), 'OneBot HTTP 地址，默认 http://127.0.0.1:3000。'),
          行('接口令牌', h('input', {'aria-label': '令牌',  type: 'password', style: S.small, value: String(配置.令牌 || ''), onChange: (e) => 改('令牌', e.target.value) }), '后端启用鉴权时填写 access_token。'),
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
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '图片'),
          行('接收图片（QQ → DSH）', 勾(配置.收图, (v) => 改('收图', v)), '图片转入目标会话；纯文本模型仅接收图片数量和路径。'),
          行('发送图片（DSH → QQ）', 勾(配置.发图, (v) => 改('发图', v)), '将模型输出的图片转发至 QQ。'),
          行('接收图片上限（张）', h('input', {'aria-label': '收图最多',  type: 'number', min: 1, max: 10, style: S.small, value: String(配置.收图最多 ?? 4), onChange: (e) => 改('收图最多', Number(e.target.value)) }), '接收最多 10 张；发送每条最多 4 张。超出部分不转发。'),
          行('单张图片上限（MB）', h('input', {'aria-label': '图上限MB',  type: 'number', min: 1, max: 30, style: S.small, value: String(配置.图上限MB ?? 5), onChange: (e) => 改('图上限MB', Number(e.target.value)) }), '收发共用，超出上限时跳过。'),
          行('图片根目录', h('input', {'aria-label': '图片根目录',  style: S.wide, placeholder: '留空使用会话工作区', value: String(配置.图片根目录 || ''), onChange: (e) => 改('图片根目录', e.target.value) }), '用于解析 Markdown 图片的相对路径。'),
          h('div', { style: S.dim }, '接收图片保存在 DSH 数据目录的 qq-bridge-inbox 中。'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '文件'),
          行('发送文件（DSH → QQ）', 勾(配置.发文件, (v) => 改('发文件', v)), '将正文中的本地文件链接上传至 QQ；图片语法单独处理。'),
          行('单文件上限（MB）', h('input', {'aria-label': '文件上限MB',  type: 'number', min: 1, max: 2048, style: S.small, value: String(配置.文件上限MB ?? 50), onChange: (e) => 改('文件上限MB', Number(e.target.value)) }), '超限时发送说明；同时受 QQ 后端限制。'),
          行('文件仅发送至私聊', 勾(配置.文件仅私聊 !== false, (v) => 改('文件仅私聊', v)), '默认启用；禁用后允许向群聊上传文件。'),
          h('div', { style: S.dim }, '含空格的路径需使用尖括号：[报告](<D:\\我的 文档\\报告.docx>)。网页链接不作为文件处理。'),
        ),
        h('div', { style: S.card },
          h('div', { style: { ...S.h, margin: '0 0 8px' } }, '语音转写'),
          行('转写语音', 勾(配置.语音转写, (v) => 改('语音转写', v)), '通过指定命令转写语音；禁用时仅保留语音标记。'),
          // —— 一键装依赖 ——
          h('div', { style: { ...S.row, alignItems: 'center' } },
            h('div', { className: 'fish-form-label', style: S.lab }, '语音识别环境'),
            h('div', { className: 'fish-control', style: S.ctl },
              h('div', null,
                按钮(asr忙 ? '…' : (asr && asr.就绪 ? '重新安装' : '安装语音依赖'), 装语音, !(asr && asr.就绪), asr忙 || Boolean(asr && asr.进行中)),
                h('span', { style: S.dim }, '　'),
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
          h('div', { style: S.dim },
            '内置 tools/asr_cli.py 支持本机 SenseVoice，也可配置其他转写命令。'),
        ),
      ]

      // ───────────── 门槛 ─────────────
      const 门槛卡片 = [
        h('div', { style: S.card },
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
          h('div', { style: { ...S.dim, marginTop: 8, fontWeight: 600 } }, '群聊接收范围'),
          行('接收全部群消息', 勾(配置.群里听所有人, (v) => 改('群里听所有人', v)),
            '默认仅接收 @ 或引用消息。'
            + '启用后接收全部群消息，由回复门槛判断是否回复。'),
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
          h('div', { style: S.dim }, '共用 QQ 后端连接地址和令牌。'),
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

      const 分区 = (...内容) => h('div', { className: 'fish-settings-stack' }, ...内容)
      const 页面 = {
        '连接': 分区(消息卡片[0], 总览卡片[0]),
        '绑定': 分区(绑定卡片[1], 绑定卡片[0]),
        '消息策略': 分区(消息卡片[1], 消息卡片[2], 绑定卡片[2], 门槛卡片[0]),
        '表情包': typeof FishStickers === 'function' ? h(FishStickers, { notify: typeof notify === 'function' ? notify : undefined }) : h('p', null, '请在大肥鱼整合界面使用表情库'),
        '历史导入': 历史页,
        '运行日志': 分区(总览卡片[1], 总览卡片[2]),
      }

      return h(
        'div',
        { className: 'fish-module fish-qq', style: S.wrap },

        NapCat && !NapCat.错
          ? h('div', { style: S.已同步 }, '已连接 QQ：' + NapCat.昵称 + '（' + NapCat.用户 + '）')
          : h('div', { style: S.未保存 }, '注意：QQ 后端未连接（NapCat / SnowLuma）' + (NapCat && NapCat.错 ? '：' + NapCat.错 : '')),
        页签,
        h('div', { className: 'fish-toolbar' },
          h('span', { style: { ...S.dim, flex: '1 1 160px' } }, 脏 ? '存在未保存的配置' : '配置已保存'),
          按钮('刷新状态', 拉, false, 忙 || 脏), 按钮('保存设置', 存, true, 忙)),
        说 ? h('p', { role: 'status', className: 'fish-message' }, 说) : null,
        页 === '连接' || 页 === '运行日志' ? h('div', { className: 'fish-test-action' }, 按钮('发送测试消息', 试一句, false, 忙 || 脏), h('span', { style: S.dim }, '会实际发送至首个绑定的 QQ 聊天，不受试运行限制。')) : null,
        页面[页] || null,
        h('div', { hidden: 页 !== '图片与语音' }, h(QQActions, { mode: 'images', 配置, 脏, 改 }), 分区(消息卡片[3], 消息卡片[4], 消息卡片[5])),
        h('div', { hidden: 页 !== 'QQ 空间' }, 空间卡片[0], h(QQActions, { mode: 'space', 配置, 脏, 改 }), 分区(...空间卡片.slice(1))),
        h('details', { className: 'fish-diagnostics' }, h('summary', null, '诊断信息'),
          h('p', null, '模块版本 ' + String(态.版本 || '?')),
          h('p', null, '配置文件：' + String(态.配置文件 || '未知'))),
        脏
          ? h('div', { style: S.悬浮保存条 },
            h('span', { style: { fontWeight: 600, color: 'var(--fish-danger)' } }, '存在未保存的配置'),
            h('span', { style: S.dim }, '保存后生效'),
            按钮('保存设置', 存, true, 忙))
          : null,
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
  function EmbeddingSettings({ session, storeId }) {
    const [status, setStatus] = React.useState(null)
    const [config, setConfig] = React.useState(null)
    const [key, setKey] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [busy, setBusy] = React.useState(false)
    const base = '/dsh-fish-memory/embedding'
    const refresh = () => fetch(base + '/status' + (session ? '?session=' + encodeURIComponent(session) : ''), { cache: 'no-store' }).then(r => r.json()).then(r => { setStatus(r); setConfig(old => old || r.config) })
    React.useEffect(() => { refresh().catch(() => setMessage('状态不可用')) }, [session])
    React.useEffect(() => {
      if (!status?.running) return
      const timer = setInterval(() => refresh().catch(() => setMessage('状态刷新失败')), 1000)
      return () => clearInterval(timer)
    }, [status?.running, session])
    const post = async (path, body) => {
      setBusy(true)
      try {
        const result = await fetch(base + path, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }).then(r => r.json())
        if (!result.ok) throw new Error(result.error || '操作失败')
        setKey(''); setMessage('已完成'); await refresh()
      } catch (e) { setMessage(e.message) } finally { setBusy(false) }
    }
    if (!config) return React.createElement('div', null, 'Qwen Embedding：加载中… ', message)
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
      React.createElement('button', {type: 'button',  onClick: () => refresh().catch(() => setMessage('状态不可用')) }, '刷新索引状态'), message,
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

    function Section() {
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
      const [memoryPage, setMemoryPage] = React.useState('记忆库')
      const [detailPage, setDetailPage] = React.useState('记忆与档案')
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
      const [加结果, set加结果] = React.useState(null) // { ok, 文字 }

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
        set加结果({ ok: true, 文字: '加着呢…' })
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
          React.createElement('div', { className: 'fish-subnav' }, ...['记忆与档案', '语义索引'].map(name => React.createElement('button', { type: 'button', key: name, className: 'fish-button' + (detailPage === name ? ' fish-primary' : ''), 'aria-pressed': detailPage === name, onClick: () => setDetailPage(name) }, name))),
          React.createElement('div', { hidden: detailPage !== '语义索引' }, React.createElement(EmbeddingSettings, { session: s.id, storeId: s.storeId })),
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
                  React.createElement(
                    'span',
                    { style: Object.assign({}, 加结果 && 加结果.ok ? S.ok : S.drop, { fontSize: 'var(--fish-small)' }) },
                    (加结果 && 加结果.文字) || '',
                  ),
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
        React.createElement('div', { className: 'fish-subnav' }, ...['记忆库', '语义召回', '召回与遗忘'].map(name => React.createElement('button', { type: 'button', key: name, className: 'fish-button' + (memoryPage === name ? ' fish-primary' : ''), 'aria-pressed': memoryPage === name, onClick: () => setMemoryPage(name) }, name))),
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
        React.createElement('div', { hidden: memoryPage !== '语义召回' }, React.createElement(EmbeddingSettings, {})),
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

    function Panel() {
      const [cfg, setCfg] = React.useState(null)
      const [st, setSt] = React.useState(null)
      const [sessions, setSessions] = React.useState([])
      const [工作区们, set工作区们] = React.useState([])   // 工作区模式的下拉清单
      const [看哪份, set看哪份] = React.useState('')      // 多份心情时看的是哪一份
      const 看哪份Ref = React.useRef('')
      const keyNow = () => (看哪份Ref.current ? '?key=' + encodeURIComponent(看哪份Ref.current) : '')
      const [models, setModels] = React.useState([])
      const [busy, setBusy] = React.useState('')
      const [msg, setMsg] = React.useState('')
      const [页, set页] = React.useState('mood')       // 页签：mood / bind / judge / charm

      const flash = (t) => { setMsg(t); setTimeout(() => setMsg(''), 2500) }

      const load = React.useCallback(async () => {
        try {
          const [c, s] = await Promise.all([getJson(API + '/config'), getJson(API + '/state' + keyNow())])
          if (c && c.config) setCfg(c.config)
          if (s && s.ok) setSt(s)
        } catch (e) {
          setMsg('读取失败：' + (e && e.message))
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
          flash((label || '设置') + ' 已保存')
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
        h('div', { 'data-fm-tabs': '', role: 'tablist', 'aria-label': '心情页面' },
          页签.map(([id, 名]) => h('button', {type: 'button',
            key: id, role: 'tab', 'aria-selected': 页 === id, tabIndex: 页 === id ? 0 : -1, onKeyDown: e => { const i = 页签.findIndex(item => item[0] === id); const next = e.key === 'ArrowRight' ? (i + 1) % 页签.length : e.key === 'ArrowLeft' ? (i + 页签.length - 1) % 页签.length : e.key === 'Home' ? 0 : e.key === 'End' ? 页签.length - 1 : null; if (next !== null) { e.preventDefault(); set页(页签[next][0]); e.currentTarget.parentElement.querySelectorAll('[role=tab]')[next].focus() } }, 'data-fm-tab': '', 'data-fm-on': 页 === id ? '' : undefined,
            onClick: () => set页(id),
          }, 名))),
        页 === 'mood' ? 心情页 : null,
        页 === 'bind' ? 绑定页 : null,
        页 === 'judge' ? 判断页 : null,
        页 === 'charm' ? 挂饰页 : null,
        h('div', { 'data-fm-msg': '', role: 'status', 'aria-live': 'polite' }, msg),
      )
    }

    return { Section: function MoodSection() { return h('div', null, h('style', null, CSS), h(Panel)) } }
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
      悬浮保存条: { position: 'sticky', bottom: 12, marginTop: 24, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', padding: '16px 20px', borderRadius: 'var(--fish-radius-mid)', border: '1px solid var(--fish-border)', background: 'var(--fish-panel)', boxShadow: 'var(--fish-shadow)', zIndex: 5 },
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

    function Section() {
      const [态, 设态] = React.useState(null)
      const [说, 设说] = React.useState('')
      const [忙, 设忙] = React.useState(false)
      // 次要路径（手填 id）的草稿：null = 没动过，直接显示配置里那份
      const [手填, 设手填] = React.useState(null)
      // 「改了但还没按保存」——填了不按保存等于没填，这个标志就是让这件事写在脸上
      const [脏, 设脏] = React.useState(false)
      const [同步话, 设同步话] = React.useState('')

      const 拉 = React.useCallback(
        () => get('/state').then((r) => { if (r && r.ok) 设态(r); else 设说('读不到宿主那边的状态（插件加载了吗？）') }),
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
          设说(r.说 || '保存好了')
        } else {
          设说((r && r.说) || '保存失败')
          设同步话('保存失败 ✗')
        }
        设忙(false)
      }

      const 掷 = async (模式) => {
        设忙(true)
        const r = await post('/roll', { 模式 })
        if (r && r.ok) 设态((旧) => ({ ...旧, 日志: r.日志 }))
        设说((r && r.说) || '跑完了')
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
        设说((r && r.说) || '做完了')
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
        h('div', { style: 脏 ? S.未保存 : S.已同步 },
          (脏 ? '有未保存的改动，请保存设置' : '设置' + (同步话 || '已同步')) +
            '（勾选会话不用点保存，点一下立刻生效）'),

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
          说 ? h('div', { role: 'status', 'aria-live': 'polite', style: { ...S.ok, color: 'var(--fish-text)', marginTop: 6 } }, 说) : null,
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

        // —— 悬浮的保存条：**只要有没保存的改动，就贴在底下冒出来** ——
        // 她原话：「只要上面有改动，那个按钮就会在下面弹出来，就不用每次往下面翻了」。
        // 注意：用 position: sticky + bottom: 0（不是 fixed）：它只在这张设置页里浮着，
        //   不会跑到别的设置页上去。没改动（脏=false）就完全不渲染 —— 不挡视线。
        脏
          ? h('div', { style: S.悬浮保存条 },
              h('span', { style: { fontWeight: 600, color: 'var(--fish-danger)' } }, '有未保存的改动'),
              h('span', { style: S.dim }, '保存后生效'),
              按钮('保存设置', 存, true, 忙),
            )
          : null,
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

const META = {"name":"dsh-big-flsh-aio","version":"0.0.1","repositoryVersion":"0.1.5","upstreamCompatibility":[{"name":"通到 QQ","author":"Yuuyuko-uu","url":"https://github.com/Yuuyuko-uu/dsh-qq-link","version":"1.5.1","commit":"fba7e3ee8ffb3a8f819a7823eb05186cfb782ecb","forkName":"dsh-qq-link-plus","forkUrl":"https://github.com/CHINOSAMAAA/dsh-qq-link-plus","forkVersion":"1.5.1-3","forkCommit":"1d49ee06a1300277d9d8f7e22fb8c75614218cc4"},{"name":"鱼的记忆","author":"Yuuyuko-uu","url":"https://github.com/Yuuyuko-uu/dsh-fish-memory","version":"1.5.2","commit":"5124cc1fa5a3149e8a68cf1d858e24b5bf2a2eea","forkName":"dsh-fish-memory-plus","forkUrl":"https://github.com/CHINOSAMAAA/dsh-fish-memory-plus","forkVersion":"1.5.4","forkCommit":"10b5765ef7f2013fb2c17615c3c6fcf05b8776b7"},{"name":"鱼的心情","author":"Yuuyuko-uu","url":"https://github.com/Yuuyuko-uu/dsh-feiyu-mood","version":"0.9.0","commit":"02fddcaae0763651ecd65af5f644fe61f19de4bd","modulePath":"modules/mood"},{"name":"主动搭话","author":"Yuuyuko-uu","url":"https://github.com/Yuuyuko-uu/dsh-speak-up","version":"0.3.0","commit":"e3bc6362208c693bb833ecf463ec6a20df4b6419","modulePath":"modules/speak"}]};
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
const tabs = ['总览', 'QQ 互通', '长期记忆', '鱼的心情', '主动搭话', '更新与来源']
const UPDATES_TAB = tabs.length - 1
const css = FISH_THEME_CSS

function FishIcon({ size = 24 }) {
  return h('svg', { width: size, height: size, viewBox: '0 0 32 32', fill: 'none', 'aria-hidden': true },
    h('path', { d: 'M5 12c-3 3-3 9 1 12 5 5 15 4 19-2 2-2 3-6 2-8 3 0 4-3 3-6-2 0-4 1-5 3-1-2-3-3-5-3-4-1-9 0-12 2', fill: 'var(--fish-accent-soft, #dce6ff)', stroke: 'currentColor', strokeWidth: 1.6, strokeLinejoin: 'round' }),
    h('path', { d: 'M4 18c2 6 9 8 14 6l-4-5M12 6V3m0 3-3-2m3 2 3-2', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }),
    h('circle', { cx: 19, cy: 15, r: 1.2, fill: 'currentColor' }))
}

function NavIcon({ index }) {
  const paths = ['M3 10 12 3l9 7v10H3Z M9 20v-7h6v7', 'M5 4h14v12H9l-4 4Z M8 8h8 M8 12h5', 'M4 4h6l2 2 2-2h6v16h-6l-2 1-2-1H4Z M12 6v15', 'M3 12h4l3-7 4 14 3-7h4', 'M4 5h16v12H9l-5 4Z M8 9h8 M8 13h5', 'M4 9a8 8 0 1 1 0 7 M4 3v6h6 M12 7v5l3 2']
  return h('svg', { className: 'fish-icon', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }, h('path', { d: paths[index] }))
}

function Wave() {
  return h('svg', { className: 'fish-waves', viewBox: '0 0 1000 160', preserveAspectRatio: 'none', 'aria-hidden': true, focusable: 'false' },
    h('path', { className: 'fish-wave-back', d: 'M0 58Q125 8 250 56T500 52T750 44T1000 54V160H0Z' }),
    h('path', { className: 'fish-wave-front', d: 'M0 112Q140 40 280 98T560 92T800 90T1000 100V160H0Z' }),
    h('path', { className: 'fish-wave-foam', d: 'M0 82Q140 18 280 76T560 70T800 68T1000 78' }))
}

function OceanDecor({ kind = 'bubbles', className = '' }) {
  const paths = {
    heart: 'M18 82Q52 92 84 56C110 24 78 18 72 42C55 18 36 40 58 57L78 70',
    chat: 'M22 24Q14 24 14 36V60Q14 72 28 72H47L64 88V72H86Q98 72 98 58V38Q98 24 84 24Z M38 46v2 M56 46v2 M74 46v2',
    tail: 'M61 88C62 63 32 76 25 48C20 28 31 25 39 38C48 36 56 42 61 52C66 42 75 36 84 38C92 25 103 29 96 49C89 77 64 62 61 88Z',
    star: 'M60 15Q64 43 84 47Q64 51 60 76Q56 51 36 47Q56 43 60 15Z M95 9Q97 21 106 24Q97 27 95 38Q93 27 84 24Q93 21 95 9Z',
  }
  return h('svg', { className: 'fish-decoration fish-decor-' + kind + ' ' + className, viewBox: '0 0 120 100', fill: 'none', 'aria-hidden': true, focusable: 'false' },
    kind === 'bubbles' ? [h('circle', { key: 'a', cx: 80, cy: 30, r: 19 }), h('circle', { key: 'b', cx: 28, cy: 74, r: 9 }), h('circle', { key: 'c', cx: 101, cy: 82, r: 5 }), h('path', { key: 'd', d: 'M69 24q1-6 8-7 M20 72q1-4 5-4' })] : h('path', { d: paths[kind] }))
}

async function request(path, options) {
  const response = await fetch(path, { cache: 'no-store', ...options })
  const data = await response.json()
  if (!response.ok || !data.ok) throw new Error(data.error || data.说 || '接口请求失败：' + response.status)
  return data
}
const button = (label, onClick, primary = false, disabled = false) => h('button', { type: 'button', className: 'fish-button' + (primary ? ' fish-primary' : ''), onClick, disabled }, label)
const link = (url, label) => h('a', { href: url, target: '_blank', rel: 'noreferrer' }, label)

function Overview({ navigate }) {
  const [state, setState] = React.useState({})
  const [busy, setBusy] = React.useState(false)
  const refresh = async () => {
    setBusy(true)
    const results = await Promise.allSettled([request('/dsh-qq-bridge/state'), request('/dsh-fish-memory/list'), request('/dsh-feiyu-mood/state'), request('/dsh-speak-up/state')])
    setState({ qq: results[0].value, memory: results[1].value, mood: results[2].value, speak: results[3].value, errors: results.filter(r => r.status === 'rejected').map(r => r.reason.message) })
    setBusy(false)
  }
  React.useEffect(() => { void refresh() }, [])
  const qq = state.qq, memory = state.memory
  const libraries = [...new Map((memory?.sessions || []).map(s => [s.storeId || s.id, s])).values()]
  const stats = [
    ['QQ 后端', !qq ? '—' : qq.NapCat状态?.错 ? '未连接' : qq.NapCat状态?.用户 ? '已连接' : '未连接', qq?.NapCat状态?.昵称 || '在 QQ 互通中配置 NapCat / SnowLuma'],
    ['消息转发', !qq ? '—' : qq.配置?.总开关 ? qq.配置?.试运行 ? '试运行' : '已开启' : '已关闭', '沿用原插件的收发开关与绑定策略'],
    ['长期记忆', !memory ? '—' : memory.全局开关 ? '已开启' : '已关闭', '支持按会话、QQ 来源隔离及语义召回'],
    ['记忆条目', memory ? String(libraries.reduce((n, s) => n + (s.count || 0), 0)) : '—', memory ? libraries.length + ' 个记忆库' : '等待宿主记忆服务'],
    ['鱼的心情', state.mood ? String(state.mood.mood ?? '—') : '—', '按会话或工作区绑定，保留情绪时间线与挂饰'],
    ['主动搭话', !state.speak ? '—' : state.speak.配置?.总开关 ? state.speak.配置?.试运行 ? '试运行' : '已开启' : '已关闭', '复用目标会话的人格、历史、工具和记忆'],
  ]
  return h('div', { className: 'fish-overview' },
    h('section', { className: 'fish-ocean-intro' },
      h('header', { className: 'fish-overview-header' }, h('h1', null, '总览'), h('p', { className: 'fish-muted' }, '连接、记忆与陪伴，都在这里。')),
      h('span', { className: 'fish-badge fish-intro-status' }, '跟随宿主主题'),
      h('div', { className: 'fish-hero-copy' },
        h('span', { className: 'fish-badge fish-eyebrow' }, '大肥鱼 · 伙伴工作台'),
        h('h2', null, '把日常，慢慢记在心上。'),
        h('svg', { className: 'fish-love-line', viewBox: '0 0 600 35', preserveAspectRatio: 'none', 'aria-hidden': true, focusable: 'false' },
          h('path', { d: 'M3 24Q180 8 370 23T553 15C578-12 597 6 577 21C550 9 555-7 567 7' })),
        h('p', { className: 'fish-muted' }, '连接 QQ、照看记忆与心情，让伙伴主动来找你。')),
      h('figure', { className: 'fish-welcome', 'aria-hidden': true }, h('img', { src: '/dsh-feiyu-mood/welcome.png', alt: '', width: 1254, height: 1254, decoding: 'async' })),
      h('div', { className: 'fish-intro-tools' }, button(busy ? '读取中…' : '刷新状态', refresh, false, busy)),
      h(Wave), h(OceanDecor, { className: 'fish-intro-bubbles' }), h(OceanDecor, { kind: 'star', className: 'fish-intro-stars' })),
    state.errors?.length ? h('p', { className: 'fish-message', role: 'alert' }, state.errors.join('\n')) : null,
    h('div', { className: 'fish-stats' }, h(OceanDecor, { kind: 'tail', className: 'fish-stats-tail' }), ...stats.map(([label, value, hint]) => h('article', { className: 'fish-card', key: label },
      h('div', { className: 'fish-muted' }, label), h('div', { className: 'fish-value' }, value), h('div', { className: 'fish-muted' }, hint)))),
    h('div', { className: 'fish-grid' },
      h('article', { className: 'fish-card fish-feature fish-feature-character', 'data-fish-feature': 'qq' },
        h('div', { className: 'fish-feature-copy' }, h('span', { className: 'fish-badge fish-feature-number' }, '01 · 连接'), h('h2', null, 'QQ 互通'),
          h('p', { className: 'fish-muted' }, '统一设置后端连接、私聊与群聊绑定、回复策略。历史记录按段整理后写入目标会话记忆。'),
          h('div', { className: 'fish-actions' }, button('管理 QQ 与历史导入 →', () => navigate(1)))),
        h('figure', { className: 'fish-feature-sticker', 'aria-hidden': true }, h('img', { src: '/dsh-feiyu-mood/sticker-chat.png', alt: '', width: 1254, height: 1254, decoding: 'async' })),
        h(Wave), h(OceanDecor, { className: 'fish-feature-bubbles' })),
      h('article', { className: 'fish-card fish-feature fish-feature-character', 'data-fish-feature': 'memory' },
        h('div', { className: 'fish-feature-copy' }, h('span', { className: 'fish-badge fish-feature-number' }, '02 · 记忆'), h('h2', null, '长期记忆'),
          h('p', { className: 'fish-muted' }, '浏览与编辑记忆，整理档案，配置遗忘与召回。Qwen 语义检索按需启用，保留原有来源隔离。'),
          h('div', { className: 'fish-actions' }, button('打开记忆管理 →', () => navigate(2)))),
        h('figure', { className: 'fish-feature-sticker', 'aria-hidden': true }, h('img', { src: '/dsh-feiyu-mood/sticker-read.png', alt: '', width: 1254, height: 1254, decoding: 'async' })),
        h(Wave), h(OceanDecor, { kind: 'star', className: 'fish-feature-bubbles' })),
      h('article', { className: 'fish-card fish-feature fish-feature-light', 'data-fish-feature': 'mood' },
        h('div', { className: 'fish-feature-copy' }, h('h2', null, '鱼的心情'),
          h('p', { className: 'fish-muted' }, '自动判断心情、查看情绪时间线，管理会话或工作区绑定与挂饰。'),
          h('div', { className: 'fish-actions' }, button('照看心情 →', () => navigate(3)))),
        h(OceanDecor, { kind: 'heart', className: 'fish-feature-symbol' }), h(Wave)),
      h('article', { className: 'fish-card fish-feature fish-feature-light', 'data-fish-feature': 'speak' },
        h('div', { className: 'fish-feature-copy' }, h('h2', null, '主动搭话'),
          h('p', { className: 'fish-muted' }, '配置空闲触发、时段与目标会话，先演练，再按需启用真发。'),
          h('div', { className: 'fish-actions' }, button('管理主动搭话 →', () => navigate(4)))),
        h(OceanDecor, { kind: 'chat', className: 'fish-feature-symbol' }), h(Wave))),
    h('p', { className: 'fish-start fish-muted' }, '首次使用：配置 QQ 后端与会话绑定 → 启用目标会话记忆 → 按需导入历史。历史整理会调用目标会话模型并消耗额度。'))
}

function Updates() {
  const [update, setUpdate] = React.useState(null)
  const [busy, setBusy] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [channel, setChannel] = React.useState('mirror')
  const check = async (force = true) => {
    setBusy(true)
    try { setUpdate(await request('/dsh-big-flsh-aio/update?channel=' + channel + (force ? '&refresh=1' : ''))); setMessage('') }
    catch (e) { setUpdate(null); setMessage(e.message) }
    finally { setBusy(false) }
  }
  const install = async () => {
    setBusy(true); setMessage('正在安装大肥鱼整合包…')
    try {
      await request('/dsh-big-flsh-aio/install?channel=' + channel, { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}' })
      setMessage('安装已完成。请按宿主提示重载或重启 DSH，使新版本生效。')
    } catch (e) { setMessage('安装未完成：' + e.message) }
    finally { setBusy(false) }
  }
  React.useEffect(() => { void check(false) }, [channel])
  const status = !update ? busy ? '正在检查…' : '暂未取得更新信息' : update.legacyRelease ? '此渠道仍为旧编号版本，请等待新系列同步' : update.hasUpdate ? '可更新至 v' + update.latest : update.ahead ? '本地版本高于仓库版本' : '已是最新版本'
  return h('div', null,
    h('section', { className: 'fish-card' },
      h('span', { className: 'fish-badge' }, '仓库 v' + META.repositoryVersion + ' / npm 包 v' + META.version), h('h2', { style: { marginTop: 16 } }, '更新大肥鱼'),
      h('p', { className: 'fish-muted' }, '仓库版本供自己使用；npm 包是经过验证后另行发布的对外版本，两者独立编号。'),
      h('p', null, status),
      h('label', null, '更新渠道 ', h('select', { 'aria-label': '更新渠道', className: 'fish-button', value: channel, disabled: busy, onChange: e => { setUpdate(null); setMessage(''); setChannel(e.target.value) } },
        h('option', { value: 'mirror' }, '国内镜像 · npmmirror'), h('option', { value: 'github' }, 'GitHub 仓库'))),
      h('p', null, link('https://github.com/CHINOSAMAAA/dsh-big-flsh-aio', 'CHINOSAMAAA/dsh-big-flsh-aio ↗')),
      h('div', { className: 'fish-actions' }, button(busy ? '处理中…' : '检查更新', () => check(true), false, busy),
        button('一键更新整合包', install, true, busy || !update?.hasUpdate || !update?.canInstall)),
      update?.devCopy ? h('p', { className: 'fish-muted' }, '当前是本地开发副本，自动安装已禁用。请在项目目录执行 git pull，再运行 npm run build 并重载 DSH。') : null,
      h('div', { className: 'fish-message', role: 'status', 'aria-live': 'polite' }, message)),
    h('section', { className: 'fish-card', style: { marginTop: 20 } },
      h('h2', null, '原作者、项目来源与版本对应'),
      h('div', { style: { overflowX: 'auto' } }, h('table', { className: 'fish-table' },
        h('thead', null, h('tr', null,
          ...['项目名称', '本项目子仓库', '原作者仓库'].map(x => h('th', { key: x, scope: 'col' }, x)),
          h('th', { scope: 'col' }, '整合时的原仓库版本', h('div', { className: 'fish-muted', style: { fontWeight: 400, minWidth: 170 } }, '固定记录整合基线，不随上游最新版本变化')),
          h('th', { scope: 'col' }, '实际内置版本'))),
        h('tbody', null, ...META.upstreamCompatibility.map(item => h('tr', { key: item.url },
          h('td', null, item.name),
          h('td', null, item.forkUrl ? link(item.forkUrl, item.forkName) : item.modulePath),
          h('td', null, link(item.url, item.url.replace('https://github.com/', ''))),
          h('td', null, item.version, h('div', { className: 'fish-muted', title: item.commit }, item.commit.slice(0, 7))),
          h('td', null, item.forkVersion || item.version, h('div', { className: 'fish-muted', title: item.forkCommit || item.commit }, (item.forkCommit || item.commit).slice(0, 7))))))))))

}

function Page() {
  const initialTab = openUpdatesRequested ? UPDATES_TAB : 0
  const [tab, setTab] = React.useState(initialTab)
  const [visited, setVisited] = React.useState([initialTab])
  const navigate = id => { setTab(id); setVisited(old => old.includes(id) ? old : [...old, id]) }
  React.useEffect(() => {
    openUpdatesRequested = false
    showUpdates = () => navigate(UPDATES_TAB)
    return () => { showUpdates = null }
  }, [])
  const render = [() => h(Overview, { navigate }), () => h(QQ), () => h(Memory), () => h(Mood), () => h(Speak), () => h(Updates)]
  const descriptions = ['连接、记忆与陪伴，都在这里。', '连接 QQ 与 DSH，让每段对话找到自己的去处。', '整理值得留下的事，照看每一段共同的记忆。', '看见情绪的变化，也给伙伴一点平复的时间。', '把主动交给恰当的时机，让问候自然发生。', '管理更新渠道，了解大肥鱼的来处。']
  return h('div', { className: 'big-fish' + (tab === 0 ? '' : ' fish-flat') }, h('style', null, css),
    h('div', { className: 'fish-shell' },
      h('aside', { className: 'fish-sidebar' },
        h('div', { className: 'fish-brand' }, h('span', { className: 'fish-logo' }, h(FishIcon, { size: 32 })), h('span', { className: 'fish-brand-name' }, '大肥鱼')),
        h('nav', { className: 'fish-nav', 'aria-label': '大肥鱼功能', role: 'tablist' }, ...tabs.map((label, id) => h('button', {
          type: 'button', key: label, role: 'tab', id: 'fish-tab-' + id, 'aria-label': label, 'aria-selected': tab === id, 'aria-controls': 'fish-panel-' + id,
          tabIndex: tab === id ? 0 : -1, onClick: () => navigate(id), onKeyDown: e => {
            const next = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? (id + 1) % tabs.length : (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? (id + tabs.length - 1) % tabs.length : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : null
            if (next !== null) { e.preventDefault(); navigate(next); e.currentTarget.parentElement.querySelectorAll('[role=tab]')[next].focus() }
          },
        }, h(NavIcon, { index: id }), h('span', null, label)))),
        h('figure', { className: 'fish-sidebar-scene', 'aria-hidden': true }, h('img', { src: '/dsh-feiyu-mood/sticker-book.png', alt: '', width: 1254, height: 1254, decoding: 'async' }), h(Wave), h(OceanDecor)),
        h('div', { className: 'fish-sidebar-note' }, '一点连接，一点陪伴。', h('br'), '仓库 v' + META.repositoryVersion, h('br'), 'npm 包 v' + META.version)),
      h('main', { className: 'fish-workspace' + (tab === 0 ? ' fish-workspace-overview' : '') },
        tab === 0 ? null : h('header', { className: 'fish-page-header' }, h('div', null, h('h1', null, tabs[tab]), h('p', { className: 'fish-muted' }, descriptions[tab])), h('span', { className: 'fish-badge' }, '跟随宿主主题')),
        ...visited.map(id => h('section', { key: id, id: 'fish-panel-' + id, role: 'tabpanel', 'aria-labelledby': 'fish-tab-' + id, hidden: tab !== id }, render[id]())),
        h('footer', { className: 'fish-footer' }, '派生自 Yuuyuko-uu · QQ、记忆、心情与主动搭话 · 原作者许可与来源见「更新与来源」'))))
}

return {
  inject: ['slots'],
  apply(ctx) {
    const slots = ctx.get('slots')
    if (!slots) return
    slots.inject('sidebar.panellist', () => slots.register({ name: 'sidebar.panellist', id: PANEL_ID, order: 20, label: () => '大肥鱼' }, FishIcon))
    slots.inject('main', () => slots.register({ name: 'main', key: PANEL_ID }, Page))
    slots.inject('shell.overlay', () => slots.register({ name: 'shell.overlay', id: 'big-flsh-update-notice' }, () => h(UpdateNotifier, { open: () => {
      openUpdatesRequested = true
      ctx.get('layout')?.selectPanel(PANEL_ID)
      showUpdates?.()
    } })))
  },
}

} });
