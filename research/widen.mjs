// One-time pass (2026-09-25): widen the guide per Drew's follow-up.
// - Re-measure the interchangeable bodies from the lens mount with his lens
//   picks (Septon 40mm f/2 for E and Z, Lumix S 40mm f/2 for L).
// - Add Leica M bodies with his own Summicron-C, the Nikon Zf and Z5, and the
//   two APS-C cameras that pass the "everything else ideal" checklist.
// - Merge the ZX1 and GFX100RF into one "other fixed-lens" family.
// Inputs: research/thin-lens-specs.json, research/subff-specs.json, the
// M-mount guide's dataset, research/prices.md. Rewrites src/data/cameras.js.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(HERE, '..')
const cur = await import(path.join(ROOT, 'src/data/cameras.js'))
const mm = await import(path.resolve(ROOT, '../m-mount-buying-guide/src/data/cameras.js'))
const thin = JSON.parse(fs.readFileSync(path.join(HERE, 'thin-lens-specs.json'), 'utf8'))
const subff = JSON.parse(fs.readFileSync(path.join(HERE, 'subff-specs.json'), 'utf8'))
const T = Object.fromEntries(thin.map((x) => [x.id, x]))
const S = Object.fromEntries(subff.map((x) => [x.id, x]))
const MM = Object.fromEntries(mm.CAMERAS.map((x) => [x.id, x]))

const BH = (id) => `https://www.bhphotovideo.com/c/product/${id}/x.html`
const KEH = (slug) => `https://www.keh.com/shop/${slug}`
const s = (retailer, price, grade, url) => ({ retailer, price, grade, url })

// ---- lenses ----------------------------------------------------------------
const LENS = {
  septonE: { key: 'septonE', focal: 40, aperture: 'f/2', name: 'Voigtländer Septon 40mm f/2 Aspherical (Sony E)', short: '40mm f/2 (Septon)', shortName: 'the Septon 40mm f/2', protrusion: 30, closeFocusM: 0.3, used: 575,
    note: 'Manual focus, but with electronic contacts: EXIF, focus magnification and peaking, and distance data for IBIS. 30 mm from the mount, 165 g. Reviews note soft corners and some CA wide open. Released spring 2026; B&H had used copies at $573 and $587, new $699.' },
  septonZ: { key: 'septonZ', focal: 40, aperture: 'f/2', name: 'Voigtländer Septon 40mm f/2 Aspherical (Nikon Z)', short: '40mm f/2 (Septon)', shortName: 'the Septon 40mm f/2', protrusion: 32, closeFocusM: 0.3, used: 587,
    note: 'The Z version is 32 mm from the flange, not 30, and 205 g with a wider barrel. Manual focus with EXIF and focus aids. B&H had a used copy at $587; new $699.' },
  lumix40: { key: 'lumix40', focal: 40, aperture: 'f/2', name: 'Panasonic Lumix S 40mm f/2', short: '40mm f/2 (Lumix S)', shortName: 'the Lumix S 40mm f/2', protrusion: 40.9, closeFocusM: 0.3, used: 398,
    note: 'Autofocus, 40.9 mm long, 144 g, sealed. Announced April 2026; no used copies yet, so the price is new ($398 at B&H). The Lumix S 26mm f/8 is the thin alternative: about 23 mm shorter, fixed f/8.' },
  cron: { key: 'cron', focal: 40, aperture: 'f/2', name: 'Leitz Summicron-C 40mm f/2 (yours)', short: '40mm f/2 (your Summicron-C)', shortName: 'your Summicron-C', protrusion: 23, closeFocusM: 0.8, used: 0, owned: true,
    note: 'Your lens, so it adds nothing to the price. Compatible with every digital M and the Pixii Max: it brings up the 50 mm framelines on Leica rangefinders (the Pixii has a real 40 mm line), has no 6-bit code (set the lens type by hand), and users on the M9, M11-P and others report accurate focus wide open. Leica warned in 1973 that the pitched cam was only guaranteed on the CL, so check focus on the body you buy.' },
}

const pocketFor = (depth) => (depth <= 60 ? 'Jacket pocket, about the CL\'s depth.' : depth <= 76 ? 'Jacket pocket, RX1-class depth.' : depth <= 85 ? 'Big jacket or coat pocket.' : 'Coat pocket at best.')
const mountNote = (t, lens) =>
  `About ${t.mountDepth} mm of body behind the lens mount (measured from scaled top views, ±2 mm), plus ${lens.protrusion} mm of lens.${t.overallDepth > t.mountDepth + lens.protrusion ? ` The grip (${t.overallDepth} mm) sets the depth.` : ''}`

// ---- existing interchangeable rows: re-pair and re-measure -----------------
const ILC = {
  fp: { lens: 'lumix40', verdict: 'With the Lumix 40mm f/2 it is about 81 mm deep, 9 mm more than an RX1R II, for much less money. Contrast AF, no finder and the electronic shutter are the price.' },
  fpl: { lens: 'lumix40', verdict: 'The highest resolution per cubic centimeter here, but slow readout and no stabilization make 61MP hard to use handheld. About 81 mm deep with the Lumix 40mm.' },
  bf: { lens: 'lumix40', verdict: 'The most CL-like object in spirit: small, simple, slightly stubborn. It is the thinnest body at the mount, so with the Lumix 40mm f/2 it is about 74 mm deep, within 2 mm of an RX1R II. No finder.' },
  s9: { lens: 'lumix40', verdict: 'The only small L-mount body with stabilization, but at about 87 mm with the Lumix 40mm it is the deepest of them; the 26mm f/8 gets it to about 64 mm. No finder, and DPReview warns photographers will find the controls thin.' },
  a7c: { lens: 'septonE', verdict: 'With the Septon it is about 73 mm deep, a millimeter more than an RX1R II, and adds a finder, IBIS and a 740-shot battery for about $1,800 all in. The Septon is manual focus; the grip sits ahead of the mount and hides some of the lens.' },
  a7c2: { lens: 'septonE', verdict: 'About 74 mm with the Septon: the RX1R II\'s depth, plus a finder, 7-stop IBIS, modern autofocus with other lenses, and all-day battery, for about $2,770 ready to shoot.' },
  a7cr: { lens: 'septonE', verdict: 'The same 74 mm package with 61MP. Just over budget with the Septon, at about $3,360.' },
}

const rows = cur.CAMERAS.map((c) => {
  let r = structuredClone(c)
  if (r.family === 'zx1' || r.family === 'gfx') r.family = 'other'
  if (r.id === 'rx1r3') {
    r.body.depthWithLens = 74.5
    r.body.pocket = 'Lens tip to monitor is 74.5 mm (Sony via CineD); the fixed eyecup brings the bounding box to 87.5 mm. Jacket pocket, but the eyecup makes it the thickest RX1.'
  }
  const cfg = ILC[r.id]
  if (cfg) {
    const L = LENS[cfg.lens]
    const t = T[r.id]
    r.lens = { focal: L.focal, aperture: L.aperture, name: L.name, short: L.short, shortName: L.shortName, closeFocusM: L.closeFocusM, macroMode: null, cropModes: null, note: L.note }
    r.body.depthWithLens = t.depthAsCarried
    r.body.weightWithLens = t.weightWithLens
    r.body.pocket = `${mountNote(t, L)} ${pocketFor(t.depthAsCarried)}`
    r.body.note = r.body.pocket
    r.prices.lensUsed = L.used
    r.verdict = cfg.verdict
  }
  return r
})

// ---- Leica M bodies with the Summicron-C -----------------------------------
const fromM = (id, over) => {
  const m = MM[id]
  const t = over.thin
  const L = LENS.cron
  const depth = t ? t.depthAsCarried : over.depth
  return {
    id: over.newId || id, kind: 'main', maker: m.maker, name: m.name, shortName: over.shortName, family: 'm',
    announced: m.announced, shipped: m.shipped, discontinued: m.discontinued ?? null,
    sensor: { type: m.sensor.type, mp: m.sensor.mp, mono: m.sensor.mono, note: m.sensor.note },
    lens: { focal: 40, aperture: 'f/2', name: L.name, short: L.short, shortName: L.shortName, closeFocusM: 0.8, macroMode: null, cropModes: null, note: L.note },
    iso: { usable: m.iso.usable, ceiling: m.iso.ceiling, note: m.iso.note },
    af: { short: over.af || 'Manual, rangefinder', note: over.afNote || 'Rangefinder focusing, like the CL. The Summicron-C couples down to 0.8 m.' },
    viewfinder: over.viewfinder,
    screen: { short: m.screen.short, note: m.screen.note },
    shutter: { type: m.shutter.maxMech ? 'focal-plane' : 'electronic-only', short: m.shutter.short, note: m.shutter.noise },
    stab: { short: 'None', note: 'No stabilization; the Summicron-C has none either.' },
    sealing: { level: m.sealing.level, rating: null, note: m.sealing.note },
    battery: { model: m.battery.model, cipa: m.battery.cipa, note: m.battery.note },
    storage: { short: m.storage.short, note: m.storage.note },
    body: { w: m.body.w, h: m.body.h, d: m.body.d, depthWithLens: depth, weight: m.body.weight, weightWithLens: m.body.weight + 125,
      pocket: t ? `${mountNote(t, L)} ${pocketFor(depth)} ${m.body.w} mm wide, 18 mm wider than the CL.` : over.pocket, note: m.body.note },
    reliability: m.reliability, firmware: m.firmware, msrp: m.msrp,
    role: over.role, summary: over.summary, verdict: over.verdict,
    identifiers: m.identifiers, referenceUrl: m.referenceUrl ?? null,
    image: m.image ? { ...m.image } : null,
    prices: { ...structuredClone(m.prices), lensUsed: 0, lensOwned: true, note: `${m.prices.note ? m.prices.note + ' ' : ''}Observed September 7, 2026 for the M-mount guide.` },
    chartLabel: over.chartLabel, ogLabel: over.ogLabel,
  }
}
const rf = (lines) => ({ type: 'rangefinder', short: 'Rangefinder', note: `Optical rangefinder like the CL's. ${lines}` })
rows.push(
  fromM('m9', { shortName: 'M9', depth: 58, pocket: 'About 35 mm of body behind the mount (estimated from Leica\'s 37 mm figure, which includes the mount) plus 23 mm of lens. Jacket pocket, about the CL\'s depth. 139 mm wide.',
    viewfinder: rf('The Summicron-C brings up the 50 mm framelines.'), chartLabel: [-10, 4, 'end'], ogLabel: [-14, 6, 'end'],
    role: 'The CCD M, at the edge of the budget',
    summary: 'The first full-frame digital M: an 18MP Kodak CCD in a film-M body. With your Summicron-C it is the closest full-frame camera to the CL in depth, but its sensor cover glass corrodes.',
    verdict: 'The cheapest way to put your own lens on a full-frame digital rangefinder, but only buy one with a documented replacement sensor, and live with ISO 1250 as the ceiling. Stretch money for a camera with a known failure mode.' }),
  fromM('m240', { thin: T.m240, shortName: 'M240', viewfinder: rf('The Summicron-C brings up the 50 mm framelines. Takes the Visoflex EVF2 for exact framing.'), chartLabel: [10, 4, 'start'], ogLabel: [14, 6, 'start'],
    role: 'The cheapest modern M for your Summicron-C',
    summary: 'A 24MP CMOS M with live view, a big battery and a 3-inch screen. With your Summicron-C it is about 63 mm deep, 9 mm closer to the CL than an RX1R II, and the lens is already paid for.',
    verdict: 'The strongest case for stretching the budget: your own lens, rangefinder focusing like the CL, and a sensor that holds up to ISO 3200. It is 18 mm wider and 300 g heavier than the CL, and typical copies run about $3,400.' }),
  fromM('m10', { thin: T.m10, shortName: 'M10', viewfinder: rf('The Summicron-C brings up the 50 mm framelines.'), chartLabel: [10, 4, 'start'],
    role: 'Film-M thickness, over budget',
    summary: 'Back to film-M depth with an ISO dial and a quieter body. With your Summicron-C it is about 59 mm deep.',
    verdict: 'The best-feeling digital M for your lens, at about $5,300 used. See the M-mount guide for the whole family.' }),
  fromM('ev1', { thin: T.mev1, shortName: 'M EV1', af: 'Manual, EVF', afNote: 'Manual focus by magnification and peaking in the EVF. The Summicron-C\'s cam and framelines stop mattering.',
    viewfinder: { type: 'evf', short: 'Built-in EVF', note: 'An M11 with a 5.76M-dot EVF instead of the rangefinder. Focuses to the lens\'s minimum.' }, chartLabel: [10, 4, 'start'],
    role: 'M11 sensor, EVF instead of rangefinder',
    summary: 'The M11\'s 60MP sensor in a body with an electronic viewfinder and no rangefinder. With your Summicron-C, about 59 mm deep.',
    verdict: 'Far over budget, but it removes every compatibility question about the Summicron-C. Listed so the M-family picture is complete.' }),
  fromM('pixiimax', { thin: T.pixiimax, shortName: 'Pixii Max', af: 'Manual, rangefinder',
    viewfinder: rf('The only body here with a real 40 mm frameline, chosen in the lens menu. PetaPixel found the rangefinder patch dim.'), chartLabel: [10, -6, 'start'], ogLabel: [14, -8, 'start'],
    role: 'The only digital body with 40 mm framelines',
    summary: 'A French 24MP full-frame rangefinder with no rear screen and an electronic shutter. With your Summicron-C it is about 53 mm deep, the only full-frame camera here thinner than the CL. Its 33 mm body depth comes from a retail listing and needs confirming.',
    verdict: 'The closest thing to a digital CL on paper: CL depth, a real 40 mm frameline, and your lens. In practice it is new-only at $4,499, reviews report short battery life and card-write errors, and the company is looking for investors.' }),
)
const pix = rows.find((r) => r.id === 'pixiimax')
pix.prices.fallback = { low: 4499, typical: 4499, high: 4999, source: 'B&H new', url: 'https://www.bhphotovideo.com/', detail: 'no used listings anywhere; B&H sells it new from $4,499.' }
pix.prices.note = 'No used Pixii Max at any of the three retailers. New price observed September 7, 2026 for the M-mount guide.'
const m9 = rows.find((r) => r.id === 'm9')
m9.prices.fallback.detail = m9.prices.fallback.detail

// ---- Nikon Zf and Z5 with the Septon Z -------------------------------------
const nikon = (id, o) => {
  const t = T[id]
  const L = LENS.septonZ
  return {
    id, kind: 'main', maker: 'Nikon', name: t.name, shortName: o.shortName, family: 'ilc',
    announced: o.announced, shipped: o.shipped, discontinued: o.discontinued ?? null,
    sensor: { type: o.sensorType, mp: t.sensorMp, mono: false, note: o.sensorNote },
    lens: { focal: 40, aperture: 'f/2', name: L.name, short: L.short, shortName: L.shortName, closeFocusM: 0.3, macroMode: null, cropModes: null, note: L.note },
    iso: { usable: null, ceiling: null, note: 'Not researched for this guide.' },
    af: { short: 'Manual with the Septon', note: 'Phase-detect AF with Nikon lenses; the Septon is manual focus with focus aids.' },
    viewfinder: { type: 'evf', short: 'Built-in EVF', note: `${t.evf}. ${o.vfNote}` },
    screen: { short: o.screen },
    shutter: { type: 'focal-plane', short: 'Focal-plane, 1/8000', note: t.shutter },
    stab: { short: o.stab, note: t.ibis },
    sealing: { level: 'unknown', rating: null, note: 'Not stated in the sources read.' },
    battery: { model: 'EN-EL15c', cipa: o.cipa, note: `CIPA ${t.cipa}.` },
    storage: { short: o.storage },
    body: { w: t.w, h: t.h, d: t.overallDepth, depthWithLens: t.depthAsCarried, weight: t.weight, weightWithLens: t.weightWithLens,
      pocket: `${mountNote(t, L)} The eyecup adds more: about ${t.depthAsCarriedWithEyecup} mm overall. ${pocketFor(t.depthAsCarried)} ${t.weightWithLens} g with the lens.` },
    reliability: { grade: o.grade, issues: [] }, firmware: { note: null },
    msrp: o.msrp, role: o.role, summary: o.summary, verdict: o.verdict, identifiers: [], referenceUrl: o.url, image: null,
    prices: { ...o.prices, lensUsed: L.used }, chartLabel: o.chartLabel,
  }
}
rows.push(
  nikon('zf', { shortName: 'Zf', announced: '2023-09', shipped: '2023-10', sensorType: 'BSI-CMOS', sensorNote: '24.5MP BSI.', vfNote: 'The round eyepiece sits right behind the lens axis.', screen: '3.2" vari-angle, touch', stab: '8-stop IBIS', cipa: 360, storage: 'SD + microSD', grade: 'A', msrp: 1999,
    url: 'https://www.nikonusa.com/p/z-f/1761/overview', chartLabel: [10, 4, 'start'],
    role: 'Film-camera dials, full frame, Septon-ready',
    summary: 'Nikon\'s retro full-frame body with shutter, ISO and exposure dials, IBIS and a real EVF. The grip is shallow, so the Septon adds almost all its length.',
    verdict: 'About 77 mm with the Septon and 915 g: dials that feel like a film camera, but a coat-pocket package. About $2,430 ready to shoot.',
    prices: { usedLow: 1672, usedTypical: 1845, usedHigh: 1933, note: 'Not checked at Adorama (blocked).', sources: [s('KEH', '$1,672–$1,721', 'black', KEH('28471088.html')), s('B&H', '$1,845', 'grade 9, silver', BH('803560397-USE')), s('B&H', '$1,889', 'grade 9, black', BH('803555893-USE')), s('B&H', '$1,933', 'grade 10, silver', BH('803559464-USE'))] } }),
  nikon('z5', { shortName: 'Z5', announced: '2020-07', shipped: '2020-08', discontinued: '2025-04', sensorType: 'CMOS', sensorNote: '24.3MP front-illuminated.', vfNote: 'The grip sits about 24 mm ahead of the mount and hides part of the lens.', screen: '3.2" tilting, touch', stab: '5-stop IBIS', cipa: 390, storage: '2× SD', grade: 'A', msrp: 1399,
    url: 'https://www.nikonusa.com/', chartLabel: [10, 10, 'start'],
    role: 'The cheapest full frame with a finder and IBIS',
    summary: 'Nikon\'s entry full-frame body: 24MP, 5-stop IBIS, a good EVF and two SD slots. Succeeded by the Z5II in 2025.',
    verdict: 'About 78 mm with the Septon for about $1,470 all in: the cheapest way to a finder, IBIS and full frame near RX1 depth, if you accept the size of the grip and the weight.',
    prices: { usedLow: 791, usedTypical: 880, usedHigh: 985, note: 'Not checked at Adorama (blocked).', sources: [s('KEH', '$791–$854', 'across grades', KEH('nikon-z5-mirrorless-digital-camera-body-24-3-m-p.html')), s('B&H', '$880', 'grade 8+', BH('803497221-USE')), s('B&H', '$934', 'grade 9', BH('803413190-USE')), s('B&H', '$985', 'grade 9+', BH('803522202-USE'))] } }),
)

// ---- APS-C: the two that pass the checklist --------------------------------
const apsc = (id, o) => {
  const x = S[id]
  return {
    id, kind: 'main', maker: 'Fujifilm', name: x.name, shortName: x.name, family: 'apsc',
    announced: o.announced, shipped: o.shipped, discontinued: null,
    sensor: { type: 'APS-C BSI', mp: x.sensor.mp, mono: false, note: `${x.sensor.type}, ${x.sensor.size}. ${x.measured.note} (PhotonsToPhotos). The lens\'s f/2 gives the depth of field of f/3 on full frame.` },
    lens: { focal: 23, aperture: 'f/2', name: 'Fujinon 23mm f/2 (35mm equivalent)', short: '35mm eq. f/2', closeFocusM: 0.1, macroMode: null, cropModes: x.lens.cropModes, note: `${x.lens.filterNote} Built-in ${x.lens.ndStops}-stop ND filter. Focuses to 10 cm but is soft there at f/2.` },
    iso: { usable: 3200, ceiling: 6400, note: `Estimate: PhotonsToPhotos measures it ${x.measured.stopsBehindRx1r2} stop behind the RX1R II, so about a stop below the full-frame numbers here.` },
    af: { short: 'Hybrid PDAF', note: x.af.note || x.af.type },
    viewfinder: { type: 'evf', short: 'Hybrid optical/EVF', note: `Optical finder with an electronic overlay, or a ${(x.viewfinder.evfDots / 1e6).toFixed(2)}M-dot EVF. The closest thing to the CL's window finder in a digital camera.` },
    screen: { short: o.screen },
    shutter: { type: 'leaf', short: 'Leaf, 1/2000 at f/2', note: 'Leaf shutter, near silent; 1/4000 from about f/4.5, electronic to 1/32000 or faster.' },
    stab: { short: o.stab, note: o.stabNote },
    sealing: { level: 'splash', rating: null, note: 'Weather resistant only with the AR-X100 adapter ring and a PRF-49 filter; the ring adds 9 mm.' },
    battery: { model: x.battery.model, cipa: o.cipa, note: `CIPA ${x.battery.cipa}. USB-C charging.` },
    storage: { short: 'One SD slot' },
    body: { w: x.body.w, h: x.body.h, d: x.body.d, depthWithLens: x.body.depthAsCarried, weight: x.body.weightG, weightWithLens: x.body.weightG,
      pocket: `${x.body.d} mm including the lens, before the cap: the CL's depth to within a millimeter. Jacket pocket. ${x.body.weightG} g.` },
    reliability: { grade: o.grade, issues: x.reliability.map((r) => ({ title: r.title, detail: r.detail })) },
    firmware: { note: `${x.firmware.latest} (${x.firmware.date}).` },
    msrp: o.msrp, role: o.role, summary: o.summary, verdict: o.verdict, identifiers: [], referenceUrl: x.sources?.specs ?? null,
    image: o.image, prices: o.prices, chartLabel: o.chartLabel, ogLabel: o.ogLabel,
  }
}
const imgAttr = JSON.parse(fs.readFileSync(path.join(HERE, 'images-attribution.json'), 'utf8')).find((a) => a.id === 'x100vi')
rows.push(
  apsc('x100vi', { announced: '2024-02', shipped: '2024-02', screen: '3" tilting, touch', stab: '6-stop IBIS', stabNote: 'Six stops, about 5.5 with the optical finder (DPReview). The first X100 with IBIS.', cipa: 450, grade: 'B', msrp: 1599,
    image: { src: 'img/x100vi.jpg', alt: 'Fujifilm X100VI', credit: imgAttr.credit, license: imgAttr.license, pageUrl: imgAttr.pageUrl },
    chartLabel: [-10, 4, 'end'], ogLabel: [-14, 6, 'end'],
    role: 'The one smaller sensor that earns its place',
    summary: 'A 40MP APS-C sensor behind a 35mm-equivalent f/2 with a leaf shutter, a hybrid optical finder, 6-stop IBIS, and shutter, ISO and aperture controls on the body. It is the size of your CL to the millimeter.',
    verdict: 'If any camera is the digital CL, it is this one, at about 0.8 stop of noise and a stop of background blur behind the RX1R II. It is still backordered new and none were for sale used at B&H or KEH.',
    prices: { usedLow: null, usedTypical: null, usedHigh: null, note: 'No used copies at B&H or KEH; Adorama was not checked (blocked). New stock has been backordered since launch.', fallback: { low: 1799, typical: 1799, high: 1799, source: 'Fujifilm US list price', url: 'https://www.fujifilm-x.com/en-us/products/cameras/x100vi/', detail: 'new, when you can get one; listed at $1,799 at Adorama earlier in the day.' }, sources: [] } }),
  apsc('x100v', { announced: '2020-02', shipped: '2020-02', screen: '3" tilting, touch', stab: 'None', stabNote: 'No stabilization, like the CL.', cipa: 420, grade: 'A', msrp: 1399, image: null,
    chartLabel: [-10, -6, 'end'], ogLabel: [-14, -8, 'end'],
    role: 'The X100VI without IBIS, and lighter',
    summary: 'A 26MP APS-C sensor, the same redesigned 23mm f/2, the hybrid finder and leaf shutter, and no stabilization. 53 mm deep and 478 g: slightly smaller and lighter than your CL with its lens.',
    verdict: 'It fails the checklist only on stabilization, which your CL never had. Used prices are high for a 2020 camera because the X100VI is hard to buy.',
    prices: { usedLow: 1543, usedTypical: 1936, usedHigh: 2057, note: 'KEH only; B&H had none. Adorama not checked (blocked).', sources: [s('KEH', '$1,543–$1,936', 'black', KEH('fujifilm-x100v-digital-camera-black-26-1-m-p.html')), s('KEH', '$1,975–$2,057', 'silver', KEH('fujifilm-x100v-digital-camera-silver-26-1-m-p.html'))] } }),
)

rows.sort((a, b) => a.shipped.localeCompare(b.shipped))

// ---- META, families, dimensions, picks, near misses ------------------------
const META = structuredClone(cur.META)
META.lede = [
  "Drew owns a Leica CL, the 1973 film rangefinder that Leica and Minolta made together, and wants the digital version: a camera that goes in a jacket pocket and takes stunningly good pictures. That means a full-frame sensor, a sharp fast prime, and a body not much bigger than the CL with its 40 mm Summicron-C, about 55 mm deep. The budget is $3,000 used.",
  "No fixed-lens full-frame camera gets closer than the RX1 line, at 70 to 72 mm. Getting nearer the CL means one of three trades: a Leica M body wearing Drew's own Summicron-C, a small interchangeable body with a thin 40 mm lens, or a sensor smaller than full frame. This guide covers all of them, on size as carried, image quality, the finder, battery life, known failure modes, and what each costs used at B&H, KEH and Adorama.",
]
META.method = [
  ...cur.META.method,
  'Depth for interchangeable bodies is measured from the lens mount, not from the front of the grip: the body behind the mount (estimated from scaled top-view drawings on camerasize.com, checked against the makers\' own figures, about ±2 mm) plus the lens\'s length from the mount. Lens pairings are Drew\'s: the Voigtländer Septon 40mm f/2 on Sony E and Nikon Z, the Lumix S 40mm f/2 on L-mount, and his own Summicron-C on Leica M. Eyecups that stick out further are noted per camera, not counted.',
  'The APS-C cameras had to pass a checklist of core items (35 to 45 mm equivalent, f/2, a built-in finder, stabilization, 24MP or more, 60 mm or less as carried) with nothing failing outright. Of about twenty candidates, only the X100VI passes; the X100V fails only on stabilization. The rest are in the near misses.',
  'Leica M prices were observed on September 7, 2026 for the M-mount guide rather than re-read; everything else on September 25.',
]
META.sources = [
  ...cur.META.sources,
  { label: 'Thin-lens depth measurements', url: 'https://github.com/DrewHoo/pocket-full-frame-guide/blob/main/research/thin-lens-notes.md', note: 'mount depths, lens lengths, and the Summicron-C compatibility sources' },
  { label: 'Smaller-sensor checklist and noise math', url: 'https://github.com/DrewHoo/pocket-full-frame-guide/blob/main/research/subff-notes.md', note: 'every sub-full-frame candidate scored, with PhotonsToPhotos measurements' },
  { label: 'M-mount buying guide', url: 'https://drewhoover.com/m-mount-buying-guide/', note: 'every digital M body, for the Summicron-C route' },
]

const FAMILIES = [
  { id: 'rx1', short: 'Sony RX1', name: 'Sony RX1 series', years: '2012–present', color: '#d9730d', blurb: 'The first full-frame compacts. A 35 mm f/2 Zeiss Sonnar with a leaf shutter on a body barely bigger than an RX100. The thinnest fixed-lens full frame there is, with small batteries and, until the III, slow autofocus.' },
  { id: 'q', short: 'Leica Q', name: 'Leica Q series', years: '2015–present', color: '#b3282d', blurb: 'A 28 mm f/1.7 Summilux (43 mm f/2 APO on the Q3 43) with macro mode, a built-in EVF, crop modes and Leica controls. Around 93 mm deep: a coat-pocket camera.' },
  { id: 'm', short: 'Leica M + your 40', name: 'Leica M with your Summicron-C', years: '2009–present', color: '#2f5fa5', blurb: 'The CL\'s own lens on a digital M or the Pixii Max: 53 to 63 mm deep, closer to the CL than anything fixed-lens, and the lens is already paid for. The catch is body price: only the M9 and M (Typ 240) come near $3,000. The M11 family is in the M-mount guide.' },
  { id: 'ilc', short: 'Interchangeable', name: 'Small interchangeable bodies with a thin 40', years: '2019–present', color: '#1f8a5b', blurb: 'Sony a7C line and Nikon Z bodies with the Voigtländer Septon 40mm f/2; Sigma fp, fp L, BF and Lumix S9 with the Lumix S 40mm f/2. Measured from the mount, the Sonys and the BF land at 73 to 74 mm, level with an RX1R II.' },
  { id: 'other', short: 'Other fixed-lens', name: 'Zeiss ZX1 and Fujifilm GFX100RF', years: '2020–present', color: '#6d3fa0', blurb: 'Two outliers. The ZX1 was a one-off Zeiss sold briefly and let go; the GFX100RF puts a 102MP medium-format sensor behind a 35 mm f/4, and is the image-quality ceiling of the category, well over budget.' },
  { id: 'apsc', short: 'APS-C', name: 'Smaller sensor, everything else ideal', years: '2020–present', color: '#8a6a12', blurb: 'Only two sub-full-frame cameras clear the bar: the Fujifilm X100VI and X100V. Both are the CL\'s depth, with a 35mm-equivalent f/2, a hybrid optical finder and a leaf shutter. The cost is about 0.7 to 0.8 stop of noise and a stop of background blur against the RX1R II.' },
]

const DIMENSIONS = cur.DIMENSIONS.map((d) =>
  d.id === 'depth'
    ? { ...d, why: 'Width and height decide whether a camera fits a pocket at all; depth decides whether you notice it there. The CL with its 40 mm Summicron-C, about 55 mm, is the reference. Fixed-lens cameras are measured to the front of the lens. Interchangeable bodies are measured from the lens mount: body behind the mount plus the lens, or the grip if that sticks out further. A protruding eyecup is noted, not counted.' }
    : d.id === 'sensor'
      ? { ...d, why: d.why + ' APS-C collects about 1.2 stops less light than full frame in theory; measured, the X100 cameras trail the RX1R II by 0.7 to 0.8 stop.' }
      : d,
)

const PICKS = [
  { want: 'the closest thing to a digital CL, in budget, full frame', picks: ['rx1r2', 'a7c2'], why: 'the RX1R II is 72 mm deep with a pop-up finder for about $2,275; the a7C II with the Septon is 74 mm with a better finder, IBIS and battery for about $2,770.' },
  { want: 'the CL\'s depth, keeping full frame, if the budget can stretch', picks: ['m240', 'm9'], why: 'your own Summicron-C on a rangefinder, 58 to 63 mm deep. The M240 runs about $3,400; the M9 is cheaper but needs a documented sensor replacement.' },
  { want: 'the CL\'s depth, and a smaller sensor is acceptable', picks: ['x100vi', 'x100v'], why: 'the only sub-full-frame cameras that give up nothing else: 53 to 55 mm, f/2, optical finder, leaf shutter. Under $2,100 either way, if you can find one.' },
  { want: 'the smallest full-frame camera, for the least money', picks: ['rx1r', 'rx1'], why: 'about $950 for the RX1R II\'s lens and pocket size, without the finder, fast autofocus or battery life.' },
  { want: 'a finder, IBIS and all-day battery for under $2,000', picks: ['a7c', 'z5'], why: 'about $1,800 and $1,470 with the Septon, at 73 and 78 mm. Manual focus with that lens.' },
  { want: 'Leica handling and the Summilux under $3,000, pocket or not', picks: ['q'], why: 'KEH had eight between $2,212 and $3,040. Check what Leica will still service before you buy.' },
  { want: 'something nobody else has', picks: ['pixiimax'], why: 'the only digital body with a 40 mm frameline and thinner than the CL with your lens on it, at $4,499 new and with rough edges.' },
  { want: 'no compromises, and the budget can bend a lot', picks: ['rx1r3', 'q3'], why: 'current bodies with modern autofocus and finders; used copies sell for $4,400 and $6,200.' },
]

const NEAR_MISSES = [
  { name: 'Leica M11 family', year: '2022', sensor: 'full frame, 60MP', why: 'About 60 mm with your Summicron-C, but $7,500 and up used.', url: 'https://drewhoover.com/m-mount-buying-guide/', urlLabel: 'See the M-mount guide.' },
  { name: 'Fujifilm X-E4 with XF 27mm f/2.8', year: '2021', sensor: 'APS-C, 26MP', why: 'About 56 mm and 448 g, and a 41mm-equivalent view, but f/2.8 on APS-C is about 2.2 stops short of the Summicron-C at f/2, with no stabilization and no sealing. Around $1,000 used for the body at KEH.' },
  { name: 'Fujifilm X-E5 with XF 23mm or 27mm f/2.8', year: '2025', sensor: 'APS-C, 40MP', why: '56 to 62 mm with IBIS and a finder, but the same f/2.8 problem; the XF 23mm f/2 takes it to 85 mm. About $1,600 used at KEH. Fujifilm has a free repair for loosening strap lugs.' },
  { name: 'Ricoh GR IIIx and the coming GR IVx', year: '2021 / 2026', sensor: 'APS-C, 24–26MP', why: 'About 35 mm deep with a 40mm-equivalent lens: truly pocketable. No finder, f/2.8, no sealing, and dust on the sensor is a known problem. GR IIIx production ends in October 2026; the GR IVx was announced as in development in August.' },
  { name: 'Leica CL (digital, 2017)', year: '2017', sensor: 'APS-C, 24MP', why: 'The name, not the camera: about 66 mm with the 18mm f/2.8 pancake, no stabilization, and no leaf shutter. $1,871 to $2,043 at KEH.' },
  { name: 'Sony RX100 VII and Fujifilm X half', year: '2019 / 2025', sensor: '1-inch', why: 'Pocketable, but about 3 stops behind the RX1R II. Below the line for this guide.' },
  { name: 'Nikon Z5IIc', year: '2026', sensor: 'full frame, 24.5MP', why: 'About 79 mm with the Septon and no viewfinder. The Z5 does the same job with a finder for less.' },
].filter((n) => n.why)

const out = `// The dataset. One object per camera plus the families, the dimension
// glossary, the reference camera (Drew's Leica CL), the picks, the near misses
// and the method text. Everything on the page renders from this file.
// Research inputs and every observed listing live in research/.

export const META = ${JSON.stringify(META, null, 2)}

export const FAMILIES = ${JSON.stringify(FAMILIES, null, 2)}

export const DIMENSIONS = ${JSON.stringify(DIMENSIONS, null, 2)}

export const REFERENCE = ${JSON.stringify(cur.REFERENCE, null, 2)}

export const NEAR_MISSES = ${JSON.stringify(NEAR_MISSES, null, 2)}

export const PICKS = ${JSON.stringify(PICKS, null, 2)}

// Ship order; the timeline and the chart both assume it.
export const CAMERAS = ${JSON.stringify(rows, null, 2)}
`
fs.writeFileSync(path.join(ROOT, 'src/data/cameras.js'), out)
console.log(`wrote ${rows.length} cameras`)
for (const r of rows) console.log(r.id.padEnd(10), r.family.padEnd(6), String(r.body.depthWithLens).padEnd(6), (r.prices.usedTypical ?? r.prices.fallback?.typical ?? '-') + (r.prices.lensUsed ? '+' + r.prices.lensUsed : ''))
