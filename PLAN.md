# 开发计划

作者：Menghan Rex Jiang
最后更新：2026-10-15 16:23 EDT（云端会话）

## 近期待办

1. **首页空白区块**：`index.html` 里的 `#music`、`#art`、`#bio` 三个 section 目前是空的。二选一：填入精选内容（各放一两张卡片并链接到对应页面），或者直接删掉，让首页只保留 Hero。
2. **分享图 og:image**：各页已有 Open Graph 标题和描述，但没有 `og:image`。需要做一张 1200×630 的分享图放进 `assets/images/`，在每页 `<head>` 加 `og:image`，并把 `twitter:card` 改为 `summary_large_image`。
3. **Chiptune 状态措辞**：Software 页 Chiptune Noisemaker 卡片写的是 "In development"，实际处于第一阶段。考虑改成更准确的写法（例如 "Phase 1" 或 "Early prototype"）。
4. **README / PLAN / CLAUDE 维护**：每次迭代后更新本文件和 `CLAUDE.md` 的开发者日志。

## 之后可以考虑

- Software 页其余项目公开后，给卡片加上仓库或演示链接（Envelope Ledger 已加；其余仓库仍私有，不放链接）。
- Magic Academy 定名后更新卡片标题，去掉 "(working title)"。

## 约定

- 配色（紫 / 绿 / 黄）保持不变。
