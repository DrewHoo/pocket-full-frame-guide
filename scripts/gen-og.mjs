// OG preview (1200x630) and drewhoover.com index card (1200x750, 8:5).
// Run: node scripts/gen-og.mjs. Outputs are committed; CI does not regenerate.
// The visual is the page's pocket test: depth as carried against used price,
// colored by family, with the budget line and the Leica CL marked. Drawn
// from the same CAMERAS/FAMILIES/REFERENCE data the page renders.
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { CAMERAS, FAMILIES, REFERENCE, META } from '../src/data/cameras.js'

const outDir = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public')
mkdirSync(outDir, { recursive: true })

const colorOf = Object.fromEntries(FAMILIES.map((f) => [f.id, f.color]))
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
const price = (c) => {
  const b = c.prices.usedTypical ?? c.prices.fallback?.typical ?? null
  return b == null ? null : b + (c.prices.lensUsed || 0)
}
const FONT = 'Helvetica, Arial, sans-serif'

const render = (W, H, name) => {
  const pts = CAMERAS.filter((c) => price(c) != null)
  const left = 60
  const right = W - 60
  const top = H === 630 ? 250 : 290
  const bottom = H - 70
  const x0 = 40
  const x1 = Math.ceil((Math.max(...pts.map((c) => c.body.depthWithLens)) + 8) / 10) * 10
  const y1 = Math.ceil((Math.max(...pts.map(price)) * 1.05) / 1000) * 1000
  const sx = (d) => left + ((d - x0) / (x1 - x0)) * (right - left)
  const sy = (p) => bottom - (p / y1) * (bottom - top)
  const dots = pts.map(
    (c) => `<circle cx="${sx(c.body.depthWithLens)}" cy="${sy(price(c))}" r="9" fill="${colorOf[c.family]}" stroke="#0a0d12" stroke-width="3"/>`,
  )
  const labels = pts
    .filter((c) => c.ogLabel)
    .map((c) => {
      const [dx, dy, anchor] = c.ogLabel
      return `<text x="${sx(c.body.depthWithLens) + dx}" y="${sy(price(c)) + dy}" text-anchor="${anchor}" font-family="${FONT}" font-size="17" fill="#e8e8e8" font-weight="600">${esc(c.shortName)}</text>`
    })
  const by = sy(META.budget)
  const rx = sx(REFERENCE.depthWithLens)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#11151c"/><stop offset="100%" stop-color="#0a0d12"/></linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <text x="${left}" y="${H === 630 ? 80 : 100}" font-family="${FONT}" font-size="20" fill="#9ba3b5" font-weight="600" letter-spacing="3">USED BUYER'S GUIDE</text>
  <text x="${left}" y="${H === 630 ? 146 : 170}" font-family="${FONT}" font-size="58" fill="#ffffff" font-weight="700" letter-spacing="-1.5">Full-frame cameras that fit</text>
  <text x="${left}" y="${H === 630 ? 206 : 232}" font-family="${FONT}" font-size="58" fill="#ffffff" font-weight="700" letter-spacing="-1.5">in a jacket pocket</text>
  <rect x="${left}" y="${by}" width="${right - left}" height="${bottom - by}" fill="#1f8a5b" fill-opacity="0.12"/>
  <line x1="${left}" y1="${by}" x2="${right}" y2="${by}" stroke="#3fae7a" stroke-width="2" stroke-dasharray="8 6"/>
  <text x="${right}" y="${by - 10}" text-anchor="end" font-family="${FONT}" font-size="17" fill="#3fae7a" font-weight="600">$3,000 used</text>
  <line x1="${rx}" y1="${top}" x2="${rx}" y2="${bottom}" stroke="#e8e8e8" stroke-opacity="0.6" stroke-width="2" stroke-dasharray="3 6"/>
  <text x="${rx + 8}" y="${top + 16}" font-family="${FONT}" font-size="17" fill="#e8e8e8" font-weight="600">${esc(REFERENCE.shortLabel)}</text>
  <line x1="${left}" y1="${bottom}" x2="${right}" y2="${bottom}" stroke="#3a4152" stroke-width="2"/>
  <text x="${left}" y="${bottom + 28}" font-family="${FONT}" font-size="16" fill="#9ba3b5">depth as carried →</text>
  ${dots.join('\n')}
  ${labels.join('\n')}
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#d9730d"/>
  <text x="${right}" y="${H - 22}" text-anchor="end" font-family="${FONT}" font-size="18" fill="#9ba3b5">drewhoover.com/pocket-full-frame-guide</text>
</svg>`
  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(resolve(outDir, name))
}

await render(1200, 630, 'og.png')
await render(1200, 750, 'card.png')
console.log('wrote og.png and card.png')
