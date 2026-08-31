import type { Metadata } from "next";
import { PowerStationCalculator } from "@/components/calculator/PowerStationCalculator";
import { CampingCalculationExample } from "@/components/content/camping/CampingCalculationExample";
import { CampingCapacityClasses } from "@/components/content/camping/CampingCapacityClasses";
import { CampingDeviceExamples } from "@/components/content/camping/CampingDeviceExamples";
import { CampingFaq } from "@/components/content/camping/CampingFaq";
import { CampingFridgeExample } from "@/components/content/camping/CampingFridgeExample";
import { CampingGearTable } from "@/components/content/camping/CampingGearTable";
import { CampingHighWattageWarning } from "@/components/content/camping/CampingHighWattageWarning";
import { CampingHowToUse } from "@/components/content/camping/CampingHowToUse";
import { CampingSolarRecharge } from "@/components/content/camping/CampingSolarRecharge";
import { CampingTripLength } from "@/components/content/camping/CampingTripLength";
import { CampingWhatSize } from "@/components/content/camping/CampingWhatSize";
import type { Device, DevicePreset } from "@/lib/calculator/types";

const TITLE = "Camping Power Station Calculator | Battery Size for Camping";
const DESCRIPTION =
  "Calculate what size portable power station you need for camping. Add a portable fridge, lights, phones, laptop, CPAP, Starlink, fan, and other gear to estimate daily Wh and battery capacity.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/camping-power-station-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/camping-power-station-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

// Page-specific starting devices — a small set of packable camping gear, kept
// local to this page per the project's niche-page-config convention. Hours are
// "hours run in a typical day at camp"; the fridge / cooler figure reflects
// compressor cycling (equivalent compressor-on time), not rated watts times
// 24 hours, so a duty-cycle load is not over-counted.
const CAMPING_DEVICES: Device[] = [
  { id: "camping-fridge", name: "Portable fridge / cooler", watts: 45, hoursPerDay: 10, quantity: 1 },
  { id: "camping-light", name: "LED camp light", watts: 5, hoursPerDay: 5, quantity: 2 },
  { id: "camping-phone", name: "Phone charging", watts: 8, hoursPerDay: 3, quantity: 2 },
];

// Page-specific quick-add presets for tent, car and weekend camping gear.
// Examples only — see the note rendered below the buttons.
const CAMPING_PRESETS: DevicePreset[] = [
  { name: "Portable fridge / cooler", watts: 45, hoursPerDay: 10, quantity: 1 },
  { name: "LED camp light", watts: 5, hoursPerDay: 5, quantity: 1 },
  { name: "Phone charging", watts: 8, hoursPerDay: 3, quantity: 1 },
  { name: "Laptop", watts: 65, hoursPerDay: 4, quantity: 1 },
  { name: "Camera battery charging", watts: 25, hoursPerDay: 1.5, quantity: 1 },
  { name: "Drone battery charging", watts: 60, hoursPerDay: 1.5, quantity: 1 },
  { name: "Portable fan", watts: 5, hoursPerDay: 6, quantity: 1 },
  { name: "CPAP (no humidifier)", watts: 40, hoursPerDay: 8, quantity: 1 },
  { name: "Starlink", watts: 75, hoursPerDay: 8, quantity: 1 },
  { name: "Electric blanket", watts: 55, hoursPerDay: 4, quantity: 1 },
];

const CAMPING_PRESETS_NOTE =
  "Example values for camping planning only. Actual wattage and how long you run each item vary by model, temperature and how you camp. A portable compressor fridge or cooler cycles on and off, so its hours reflect equivalent compressor-on time, not 24 hours. Measure your own gear with a plug-in or inline watt meter where you can.";

export default function CampingPowerStationCalculatorPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-4 pt-10 text-center sm:px-6 sm:pt-14">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
          Camping Power Station Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-ink/65 sm:text-lg">
          Add the gear you bring tent or car camping &mdash; a portable fridge or cooler, camp
          lights, a fan, phones, a laptop, camera and drone batteries, a CPAP, Starlink &mdash; to
          estimate your daily watt-hours and the portable power station capacity you need.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-ink/50">
          Enter the hours each item runs in a typical day, and set{" "}
          <span className="font-medium">Number of days</span> in Backup settings to how many nights
          you are out. Results are planning estimates, not a guarantee.
        </p>
      </section>

      <PowerStationCalculator
        initialDevices={CAMPING_DEVICES}
        initialSettings={{ days: 1 }}
        presets={CAMPING_PRESETS}
        presetsNote={CAMPING_PRESETS_NOTE}
      />

      <CampingHowToUse />

      <section className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6">
        <CampingWhatSize />
        <CampingGearTable />
        <CampingCapacityClasses />
        <CampingFridgeExample />
        <CampingDeviceExamples />
        <CampingTripLength />
        <CampingSolarRecharge />
        <CampingHighWattageWarning />
        <CampingCalculationExample />
        <CampingFaq />
      </section>
    </>
  );
}
