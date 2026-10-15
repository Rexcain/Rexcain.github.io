# CLAUDE.md

面向开发者和 Claude Code 的项目说明：对话重点、迭代记录和开发者日志。
作者：Menghan Rex Jiang

## 项目概况

- 个人主页，纯静态站点（HTML / CSS / 原生 JS），没有构建步骤和依赖。
- 仓库 `Rexcain/Rexcain.github.io`，GitHub Pages 从 `main` 发布，push 后约一分钟上线：https://rexcain.github.io/
- 本地路径：`~/dev/Rexcain.GitHub.io`（mac-mini）。
- 原自定义域名 menghanjiang.net 已删除（CNAME 已移除），不要再加回。

## 文件结构

- `index.html` 首页；`performance.html` 演出视频；`visual-art.html` 视觉艺术；`software.html` 软件项目；`bio.html` 简介。
- `style.css` 全站样式，颜色集中在 `:root` 的 CSS 变量里。
- `script.js` 导航栏滚动、卡片键盘操作、视频和图片弹窗（每页按需初始化，页面缺少某个弹窗时不能报错）、页脚年份。
- `favicon.svg` 网站图标。
- `.claude/launch.json` 仅本地预览用，已被 `.gitignore` 忽略。

## 约定

- 配色紫 / 绿 / 黄保持不变（`--bg #0e0017`、`--text-primary #4dbe79`、`--border #fffc31`）。
- 新页面要加进每一页的导航栏，并带上页脚、meta description 和 Open Graph 标签。
- Software 页项目：Palinmnesia、Magic Academy（暂定名，gameDev）、Chiptune Noisemaker。仓库都是私有的，卡片不放链接。
- `assets/images/WaterMonster.png` 不提交。
- commit 和开发者日志注明时间戳和设备（laptop 或 mac-mini；云端会话另行注明）。作者统一写 Menghan Rex Jiang。

## 当前待办

见 `PLAN.md`。

## 开发者日志

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
