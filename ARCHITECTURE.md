# Felix Forge — 博客架构与开发指南

写给从 Java 后端走过来的自己 / 未来想接手维护这个仓库的人。

---

## 1. 一句话简介

这是个**静态网站**（Static Site）— 所有页面在 `npm run build` 时一次性预渲染成 HTML 文件，部署到 CDN 提供服务。运行时**没有任何后端进程、数据库、API**。

跟 Java 世界对比：

| Java 概念 | 这里对应的 |
|---|---|
| Spring Boot 应用 | ❌ 没有，纯前端 |
| Tomcat | ❌ 没有 |
| Web 服务 | CDN（Cloudflare Pages / GitHub Pages）直接返回 HTML 文件 |
| `mvn package` 生成 .jar | `npm run build` 生成 `dist/` 目录里一堆 .html |
| `mvn spring-boot:run` 本地起服务 | `npm run dev` 起开发服务器（带 hot reload） |
| `pom.xml` | `package.json` |
| `~/.m2/repository` | `node_modules/` |
| Java 类 | TypeScript / Astro 组件 |
| Maven Central | npm registry |

---

## 2. 技术栈

### 核心框架

- **[Astro 6](https://astro.build/)** — 静态站点生成器（Static Site Generator, SSG）
  - 类比：相当于 Spring Boot 之于 Java，但只用来生成静态 HTML
  - 特点：把 `.astro` 模板文件 + Markdown 文章一起编译成 HTML
  - 设计原则：默认零 JS（不像 React，跳到下一页不会全站重渲染）

### 语言

- **TypeScript** — 跟 Java 一样的强类型语言，编译成 JavaScript
- **Markdown** — 用来写博客文章（`.md` 文件）
- **CSS** + **Tailwind CSS v4** — 样式
  - Tailwind 是用预设的 class 名拼样式（`class="text-lg font-bold"`），跟 CSS in JS 思路不同

### 工具链

| 工具 | 干什么 | Java 类比 |
|---|---|---|
| **npm** | 包管理 + 脚本运行 | Maven |
| **Vite** | 构建打包 + dev server | 类似一个超快的 webpack |
| **Node.js 22** | 跑 npm 和构建的 JS 运行时 | JVM |
| **sharp** | 图片缩放（脚本用） | 比如 ImageIO |

### 部署

- **GitHub Pages** — 全球访问 `https://felixtheforge.github.io`
  - 触发：`git push origin main` → `.github/workflows/deploy.yml` 跑构建 + 部署
- **Cloudflare Pages** — 国内访问更快 `https://felixtheforge-github-io.pages.dev`
  - 触发：同上，GitHub webhook 自动通知

### 附加功能（外部服务）

- **Giscus** — 评论系统（用 GitHub Discussions 当数据库）
- **Pagefind** — 全文搜索（构建时预编译索引，无后端）
- **Cloudflare Web Analytics** — 访客统计
- **mcsrvstat.us** API — MC 服务器在线状态（前端 fetch）
- **YouTube IFrame API** — 音乐播放

---

## 3. 文件结构（按重要性排序）

```
PersonalBlog/
│
├── src/                          ← 🌟 你 95% 的改动都在这里
│   ├── config/
│   │   └── site.ts              ← ⭐ 个人信息 / 友链 / MC / 书单 / 音乐 / 评论 token 等所有配置
│   │
│   ├── content/
│   │   └── blog/                ← ⭐ 所有博客文章 (.md 文件)
│   │       ├── hello-world.md
│   │       └── ...
│   │
│   ├── pages/                   ← 路由（每个文件 = 一个 URL）
│   │   ├── index.astro             → /
│   │   ├── about.astro             → /about
│   │   ├── reading.astro           → /reading
│   │   ├── friends.astro           → /friends
│   │   ├── minecraft.astro         → /minecraft
│   │   ├── 404.astro               → 404 页面
│   │   ├── rss.xml.ts              → /rss.xml（RSS 订阅源）
│   │   ├── blog/
│   │   │   ├── index.astro         → /blog（文章列表）
│   │   │   └── [slug].astro        → /blog/:slug（每篇文章，动态路由）
│   │   └── tags/
│   │       ├── index.astro         → /tags（标签云）
│   │       └── [tag].astro         → /tags/:tag（某标签下文章列表）
│   │
│   ├── layouts/                 ← 页面骨架（多个页面共享的外壳）
│   │   ├── BaseLayout.astro     ← 全站共用：navbar + footer + 主题 / 语言切换
│   │   └── PostLayout.astro     ← 文章详情页骨架：sidebar + 正文 + TOC + 评论
│   │
│   ├── components/              ← 可复用的小组件
│   │   ├── Socials.astro        ← 社交图标行
│   │   ├── Comments.astro       ← Giscus 评论嵌入
│   │   └── SearchModal.astro    ← Cmd+K 搜索弹窗
│   │
│   ├── styles/
│   │   └── global.css           ← 全站样式 + 主题色变量
│   │
│   ├── utils/
│   │   └── readingTime.ts       ← 阅读时长计算
│   │
│   └── content.config.ts        ← 告诉 Astro 怎么解析 src/content/blog/*.md
│
├── public/                      ← 静态资源（直接复制到部署）
│   ├── avatar.png               ← 头像
│   ├── favicon.svg              ← 浏览器 tab 图标
│   ├── robots.txt               ← 搜索引擎规则
│   └── minecraft/               ← MC 板块的图片
│       ├── banner.jpg
│       └── ...
│
├── scripts/
│   └── optimize-images.mjs      ← 一次性脚本：把 /public/ 大图压缩出 -sm / -md 版本
│
├── .github/
│   └── workflows/
│       └── deploy.yml           ← GitHub Actions 自动构建 + 部署
│
├── dist/                        ← 构建产物（git ignore，会自动生成）
│   └── ...html, css, js
│
├── astro.config.mjs             ← Astro 配置：站点 URL、集成（sitemap、pagefind）
├── package.json                 ← 项目依赖 + 命令脚本（≈ pom.xml）
├── package-lock.json            ← 锁定每个依赖的具体版本（≈ Maven 的 -SNAPSHOT lock）
├── tsconfig.json                ← TypeScript 编译器配置
└── ARCHITECTURE.md              ← 这份文档
```

### 三个最常改的位置

| 占改动 | 路径 |
|---|---|
| **80%** | `src/config/site.ts`（任何配置 / 文案 / 链接）|
| **15%** | `src/content/blog/*.md`（写或改文章）|
| **5%** | `public/`（换图片资源）|

---

## 4. 本地开发环境

### 一次性安装

#### 4.1 安装 Node.js

你机器上已经有 `D:\tool\All_ide\nodejs22\`。**检查版本**：

```bash
node -v       # 应该是 v22.x.x
npm -v        # 应该是 10.x.x
```

如果没有，去 https://nodejs.org/ 下载 LTS 版（v20 或 v22）。

#### 4.2 安装 VS Code

下载 https://code.visualstudio.com/

**必装扩展**（VS Code 里 `Ctrl+Shift+X` 搜索）：

| 扩展 | 作用 |
|---|---|
| **Astro** （by Astro）| `.astro` 文件高亮 + 智能提示 |
| **Tailwind CSS IntelliSense** | Tailwind class 名补全 |
| **Markdown All in One** | 写 .md 文章好用 |
| **ESLint** | 代码检查 |
| **Prettier - Code formatter** | 自动格式化 |
| **GitLens** | 看 git 历史 |

#### 4.3 克隆仓库 + 安装依赖

```bash
# 克隆（如果还没在本地）
git clone https://github.com/FelixTheForge/felixtheforge.github.io.git
cd felixtheforge.github.io

# 装依赖（第一次会慢，之后秒装）
npm install
```

跟 `mvn dependency:resolve` 一个意思 — 把 `package.json` 里列出的所有依赖下载到 `node_modules/`。

### 用 VS Code 打开

```bash
code .
```

或在 VS Code 里 `File → Open Folder` 选这个目录。

---

## 5. 日常开发流程

### 5.1 启动开发服务器

VS Code 里按 `` Ctrl + ` `` 打开终端，运行：

```bash
npm run dev
```

输出会显示：

```
  astro  v6.x.x ready in 234 ms
  ┃ Local    http://localhost:4321/
```

浏览器打开 `http://localhost:4321/` 看到博客。

**特性**：
- **修改任何文件保存** → 浏览器自动刷新（hot reload）
- 比 Spring Boot devtools 快得多，通常 100ms 内重新加载
- 控制台会显示编译错误（红字）
- `Ctrl+C` 停止

### 5.2 修改 → 看效果 → 决定要不要提交

边写边看，**不满意改回去 / 推翻重来都行**（dev 模式下没人看到）。觉得行了再走下一步。

### 5.3 提交到 git

```bash
git add -A                           # 把所有改动加入暂存
git commit -m "改了什么的说明"         # 创建一个提交
git push                             # 推到 GitHub
```

VS Code 左边有个**源码控制图标**（分支图标），点开后用图形界面操作也行：
1. 看到所有改动文件列表
2. 在 message 输入框写 commit 信息
3. 点 ✓ Commit 按钮
4. 点 ↑ 同步（推送）

### 5.4 部署

**完全自动**。`git push` 之后：

- GitHub Actions 30 秒内开始构建
- 同时 Cloudflare Pages 也开始构建
- **两边各 1~2 分钟完成**
- 浏览器访问 `https://felixtheforge.github.io` 或 `https://felixtheforge-github-io.pages.dev` 看到新版本

你**不需要做任何手动部署动作**。

---

## 6. 关键命令速查

VS Code 终端里：

| 命令 | 干什么 |
|---|---|
| `npm install` | 装依赖（首次 / 拉了新代码 / 改了 package.json 后）|
| `npm run dev` | 起本地开发服务器（默认 4321 端口） |
| `npm run build` | 编译生产版本到 `dist/`，包括预渲染、压缩、生成 sitemap 和搜索索引 |
| `npm run preview` | 本地预览构建结果（用来验证 build 没问题）|
| `node scripts/optimize-images.mjs` | 给 `public/minecraft/` 里的大图生成缩略版本 |
| `git status` | 看哪些文件改了 |
| `git diff` | 看具体改了什么 |
| `git log --oneline -10` | 看最近 10 次提交 |
| `git revert <hash>` | 撤销某次提交（创建一个反向提交，安全）|

---

## 7. 从 Java 到这套技术的概念翻译

### TypeScript ↔ Java

```ts
// TypeScript
interface User {
  name: string;
  age: number;
  email?: string;        // 可选字段，相当于 @Nullable
}

const user: User = { name: 'Alice', age: 30 };

function greet(u: User): string {
  return `Hello, ${u.name}`;
}
```

```java
// Java 对照
public class User {
  String name;
  int age;
  String email;  // 可选 → @Nullable

  public User(String name, int age) { ... }
}

User user = new User("Alice", 30);

String greet(User u) {
  return "Hello, " + u.name;
}
```

差异：
- TS 用 `interface`/`type` 描述结构，不用 `class` 也能拥有强类型
- 没有 `private`/`public`（除了 class 内）
- 函数是一等公民（可以赋值给变量）
- 数组泛型写法：`User[]` 或 `Array<User>` 对应 Java 的 `List<User>`

### `.astro` 文件结构

```astro
---
// 这里是"前置脚本"，相当于 Java Controller 的方法体
// 在【构建时】执行，可以读文件、调 API、计算
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
const total = posts.length;
---

<!-- 下面是 HTML 模板，可以嵌入 {表达式} -->
<html>
<body>
  <h1>共 {total} 篇文章</h1>
  <ul>
    {posts.map(p => (
      <li><a href={`/blog/${p.id}`}>{p.data.title}</a></li>
    ))}
  </ul>
</body>
</html>

<style>
  /* CSS 写这里，自动 scoped，只影响这个文件 */
  h1 { color: blue; }
</style>

<script>
  // 这里是【运行时】JS，会发送到浏览器执行
  console.log('页面加载完成');
</script>
```

类比 JSP：
- `---` 之间 = JSP 的 `<% Java 代码 %>`，但是构建时执行（不是请求时）
- HTML 主体 = JSP 的模板
- `<script>` = 真正在浏览器跑的 JS

但有一个关键区别：**Astro 默认零 JS 到浏览器**。`<script>` 里写的代码会变成静态 JS 文件，不是每次请求都执行。

### Markdown 文章

```md
---
title: "文章标题"
date: "2026-06-08"
tags: ["tech", "java"]
cover: "https://封面图URL"
---

正文。**加粗**、*斜体*、`代码`、[链接](url)。

## 二级标题

- 列表项 1
- 列表项 2

```java
// 代码块
System.out.println("Hello");
```

> 引用块
```

`---` 之间是 **frontmatter**（YAML 格式），Astro 把它解析成结构化数据，模板可以读：`post.data.title`、`post.data.tags` 等。

---

## 8. 常见任务怎么做

### 8.1 写一篇新文章

1. 在 `src/content/blog/` 下新建 `my-new-post.md`
2. 复制现有文章的 frontmatter 头：
   ```md
   ---
   title: "标题"
   date: "2026-06-08"
   description: "一句话摘要"
   tags: ["tech"]
   cover: "https://图片URL"
   ---
   ```
3. 下面用 markdown 写正文
4. 保存 → `localhost:4321/blog/my-new-post` 立刻能看（dev 模式）

### 8.2 改个人信息 / 配置

只动 `src/config/site.ts`，文件里每段都有中文注释告诉你改哪。

### 8.3 加图片

1. 把图放进 `public/`（比如 `public/photos/IMG_1234.jpg`）
2. 在文章 / 配置里用绝对路径引用：`/photos/IMG_1234.jpg`

### 8.4 改样式

- **改主题色**：`src/styles/global.css` 顶部 `:root[data-theme="light"]` 里的 `--accent` 等变量
- **改某个组件**：找对应 `.astro` 文件，底部的 `<style>` 块
- **加全站样式**：写进 `src/styles/global.css`

### 8.5 加新页面

1. 在 `src/pages/` 下建文件，比如 `projects.astro`
2. URL 自动变成 `/projects`
3. 模板：
   ```astro
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   import { SITE } from '../config/site';
   ---
   <BaseLayout title={`Projects — ${SITE.title}`}>
     <div class="page-wrap">
       <h1>Projects</h1>
       <!-- 你的内容 -->
     </div>
   </BaseLayout>
   ```
4. 在 `BaseLayout.astro` 的 navbar 里加链接（搜 `nav-links` 找到位置）
5. 在同文件的 i18n 字典加翻译

---

## 9. 调试技巧

### 9.1 编译错误

`npm run dev` 跑着的时候改坏了文件，终端会立刻显示红字错误。常见：

- **`Cannot find module 'xxx'`** → 你忘了 `import`，或者引用了不存在的文件
- **`Property 'foo' does not exist on type 'Bar'`** → TS 类型不匹配，检查 frontmatter 字段名拼写
- **`Expected ">" but found "/"`** → JSX 标签没正确闭合（HTML 里别忘 `<img ... />` 自闭合）

### 9.2 浏览器调试

`F12` 打开 DevTools：

- **Console** → 看 JS 报错和 `console.log()` 输出
- **Network** → 看请求是否失败
- **Elements** → 看实际渲染的 HTML 和 CSS
- **Sources** → 设断点

跟 Chrome DevTools 调 Java SpringBoot 的差不多。

### 9.3 build 失败了

```bash
npm run build
```

如果失败，最后一段红字会告诉你哪个文件哪一行。Build 通过 = 部署不会失败。

---

## 10. 版本控制 / 回滚

### 看历史

```bash
git log --oneline -20
```

会显示：
```
abc1234 fix: navbar wraps when zoomed
def5678 feat: TOC sidebar
...
```

### 撤销一次错误的提交

```bash
git revert abc1234       # 创建一个反向提交，最安全
git push
```

### 看某次提交改了什么

```bash
git show abc1234
```

### 用 GitHub 网页比对

`https://github.com/FelixTheForge/felixtheforge.github.io/commit/<hash>` 直接看 diff。

### 备份 tag

仓库里有个 tag `pre-apple-redesign`，对应 Apple 风改造之前的旧版本。万一新版改坏到底：

```bash
git checkout pre-apple-redesign   # 进入只读旧版本
# 或者
git reset --hard pre-apple-redesign   # 强制回到那个版本（破坏性）
git push --force
```

---

## 11. 你以后想加什么功能

### 简单（30 分钟内）
- 新文章 / 新书 / 新友链 → 改 `site.ts` 或加 `.md`
- 改文案 / 改颜色 / 改字号 → CSS 或 site.ts

### 中等（1~3 小时）
- 加一个新页面（比如 `/projects` 项目集）
- 接入新的第三方服务（统计 / 评论 / 表单）
- 改导航结构

### 复杂（半天到一天）
- 加新内容类型（除了 blog，新增 books / projects collection）
- 接入数据库（这就脱离静态站范畴了，要考虑 Astro 的 SSR 模式 + 后端 API）
- 加身份认证 / 用户系统

**搞复杂功能前问自己**：还要不要保持静态站？如果不要了，可能换个全栈框架（Next.js / Nuxt / SvelteKit）更合适。

---

## 12. 给 Java 后端转全栈的学习建议

按顺序：

1. **JavaScript 基础**（一周）— 重点：`let/const`、箭头函数、解构、Promise/async/await、Array 方法（map/filter/reduce）
2. **TypeScript**（几小时）— 你 Java 底子直接看官方 Handbook，类型系统比 Java 更灵活，不难
3. **HTML + CSS 基础**（一周）— flexbox 和 grid 是关键。重点理解盒模型
4. **Astro 文档**（半天）— https://docs.astro.build 通读一遍
5. **React 或 Vue**（两周）— 现代前端的"Spring Boot"，做交互式应用必学。**先学一个**就行
6. **NodeJS + Express/Fastify**（一周）— 写 API，但你 Java 基础在，主要是熟悉 JS 异步习惯
7. **数据库交互**（一周）— Prisma 或 Drizzle ORM，相当于 JS 世界的 Hibernate
8. **部署生态**（边做边学）— Vercel / Cloudflare / Railway / Fly.io 用一遍

**最重要的心态**：JS 生态变得快，**不要追新**。挑成熟的（Astro / Next.js / React / TypeScript）深用，比每次都换工具好。

---

## 13. 故障排查速查表

| 现象 | 可能原因 | 怎么修 |
|---|---|---|
| `npm install` 卡住 | 国内网络问题 | 改 npm 源 `npm config set registry https://registry.npmmirror.com` |
| `npm run dev` 端口被占 | 4321 有别的程序 | 换端口 `npm run dev -- --port 4322` |
| 改了文件浏览器没刷新 | dev 服务器挂了 | `Ctrl+C` 重新 `npm run dev` |
| build 报 sharp 错 | sharp 装失败（常发生在 Windows） | `npm install sharp --force` |
| 推了之后 Pages 没更新 | GH Actions 失败 | 看 https://github.com/FelixTheForge/felixtheforge.github.io/actions 红色 X 点进去看错误 |
| Cloudflare Pages 部署慢 | 偶发 | 等 5 分钟，或在 Cloudflare 后台手动 Redeploy |
| 文章标题中文乱码 | 文件编码不是 UTF-8 | VS Code 右下角点编码 → Save with Encoding → UTF-8 |
| 改了 site.ts 但页面没反应 | 类型错误导致 build 失败 | 看 dev 终端的红字提示 |

---

## 14. 联系 / 资源

- **Astro 官方文档**：https://docs.astro.build
- **MDN（HTML/CSS/JS 权威）**：https://developer.mozilla.org
- **TypeScript Handbook**：https://www.typescriptlang.org/docs/handbook
- **本仓库**：https://github.com/FelixTheForge/felixtheforge.github.io

---

**最后一句**：这个仓库是我自己的"花园"。任何时候你不知道某段代码干啥，**直接删了 `npm run dev` 看看坏不坏**。没坏就是没用，没用就别留着。我经常这么做。

— 写于第 N 次重构之后
