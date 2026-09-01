import type { Metadata } from "next";
import { PowerStationCalculator } from "@/components/calculator/PowerStationCalculator";
import { RuntimeAssumptionsNotice } from "@/components/content/runtime/RuntimeAssumptionsNotice";
import { RuntimeCalculationExample } from "@/components/content/runtime/RuntimeCalculationExample";
import { RuntimeDeviceWattage } from "@/components/content/runtime/RuntimeDeviceWattage";
import { RuntimeExampleTable } from "@/components/content/runtime/RuntimeExampleTable";
import { RuntimeExtendRuntime } from "@/components/content/runtime/RuntimeExtendRuntime";
import { RuntimeFaq } from "@/components/content/runtime/RuntimeFaq";
import { RuntimeFormula } from "@/components/content/runtime/RuntimeFormula";
import { RuntimeMultipleDevices } from "@/components/content/runtime/RuntimeMultipleDevices";
import { RuntimeRealWorldLosses } from "@/components/content/runtime/RuntimeRealWorldLosses";
import { RuntimeSizesExplainer } from "@/components/content/runtime/RuntimeSizesExplainer";
import { RuntimeUsableCapacity } from "@/components/content/runtime/RuntimeUsableCapacity";
import type { Device, DevicePreset } from "@/lib/calculator/types";

const TITLE = "Power Station Runtime Calculator - How Long Will It Run My Device?";
const DESCRIPTION =
  "Estimate how long a power station will run your device from its capacity in Wh, the device wattage, inverter efficiency, and the battery reserve you keep.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/power-station-runtime-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/power-station-runtime-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

// Page-specific starting device — kept local to this page rather than the
// shared calculator engine, per the project's niche-page-config convention.
// Hours/day is 24 so the built-in runtime estimator reports continuous runtime
// for the entered wattage.
const RUNTIME_DEVICE: Device = {
  id: "runtime-device",
  name: "Device",
  watts: 60,
  hoursPerDay: 24,
  quantity: 1,
};

// Page-specific quick-add presets, all set to continuous use so the runtime
// estimate answers "how long until this drains the battery?". These are
// examples, not universal specs — see the disclaimer rendered below the buttons.
const RUNTIME_PRESETS: DevicePreset[] = [
  { name: "Wi-Fi router + modem", watts: 12, hoursPerDay: 24, quantity: 1 },
  { name: "CPAP (no humidifier)", watts: 40, hoursPerDay: 24, quantity: 1 },
  { name: "Portable 12V fridge", watts: 45, hoursPerDay: 24, quantity: 1 },
  { name: "Mini fridge", watts: 55, hoursPerDay: 24, quantity: 1 },
  { name: "Laptop", watts: 65, hoursPerDay: 24, quantity: 1 },
  { name: "55-inch TV", watts: 90, hoursPerDay: 24, quantity: 1 },
];

const RUNTIME_PRESETS_NOTE =
  "Example wattages for continuous-use estimates only — actual draw varies by model, settings, and conditions. Measure your device with a plug-in watt meter for the most accurate figure.";

export default function PowerStationRuntimeCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">
          Power Station Runtime Calculator
        </h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Estimate how long a power station will run your device from its capacity in watt-hours, the
          device&apos;s wattage, inverter efficiency, and the battery reserve you want to keep.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          Enter your device and settings below, then pick a power station size in the runtime estimator
          to see the approximate hours it would last.
        </p>
      </section>

      <PowerStationCalculator
        initialDevices={[RUNTIME_DEVICE]}
        initialSettings={{ days: 1 }}
        presets={RUNTIME_PRESETS}
        presetsNote={RUNTIME_PRESETS_NOTE}
      />

      <RuntimeAssumptionsNotice />
      <RuntimeCalculationExample />

      <section className="container-prose section space-y-12">
        <RuntimeFormula />
        <RuntimeRealWorldLosses />
        <RuntimeUsableCapacity />
        <RuntimeDeviceWattage />
        <RuntimeExampleTable />
        <RuntimeSizesExplainer />
        <RuntimeMultipleDevices />
        <RuntimeExtendRuntime />
        <RuntimeFaq />
      </section>
    </>
  );
}
