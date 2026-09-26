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
  sources: [
    { label: 'Per-camera spec sources', url: 'https://github.com/DrewHoo/pocket-full-frame-guide/blob/main/research/specs-sources.md', note: 'every URL the specs and reliability notes came from' },
    { label: 'Every used listing observed', url: 'https://github.com/DrewHoo/pocket-full-frame-guide/blob/main/research/prices.md', note: 'B&H, KEH and Adorama, September 25, 2026' },
    { label: 'List of large-sensor fixed-lens cameras', url: 'https://en.wikipedia.org/wiki/List_of_large_sensor_fixed-lens_cameras', note: 'completeness check' },
    { label: 'DPReview', url: 'https://www.dpreview.com/', note: 'reviews, specs, noise judgments' },
    { label: 'Leica firmware master list', url: 'https://www.reddotforum.com/content/2023/08/leica-firmware-master-list/', note: 'Q, Q2, Q2 Monochrom firmware' },
    { label: 'Photos', url: 'https://github.com/DrewHoo/pocket-full-frame-guide/blob/main/research/images-attribution.json', note: 'Creative Commons photographs from Wikimedia Commons and Flickr, credited under each image' },
  ],
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

export const REFERENCE = {
  "name": "Leica CL with Summicron-C 40mm f/2",
  "shortLabel": "Leica CL + 40mm",
  "w": 121,
  "h": 76,
  "d": 32,
  "depthWithLens": 55,
  "weight": 365,
  "weightWithLens": 490,
  "note": "Body 121 x 76 x 32 mm, 365 g (Wikipedia). depthWithLens is the guide's estimate: 32 mm body plus about 23 mm of lens, before the cap. Total about 490 g."
}

export const NEAR_MISSES = [
  {
    "name": "Leica CL (Typ 7323, digital, 2017)",
    "year": "2017",
    "sensor": "APS-C (23.6 x 15.7 mm), 24MP",
    "why": "Shares the name and the pocket-rangefinder idea, but it is APS-C, and Leica discontinued it in May 2022."
  },
  {
    "name": "Ricoh GR IIIx",
    "year": "2021",
    "sensor": "APS-C, 24MP",
    "why": "The only camera here that fits a jeans pocket, with the same 40mm-equivalent view as the Summicron-C, but the sensor is APS-C."
  },
  {
    "name": "Fujifilm X100VI",
    "year": "2024",
    "sensor": "APS-C, 40MP",
    "why": "Leaf shutter, hybrid finder and IBIS in a body about as deep as the CL with its lens, but APS-C."
  },
  {
    "name": "Leica M10",
    "year": "2017",
    "sensor": "Full frame, 24MP",
    "why": "The true digital rangefinder that takes Drew's Summicron-C, but 660 g and wider than a Q. See the M-mount guide.",
    "url": "https://drewhoover.com/m-mount-buying-guide/",
    "urlLabel": "See the M-mount guide."
  },
  {
    "name": "Nikon Z5IIc",
    "year": "2026",
    "sensor": "Full frame, 24.5MP",
    "why": "Announced this month as a Z5II with the EVF removed, at $1,399.95, shipping mid-October. At 72 mm deep and 620 g it is bigger than an a7C, so it is not a pocket camera."
  }
]

export const PICKS = [
  {
    "want": "the closest thing to a digital CL, in budget",
    "picks": [
      "rx1r2"
    ],
    "why": "the only camera within 20 mm of the CL's depth that also has a finder, and its 42 MP sensor is still among the best here. About $2,275 used."
  },
  {
    "want": "the smallest full-frame camera, full stop",
    "picks": [
      "rx1r",
      "rx1"
    ],
    "why": "about $950 for the same lens and pocket size as the RX1R II. You give up the finder, fast autofocus and battery life."
  },
  {
    "want": "Leica handling and the Summilux under $3,000, pocket or not",
    "picks": [
      "q"
    ],
    "why": "KEH had eight between $2,212 and $3,040. Check what Leica will still service before you buy."
  },
  {
    "want": "a finder, fast autofocus and all-day battery",
    "picks": [
      "a7c2",
      "a7c"
    ],
    "why": "about $2,870 and $1,880 with the 40mm f/2.5, but over 100 mm deep: a coat pocket, not a jacket pocket."
  },
  {
    "want": "the cheapest way into full frame this small",
    "picks": [
      "fp",
      "s9"
    ],
    "why": "about $1,450 and $1,550 with a Sigma 45mm f/2.8. No finder on either, and no mechanical shutter."
  },
  {
    "want": "no compromises, and the budget can bend",
    "picks": [
      "rx1r3",
      "q3"
    ],
    "why": "current bodies with modern autofocus and finders; used copies sell for $4,400 and $6,200."
  },
  {
    "want": "black and white only",
    "picks": [
      "q2m"
    ],
    "why": "about $4,000 used, a monochrome sensor behind the Summilux."
  },
  {
    "want": "the most image quality at any size",
    "picks": [
      "gfx100rf"
    ],
    "why": "medium format in a fixed-lens body, about $4,900 used, and the size of a Q."
  }
]

// Ship order; the timeline and the chart both assume it.
export const CAMERAS = [
  {
    "id": "rx1",
    "kind": "main",
    "maker": "Sony",
    "name": "Cyber-shot DSC-RX1",
    "family": "rx1",
    "announced": "2012-09",
    "shipped": "2012-11",
    "discontinued": null,
    "sensor": {
      "type": "CMOS",
      "mp": 24.3,
      "mono": false,
      "aaFilter": true,
      "note": "Front-side CMOS, 35.8 x 23.8 mm. Optical low-pass filter present (the RX1R removed it)."
    },
    "lens": {
      "focal": 35,
      "aperture": "f/2",
      "name": "Zeiss Sonnar T* 35mm f/2",
      "closeFocusM": 0.2,
      "macroMode": "Macro ring: 0.20-0.35 m (normal range 0.30 m to infinity). 0.26x max magnification with strong barrel distortion (DPReview).",
      "cropModes": null,
      "note": "Leaf shutter in the lens. Dedicated aperture ring.",
      "short": "35mm f/2"
    },
    "iso": {
      "base": 100,
      "max": 25600,
      "usable": 6400,
      "ceiling": 12800,
      "note": "Native 100-25600, expandable to 50-102400. Photography Blog: ISO 3200 and 6400 'more than acceptable', 12800-25600 for emergency use."
    },
    "af": {
      "short": "Contrast, slow",
      "note": "Contrast-detect only; slow in dim light. DPReview: about one second to focus in normal light, and 'can be very reluctant to find focus' in dim rooms. No phase detection."
    },
    "viewfinder": {
      "type": "optional-evf",
      "dots": null,
      "magnification": null,
      "short": "Optional clip-on",
      "note": "None built in; hot-shoe EVF (FDA-EV1MK) or optical finder (FDA-V1K) sold separately. The EVF accessory listed at $449.99 at launch (DPReview, RX1R coverage)."
    },
    "screen": {
      "size": 3,
      "dotsK": 1229,
      "touch": false,
      "articulation": "fixed",
      "short": "3\" fixed"
    },
    "shutter": {
      "type": "leaf",
      "maxMech": "1/4000 (aperture dependent)",
      "electronic": null,
      "sync": "1/2000",
      "note": "Leaf shutter, near silent. DPReview says flash syncs up to 1/2000. Top speed is only reachable stopped down; DPReview documents the same limit on the RX1R III (1/2000 at f/2, 1/4000 from f/5.6).",
      "short": "Leaf, to 1/4000"
    },
    "video": {
      "short": "1080/60p"
    },
    "sealing": {
      "level": "none",
      "rating": null,
      "note": "No weather sealing."
    },
    "battery": {
      "model": "NP-BX1",
      "cipa": 270,
      "note": "Small RX100-class battery. DPReview found the 270 CIPA figure 'unusually representative', one day of light shooting. Charged in camera over USB; no external charger in the box."
    },
    "storage": {
      "short": "One SD slot (also takes Memory Stick Duo)"
    },
    "body": {
      "w": 113,
      "h": 65,
      "d": 70,
      "depthWithLens": 70,
      "weight": 482,
      "weightWithLens": 482,
      "note": "Depth is the whole camera including the fixed lens (Sony quotes about 113.3 x 65.4 x 69.6 mm). Jacket pocket. About 15 mm deeper than a Leica CL with Summicron-C, and about the same weight.",
      "pocket": "Depth is the whole camera including the fixed lens (Sony quotes about 113.3 x 65.4 x 69.6 mm). Jacket pocket. About 15 mm deeper than a Leica CL with Summicron-C, and about the same weight."
    },
    "reliability": {
      "grade": "C",
      "issues": [
        {
          "title": "E61 lens / focus error",
          "detail": "Owners on DPReview and Rangefinderforum report E61 errors where the focus motor stalls at power-on. Workarounds are tapping the lens or restarting with the lens pressed down; otherwise it goes to Sony. Test power-on and AF several times before buying."
        },
        {
          "title": "Dust behind the fixed lens",
          "detail": "Sony says dust inside the lens or on the sensor needs an authorized technician. Owners report about $75 for a sensor clean, but dust inside the lens means a lens replacement. Check a frame at f/8-f/16 against the sky."
        },
        {
          "title": "Aperture ring play",
          "detail": "Some owners describe the aperture ring sliding between values or overshooting. Minor, but check it clicks cleanly."
        },
        {
          "title": "Aging platform",
          "detail": "Announced 2012. Contrast AF and small battery are design limits, not faults."
        }
      ]
    },
    "firmware": {
      "latest": null,
      "date": null,
      "active": false,
      "note": "Latest version not confirmed; Sony support pages blocked automated fetch."
    },
    "msrp": 2800,
    "role": "The original pocket full frame",
    "summary": "The first full-frame fixed-lens compact: a 24MP sensor behind a Zeiss 35mm f/2 with a leaf shutter, in a body about the size of a Leica CL. No viewfinder, slow contrast AF, and a small battery.",
    "verdict": "Closest in size and weight to the CL, and the image quality still holds up. Slow focus and no finder make it a zone-focus street camera, so budget for a spare battery and test for E61 before paying.",
    "identifiers": [
      "RX1 has 'RX1' on the front; RX1R adds an 'R'. Same body; the RX1R has no AA filter."
    ],
    "referenceUrl": null,
    "shortName": "RX1",
    "chartLabel": [
      -10,
      -6,
      "end"
    ],
    "ogLabel": [
      -14,
      -10,
      "end"
    ],
    "stab": {
      "present": false,
      "stops": null,
      "note": "No stabilization of any kind.",
      "short": "None"
    },
    "image": {
      "src": "img/rx1.jpg",
      "alt": "Sony Cyber-shot DSC-RX1",
      "credit": "Kārlis Dambrāns",
      "license": "CC BY 2.0",
      "pageUrl": "https://www.flickr.com/photos/janitors/8677929314/"
    },
    "prices": {
      "usedLow": 721,
      "usedTypical": 916,
      "usedHigh": 1199,
      "note": "One copy at B&H and a few at KEH. Adorama had none.",
      "sources": [
        {
          "retailer": "B&H",
          "price": "$1,199",
          "grade": "grade 9",
          "url": "https://www.bhphotovideo.com/c/product/803549840-USE/sony_dscrx1_b_cyber_shot_dsc_rx1_full_frame.html"
        },
        {
          "retailer": "KEH",
          "price": "$721–$916",
          "grade": "across grades",
          "url": "https://www.keh.com/shop/sony-cyber-shot-dsc-rx1-digital-camera-24-3-m-p.html"
        }
      ],
      "newPrice": null
    }
  },
  {
    "id": "rx1r",
    "kind": "main",
    "maker": "Sony",
    "name": "Cyber-shot DSC-RX1R",
    "family": "rx1",
    "announced": "2013-06",
    "shipped": "2013-07",
    "discontinued": null,
    "sensor": {
      "type": "CMOS",
      "mp": 24.3,
      "mono": false,
      "aaFilter": false,
      "note": "Same sensor as the RX1 with the optical low-pass filter removed for extra sharpness (Imaging Resource)."
    },
    "lens": {
      "focal": 35,
      "aperture": "f/2",
      "name": "Zeiss Sonnar T* 35mm f/2",
      "closeFocusM": 0.2,
      "macroMode": "Macro ring: 0.20-0.35 m, as RX1.",
      "cropModes": null,
      "note": "Same lens and leaf shutter as the RX1.",
      "short": "35mm f/2"
    },
    "iso": {
      "base": 100,
      "max": 25600,
      "usable": 6400,
      "ceiling": 12800,
      "note": "Native 100-25600, expandable 50-102400 (DPReview). Same sensor as RX1, so the RX1 reviewer judgments apply."
    },
    "af": {
      "short": "Contrast, slow",
      "note": "Contrast-detect only; slow in dim light. Same contrast-detect system as the RX1 (DPReview spec)."
    },
    "viewfinder": {
      "type": "optional-evf",
      "dots": null,
      "magnification": null,
      "short": "Optional clip-on",
      "note": "None built in; FDA-EV1MK EVF or FDA-V1K optical finder optional. EVF accessory was $449.99 at launch (DPReview)."
    },
    "screen": {
      "size": 3,
      "dotsK": 1229,
      "touch": false,
      "articulation": "fixed",
      "short": "3\" fixed"
    },
    "shutter": {
      "type": "leaf",
      "maxMech": "1/4000 (aperture dependent)",
      "electronic": null,
      "sync": "1/2000",
      "note": "Leaf shutter, near silent. Same behavior as the RX1.",
      "short": "Leaf, to 1/4000"
    },
    "video": {
      "short": "1080/60p"
    },
    "sealing": {
      "level": "none",
      "rating": null,
      "note": "No weather sealing."
    },
    "battery": {
      "model": "NP-BX1",
      "cipa": 270,
      "note": "Same as RX1. In-camera USB charging."
    },
    "storage": {
      "short": "One SD slot (also takes Memory Stick Duo)"
    },
    "body": {
      "w": 113,
      "h": 65,
      "d": 70,
      "depthWithLens": 70,
      "weight": 482,
      "weightWithLens": 482,
      "note": "Same body as the RX1. Jacket pocket.",
      "pocket": "Same body as the RX1. Jacket pocket."
    },
    "reliability": {
      "grade": "C",
      "issues": [
        {
          "title": "E61 lens / focus error",
          "detail": "Rangefinderforum thread 'Error 61 on RX1R' describes the same stalled focus motor as the RX1. Test repeated power cycles."
        },
        {
          "title": "Dust behind the fixed lens",
          "detail": "Service-only cleaning; dust inside the lens means a lens replacement. Check a stopped-down sky frame."
        },
        {
          "title": "Aging platform",
          "detail": "Announced 2013. Contrast AF and small battery are design limits."
        }
      ]
    },
    "firmware": {
      "latest": null,
      "date": null,
      "active": false,
      "note": "Not confirmed."
    },
    "msrp": 2800,
    "role": "RX1 without the AA filter",
    "summary": "An RX1 with the anti-aliasing filter removed for a little more fine detail. Everything else, including the slow AF and small battery, is the same.",
    "verdict": "Pick it over the RX1 only if the price is the same; the difference is small. The same E61 and dust checks apply.",
    "identifiers": [
      "'RX1R' on the front. Otherwise identical to the RX1."
    ],
    "referenceUrl": "https://www.sony-asia.com/electronics/support/compact-cameras-dsc-rx-series/dsc-rx1r/downloads",
    "shortName": "RX1R",
    "chartLabel": [
      -10,
      14,
      "end"
    ],
    "ogLabel": [
      -14,
      22,
      "end"
    ],
    "stab": {
      "present": false,
      "stops": null,
      "note": "None.",
      "short": "None"
    },
    "image": {
      "src": "img/rx1r.jpg",
      "alt": "Sony Cyber-shot DSC-RX1R",
      "credit": "Solomon203",
      "license": "CC BY-SA 3.0",
      "pageUrl": "https://commons.wikimedia.org/wiki/File:Sony_RX1R_in_TIPMEE_20131024.jpg"
    },
    "prices": {
      "usedLow": 946,
      "usedTypical": 975,
      "usedHigh": 1025,
      "note": "Three at B&H and four at KEH, all within $80 of each other. Adorama had none.",
      "sources": [
        {
          "retailer": "B&H",
          "price": "$950",
          "grade": "grade 8",
          "url": "https://www.bhphotovideo.com/c/product/803355095-USE/sony_dscrx1r_b_cyber_shot_dsc_rx1r_digital_camera.html"
        },
        {
          "retailer": "B&H",
          "price": "$975",
          "grade": "grade 8+",
          "url": "https://www.bhphotovideo.com/c/product/803453240-USE/sony_dscrx1r_b_cyber_shot_dsc_rx1r_digital_camera.html"
        },
        {
          "retailer": "B&H",
          "price": "$1,025",
          "grade": "grade 9",
          "url": "https://www.bhphotovideo.com/c/product/803461934-USE/sony_dscrx1r_b_cyber_shot_dsc_rx1r_digital_camera.html"
        },
        {
          "retailer": "KEH",
          "price": "$946",
          "grade": "4 in stock",
          "url": "https://www.keh.com/shop/rx1r-24-3-m-p.html"
        }
      ],
      "newPrice": null
    }
  },
  {
    "id": "q",
    "kind": "main",
    "maker": "Leica",
    "name": "Q (Typ 116)",
    "family": "q",
    "announced": "2015-06",
    "shipped": "2015-06",
    "discontinued": null,
    "sensor": {
      "type": "CMOS",
      "mp": 24.2,
      "mono": false,
      "aaFilter": false,
      "note": "24MP CMOS designed by CMOSIS, made by STMicroelectronics (Wikipedia). No AA filter (DPReview)."
    },
    "lens": {
      "focal": 28,
      "aperture": "f/1.7",
      "name": "Summilux 28mm f/1.7 ASPH",
      "closeFocusM": 0.17,
      "macroMode": "Macro ring: from 17 cm (DPReview).",
      "cropModes": "35/50",
      "note": "Optically stabilized. DPReview calls the lens 'superb'.",
      "short": "28mm f/1.7"
    },
    "iso": {
      "base": 100,
      "max": 50000,
      "usable": 6400,
      "ceiling": 12800,
      "note": "Photography Blog: noise-free to 1600, 6400 and 12800 still usable. DPReview puts the practical limit around 6400 and notes banding in pushed Raws."
    },
    "af": {
      "short": "Contrast",
      "note": "Contrast-detect, fast in good light. Leica quoted 0.15 s. No phase detection."
    },
    "viewfinder": {
      "type": "evf",
      "dots": 3680000,
      "magnification": null,
      "short": "Built-in EVF",
      "note": "Built-in 3.68M-dot LCoS EVF. La Vida Leica: the EVF coating scratches easily (metal glasses frames) and cannot be replaced alone; the whole EVF unit is swapped."
    },
    "screen": {
      "size": 3,
      "dotsK": 1040,
      "touch": true,
      "articulation": "fixed",
      "short": "3\" fixed, touch"
    },
    "shutter": {
      "type": "leaf",
      "maxMech": "1/2000",
      "electronic": "1/16000",
      "sync": "1/500",
      "note": "Leaf shutter, near silent. Flash sync to 1/500 per Leica data.",
      "short": "Leaf, to 1/2000"
    },
    "video": {
      "short": "1080/60p"
    },
    "sealing": {
      "level": "none",
      "rating": null,
      "note": "Not sealed (DPReview)."
    },
    "battery": {
      "model": "BP-DC12",
      "cipa": 300,
      "note": "Leica lists about 300 shots; DPReview's Q2 review cites 250 for the Q. No USB charging."
    },
    "storage": {
      "short": "One SD slot"
    },
    "body": {
      "w": 130,
      "h": 80,
      "d": 93,
      "depthWithLens": 93,
      "weight": 640,
      "weightWithLens": 640,
      "note": "Depth includes the fixed lens. Coat pocket at best. About 150 g heavier and 38 mm deeper than a CL with Summicron-C.",
      "pocket": "Depth includes the fixed lens. Coat pocket at best. About 150 g heavier and 38 mm deeper than a CL with Summicron-C."
    },
    "reliability": {
      "grade": "C",
      "issues": [
        {
          "title": "Service support uncertain",
          "detail": "In an l-camera-forum thread (Oct-Nov 2025), one owner said Leica Germany declined to service a Typ 116 and offered a Q3 discount. Others said Leica USA still services it, and one reported a 'stop service order' on an EVF part. Confirm repairability before buying."
        },
        {
          "title": "EVF coating scratches",
          "detail": "The whole EVF must be replaced if the coated glass is damaged. Inspect the eyepiece."
        },
        {
          "title": "Sensor dust",
          "detail": "An early batch had dust problems (l-camera-forum). Out-of-warranty cleaning quoted at EUR 350 plus tax and 6 weeks in 2019."
        },
        {
          "title": "Early faults list",
          "detail": "A 2015 l-camera-forum thread lists clicking rear screens, AF motor grinding, EVF faults. Low counts, but check AF and LCD."
        }
      ]
    },
    "firmware": {
      "latest": "3.1",
      "date": "2019-02-01",
      "active": false,
      "note": "Red Dot Forum firmware master list."
    },
    "msrp": 4250,
    "role": "The first Q, cheapest way into the line",
    "summary": "A 24MP full frame behind a stabilized 28mm f/1.7 Summilux with a leaf shutter and a built-in EVF. It is much bigger than an RX1.",
    "verdict": "Great lens and handling, but 640 g and 93 mm deep makes it a shoulder-strap camera, not a CL in a pocket. The service question is the thing to settle before buying one.",
    "identifiers": [
      "Red dot on the front. The Q-P (Nov 2018) has a Leica script on the top plate instead, a quieter shutter and a revised power switch; same specs otherwise."
    ],
    "referenceUrl": "https://leica-camera.com/sites/default/files/pm-55579-Datenblatt_Q%20(Typ%20116)_e.pdf",
    "shortName": "Q",
    "chartLabel": [
      10,
      4,
      "start"
    ],
    "ogLabel": [
      14,
      6,
      "start"
    ],
    "stab": {
      "present": true,
      "stops": null,
      "note": "Optical stabilization in the lens (OIS), not IBIS.",
      "short": "Lens OIS"
    },
    "image": {
      "src": "img/q.jpg",
      "alt": "Leica Q (Typ 116)",
      "credit": "Rama",
      "license": "CC BY-SA 2.0 fr",
      "pageUrl": "https://commons.wikimedia.org/wiki/File:Leica_Q-IMG_9924.JPG"
    },
    "prices": {
      "usedLow": 2212,
      "usedTypical": 2756,
      "usedHigh": 3040,
      "note": "KEH had eight: black, silver and titanium gray. B&H had only a $7,400 Dubai special edition and Adorama was out of stock. The Q-P version was $3,662 at KEH.",
      "sources": [
        {
          "retailer": "KEH",
          "price": "$2,212",
          "grade": "Bargain, black",
          "url": "https://www.keh.com/shop/leica-q-typ-116-black-digital-camera-24-2-m-p.html"
        },
        {
          "retailer": "KEH",
          "price": "$2,756",
          "grade": "Excellent, black, no hood",
          "url": "https://www.keh.com/shop/leica-q-typ-116-black-digital-camera-24-2-m-p.html"
        },
        {
          "retailer": "KEH",
          "price": "$2,808",
          "grade": "Excellent, black, hood and cap",
          "url": "https://www.keh.com/shop/leica-q-typ-116-black-digital-camera-24-2-m-p.html"
        },
        {
          "retailer": "KEH",
          "price": "$3,040",
          "grade": "Like New−, black",
          "url": "https://www.keh.com/shop/leica-q-typ-116-black-digital-camera-24-2-m-p.html"
        },
        {
          "retailer": "KEH",
          "price": "$2,641",
          "grade": "silver",
          "url": "https://www.keh.com/shop/leica-q-typ-116-silver-digital-camera-24-2-m-p.html"
        },
        {
          "retailer": "KEH",
          "price": "$2,254–$2,884",
          "grade": "titanium gray",
          "url": "https://www.keh.com/shop/leica-q-typ-116-titanium-gray-digital-camera-24-2-m-p-1.html"
        },
        {
          "retailer": "KEH",
          "price": "$3,662",
          "grade": "Q-P",
          "url": "https://www.keh.com/shop/leica-q-p-black-digital-camera-24-2-m-p.html"
        }
      ],
      "newPrice": null
    }
  },
  {
    "id": "rx1r2",
    "kind": "main",
    "maker": "Sony",
    "name": "Cyber-shot DSC-RX1R II",
    "family": "rx1",
    "announced": "2015-10",
    "shipped": "2015-11",
    "discontinued": "2024-03",
    "sensor": {
      "type": "BSI-CMOS",
      "mp": 42.4,
      "mono": false,
      "aaFilter": "variable",
      "note": "The a7R II sensor. Optical variable low-pass filter settable to off, standard or high, with bracketing (DPReview)."
    },
    "lens": {
      "focal": 35,
      "aperture": "f/2",
      "name": "Zeiss Sonnar T* 35mm f/2",
      "closeFocusM": 0.14,
      "macroMode": "Macro ring focuses to about 14 cm in front of the lens (DPReview announcement).",
      "cropModes": null,
      "note": "DPReview (Mirrorlessons review) notes rainbow-type flare in direct sun.",
      "short": "35mm f/2"
    },
    "iso": {
      "base": 100,
      "max": 25600,
      "usable": 6400,
      "ceiling": 12800,
      "note": "Native 100-25600, expandable 50-102400. Imaging Resource: 'nice 8 x 10 inch prints' up to ISO 12800. DPReview: 'nearly class-leading' Raw noise."
    },
    "af": {
      "short": "Hybrid PDAF",
      "note": "Hybrid: 399-point phase detect plus contrast. DPReview: 'fast and accurate in most shooting situations', a bit slower than the a7R II because the whole lens unit moves."
    },
    "viewfinder": {
      "type": "popup-evf",
      "dots": 2359000,
      "magnification": 0.74,
      "short": "Pop-up EVF",
      "note": "Pop-up OLED EVF, 2.36M dots, 0.74x. Pops up in one motion (no push-pull like the RX100 III). Mirrorlessons: 'feels more solid' than the RX100 version."
    },
    "screen": {
      "size": 3,
      "dotsK": 1229,
      "touch": false,
      "articulation": "tilting",
      "short": "3\" tilting"
    },
    "shutter": {
      "type": "leaf",
      "maxMech": "1/4000 (aperture dependent)",
      "electronic": null,
      "sync": "1/2000",
      "note": "Leaf shutter, near silent, no shutter shock (DPReview).",
      "short": "Leaf, to 1/4000"
    },
    "video": {
      "short": "1080/60p, 720/120p"
    },
    "sealing": {
      "level": "none",
      "rating": null,
      "note": "DPReview: no sealing, 'at this price, that's disappointing.'"
    },
    "battery": {
      "model": "NP-BX1",
      "cipa": 220,
      "note": "The weak point. DPReview got 'less than 100 shots' in cold weather. An external charger is in the box. In-camera USB charging not confirmed in the sources read. Carry two spares."
    },
    "storage": {
      "short": "One SD slot (also takes Memory Stick)"
    },
    "body": {
      "w": 113,
      "h": 65,
      "d": 72,
      "depthWithLens": 72,
      "weight": 507,
      "weightWithLens": 507,
      "note": "Depth includes the fixed lens. Jacket pocket. About 17 mm deeper and 20 g heavier than a CL with Summicron-C.",
      "pocket": "Depth includes the fixed lens. Jacket pocket. About 17 mm deeper and 20 g heavier than a CL with Summicron-C."
    },
    "reliability": {
      "grade": "C",
      "issues": [
        {
          "title": "Pop-up EVF",
          "detail": "A moving part in a pocket camera. No widespread failure pattern turned up, but forum reports include an EVF that went blue then black, and a diopter slider that would not hold position. Pop it up, check the image and diopter, and retract it several times."
        },
        {
          "title": "E61 lens / focus error",
          "detail": "Reported across the RX1 family. Test repeated power cycles and AF."
        },
        {
          "title": "Sensor dust",
          "detail": "Owners report dust specks visible from f/5.6 after a few years. Cleaning goes through the back of the camera and is a service job."
        },
        {
          "title": "No sealing, poor battery",
          "detail": "Design limits, not faults, but they shape how you carry it."
        }
      ]
    },
    "firmware": {
      "latest": null,
      "date": null,
      "active": false,
      "note": "A DPReview forum snippet suggests 1.00 was never updated; not confirmed."
    },
    "msrp": 3299,
    "role": "The pocket 42MP with a finder",
    "summary": "The RX1 body with the a7R II's 42MP sensor, hybrid AF, a tilting screen and a pop-up EVF. Sony marked it discontinued in Japan in March 2024, after about eight years on sale.",
    "verdict": "The best fit for a digital CL under $3k: 17 mm deeper than the CL but the same pocket, a real finder, and image quality that still competes. Buy one with a tested EVF, and plan for spare batteries.",
    "identifiers": [
      "'RX1R II' on the front; the EVF sits in the top-left of the top plate."
    ],
    "referenceUrl": "https://www.sony-mea.com/en/electronics/support/compact-cameras-dsc-rx-series/dsc-rx1rm2/downloads",
    "shortName": "RX1R II",
    "chartLabel": [
      -10,
      -6,
      "end"
    ],
    "ogLabel": [
      -14,
      -8,
      "end"
    ],
    "stab": {
      "present": false,
      "stops": null,
      "note": "None.",
      "short": "None"
    },
    "image": {
      "src": "img/rx1r2.jpg",
      "alt": "Sony Cyber-shot DSC-RX1R II",
      "credit": "AlonKopp",
      "license": "CC BY-SA 4.0",
      "pageUrl": "https://commons.wikimedia.org/wiki/File:Sony_Cyber_shot_DSC_RX1R_II_camera.jpg"
    },
    "prices": {
      "usedLow": 2179,
      "usedTypical": 2275,
      "usedHigh": 2347,
      "note": "Adorama's only copy was sold for parts ($516: won't power on, damaged sensor), so it's left out of the range.",
      "sources": [
        {
          "retailer": "B&H",
          "price": "$2,275",
          "grade": "grade 9",
          "url": "https://www.bhphotovideo.com/c/product/803549490-USE/sony_dscrx1rm2_b_cyber_shot_dsc_rx1r_ii_digital.html"
        },
        {
          "retailer": "KEH",
          "price": "$2,179–$2,347",
          "grade": "5 in stock",
          "url": "https://www.keh.com/shop/sony-cyber-shot-dsc-rx1r-ii-digital-camera-42-4-m-p-1.html"
        },
        {
          "retailer": "Adorama",
          "price": "$516",
          "grade": "for parts only",
          "url": "https://www.adorama.com/imcsorx1r2.html"
        }
      ],
      "newPrice": null
    }
  },
  {
    "id": "q2",
    "kind": "main",
    "maker": "Leica",
    "name": "Q2",
    "family": "q",
    "announced": "2019-03",
    "shipped": "2019-03",
    "discontinued": null,
    "sensor": {
      "type": "CMOS",
      "mp": 47.3,
      "mono": false,
      "aaFilter": null,
      "note": "47.3MP effective (50.4MP total). DPReview says it appears similar to the Lumix S1R sensor. AA filter status not confirmed in sources read."
    },
    "lens": {
      "focal": 28,
      "aperture": "f/1.7",
      "name": "Summilux 28mm f/1.7 ASPH",
      "closeFocusM": 0.17,
      "macroMode": "30 cm to infinity normally; macro setting from 17 cm (Leica data).",
      "cropModes": "35/50/75",
      "note": "Optically stabilized. Crops are 30MP, 15MP and 7MP.",
      "short": "28mm f/1.7"
    },
    "iso": {
      "base": 50,
      "max": 50000,
      "usable": 3200,
      "ceiling": 6400,
      "note": "DPReview: high ISO 'falls behind its contemporaries' by about a stop. Usable values are the guide's reading of that."
    },
    "af": {
      "short": "Contrast",
      "note": "Contrast-detect. Leica data lists a contrast-based system. DPReview: 'solidly adequate, rather than impressive', with continuous-AF flutter."
    },
    "viewfinder": {
      "type": "evf",
      "dots": 3680000,
      "magnification": 0.76,
      "short": "Built-in EVF",
      "note": "Built-in OLED EVF, 3.68M dots, 0.76x. Same resolution as the Q but OLED, which DPReview calls a significant step up."
    },
    "screen": {
      "size": 3,
      "dotsK": 1040,
      "touch": true,
      "articulation": "fixed",
      "short": "3\" fixed, touch"
    },
    "shutter": {
      "type": "leaf",
      "maxMech": "1/2000",
      "electronic": "1/40000",
      "sync": "1/500",
      "note": "Leaf shutter, near silent. Leica's data sheet says sync up to 1/500; DPReview's review says 1/2000. Leica's figure used here.",
      "short": "Leaf, to 1/2000"
    },
    "video": {
      "short": "C4K/4K 30p, 1080/120p"
    },
    "sealing": {
      "level": "ip",
      "rating": "IP52",
      "note": "Same IP52 rating as the SL (DPReview)."
    },
    "battery": {
      "model": "BP-SCL4",
      "cipa": 350,
      "note": "Leica says about 350; DPReview says 370. No USB charging (DPReview con)."
    },
    "storage": {
      "short": "One SD slot (UHS-II recommended)"
    },
    "body": {
      "w": 130,
      "h": 80,
      "d": 91.9,
      "depthWithLens": 91.9,
      "weight": 734,
      "weightWithLens": 734,
      "note": "Leica data sheet. Coat pocket at best. About 240 g heavier than a CL with Summicron-C.",
      "pocket": "Leica data sheet. Coat pocket at best. About 240 g heavier than a CL with Summicron-C."
    },
    "reliability": {
      "grade": "B",
      "issues": [
        {
          "title": "Sensor dust",
          "detail": "Dust behind the fixed lens needs Leica service. Owners report about $275 and 9-10 weeks at Leica New Jersey out of warranty."
        },
        {
          "title": "Isolated system errors",
          "detail": "Forum reports of 'system error (focus)', stuck PASM, AF/OIS faults and debris inside the EVF. No systemic pattern found."
        },
        {
          "title": "Aging but supported",
          "detail": "Firmware stopped at 5.1.0 in Dec 2023 after the Q3 launched."
        }
      ]
    },
    "firmware": {
      "latest": "5.1.0",
      "date": "2023-12-08",
      "active": false,
      "note": "Red Dot Forum."
    },
    "msrp": 4995,
    "role": "Sealed 47MP Q",
    "summary": "The Q body with a 47MP sensor, IP52 sealing, an OLED finder and a bigger battery. Focus is still contrast-detect.",
    "verdict": "A better camera than the Q, but the same 90 mm-deep, 734 g package, so it is a bag camera, not a CL replacement. Check for sensor dust.",
    "identifiers": [
      "Red dot, 'Q2' engraved on the top plate. Several special editions exist (not researched here)."
    ],
    "referenceUrl": "https://leica-camera.com/en-int/photography/cameras/q/q2-black/technical-specification",
    "shortName": "Q2",
    "chartLabel": [
      10,
      12,
      "start"
    ],
    "stab": {
      "present": true,
      "stops": null,
      "note": "Optical stabilization in the lens.",
      "short": "Lens OIS"
    },
    "image": {
      "src": "img/q2.jpg",
      "alt": "Leica Q2",
      "credit": "Ferencvizi",
      "license": "CC BY-SA 4.0",
      "pageUrl": "https://commons.wikimedia.org/wiki/File:Leica_Q2_(L1000042).jpg"
    },
    "prices": {
      "usedLow": 3800,
      "usedTypical": 3969,
      "usedHigh": 4378,
      "note": "The Q2 Reporter edition runs about the same ($3,865 at KEH, $4,187 at Adorama). Adorama had no standard Q2.",
      "sources": [
        {
          "retailer": "B&H",
          "price": "$3,800",
          "grade": "grade 8",
          "url": "https://www.bhphotovideo.com/c/product/803536852-USE/leica_19051_q2_digital_camera.html"
        },
        {
          "retailer": "B&H",
          "price": "$3,900",
          "grade": "grade 8+",
          "url": "https://www.bhphotovideo.com/c/product/803452261-USE/leica_19051_q2_digital_camera.html"
        },
        {
          "retailer": "B&H",
          "price": "$4,378",
          "grade": "grade 9+",
          "url": "https://www.bhphotovideo.com/c/product/803479933-USE/leica_19051_q2_digital_camera.html"
        },
        {
          "retailer": "KEH",
          "price": "$3,969–$4,139",
          "grade": "black",
          "url": "https://www.keh.com/shop/leica-q2-type-4889-black-digital-camera-47-3-m-p.html"
        },
        {
          "retailer": "KEH",
          "price": "$3,865–$3,880",
          "grade": "Reporter",
          "url": "https://www.keh.com/shop/27988874.html"
        },
        {
          "retailer": "Adorama",
          "price": "$4,187",
          "grade": "Reporter",
          "url": "https://www.adorama.com/imclcq2re.html"
        }
      ],
      "newPrice": null
    }
  },
  {
    "id": "fp",
    "kind": "main",
    "maker": "Sigma",
    "name": "fp",
    "family": "ilc",
    "announced": "2019-07",
    "shipped": "2019-10",
    "discontinued": "2025-06",
    "sensor": {
      "type": "BSI-CMOS",
      "mp": 24.6,
      "mono": false,
      "aaFilter": null,
      "note": "Bayer BSI sensor, Sigma's first non-Foveon full frame."
    },
    "lens": {
      "focal": 45,
      "aperture": "f/2.8",
      "name": "Sigma 45mm f/2.8 DG DN Contemporary (paired)",
      "closeFocusM": 0.24,
      "macroMode": null,
      "cropModes": null,
      "note": "Ø64 x 46.2 mm, 215 g (Sigma, L-mount). The fp's kit lens and the nearest AF match to the CL's 40mm. Smaller but compromised option: Lumix S 26mm f/8 pancake, 18.1 mm long, 58 g, manual focus, fixed f/8.",
      "short": "45mm f/2.8",
      "shortName": "the Sigma 45mm f/2.8"
    },
    "iso": {
      "base": 100,
      "max": 25600,
      "usable": 3200,
      "ceiling": 12800,
      "note": "Expandable 6-102400. Photography Blog: great results to 3200; 6400-12800 noisier 'although the effect is not unattractive'."
    },
    "af": {
      "short": "Contrast",
      "note": "Contrast-detect only. No phase detection."
    },
    "viewfinder": {
      "type": "optional-evf",
      "dots": null,
      "magnification": null,
      "short": "None (loupe optional)",
      "note": "None; LVF-11 loupe optional. EVF-11 finder was launched with the fp L and also fits the fp (not confirmed here)."
    },
    "screen": {
      "size": 3.15,
      "dotsK": 2100,
      "touch": true,
      "articulation": "fixed",
      "short": "3.15\" fixed, touch"
    },
    "shutter": {
      "type": "electronic-only",
      "maxMech": null,
      "electronic": "1/8000",
      "sync": "1/30",
      "note": "No mechanical shutter. Rolling-shutter skew on moving subjects and banding under artificial light (Photo Review). Silent, but not a leaf shutter.",
      "short": "Electronic only"
    },
    "video": {
      "short": "4K/30p, 1080/120p"
    },
    "sealing": {
      "level": "splash",
      "rating": null,
      "note": "DPReview lists it as environmentally sealed."
    },
    "battery": {
      "model": "BP-51",
      "cipa": 280,
      "note": "USB charging."
    },
    "storage": {
      "short": "One SD slot (UHS-II); USB SSD recording"
    },
    "body": {
      "w": 112.6,
      "h": 69.9,
      "d": 45.3,
      "depthWithLens": 92,
      "weight": 422,
      "weightWithLens": 637,
      "note": "Depth as carried is an estimate: body depth plus lens length. About 63 mm with the 26mm f/8 pancake. Jacket pocket; the body is RX1-sized, the lens is what sticks out.",
      "pocket": "Depth as carried is an estimate: body depth plus lens length. About 63 mm with the 26mm f/8 pancake. Jacket pocket; the body is RX1-sized, the lens is what sticks out."
    },
    "reliability": {
      "grade": "B",
      "issues": [
        {
          "title": "Discontinued, firmware frozen",
          "detail": "Discontinued June 2025. Last firmware 5.02 in August 2023."
        },
        {
          "title": "Overheating is not borne out",
          "detail": "A large heat sink sits behind the screen. Reviewers and owners report it runs warm, not that it shuts down."
        },
        {
          "title": "Electronic shutter only",
          "detail": "A design limit: rolling-shutter distortion and flash limited to 1/30."
        }
      ]
    },
    "firmware": {
      "latest": "5.02",
      "date": "2023-08-03",
      "active": false,
      "note": "Sigma firmware page."
    },
    "msrp": 1899,
    "role": "Tiny L-mount brick",
    "summary": "The smallest full-frame interchangeable body when it launched: a 24MP BSI sensor, no finder, no mechanical shutter, no grip. Its heat sink doubles as the back of the camera.",
    "verdict": "With the 45mm f/2.8 it is about the size of an RX1 but deeper, and much cheaper. Contrast AF and the electronic shutter are the price.",
    "identifiers": [
      "Finned heat sink across the back; 'fp' on the top."
    ],
    "referenceUrl": "https://www.sigma-global.com/en/cameras/fp/",
    "shortName": "fp",
    "chartLabel": [
      -10,
      10,
      "end"
    ],
    "ogLabel": [
      -14,
      14,
      "end"
    ],
    "stab": {
      "present": false,
      "stops": null,
      "note": "None.",
      "short": "None"
    },
    "image": {
      "src": "img/fp.jpg",
      "alt": "Sigma fp",
      "credit": "昼落ち",
      "license": "CC BY-SA 4.0",
      "pageUrl": "https://commons.wikimedia.org/wiki/File:Sigma_fp_26_oct_2019c.jpg"
    },
    "prices": {
      "usedLow": 985,
      "usedTypical": 1019,
      "usedHigh": 1298,
      "note": "Adorama had one kit with the 45mm f/2.8 at $1,813.",
      "sources": [
        {
          "retailer": "B&H",
          "price": "$1,298",
          "grade": "grade 9",
          "url": "https://www.bhphotovideo.com/c/product/803551680-USE/sigma_fp_mirrorless_digital_camera.html"
        },
        {
          "retailer": "KEH",
          "price": "$985–$1,019",
          "grade": "4 in stock",
          "url": "https://www.keh.com/shop/28682327.html"
        },
        {
          "retailer": "Adorama",
          "price": "$1,813",
          "grade": "with 45mm f/2.8",
          "url": "https://www.adorama.com/imcsgfpk.html"
        }
      ],
      "lensUsed": 430,
      "newPrice": null
    }
  },
  {
    "id": "zx1",
    "kind": "main",
    "maker": "Zeiss",
    "name": "ZX1",
    "family": "zx1",
    "announced": "2018-09",
    "shipped": "2020-10",
    "discontinued": "2023-02",
    "sensor": {
      "type": "CMOS",
      "mp": 37.4,
      "mono": false,
      "aaFilter": null,
      "note": "Zeiss in-house full-frame sensor (PetaPixel)."
    },
    "lens": {
      "focal": 35,
      "aperture": "f/2",
      "name": "Zeiss 35mm f/2 with T* coating",
      "closeFocusM": 0.3,
      "macroMode": null,
      "cropModes": null,
      "note": "Close focus 30 cm per DPReview spec page.",
      "short": "35mm f/2"
    },
    "iso": {
      "base": 80,
      "max": 51200,
      "usable": 3200,
      "ceiling": 6400,
      "note": "DPReview: Raw files show 'more luminance noise (grain) than its peers'. Usable values are the guide's reading of that."
    },
    "af": {
      "short": "Contrast",
      "note": "Contrast-detect; face detect added in firmware 1.4. DPReview: 'fairly basic' and 'occasionally unreliable', with front- and back-focus on still subjects."
    },
    "viewfinder": {
      "type": "evf",
      "dots": 6220000,
      "magnification": 0.74,
      "short": "Built-in EVF",
      "note": "Built-in OLED EVF, 1920x1080, 0.74x."
    },
    "screen": {
      "size": 4.34,
      "dotsK": 2760,
      "touch": true,
      "articulation": "fixed",
      "short": "4.34\" fixed, touch"
    },
    "shutter": {
      "type": "leaf",
      "maxMech": "1/2000",
      "electronic": null,
      "sync": "1/1000",
      "note": "Leaf shutter, near silent (DPReview review).",
      "short": "Leaf, to 1/2000"
    },
    "video": {
      "short": "4K/30p"
    },
    "sealing": {
      "level": "unknown",
      "rating": null,
      "note": "Not confirmed in sources read."
    },
    "battery": {
      "model": "DD-PS1A / DD-PS1E (22.9 Wh)",
      "cipa": 250,
      "note": "Zeiss quoted about 250 shots in a CIPA-like test. DPReview says sleep mode drains the battery; power down fully."
    },
    "storage": {
      "short": "512 GB internal SSD only, no card slot"
    },
    "body": {
      "w": 142,
      "h": 93,
      "d": 46,
      "depthWithLens": 94,
      "weight": 837,
      "weightWithLens": 837,
      "note": "Body 46 mm deep, 94 mm with lens (Wikipedia). Weight 837 g per Wikipedia, 800 g per DPReview. Bag camera, not a pocket camera.",
      "pocket": "Body 46 mm deep, 94 mm with lens (Wikipedia). Weight 837 g per Wikipedia, 800 g per DPReview. Bag camera, not a pocket camera."
    },
    "reliability": {
      "grade": "D",
      "issues": [
        {
          "title": "Abandoned platform",
          "detail": "Zeiss discontinued it in February 2023. The last firmware was 1.4 in May 2021 (PetaPixel). Repair and parts availability after discontinuation were not confirmed; treat any fault as possibly unrepairable."
        },
        {
          "title": "Software bugs",
          "detail": "Amateur Photographer reports the touchscreen stopping and Lightroom crashing. DPReview: 10-20 s startup and 'occasionally sluggish operation'."
        },
        {
          "title": "Android and Lightroom Mobile aging",
          "detail": "The built-in Lightroom is frozen at whatever the last firmware shipped. Unknown how long app pairing keeps working."
        }
      ]
    },
    "firmware": {
      "latest": "1.4",
      "date": "2021-05",
      "active": false,
      "note": "PetaPixel says nothing came after the 2021 update."
    },
    "msrp": 6000,
    "role": "The Android Zeiss",
    "summary": "A 37MP full frame with a 35mm f/2 leaf-shutter lens, a 4.3 in screen, 512 GB internal storage and Lightroom running on Android. Zeiss discontinued it after about two and a half years.",
    "verdict": "Too big to pocket and orphaned by its maker. Skip it.",
    "identifiers": [
      "Large rear screen, no card door, Zeiss logo on the front."
    ],
    "referenceUrl": null,
    "shortName": "ZX1",
    "stab": {
      "present": false,
      "stops": null,
      "note": "None.",
      "short": "None"
    },
    "image": {
      "src": "img/zx1.jpg",
      "alt": "Zeiss ZX1",
      "credit": "Peachyeung316",
      "license": "CC BY-SA 4.0",
      "pageUrl": "https://commons.wikimedia.org/wiki/File:ZEISS_ZX1.jpg"
    },
    "prices": {
      "usedLow": null,
      "usedTypical": null,
      "usedHigh": null,
      "note": "No stock at B&H (listed as no longer available), KEH, or MPB. The only eBay listing on the observation date was a prototype at $3,999. Adorama was not checked (blocked).",
      "sources": [],
      "newPrice": null
    }
  },
  {
    "id": "a7c",
    "kind": "main",
    "maker": "Sony",
    "name": "Alpha 7C (ILCE-7C)",
    "family": "ilc",
    "announced": "2020-09",
    "shipped": "2020-10",
    "discontinued": null,
    "sensor": {
      "type": "BSI-CMOS",
      "mp": 24.2,
      "mono": false,
      "aaFilter": null,
      "note": "a7 III-class 24MP BSI."
    },
    "lens": {
      "focal": 40,
      "aperture": "f/2.5",
      "name": "Sony FE 40mm f/2.5 G (paired)",
      "closeFocusM": 0.28,
      "macroMode": "0.25 m in manual focus.",
      "cropModes": null,
      "note": "Ø68 x 45 mm, 173 g. Same focal length as the Summicron-C.",
      "short": "40mm f/2.5",
      "shortName": "the Sony 40mm f/2.5 G"
    },
    "iso": {
      "base": 100,
      "max": 51200,
      "usable": 6400,
      "ceiling": 25600,
      "note": "Expandable 50-204800. No direct reviewer judgment captured; values are the guide's inference from the a7 III-class sensor."
    },
    "af": {
      "short": "Hybrid PDAF, eye AF",
      "note": "Hybrid phase detect with real-time eye AF."
    },
    "viewfinder": {
      "type": "evf",
      "dots": 2360000,
      "magnification": 0.59,
      "short": "Corner EVF",
      "note": "Corner EVF, 2.36M dots, 0.59x. Small finder."
    },
    "screen": {
      "size": 3,
      "dotsK": 922,
      "touch": true,
      "articulation": "fully articulating",
      "short": "3\" fixed, touch"
    },
    "shutter": {
      "type": "focal-plane",
      "maxMech": "1/4000",
      "electronic": "1/8000",
      "sync": "1/160",
      "note": "Focal-plane shutter, audible. Not a leaf shutter.",
      "short": "Focal-plane, 1/4000"
    },
    "video": {
      "short": "4K/30p, 1080/120p"
    },
    "sealing": {
      "level": "splash",
      "rating": null,
      "note": "Dust and moisture resistant (DPReview)."
    },
    "battery": {
      "model": "NP-FZ100",
      "cipa": 740,
      "note": "740 shots on the LCD. USB charging."
    },
    "storage": {
      "short": "One UHS-II SD slot"
    },
    "body": {
      "w": 124,
      "h": 71.1,
      "d": 59.7,
      "depthWithLens": 100,
      "weight": 509,
      "weightWithLens": 682,
      "note": "Depth as carried is an estimate: about 100-105 mm with the FE 40mm (body depth includes the grip). Coat pocket.",
      "pocket": "Depth as carried is an estimate: about 100-105 mm with the FE 40mm (body depth includes the grip). Coat pocket."
    },
    "reliability": {
      "grade": "A",
      "issues": [
        {
          "title": "No known failure pattern",
          "detail": "Sony still ships firmware: 2.03 listed for 2026-04-15."
        }
      ]
    },
    "firmware": {
      "latest": "2.03",
      "date": "2026-04-15",
      "active": true,
      "note": "Per Sony regional support listings in search results; pages blocked direct fetch."
    },
    "msrp": 1799,
    "role": "Cheapest small full frame with a finder and IBIS",
    "summary": "An a7 III-class 24MP sensor with IBIS and a corner EVF in a rangefinder-shaped body. The battery lasts about 740 shots.",
    "verdict": "Good image quality, well under budget, but with a lens it is over 10 cm deep, so it goes in a coat pocket, not a jacket.",
    "identifiers": [
      "One control dial on top; small 0.59x EVF."
    ],
    "referenceUrl": "https://www.sony-mea.com/en/electronics/support/e-mount-body-ilce-7-series/ilce-7c/downloads",
    "shortName": "a7C",
    "chartLabel": [
      10,
      4,
      "start"
    ],
    "ogLabel": [
      14,
      6,
      "start"
    ],
    "stab": {
      "present": true,
      "stops": 5,
      "note": "5-stop sensor-shift.",
      "short": "5-stop IBIS"
    },
    "image": {
      "src": "img/a7c.jpg",
      "alt": "Sony Alpha 7C (ILCE-7C)",
      "credit": "Henry Söderlund",
      "license": "CC BY 2.0",
      "pageUrl": "https://commons.wikimedia.org/wiki/File:Sony_A7C_with_Sony_FE_28-60mm_F4-5.6_-_by_Henry_S%C3%B6derlund_(50558516523).jpg"
    },
    "prices": {
      "usedLow": 1100,
      "usedTypical": 1210,
      "usedHigh": 1330,
      "note": "Plenty of stock. Not checked at Adorama (blocked).",
      "sources": [
        {
          "retailer": "B&H",
          "price": "$1,100",
          "grade": "grade 8+, black",
          "url": "https://www.bhphotovideo.com/c/product/803500488-USE/sony_ilce7c_b_alpha_a7c_mirrorless_digital.html"
        },
        {
          "retailer": "B&H",
          "price": "$1,285",
          "grade": "grade 9, silver",
          "url": "https://www.bhphotovideo.com/c/product/803536331-USE/sony_ilce7c_s_alpha_a7c_mirrorless_digital.html"
        },
        {
          "retailer": "B&H",
          "price": "$1,330",
          "grade": "grade 9+, silver",
          "url": "https://www.bhphotovideo.com/c/product/803545865-USE/sony_ilce7c_s_alpha_a7c_mirrorless_digital.html"
        },
        {
          "retailer": "KEH",
          "price": "$1,106–$1,210",
          "grade": "black",
          "url": "https://www.keh.com/shop/sony-alpha-a7c-mirrorless-digital-camera-body-black-24-2m-p.html"
        },
        {
          "retailer": "KEH",
          "price": "$1,116–$1,222",
          "grade": "silver",
          "url": "https://www.keh.com/shop/sony-alpha-a7c-mirrorless-digital-camera-body-silver-24-2mp.html"
        }
      ],
      "lensUsed": 670,
      "newPrice": null
    }
  },
  {
    "id": "q2m",
    "kind": "main",
    "maker": "Leica",
    "name": "Q2 Monochrom",
    "family": "q",
    "announced": "2020-11",
    "shipped": "2020-11",
    "discontinued": null,
    "sensor": {
      "type": "CMOS",
      "mp": 47.3,
      "mono": true,
      "aaFilter": null,
      "note": "Monochrome version of the Q2 sensor, no color filter array."
    },
    "lens": {
      "focal": 28,
      "aperture": "f/1.7",
      "name": "Summilux 28mm f/1.7 ASPH",
      "closeFocusM": 0.17,
      "macroMode": "Macro from 17 cm, as Q2.",
      "cropModes": "35/50/75",
      "note": "Crop modes assumed same as Q2; not separately confirmed.",
      "short": "28mm f/1.7"
    },
    "iso": {
      "base": 100,
      "max": 100000,
      "usable": 12500,
      "ceiling": 25000,
      "note": "No reviewer gave a clean-to-print number. A monochrome sensor skips demosaicing and gains about a stop over the color Q2; these figures are the guide's estimate on that basis, not a quote."
    },
    "af": {
      "short": "Contrast",
      "note": "Contrast-detect. Same system as the Q2."
    },
    "viewfinder": {
      "type": "evf",
      "dots": 3690000,
      "magnification": 0.76,
      "short": "Built-in EVF",
      "note": "Built-in OLED EVF, 3.69M dots, 0.76x."
    },
    "screen": {
      "size": 3,
      "dotsK": 1040,
      "touch": true,
      "articulation": "fixed",
      "short": "3\" fixed, touch"
    },
    "shutter": {
      "type": "leaf",
      "maxMech": "1/2000",
      "electronic": "1/40000",
      "sync": "1/500",
      "note": "Leaf shutter, near silent. Sync 1/500 per DPReview spec.",
      "short": "Leaf, to 1/2000"
    },
    "video": {
      "short": "C4K/4K 30p, monochrome"
    },
    "sealing": {
      "level": "ip",
      "rating": "IP52",
      "note": "Sealed per DPReview; rating assumed same as Q2."
    },
    "battery": {
      "model": "BP-SCL4",
      "cipa": 350,
      "note": "No USB charging."
    },
    "storage": {
      "short": "One SD slot (UHS-II)"
    },
    "body": {
      "w": 130,
      "h": 80,
      "d": 91.9,
      "depthWithLens": 91.9,
      "weight": 734,
      "weightWithLens": 734,
      "note": "Weight from DPReview. Dimensions assumed same as Q2; not independently confirmed. Coat pocket at best.",
      "pocket": "Weight from DPReview. Dimensions assumed same as Q2; not independently confirmed. Coat pocket at best."
    },
    "reliability": {
      "grade": "B",
      "issues": [
        {
          "title": "Stuck pixels at high ISO",
          "detail": "Leica acknowledged hot/stuck pixels at ISO 3200-16000 in April 2021 and added user pixel mapping by firmware. Test: cap on, 1/125, step ISO 200 to 12500, look for white dots, then run pixel mapping."
        },
        {
          "title": "Sensor dust",
          "detail": "Same service-only cleaning as the Q2."
        }
      ]
    },
    "firmware": {
      "latest": "5.1.0",
      "date": "2023-12-08",
      "active": false,
      "note": "Shares firmware numbering with the Q2 since 5.0."
    },
    "msrp": 5995,
    "role": "Black-and-white Q2",
    "summary": "The Q2 with a monochrome sensor. Same body, lens, sealing and contrast AF.",
    "verdict": "Only for someone who shoots black and white exclusively, and it is as bulky as the Q2. Run the pixel-mapping test before buying.",
    "identifiers": [
      "No red dot; 'Q2 Monochrom' markings; black chrome finish."
    ],
    "referenceUrl": null,
    "shortName": "Q2 Mono",
    "chartLabel": [
      10,
      -4,
      "start"
    ],
    "ogLabel": [
      14,
      -2,
      "start"
    ],
    "stab": {
      "present": true,
      "stops": null,
      "note": "Optical stabilization in the lens.",
      "short": "Lens OIS"
    },
    "image": {
      "src": "img/q2m.jpg",
      "alt": "Leica Q2 Monochrom",
      "credit": "Peachyeung316",
      "license": "CC BY-SA 4.0",
      "pageUrl": "https://commons.wikimedia.org/wiki/File:Leica_Q2_Monochrom_(white_background).jpg"
    },
    "prices": {
      "usedLow": 3850,
      "usedTypical": 4049,
      "usedHigh": 4730,
      "sources": [
        {
          "retailer": "B&H",
          "price": "$3,850",
          "grade": "grade 8",
          "url": "https://www.bhphotovideo.com/c/product/803378569-USE/leica_4889_q2_monochrom_digital_camera.html"
        },
        {
          "retailer": "B&H",
          "price": "$4,000",
          "grade": "grade 8+",
          "url": "https://www.bhphotovideo.com/c/product/803349447-USE/leica_4889_q2_monochrom_digital_camera.html"
        },
        {
          "retailer": "B&H",
          "price": "$4,350",
          "grade": "grade 9",
          "url": "https://www.bhphotovideo.com/c/product/803480692-USE/leica_4889_q2_monochrom_digital_camera.html"
        },
        {
          "retailer": "KEH",
          "price": "$4,049–$4,501",
          "grade": "across grades",
          "url": "https://www.keh.com/shop/leica-q2-monochrom-digital-camera-black-47-3mp-19055.html"
        },
        {
          "retailer": "Adorama",
          "price": "$4,730",
          "grade": "one copy",
          "url": "https://www.adorama.com/imclcq2m.html"
        }
      ],
      "newPrice": null
    }
  },
  {
    "id": "fpl",
    "kind": "main",
    "maker": "Sigma",
    "name": "fp L",
    "family": "ilc",
    "announced": "2021-03",
    "shipped": "2021-04",
    "discontinued": "2025-06",
    "sensor": {
      "type": "BSI-CMOS",
      "mp": 61,
      "mono": false,
      "aaFilter": null,
      "note": "61MP Bayer BSI."
    },
    "lens": {
      "focal": 45,
      "aperture": "f/2.8",
      "name": "Sigma 45mm f/2.8 DG DN Contemporary (paired)",
      "closeFocusM": 0.24,
      "macroMode": null,
      "cropModes": null,
      "note": "Ø64 x 46.2 mm, 215 g. 61MP also allows a crop-zoom feature (not researched here).",
      "short": "45mm f/2.8",
      "shortName": "the Sigma 45mm f/2.8"
    },
    "iso": {
      "base": 100,
      "max": 25600,
      "usable": 3200,
      "ceiling": 6400,
      "note": "Expandable 6-102400. No direct reviewer ISO judgment captured; values are the guide's inference for a 61MP sensor with no IBIS."
    },
    "af": {
      "short": "Hybrid PDAF",
      "note": "Hybrid phase detect plus contrast. Adds phase detection over the fp."
    },
    "viewfinder": {
      "type": "optional-evf",
      "dots": 3680000,
      "magnification": 0.83,
      "short": "Optional clip-on",
      "note": "Optional EVF-11, 3.68M dots, 0.83x. Sold as a $2,999 kit with the finder."
    },
    "screen": {
      "size": 3.15,
      "dotsK": 2100,
      "touch": true,
      "articulation": "fixed",
      "short": "3.15\" fixed, touch"
    },
    "shutter": {
      "type": "electronic-only",
      "maxMech": null,
      "electronic": "1/8000",
      "sync": "1/15",
      "note": "No mechanical shutter; slower readout than the fp, so flash only to 1/15 and more rolling shutter.",
      "short": "Electronic only"
    },
    "video": {
      "short": "4K/30p, 1080/120p"
    },
    "sealing": {
      "level": "splash",
      "rating": null,
      "note": "DPReview lists it as sealed."
    },
    "battery": {
      "model": "BP-51",
      "cipa": 240,
      "note": "USB charging."
    },
    "storage": {
      "short": "One SD slot (UHS-II); USB SSD recording"
    },
    "body": {
      "w": 112.6,
      "h": 69.9,
      "d": 45.3,
      "depthWithLens": 92,
      "weight": 427,
      "weightWithLens": 642,
      "note": "Estimate as for fp. Jacket pocket without the EVF; the EVF-11 adds bulk at the back.",
      "pocket": "Estimate as for fp. Jacket pocket without the EVF; the EVF-11 adds bulk at the back."
    },
    "reliability": {
      "grade": "B",
      "issues": [
        {
          "title": "Discontinued, firmware frozen",
          "detail": "Discontinued June 2025. Last firmware 3.02 in August 2023."
        },
        {
          "title": "Electronic shutter only",
          "detail": "Design limit, worse readout than the fp."
        }
      ]
    },
    "firmware": {
      "latest": "3.02",
      "date": "2023-08-03",
      "active": false,
      "note": "Sigma firmware page."
    },
    "msrp": 2499,
    "role": "61MP fp with phase detect",
    "summary": "The fp body with a 61MP sensor and phase-detect AF, plus an optional clip-on EVF. Same electronic-only shutter.",
    "verdict": "The highest resolution per cubic centimeter here, but slow readout and no stabilization make 61MP hard to use handheld. A strong option if you shoot slow.",
    "identifiers": [
      "'fp L' on the top plate."
    ],
    "referenceUrl": "https://www.sigma-global.com/en/cameras/fpl/",
    "shortName": "fp L",
    "chartLabel": [
      10,
      4,
      "start"
    ],
    "stab": {
      "present": false,
      "stops": null,
      "note": "None.",
      "short": "None"
    },
    "image": {
      "src": "img/fpl.jpg",
      "alt": "Sigma fp L",
      "credit": "Henry Söderlund",
      "license": "CC BY 2.0",
      "pageUrl": "https://commons.wikimedia.org/wiki/File:Sigma_fp_L_-_front_view_-_by_Henry_S%C3%B6derlund_(51302776756).jpg"
    },
    "prices": {
      "usedLow": 1550,
      "usedTypical": 1775,
      "usedHigh": 2210,
      "note": "B&H's copy includes the EVF-11 viewfinder, which accounts for most of the gap. Not checked at Adorama (blocked).",
      "sources": [
        {
          "retailer": "KEH",
          "price": "$1,550–$1,775",
          "grade": "with HU-11 hot shoe unit",
          "url": "https://www.keh.com/shop/sigma-fp-l-mirrorless-digital-camera-body-black-61mp-with-hu-11-hot-shoe-unit-strap-lugs.html"
        },
        {
          "retailer": "B&H",
          "price": "$2,210",
          "grade": "grade 9, with EVF-11",
          "url": "https://www.bhphotovideo.com/c/product/803486671-USE/sigma_fp_l_mirrorless_camera.html"
        }
      ],
      "lensUsed": 430,
      "newPrice": null
    }
  },
  {
    "id": "q3",
    "kind": "main",
    "maker": "Leica",
    "name": "Q3",
    "family": "q",
    "announced": "2023-05",
    "shipped": "2023-05",
    "discontinued": null,
    "sensor": {
      "type": "BSI-CMOS",
      "mp": 60.3,
      "mono": false,
      "aaFilter": null,
      "note": "Same 60MP class of sensor as the M11 and a7R V (Wikipedia). Triple-resolution DNG (60/36/18MP)."
    },
    "lens": {
      "focal": 28,
      "aperture": "f/1.7",
      "name": "Summilux 28mm f/1.7 ASPH",
      "closeFocusM": 0.17,
      "macroMode": "Macro from 17 cm (DPReview spec).",
      "cropModes": "35/50/75/90",
      "note": "Optically stabilized.",
      "short": "28mm f/1.7"
    },
    "iso": {
      "base": 50,
      "max": 100000,
      "usable": 6400,
      "ceiling": 12500,
      "note": "Photography Blog: noise-free JPEGs to 3200, some noise at 6400, 12500-25000 'still usable', avoid 50000+."
    },
    "af": {
      "short": "Hybrid PDAF",
      "note": "Hybrid phase detect, contrast and depth-from-defocus; face/body detection. Firmware 4.0 (Dec 2025) reworked the UI after the SL3 and improved AF."
    },
    "viewfinder": {
      "type": "evf",
      "dots": 5760000,
      "magnification": 0.79,
      "short": "Built-in EVF",
      "note": "Built-in OLED EVF, 5.76M dots, 0.79x."
    },
    "screen": {
      "size": 3,
      "dotsK": 1843,
      "touch": true,
      "articulation": "tilting",
      "short": "3\" tilting, touch"
    },
    "shutter": {
      "type": "leaf",
      "maxMech": "1/2000",
      "electronic": "1/16000",
      "sync": "1/2000",
      "note": "Leaf shutter, near silent. Flash sync at all mechanical speeds (DPReview).",
      "short": "Leaf, to 1/2000"
    },
    "video": {
      "short": "8K/30p, 4K/60p, 1080/120p"
    },
    "sealing": {
      "level": "ip",
      "rating": "IP52",
      "note": "Sealed per DPReview; IP52 same as the Q3 43."
    },
    "battery": {
      "model": "BP-SCL6",
      "cipa": 350,
      "note": "USB-C charging. Optional HG-DC1 wireless charging grip; owners report it drains the battery when the camera is off."
    },
    "storage": {
      "short": "One SD slot"
    },
    "body": {
      "w": 130,
      "h": 80.3,
      "d": 92.6,
      "depthWithLens": 92.6,
      "weight": 743,
      "weightWithLens": 743,
      "note": "Coat pocket at best. About 250 g heavier than a CL with Summicron-C.",
      "pocket": "Coat pocket at best. About 250 g heavier than a CL with Summicron-C."
    },
    "reliability": {
      "grade": "A",
      "issues": [
        {
          "title": "Early freezing, fixed",
          "detail": "Launch units froze and sometimes would not power off; firmware 1.2 and 1.3 (2023) addressed it."
        },
        {
          "title": "Grip battery drain",
          "detail": "The HG-DC1 grip can drain the battery while the camera is off (l-camera-forum)."
        }
      ]
    },
    "firmware": {
      "latest": "4.1.1",
      "date": "2026-08-06",
      "active": true,
      "note": "Leica Rumors; applies to the Q3 line."
    },
    "msrp": 5995,
    "role": "Current 28mm Q",
    "summary": "The Q body with a 60MP BSI sensor, phase-detect AF, a tilting screen, USB-C charging and IP52 sealing. Still a 28mm f/1.7 Summilux with a leaf shutter.",
    "verdict": "An excellent camera that is neither pocketable nor likely to be $3k used yet. Listed for comparison.",
    "identifiers": [
      "Tilting screen and a 'Q3' engraving distinguish it from the Q2."
    ],
    "referenceUrl": "https://leica-camera.com/en-US/photography/cameras/q/q3-black/technical-specification",
    "shortName": "Q3",
    "chartLabel": [
      10,
      4,
      "start"
    ],
    "ogLabel": [
      14,
      6,
      "start"
    ],
    "stab": {
      "present": true,
      "stops": null,
      "note": "Optical stabilization in the lens.",
      "short": "Lens OIS"
    },
    "image": {
      "src": "img/q3.jpg",
      "alt": "Leica Q3",
      "credit": "Burkhard Mücke",
      "license": "CC BY 4.0",
      "pageUrl": "https://commons.wikimedia.org/wiki/File:Leica_Q3_Package_13.jpg"
    },
    "prices": {
      "usedLow": 5399,
      "usedTypical": 6200,
      "usedHigh": 7350,
      "note": "Adorama listed used Q3s from $5,399 before it stopped serving pages to the browser; the per-grade detail was not read.",
      "sources": [
        {
          "retailer": "B&H",
          "price": "$6,100",
          "grade": "grade 8+",
          "url": "https://www.bhphotovideo.com/c/product/803437230-USE/leica_19080_q3_digital_camera.html"
        },
        {
          "retailer": "B&H",
          "price": "$6,200",
          "grade": "grade 9",
          "url": "https://www.bhphotovideo.com/c/product/803553731-USE/leica_19080_q3_digital_camera_black.html"
        },
        {
          "retailer": "B&H",
          "price": "$6,500",
          "grade": "grade 9+",
          "url": "https://www.bhphotovideo.com/c/product/803522427-USE/leica_19080_q3_digital_camera_black.html"
        },
        {
          "retailer": "KEH",
          "price": "$5,972–$7,350",
          "grade": "black",
          "url": "https://www.keh.com/shop/28314738.html"
        },
        {
          "retailer": "Adorama",
          "price": "from $5,399",
          "grade": "search listing",
          "url": "https://www.adorama.com/imclcq3.html"
        }
      ],
      "newPrice": null
    }
  },
  {
    "id": "a7c2",
    "kind": "main",
    "maker": "Sony",
    "name": "Alpha 7C II (ILCE-7CM2)",
    "family": "ilc",
    "announced": "2023-08",
    "shipped": "2023-08",
    "discontinued": null,
    "sensor": {
      "type": "BSI-CMOS",
      "mp": 33,
      "mono": false,
      "aaFilter": null,
      "note": "33MP BSI (PetaPixel launch coverage)."
    },
    "lens": {
      "focal": 40,
      "aperture": "f/2.5",
      "name": "Sony FE 40mm f/2.5 G (paired)",
      "closeFocusM": 0.28,
      "macroMode": "0.25 m in manual focus.",
      "cropModes": null,
      "note": "Ø68 x 45 mm, 173 g.",
      "short": "40mm f/2.5",
      "shortName": "the Sony 40mm f/2.5 G"
    },
    "iso": {
      "base": 100,
      "max": null,
      "usable": 6400,
      "ceiling": 12800,
      "note": "DPReview: 'just a bit noisier than other cameras in its class', noise 'well-controlled'."
    },
    "af": {
      "short": "PDAF, subject AI",
      "note": "Phase detect with AI subject recognition. Recognizes people, animals, birds, insects, vehicles and aircraft (DPReview)."
    },
    "viewfinder": {
      "type": "evf",
      "dots": 2360000,
      "magnification": 0.7,
      "short": "Corner EVF",
      "note": "Corner EVF, 2.36M dots, 0.7x. DPReview: resolution 'feels too low'."
    },
    "screen": {
      "size": 3,
      "dotsK": 1040,
      "touch": true,
      "articulation": "fully articulating",
      "short": "3\" fixed, touch"
    },
    "shutter": {
      "type": "focal-plane",
      "maxMech": "1/4000",
      "electronic": null,
      "sync": null,
      "note": "Focal-plane with electronic first curtain. DPReview notes heavy rolling shutter in e-shutter mode.",
      "short": "Focal-plane, 1/4000"
    },
    "video": {
      "short": "4K/60p with 1.5x crop"
    },
    "sealing": {
      "level": "splash",
      "rating": null,
      "note": "Dust and moisture resistant (DPReview)."
    },
    "battery": {
      "model": "NP-FZ100",
      "cipa": 540,
      "note": "About 510-540 shots CIPA; DPReview says about 25 percent less than the a7C. USB-C charging."
    },
    "storage": {
      "short": "One UHS-II SD slot"
    },
    "body": {
      "w": 124,
      "h": 71.1,
      "d": 63.4,
      "depthWithLens": 104,
      "weight": 514,
      "weightWithLens": 687,
      "note": "Depth as carried is an estimate with the FE 40mm. Coat pocket.",
      "pocket": "Depth as carried is an estimate with the FE 40mm. Coat pocket."
    },
    "reliability": {
      "grade": "A",
      "issues": [
        {
          "title": "Battery-warning bug, fixed",
          "detail": "Firmware 2.01 fixed a false 'battery exhausted' warning and a power-on failure after USB streaming."
        }
      ]
    },
    "firmware": {
      "latest": "2.01",
      "date": "2025-11",
      "active": true,
      "note": "Sony Addict, 2025-11-18."
    },
    "msrp": 2199,
    "role": "Current small Sony all-rounder",
    "summary": "The a7C body with a 33MP sensor, better AF, 7-stop IBIS, a bigger finder and a second dial.",
    "verdict": "A better camera than any RX1, but the lens makes it a coat-pocket kit. Pick it if you want AF and stabilization more than pocketability.",
    "identifiers": [
      "Front and rear dials; 'II' on the body."
    ],
    "referenceUrl": "https://www.sony.com.sg/pressrelease?prName=sony-releases-two-new-alpha-7c-series-cameras",
    "shortName": "a7C II",
    "chartLabel": [
      10,
      4,
      "start"
    ],
    "ogLabel": [
      14,
      6,
      "start"
    ],
    "stab": {
      "present": true,
      "stops": 7,
      "note": "7 stops (DPReview).",
      "short": "7-stop IBIS"
    },
    "image": {
      "src": "img/a7c2.jpg",
      "alt": "Sony Alpha 7C II (ILCE-7CM2)",
      "credit": "Henry Söderlund",
      "license": "CC BY 2.0",
      "pageUrl": "https://commons.wikimedia.org/wiki/File:Sony_A7C_II_by_Henry_S%C3%B6derlund.jpg"
    },
    "prices": {
      "usedLow": 1829,
      "usedTypical": 2198,
      "usedHigh": 2273,
      "note": "Not checked at Adorama (blocked).",
      "sources": [
        {
          "retailer": "KEH",
          "price": "$1,829–$1,951",
          "grade": "silver",
          "url": "https://www.keh.com/shop/28423756.html"
        },
        {
          "retailer": "KEH",
          "price": "$1,906–$1,984",
          "grade": "black",
          "url": "https://www.keh.com/shop/28477066.html"
        },
        {
          "retailer": "B&H",
          "price": "$2,198",
          "grade": "grade 9",
          "url": "https://www.bhphotovideo.com/c/product/803524438-USE/sony_ilce7cm2_b_alpha_7c_ii_mirrorless.html"
        },
        {
          "retailer": "B&H",
          "price": "$2,273",
          "grade": "grade 10",
          "url": "https://www.bhphotovideo.com/c/product/803538156-USE/sony_ilce7cm2_b_alpha_7c_ii_mirrorless.html"
        }
      ],
      "lensUsed": 670,
      "newPrice": null
    }
  },
  {
    "id": "a7cr",
    "kind": "main",
    "maker": "Sony",
    "name": "Alpha 7CR (ILCE-7CR)",
    "family": "ilc",
    "announced": "2023-08",
    "shipped": "2023-08",
    "discontinued": null,
    "sensor": {
      "type": "BSI-CMOS",
      "mp": 61,
      "mono": false,
      "aaFilter": null,
      "note": "Same 60MP-class sensor as the a7R V, RX1R III and Leica Q3."
    },
    "lens": {
      "focal": 40,
      "aperture": "f/2.5",
      "name": "Sony FE 40mm f/2.5 G (paired)",
      "closeFocusM": 0.28,
      "macroMode": "0.25 m in manual focus.",
      "cropModes": null,
      "note": "Ø68 x 45 mm, 173 g.",
      "short": "40mm f/2.5",
      "shortName": "the Sony 40mm f/2.5 G"
    },
    "iso": {
      "base": 100,
      "max": null,
      "usable": 6400,
      "ceiling": 12800,
      "note": "No direct reviewer ISO judgment captured; values are the guide's inference from the a7R V sensor."
    },
    "af": {
      "short": "PDAF, subject AI",
      "note": "Phase detect with AI subject recognition. Same AF generation as the a7C II."
    },
    "viewfinder": {
      "type": "evf",
      "dots": 2360000,
      "magnification": 0.7,
      "short": "Corner EVF",
      "note": "Corner EVF, 2.36M dots, 0.7x. DPReview: 'downright rudimentary' next to the a7R V."
    },
    "screen": {
      "size": 3,
      "dotsK": 1040,
      "touch": true,
      "articulation": "fully articulating",
      "short": "3\" fixed, touch"
    },
    "shutter": {
      "type": "focal-plane",
      "maxMech": "1/4000",
      "electronic": null,
      "sync": null,
      "note": "Focal-plane shutter, audible.",
      "short": "Focal-plane, 1/4000"
    },
    "video": {
      "short": "4K video"
    },
    "sealing": {
      "level": "splash",
      "rating": null,
      "note": "Dust and moisture resistant."
    },
    "battery": {
      "model": "NP-FZ100",
      "cipa": 530,
      "note": "530 on the LCD, about 490 with the EVF. DPReview says battery life impresses. USB-C charging."
    },
    "storage": {
      "short": "One UHS-II SD slot"
    },
    "body": {
      "w": 124,
      "h": 71.1,
      "d": 63.4,
      "depthWithLens": 104,
      "weight": 515,
      "weightWithLens": 688,
      "note": "Depth as carried is an estimate with the FE 40mm. Coat pocket.",
      "pocket": "Depth as carried is an estimate with the FE 40mm. Coat pocket."
    },
    "reliability": {
      "grade": "A",
      "issues": [
        {
          "title": "Battery-warning bug, fixed",
          "detail": "Firmware 2.01 fixed the same issues as on the a7C II."
        }
      ]
    },
    "firmware": {
      "latest": "2.01",
      "date": "2025-11",
      "active": true,
      "note": "Sony Addict, 2025-11-18."
    },
    "msrp": 2999,
    "role": "61MP in the a7C body",
    "summary": "The a7C II body with the 61MP a7R V sensor, 7-stop IBIS and the same small 0.7x finder.",
    "verdict": "Same sensor as the RX1R III and Q3 for less money used, with IBIS. But it is a coat-pocket camera with a lens on.",
    "identifiers": [
      "'7CR' badge on the body."
    ],
    "referenceUrl": "https://www.sony.com.sg/pressrelease?prName=sony-releases-two-new-alpha-7c-series-cameras",
    "shortName": "a7CR",
    "chartLabel": [
      10,
      4,
      "start"
    ],
    "stab": {
      "present": true,
      "stops": 7,
      "note": "7 stops (DPReview).",
      "short": "7-stop IBIS"
    },
    "image": {
      "src": "img/a7cr.jpg",
      "alt": "Sony Alpha 7CR (ILCE-7CR)",
      "credit": "Henry Söderlund",
      "license": "CC BY 2.0",
      "pageUrl": "https://commons.wikimedia.org/wiki/File:Sony_A7CR_by_Henry_S%C3%B6derlund.jpg"
    },
    "prices": {
      "usedLow": 2378,
      "usedTypical": 2786,
      "usedHigh": 3398,
      "note": "Not checked at Adorama (blocked).",
      "sources": [
        {
          "retailer": "KEH",
          "price": "$2,378–$2,518",
          "grade": "silver",
          "url": "https://www.keh.com/shop/28481018.html"
        },
        {
          "retailer": "KEH",
          "price": "$2,549–$3,398",
          "grade": "black",
          "url": "https://www.keh.com/shop/28423789.html"
        },
        {
          "retailer": "B&H",
          "price": "$2,786",
          "grade": "grade 9, black",
          "url": "https://www.bhphotovideo.com/c/product/803548309-USE/sony_ilce7cr_b_alpha_7cr_mirrorless.html"
        },
        {
          "retailer": "B&H",
          "price": "$2,922",
          "grade": "grade 9+, silver",
          "url": "https://www.bhphotovideo.com/c/product/803517347-USE/sony_ilce7cr_s_alpha_7cr_mirrorless.html"
        }
      ],
      "lensUsed": 670,
      "newPrice": null
    }
  },
  {
    "id": "s9",
    "kind": "main",
    "maker": "Panasonic",
    "name": "Lumix DC-S9",
    "family": "ilc",
    "announced": "2024-05",
    "shipped": "2024-06",
    "discontinued": null,
    "sensor": {
      "type": "BSI-CMOS",
      "mp": 24.2,
      "mono": false,
      "aaFilter": null,
      "note": "24.2MP, made by Sony Semiconductor (Wikipedia)."
    },
    "lens": {
      "focal": 45,
      "aperture": "f/2.8",
      "name": "Sigma 45mm f/2.8 DG DN Contemporary (paired)",
      "closeFocusM": 0.24,
      "macroMode": null,
      "cropModes": null,
      "note": "Ø64 x 46.2 mm, 215 g. Panasonic options: Lumix S 26mm f/8 pancake (18.1 mm, 58 g, manual focus, $199) and the Lumix S 20mm f/2.5 announced 2026-09-16 (69 x 40.9 mm, 142 g, $499, pitched as made for the S9).",
      "short": "45mm f/2.8",
      "shortName": "the Sigma 45mm f/2.8"
    },
    "iso": {
      "base": null,
      "max": null,
      "usable": 6400,
      "ceiling": 12800,
      "note": "ISO range not captured. DPReview: noise reduction keeps 'all but the finest details' at moderately high ISO. Usable values are the guide's inference."
    },
    "af": {
      "short": "PDAF, subject AI",
      "note": "779-point phase detect with subject detection. DPReview lists poor AF tracking as a con."
    },
    "viewfinder": {
      "type": "none",
      "dots": null,
      "magnification": null,
      "short": "None",
      "note": "None. DPReview: screen washes out outdoors."
    },
    "screen": {
      "size": 3,
      "dotsK": 1840,
      "touch": true,
      "articulation": "fully articulating",
      "short": "3\" fixed, touch"
    },
    "shutter": {
      "type": "electronic-only",
      "maxMech": null,
      "electronic": "1/8000",
      "sync": null,
      "note": "No mechanical shutter, no flash support. Cold shoe has no contacts (Wikipedia). DPReview: 'mediocre rolling shutter'.",
      "short": "Electronic only"
    },
    "video": {
      "short": "Video-first body; LUT workflow through the Lumix Lab app"
    },
    "sealing": {
      "level": "unknown",
      "rating": null,
      "note": "Not stated in sources read."
    },
    "battery": {
      "model": "DMW-BLK22",
      "cipa": 470,
      "note": "USB-C charging."
    },
    "storage": {
      "short": "One UHS-II SD slot"
    },
    "body": {
      "w": 126,
      "h": 73.9,
      "d": 46.7,
      "depthWithLens": 93,
      "weight": 486,
      "weightWithLens": 701,
      "note": "Depth as carried is an estimate with the Sigma 45. About 65 mm with the 26mm f/8, about 88 mm with the 20mm f/2.5. Jacket pocket with the pancake.",
      "pocket": "Depth as carried is an estimate with the Sigma 45. About 65 mm with the 26mm f/8, about 88 mm with the 20mm f/2.5. Jacket pocket with the pancake."
    },
    "reliability": {
      "grade": "A",
      "issues": [
        {
          "title": "No known failure pattern",
          "detail": "Current model with active firmware. The missing EVF, mechanical shutter and hot shoe are design choices."
        }
      ]
    },
    "firmware": {
      "latest": "2.1",
      "date": "2026-10-13",
      "active": true,
      "note": "Announced 2026-09-16 for release 2026-10-13 (PetaPixel). The previous update shipped 2026-06-16; its version number was not captured."
    },
    "msrp": 1499,
    "role": "Stabilized, finderless, cheap",
    "summary": "A 24MP full frame with IBIS and phase-detect AF in a body with no finder, no mechanical shutter and no hot shoe. Panasonic built it for phone-style creators.",
    "verdict": "The only small body here with stabilization. DPReview warns photographers will be disappointed by the controls, but with a pancake it is the cheapest way to a pocketable full frame.",
    "identifiers": [
      "Sold in several colors; no EVF hump, no hot shoe contacts."
    ],
    "referenceUrl": null,
    "shortName": "S9",
    "chartLabel": [
      10,
      6,
      "start"
    ],
    "ogLabel": [
      14,
      8,
      "start"
    ],
    "stab": {
      "present": true,
      "stops": 5,
      "note": "5 stops body, 6.5 with Dual IS lenses.",
      "short": "5-stop IBIS"
    },
    "image": {
      "src": "img/s9.jpg",
      "alt": "Panasonic Lumix DC-S9",
      "credit": "TTTNIS",
      "license": "CC0 1.0",
      "pageUrl": "https://commons.wikimedia.org/wiki/File:Panasonic_Lumix_DC-S9N-N_01.jpg"
    },
    "prices": {
      "usedLow": 1066,
      "usedTypical": 1115,
      "usedHigh": 1182,
      "note": "Body only. B&H had kits with the 18-40mm zoom at $1,358 and $1,528.",
      "sources": [
        {
          "retailer": "KEH",
          "price": "$1,099",
          "grade": "night blue",
          "url": "https://www.keh.com/shop/28899387.html"
        },
        {
          "retailer": "KEH",
          "price": "$1,115",
          "grade": "jet black",
          "url": "https://www.keh.com/shop/28797358.html"
        },
        {
          "retailer": "KEH",
          "price": "$1,164–$1,182",
          "grade": "dark olive",
          "url": "https://www.keh.com/shop/28864924.html"
        },
        {
          "retailer": "Adorama",
          "price": "$1,066",
          "grade": "pink",
          "url": "https://www.adorama.com/imcpcs9p.html"
        },
        {
          "retailer": "Adorama",
          "price": "$1,089",
          "grade": "jet black",
          "url": "https://www.adorama.com/imcpcs9bk.html"
        },
        {
          "retailer": "B&H",
          "price": "$1,358",
          "grade": "grade 9+, with 18-40mm",
          "url": "https://www.bhphotovideo.com/c/product/803549968-USE/panasonic_lumix_s9_mirrorless_camera.html"
        }
      ],
      "lensUsed": 430,
      "newPrice": null
    }
  },
  {
    "id": "q343",
    "kind": "main",
    "maker": "Leica",
    "name": "Q3 43",
    "family": "q",
    "announced": "2024-09",
    "shipped": "2024-09",
    "discontinued": null,
    "sensor": {
      "type": "BSI-CMOS",
      "mp": 60.3,
      "mono": false,
      "aaFilter": null,
      "note": "Same sensor as the Q3."
    },
    "lens": {
      "focal": 43,
      "aperture": "f/2",
      "name": "APO-Summicron 43mm f/2 ASPH",
      "closeFocusM": 0.265,
      "macroMode": "0.6 m normally; macro to about 26.5-27 cm (Photography Blog, DPReview).",
      "cropModes": "60/75/90/120/150",
      "note": "Optically stabilized (Photography Blog, Cameralabs: four to five stops in practice). DPReview: 'very, very sharp' wide open.",
      "short": "43mm f/2"
    },
    "iso": {
      "base": 50,
      "max": 100000,
      "usable": 6400,
      "ceiling": 12500,
      "note": "Photography Blog: noise-free to 3200, noise from 6400, 12500-25000 usable."
    },
    "af": {
      "short": "Hybrid PDAF",
      "note": "Hybrid phase detect with subject detection. DPReview: 'swift and responsive'; detection modes cannot start from a chosen AF point."
    },
    "viewfinder": {
      "type": "evf",
      "dots": 5760000,
      "magnification": 0.79,
      "short": "Built-in EVF",
      "note": "Built-in OLED EVF, 5.76M dots, 0.79x."
    },
    "screen": {
      "size": 3,
      "dotsK": 1843,
      "touch": true,
      "articulation": "tilting",
      "short": "3\" tilting, touch"
    },
    "shutter": {
      "type": "leaf",
      "maxMech": "1/2000",
      "electronic": "1/16000",
      "sync": "1/2000",
      "note": "Leaf shutter, near silent.",
      "short": "Leaf, to 1/2000"
    },
    "video": {
      "short": "8K/30p, 4K/60p, ProRes 422 HQ to 1080/60"
    },
    "sealing": {
      "level": "ip",
      "rating": "IP52",
      "note": "DPReview."
    },
    "battery": {
      "model": "BP-SCL6",
      "cipa": 350,
      "note": "USB-C charging."
    },
    "storage": {
      "short": "One SD slot"
    },
    "body": {
      "w": 130,
      "h": 80.3,
      "d": 97.6,
      "depthWithLens": 97.6,
      "weight": 772,
      "weightWithLens": 772,
      "note": "Photography Blog. Cameralabs measured 795 g with cap and hood. Coat pocket at best.",
      "pocket": "Photography Blog. Cameralabs measured 795 g with cap and hood. Coat pocket at best."
    },
    "reliability": {
      "grade": "A",
      "issues": [
        {
          "title": "No known failure pattern",
          "detail": "Current model, shares Q3 firmware."
        }
      ]
    },
    "firmware": {
      "latest": "4.1.1",
      "date": "2026-08-06",
      "active": true,
      "note": "Leica Rumors."
    },
    "msrp": 6895,
    "role": "Q3 with a 43mm APO",
    "summary": "The Q3 with a stabilized 43mm f/2 APO-Summicron instead of the 28mm. Closest Q to the CL's 40mm view.",
    "verdict": "The focal length Drew knows from the Summicron-C, but in a 772 g body nearly 10 cm deep. Far over budget used.",
    "identifiers": [
      "Longer lens barrel with '43' and APO markings."
    ],
    "referenceUrl": "https://leica-camera.com/en-US/photography/cameras/q/q3-43-black/technical-specification",
    "shortName": "Q3 43",
    "chartLabel": [
      10,
      4,
      "start"
    ],
    "stab": {
      "present": true,
      "stops": 4,
      "note": "Optical stabilization in the lens; Cameralabs measured four to five stops.",
      "short": "Lens OIS"
    },
    "image": {
      "src": "img/q343.jpg",
      "alt": "Leica Q3 43",
      "credit": "Sergiy Galyonkin",
      "license": "CC BY-SA 2.0",
      "pageUrl": "https://www.flickr.com/photos/sergesegal/54078184589/"
    },
    "prices": {
      "usedLow": 6678,
      "usedTypical": 6820,
      "usedHigh": 7950,
      "sources": [
        {
          "retailer": "B&H",
          "price": "$6,678",
          "grade": "grade 8+",
          "url": "https://www.bhphotovideo.com/c/product/803504176-USE/leica_19084_q3_43_digital_camera.html"
        },
        {
          "retailer": "B&H",
          "price": "$6,820",
          "grade": "grade 9",
          "url": "https://www.bhphotovideo.com/c/product/803498564-USE/leica_19084_q3_43_digital_camera.html"
        },
        {
          "retailer": "B&H",
          "price": "$7,314",
          "grade": "grade 10",
          "url": "https://www.bhphotovideo.com/c/product/803557799-USE/leica_19084_q3_43_digital_camera.html"
        },
        {
          "retailer": "KEH",
          "price": "$6,805–$7,950",
          "grade": "across grades",
          "url": "https://www.keh.com/shop/28790404.html"
        },
        {
          "retailer": "Adorama",
          "price": "from $6,799",
          "grade": "search listing",
          "url": "https://www.adorama.com/imclcq343.html"
        }
      ],
      "newPrice": null
    }
  },
  {
    "id": "gfx100rf",
    "kind": "referenceOnly",
    "maker": "Fujifilm",
    "name": "GFX100RF",
    "family": "gfx",
    "announced": "2025-03",
    "shipped": "2025-04",
    "discontinued": null,
    "sensor": {
      "type": "CMOS",
      "mp": 102,
      "mono": false,
      "aaFilter": null,
      "note": "102MP GFX CMOS II HS, 44 x 33 mm medium format, about 1.7x the area of full frame. Not full frame."
    },
    "lens": {
      "focal": 35,
      "aperture": "f/4",
      "name": "Fujinon 35mm f/4 (28mm equivalent)",
      "closeFocusM": 0.2,
      "macroMode": null,
      "cropModes": "36/50/63 (equiv.)",
      "note": "Digital teleconverter to 45/63/80mm (36/50/63mm equiv.), aspect-ratio dial including 3:4 and 17:6. Built-in 4-stop ND.",
      "short": "35mm f/4 (28 eq.)"
    },
    "iso": {
      "base": null,
      "max": null,
      "usable": 12800,
      "ceiling": 25600,
      "note": "ISO range not captured. DPReview: high-ISO noise 'follows sensor-size expectations'. Usable values are the guide's inference."
    },
    "af": {
      "short": "PDAF, subject AI",
      "note": "Phase detect with subject recognition. DPReview: 'generally reliable' for street and portraits; tracking sometimes loses fast subjects."
    },
    "viewfinder": {
      "type": "evf",
      "dots": 5760000,
      "magnification": 0.84,
      "short": "Built-in EVF",
      "note": "Built-in OLED EVF, 5.76M dots, 0.84x."
    },
    "screen": {
      "size": 3.15,
      "dotsK": 2100,
      "touch": true,
      "articulation": "tilting",
      "short": "3.15\" tilting, touch"
    },
    "shutter": {
      "type": "leaf",
      "maxMech": "1/4000",
      "electronic": null,
      "sync": "1/4000",
      "note": "Leaf shutter, near silent, syncs at all mechanical speeds.",
      "short": "Leaf, to 1/4000"
    },
    "video": {
      "short": "4K/30p 10-bit 4:2:2, F-Log2"
    },
    "sealing": {
      "level": "splash",
      "rating": null,
      "note": "Dust and drip resistant only with the included adapter ring and a PRF-49 filter."
    },
    "battery": {
      "model": "NP-W235",
      "cipa": 820,
      "note": "Best in this list. USB-C."
    },
    "storage": {
      "short": "Two UHS-II SD slots"
    },
    "body": {
      "w": 133.5,
      "h": 90.4,
      "d": 76.5,
      "depthWithLens": 76.5,
      "weight": 735,
      "weightWithLens": 735,
      "note": "735 g with battery and card (Fujifilm). The square hood adds bulk (DPReview). Coat pocket at best.",
      "pocket": "735 g with battery and card (Fujifilm). The square hood adds bulk (DPReview). Coat pocket at best."
    },
    "reliability": {
      "grade": "A",
      "issues": [
        {
          "title": "No known failure pattern",
          "detail": "Current model with active firmware."
        }
      ]
    },
    "firmware": {
      "latest": "1.12",
      "date": "2026-04-02",
      "active": true,
      "note": "Fuji Addict. A 1.13 update (2026-06-30) is for the Fragment Edition only."
    },
    "msrp": 4900,
    "role": "Medium format reference",
    "summary": "A 102MP medium-format sensor behind a 28mm-equivalent f/4 leaf-shutter lens, with an 820-shot battery and dual card slots. Announced March 20, 2025 at $4,899.95.",
    "verdict": "Over budget and not full frame. Its 77 mm depth is close to the RX1R III, but at 735 g it is a much heavier camera.",
    "identifiers": [
      "Aspect-ratio dial on the top plate, square lens hood."
    ],
    "referenceUrl": "https://www.fujifilm-x.com/en-us/products/cameras/gfx100rf/",
    "shortName": "GFX100RF",
    "chartLabel": [
      -10,
      4,
      "end"
    ],
    "ogLabel": [
      -14,
      6,
      "end"
    ],
    "stab": {
      "present": false,
      "stops": null,
      "note": "No IBIS or OIS; DPReview flags this for low light.",
      "short": "None"
    },
    "image": {
      "src": "img/gfx100rf.jpg",
      "alt": "Fujifilm GFX100RF",
      "credit": "昼落ち",
      "license": "CC0 1.0",
      "pageUrl": "https://commons.wikimedia.org/wiki/File:Fujifilm_GFX100RF_25_oct_2025a.jpg"
    },
    "prices": {
      "usedLow": 4579,
      "usedTypical": 4870,
      "usedHigh": 5599,
      "note": "Not checked at Adorama (blocked).",
      "sources": [
        {
          "retailer": "KEH",
          "price": "$4,579–$5,599",
          "grade": "black",
          "url": "https://www.keh.com/shop/fujifilm-gfx-100rf-medium-format-mirrorless-camera-with-35mm-f-4-fixed-lens-black-102mp.html"
        },
        {
          "retailer": "B&H",
          "price": "$4,703",
          "grade": "grade 9, silver",
          "url": "https://www.bhphotovideo.com/c/product/803552446-USE/fujifilm_gfx100rf_digital_camera.html"
        },
        {
          "retailer": "B&H",
          "price": "$4,870",
          "grade": "grade 9+, black",
          "url": "https://www.bhphotovideo.com/c/product/803553076-USE/fujifilm_gfx100rf_digital_camera.html"
        }
      ],
      "newPrice": null
    }
  },
  {
    "id": "bf",
    "kind": "main",
    "maker": "Sigma",
    "name": "BF",
    "family": "ilc",
    "announced": "2025-02",
    "shipped": "2025-04",
    "discontinued": null,
    "sensor": {
      "type": "BSI-CMOS",
      "mp": 24.6,
      "mono": false,
      "aaFilter": null,
      "note": "24.6MP BSI; base ISO 320 for stills (Sigma)."
    },
    "lens": {
      "focal": 45,
      "aperture": "f/2.8",
      "name": "Sigma 45mm f/2.8 DG DN Contemporary (paired)",
      "closeFocusM": 0.24,
      "macroMode": null,
      "cropModes": null,
      "note": "Ø64 x 46.2 mm, 215 g.",
      "short": "45mm f/2.8",
      "shortName": "the Sigma 45mm f/2.8"
    },
    "iso": {
      "base": 320,
      "max": 102400,
      "usable": 6400,
      "ceiling": 12800,
      "note": "Range 100-102400, expandable to 6. DPReview: Auto ISO favors 400 for its HDR, which adds shadow noise. Usable values are the guide's inference."
    },
    "af": {
      "short": "Hybrid PDAF",
      "note": "Hybrid phase detect with human and animal tracking. DPReview: 'very simple' but effective; PetaPixel: tracking 'impressively tenacious'."
    },
    "viewfinder": {
      "type": "none",
      "dots": null,
      "magnification": null,
      "short": "None",
      "note": "None. DPReview lists no finder as a con in bright light."
    },
    "screen": {
      "size": 3.15,
      "dotsK": 2100,
      "touch": true,
      "articulation": "fixed",
      "short": "3.15\" fixed, touch"
    },
    "shutter": {
      "type": "electronic-only",
      "maxMech": null,
      "electronic": "1/25600",
      "sync": null,
      "note": "No mechanical shutter. 24.8 ms readout (about 1/40); DPReview warns of rolling shutter and banding. PetaPixel: effectively no flash.",
      "short": "Electronic only"
    },
    "video": {
      "short": "6K/30p, L-Log"
    },
    "sealing": {
      "level": "splash",
      "rating": null,
      "note": "Sigma: dust and splash resistant structure, for light rain."
    },
    "battery": {
      "model": "BP-81",
      "cipa": 260,
      "note": "DPReview suggests a power bank for heavy days."
    },
    "storage": {
      "short": "230 GB internal only, no card slot; 10 Gbps USB-C"
    },
    "body": {
      "w": 130.1,
      "h": 72.8,
      "d": 36.8,
      "depthWithLens": 83,
      "weight": 446,
      "weightWithLens": 661,
      "note": "Depth as carried is an estimate: body plus lens. The thinnest body here. DPReview notes sharp body edges. Jacket pocket.",
      "pocket": "Depth as carried is an estimate: body plus lens. The thinnest body here. DPReview notes sharp body edges. Jacket pocket."
    },
    "reliability": {
      "grade": "A",
      "issues": [
        {
          "title": "Firmware 1.02 was pulled",
          "detail": "Sigma halted 1.02 on 2025-11-05 and replaced it with 1.03 on 2025-11-11 for an undisclosed issue. Make sure a used body is on 1.03 or later."
        },
        {
          "title": "Internal storage",
          "detail": "No card to swap if the storage fails; unknown long-term. Not a reported problem."
        }
      ]
    },
    "firmware": {
      "latest": "1.04",
      "date": "2026-02-19",
      "active": true,
      "note": "Sigma firmware page."
    },
    "msrp": 1999,
    "role": "The minimalist successor to the fp",
    "summary": "A 24.6MP full frame cut from one aluminum block, with three buttons, a dial, phase-detect AF and 230 GB of internal storage. No finder, no mechanical shutter, no card slot.",
    "verdict": "The most CL-like object in spirit: small, simple, and slightly stubborn. With the 45mm it is about 83 mm deep, so the lens is what decides the pocket.",
    "identifiers": [
      "Seamless aluminum unibody, black or silver."
    ],
    "referenceUrl": "https://www.sigma-global.com/en/cameras/bf/",
    "shortName": "BF",
    "chartLabel": [
      -10,
      -6,
      "end"
    ],
    "ogLabel": [
      -14,
      -8,
      "end"
    ],
    "stab": {
      "present": false,
      "stops": null,
      "note": "Electronic stabilization for video only.",
      "short": "None (video EIS)"
    },
    "image": {
      "src": "img/bf.jpg",
      "alt": "Sigma BF",
      "credit": "昼落ち",
      "license": "CC0 1.0",
      "pageUrl": "https://commons.wikimedia.org/wiki/File:Sigma_BF_11_may_2025a.jpg"
    },
    "prices": {
      "usedLow": 1757,
      "usedTypical": 1790,
      "usedHigh": 1827,
      "note": "Only KEH had one. Not checked at Adorama (blocked).",
      "sources": [
        {
          "retailer": "KEH",
          "price": "$1,757–$1,827",
          "grade": "silver, 3 in stock",
          "url": "https://www.keh.com/shop/sigma-bf-mirrorless-camera-silver-24-6mp.html"
        }
      ],
      "lensUsed": 430,
      "newPrice": null
    }
  },
  {
    "id": "rx1r3",
    "kind": "main",
    "maker": "Sony",
    "name": "DSC-RX1R III",
    "family": "rx1",
    "announced": "2025-07",
    "shipped": "2025-07",
    "discontinued": null,
    "sensor": {
      "type": "BSI-CMOS",
      "mp": 60.2,
      "mono": false,
      "aaFilter": null,
      "note": "Same 60MP sensor as the a7R V, a7CR and Leica Q3 (DPReview). AA filter status not confirmed in sources read."
    },
    "lens": {
      "focal": 35,
      "aperture": "f/2",
      "name": "Zeiss Sonnar T* 35mm f/2",
      "closeFocusM": 0.2,
      "macroMode": "Macro ring to 20 cm, 0.26x (Sony, via Alpha Shooters).",
      "cropModes": "50/70",
      "note": "DPReview: 'a touch soft at wide apertures' at 60MP, full resolution when stopped down. Crops are 29MP and 15MP; Raw keeps the full frame.",
      "short": "35mm f/2"
    },
    "iso": {
      "base": 100,
      "max": 32000,
      "usable": 6400,
      "ceiling": 12800,
      "note": "Native 100-32000, expandable to about 50-102400. DPReview: noise is 'comparable' to its predecessors. Usable values are the guide's reading of that plus the shared a7CR sensor."
    },
    "af": {
      "short": "PDAF, subject AI",
      "note": "693-point phase detect with AI subject recognition. Bionz XR plus AI processing unit. DPReview says Sony 'addressed the focus and battery life concerns' of the Mark II."
    },
    "viewfinder": {
      "type": "evf",
      "dots": 2359000,
      "magnification": 0.7,
      "short": "Built-in EVF",
      "note": "Fixed built-in OLED EVF, 2.36M dots, 0.7x. No longer a pop-up. Reviewers call the resolution low for the price."
    },
    "screen": {
      "size": 3,
      "dotsK": 2359,
      "touch": true,
      "articulation": "fixed",
      "short": "3\" fixed, touch"
    },
    "shutter": {
      "type": "leaf",
      "maxMech": "1/2000 at f/2, 1/3200 at f/4, 1/4000 from f/5.6",
      "electronic": "1/8000 at any aperture",
      "sync": "1/2000 at f/2 (leaf)",
      "note": "Leaf shutter, near silent. DPReview spec page lists sync to 1/4000; that is only reachable stopped down.",
      "short": "Leaf, 1/2000 at f/2"
    },
    "video": {
      "short": "4K/30p with 10-bit Log and S-Cinetone"
    },
    "sealing": {
      "level": "splash",
      "rating": null,
      "note": "Sony claims dust and moisture resistance, not waterproofing (Alpha Shooters). No IP rating."
    },
    "battery": {
      "model": "NP-FW50",
      "cipa": 300,
      "note": "300 shots on the LCD, 270 with the EVF. The 7.3 Wh battery has about 60 percent more capacity than the old NP-BX1. USB-C with Power Delivery charging. DPReview: 'still not great'."
    },
    "storage": {
      "short": "One UHS-II SD slot"
    },
    "body": {
      "w": 113.3,
      "h": 67.9,
      "d": 87.5,
      "depthWithLens": 87.5,
      "weight": 498,
      "weightWithLens": 498,
      "note": "87.5 mm includes the eyecup; lens tip to monitor is 74.5 mm (Sony via CineD). Jacket pocket, but the eyecup makes it the thickest RX1.",
      "pocket": "87.5 mm includes the eyecup; lens tip to monitor is 74.5 mm (Sony via CineD). Jacket pocket, but the eyecup makes it the thickest RX1."
    },
    "reliability": {
      "grade": "A",
      "issues": [
        {
          "title": "No known failure pattern",
          "detail": "Current model with Sony support. One DPReview thread about a dead battery on arrival; nothing systemic found."
        }
      ]
    },
    "firmware": {
      "latest": "1.00",
      "date": "2025-07-30",
      "active": true,
      "note": "Per Sony regional support listings in search results. No update found as of 2026-09."
    },
    "msrp": 5099,
    "role": "Current RX1, over budget",
    "summary": "The RX1 body rebuilt around the 60MP a7CR sensor, modern AF, a fixed EVF, and a bigger USB-C battery. It keeps the Zeiss 35mm f/2 and the leaf shutter.",
    "verdict": "The most capable pocket full frame, but new it is $5,099, so it will not reach $3k used soon. It shows what the RX1R II lacks: AF, battery and weather resistance.",
    "identifiers": [
      "Built-in EVF in the top-left corner with a fixed eyecup; no pop-up."
    ],
    "referenceUrl": "https://www.sony.co.uk/electronics/support/compact-cameras-dsc-rx-series/dsc-rx1rm3/downloads",
    "shortName": "RX1R III",
    "chartLabel": [
      -10,
      4,
      "end"
    ],
    "ogLabel": [
      -14,
      6,
      "end"
    ],
    "stab": {
      "present": false,
      "stops": null,
      "note": "None.",
      "short": "None"
    },
    "image": null,
    "prices": {
      "usedLow": 4282,
      "usedTypical": 4393,
      "usedHigh": 5098,
      "newPrice": 5098,
      "note": "Barely a year old, so used copies are near-new and priced accordingly. Not checked at Adorama (blocked).",
      "sources": [
        {
          "retailer": "B&H",
          "price": "$4,282",
          "grade": "grade 9",
          "url": "https://www.bhphotovideo.com/c/product/803550648-USE/sony_dscrx1rm3b_rx1r_iii_digital_camera.html"
        },
        {
          "retailer": "KEH",
          "price": "$4,393–$5,098",
          "grade": "across grades",
          "url": "https://www.keh.com/shop/sony-rx1r-iii-digital-camera-61mp.html"
        }
      ]
    }
  },
  {
    "id": "q3m",
    "kind": "main",
    "maker": "Leica",
    "name": "Q3 Monochrom",
    "family": "q",
    "announced": "2025-11",
    "shipped": "2025-11",
    "discontinued": null,
    "sensor": {
      "type": "BSI-CMOS",
      "mp": 60.3,
      "mono": true,
      "aaFilter": null,
      "note": "Monochrome 60MP, no color filter array. Triple resolution 60/36/18MP (DPReview)."
    },
    "lens": {
      "focal": 28,
      "aperture": "f/1.7",
      "name": "Summilux 28mm f/1.7 ASPH",
      "closeFocusM": 0.17,
      "macroMode": "30 cm normally; macro from 17 cm (DPReview).",
      "cropModes": null,
      "note": "Crop modes not confirmed in sources read; likely same as Q3.",
      "short": "28mm f/1.7"
    },
    "iso": {
      "base": 100,
      "max": 200000,
      "usable": 12500,
      "ceiling": 25000,
      "note": "Too new for a reviewer consensus on noise. Leica rates it to ISO 200,000; these figures are the guide's estimate from the color Q3 plus the usual one-stop monochrome advantage, not a quote."
    },
    "af": {
      "short": "Contrast",
      "note": "Contrast-detect only. DPReview: unlike the color Q3 it 'does not gain phase-detection AF'. 4 fps with AF, 15 fps with AF locked."
    },
    "viewfinder": {
      "type": "evf",
      "dots": 5760000,
      "magnification": null,
      "short": "Built-in EVF",
      "note": "Built-in OLED EVF, 5.76M dots. Imaging Resource: same 5.67MP-class OLED finder as the Q3."
    },
    "screen": {
      "size": 3,
      "dotsK": null,
      "touch": true,
      "articulation": "tilting",
      "short": "3\" tilting, touch"
    },
    "shutter": {
      "type": "leaf",
      "maxMech": "1/2000",
      "electronic": null,
      "sync": "1/2000",
      "note": "Leaf shutter, near silent.",
      "short": "Leaf, to 1/2000"
    },
    "video": {
      "short": "Monochrome video to 8K/30p"
    },
    "sealing": {
      "level": "ip",
      "rating": "IP52",
      "note": "DPReview."
    },
    "battery": {
      "model": "BP-SCL6",
      "cipa": 350,
      "note": "USB-C charging."
    },
    "storage": {
      "short": "One SD slot"
    },
    "body": {
      "w": 130,
      "h": 80,
      "d": 93,
      "depthWithLens": 93,
      "weight": 743,
      "weightWithLens": 743,
      "note": "DPReview. Coat pocket at best.",
      "pocket": "DPReview. Coat pocket at best."
    },
    "reliability": {
      "grade": "A",
      "issues": [
        {
          "title": "No known failure pattern",
          "detail": "Current model; shares Q3 firmware line."
        }
      ]
    },
    "firmware": {
      "latest": "4.1.1",
      "date": "2026-08-06",
      "active": true,
      "note": "Leica Rumors."
    },
    "msrp": 7790,
    "role": "Black-and-white Q3, reference only",
    "summary": "A Q3 with a monochrome 60MP sensor and contrast-only AF, announced November 20, 2025 at $7,790.",
    "verdict": "Far over budget and as bulky as any Q. Included only because it exists.",
    "identifiers": [
      "No red badge, 'Monochrom' engraved on the top plate, pebbled leatherette (Imaging Resource)."
    ],
    "referenceUrl": "https://leica-camera.com/en-US/press/leica-q3-monochrom",
    "shortName": "Q3 Mono",
    "chartLabel": [
      10,
      4,
      "start"
    ],
    "stab": {
      "present": true,
      "stops": null,
      "note": "Optical stabilization in the lens (inherited from Q3; not separately confirmed).",
      "short": "Lens OIS"
    },
    "image": null,
    "prices": {
      "usedLow": 7473,
      "usedTypical": 7739,
      "usedHigh": 7950,
      "note": "Essentially new-price. Not checked at Adorama (blocked).",
      "sources": [
        {
          "retailer": "B&H",
          "price": "$7,473",
          "grade": "open box",
          "url": "https://www.bhphotovideo.com/c/product/803556889-USE/leica_19200_q3_monochrom_digital_camera.html"
        },
        {
          "retailer": "KEH",
          "price": "$7,739–$7,950",
          "grade": "across grades",
          "url": "https://www.keh.com/shop/leica-q3-monochrom-type-6506-digital-camera-black-60mp-19200.html"
        }
      ],
      "newPrice": null
    }
  }
]
