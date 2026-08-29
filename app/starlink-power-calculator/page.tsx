import type { Metadata } from "next";
import { PowerStationCalculator } from "@/components/calculator/PowerStationCalculator";
import { StarlinkAcVsDc } from "@/components/content/starlink/StarlinkAcVsDc";
import { StarlinkCalculationExample } from "@/components/content/starlink/StarlinkCalculationExample";
import { StarlinkCamping } from "@/components/content/starlink/StarlinkCamping";
import { StarlinkDailyWh } from "@/components/content/starlink/StarlinkDailyWh";
import { StarlinkExampleTable } from "@/components/content/starlink/StarlinkExampleTable";
import { StarlinkFaq } from "@/components/content/starlink/StarlinkFaq";
import { StarlinkOutageUse } from "@/components/content/starlink/StarlinkOutageUse";
import { StarlinkPlusOtherDevices } from "@/components/content/starlink/StarlinkPlusOtherDevices";
import { StarlinkRuntimeExplainer } from "@/components/content/starlink/StarlinkRuntimeExplainer";
import { StarlinkRvVanUse } from "@/components/content/starlink/StarlinkRvVanUse";
import { StarlinkSizingGuide } from "@/components/content/starlink/StarlinkSizingGuide";
import { StarlinkSolarCharging } from "@/components/content/starlink/StarlinkSolarCharging";
import { StarlinkWattUsage } from "@/components/content/starlink/StarlinkWattUsage";
import type { Device, DevicePreset } from "@/lib/calculator/types";

const TITLE = "Starlink Power Station Calculator - Battery Size & Runtime";
const DESCRIPTION =
  "Estimate the battery capacity and power station size needed to run Starlink while camping, traveling, off-grid, or during an outage.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/starlink-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/starlink-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

// Page-specific starting device — kept local to this page rather than the
// shared calculator engine, per the project's niche-page-config convention.
const STARLINK_DEVICE: Device = {
  id: "starlink-kit",
  name: "Starlink",
  watts: 75,
  hoursPerDay: 8,
  quantity: 1,
};

// Page-specific quick-add presets. These are examples, not universal specs —
// see the disclaimer rendered below the buttons.
const STARLINK_PRESETS: DevicePreset[] = [
  { name: "Starlink Light Use", watts: 50, hoursPerDay: 8, quantity: 1 },
  { name: "Starlink Typical Example", watts: 75, hoursPerDay: 8, quantity: 1 },
  { name: "Starlink Higher Draw Example", watts: 100, hoursPerDay: 8, quantity: 1 },
  { name: "Starlink Full Day", watts: 75, hoursPerDay: 24, quantity: 1 },
];

const STARLINK_PRESETS_NOTE =
  "Example power values only — actual Starlink consumption varies by hardware, weather, usage, temperature, and power setup.";

export default function StarlinkPowerCalculatorPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-4 pt-10 text-center sm:px-6 sm:pt-14">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
          Starlink Power Station Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-ink/65 sm:text-lg">
          Estimate the battery capacity you need to run Starlink while camping, traveling, during an
          outage, or off-grid.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-ink/50">
          Starlink power use varies by hardware version, weather, activity, temperature, and whether you
          power it through AC or a DC conversion setup.
        </p>
      </section>

      <PowerStationCalculator
        initialDevices={[STARLINK_DEVICE]}
        initialSettings={{ days: 1 }}
        presets={STARLINK_PRESETS}
        presetsNote={STARLINK_PRESETS_NOTE}
      />

      <StarlinkCalculationExample />

      <section className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6">
        <StarlinkWattUsage />
        <StarlinkDailyWh />
        <StarlinkSizingGuide />
        <StarlinkRuntimeExplainer />
        <StarlinkCamping />
        <StarlinkRvVanUse />
        <StarlinkOutageUse />
        <StarlinkAcVsDc />
        <StarlinkPlusOtherDevices />
        <StarlinkSolarCharging />
        <StarlinkExampleTable />
        <StarlinkFaq />
      </section>
    </>
  );
}
