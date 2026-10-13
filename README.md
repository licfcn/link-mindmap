# Link Mindmap

A mindmap plugin that renders your notes as an expandable/collapsible tree. **Each node is a note file** — parent-child relationships are defined by frontmatter links (`children` / `parent`), no IDs or extra data files needed.

Inspired by [Luhmann's Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten), it leverages bidirectional wiki-links to build natural note hierarchies without numbering schemes.

![Mindmap View](img/img1-en.jpg)

![Dashboard View](img/img2-en.jpg)

## Installation

### From Community Plugin Market

1. Go to **Settings → Community plugins → Browse**
2. Search for "Link Mindmap"
3. Click **Install**, then **Enable**

### Manual Installation

1. Download `main.js`, `manifest.json`, and `styles.css` from the [latest release](https://github.com/licfcn/link-mindmap/releases)
2. Create the folder `.obsidian/plugins/link-mindmap/` in your vault
3. Place the three files into that folder
4. Enable the plugin in **Settings → Community plugins**

## Quick Start

1. After enabling, configure the **Notes folder** in settings (default: `01-笔记`)
2. Create a note with `main: true` in frontmatter — this is the mindmap entry point
3. Add child notes via the `children` field
4. Open the mindmap via the ribbon icon or command palette → "Open Link Mindmap"

### Frontmatter Example

```yaml
---
children:
  - "[[Child Note A]]"
  - "[[Child Note B]]"
main: true
status: false
type: "todo"
date: "2026-10-11"
---
```

All field names are customizable in settings.

## Features

### Mindmap View

- **Expand/collapse tree**: click the +/- button on each node or use toolbar to expand/collapse all
- **Pan & zoom**: drag to pan, scroll to zoom; pinch-to-zoom on mobile
- **Fit-to-window**: one-click auto-fit all nodes into view
- **Breadcrumb path navigation**: shows full path from root to current node, click to jump
- **Multi-select mindmap**: select multiple notes and display them together on one mindmap without requiring parent-child links
- **Keyword index filtering**: filter mindmap by keyword index files
- **Search any note as root**: search and set any note as the mindmap root node
- **Horizontal & vertical layouts**: switch between left-to-right and top-to-bottom layouts
- **Export to SVG / PNG / Markdown outline**

### Node Operations (right-click / long-press menu)

- Add child, focus, rename, delete, move, reorder
- Toggle status (done/todo), modify type/date
- Open note in new tab, copy link, copy subtree outline
- Jump to parent (lists all parents for multi-parent nodes)
- Drag node cards to reparent
- Drag connection ports to create additional associations (multi-parent / network)

### Batch Mode

- Multi-select nodes with single click
- Select all / invert selection
- Bulk move, delete, modify type, toggle status

### Keyboard Shortcuts

| Key | Action |
|---|---|
| `↑` / `↓` | Navigate nodes |
| `←` / `→` | Collapse/expand · Go to parent/child |
| `Space` | Expand/collapse current |
| `Enter` | Open selected note |
| `Delete` | Delete selected node |
| `N` | Add child node |
| `B` | Go back |
| `/` | Search |
| `Esc` | Cancel selection / exit batch mode |

### Dashboard (Statistics Workbench)

A data dashboard with rich visualizations to help you understand your knowledge base:

- **Statistics cards**: total notes, main notes, keyword indexes, completed, unlinked, broken links, total links, pending todos — each with percentage indicators
- **Type distribution**: donut chart with legend (click to filter)
- **Completion status**: stacked progress bar showing completed / incomplete / no-date
- **Monthly creation**: bar chart for the past 12 months (click bars to filter)
- **Tree depth distribution**: horizontal bar chart showing node count per depth level (click to filter)
- **Creation heatmap**: GitHub-style yearly heatmap with summary stats
- **Copy stats as Markdown**: export all statistics to clipboard

### Other Features

- **i18n**: auto-detect language, supports Chinese and English (toggle in settings)
- **Mobile support**: long-press menu (500ms), touch gestures, collapsible toolbar, enlarged tap targets (≥36px)
- **Config export/import** (JSON backup)
- **Performance**: text width cache, incremental updates, viewport culling for >500 nodes

## Settings

| Category | Options |
|---|---|
| Paths | Notes folder, index folder, template path |
| Field names | All frontmatter fields customizable (children, parent, main, status, type, date, title) |
| Layout | Default depth, max name length, spacing, node height |
| Behavior | Auto-write backlinks, auto-locate current note |
| Display | Show time/type/child count/icons, curve connections |
| Colors | Primary, main note, duplicate, selected, completion |
| Types | Custom types with auto-assigned colors, reorder, delete |
| Language | Auto / Chinese / English |

## Compatibility

- Minimum app version: 1.5.0
- Desktop and mobile (phone/tablet)
- No external services — fully local operation

## Feedback

- Report issues: [GitHub Issues](https://github.com/licfcn/link-mindmap/issues)

## License

[MIT](LICENSE)

---

# Link Mindmap（链接思维导图）

> 把笔记渲染成可展开/折叠的思维导图。**一个节点就是一篇笔记**，父子关系由 frontmatter 里的笔记链接（`children` / `parent`）建立——无需编号、无需额外数据文件，纯靠双链自然关联。

![导图视图](img/img1.jpg)

![工作台视图](img/img2.jpg)

## 核心理念

- **节点 = 笔记文件**：每个节点对应一篇 Markdown 笔记，不是外部数据
- **关系 = frontmatter 链接**：父笔记的 `children` 字段存 `[[子笔记]]` 列表，顺序即兄弟顺序
- **无 id 概念**：不需要给笔记编号，靠 `[[wikilink]]` 建立关联——重命名时自动同步
- **允许多父/网状**：一个笔记可以被多个父笔记引用，形成网状知识图谱
- **卢曼笔记友好**：结合层级思想，适配闪念/文献/永久笔记的工作流

## 安装

### 从社区插件市场安装

1. 设置 → 社区插件 → 浏览
2. 搜索「Link Mindmap」
3. 点击安装并启用

### 手动安装

1. 下载最新 [Release](https://github.com/licfcn/link-mindmap/releases) 中的 `main.js`、`manifest.json`、`styles.css`
2. 在 vault 中创建 `.obsidian/plugins/link-mindmap/` 目录
3. 将三个文件放入该目录
4. 设置 → 社区插件 → 启用「Link Mindmap」

## 快速开始

1. 启用插件后，在设置中配置「笔记文件夹」（默认 `01-笔记`）
2. 创建笔记，在 frontmatter 中标记 `main: true` 作为导图入口
3. 用 `children` 字段建立父子关系
4. 点击功能区图标或命令面板「打开链接思维导图」

### 笔记 frontmatter 示例

```yaml
---
children:
  - "[[子笔记A]]"
  - "[[子笔记B]]"
main: true
status: false
type: "待办"
date: "2026-10-11"
---
```

> 所有 frontmatter 字段名均可在设置中自定义。

## 功能清单

### 导图视图

| 功能 | 说明 |
|---|---|
| 展开/折叠 | 点击节点右侧按钮或菜单操作 |
| 全展/全折 | 工具栏一键展开或折叠所有节点 |
| 平移缩放 | 鼠标拖动平移、滚轮缩放；手机端双指缩放 |
| 面包屑路径 | 显示当前根节点到祖先的完整路径，可点击跳转 |
| 多选导图 | 选择多篇笔记同时显示在一张导图上（无需关联） |
| 关键词索引 | 按关键词索引文件过滤显示导图 |
| 搜索 | 搜索任意笔记作为导图根节点 |
| 适应窗口 | 一键缩放至完整显示所有节点 |
| 横纵布局 | 横向（左→右）或纵向（上→下）布局切换 |
| 导出 | 导图为 SVG / PNG / Markdown 大纲 |

### 节点操作（右键/长按菜单）

| 操作 | 说明 |
|---|---|
| 打开笔记 | 在新标签页打开文件 |
| 新增子节点 | 创建子笔记并自动写入 children 链接 |
| 聚焦到此节点 | 将该节点设为导图根节点 |
| 跳到上级 | 跳转到父笔记（多父时列出所有上级） |
| 标记完成/取消 | 切换 status 字段 |
| 修改类型/日期 | 弹出选择框修改对应字段 |
| 重命名 | 重命名文件并同步更新所有引用 |
| 复制链接 | 复制 `[[笔记名]]` 到剪贴板 |
| 复制子树大纲 | 复制整棵子树为缩进列表 |
| 移动到父卡 | 移动到指定父笔记下 |
| 同级排序 | 在同级节点中调整顺序 |
| 删除节点 | 移除关联/删除文件（含子节点选择） |

### 拖拽操作

| 操作 | 说明 |
|---|---|
| 拖动节点卡片 | 移动节点到其他父笔记下 |
| 拖动右侧端口 | 连线建立额外关联（多父/网状） |

### 批量模式

- 单击选中多个节点，全选/反选
- 批量移动、删除、修改类型、标记完成

### 快捷键

| 键 | 功能 |
|---|---|
| `↑` / `↓` | 上/下导航节点 |
| `←` / `→` | 左：折叠/到父节点 · 右：展开/到子节点 |
| `Space` | 展开/折叠当前节点 |
| `Enter` | 打开选中节点笔记 |
| `Delete` | 删除选中节点 |
| `N` | 新增子节点 |
| `B` | 返回上一次视图 |
| `/` | 唤起搜索 |
| `Esc` | 取消选中 / 退出批量模式 |

### 工作台（统计仪表盘）

一键切换的数据仪表盘，聚合展示知识库全貌：

| 统计维度 | 说明 |
|---|---|
| 统计卡片 | 笔记总数/主笔记/关键词索引/已完成/未关联/失效链接/链接总数/待办未完成，含百分比 |
| 类型分布 | 环形图 + 图例（可点击筛选） |
| 完成状态 | 堆叠进度条（已完成/未完成/未标日期） |
| 月度创建 | 近12个月柱状图（点击柱子筛选当月新增） |
| 树深度分布 | 各层节点数横向柱状图（点击筛选该层节点） |
| 创建热力图 | GitHub 风格年度热力图，含统计摘要 |
| 复制统计 | 一键复制所有统计为 Markdown |

### 其他功能

- **中英文切换**：自动检测语言，支持中文/英文切换（设置中切换）
- **导出/导入配置**：JSON 格式备份和恢复所有设置
- **性能优化**：文本宽度缓存、增量更新、视口裁剪（>500 节点）

## 设置项

| 分类 | 选项 |
|---|---|
| 路径配置 | 笔记文件夹、索引文件夹、模板路径 |
| 字段名配置 | 所有 frontmatter 字段名可自定义 |
| 布局配置 | 默认层数、名称字数、间距、节点高度 |
| 行为配置 | 写入反向链接、自动定位当前笔记 |
| 显示配置 | 显示时间/类型/子数/图标、曲线连接 |
| 颜色配置 | 主色/主笔记/重复/选中/完成色 |
| 类型配置 | 自定义类型，自动分配颜色，排序/删除 |
| 语言配置 | 自动 / 中文 / English |

## 手机端适配

- 长按 500ms 弹出菜单（替代右键）
- 双指缩放、单指拖放
- 增大点击区域（≥ 36px）
- 工具栏可折叠

## 技术细节

- 插件 ID：`link-mindmap`
- CSS 前缀：`lkm-`
- 视图类型：`link-mindmap-view`
- 最低版本：1.5.0
- 功能区图标：`git-merge`（Lucide）
