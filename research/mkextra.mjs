import fs from 'node:fs'
const specs = JSON.parse(fs.readFileSync('specs.json','utf8'))
const by = Object.fromEntries(specs.map(s=>[s.id,s]))
const E = (o)=>o
const cams = {
  rx1:   E({shortName:'RX1', chartLabel:[-10,-6,'end'], ogLabel:[-14,-10,'end'], vf:'Optional clip-on', af:'Contrast, slow', sh:'Leaf, to 1/4000', stab:'None', lensShort:'35mm f/2'}),
  rx1r:  E({shortName:'RX1R', chartLabel:[-10,14,'end'], ogLabel:[-14,22,'end'], vf:'Optional clip-on', af:'Contrast, slow', sh:'Leaf, to 1/4000', stab:'None', lensShort:'35mm f/2'}),
  rx1r2: E({shortName:'RX1R II', chartLabel:[-10,-6,'end'], ogLabel:[-14,-8,'end'], vf:'Pop-up EVF', af:'Hybrid PDAF', sh:'Leaf, to 1/4000', stab:'None', lensShort:'35mm f/2'}),
  rx1r3: E({shortName:'RX1R III', chartLabel:[-10,4,'end'], ogLabel:[-14,6,'end'], vf:'Built-in EVF', af:'PDAF, subject AI', sh:'Leaf, 1/2000 at f/2', stab:'None', lensShort:'35mm f/2'}),
  q:     E({shortName:'Q', chartLabel:[10,4,'start'], ogLabel:[14,6,'start'], vf:'Built-in EVF', af:'Contrast', sh:'Leaf, to 1/2000', stab:'Lens OIS', lensShort:'28mm f/1.7', shipped:'2015-06'}),
  q2:    E({shortName:'Q2', chartLabel:[10,12,'start'], vf:'Built-in EVF', af:'Contrast', sh:'Leaf, to 1/2000', stab:'Lens OIS', lensShort:'28mm f/1.7'}),
  q2m:   E({shortName:'Q2 Mono', chartLabel:[10,-4,'start'], ogLabel:[14,-2,'start'], vf:'Built-in EVF', af:'Contrast', sh:'Leaf, to 1/2000', stab:'Lens OIS', lensShort:'28mm f/1.7', shipped:'2020-11',
          iso:{usable:12500, ceiling:25000, note:'No reviewer gave a clean-to-print number. A monochrome sensor skips demosaicing and gains about a stop over the color Q2; these figures are the guide\'s estimate on that basis, not a quote.'}}),
  q3:    E({shortName:'Q3', chartLabel:[10,4,'start'], ogLabel:[14,6,'start'], vf:'Built-in EVF', af:'Hybrid PDAF', sh:'Leaf, to 1/2000', stab:'Lens OIS', lensShort:'28mm f/1.7'}),
  q343:  E({shortName:'Q3 43', chartLabel:[10,4,'start'], vf:'Built-in EVF', af:'Hybrid PDAF', sh:'Leaf, to 1/2000', stab:'Lens OIS', lensShort:'43mm f/2', shipped:'2024-09'}),
  q3m:   E({shortName:'Q3 Mono', chartLabel:[10,4,'start'], vf:'Built-in EVF', af:'Contrast', sh:'Leaf, to 1/2000', stab:'Lens OIS', lensShort:'28mm f/1.7',
          iso:{usable:12500, ceiling:25000, note:'Too new for a reviewer consensus on noise. Leica rates it to ISO 200,000; these figures are the guide\'s estimate from the color Q3 plus the usual one-stop monochrome advantage, not a quote.'}}),
  zx1:   E({shortName:'ZX1', vf:'Built-in EVF', af:'Contrast', sh:'Leaf, to 1/2000', stab:'None', lensShort:'35mm f/2'}),
  gfx100rf: E({shortName:'GFX100RF', chartLabel:[-10,4,'end'], ogLabel:[-14,6,'end'], vf:'Built-in EVF', af:'PDAF, subject AI', sh:'Leaf, to 1/4000', stab:'None', lensShort:'35mm f/4 (28 eq.)'}),
  fp:    E({shortName:'fp', chartLabel:[-10,10,'end'], ogLabel:[-14,14,'end'], vf:'None (loupe optional)', af:'Contrast', sh:'Electronic only', stab:'None', lensShort:'45mm f/2.8', lensKey:'sigma45', lensShortName:'the Sigma 45mm f/2.8'}),
  fpl:   E({shortName:'fp L', chartLabel:[10,4,'start'], vf:'Optional clip-on', af:'Hybrid PDAF', sh:'Electronic only', stab:'None', lensShort:'45mm f/2.8', lensKey:'sigma45', lensShortName:'the Sigma 45mm f/2.8'}),
  bf:    E({shortName:'BF', chartLabel:[-10,-6,'end'], ogLabel:[-14,-8,'end'], vf:'None', af:'Hybrid PDAF', sh:'Electronic only', stab:'None (video EIS)', lensShort:'45mm f/2.8', lensKey:'sigma45', lensShortName:'the Sigma 45mm f/2.8'}),
  s9:    E({shortName:'S9', chartLabel:[10,6,'start'], ogLabel:[14,8,'start'], vf:'None', af:'PDAF, subject AI', sh:'Electronic only', stab:'5-stop IBIS', lensShort:'45mm f/2.8', lensKey:'sigma45', lensShortName:'the Sigma 45mm f/2.8'}),
  a7c:   E({shortName:'a7C', chartLabel:[10,4,'start'], ogLabel:[14,6,'start'], vf:'Corner EVF', af:'Hybrid PDAF, eye AF', sh:'Focal-plane, 1/4000', stab:'5-stop IBIS', lensShort:'40mm f/2.5', lensKey:'sony40', lensShortName:'the Sony 40mm f/2.5 G'}),
  a7c2:  E({shortName:'a7C II', chartLabel:[10,4,'start'], ogLabel:[14,6,'start'], vf:'Corner EVF', af:'PDAF, subject AI', sh:'Focal-plane, 1/4000', stab:'7-stop IBIS', lensShort:'40mm f/2.5', lensKey:'sony40', lensShortName:'the Sony 40mm f/2.5 G', shipped:'2023-08'}),
  a7cr:  E({shortName:'a7CR', chartLabel:[10,4,'start'], vf:'Corner EVF', af:'PDAF, subject AI', sh:'Focal-plane, 1/4000', stab:'7-stop IBIS', lensShort:'40mm f/2.5', lensKey:'sony40', lensShortName:'the Sony 40mm f/2.5 G', shipped:'2023-08'}),
}
const screenShort = (s) => {
  const a = /vari/i.test(s.articulation||s.short) ? 'vari-angle' : /tilt/i.test(s.articulation||s.short) ? 'tilting' : 'fixed'
  const touch = s.touch ?? /touch/i.test(s.short)
  return `${s.size}" ${a}${touch && !/no touch/i.test(s.short) ? ', touch' : ''}`
}
const out = { cameras:{} }
for (const [id,x] of Object.entries(cams)) {
  const sp = by[id]
  const top = {}
  if (x.shipped) top.shipped = x.shipped
  top.identifiers = Array.isArray(sp.identifiers) ? sp.identifiers : sp.identifiers ? [sp.identifiers] : []
  top.viewfinder = { ...sp.viewfinder, short: x.vf, note: [sp.viewfinder.short + '.', sp.viewfinder.note].filter(Boolean).join(' ') }
  top.af = { ...sp.af, short: x.af, note: [sp.af.short + '.', sp.af.note].filter(Boolean).join(' ') }
  top.screen = { ...sp.screen, short: screenShort(sp.screen) }
  if (x.iso) top.iso = { ...sp.iso, ...x.iso }
  top.kind = undefined
  out.cameras[id] = {
    shortName: x.shortName, chartLabel: x.chartLabel, ogLabel: x.ogLabel, lensKey: x.lensKey,
    top,
    lens: { short: x.lensShort, shortName: x.lensShortName },
    shutter: { short: x.sh },
    stab: { short: x.stab },
    body: { pocket: sp.body.note },
  }
}
const cl = by['leica-cl-film']
out.reference = { name: 'Leica CL with Summicron-C 40mm f/2', shortLabel: 'Leica CL + 40mm', w: cl.body.w, h: cl.body.h, d: cl.body.d, depthWithLens: cl.body.depthWithLens, weight: cl.body.weight, weightWithLens: cl.body.weightWithLens, note: cl.body.note }
out.nearMisses = specs.filter(s=>s.kind==='nearMiss').map(s=>({ name:`${s.maker} ${s.name}`, year: String(s.announced||'').slice(0,4), sensor: s.sensorSize, why: s.why, url: s.guideUrl, urlLabel: s.guideUrl ? 'See the M-mount guide.' : undefined }))
out.picks = [
  { want: 'the closest thing to a digital CL, in budget', picks: ['rx1r2', 'q'], why: "the RX1R II is the only camera near the CL's size that also has a finder; the Q is 20 mm deeper but has Leica's controls, a better finder and macro, at the top of the budget." },
  { want: 'the smallest full-frame camera, full stop', picks: ['rx1r', 'rx1'], why: 'about $950 for the same lens and pocket size as the RX1R II. You give up the finder, fast autofocus and battery life.' },
  { want: 'Leica handling and the Summilux under $3,000', picks: ['q'], why: 'KEH had eight between $2,212 and $3,040. Check what Leica will still service before you buy.' },
  { want: 'a finder, fast autofocus and all-day battery', picks: ['a7c2', 'a7c'], why: 'about $2,870 and $1,880 with the 40mm f/2.5, but over 100 mm deep: a coat pocket, not a jacket pocket.' },
  { want: 'the cheapest way into full frame this small', picks: ['fp', 's9'], why: 'about $1,450 and $1,550 with a Sigma 45mm f/2.8. No finder on either, and no mechanical shutter.' },
  { want: 'no compromises, and the budget can bend', picks: ['rx1r3', 'q3'], why: 'current bodies with modern autofocus and finders; used copies sell for $4,400 and $6,200.' },
  { want: 'black and white only', picks: ['q2m'], why: 'about $4,000 used, a monochrome sensor behind the Summilux.' },
  { want: 'the most image quality at any size', picks: ['gfx100rf'], why: 'medium format in a fixed-lens body, about $4,900 used, and the size of a Q.' },
]
fs.writeFileSync('extra.json', JSON.stringify(out, null, 2))
console.log('ok', Object.keys(out.cameras).length, out.nearMisses.length)
