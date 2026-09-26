// Data gate run in CI before the build. Fails on a missing field, an unknown
// family reference, a pick that points at a non-existent camera, or an image
// path that is not in public/. Cheap insurance against a half-edited row
// shipping as a blank card.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { CAMERAS, FAMILIES, PICKS } from '../src/data/cameras.js'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const errors = []
const familyIds = new Set(FAMILIES.map((f) => f.id))
const ids = new Set()

const required = {
  '': ['id', 'name', 'shortName', 'maker', 'family', 'shipped', 'summary', 'role', 'verdict'],
  sensor: ['type', 'mp', 'mono'],
  lens: ['focal', 'aperture', 'name', 'short'],
  iso: ['usable', 'ceiling'],
  af: ['short'],
  viewfinder: ['type', 'short'],
  screen: ['short'],
  shutter: ['type', 'short'],
  stab: ['short'],
  sealing: ['level'],
  battery: ['model'],
  storage: ['short'],
  body: ['w', 'h', 'd', 'depthWithLens', 'weight', 'pocket'],
  reliability: ['grade', 'issues'],
  firmware: [],
  prices: ['usedLow', 'usedTypical', 'usedHigh', 'sources'],
}

for (const c of CAMERAS) {
  const where = c.id || c.name || '(unnamed)'
  if (ids.has(c.id)) errors.push(`${where}: duplicate id`)
  ids.add(c.id)
  if (!familyIds.has(c.family)) errors.push(`${where}: unknown family ${c.family}`)
  for (const [group, keys] of Object.entries(required)) {
    const obj = group ? c[group] : c
    if (!obj) { errors.push(`${where}: missing ${group}`); continue }
    for (const k of keys) if (obj[k] === undefined) errors.push(`${where}: missing ${group ? `${group}.` : ''}${k}`)
  }
  if (!['A', 'B', 'C', 'D'].includes(c.reliability?.grade)) errors.push(`${where}: bad reliability grade`)
  if (!['none', 'splash', 'ip', 'unknown'].includes(c.sealing?.level)) errors.push(`${where}: bad sealing level`)
  if (c.prices && c.prices.usedTypical != null && !(c.prices.usedLow <= c.prices.usedTypical && c.prices.usedTypical <= c.prices.usedHigh)) errors.push(`${where}: price range out of order`)
  if (c.image && !fs.existsSync(path.join(ROOT, 'public', c.image.src))) errors.push(`${where}: image ${c.image.src} not in public/`)
  if (c.image && !(c.image.credit && c.image.license && c.image.pageUrl)) errors.push(`${where}: image missing attribution`)
}
const sorted = [...CAMERAS].every((c, i, a) => i === 0 || a[i - 1].shipped <= c.shipped)
if (!sorted) errors.push('CAMERAS is not in shipped order (the timeline assumes it)')
for (const p of PICKS) for (const id of p.picks) if (!ids.has(id)) errors.push(`pick "${p.want}" references unknown id ${id}`)

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}
console.log(`ok: ${CAMERAS.length} cameras, ${PICKS.length} picks`)
