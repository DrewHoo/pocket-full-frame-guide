// The dataset. One object per camera plus the families, the dimension
// glossary, the reference camera (Drew's Leica CL), the picks, the near misses
// and the method text. Everything on the page renders from this file.
// Specs: research/specs.json and research/specs-sources.md. Prices:
// research/prices.md (observed 2026-09-25).

export const META = {
  asOf: '2026-09-25',
  asOfLong: 'September 25, 2026',
  budget: 3000,
  lede: [
    "Drew owns a Leica CL, the 1973 film rangefinder that Leica and Minolta made together, and wants the digital version: a camera that goes in a jacket pocket and takes stunningly good pictures. That means a full-frame sensor, a sharp fast prime, and a body not much bigger than the CL with its 40 mm Summicron-C. The budget is $3,000 used.",
    "Only a handful of cameras qualify, and they come in five kinds: Sony's RX1 line, Leica's Q line, Zeiss's one-off ZX1, the smallest interchangeable-lens full-frame bodies with a pancake lens, and Fujifilm's medium-format GFX100RF as the out-of-budget ceiling. This guide compares all of them on size as carried, image quality, the lens, the viewfinder, battery life, known failure modes, and what each costs used at B&H, KEH and Adorama today.",
  ],
  method: [
    'Specs come from manufacturer pages and manuals, cross-checked against DPReview, PetaPixel, Imaging Resource and other reviews listed below. "Usable ISO" and the reliability grade are the guide\'s judgments, built on the reviewer statements cited in each camera\'s notes. Depth as carried is the body depth plus the lens as it sits in a pocket: retracted, capped, or for fixed-lens cameras the full length to the front of the lens.',
    'Used prices were read from B&H Used, KEH and Adorama Used on September 25, 2026. The range spans condition grades; the typical number is a mid-grade copy. For interchangeable bodies the "ready to shoot" price adds a used pancake lens. Adorama began refusing the automated browser partway through the sweep, so several models were checked only at B&H and KEH; the notes say which. Prices are point-in-time observations, not live listings.',
  ],
  sources: [],
}

export const FAMILIES = [
  { id: 'rx1', short: 'Sony RX1', name: 'Sony RX1 series', years: '2012–present', color: '#d9730d', blurb: 'The first full-frame compacts. A 35 mm f/2 Zeiss Sonnar with a leaf shutter on a body barely bigger than an RX100. The pocket champions, with small batteries and, until the III, slow autofocus.' },
  { id: 'q', short: 'Leica Q', name: 'Leica Q series', years: '2015–present', color: '#b3282d', blurb: 'A 28 mm f/1.7 Summilux (43 mm f/2 APO on the Q3 43) with macro mode, a built-in EVF, crop modes to 35, 50 and 75 mm, and Leica controls. Bigger than an RX1, and the closest thing to a digital CL in feel.' },
  { id: 'zx1', short: 'Zeiss ZX1', name: 'Zeiss ZX1', years: '2020', color: '#2f5fa5', blurb: 'A 35 mm f/2 Distagon, 512 GB of internal storage and Lightroom on board. Zeiss sold it briefly and let it go; it is here for completeness.' },
  { id: 'ilc', short: 'Interchangeable', name: 'Small interchangeable bodies', years: '2019–present', color: '#1f8a5b', blurb: 'Full-frame bodies with a pancake prime: Sigma fp, fp L and BF, Panasonic S9, Sony a7C line. Cheaper and flexible, but thicker once a lens is on, and most have no viewfinder.' },
  { id: 'gfx', short: 'GFX100RF', name: 'Medium format', years: '2025–present', color: '#6d3fa0', blurb: 'Fujifilm GFX100RF: a 102 MP sensor 1.7× the area of full frame behind a 35 mm f/4 lens. The image-quality ceiling of the category and well over budget.' },
]

export const DIMENSIONS = [
  { id: 'depth', label: 'Depth as carried', why: 'Width and height decide whether a camera fits a pocket at all; depth decides whether you notice it there. The CL with its 40 mm Summicron-C is the reference. Fixed-lens cameras are measured to the front of the lens; interchangeable bodies include a pancake lens.' },
  { id: 'sensor', label: 'Sensor', why: 'Every camera here is full frame or larger. Resolution buys cropping room, which matters more on a fixed-lens camera: the Q2 and Q3 lean on it for their 35, 50 and 75 mm crop modes. Higher-resolution sensors are not noisier when the images are viewed at the same size.' },
  { id: 'lens', label: 'Lens', why: 'On a fixed-lens camera the lens is half the purchase. The RX1 Sonnar and the Q Summilux are among the best lenses Sony and Leica make. Close focus and macro modes matter for a walkaround camera.' },
  { id: 'iso', label: 'Usable ISO', why: 'Max ISO is a marketing number. The guide lists the highest ISO that is clean enough to print without noise reduction, and the highest that is still usable with some, from reviewer consensus.' },
  { id: 'viewfinder', label: 'Viewfinder', why: 'The CL has a rangefinder window; the digital equivalents have an EVF, a pop-up EVF, an optional clip-on, or nothing. Shooting at arm\'s length in sun is the practical cost of no finder.' },
  { id: 'af', label: 'Autofocus', why: 'The original RX1 and RX1R use contrast-detect AF that reviewers called slow even in 2012. Everything later has phase detection or a faster contrast system. For street shooting, zone focus with a focus scale matters as much as AF speed.' },
  { id: 'shutter', label: 'Shutter', why: 'Leaf shutters (RX1, Q, ZX1, GFX100RF) are nearly silent and sync flash at any speed. Focal-plane and electronic-only shutters are louder or roll on fast motion.' },
  { id: 'battery', label: 'Battery life', why: 'Small bodies mean small batteries. The RX1 series is famous for running out: CIPA 220 shots or fewer. Carry a spare, or pick a camera that charges over USB.' },
  { id: 'reliability', label: 'Reliability', why: 'What actually breaks, and whether the maker still supports it. Grades: A no known failure mode on a supported platform; B no known failure mode but an aging platform; C a real known issue to check for before buying; D a known issue that can total the body.' },
  { id: 'price', label: 'Used price', why: 'Observed at B&H Used, KEH and Adorama Used. In budget means a typical copy costs $3,000 or less ready to shoot; stretch means only the cheapest grades do.' },
]
