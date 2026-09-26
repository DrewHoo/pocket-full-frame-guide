// One-time merge: research/specs.json + research/prices.js + image attribution
// -> src/data/cameras.js. After the first run, cameras.js is the canonical,
// hand-edited source; rerunning this overwrites it.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PRICES, LENS_USED } from './prices.js'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(HERE, '..')
const specs = JSON.parse(fs.readFileSync(path.join(HERE, 'specs.json'), 'utf8'))
const attrib = JSON.parse(fs.readFileSync(path.join(HERE, 'images-attribution.json'), 'utf8'))
const head = fs.readFileSync(path.join(HERE, 'cameras.head.js'), 'utf8')
const extra = JSON.parse(fs.readFileSync(path.join(HERE, 'extra.json'), 'utf8'))

const imgById = Object.fromEntries(attrib.map((a) => [a.id, a]))
const rows = []
for (const sp of specs.filter((s) => s.kind === "main" || s.kind === "referenceOnly")) {
  const id = sp.id
  const ex = extra.cameras[id] || {}
  const pr = PRICES[id]
  if (!pr) { console.error(`no prices for ${id}`); continue }
  const img = imgById[id]
  const lensKey = ex.lensKey
  const row = {
    ...sp,
    ...ex.top,
    shortName: ex.shortName,
    chartLabel: ex.chartLabel,
    ogLabel: ex.ogLabel,
    lens: { ...sp.lens, ...ex.lens },
    stab: { ...(sp.stab || sp.stabilization || sp.ibis || {}), ...ex.stab },
    shutter: { ...sp.shutter, ...ex.shutter },
    body: { ...sp.body, ...ex.body },
    image: img ? { src: `img/${id}.jpg`, alt: ex.alt || `${sp.maker} ${sp.name}`, credit: img.credit, license: img.license, pageUrl: img.pageUrl } : null,
    prices: { ...pr, lensUsed: lensKey ? LENS_USED[lensKey] : undefined, newPrice: pr.newPrice ?? null },
  }
  delete row.stabilization
  delete row.ibis
  delete row.lensKey
  rows.push(row)
}
rows.sort((a, b) => a.shipped.localeCompare(b.shipped))

const out = `${head}
export const REFERENCE = ${JSON.stringify(extra.reference, null, 2)}

export const NEAR_MISSES = ${JSON.stringify(extra.nearMisses, null, 2)}

export const PICKS = ${JSON.stringify(extra.picks, null, 2)}

// Ship order; the timeline and the chart both assume it.
export const CAMERAS = ${JSON.stringify(rows, null, 2)}
`
fs.writeFileSync(path.join(ROOT, 'src/data/cameras.js'), out)
console.log(`wrote ${rows.length} cameras`)
