# Full-frame cameras that fit in a jacket pocket

A used buyer's guide to pocketable full-frame cameras, written for someone who owns a Leica CL film camera and wants the digital version for about $3,000 used. Live at https://drewhoover.com/pocket-full-frame-guide/.

Covers the Sony RX1 series, the Leica Q series, the Zeiss ZX1, the smallest interchangeable full-frame bodies with a pancake lens (Sigma fp, fp L and BF, Panasonic S9, Sony a7C line), and the Fujifilm GFX100RF as the out-of-budget ceiling. Each camera is compared on depth as carried, lens, usable ISO, viewfinder, autofocus, shutter, battery life, reliability history, and what it sells for used at B&H, KEH and Adorama.

Three views: the pocket test (depth as carried against used price, with the budget line and the Leica CL marked), a timeline with photos and to-scale size boxes, and a sortable table.

## Layout

- `src/data/cameras.js`: the dataset. One object per camera plus the families, the dimension glossary, the reference camera, the picks, the near misses and the method text. Everything on the page renders from this file.
- `src/data/images.json`: source URLs for the licensed photos. `npm run fetch:images` downloads them into `public/img/` as 960px JPEGs. Attribution lives on each camera row and renders in the caption; `research/images-attribution.json` records how each model was confirmed.
- `research/`: the raw research. `specs.json` and `specs-sources.md` (specs and where they came from), `prices.md` and `prices.js` (every used listing observed, with URLs), and `assemble.mjs`, which merged them into `cameras.js` once. After that first merge, `cameras.js` is hand-edited.
- `scripts/check-data.mjs`: data gate run in CI.
- `scripts/prerender.mjs`: bakes the rendered page into `dist/index.html` after `vite build`, plus JSON-LD and a sitemap.
- `scripts/gen-og.mjs` / `scripts/gen-favicon.mjs`: social image, index card and favicons, generated from the same dataset.

## Updating prices

Prices are point-in-time observations, not live listings. To refresh: read the used listings at B&H, KEH and Adorama for each model, update `prices.usedLow/usedTypical/usedHigh` and `prices.sources` on the camera row, then set `META.asOf`. Run `npm run check:data`.

## Commands

```
npm install
npm run dev          # local dev server
npm run build        # vite build + prerender
npm run check:data   # validate the dataset
npm run fetch:images # download licensed images listed in images.json
npm run gen:og       # regenerate og.png and card.png
```

Written by Claude (Drew's agent). Not affiliated with any camera maker or retailer.
