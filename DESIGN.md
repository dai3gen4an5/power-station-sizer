# DESIGN.md — Power Station Sizer

The visual system for Power Station Sizer. New calculator pages and components
should reuse the tokens and classes below so the site stays consistent.

## Concept

A **polished consumer product-selection tool** — a confident, spacious sizing
calculator that leads into a product comparison, not a generic SaaS marketing
site and not an engineering/admin form.

The current visual source of truth is `mock1.png`: a compact photographic
consumer-electronics hero followed by a light two-column calculator (a **"Your power needs summary"**
metric-tile card + a clean **"Your devices"** table), a **"Popular calculators"**
shortcut strip, then the product comparison. Match its composition, whitespace,
proportions, typography scale, card sizing, radii, borders, input styling, and
green-accent usage.

- **Warm light canvas** (`paper` / `canvas`) — an off-white ground with a
  barely-there dot grid and a faint accent wash near the top, so white cards
  lift off the page without any heavy gradient.
- **Clean white cards** (`surface` / `feature-card`) for the hero preview,
  inputs, results, shortcuts, and recommendations. Result metrics live in
  `rounded-xl` tiles with a soft circular icon chip (`bg-brand-50` / `bg-amber-50`).
- **One accent**: green (`brand`, plus the brighter `led` for status dots).
  Categories are distinguished by small labels, never by adding more colours.
- **Graphite hardware surfaces** (`bezel` / `hardware`, `.panel-hardware` /
  `.panel-screen`) are now an **optional** secondary treatment, not required on
  any page. The former mandatory LCD `ResultsPanel` anchor is retired — the
  light summary card is the anchor.

Typography (unchanged, three roles):

| Font           | Role                                            |
| -------------- | ----------------------------------------------- |
| Space Grotesk  | display — hero and section headings (`.h1`/`.h2`/`.h3`) |
| Inter          | body and forms                                  |
| IBM Plex Mono  | numeric readouts — Wh / W / runtime, eyebrows   |

## Color tokens (`tailwind.config.ts`)

- Surfaces / text: `ink`, `muted`, `paper` (= `canvas`), `surface`,
  `surface-muted`, `line`, `hairline`, `line-strong`.
- Hardware: `bezel`, `hardware`, `hardware-edge`, `screen`, `screen-edge`,
  `screenInk`, `led`.
- Accent: `brand` with a `50`–`900` scale (`brand-700` is the readable link/label
  shade on white).

Never define a one-off hex in a component — extend the config instead.

## Radius / shadow / motion

- Radius: `rounded-control` (inputs, chips), `rounded-card` (content cards),
  `rounded-feature` (hero cards). The LCD panel keeps its bespoke `28px`.
- Shadow: `shadow-card` (resting), `shadow-raised` (hover / lifted),
  `shadow-hardware` (the bezel).
- Motion: hover lifts of `-translate-y-0.5` and 200ms color transitions only. No
  libraries, no scroll-jacking. A `prefers-reduced-motion` block in
  `globals.css` neutralises animation and smooth scroll.

## Component classes (`globals.css` → `@layer components`)

Layout: `.container-page` (max-w-5xl), `.container-wide` (max-w-6xl),
`.container-prose` (max-w-3xl), `.section` / `.section-tight` (vertical rhythm).

Type: `.eyebrow` (mono uppercase kicker), `.h1`, `.h2`, `.h3`, `.lede`.

Cards: `.card` + `.card-pad`, `.card-interactive` (hover-lift link card),
`.feature-card`, `.panel-note` (neutral recessed note).

Buttons: `.btn-primary`, `.btn-secondary`, `.btn-ghost`, plus `.btn-lg`.

Forms: `.field`, `.field-label`, `.field-hint`, `.chip`.

Hardware: `.panel-hardware` (bezel), `.panel-screen` (LCD screen).

## Page anatomy

1. **Hero** — a rounded-full pill kicker → a large `font-display` headline (up to
   ~`text-6xl`, one accent-coloured word with an underline swoosh) → a `text-lg`
   grey lede → one solid `.btn-primary .btn-lg` CTA → a three-up trust row (small
   round outline icon + bold label + grey sub). Two-column on the homepage with a
   original, unbranded outdoor product photograph. A white fade protects copy
   contrast while the product-use context remains visible.
2. **Calculator** — light two-column: the **`ResultsPanel`** "Your power needs
   summary" card (a 2×2 grid of `rounded-xl` metric tiles — Daily usage,
   Recommended capacity in green, Estimated runtime, Solar recharge time — plus a
   green check status line) and a **`DeviceList`** "Your devices" table (ghost
   cell inputs that outline on focus, `Device / Power / Usage / Qty / Daily Wh`,
   a green `Total … / day`). `.chip` presets and a collapsed `<details>` "Backup
   assumptions" below. Numeric inputs use `NumberField` (string-buffer, commit on
   blur/Enter) — never bare `<input type="number">`.
3. **Popular calculators** — homepage only: a `feature-card` with a row of
   `.card-interactive` shortcut pills.
4. **Recommendations** — `ProductRecommendations` comparison grid, same card
   system; neutral panels for the no-match / output-unconfirmed / escalated
   states. No fabricated price / rating / photo / "Best".
5. **Content** — `.container-prose .section`, `.h2` headings, prose at
   `text-ink/75`; tables scroll inside an `overflow-x-auto` container.
6. **FAQ** — `FaqSection` accordion.
7. **Related calculators** — `.card-interactive` grid with a small category label.

## Do

- Reuse the classes above; add a token before a one-off value.
- Lead every calculator page to the light "Your power needs summary" card.
- Keep large, readable result numbers with plain labels; recommended capacity is
  the strongest, and shown big only once.
- Label categories with a small kicker or an aria-hidden line icon.
- Test at 375 / 390 / 768 / 1024 / 1440; wide content scrolls in its own box.

## Don't

- Add a second accent colour, neon, cyberpunk, or a full-page gradient.
- Use unlicensed stock photography, emoji, or an icon-only control that has no
  accessible label.
- Show the recommended-capacity figure large in two places at once.
- Pull in an animation / carousel / chart / icon-font library.
- Touch calculator math, recommendation logic, SEO copy, canonical, JSON-LD,
  or the affiliate URLs for a visual change.
