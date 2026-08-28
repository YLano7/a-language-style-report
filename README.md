# 在命令与关怀之间

匿名说话者 A 的语言习惯、说理方式与精神世界研究报告。

这是一份可离线阅读、可直接部署到 GitHub Pages 的静态 HTML 报告。报告不依赖构建工具、第三方字体、远程图片或 JavaScript 框架；正文引用的学术链接需要联网访问。

## 本地阅读

直接双击 `index.html` 即可。页面右上角提供明暗主题切换与“打印”按钮；使用浏览器打印功能可以导出 PDF。打印样式已针对 A4 纸张做分页和颜色适配。

如浏览器对本地 JavaScript 有额外限制，可在本文件夹中启动任意静态服务器，例如：

```powershell
python -m http.server 8000
```

随后访问 `http://localhost:8000/`。

## 目录结构

```text
A语言风格研究报告/
├── .nojekyll
├── index.html
├── README.md
└── assets/
    ├── report.js
    └── style.css
```

## 部署到 GitHub Pages

1. 新建一个 GitHub 仓库，把本文件夹内的全部内容上传到仓库根目录；务必保留 `.nojekyll`。
2. 在仓库的 **Settings → Pages** 中选择 **Deploy from a branch**。
3. 选择包含这些文件的分支及根目录 `/ (root)`，保存后等待部署完成。
4. 也可以把上述内容放进仓库的 `docs/` 目录，并在 Pages 设置中选择该目录。

GitHub 的最新操作界面可能调整，部署时以 [GitHub Pages 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) 为准。

## 版面说明

网页采用学术刊物内页的窄栏正文、边栏目录、脚注式引文、数据卡片和原创 SVG 图表。响应式布局会在窄屏上折叠为单栏；打印规则参考 CSS Paged Media 规范，尽量避免标题、图表与引文块跨页断裂。相关技术说明可参见 [MDN Paged Media](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Paged_media) 与 [MDN Multi-column Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_multicol_layout)。

## 研究材料

报告以用户提供的封闭语料为全部人物证据，围绕句法节奏、会话方式、叙事逻辑、关系伦理与心理表达展开。外部文献只用于说明分析概念和研究方法。
