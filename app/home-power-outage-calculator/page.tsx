import type { Metadata } from "next";
import { PowerStationCalculator } from "@/components/calculator/PowerStationCalculator";
import { Outage1000Vs2000 } from "@/components/content/outage/Outage1000Vs2000";
import { OutageAssumptionsNotice } from "@/components/content/outage/OutageAssumptionsNotice";
import { OutageCalculationExample } from "@/components/content/outage/OutageCalculationExample";
import { OutageDurationGuide } from "@/components/content/outage/OutageDurationGuide";
import { OutageExampleTable } from "@/components/content/outage/OutageExampleTable";
import { OutageFaq } from "@/components/content/outage/OutageFaq";
import { OutageFridgeRuntime } from "@/components/content/outage/OutageFridgeRuntime";
import { OutagePriorityAppliances } from "@/components/content/outage/OutagePriorityAppliances";
import { OutageRuntimeVariability } from "@/components/content/outage/OutageRuntimeVariability";
import { OutageSolarRecharge } from "@/components/content/outage/OutageSolarRecharge";
import { OutageWhatSize } from "@/components/content/outage/OutageWhatSize";
import type { Device, DevicePreset } from "@/lib/calculator/types";

const TITLE = "Home Power Outage Calculator | Power Station Backup Size";
const DESCRIPTION =
  "Calculate how large a portable power station you need for a home power outage. Add your refrigerator, Wi-Fi, lights, CPAP, phones and other essentials to estimate backup battery capacity and runtime.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/home-power-outage-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/home-power-outage-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

// Page-specific starting devices — a small set of common outage essentials, kept
// local to this page per the project's niche-page-config convention. Hours are
// "hours the device runs during the outage"; the refrigerator figure reflects
// compressor cycling (about 8 equivalent hours per 24-hour day), not continuous
// running, so a cycling load is not over-counted as rated watts times 24 hours.
const OUTAGE_DEVICES: Device[] = [
  { id: "outage-refrigerator", name: "Refrigerator", watts: 150, hoursPerDay: 8, quantity: 1 },
  { id: "outage-wifi-router", name: "Wi-Fi router + modem", watts: 12, hoursPerDay: 24, quantity: 1 },
  { id: "outage-led-lights", name: "LED light bulb", watts: 10, hoursPerDay: 5, quantity: 4 },
];

// Page-specific quick-add presets covering the essentials most people back up in
// an outage. Examples only — see the note rendered below the buttons.
const OUTAGE_PRESETS: DevicePreset[] = [
  { name: "Refrigerator", watts: 150, hoursPerDay: 8, quantity: 1 },
  { name: "Wi-Fi router + modem", watts: 12, hoursPerDay: 24, quantity: 1 },
  { name: "LED light bulb", watts: 10, hoursPerDay: 5, quantity: 1 },
  { name: "Phone charging", watts: 8, hoursPerDay: 3, quantity: 1 },
  { name: "Laptop", watts: 65, hoursPerDay: 4, quantity: 1 },
  { name: "TV", watts: 100, hoursPerDay: 4, quantity: 1 },
  { name: "Box fan", watts: 40, hoursPerDay: 8, quantity: 1 },
  { name: "CPAP (no humidifier)", watts: 40, hoursPerDay: 8, quantity: 1 },
];

const OUTAGE_PRESETS_NOTE =
  "Example values for outage planning only. Actual wattage and how long you run each device during an outage vary by model and situation. Refrigerator hours reflect compressor cycling, not 24 hours of continuous running.";

export default function HomePowerOutageCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">
          Home Power Outage Calculator
        </h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Add the essentials you want to keep running during a blackout &mdash; refrigerator, Wi-Fi,
          lights, CPAP, phones and more &mdash; to estimate the portable power station capacity and
          runtime you need.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          Enter the hours you expect each device to run during the outage, and set{" "}
          <span className="font-medium">Number of days</span> in Backup settings to how long you want
          to cover. Results are planning estimates, not a guarantee.
        </p>
      </section>

      <PowerStationCalculator
        initialDevices={OUTAGE_DEVICES}
        initialSettings={{ days: 1 }}
        presets={OUTAGE_PRESETS}
        presetsNote={OUTAGE_PRESETS_NOTE}
      />

      <OutageAssumptionsNotice />
      <OutageCalculationExample />

      <section className="container-prose section space-y-12">
        <OutageWhatSize />
        <OutageDurationGuide />
        <OutagePriorityAppliances />
        <OutageFridgeRuntime />
        <Outage1000Vs2000 />
        <OutageRuntimeVariability />
        <OutageSolarRecharge />
        <OutageExampleTable />
        <OutageFaq />
      </section>
    </>
  );
}
