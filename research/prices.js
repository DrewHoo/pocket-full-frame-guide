// Structured version of research/prices.md, merged into cameras.js by
// research/assemble.mjs. Observed 2026-09-25.
const BH = (id, slug) => `https://www.bhphotovideo.com/c/product/${id}/${slug}`
const KEH = (slug) => `https://www.keh.com/shop/${slug}`
const ADO = (sku) => `https://www.adorama.com/${sku}.html`
const s = (retailer, price, grade, url) => ({ retailer, price, grade, url })

export const LENS_USED = {
  sigma45: 430, // B&H used, L-mount, $419.95 (9) and $444.95 (9+)
  sony40: 670, // B&H used Sony FE 40mm f/2.5 G, $669.95 (9) and $685.95 (9+); new $798
}

export const PRICES = {
  rx1: {
    usedLow: 721, usedTypical: 916, usedHigh: 1199,
    note: 'One copy at B&H and a few at KEH. Adorama had none.',
    sources: [
      s('B&H', '$1,199', 'grade 9', BH('803549840-USE', 'sony_dscrx1_b_cyber_shot_dsc_rx1_full_frame.html')),
      s('KEH', '$721–$916', 'across grades', KEH('sony-cyber-shot-dsc-rx1-digital-camera-24-3-m-p.html')),
    ],
  },
  rx1r: {
    usedLow: 946, usedTypical: 975, usedHigh: 1025,
    note: 'Three at B&H and four at KEH, all within $80 of each other. Adorama had none.',
    sources: [
      s('B&H', '$950', 'grade 8', BH('803355095-USE', 'sony_dscrx1r_b_cyber_shot_dsc_rx1r_digital_camera.html')),
      s('B&H', '$975', 'grade 8+', BH('803453240-USE', 'sony_dscrx1r_b_cyber_shot_dsc_rx1r_digital_camera.html')),
      s('B&H', '$1,025', 'grade 9', BH('803461934-USE', 'sony_dscrx1r_b_cyber_shot_dsc_rx1r_digital_camera.html')),
      s('KEH', '$946', '4 in stock', KEH('rx1r-24-3-m-p.html')),
    ],
  },
  rx1r2: {
    usedLow: 2179, usedTypical: 2275, usedHigh: 2347,
    note: "Adorama's only copy was sold for parts ($516: won't power on, damaged sensor), so it's left out of the range.",
    sources: [
      s('B&H', '$2,275', 'grade 9', BH('803549490-USE', 'sony_dscrx1rm2_b_cyber_shot_dsc_rx1r_ii_digital.html')),
      s('KEH', '$2,179–$2,347', '5 in stock', KEH('sony-cyber-shot-dsc-rx1r-ii-digital-camera-42-4-m-p-1.html')),
      s('Adorama', '$516', 'for parts only', ADO('imcsorx1r2')),
    ],
  },
  rx1r3: {
    usedLow: 4282, usedTypical: 4393, usedHigh: 5098, newPrice: 5098,
    note: 'Barely a year old, so used copies are near-new and priced accordingly. Not checked at Adorama (blocked).',
    sources: [
      s('B&H', '$4,282', 'grade 9', BH('803550648-USE', 'sony_dscrx1rm3b_rx1r_iii_digital_camera.html')),
      s('KEH', '$4,393–$5,098', 'across grades', KEH('sony-rx1r-iii-digital-camera-61mp.html')),
    ],
  },
  q: {
    usedLow: 2212, usedTypical: 2756, usedHigh: 3040,
    note: 'KEH had eight: black, silver and titanium gray. B&H had only a $7,400 Dubai special edition and Adorama was out of stock. The Q-P version was $3,662 at KEH.',
    sources: [
      s('KEH', '$2,212', 'Bargain, black', KEH('leica-q-typ-116-black-digital-camera-24-2-m-p.html')),
      s('KEH', '$2,756', 'Excellent, black, no hood', KEH('leica-q-typ-116-black-digital-camera-24-2-m-p.html')),
      s('KEH', '$2,808', 'Excellent, black, hood and cap', KEH('leica-q-typ-116-black-digital-camera-24-2-m-p.html')),
      s('KEH', '$3,040', 'Like New−, black', KEH('leica-q-typ-116-black-digital-camera-24-2-m-p.html')),
      s('KEH', '$2,641', 'silver', KEH('leica-q-typ-116-silver-digital-camera-24-2-m-p.html')),
      s('KEH', '$2,254–$2,884', 'titanium gray', KEH('leica-q-typ-116-titanium-gray-digital-camera-24-2-m-p-1.html')),
      s('KEH', '$3,662', 'Q-P', KEH('leica-q-p-black-digital-camera-24-2-m-p.html')),
    ],
  },
  q2: {
    usedLow: 3800, usedTypical: 3969, usedHigh: 4378,
    note: 'The Q2 Reporter edition runs about the same ($3,865 at KEH, $4,187 at Adorama). Adorama had no standard Q2.',
    sources: [
      s('B&H', '$3,800', 'grade 8', BH('803536852-USE', 'leica_19051_q2_digital_camera.html')),
      s('B&H', '$3,900', 'grade 8+', BH('803452261-USE', 'leica_19051_q2_digital_camera.html')),
      s('B&H', '$4,378', 'grade 9+', BH('803479933-USE', 'leica_19051_q2_digital_camera.html')),
      s('KEH', '$3,969–$4,139', 'black', KEH('leica-q2-type-4889-black-digital-camera-47-3-m-p.html')),
      s('KEH', '$3,865–$3,880', 'Reporter', KEH('27988874.html')),
      s('Adorama', '$4,187', 'Reporter', ADO('imclcq2re')),
    ],
  },
  q2m: {
    usedLow: 3850, usedTypical: 4049, usedHigh: 4730,
    sources: [
      s('B&H', '$3,850', 'grade 8', BH('803378569-USE', 'leica_4889_q2_monochrom_digital_camera.html')),
      s('B&H', '$4,000', 'grade 8+', BH('803349447-USE', 'leica_4889_q2_monochrom_digital_camera.html')),
      s('B&H', '$4,350', 'grade 9', BH('803480692-USE', 'leica_4889_q2_monochrom_digital_camera.html')),
      s('KEH', '$4,049–$4,501', 'across grades', KEH('leica-q2-monochrom-digital-camera-black-47-3mp-19055.html')),
      s('Adorama', '$4,730', 'one copy', ADO('imclcq2m')),
    ],
  },
  q3: {
    usedLow: 5399, usedTypical: 6200, usedHigh: 7350,
    note: 'Adorama listed used Q3s from $5,399 before it stopped serving pages to the browser; the per-grade detail was not read.',
    sources: [
      s('B&H', '$6,100', 'grade 8+', BH('803437230-USE', 'leica_19080_q3_digital_camera.html')),
      s('B&H', '$6,200', 'grade 9', BH('803553731-USE', 'leica_19080_q3_digital_camera_black.html')),
      s('B&H', '$6,500', 'grade 9+', BH('803522427-USE', 'leica_19080_q3_digital_camera_black.html')),
      s('KEH', '$5,972–$7,350', 'black', KEH('28314738.html')),
      s('Adorama', 'from $5,399', 'search listing', ADO('imclcq3')),
    ],
  },
  q343: {
    usedLow: 6678, usedTypical: 6820, usedHigh: 7950,
    sources: [
      s('B&H', '$6,678', 'grade 8+', BH('803504176-USE', 'leica_19084_q3_43_digital_camera.html')),
      s('B&H', '$6,820', 'grade 9', BH('803498564-USE', 'leica_19084_q3_43_digital_camera.html')),
      s('B&H', '$7,314', 'grade 10', BH('803557799-USE', 'leica_19084_q3_43_digital_camera.html')),
      s('KEH', '$6,805–$7,950', 'across grades', KEH('28790404.html')),
      s('Adorama', 'from $6,799', 'search listing', ADO('imclcq343')),
    ],
  },
  q3m: {
    usedLow: 7473, usedTypical: 7739, usedHigh: 7950,
    note: 'Essentially new-price. Not checked at Adorama (blocked).',
    sources: [
      s('B&H', '$7,473', 'open box', BH('803556889-USE', 'leica_19200_q3_monochrom_digital_camera.html')),
      s('KEH', '$7,739–$7,950', 'across grades', KEH('leica-q3-monochrom-type-6506-digital-camera-black-60mp-19200.html')),
    ],
  },
  zx1: {
    usedLow: null, usedTypical: null, usedHigh: null,
    note: 'No stock at B&H (listed as no longer available), KEH, or MPB. The only eBay listing on the observation date was a prototype at $3,999. Adorama was not checked (blocked).',
    sources: [],
  },
  fp: {
    usedLow: 985, usedTypical: 1019, usedHigh: 1298,
    note: 'Adorama had one kit with the 45mm f/2.8 at $1,813.',
    sources: [
      s('B&H', '$1,298', 'grade 9', BH('803551680-USE', 'sigma_fp_mirrorless_digital_camera.html')),
      s('KEH', '$985–$1,019', '4 in stock', KEH('28682327.html')),
      s('Adorama', '$1,813', 'with 45mm f/2.8', ADO('imcsgfpk')),
    ],
  },
  fpl: {
    usedLow: 1550, usedTypical: 1775, usedHigh: 2210,
    note: "B&H's copy includes the EVF-11 viewfinder, which accounts for most of the gap. Not checked at Adorama (blocked).",
    sources: [
      s('KEH', '$1,550–$1,775', 'with HU-11 hot shoe unit', KEH('sigma-fp-l-mirrorless-digital-camera-body-black-61mp-with-hu-11-hot-shoe-unit-strap-lugs.html')),
      s('B&H', '$2,210', 'grade 9, with EVF-11', BH('803486671-USE', 'sigma_fp_l_mirrorless_camera.html')),
    ],
  },
  bf: {
    usedLow: 1757, usedTypical: 1790, usedHigh: 1827,
    note: 'Only KEH had one. Not checked at Adorama (blocked).',
    sources: [s('KEH', '$1,757–$1,827', 'silver, 3 in stock', KEH('sigma-bf-mirrorless-camera-silver-24-6mp.html'))],
  },
  s9: {
    usedLow: 1066, usedTypical: 1115, usedHigh: 1182,
    note: 'Body only. B&H had kits with the 18-40mm zoom at $1,358 and $1,528.',
    sources: [
      s('KEH', '$1,099', 'night blue', KEH('28899387.html')),
      s('KEH', '$1,115', 'jet black', KEH('28797358.html')),
      s('KEH', '$1,164–$1,182', 'dark olive', KEH('28864924.html')),
      s('Adorama', '$1,066', 'pink', ADO('imcpcs9p')),
      s('Adorama', '$1,089', 'jet black', ADO('imcpcs9bk')),
      s('B&H', '$1,358', 'grade 9+, with 18-40mm', BH('803549968-USE', 'panasonic_lumix_s9_mirrorless_camera.html')),
    ],
  },
  a7c: {
    usedLow: 1100, usedTypical: 1210, usedHigh: 1330,
    note: 'Plenty of stock. Not checked at Adorama (blocked).',
    sources: [
      s('B&H', '$1,100', 'grade 8+, black', BH('803500488-USE', 'sony_ilce7c_b_alpha_a7c_mirrorless_digital.html')),
      s('B&H', '$1,285', 'grade 9, silver', BH('803536331-USE', 'sony_ilce7c_s_alpha_a7c_mirrorless_digital.html')),
      s('B&H', '$1,330', 'grade 9+, silver', BH('803545865-USE', 'sony_ilce7c_s_alpha_a7c_mirrorless_digital.html')),
      s('KEH', '$1,106–$1,210', 'black', KEH('sony-alpha-a7c-mirrorless-digital-camera-body-black-24-2m-p.html')),
      s('KEH', '$1,116–$1,222', 'silver', KEH('sony-alpha-a7c-mirrorless-digital-camera-body-silver-24-2mp.html')),
    ],
  },
  a7c2: {
    usedLow: 1829, usedTypical: 2198, usedHigh: 2273,
    note: 'Not checked at Adorama (blocked).',
    sources: [
      s('KEH', '$1,829–$1,951', 'silver', KEH('28423756.html')),
      s('KEH', '$1,906–$1,984', 'black', KEH('28477066.html')),
      s('B&H', '$2,198', 'grade 9', BH('803524438-USE', 'sony_ilce7cm2_b_alpha_7c_ii_mirrorless.html')),
      s('B&H', '$2,273', 'grade 10', BH('803538156-USE', 'sony_ilce7cm2_b_alpha_7c_ii_mirrorless.html')),
    ],
  },
  a7cr: {
    usedLow: 2378, usedTypical: 2786, usedHigh: 3398,
    note: 'Not checked at Adorama (blocked).',
    sources: [
      s('KEH', '$2,378–$2,518', 'silver', KEH('28481018.html')),
      s('KEH', '$2,549–$3,398', 'black', KEH('28423789.html')),
      s('B&H', '$2,786', 'grade 9, black', BH('803548309-USE', 'sony_ilce7cr_b_alpha_7cr_mirrorless.html')),
      s('B&H', '$2,922', 'grade 9+, silver', BH('803517347-USE', 'sony_ilce7cr_s_alpha_7cr_mirrorless.html')),
    ],
  },
  gfx100rf: {
    usedLow: 4579, usedTypical: 4870, usedHigh: 5599,
    note: 'Not checked at Adorama (blocked).',
    sources: [
      s('KEH', '$4,579–$5,599', 'black', KEH('fujifilm-gfx-100rf-medium-format-mirrorless-camera-with-35mm-f-4-fixed-lens-black-102mp.html')),
      s('B&H', '$4,703', 'grade 9, silver', BH('803552446-USE', 'fujifilm_gfx100rf_digital_camera.html')),
      s('B&H', '$4,870', 'grade 9+, black', BH('803553076-USE', 'fujifilm_gfx100rf_digital_camera.html')),
    ],
  },
}
