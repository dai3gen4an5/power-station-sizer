# DESIGN.md — Power Station Sizer

The visual system for Power Station Sizer. New calculator pages and components
should reuse the tokens and classes below so the site stays consistent.

## Concept

A **polished technical instrument**, not a generic SaaS marketing site.

- **Warm technical canvas** (`paper` / `canvas`) — an off-white ground with a
  barely-there dot grid and a faint teal wash near the top, so white cards lift
  off the page without any heavy gradient.
- **Clean white cards** (`surface`) for inputs, content, and recommendations.
- **Graphite hardware surfaces** (`bezel` / `hardware`) for the signature LCD
  result panel — a stylised power-station readout with a segmented charge gauge
  and status LEDs.
- **One accent**: teal, modelled on a charge-indicator LED (`brand`, plus the
  brighter `led` for glowing gauge segments and status dots). Categories are
  distinguished by small mono labels, never by adding more colours.

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

1. **Hero** — `.eyebrow` → `.h1` → `.lede` → optional context line. Centered on
   calculator pages; two-column on the homepage with a deterministic
   `HeroExampleReadout` (real calculator output, `aria-hidden`).
2. **Calculator** — two columns: white input cards on the left (numbered
   workflow, `.field` inputs, `.chip` presets, "Advanced assumptions" for
   settings); the sticky hardware `ResultsPanel` on the right.
3. **Recommendations** — `ProductRecommendations`, same card system; neutral
   panels for the no-match / output-unconfirmed / escalated states.
4. **Content** — `.container-prose .section`, `.h2` headings, prose at
   `text-ink/75`; tables scroll inside an `overflow-x-auto` container.
5. **FAQ** — `FaqSection` accordion.
6. **Related calculators** — `.card-interactive` grid with a mono category label.

## Do

- Reuse the classes above; add a token before a one-off value.
- Keep the LCD `ResultsPanel` as the visual anchor — every page leads to it.
- Label categories with a mono kicker or an aria-hidden line icon.
- Test at 375 / 390 / 768 / 1024 / 1440; wide content scrolls in its own box.

## Don't

- Add a second accent colour, neon, cyberpunk, or a full-page gradient.
- Use stock photos, AI battery imagery, emoji, or an icon-only control.
- Pull in an animation / carousel / chart / icon-font library.
- Touch calculator math, recommendation logic, SEO copy, canonical, JSON-LD,
  or the affiliate URLs for a visual change.
