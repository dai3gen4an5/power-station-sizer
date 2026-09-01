import type { Metadata } from "next";
import { PowerStationCalculator } from "@/components/calculator/PowerStationCalculator";
import { RvApplianceTable } from "@/components/content/rv/RvApplianceTable";
import { RvCalculationExample } from "@/components/content/rv/RvCalculationExample";
import { RvCapacityClasses } from "@/components/content/rv/RvCapacityClasses";
import { RvDeviceExamples } from "@/components/content/rv/RvDeviceExamples";
import { RvFaq } from "@/components/content/rv/RvFaq";
import { RvHighWattageWarning } from "@/components/content/rv/RvHighWattageWarning";
import { RvHowToUse } from "@/components/content/rv/RvHowToUse";
import { RvSolarRecharge } from "@/components/content/rv/RvSolarRecharge";
import { RvWhatSize } from "@/components/content/rv/RvWhatSize";
import type { Device, DevicePreset } from "@/lib/calculator/types";

const TITLE = "RV Power Station Calculator | Battery Size for RV Camping";
const DESCRIPTION =
  "Calculate what size portable power station you need for an RV, camper, or van. Add your refrigerator, lights, fan, laptop, Starlink, CPAP, and other appliances to estimate daily Wh and battery capacity.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/rv-power-station-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/rv-power-station-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

// Page-specific starting devices — a small set of common RV / van loads, kept
// local to this page per the project's niche-page-config convention. Hours are
// "hours the device runs in a typical day"; the 12V fridge figure reflects
// compressor cycling (equivalent compressor-on time), not rated watts times 24h,
// so a duty-cycle load is not over-counted.
const RV_DEVICES: Device[] = [
  { id: "rv-refrigerator", name: "12V RV refrigerator", watts: 45, hoursPerDay: 12, quantity: 1 },
  { id: "rv-led-lights", name: "LED light bulb", watts: 10, hoursPerDay: 5, quantity: 4 },
  { id: "rv-roof-fan", name: "Roof vent fan", watts: 30, hoursPerDay: 6, quantity: 1 },
];

// Page-specific quick-add presets covering common RV, camper and van appliances.
// Examples only — see the note rendered below the buttons.
const RV_PRESETS: DevicePreset[] = [
  { name: "12V RV refrigerator", watts: 45, hoursPerDay: 12, quantity: 1 },
  { name: "LED light bulb", watts: 10, hoursPerDay: 5, quantity: 1 },
  { name: "Roof vent fan", watts: 30, hoursPerDay: 6, quantity: 1 },
  { name: "Water pump", watts: 50, hoursPerDay: 1, quantity: 1 },
  { name: "Phone charging", watts: 8, hoursPerDay: 3, quantity: 1 },
  { name: "Laptop", watts: 65, hoursPerDay: 4, quantity: 1 },
  { name: "TV (12V)", watts: 40, hoursPerDay: 3, quantity: 1 },
  { name: "CPAP (no humidifier)", watts: 40, hoursPerDay: 8, quantity: 1 },
  { name: "Starlink", watts: 75, hoursPerDay: 8, quantity: 1 },
  { name: "Coffee maker", watts: 1000, hoursPerDay: 0.25, quantity: 1 },
];

const RV_PRESETS_NOTE =
  "Example values for RV, camper and van use only. Actual wattage and daily run time vary by appliance, model, temperature and how you camp. A 12V compressor fridge cycles on and off, so its hours reflect equivalent compressor-on time, not 24 hours. Measure your own gear with a plug-in or inline watt meter where you can.";

export default function RvPowerStationCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">
          RV Power Station Calculator
        </h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Add the appliances you run in an RV, camper or van &mdash; refrigerator, lights, fan,
          laptop, Starlink, CPAP and more &mdash; to estimate your daily watt-hours and the portable
          power station capacity you need.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          Enter the hours each device runs in a typical day, and set{" "}
          <span className="font-medium">Number of days</span> in Backup settings to your trip length.
          Results are planning estimates, not a guarantee.
        </p>
      </section>

      <PowerStationCalculator
        initialDevices={RV_DEVICES}
        initialSettings={{ days: 1 }}
        presets={RV_PRESETS}
        presetsNote={RV_PRESETS_NOTE}
      />

      <RvHowToUse />

      <section className="container-prose section space-y-12">
        <RvWhatSize />
        <RvApplianceTable />
        <RvCapacityClasses />
        <RvDeviceExamples />
        <RvHighWattageWarning />
        <RvSolarRecharge />
        <RvCalculationExample />
        <RvFaq />
      </section>
    </>
  );
}
