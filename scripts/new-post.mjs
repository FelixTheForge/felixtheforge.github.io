/**
 * 一键创建新文章模板。
 *
 * 用法：
 *   npm run new <slug>
 *
 * 举例：
 *   npm run new my-first-thoughts
 *     → 生成 src/content/blog/my-first-thoughts.md
 *     → 已经填好今日日期 + frontmatter 模板
 *     → 自动尝试用 VS Code 打开
 *
 * slug 只用小写英文 / 数字 / 短横线（最终成为 URL）。
 */
import { writeFile, access, constants } from 'node:fs/promises';
import { resolve } from 'node:path';
import { spawn } from 'node:child_process';

const slug = (process.argv[2] || '').trim();

if (!slug) {
  console.error('\n❌ 缺少 slug 参数');
  console.error('   用法：  npm run new <slug>');
  console.error('   举例：  npm run new my-first-thoughts\n');
  process.exit(1);
}

if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
  console.error('\n❌ slug 只能用小写英文 / 数字 / 短横线');
  console.error(`   你输入的是： ${slug}`);
  console.error('   推荐格式：  my-first-thoughts / notes-on-rust\n');
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const filePath = resolve('src/content/blog', `${slug}.md`);
const url = `/blog/${slug}`;

// 已存在就报错，避免误覆盖
try {
  await access(filePath, constants.F_OK);
  console.error(`\n❌ 文件已存在： ${filePath}\n`);
  process.exit(1);
} catch {
  // 不存在，继续
}

const template = `---
title: ""
date: "${today}"
description: ""
tags: []
cover: ""
---

正文从这里开始。

## 二级标题

正文...

### 三级标题

正文...
`;

await writeFile(filePath, template, 'utf-8');

console.log(`\n✅ 已创建 ${filePath}`);
console.log(`   预览 URL：  http://localhost:4321${url}`);
console.log(`   公开 URL：  https://felixtheforge.github.io${url}\n`);
console.log(`下一步：`);
console.log(`   1. 填好 title / description / tags / cover`);
console.log(`   2. 在正文写内容`);
console.log(`   3. npm run dev 本地预览`);
console.log(`   4. git add -A && git commit -m "post: ${slug}" && git push\n`);

// 自动尝试 VS Code 打开（如果 code 命令在 PATH 里）
const child = spawn('code', [filePath], { stdio: 'ignore', detached: true, shell: true });
child.on('error', () => {
  // VS Code 没装 / 不在 PATH，安静失败
});
child.unref();
