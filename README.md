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
  InverterEfficiencyInfo.tsx, BatteryReserveInfo.tsx, Faq.tsx

components/layout/
  SiteHeader.tsx, SiteFooter.tsx (rendered once, in app/layout.tsx)
```

All calculation logic lives in `lib/calculator/`, independent of any UI component, so it can be unit
tested and reused anywhere.

## Adding a new device-specific landing page

`PowerStationCalculator` accepts an optional `initialDevices` prop, so a focused page can pre-fill the
calculator with one relevant device instead of the default refrigerator. For example, a future
`app/cpap-power-calculator/page.tsx` could look like:

```tsx
import { PowerStationCalculator } from "@/components/calculator/PowerStationCalculator";

const cpapDevice = {
  id: "cpap",
  name: "CPAP Machine",
  watts: 40,
  hoursPerDay: 8,
  quantity: 1,
};

export default function CpapCalculatorPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-4 pt-10 text-center sm:px-6 sm:pt-14">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
          What Size Power Station Do I Need for a CPAP?
        </h1>
      </section>
      <PowerStationCalculator initialDevices={[cpapDevice]} />
    </>
  );
}
```

Repeat this pattern for `/refrigerator-power-calculator`, `/starlink-power-calculator`,
`/power-station-runtime-calculator`, and `/solar-charge-time-calculator` — each page supplies its own
copy, metadata, and FAQ content, while reusing the same calculator engine and UI.

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
