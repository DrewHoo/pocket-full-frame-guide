# Smaller-than-full-frame candidates: checklist, sensor penalty, shortlist

*Agent-compiled 2026-09-25 (Claude). Prices were not researched. Spec rows, with a source URL for each field group, are in `subff-specs.json`. Some claims come only from search-result snippets; the JSON row says so where that happens.*

The premise: Drew will accept a sensor smaller than full frame only if everything else is "absolutely ideal". This file turns that phrase into a checklist, puts a number on what the smaller sensor costs, and scores each candidate.

## 1. "Absolutely ideal", defined

The baseline is what the Leica CL and Summicron-C 40mm f/2 already give him: 40mm, f/2, a bright-line rangefinder, a shutter-speed dial, an aperture ring, an engraved distance and DoF scale, about 55 mm deep and about 490 g. On top of that are the things a digital version can add.

**Core items.** All six must be ✓. A partial counts as a fail, because these are the reasons to accept the smaller sensor at all.

| Key | Item | ✓ | partial | ✗ |
|---|---|---|---|---|
| focal | Prime at 35–45mm equivalent | 35–45 | 27–34 or a zoom | other |
| aperture | Native f/2 or faster, the same exposure as the Summicron-C | ≤ f/2 | f/2.8 | slower |
| finder | Built-in viewfinder (optical, hybrid or EVF) | built in | optional hot-shoe finder | none possible |
| stabilization | IBIS or OIS | any | – | none |
| resolution | 24 MP or more | ≥ 24 | Foveon edge case | < 24 |
| depth | Depth as carried, lens retracted or pancake fitted | ≤ 60 mm | 60–70 mm | > 70 mm |

**Supporting items.** These can be partial, but a ✗ on any of them fails the camera.

| Key | Item | ✓ | partial | ✗ |
|---|---|---|---|---|
| leafShutter | Quiet leaf shutter (also gives high flash sync) | leaf | focal-plane with a silent e-shutter | – |
| controls | Shutter-speed dial and a physical aperture control (ring or dial) | both | one | neither |
| zoneFocus | Snap focus or a lens distance scale | snap mode or engraved scale | on-screen MF distance/DoF scale | none |
| battery | CIPA ≥ 300 and USB-C in-camera charging | both | one | neither |
| sealing | Weather sealing | sealed | sealed only with accessories | none |
| closeFocus | Close focus | ≤ 0.20 m | ≤ 0.35 m | > 0.35 m |
| af | Autofocus | phase-detect hybrid | contrast only or known-weak | – |
| weight | Weight with battery and lens | ≤ 500 g | 501–600 g | > 600 g |
| reliability | No systemic fault; still serviceable | ✓ | known but manageable, or discontinued | systemic fault or parts gone |

**Pass rule:** every core item ✓ and no ✗ anywhere.

The CL itself would fail this list: it has no stabilization, no sealing, 0.8 m close focus and no AF. The list asks for more than the CL gives, which is fair, since the digital camera has to justify the smaller sensor.

## 2. What the smaller sensor costs

### Theory

For the same framing, shutter speed and f-number, total light scales with sensor area. Fewer photons means more shot noise. Shallow depth of field scales with the equivalent aperture, which is the f-number multiplied by the crop factor.

DPReview: "Multiply the F-number by the crop factor and you get the equivalent aperture" ([What is equivalence](https://www.dpreview.com/articles/2666934640/what-is-equivalence-and-why-should-i-care/)). Area and stop figures are from [Wikipedia, Image sensor format](https://en.wikipedia.org/wiki/Image_sensor_format).

| Format | Crop | Area vs FF | Light (noise) penalty at same f-number | f/2 becomes | f/2.8 becomes |
|---|---|---|---|---|---|
| Full frame 36 x 24 | 1.0 | 1.0 | 0 | f/2 | f/2.8 |
| APS-C (Fuji / Ricoh / Sony / Leica) | 1.53 | 0.43 | **−1.2 stops** | f/3.1 | f/4.3 |
| APS-C (Canon) | 1.6 | 0.38 | −1.4 stops | f/3.2 | f/4.5 |
| Micro Four Thirds | 2.0 | 0.26 | −1.9 stops | f/4 | f/5.6 |
| 1-inch | 2.7 | 0.13 | −2.9 stops | f/5.4 | f/7.6 |

The two penalties stack. An APS-C camera with an f/2.8 lens (every Ricoh GR, and the X-E pancakes) is about 1.2 stops short of the Summicron-C on sensor area, plus 1 stop on aperture: **about 2.2 stops** of light at the same shutter speed. An APS-C camera with an f/2 lens (the X100 line) is only 1.2 stops short.

IBIS can win some of that back for still subjects, since it allows a slower shutter. It does nothing for moving people.

### Measured

These figures come from PhotonsToPhotos (Bill Claff). His "Low Light EV" is the ISO at which each camera's photographic dynamic range falls to a fixed threshold, so the difference between two cameras reads as a difference in stops. Values were read from the [PDR chart](https://www.photonstophotos.net/Charts/PDR.htm) data on 2026-09-25.

| Camera | Format | Low Light EV | PDR at ISO 3200 | Stops behind RX1R II |
|---|---|---|---|---|
| Sony RX1R II | FF | 10.88 | 7.36 | 0 |
| Sony a7 IV | FF | 10.75 | 7.27 | 0.13 |
| Sony a7 IV, APS-C crop mode | same sensor, cropped | 9.72 | 6.20 | 1.16 (**1.03 vs its own FF mode**) |
| Leica Q3 | FF | 10.31 | 6.81 | 0.57 |
| Leica Q2 | FF | 9.59 | 6.08 | 1.29 |
| Ricoh GR IV | APS-C | 10.85 | 7.29 | 0.03 (see caveat) |
| Fujifilm X100F | APS-C 24MP | 10.26 | 6.73 | 0.62 |
| Fujifilm X100V | APS-C 26MP | 10.22 | 6.70 | 0.66 |
| Fujifilm X100VI | APS-C 40MP | 10.04 | 6.54 | 0.84 |
| Ricoh GR III (IIIx proxy) | APS-C | 10.27 | 7.13 | 0.61 (raw NR flagged) |
| Fujifilm X-E5 | APS-C 40MP | 9.83 | 6.34 | 1.05 |
| Fujifilm X-E4 | APS-C 26MP | 9.78 | 6.38 | 1.10 |
| Sony a6700 | APS-C | 9.72 | 6.19 | 1.16 |
| Leica CL (digital) | APS-C | 9.63 | 6.13 | 1.25 |
| OM System OM-1 | MFT | 9.59 | 6.11 | 1.29 |
| Sony RX100 VII | 1-inch | 7.84 | 4.37 | 3.04 |

What the measurements say:

- **The clean test agrees with theory.** The a7 IV measured against its own APS-C crop loses 1.03 stops; theory says 1.2.
- **Across different cameras, APS-C trails good full frame by 0.6–1.2 stops.** Sensor generation matters about as much as size. A Leica Q2 (full frame) measures below an X100VI.
- **The X100VI's 40MP sensor is about 0.2 stop worse than the X100V's 26MP sensor** at this measure.
- **Caveat on the Ricoh GR IV.** It measures level with the RX1R II and PhotonsToPhotos flags no raw noise reduction on it. That is out of line with every other APS-C sensor here. The GR IV Monochrome, which should do better without a color filter array, measures 9.95 and is flagged for noise reduction. Treat the GR IV figure as unconfirmed until another lab reproduces it. The GR III's 10.27 is also flattered by flagged raw noise reduction.

### Depth of field and background blur

This is the part a smaller sensor cannot get back. The figures below are the agent's arithmetic from the thin-lens DoF formula, with a circle of confusion of 0.030 mm for full frame, 0.020 mm for APS-C and 0.011 mm for 1-inch. Background blur is the size of the blur disc for a background at infinity, in thousandths of the frame diagonal.

| Setup | Subject at 1.5 m: DoF | Background blur | Hyperfocal |
|---|---|---|---|
| CL film, 40mm f/2 | 1.42–1.59 m (16 cm) | 12.7 | 26.7 m |
| RX1R II, 35mm f/2 | 1.40–1.62 m (22 cm) | 9.7 | 20.5 m |
| X100VI, 23mm f/2 | 1.35–1.69 m (34 cm) | 6.4 | 13.3 m |
| GR IIIx / GR IVx, 26.1mm f/2.8 | 1.34–1.71 m (37 cm) | 5.9 | 12.2 m |
| X-E5 + XF27, f/2.8 | 1.35–1.69 m (34 cm) | 6.3 | 13.0 m |
| GR IV, 18.3mm f/2.8 | 1.20–1.99 m (79 cm) | 2.9 | 6.0 m |
| RX100 VII at 24mm-equiv, f/2.8 | 0.96–3.46 m | 1.2 | 2.6 m |

So at a head-and-shoulders distance, an X100VI wide open blurs the background about **half as much as Drew's CL at f/2**, and about two-thirds as much as an RX1R II. The upside is that the deeper field and shorter hyperfocal distance make zone focusing easier. At f/5.6 an APS-C 35mm-equivalent is sharp from about 2 m to infinity.

## 3. Ranked shortlist

Only one camera passes. The rest are ranked by how close they come.

1. **Fujifilm X100VI: meets "absolutely ideal".**
   - What it has: 35mm-equivalent f/2, a hybrid optical/electronic finder, a leaf shutter, 6-stop IBIS and 40MP. It has shutter-speed and ISO dials plus an aperture ring, 450 OVF CIPA shots, USB-C charging and PDAF.
   - Size: 55.3 mm deep and 521 g, which is essentially the CL with its lens (55 mm, 490 g).
   - Partials: zone focus is an on-screen scale with no snap mode. Sealing needs the AR-X100 ring plus a filter; the ring alone adds 9 mm ([Kamerastore](https://kamerastore.com/en-us/products/fujifilm-ar-x100-adapter-ring-fuji-x)), so a sealed X100VI is about 64 mm+ deep. The weight is 31 g over the CL. Reliability is marked partial for early-QC and dust reports, and it is still backordered new.
   - Honest costs: about 1.2 stops of noise in theory (0.84 measured against the RX1R II), half the background blur of the CL, and a lens DPReview calls soft wide open up close.
2. **Fujifilm X100V: fails on one item, stabilization.**
   - Otherwise the same as the X100VI, and slightly smaller: 53.3 mm and 478 g, 26MP. It measures about 0.2 stop cleaner than the VI.
   - Drew's CL has no stabilization either. If he drops IBIS from the list, the X100V passes and is the lighter camera.
3. **Fujifilm X100F: fails on stabilization and sealing.**
   - The X100 price floor. Other drawbacks: micro-USB instead of USB-C, and an older lens that glows at f/2 up close.
4. **Fujifilm X-E4 + XF 27mm f/2.8 R WR: fails on aperture, stabilization and sealing.**
   - The closest match to the CL on paper: 41mm-equivalent, about 55.7 mm deep and about 448 g. It has a shutter dial, an aperture ring on the lens and 460 CIPA shots.
   - But the lens is f/2.8 (f/4.2 equivalent), so it gives up about 2.2 stops of light against the Summicron-C. There is no IBIS. It was discontinued in 2022 and its firmware stopped in 2023.
5. **Fujifilm X-E5 + XF 23 or 27 f/2.8: fails on aperture, depth and sealing.**
   - It has IBIS and 40MP, but it is 56–62 mm deep. Fujifilm quotes 33.0 mm minimum and 39.1 mm overall body depth, and the 62 mm figure is what a pocket feels. With the pancake it weighs about 535 g.
   - The only way to f/2 is the XF 23 f/2, which is 51.9 mm long ([Fujifilm](https://www.fujifilm-x.com/global/products/lenses/xf23mmf2-r-wr/specifications/)) and pushes the camera to 85–91 mm.
6. **Ricoh GR IIIx and GR IIIx HDF: fail on aperture, finder, controls, sealing and reliability.**
   - The right view (40mm) at 35.2 mm deep and 262 g, which fits a jeans pocket, not just a jacket. It has snap focus and a leaf shutter.
   - Against that: f/2.8 only, no finder (the optional optical GV-3 gives no focus information), no dials or ring, and 200 CIPA shots.
   - It has the well-known dust-on-sensor design fault. Ricoh is ending production with October 2026 shipments because parts are no longer available ([DPReview](https://www.dpreview.com/news/ricoh-griiix-production-ending-parts-availability/)).
7. **Ricoh GR IV, GR IV HDF and GR IV Monochrome: fail on focal length, aperture, finder, controls and sealing.**
   - A 28mm view, at 32.7 mm deep and 262 g, with 6-stop IBIS and the snap-focus system.
   - Dust is still reported even after Ricoh's barrel and coating changes. Fstoppers found a spot after about 1,200 shots, and says Ricoh advises against pocket carry and the warranty does not cover dust ([Fstoppers, 2026-09-22](https://fstoppers.com/education/why-tiny-aps-c-camera-got-dust-spot-after-1200-shots-904735)).
8. **Ricoh GR IVx: in development, cannot be bought.**
   - 40mm f/2.8, 33.4 mm, 265 g, "Winter 2026 or later" ([Ricoh](https://us.ricoh-imaging.com/ricoh-imaging-announces-ricoh-gr-ivx-currently-under-development/)).
   - When it ships it will fail on the same aperture, finder, controls and sealing items as the GR IIIx.
9. **Leica X (Typ 113): fails on finder, stabilization, resolution, depth and sealing.**
   - It has a shutter dial, an aperture dial, a distance scale and 35mm f/1.7. But the sensor is 16MP and the camera is 78 mm deep.
   - The f/1.7 is only reachable beyond about 1.2–1.5 m; at 20 cm the lens is limited to f/2.8.
   - The X-U (79 mm, 635 g) and X Vario (95 mm, 680 g) are further out.
10. **Leica CL (digital) + TL 18 f/2.8: fails on eight items.**
    - The shared name is the only real link to Drew's CL. It has no IBIS, no dials or ring, 220 CIPA shots, no USB and contrast AF, and it is about 66 mm deep with the pancake.
    - With the Summicron-TL 23 f/2 it is 82 mm deep.
    - Discontinued in May 2022. Leica promised six years of care from purchase, which runs to about 2028 for the last units sold.
11. **Sony a6700 + E 20mm f/2.8: fails on focal length, aperture, depth and controls.**
    - Included only for contrast. It has the best AF and battery here, but it is PASM-only with no dials, at least 64 mm deep, and about 563 g.
12. **Also ruled out:**
    - **Fujifilm XF10:** 28mm f/2.8, no finder, no IBIS, 41 mm.
    - **Sigma dp2 Quattro:** 45mm f/2.8, but 161 mm wide, 81.6 mm deep and about 200 shots per battery.

**Below the line:**

- **Sony RX100 VII:** 1-inch, 24–200mm at f/7.6–12 equivalent, pop-up EVF, 42.8 mm, 302 g. It measures about 3.0 stops behind the RX1R II.
- **Fujifilm X half:** 1-inch, 32mm at about f/8 equivalent, vertical half-frame, JPEG only, 45.8 mm, 240 g.

**Medium format:** the GFX100RF is 76.5 mm deep, deeper than any RX1.

## 4. New and rumored models, as of 2026-09-25

- **Ricoh GR IV family.**
  - GR IV: 2025-08.
  - GR IV HDF: 2025-12. The highlight-diffusion filter replaces the ND ([Ricoh](https://us.ricoh-imaging.com/ricoh-launches-ricoh-gr-iv-hdf/)).
  - GR IV Monochrome: 2026-01 ([Ricoh](https://us.ricoh-imaging.com/ricoh-launches-the-ricoh-gr-iv-monochrome/)).
  - 30th Anniversary kit: cosmetic only, ships 2026-10-21.
  - GR IVx: development announcement only, 2026-08-26.
  - No GR IVx HDF or Monochrome has been announced or rumored.
- **Fujifilm X100VII.** Not announced, and Fuji Rumors calls the circulating spec leaks fake ([Fuji Rumors](https://www.fujirumors.com/tag/fujifilm-x100vii/)). It is expected on the 6th-generation platform after the X-T6, and the X-T6 launch event has been cancelled with no new date ([Fuji Rumors](https://www.fujirumors.com/bad-news-fujifilm-x-t6-delayed-heres-why/)).
- **Fujifilm 1-inch compact.** Rumored for 2026 ([Fuji Rumors](https://www.fujirumors.com/rumor-fujifilm-is-working-on-a-this-camera/)); it would be below the line.
- **Fujifilm XF 23mm f/2.8 R WR.** A new pancake that launched with the X-E5 in 2025.
- **Leica and Sigma.** No APS-C compact, CL successor, X revival or dp revival is rumored ([Leica Rumors roadmap, May 2026](https://leicarumors.com/2026/05/08/whats-next-for-leica-may2026-updated.aspx/)).
- **Other makers, all outside this brief.**
  - Canon PowerShot V1: 1.4-inch zoom, 2025.
  - Panasonic Lumix L10: MFT, 24–75mm f/1.7–2.8, 2026-05 ([PetaPixel](https://petapixel.com/2026/05/12/the-lumix-l10-is-a-new-fixed-lens-compact-in-the-spirit-of-the-lx100/)).
  - Nikon's full-frame compact: now rumored for about March 2027 ([Nikon Rumors](https://nikonrumors.com/2026/07/31/what-to-expect-next-from-nikon-updated-july-2026.aspx/)).

## 5. Caveats

- **Depth for interchangeable-lens pairs** is body depth plus lens length from the flange. Neither Fujifilm nor Sony says how the mount is counted, so allow ±3 mm.
- **X-E4 depth figure:** Fujifilm's English spec contradicts itself (32.7 mm, with a "minimum depth" of 32.9 mm). The Japanese page labels 32.7 mm as the thinnest part, so that figure is used.
- **Fixed-lens depths** are the makers' figures without the lens cap. The X100 cap adds a few mm, and that figure is not published.
- **X100V electronic shutter:** the maximum is 1/32000 per DPReview and the manual. Fujifilm's web page says 1/180000, which is likely an error.
- **GR IIIx HDF date:** it was announced 2024-03-27, not in 2023.
- **Sources that returned 403 or 502:** some Sony, Leica PDF and forum pages. Those claims come from search snippets and are labeled that way in the JSON.
