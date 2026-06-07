/**
 * One-shot image optimizer.
 * Reads every *.jpg / *.png in public/minecraft/ and creates:
 *   - <name>-sm.jpg   (640w  / quality 72)  — for card thumbnails
 *   - <name>-md.jpg   (1280w / quality 78)  — for hero / section backgrounds
 * Original files are kept (used as full-quality download targets).
 *
 * Usage:  node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const SRC_DIR = path.resolve('public/minecraft');

async function processOne(file) {
  const full = path.join(SRC_DIR, file);
  const ext  = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;
  // Skip already-generated variants
  if (/-(sm|md)\.(jpg|jpeg|png)$/i.test(file)) return;
  if (file === 'qq-group-qr.png') return;

  const base = path.basename(file, ext);
  const variants = [
    { w: 640,  q: 72, suffix: '-sm' },
    { w: 1280, q: 78, suffix: '-md' },
  ];

  for (const v of variants) {
    const outFile = path.join(SRC_DIR, `${base}${v.suffix}.jpg`);
    try {
      await sharp(full)
        .resize({ width: v.w, withoutEnlargement: true })
        .jpeg({ quality: v.q, mozjpeg: true })
        .toFile(outFile);
      const { size } = await stat(outFile);
      console.log(`  ${path.basename(outFile).padEnd(28)} ${(size/1024).toFixed(0).padStart(4)} KB`);
    } catch (err) {
      console.error(`  FAILED ${outFile}: ${err.message}`);
    }
  }
}

const files = await readdir(SRC_DIR);
console.log(`Optimizing ${files.length} files in ${SRC_DIR}...`);
for (const f of files) {
  if (/-(sm|md)\./i.test(f)) continue;
  if (/\.(jpg|jpeg|png)$/i.test(f) && f !== 'qq-group-qr.png') {
    const { size } = await stat(path.join(SRC_DIR, f));
    console.log(`\n${f}  (${(size/1024).toFixed(0)} KB original)`);
    await processOne(f);
  }
}
console.log('\nDone.');
