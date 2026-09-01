import type { Metadata } from "next";
import { PowerStationCalculator } from "@/components/calculator/PowerStationCalculator";
import { CpapBatterySizing } from "@/components/content/cpap/CpapBatterySizing";
import { CpapCalculationExample } from "@/components/content/cpap/CpapCalculationExample";
import { CpapCampingPower } from "@/components/content/cpap/CpapCampingPower";
import { CpapExampleTable } from "@/components/content/cpap/CpapExampleTable";
import { CpapFaq } from "@/components/content/cpap/CpapFaq";
import { CpapOutageBackup } from "@/components/content/cpap/CpapOutageBackup";
import { CpapPowerUsage } from "@/components/content/cpap/CpapPowerUsage";
import { CpapWithHumidifier } from "@/components/content/cpap/CpapWithHumidifier";
import { CpapWithoutHumidifier } from "@/components/content/cpap/CpapWithoutHumidifier";
import type { Device, DevicePreset } from "@/lib/calculator/types";

const TITLE = "CPAP Power Station Calculator - Battery Size & Runtime";
const DESCRIPTION =
  "Calculate the power station or battery capacity needed to run a CPAP overnight, while camping, or during a power outage.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/cpap-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/cpap-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

// Page-specific starting device — kept local to this page rather than the
// shared calculator engine, per the project's niche-page-config convention.
const CPAP_DEVICE: Device = {
  id: "cpap-machine",
  name: "CPAP Machine",
  watts: 40,
  hoursPerDay: 8,
  quantity: 1,
};

// Page-specific quick-add presets. These are examples, not universal specs —
// see the disclaimer rendered below the buttons.
const CPAP_PRESETS: DevicePreset[] = [
  { name: "CPAP (no humidifier)", watts: 40, hoursPerDay: 8, quantity: 1 },
  { name: "CPAP (heated humidifier)", watts: 80, hoursPerDay: 8, quantity: 1 },
  { name: "CPAP (humidifier + heated tube)", watts: 100, hoursPerDay: 8, quantity: 1 },
];

const CPAP_PRESETS_NOTE = "Example power values only — check your CPAP's actual power requirements.";

export default function CpapPowerCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">
          CPAP Power Station Calculator
        </h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Calculate how much battery capacity you need to run a CPAP machine overnight, while camping, or
          during a power outage.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          Actual CPAP power use varies by model, pressure settings, heated humidifier, heated tubing, and
          whether AC or DC power is used.
        </p>
      </section>

      <PowerStationCalculator
        initialDevices={[CPAP_DEVICE]}
        initialSettings={{ days: 1 }}
        presets={CPAP_PRESETS}
        presetsNote={CPAP_PRESETS_NOTE}
      />

      <CpapCalculationExample />

      <section className="container-prose section space-y-12">
        <CpapPowerUsage />
        <CpapBatterySizing />
        <CpapWithoutHumidifier />
        <CpapWithHumidifier />
        <CpapCampingPower />
        <CpapOutageBackup />
        <CpapExampleTable />
        <CpapFaq />
      </section>
    </>
  );
}
