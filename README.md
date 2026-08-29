# Power Station Sizer

A free, client-side calculator that recommends what size power station (in watt-hours) someone needs,
based on the devices they want to run.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Production URL configuration

Every sitemap entry, `robots.txt` directive, `metadataBase`, canonical URL, OpenGraph URL, and
structured-data URL in this project is derived from a single source of truth: `SITE_URL`, exported from
`lib/site.ts`. Nothing else in the codebase hard-codes a production hostname — that's what caused the
sitemap/canonical mismatch this setup replaces.

`SITE_URL` resolves in this order:

1. **Custom domain** — set the `NEXT_PUBLIC_SITE_URL` environment variable in the Vercel dashboard:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```
   Once set, all sitemap, robots, canonical, OpenGraph, and structured-data URLs update automatically —
   no code changes needed.
2. **Vercel preview/production deployments** — if `NEXT_PUBLIC_SITE_URL` isn't set, Vercel's own
   `VERCEL_PROJECT_PRODUCTION_URL` environment variable is used automatically (Vercel sets this for you;
   it has no `https://` prefix, so `lib/site.ts` adds one).
3. **Local development** — if neither is set, `http://localhost:3000` is used automatically.

To change the production domain, set (or update) `NEXT_PUBLIC_SITE_URL` in Vercel's project settings —
never edit a URL string directly in the source.

## Architecture

Everything runs client-side — there is no API or backend.

```
lib/site.ts
  SITE_URL           Single source of truth for the production URL (see above)
  absoluteUrl(path)  Resolves a path against SITE_URL

lib/calculator/
  types.ts          Device, CalculatorSettings, CalculatorResults, DevicePreset types
  constants.ts       Default settings, default device, size classes
  presets.ts         Quick-add device presets (Refrigerator, CPAP, Starlink, ...)
  calculations.ts    Pure functions: getDeviceDailyWh, calculateResults, estimateRuntimeHours, etc.

lib/utils/
  format.ts          formatWh(), formatHours()

components/calculator/
  PowerStationCalculator.tsx   Main stateful component (owns devices + settings state)
  DeviceList.tsx / DeviceRow.tsx
  PresetButtons.tsx
  SettingsPanel.tsx
  ResultsPanel.tsx             The LCD-style result readout + runtime estimator

components/content/
  HowItWorks.tsx, WattHoursExplainer.tsx, WattsVsWattHours.tsx,
  InverterEfficiencyInfo.tsx, BatteryReserveInfo.tsx
  FaqSection.tsx     Generic FAQ accordion + FAQPage JSON-LD, shared by every page's FAQ
  Faq.tsx            Homepage FAQ content, wraps FaqSection
  RelatedCalculators.tsx   "Specialized calculators" links, rendered on the homepage —
                           add an entry here whenever a new niche page ships

components/content/cpap/
  CpapPowerUsage.tsx, CpapBatterySizing.tsx, CpapWithoutHumidifier.tsx,
  CpapWithHumidifier.tsx, CpapCampingPower.tsx, CpapOutageBackup.tsx,
  CpapCalculationExample.tsx, CpapExampleTable.tsx, CpapFaq.tsx
  Content for /cpap-power-calculator.

components/content/refrigerator/
  RefrigeratorWattUsage.tsx, RefrigeratorCyclingExplainer.tsx,
  RefrigeratorSurgeVsRunning.tsx, RefrigeratorDailyWh.tsx,
  RefrigeratorEnergyLabelMethod.tsx, RefrigeratorSizingGuide.tsx,
  RefrigeratorRuntimeExplainer.tsx, RefrigeratorOutageUse.tsx,
  RefrigeratorVsFreezer.tsx, RefrigeratorSolarCharging.tsx,
  RefrigeratorSurgeNotice.tsx, RefrigeratorCalculationExample.tsx,
  RefrigeratorExampleTable.tsx, RefrigeratorFaq.tsx
  Content for /refrigerator-power-calculator.

components/content/starlink/
  StarlinkWattUsage.tsx, StarlinkDailyWh.tsx, StarlinkSizingGuide.tsx,
  StarlinkRuntimeExplainer.tsx, StarlinkCamping.tsx, StarlinkRvVanUse.tsx,
  StarlinkOutageUse.tsx, StarlinkAcVsDc.tsx, StarlinkPlusOtherDevices.tsx,
  StarlinkSolarCharging.tsx, StarlinkCalculationExample.tsx,
  StarlinkExampleTable.tsx, StarlinkFaq.tsx
  Content for /starlink-power-calculator.

Numbers shown in every cpap/, refrigerator/, and starlink/ component are computed with the real
functions from lib/calculator/calculations.ts, never hand-typed, so they can't drift out of sync with
the calculator itself.

components/layout/
  SiteHeader.tsx, SiteFooter.tsx (rendered once, in app/layout.tsx)
```

All calculation logic lives in `lib/calculator/`, independent of any UI component, so it can be unit
tested and reused anywhere.

## Adding a new device-specific landing page

`/cpap-power-calculator`, `/refrigerator-power-calculator`, and `/starlink-power-calculator` are the
reference implementations of this pattern — copy their structure for future niche pages such as
`/power-station-runtime-calculator` and `/solar-charge-time-calculator`.

`PowerStationCalculator` accepts optional props so a niche page can customize it without forking any
calculator logic:

- `initialDevices?: Device[]` — pre-fill the device list (e.g. a CPAP machine instead of a refrigerator).
- `initialSettings?: Partial<CalculatorSettings>` — override `days`, `inverterEfficiency`, and/or
  `batteryReserve`; any field left out falls back to `DEFAULT_SETTINGS`.
- `presets?: DevicePreset[]` — swap in page-specific quick-add buttons (e.g. CPAP power profiles, or
  refrigerator/freezer size profiles) instead of the shared common-device list.
- `presetsNote?: string` — override the disclaimer shown below the preset buttons.

None of these props touch `lib/calculator/calculations.ts` — the math, size-class rounding, and runtime
estimate stay identical everywhere. Keep page-specific device lists and presets defined locally in the
page file (as `app/cpap-power-calculator/page.tsx` and `app/refrigerator-power-calculator/page.tsx` do),
not inside `lib/calculator/`, so niche configuration never leaks into the shared engine.

For a page-specific FAQ, reuse `components/content/FaqSection.tsx` rather than duplicating the accordion
markup or JSON-LD shape — pass it your own `items` array and the page's `path` (see
`components/content/cpap/CpapFaq.tsx` or `components/content/refrigerator/RefrigeratorFaq.tsx`).

When a new niche page ships, also add it to `RELATED_CALCULATORS` in
`components/content/RelatedCalculators.tsx` (shown on the homepage) and to `app/sitemap.ts`.

```tsx
import { PowerStationCalculator } from "@/components/calculator/PowerStationCalculator";

const cpapDevice = { id: "cpap-machine", name: "CPAP Machine", watts: 40, hoursPerDay: 8, quantity: 1 };

export default function CpapCalculatorPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-4 pt-10 text-center sm:px-6 sm:pt-14">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
          CPAP Power Station Calculator
        </h1>
      </section>
      <PowerStationCalculator initialDevices={[cpapDevice]} initialSettings={{ days: 1 }} />
    </>
  );
}
```

## Monetization (not yet implemented)

No affiliate links, product recommendations, reviews, or user counts have been added — the brief asked
for none to be faked. When real affiliate products are available, a natural place to add a "Shop
recommended power stations" call-to-action is directly below the LCD result panel in
`components/calculator/ResultsPanel.tsx`, filtered by `results.recommendedSizeClass`.

## Notes on this environment

This project's source was authored and reviewed in a sandbox without network access, so `npm install`,
`next build`, and `next lint` could not be executed here. The pure calculation logic in `lib/calculator/`
was independently verified with `tsx` and type-checked with `tsc --strict`. Run `npm install && npm run
lint && npm run build` locally to do a full Next.js build/lint pass.
