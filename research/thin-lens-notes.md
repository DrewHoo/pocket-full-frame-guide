# Thin-lens research notes

Compiled 2026-09-25 by an agent (Claude). Prices were not researched. Data lives in `thin-lens-specs.json` (body rows `kind: "body"`, lens rows `kind: "lens"`). Every mount-depth figure is an estimate; the method is below.

## Reference

Leica CL (film) with Summicron-C 40mm: 32 mm body + about 23 mm lens = about 55 mm, about 490 g (see `specs.json`, row `leica-cl-film`). One caveat: nothing I read says whether Wikipedia's 32 mm includes the CL's lens-mount ring. If it does not, the real reference is a few millimetres deeper.

## 1. Voigtländer Septon 40mm f/2 Aspherical

| | Sony E | Nikon Z |
|---|---|---|
| Length from mount | **30 mm** | **32 mm** |
| Max diameter | 61.7 mm | 68.3 mm |
| Weight | 165 g | 205 g |
| Filter | 52 mm | 52 mm |
| Close focus | 0.30 m (1:5.3) | 0.30 m (1:5.3) |

- **Drew's ~30 mm is right for E. For Z it is 32 mm, and the Z lens is 40 g heavier.** Voigtländer's own words: "total length of just 30 mm from the bayonet mount (32 mm for the Z-mount)". Sources: [Voigtländer E page](https://www.voigtlaender.de/lenses/e-mount/40-mm-12-septon-aspherical/?lang=en), [Voigtländer Z page](https://www.voigtlaender.de/z-mount/40-mm-12-septon-aspherical-z/?lang=en), [PetaPixel](https://petapixel.com/2026/02/13/new-voigtlander-40mm-f-2-lens-for-e-and-z-is-super-compact-and-stylish/).
- Manual focus. It has electronic contacts: EXIF, turning the focus ring triggers magnification, and there are peaking and frame-colour focus aids. A distance encoder feeds 5-axis IBIS on E ([Voigtländer E](https://www.voigtlaender.de/lenses/e-mount/40-mm-12-septon-aspherical/?lang=en); [Newsshooter](https://www.newsshooter.com/2026/02/15/voigtlander-septon-40mm-f2-aspherical-e-mount-z-mount/) says 3-axis IBIS).
- Optics: 7 elements in 6 groups, one aspherical. 10 aperture blades with 1/3-stop clicks.
- Announced 2026-02-13 and shipped in spring 2026. PetaPixel said March; Newsshooter said April for Japan.
- Known issues: corners are soft and show CA wide open, plus vignetting and some flare ([sonyalpha.blog](https://sonyalpha.blog/2026/04/01/voigtlander-40mm-f2-septon/), [Fred Miranda review thread](https://www.fredmiranda.com/forum/topic/1934796/)). [Phoblographer](https://www.thephoblographer.com/2026/02/16/will-the-new-voigtlander-40mm-f2-septon-fail-on-sony-cameras/) asked whether it would fail on Sony bodies the way unlicensed Viltrox lenses did on the a7 V. Their answer: Cosina has held the Sony licence since 2011, and no failure has been reported.

## 2. How mount depth was measured

Makers publish one depth figure, and they measure it differently:

- **Sony** gives two figures. The overall figure includes the EVF eyecup. The second is "from grip to monitor" ([a7C help guide](https://helpguide.sony.net/ilc/2020/v1/en/contents/TP1000156734.html)).
- **Nikon** gives one figure, and it runs from the front to the monitor, **excluding the eyecup**. I inferred that from three things. The EVF-less Z5IIc and the Z5II are both quoted at 72 mm. Camerasize's common-scale side views make every Nikon body about 15 mm deeper than Nikon's number. And those same views reproduce Nikon's figure only when measured from the front to the monitor.
- **Panasonic** says "excluding protrusions". **Sigma, Leica and Pixii** give one overall figure. Camerasize's views line up with those figures when the lens-mount ring is included.

No maker publishes a mount-face-to-screen figure. So I estimated it from [camerasize.com](https://camerasize.com/compact/)'s top-view images, which are scaled renders of the maker's product photos. Camerasize also stores a "lens attach" row for each body, which marks where its lens overlays meet the mount (endpoint `GetCameraTopCenter`). The method:

1. Read the pixel rows in the top-view image for the frontmost point, the mount face (camerasize's lens-attach row), the back of the monitor, and the rearmost point (eyecup or thumb rest).
2. Set the scale so the maker's own depth figure is reproduced. For Sony, Sigma, Panasonic, Leica and Pixii, the whole image depth equals the maker figure. For Nikon, frontmost-to-monitor equals the maker figure.
3. Check the method against a figure it wasn't scaled to. On Sony's second number it lands within 1-1.2 mm: a7C grip-to-monitor measures 53.0 mm against Sony's 53.5, and the a7 IV 69.2 against 69.7.

Treat these as ±2 mm, because the source photos have some perspective. The pixel rows for each body are in its `notes`.

Each body row has two carried-depth figures:

- `depthAsCarried` = max(maker overall depth, mountDepth + lens length). This is the formula requested.
- `depthAsCarriedWithEyecup` = max(front-to-rearmost, mount-to-rearmost + lens length). This is the true bounding box, and it matters on bodies whose EVF eyepiece sits behind the screen.

## 3. Results, closest to 55 mm first

| Body | Lens | Maker depth | Mount→screen (est.) | As carried | With eyecup | Weight with lens |
|---|---|---|---|---|---|---|
| Pixii Max | Summicron-C | 33 | 29.7 | **52.7** | 55.2 | 605 g |
| Leica M EV1 | Summicron-C | 38 | 36.0 | **59.0** | 60.7 | 620 g |
| Leica M10 | Summicron-C | 38.5 | 36.2 | 59.2 | 60.8 | 785 g |
| Leica M11 (black) | Summicron-C | 38.5 | 36.5 | 59.5 | 61.2 | 655 g |
| Leica M240 / M-E 240 / M262 | Summicron-C | 42 | 40.0 | 63.0 | 64.0 | 805 g |
| Sony ZV-E1 | Septon E | 54.3 | 42.1 | 72.1 | 73.1 | 648 g |
| Sony a7C | Septon E | 59.7 | 43.1 | 73.1 | 79.5 | 674 g |
| Sony a7CR | Septon E | 63.4 | 44.0 | 74.0 | 79.0 | 680 g |
| Sony a7C II | Septon E | 63.4 | 44.1 | 74.1 | 79.0 | 679 g |
| Sigma BF | Lumix S 40 f/2 | 36.8 | 33.2 | 74.1 | 77.0 | 590 g |
| Nikon Zf | Septon Z | 49 | 45.1 | 77.1 | 87.0 | 915 g |
| Nikon Z5 | Septon Z | 69.5 | 45.6 | 77.6 | 93.9 | 880 g |
| Nikon Z5IIc | Septon Z | 72 | 47.3 | 79.3 | 80.0 | 825 g |
| Sony a7 IV | Septon E | 79.8 | 46.6 | 79.8 | 85.8 | 823 g |
| Nikon Z5II | Septon Z | 72 | 48.1 | 80.1 | 93.9 | 905 g |
| Sigma fp L | Lumix S 40 f/2 | 45.3 | 39.6 | 80.5 | 84.5 | 571 g |
| Nikon ZR | Septon Z | 48.7 | 48.7 | 80.7 | 83.2 | 835 g |
| Sigma fp | Lumix S 40 f/2 | 45.3 | 40.0 | 80.9 | 85.2 | 566 g |
| Nikon Z6III | Septon Z | 74 | 50.2 | 82.2 | 98.3 | 965 g |
| Panasonic S9 | Lumix S 40 f/2 | 46.7 | 45.6 | 86.5 | 87.2 | 630 g |

All depths are in mm.

Other L-mount lens pairings, using the requested formula:

- **Lumix S 26mm f/8** (18.1 mm): BF about 51 mm, fp about 58, S9 about 64.
- **Summicron-C on an M-to-L adapter** (about 30.8 mm): BF about 64 mm, fp about 71, S9 about 76.

## 4. Summicron-C (and M-Rokkor 40) on digital M bodies: verdict

**It is compatible with every digital M and with the Pixii Max. It mounts and focuses; the problems are framing and a small risk of rangefinder error.**

- **Not on Leica's incompatible list.** The M10-R manual lists the Hologon 15, the Summicron 50 with close-up function, the collapsible Elmar 90 (1954-68) and some early Summilux 35s as incompatible. The Summicron-C is not there, and nothing I found names it as a lens to avoid. ([ManualsLib, M10-R p.34](https://www.manualslib.com/manual/1941695/Leica-M10-R.html?page=34)) The rear element is shallow, and digital Ms have no meter arm, so there is nothing for it to hit.
- **Framelines: it brings up 50 mm.** Every M body (M9 through M11) shows 50 mm lines, so the picture comes out wider than the frame. Some M9 owners file the lug so it brings up the 35 mm lines instead. They report those as close enough for 40 mm. ([35mmc](https://www.35mmc.com/02/04/2016/leica-40mm-summicron-review/), [l-camera-forum M9 thread](https://www.l-camera-forum.com/topic/267190-40mm-summicron-ad-m9/), [Phillip Reeve on the M-Rokkor with an M10](https://phillipreeve.net/blog/review-minolta-40mm-2-0-m-rokkor/), [hintingimage](https://hintingimage.com/40cron_mm))
  - **The Pixii Max has a real 40 mm frameline.** You pick 28, 35, 40 or 50 in its LENS menu ([Pixii manual](https://pixii.fr/user-manual)).
  - **The M EV1 has no framelines at all.** Its EVF shows the exact frame.
- **Rangefinder coupling: Leica gave a warning at launch, but users report no problem.** The lens drives the rangefinder through a pitched (sloped) cam. Leica said it did not guarantee accurate focus on bodies other than the CL ([35mmc](https://www.35mmc.com/02/04/2016/leica-40mm-summicron-review/)).
  - User reports are consistently fine. On the M8, M9, M Monochrom, M11-P and M11-D, owners report no focus problem, including wide open ([35mmc](https://www.35mmc.com/02/04/2016/leica-40mm-summicron-review/), [Vogelius](https://gear.vogelius.se/-reviews/leica-summicron-40/index.html), [hintingimage](https://hintingimage.com/40cron_mm), [l-camera-forum](https://www.l-camera-forum.com/topic/419760-summicron-c-40mm-on-m-body/)).
  - One forum poster had heard focus under 1 m might be off, but nobody confirmed it.
  - The known fix, if a body does mis-focus: one turn of PVC tape on the cam, or have a technician check the rangefinder arm length and infinity setting. ([Rangefinderforum thread](https://rangefinderforum.com/threads/leica-40mm-summicron-c-focus-cam-adjustment.155301/), summarised from search results; the page blocked direct fetch.)
  - The risk goes away entirely on the **M EV1**, which focuses by magnification and peaking, and on L-mount bodies via an adapter.
- **Focus shift: sources disagree.** Vogelius found none on the Summicron-C. Phillip Reeve found clear focus shift between f/2.8 and f/4 on the M-Rokkor (the same optical design). So at f/4-5.6 at close range, focusing wide open on the rangefinder and then stopping down may miss.
- **6-bit coding: none.** The lens is uncoded, and I did not find a Summicron-C entry in the digital M manual lens menus. Set the lens type manually or leave detection off; a 50 mm profile is the usual stand-in. Coding only affects EXIF and vignetting correction.
- **M-Rokkor 40 and CLE:** optically the same as the Summicron-C. It uses a 40.5 mm filter, and Reeve measured it at 25 mm long and 104 g. It behaves the same way: 50 mm framelines on the M10 and M6, correct 40 mm lines on the CL and CLE ([Phillip Reeve](https://phillipreeve.net/blog/review-minolta-40mm-2-0-m-rokkor/)).
- **On the Sony A7 (not an M body):** corners are weak wide open because of the thick sensor stack. Vogelius needed f/2.8-f/4, and f/8 for good corners. Leica M bodies use thin sensor cover glass, so this is not the same problem.

## 5. Surprises

1. **The Pixii Max is the only body that roughly matches the CL.** About 53-55 mm with Drew's own lens, 605 g, and a real 40 mm frameline. The catches:
   - Its depth comes from the APS-C Pixii shell and a snippet-sourced 33 mm figure, so it needs confirming.
   - PetaPixel reports a dim rangefinder patch, poor battery life and frequent write errors.
2. **The Leica M10, M11 and M EV1 all land at 59-61 mm.** That is only 4-6 mm deeper than the CL with the same lens. The M EV1 removes the frameline and cam worries.
3. **On Sony and Nikon, the grip hides some of the lens.** On the a7C the grip sits about 10 mm ahead of the mount face. That makes the real a7C + Septon about 73 mm (79 mm with the eyecup), not the 90+ mm you get by adding body depth to lens length. The `depthWithLens` estimates in `specs.json` for the a7C line are too high for the same reason.
4. **Nikon bodies are about 45-50 mm deep at the mount, even the Zf.** The Zf's eyepiece sits right behind the lens axis and adds about 10 mm, so a Zf + Septon Z bounding box is about 87 mm. That is no pocket camera.
5. **The Lumix S 40mm f/2 is 40.9 mm long, about 11 mm longer than the Septon E.** Drew's "about 40 mm" is correct. So the S9 + 40 is the deepest pairing in the table (about 87 mm). The BF + 40 is about 74 mm, the same as an a7C + Septon.
6. **The BF is the thinnest full-frame body at the mount, at about 33 mm.** With the 26mm f/8 it is about 51 mm, thinner than the CL. With Drew's Summicron-C on an adapter it is about 64 mm.
7. **The existing `specs.json` row for the Lumix S 20mm f/2.5 has the same 40.9 mm length and 69 mm diameter as the 40mm f/2.** That is correct, not a copy error: Panasonic built the 20mm, the 40mm and the 18-40mm kit zoom to one outline.

## Unverified or conflicting

- **Pixii Max dimensions.** 138 x 79 x 33 mm comes from a CameraDecision search snippet; the page blocked fetch, and Pixii's own page lists no dimensions.
- **M (Typ 262) weight.** Wikipedia and DPReview say 680 g, but DPReview also calls it about 100 g lighter than the Typ 240.
- **M EV1 weight.** 495 g (Photography Blog) vs 484 g (other listing).
- **Z5IIc top shutter speed.** DPReview says 1/4000; the Z5II is 1/8000.
- **CIPA figures.** None found for the ZR, the M240 family or the M10.
- **Voigtländer's official PDF spec sheets** were not fetched.
