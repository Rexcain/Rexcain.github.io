# CLAUDE.md

面向开发者和 Claude Code 的项目说明：对话重点、迭代记录和开发者日志。
作者：Menghan Rex Jiang

## 项目概况

- 个人主页，纯静态站点（HTML / CSS / 原生 JS），没有构建步骤和依赖。
- 仓库 `Rexcain/Rexcain.github.io`，GitHub Pages 从 `main` 发布，push 后约一分钟上线：https://rexcain.github.io/
- 本地路径：`~/dev/Rexcain.GitHub.io`（mac-mini）。
- 原自定义域名 menghanjiang.net 已删除（CNAME 已移除），不要再加回。

## 文件结构

- `index.html` 首页（只有一屏：名字、定位语、竖排导航，没有顶部导航栏）；`research.html` 研究页（theREALinst，长文）；`performance.html` 演出视频；`visual-art.html` 视觉艺术；`software.html` 软件项目；`bio.html` 简介。
- `assets/audio/` 研究页的试听（MP3 192 kbps，由 theREALinst 渲染；文件名用英文）。
- `style.css` 全站样式，颜色集中在 `:root` 的 CSS 变量里。
- `script.js` 导航栏滚动、卡片键盘操作、视频和图片弹窗（每页按需初始化，页面缺少某个弹窗时不能报错）、页脚年份。
- `favicon.svg` 网站图标。
- `.claude/launch.json` 仅本地预览用，已被 `.gitignore` 忽略。

## 约定

- 配色紫 / 绿 / 黄保持不变（`--bg #0e0017`、`--text-primary #4dbe79`、`--border #fffc31`）。
- 新页面要加进每一页的导航栏和首页的 `.home-links`，并带上页脚、meta description 和 Open Graph 标签。首页保持一屏，不加内容区块。
- 网站定位：Rx 的个人网站，不是专为申请做的；文字里不提博士、申请、导师。研究内容放在最前面。导航顺序 Research / Software / Performance / Visual Arts / Bio。
- Software 页项目：theREALinst（链到 research.html）、Palinmnesia、Multi-Agents Video Game（gameDev）。Chiptune Noisemaker 和 Envelope Ledger 已按 Rx 要求从网站删掉（2026-11-06）。仓库都是私有的，卡片不放仓库链接。卡片平时灰框（#555），悬停变黄。
- **音频响度（Rx 定，不能违反）**：不做任何数字归一（不用 ffmpeg `loudnorm`、不靠母线 `lufs=` 自动调）。用 gain staging：母线 `lufs=none push=none ceiling=-1`，按原始电平设轨道 `fader` 让混音过 limiter 落在 −14 LUFS；同一组对比共用一个推子（按参考段），组内的响度差是现象的一部分。导出 MP3 时不再加增益。
- 研究页 Listen 一节的方向（Rx 定）：强调乐器和演奏者按真实物理机制建模、能再现物理世界的现象（同指法不同唇形 / 气的多音、没练过的演奏者吹不准、气息不稳音色不稳、力量不够高音发虚），不强调"没有采样"。钢琴暂写 Coming soon。
- 研究页里的数字和文献都出自 theREALinst 的 `Docs/` 设计文档和 `Research/README.en.md`，改之前先核对原文。
- commit 和开发者日志注明时间戳和设备（laptop 或 mac-mini；云端会话另行注明）。作者统一写 Menghan Rex Jiang。

## 当前待办

见 `PLAN.md`。

## 开发者日志

### 2026-11-06 02:25 EST · mac-mini（Claude Code）
- Bio：演出一段压缩成三句（去掉五个城市、The Warehouse / Ash Fure、"for bands and film"）。

### 2026-11-06 02:15 EST · mac-mini（Claude Code）
- Software 页：去掉所有项目卡片的技术标签（Rx 觉得太多），删掉不再用的 `.project-tags` 样式。

### 2026-11-06 01:50 EST · mac-mini（Claude Code）
- Software 页：删掉 Chiptune Noisemaker、Envelope Ledger；Magic Academy 改名 Multi-Agents Video Game；项目卡片改成平时灰框、悬停变黄。
- 研究页：The instruments、The players 改成短段落，保留文献引用（补进 Myers 2012、Chabassier & Duruflé 2012、Ducceschi & Bilbao 2022、Hirschkorn 2004、Rahn 1946、NASA 1978、Valero-Cuevas 1998、Wu 2003）；去掉数字方框；Next 按现状重写；How I work 精简。Listen：Air 一组、大号多音删掉；新增 Double tonguing（小号、圆号）；Brass chorale 改成旧 STK brass 与 theREALbrass 对比（旧的在前）；Practice 没练过的在前。

### 2026-11-06 00:45 EST · mac-mini（Claude Code）
- 联系邮箱改回 rxsrecs@gmail.com。
- 研究页 Listen 重写：多音（圆号多音 2、大号多音 1，各 A / B / 等效单音接成一段）、练过 vs 没练过（`transitions=0 listen=0`）、气息稳 vs 不稳（`breathSway` 2% vs 12%）、力量足 vs 30%（`strength=0.3`）、乐句（双吐三吐、小号号角、长号号角、铜管圣咏）、钢琴 Coming soon。
- 音频全部按 gain staging 重渲（见上面"音频响度"）；之前用 ffmpeg loudnorm 和母线自动响度做的 MP3 已删。

### 2026-11-06 00:15 EST · mac-mini（Claude Code）
- 首页改成只有一屏（参考 Rx 朋友的网站 shashachen.com、ivyfu.art、levilu.com）：名字、定位语、竖排五个链接，不再有顶部导航栏、当前研究和 Also 区块。`script.js` 在没有 `#navbar` 时跳过导航栏滚动效果。删掉不再用的 `#hero`、`.hero-*`、`.feature-card` 样式。

### 2026-11-06 00:05 EST · mac-mini（Claude Code）
- Rx 的修改：定位语改为 "Composer-improviser · Game developer"（不用 music technologist）；去掉首页名字下的黄色竖线（`.hero-line`）；首页去掉 About（已有 Bio 页）。
- 研究页去掉两张数据图，改成音频试听（Listen 一节放在介绍之后）：`assets/audio/` 下 5 段 MP3（小号练习曲旋律、双吐三吐、小号号角、长号号角、铜管圣咏），由 theREALinst 的 .song 渲染、响度统一到 −18 LUFS、192 kbps。

### 2026-11-05 23:50 EST · mac-mini（Claude Code）
- 为博士申请改版：新增 `research.html`（theREALinst：研究问题、乐器、演奏者、两张图、关键数字、未解决的问题、工作方式、参考文献；试听一节待放音频）；`assets/images/brass-playing-map.svg`、`piano-touch.svg` 由 `Engine/practice/` 的数据画出。
- 首页：Hero 改为 "Composer-improviser · Music technologist"、高度 100vh → 55vh；三个空 section 换成 About、Current research、Also。
- Software 页加 theREALinst 并重排；Palinmnesia、Magic Academy 描述按各自 README 补全；Chiptune 状态改为 "Early prototype"。
- Bio 页写成完整简介（第一人称），邮箱改为 Dartmouth 邮箱，加 GitHub 链接。
- 各页导航加 Research；`style.css` 加长文页面（`.prose`）和首页的样式。

### 2026-10-17 21:55 EDT · mac-mini
- 清理 `assets/`：里面只有一张未被引用的纯白占位图 `WaterMonster.png`（5 月 30 日在网页上传后又在远端删除，本地副本一直残留，才显示为未跟踪）。移走该文件，并删除 CLAUDE.md / PLAN.md 里"WaterMonster.png 不提交"的过时约定；之后放进 `assets/images/` 的图片（如 og:image）正常提交。

### 2026-10-17 21:40 EDT · mac-mini
- Software 页新增 Envelope Ledger 卡片（Released，链接到 https://rexcain.github.io/Envelope-Budgeting-Tool/ 和源码仓库），放在第一位；`style.css` 加 `.project-links`。

### 2026-10-15 16:23 EDT · 云端会话（Claude Code）
- 新建 `README.md`（面向读者）、`PLAN.md`（开发计划）、`CLAUDE.md`（本文件），内容根据提交历史和项目记忆整理。

### 2026-10-15 04:22 EDT · mac-mini
- `53e5ef1` Chiptune 占位卡片换成 Chiptune Noisemaker；项目卡片精简为状态、名称、副标题和标签。

### 2026-10-15 04:10 EDT · mac-mini
- `09bd25e` 新增 Software 页（Palinmnesia、魔法学院游戏、Chiptune），各页导航栏加入 Software。

### 2026-10-15 04:02 EDT · mac-mini
- `bd5d617` 修复全站问题：视觉艺术页灯箱打不开、Bio 邮箱链接缺 `mailto:`、卡片悬停动画被覆盖；补键盘操作和弹窗焦点管理；各页加页脚、当前页高亮、小屏导航；加 meta description、Open Graph、canonical 和 favicon；支持 prefers-reduced-motion；加 `.gitignore`。

### 2026-05-30 至 2026-06-01
- 早期版本：通过 GitHub 网页上传和编辑搭建多页结构；试过自定义域名后删除 CNAME。
