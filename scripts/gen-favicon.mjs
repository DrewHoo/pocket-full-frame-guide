// Favicon set from one SVG. Run: node scripts/gen-favicon.mjs
// A compact silhouette: dark body, a big lens for its size, a small finder window.
import sharp from 'sharp'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const outDir = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public')
mkdirSync(outDir, { recursive: true })

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#1a1a1a"/>
  <rect x="7" y="20" width="50" height="28" rx="5" fill="#f7f6f3"/>
  <circle cx="36" cy="34" r="11" fill="#1a1a1a"/>
  <circle cx="36" cy="34" r="6" fill="#f7f6f3"/>
  <rect x="11" y="24" width="8" height="5" rx="1.5" fill="#1a1a1a"/>
  <circle cx="14" cy="42" r="2.5" fill="#d9730d"/>
</svg>`

writeFileSync(resolve(outDir, 'favicon.svg'), svg + '\n')
for (const { name, size } of [
  { name: 'favicon-32.png', size: 32 },
  { name: 'favicon-192.png', size: 192 },
  { name: 'apple-touch-icon.png', size: 180 },
]) {
  await sharp(Buffer.from(svg)).resize(size, size).png({ compressionLevel: 9 }).toFile(resolve(outDir, name))
  console.log(`wrote ${name}`)
}
