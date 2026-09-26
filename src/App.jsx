import React, { useEffect, useMemo, useState } from 'react'
import { CAMERAS, FAMILIES, DIMENSIONS, PICKS, NEAR_MISSES, REFERENCE, META } from './data/cameras.js'

const BASE = import.meta.env.BASE_URL
const BUDGET = META.budget

// Family colors come from CSS custom properties so dark mode can swap them;
// the hex in FAMILIES is the light value, used by the OG image generator.
const familyById = Object.fromEntries(FAMILIES.map((f) => [f.id, { ...f, color: `var(--fam-${f.id})` }]))

const fmtUsd = (n) => (n == null ? '—' : `$${Math.round(n).toLocaleString('en-US')}`)
// "$3,836–$3,836" reads as a bug when only one body was in stock.
const fmtRange = (low, high) => (low === high ? fmtUsd(low) : `${fmtUsd(low)}–${fmtUsd(high)}`)
const yearsOld = (shipped) => {
  const [y, m] = shipped.split('-').map(Number)
  const now = new Date(META.asOf)
  const years = now.getFullYear() - y + (now.getMonth() + 1 - (m || 1)) / 12
  return Math.max(0, Math.round(years * 10) / 10)
}
const fmtDate = (ym) => {
  if (!ym) return '—'
  const [y, m] = ym.split('-')
  if (!m) return y
  return new Date(Date.UTC(+y, +m - 1, 1)).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })
}

// What it costs to walk out the door with a camera that takes pictures: the
// body's typical used price, plus the pancake lens for interchangeable bodies.
const bodyPrice = (c) => c.prices.usedTypical ?? c.prices.fallback?.typical ?? null
const carriedPrice = (c) => {
  const b = bodyPrice(c)
  if (b == null) return null
  return b + (c.prices.lensUsed || 0)
}
const lowPrice = (c) => {
  const b = c.prices.usedLow ?? c.prices.fallback?.low ?? null
  return b == null ? null : b + (c.prices.lensUsed || 0)
}
// In budget: a typical copy fits. Stretch: only the cheapest copies fit.
const budgetStatus = (c) => {
  const typ = carriedPrice(c)
  if (typ == null) return 'unknown'
  if (typ <= BUDGET) return 'in'
  if ((lowPrice(c) ?? Infinity) <= BUDGET) return 'stretch'
  return 'over'
}
// Weight as carried, lens included, to match depth as carried.
const carriedWeight = (c) => c.body.weightWithLens ?? c.body.weight
const fmtIso = (c) => (c.iso.usable == null ? 'Not researched' : `${c.iso.usable.toLocaleString()} clean / ${c.iso.ceiling.toLocaleString()} max`)
const budgetLabel = { in: 'In budget', stretch: 'Stretch', over: 'Over budget', unknown: 'No price' }
const budgetTone = { in: 'good', stretch: 'warn', over: 'bad', unknown: '' }

// ---- URL state -------------------------------------------------------------
// Read on mount only (never during render): the prerender step renders the
// default view on the server and the URL is applied right after hydration.
const readUrl = () => {
  const p = new URLSearchParams(window.location.search)
  return {
    view: p.get('view') === 'table' ? 'table' : 'timeline',
    families: (p.get('family') || '').split(',').filter((id) => familyById[id]),
    budgetOnly: p.get('budget') === 'only',
    sort: p.get('sort') || 'shipped',
    dir: p.get('dir') === 'desc' ? 'desc' : 'asc',
  }
}
const writeUrl = (s) => {
  const p = new URLSearchParams()
  if (s.view !== 'timeline') p.set('view', s.view)
  if (s.families.length) p.set('family', s.families.join(','))
  if (s.budgetOnly) p.set('budget', 'only')
  if (s.sort !== 'shipped') p.set('sort', s.sort)
  if (s.dir !== 'asc') p.set('dir', s.dir)
  const qs = p.toString()
  window.history.replaceState(null, '', qs ? `?${qs}` : window.location.pathname)
}

const DEFAULT_STATE = { view: 'timeline', families: [], budgetOnly: false, sort: 'shipped', dir: 'asc' }

export default function App() {
  const [state, setState] = useState(DEFAULT_STATE)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setState(readUrl())
    setHydrated(true)
  }, [])
  useEffect(() => {
    if (hydrated) writeUrl(state)
  }, [state, hydrated])

  const update = (patch) => setState((s) => ({ ...s, ...patch }))

  const visible = useMemo(
    () =>
      CAMERAS.filter(
        (c) =>
          (state.families.length === 0 || state.families.includes(c.family)) &&
          (!state.budgetOnly || budgetStatus(c) === 'in' || budgetStatus(c) === 'stretch'),
      ),
    [state.families, state.budgetOnly],
  )
  const visibleIds = useMemo(() => new Set(visible.map((c) => c.id)), [visible])

  return (
    <main>
      <Header />
      <PocketChart visibleIds={visibleIds} />
      <Families />
      <Glossary />
      <Controls state={state} update={update} count={visible.length} />
      {state.view === 'timeline' ? (
        <Timeline cameras={visible} />
      ) : (
        <Table cameras={visible} sort={state.sort} dir={state.dir} onSort={(sort, dir) => update({ sort, dir })} />
      )}
      <Picks />
      <NearMisses />
      <Sources />
    </main>
  )
}

// ---- Header ----------------------------------------------------------------
function Header() {
  return (
    <header className="hero">
      <h1 className="m-head">
        <span className="m-eyebrow">Used buyer's guide</span>
        <span className="m-title">Full-frame cameras that fit in a jacket pocket</span>
      </h1>
      {META.lede.map((p, i) => (
        <p key={i} className="lede">
          {p}
        </p>
      ))}
      <p className="lede small">
        Used prices observed at B&amp;H, KEH and Adorama on {META.asOfLong}. Written by Claude, Drew's agent, from the sources
        listed at the bottom. Images are Creative Commons photographs credited per camera. Not affiliated with any maker or
        retailer.
      </p>
    </header>
  )
}

// ---- Pocket chart ----------------------------------------------------------
// Depth as carried (the number that decides whether it goes in a pocket)
// against what a typical used copy costs, with the budget line and the CL.
const CW = 760
const CH = 440
const PAD = { l: 72, r: 24, t: 24, b: 60 }

function PocketChart({ visibleIds }) {
  const [active, setActive] = useState(null)
  const pts = CAMERAS.filter((c) => carriedPrice(c) != null && c.body.depthWithLens != null)
  const maxDepth = Math.max(...pts.map((c) => c.body.depthWithLens), REFERENCE.depthWithLens)
  const maxPrice = Math.max(...pts.map(carriedPrice), BUDGET)
  const x0 = 40
  const x1 = Math.ceil((maxDepth + 8) / 10) * 10
  const y1 = Math.ceil((maxPrice * 1.05) / 1000) * 1000
  const unplotted = CAMERAS.filter((c) => !pts.includes(c))
  const sx = (d) => PAD.l + ((d - x0) / (x1 - x0)) * (CW - PAD.l - PAD.r)
  const sy = (p) => CH - PAD.b - (p / y1) * (CH - PAD.t - PAD.b)
  const xTicks = []
  for (let d = x0; d <= x1; d += 10) xTicks.push(d)
  const yTicks = []
  for (let p = 0; p <= y1; p += 1000) yTicks.push(p)
  const act = active && pts.find((c) => c.id === active)

  return (
    <section className="card chart-card" aria-labelledby="pocket-h">
      <h2 id="pocket-h">The pocket test</h2>
      <p className="muted small chart-sub">
        How deep each camera is as you'd carry it, lens included, against what a typical used copy costs. Interchangeable
        bodies include a used or new thin 40mm lens; Leica M bodies wear your own Summicron-C, so they cost the body alone.
        Lower and further left is better. Tap or hover a dot for details.
      </p>
      <div className="chart-wrap">
        <svg viewBox={`0 0 ${CW} ${CH}`} role="img" aria-label="Scatter plot of depth as carried against used price" onPointerLeave={(e) => e.pointerType === 'mouse' && setActive(null)}>
          <rect x={PAD.l} y={sy(BUDGET)} width={CW - PAD.l - PAD.r} height={sy(0) - sy(BUDGET)} className="zone" />
          {yTicks.map((p) => (
            <g key={p}>
              <line x1={PAD.l} x2={CW - PAD.r} y1={sy(p)} y2={sy(p)} className="grid" />
              <text x={PAD.l - 8} y={sy(p) + 4} className="tick" textAnchor="end">
                {p === 0 ? '$0' : `$${p / 1000}k`}
              </text>
            </g>
          ))}
          {xTicks.map((d) => (
            <text key={d} x={sx(d)} y={CH - PAD.b + 22} className="tick" textAnchor="middle">
              {d}
            </text>
          ))}
          <text x={(PAD.l + CW - PAD.r) / 2} y={CH - 10} className="axis-label" textAnchor="middle">
            Depth as carried, mm
          </text>
          <text x={14} y={(PAD.t + CH - PAD.b) / 2} className="axis-label" textAnchor="middle" transform={`rotate(-90 14 ${(PAD.t + CH - PAD.b) / 2})`}>
            Typical used price
          </text>
          <line x1={PAD.l} x2={CW - PAD.r} y1={sy(BUDGET)} y2={sy(BUDGET)} className="budget-line" />
          <text x={PAD.l + 6} y={sy(BUDGET) - 6} className="ref-label budget-label">
            {fmtUsd(BUDGET)} budget
          </text>
          <line x1={sx(REFERENCE.depthWithLens)} x2={sx(REFERENCE.depthWithLens)} y1={PAD.t} y2={CH - PAD.b} className="ref-line" />
          <text x={sx(REFERENCE.depthWithLens) + 6} y={PAD.t + 14} className="ref-label">
            {REFERENCE.shortLabel}, {REFERENCE.depthWithLens} mm
          </text>
          {pts.map((c) => {
            const fam = familyById[c.family]
            const cx = sx(c.body.depthWithLens)
            const cy = sy(carriedPrice(c))
            const dim = !visibleIds.has(c.id)
            const [ldx, ldy, anchor] = c.chartLabel || [10, 4, 'start']
            return (
              <g
                key={c.id}
                className={`pt ${dim ? 'dim' : ''} ${active === c.id ? 'on' : ''}`}
                onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(c.id)}
                onPointerDown={() => setActive((a) => (a === c.id ? null : c.id))}
              >
                <circle cx={cx} cy={cy} r={16} className="hit" />
                <circle cx={cx} cy={cy} r={6} style={{ fill: fam.color }} className="mark" />
                <text x={cx + ldx} y={cy + ldy} textAnchor={anchor} className="pt-label">
                  {c.shortName}
                </text>
              </g>
            )
          })}
        </svg>
        {act && <ChartTip camera={act} left={(sx(act.body.depthWithLens) / CW) * 100} top={(sy(carriedPrice(act)) / CH) * 100} />}
      </div>
      <ul className="legend" aria-label="Legend">
        {FAMILIES.map((f) => (
          <li key={f.id}>
            <span className="dot" style={{ background: familyById[f.id].color }} />
            {f.short}
          </li>
        ))}
        <li>
          <span className="swatch zone-swatch" /> under budget
        </li>
      </ul>
      {unplotted.length > 0 && (
        <p className="muted small">
          Not plotted: {unplotted.map((c) => `${c.maker} ${c.name}`).join(', ')}, which had no used copies for sale at any retailer checked.
        </p>
      )}
    </section>
  )
}

function ChartTip({ camera: c, left, top }) {
  const st = budgetStatus(c)
  return (
    <div className={`tip ${left > 60 ? 'flip' : ''} ${top < 30 ? 'below' : ''}`} style={{ left: `${left}%`, top: `${top}%` }}>
      <strong>
        {c.maker} {c.name}
      </strong>
      <span>
        {c.body.depthWithLens} mm deep · {carriedWeight(c)} g
      </span>
      <span>
        ~{fmtUsd(carriedPrice(c))} used{c.prices.lensOwned ? `, body only (${c.lens.shortName})` : c.prices.lensUsed ? ` with ${c.lens.shortName}` : ''}
      </span>
      <span className={`tip-status ${budgetTone[st]}`}>{budgetLabel[st]}</span>
      <a href={`#${c.id}`}>Details ↓</a>
    </div>
  )
}

// ---- Families --------------------------------------------------------------
function Families() {
  return (
    <section className="card decoder">
      <h2>Six ways to get there</h2>
      <ul className="plain fam-list">
        {FAMILIES.map((f) => (
          <li key={f.id}>
            <span className="dot" style={{ background: familyById[f.id].color }} />
            <strong>{f.name}</strong> — {f.blurb}
          </li>
        ))}
      </ul>
    </section>
  )
}

// ---- Dimension glossary ----------------------------------------------------
function Glossary() {
  const [open, setOpen] = useState(false)
  return (
    <section className="card glossary">
      <button className="disclosure" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <h2>What the dimensions mean and why they matter</h2>
        <span className="chev">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <dl className="dims">
          {DIMENSIONS.map((d) => (
            <div key={d.id}>
              <dt>{d.label}</dt>
              <dd>{d.why}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  )
}

// ---- Controls --------------------------------------------------------------
function Controls({ state, update, count }) {
  const toggleFamily = (id) =>
    update({
      families: state.families.includes(id) ? state.families.filter((f) => f !== id) : [...state.families, id],
    })
  return (
    <div className="controls">
      <div className="seg" role="tablist" aria-label="View">
        <button role="tab" aria-selected={state.view === 'timeline'} className={state.view === 'timeline' ? 'on' : ''} onClick={() => update({ view: 'timeline' })}>
          Timeline
        </button>
        <button role="tab" aria-selected={state.view === 'table'} className={state.view === 'table' ? 'on' : ''} onClick={() => update({ view: 'table' })}>
          Table
        </button>
      </div>
      <div className="chips" aria-label="Filter by family">
        {FAMILIES.map((f) => {
          const on = state.families.length === 0 || state.families.includes(f.id)
          return (
            <button key={f.id} className={`chip ${on ? 'on' : ''}`} onClick={() => toggleFamily(f.id)} style={{ '--chip': familyById[f.id].color }}>
              <span className="dot" />
              {f.short}
            </button>
          )
        })}
        {state.families.length > 0 && (
          <button className="chip clear" onClick={() => update({ families: [] })}>
            all
          </button>
        )}
      </div>
      <div className="toggles">
        <label>
          <input type="checkbox" checked={state.budgetOnly} onChange={(e) => update({ budgetOnly: e.target.checked })} /> Within reach of {fmtUsd(BUDGET)}
        </label>
        <span className="count muted">{count} cameras</span>
      </div>
    </div>
  )
}

// ---- Shared pieces ---------------------------------------------------------
function Chip({ label, value, tone }) {
  return (
    <span className={`spec ${tone || ''}`}>
      <span className="spec-k">{label}</span>
      <span className="spec-v">{value}</span>
    </span>
  )
}

const relTone = { A: 'good', B: 'ok', C: 'warn', D: 'bad' }
const sealingLabel = { none: 'None', splash: 'Splash resistant', ip: 'IP-rated', unknown: 'Not stated' }

function Credit({ img }) {
  return (
    <>
      <a href={img.pageUrl} target="_blank" rel="noreferrer">
        {img.credit}
      </a>
      , {img.license}
    </>
  )
}

function CameraImage({ camera, size }) {
  const img = camera.image
  if (!img) {
    return (
      <div className={`img-missing ${size}`}>
        <span>No freely licensed photo yet.</span>
        {camera.referenceUrl && (
          <a href={camera.referenceUrl} target="_blank" rel="noreferrer">
            Manufacturer page
          </a>
        )}
      </div>
    )
  }
  return (
    <figure className={`camimg ${size}`}>
      <img src={`${BASE}${img.src}`} alt={img.alt} loading="lazy" />
      <figcaption>
        <Credit img={img} />
      </figcaption>
    </figure>
  )
}

// Front and side boxes drawn to scale against the CL's outline. Boxes, not
// silhouettes: the makers publish bounding dimensions, not shapes.
function SizeCompare({ camera: c }) {
  const S = 0.9 // px per mm
  const ref = REFERENCE
  const depth = c.body.depthWithLens ?? c.body.d
  const w = c.body.w * S
  const h = c.body.h * S
  const d = depth * S
  const rw = ref.w * S
  const rh = ref.h * S
  const rd = ref.depthWithLens * S
  const gap = 18
  const sideX = 2 + Math.max(w, rw) + gap
  const W = sideX + Math.max(d, rd) + 2
  const H = Math.max(h, rh) + 4
  const base = H - 2
  const fam = familyById[c.family]
  return (
    <figure className="sizecmp">
      <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} role="img" aria-label={`${c.name} front and side, to scale against the ${ref.shortLabel}`}>
        <rect x={2} y={base - h} width={w} height={h} rx={4} className="sz-body" style={{ '--fam': fam.color }} />
        <rect x={2} y={base - rh} width={rw} height={rh} rx={4} className="sz-ref" />
        <rect x={sideX} y={base - h} width={d} height={h} rx={3} className="sz-body" style={{ '--fam': fam.color }} />
        <rect x={sideX} y={base - rh} width={rd} height={rh} rx={3} className="sz-ref" />
      </svg>
      <figcaption className="muted small">
        Front and side to scale; dashed is the {ref.shortLabel}. {c.body.w}×{c.body.h} mm, {depth} mm deep as carried.
      </figcaption>
    </figure>
  )
}

// ---- Timeline --------------------------------------------------------------
function Timeline({ cameras }) {
  const seen = new Set()
  return (
    <section className="timeline" aria-label="Release timeline">
      {cameras.map((c) => {
        const fam = familyById[c.family]
        const showFamily = !seen.has(fam.id)
        seen.add(fam.id)
        return (
          <React.Fragment key={c.id}>
            {showFamily && (
              <div className="tl-family" style={{ '--fam': fam.color }}>
                <span className="tl-family-dot" />
                <h2 id={`fam-${fam.id}`}>
                  {fam.name} <span className="muted">{fam.years}</span>
                </h2>
              </div>
            )}
            <TimelineEntry camera={c} fam={fam} />
          </React.Fragment>
        )
      })}
    </section>
  )
}

function TimelineEntry({ camera: c, fam }) {
  const age = yearsOld(c.shipped)
  const st = budgetStatus(c)
  return (
    <article className="tl-entry" id={c.id} style={{ '--fam': fam.color }}>
      <div className="tl-rail">
        <span className="tl-dot" />
        <span className="tl-date">{fmtDate(c.shipped)}</span>
        <span className="tl-age muted">{age} yrs old</span>
        <span className="tl-fam">{fam.short}</span>
      </div>
      <div className="card tl-card">
        <div className="tl-top">
          <div className="imgs">
            <CameraImage camera={c} size="lg" />
            <SizeCompare camera={c} />
          </div>
          <div className="tl-head">
            <h3>
              {c.maker} {c.name} <span className={`budget-tag ${budgetTone[st]}`}>{budgetLabel[st]}</span>
            </h3>
            <p className="role">{c.role}</p>
            <p className="summary">{c.summary}</p>
            <div className="specs">
              <Chip label="Sensor" value={`${c.sensor.mp} MP ${c.sensor.type}${c.sensor.mono ? ' mono' : ''}`} />
              <Chip label="Lens" value={c.lens.short} />
              <Chip label="Usable ISO" value={fmtIso(c)} />
              <Chip label="Viewfinder" value={c.viewfinder.short} tone={c.viewfinder.type === 'none' ? 'warn' : undefined} />
              <Chip label="Autofocus" value={c.af.short} />
              <Chip label="Shutter" value={c.shutter.short} />
              <Chip label="Stabilization" value={c.stab.short} />
              <Chip label="Screen" value={c.screen.short} />
              <Chip label="Sealing" value={c.sealing.rating || sealingLabel[c.sealing.level]} tone={c.sealing.level === 'none' ? 'warn' : c.sealing.level === 'unknown' ? undefined : 'good'} />
              <Chip label="Battery" value={c.battery.cipa ? `CIPA ${c.battery.cipa}` : c.battery.model} tone={c.battery.cipa && c.battery.cipa < 250 ? 'warn' : undefined} />
              <Chip label="Size" value={`${carriedWeight(c)} g · ${c.body.depthWithLens} mm deep`} />
              <Chip label="Reliability" value={c.reliability.grade} tone={relTone[c.reliability.grade]} />
            </div>
          </div>
        </div>
        <div className="tl-body">
          <div>
            <h4>In the pocket</h4>
            <p>{c.body.pocket}</p>
            {c.identifiers?.length > 0 && (
              <>
                <h4 className="mt">How to recognize it</h4>
                <ul>
                  {c.identifiers.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div>
            <h4>Reliability history</h4>
            {c.reliability.issues.length === 0 ? (
              <p className="muted">No widely reported failure mode specific to this body.</p>
            ) : (
              <ul>
                {c.reliability.issues.map((it, i) => (
                  <li key={i}>
                    <strong>{it.title}.</strong> {it.detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <PriceBlock camera={c} />
        </div>
        <div className="tl-notes">
          <Note label="Sensor">{c.sensor.note}</Note>
          <Note label="Lens">{c.lens.note}</Note>
          <Note label="ISO">{c.iso.note}</Note>
          <Note label="Autofocus">{c.af.note}</Note>
          <Note label="Viewfinder">{c.viewfinder.note}</Note>
          <Note label="Shutter">{c.shutter.note}</Note>
          <Note label="Stabilization">{c.stab.note}</Note>
          <Note label="Sealing">{c.sealing.note}</Note>
          <Note label="Battery">{c.battery.note}</Note>
          <Note label="Storage">{c.storage.note}</Note>
          <Note label="Firmware">{c.firmware.note}</Note>
        </div>
        <p className="verdict">
          <strong>Verdict.</strong> {c.verdict}
        </p>
      </div>
    </article>
  )
}

function PriceBlock({ camera: c }) {
  const p = c.prices
  return (
    <div>
      <h4>Used price</h4>
      {p.usedTypical != null ? (
        <p className="price">
          <span className="price-typ">{fmtUsd(p.usedTypical)}</span>
          <span className="muted"> typical · {fmtRange(p.usedLow, p.usedHigh)}</span>
        </p>
      ) : p.fallback ? (
        <p className="price">
          <span className="price-typ">~{fmtUsd(p.fallback.typical)}</span>
          <span className="muted"> {fmtRange(p.fallback.low, p.fallback.high)} elsewhere</span>
        </p>
      ) : (
        <p className="price muted">No used stock found</p>
      )}
      {p.lensOwned ? (
        <p className="muted small">The lens is your own Summicron-C, so the body is the whole cost.</p>
      ) : p.lensUsed ? (
        <p className="muted small">
          Plus ~{fmtUsd(p.lensUsed)} for {c.lens.shortName}: about {fmtUsd(carriedPrice(c))} ready to shoot.
        </p>
      ) : null}
      {p.note && <p className="muted small">{p.note}</p>}
      {p.fallback && (
        <p className="muted small">
          Fallback: {p.fallback.detail}{' '}
          <a href={p.fallback.url} target="_blank" rel="noreferrer">
            {p.fallback.source}
          </a>
          .
        </p>
      )}
      {p.newPrice && <p className="muted small">Sold new at {fmtUsd(p.newPrice)}.</p>}
      {c.msrp && <p className="muted small">Launch price {fmtUsd(c.msrp)}.</p>}
      {p.sources.length > 0 && (
        <ul className="src-list">
          {p.sources.map((s, i) => (
            <li key={i}>
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.retailer}
              </a>{' '}
              {typeof s.price === 'number' ? fmtUsd(s.price) : s.price} <span className="muted">{s.grade}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Note({ label, children }) {
  if (!children) return null
  return (
    <p className="note">
      <span className="note-k">{label}</span> {children}
    </p>
  )
}

// ---- Table -----------------------------------------------------------------
const COLUMNS = [
  { id: 'name', label: 'Model', get: (c) => c.name, render: (c) => <ModelCell camera={c} /> },
  { id: 'shipped', label: 'Shipped', get: (c) => c.shipped, render: (c) => `${fmtDate(c.shipped)} · ${yearsOld(c.shipped)}y` },
  { id: 'sensor', label: 'Sensor', get: (c) => c.sensor.mp, render: (c) => `${c.sensor.mp} MP${c.sensor.mono ? ' mono' : ''}${c.family === 'apsc' ? ' APS-C' : ''}` },
  { id: 'lens', label: 'Lens', get: (c) => c.lens.focal, render: (c) => c.lens.short },
  { id: 'iso', label: 'Usable ISO', get: (c) => c.iso.usable ?? -1, render: (c) => (c.iso.usable == null ? '—' : `${c.iso.usable.toLocaleString()} / ${c.iso.ceiling.toLocaleString()}`), title: 'clean / max usable' },
  { id: 'vf', label: 'Finder', get: (c) => c.viewfinder.type, render: (c) => c.viewfinder.short },
  { id: 'af', label: 'AF', get: (c) => c.af.short, render: (c) => c.af.short },
  { id: 'stab', label: 'Stab.', get: (c) => c.stab.short, render: (c) => c.stab.short },
  { id: 'battery', label: 'Battery', get: (c) => c.battery.cipa ?? 0, render: (c) => (c.battery.cipa ? `${c.battery.cipa} shots` : '—'), title: 'CIPA rating' },
  { id: 'depth', label: 'Depth · weight', get: (c) => c.body.depthWithLens, render: (c) => `${c.body.depthWithLens} mm · ${carriedWeight(c)} g`, title: 'Depth and weight as carried, lens included. Sorts by depth.' },
  { id: 'rel', label: 'Reliability', get: (c) => c.reliability.grade, render: (c) => <span className={`grade ${relTone[c.reliability.grade]}`}>{c.reliability.grade}</span> },
  { id: 'price', label: 'Used, ready to shoot', get: (c) => carriedPrice(c) ?? Infinity, render: (c) => <PriceCell camera={c} />, title: 'Typical body price, plus a pancake lens for interchangeable bodies' },
]

function PriceCell({ camera: c }) {
  const typ = carriedPrice(c)
  if (typ == null) return <span className="muted">no stock</span>
  const st = budgetStatus(c)
  const fb = c.prices.usedTypical == null
  return (
    <span className={`pricecell ${fb ? 'fallback' : ''}`}>
      <strong>
        {fb ? '~' : ''}
        {fmtUsd(typ)}
      </strong>
      <span className={`small budget-txt ${budgetTone[st]}`}>{budgetLabel[st]}</span>
    </span>
  )
}

function ModelCell({ camera: c }) {
  const fam = familyById[c.family]
  return (
    <span className="model-cell">
      <span className="dot" style={{ background: fam.color }} />
      <a href={`#${c.id}`} onClick={(e) => e.stopPropagation()}>
        {c.maker === 'Leica' || c.maker === 'Sony' ? c.name : `${c.maker} ${c.name}`}
      </a>
      {c.sensor.mono && <span className="tag">mono</span>}
    </span>
  )
}

function Table({ cameras, sort, dir, onSort }) {
  const col = COLUMNS.find((c) => c.id === sort) || COLUMNS[1]
  const rows = useMemo(() => {
    const arr = [...cameras]
    arr.sort((a, b) => {
      const x = col.get(a)
      const y = col.get(b)
      if (x === Infinity || y === Infinity) return x === y ? 0 : x === Infinity ? 1 : -1
      const r = typeof x === 'number' && typeof y === 'number' ? x - y : String(x).localeCompare(String(y))
      return dir === 'asc' ? r : -r
    })
    return arr
  }, [cameras, col, dir])
  const click = (id) => onSort(id, sort === id && dir === 'asc' ? 'desc' : 'asc')
  return (
    <section className="card table-wrap" aria-label="Comparison table">
      <div className="scroll">
        <table>
          <thead>
            <tr>
              {COLUMNS.map((c) => (
                <th key={c.id} title={c.title} aria-sort={sort === c.id ? (dir === 'asc' ? 'ascending' : 'descending') : 'none'}>
                  <button onClick={() => click(c.id)}>
                    {c.label}
                    {sort === c.id && <span className="sort">{dir === 'asc' ? '▲' : '▼'}</span>}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => (
              <tr key={c.id}>
                {COLUMNS.map((col) => (
                  <td key={col.id}>{col.render(c)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="muted small">
        Usable ISO is the reviewer consensus for "clean" and "still usable with noise reduction", not the max setting. Depth is
        as carried: lens included, retracted or capped. Reliability grades: A no known failure mode on a current platform, B no
        known failure mode but an aging platform, C a real known issue to check for, D a known issue that can total the body.
        Prices are typical used copies at B&amp;H, KEH and Adorama; a tilde marks a price from elsewhere. Click a model name to
        jump to its timeline entry.
      </p>
    </section>
  )
}

// ---- Picks -----------------------------------------------------------------
function Picks() {
  return (
    <section className="card picks">
      <h2>If you want…</h2>
      <ul className="picks-list">
        {PICKS.map((p) => (
          <li key={p.want}>
            <strong>{p.want}</strong> →{' '}
            {p.picks.map((id, i) => {
              const c = CAMERAS.find((x) => x.id === id)
              return (
                <React.Fragment key={id}>
                  {i > 0 && ', '}
                  <a href={`#${id}`}>
                    {c.maker} {c.name}
                  </a>
                </React.Fragment>
              )
            })}
            <span className="muted"> — {p.why}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

// ---- Near misses -----------------------------------------------------------
function NearMisses() {
  return (
    <section className="card near">
      <h2>Close, but not in the running</h2>
      <ul className="plain">
        {NEAR_MISSES.map((n) => (
          <li key={n.name}>
            <strong>{n.name}</strong> <span className="muted">({n.year}, {n.sensor})</span> — {n.why}
            {n.url && (
              <>
                {' '}
                <a href={n.url}>{n.urlLabel || 'More'}</a>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

// ---- Sources ---------------------------------------------------------------
function Sources() {
  return (
    <section className="card sources">
      <h2>Method and sources</h2>
      {META.method.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <ul>
        {META.sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
            {s.note && <span className="muted"> — {s.note}</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}
