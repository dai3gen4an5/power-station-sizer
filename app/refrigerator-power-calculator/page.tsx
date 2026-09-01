import type { Metadata } from "next";
import { PowerStationCalculator } from "@/components/calculator/PowerStationCalculator";
import { RefrigeratorCalculationExample } from "@/components/content/refrigerator/RefrigeratorCalculationExample";
import { RefrigeratorCyclingExplainer } from "@/components/content/refrigerator/RefrigeratorCyclingExplainer";
import { RefrigeratorDailyWh } from "@/components/content/refrigerator/RefrigeratorDailyWh";
import { RefrigeratorEnergyLabelMethod } from "@/components/content/refrigerator/RefrigeratorEnergyLabelMethod";
import { RefrigeratorExampleTable } from "@/components/content/refrigerator/RefrigeratorExampleTable";
import { RefrigeratorFaq } from "@/components/content/refrigerator/RefrigeratorFaq";
import { RefrigeratorOutageUse } from "@/components/content/refrigerator/RefrigeratorOutageUse";
import { RefrigeratorRuntimeExplainer } from "@/components/content/refrigerator/RefrigeratorRuntimeExplainer";
import { RefrigeratorSizingGuide } from "@/components/content/refrigerator/RefrigeratorSizingGuide";
import { RefrigeratorSolarCharging } from "@/components/content/refrigerator/RefrigeratorSolarCharging";
import { RefrigeratorSurgeNotice } from "@/components/content/refrigerator/RefrigeratorSurgeNotice";
import { RefrigeratorSurgeVsRunning } from "@/components/content/refrigerator/RefrigeratorSurgeVsRunning";
import { RefrigeratorVsFreezer } from "@/components/content/refrigerator/RefrigeratorVsFreezer";
import { RefrigeratorWattUsage } from "@/components/content/refrigerator/RefrigeratorWattUsage";
import type { Device, DevicePreset } from "@/lib/calculator/types";

const TITLE = "Refrigerator Power Station Calculator - Battery Size & Runtime";
const DESCRIPTION =
  "Estimate the battery capacity and power station size needed to run a refrigerator during an outage, camping trip, or off-grid use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/refrigerator-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/refrigerator-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

// Page-specific starting device — kept local to this page rather than the
// shared calculator engine, per the project's niche-page-config convention.
const REFRIGERATOR_DEVICE: Device = {
  id: "refrigerator-appliance",
  name: "Refrigerator",
  watts: 150,
  hoursPerDay: 8,
  quantity: 1,
};

// Page-specific quick-add presets. These are examples, not universal specs —
// see the disclaimer rendered below the buttons.
const REFRIGERATOR_PRESETS: DevicePreset[] = [
  { name: "Mini Fridge", watts: 80, hoursPerDay: 8, quantity: 1 },
  { name: "Standard Refrigerator", watts: 150, hoursPerDay: 8, quantity: 1 },
  { name: "Large Refrigerator", watts: 200, hoursPerDay: 8, quantity: 1 },
  { name: "Chest Freezer", watts: 120, hoursPerDay: 8, quantity: 1 },
];

const REFRIGERATOR_PRESETS_NOTE =
  "Example values only — actual running wattage, duty cycle, and startup surge vary by appliance, temperature, age, and usage.";

export default function RefrigeratorPowerCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">
          Refrigerator Power Station Calculator
        </h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Estimate how much battery capacity you need to keep a refrigerator running during a power
          outage, camping trip, or off-grid use.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          Refrigerators cycle on and off. Enter approximate compressor runtime rather than assuming the
          refrigerator draws its running wattage 24 hours a day.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted/80">
          Startup surge power can be much higher than normal running watts, so power station inverter
          output matters in addition to battery capacity.
        </p>
      </section>

      <PowerStationCalculator
        initialDevices={[REFRIGERATOR_DEVICE]}
        initialSettings={{ days: 1 }}
        presets={REFRIGERATOR_PRESETS}
        presetsNote={REFRIGERATOR_PRESETS_NOTE}
      />

      <RefrigeratorSurgeNotice />
      <RefrigeratorCalculationExample />

      <section className="container-prose section space-y-12">
        <RefrigeratorWattUsage />
        <RefrigeratorCyclingExplainer />
        <RefrigeratorSurgeVsRunning />
        <RefrigeratorDailyWh />
        <RefrigeratorEnergyLabelMethod />
        <RefrigeratorSizingGuide />
        <RefrigeratorRuntimeExplainer />
        <RefrigeratorOutageUse />
        <RefrigeratorVsFreezer />
        <RefrigeratorSolarCharging />
        <RefrigeratorExampleTable />
        <RefrigeratorFaq />
      </section>
    </>
  );
}
