import type { Metadata } from "next";
import { AirConditionerCalculator } from "@/components/calculator/AirConditionerCalculator";
import { Ac120vs240 } from "@/components/content/air-conditioner/Ac120vs240";
import { AcBatteryVsOutput } from "@/components/content/air-conditioner/AcBatteryVsOutput";
import { AcBtuVsWatts } from "@/components/content/air-conditioner/AcBtuVsWatts";
import { AcBuyingChecklist } from "@/components/content/air-conditioner/AcBuyingChecklist";
import { AcCapacityClasses } from "@/components/content/air-conditioner/AcCapacityClasses";
import { AcCapacityVsOutputNotice } from "@/components/content/air-conditioner/AcCapacityVsOutputNotice";
import { AcCycling } from "@/components/content/air-conditioner/AcCycling";
import { AcFaq } from "@/components/content/air-conditioner/AcFaq";
import { AcRunningVsStartup } from "@/components/content/air-conditioner/AcRunningVsStartup";
import { AcSolarRuntime } from "@/components/content/air-conditioner/AcSolarRuntime";
import { AcTypes } from "@/components/content/air-conditioner/AcTypes";
import { AcWhyClassNotEnough } from "@/components/content/air-conditioner/AcWhyClassNotEnough";
import { AcWorkedExample } from "@/components/content/air-conditioner/AcWorkedExample";

const TITLE = "Air Conditioner Power Station Calculator | Battery & Surge Size";
const DESCRIPTION =
  "Calculate the battery capacity, continuous AC output, and startup surge rating needed to run a portable, window, or room air conditioner from a power station.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/air-conditioner-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/air-conditioner-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AirConditionerPowerCalculatorPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-4 pt-10 text-center sm:px-6 sm:pt-14">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
          Air Conditioner Power Station Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-ink/65 sm:text-lg">
          Work out four separate things a power station needs to run a portable, window, or room air
          conditioner during an outage or off-grid: enough battery capacity in watt-hours, enough
          continuous AC output, enough startup / surge capability, and the right AC voltage.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-ink/50">
          Enter the running and startup watts from the unit&apos;s nameplate or manual &mdash; not
          its BTU rating. Results are planning estimates, not a guaranteed runtime, and battery
          capacity alone does not confirm a unit can start the compressor.
        </p>
      </section>

      <AirConditionerCalculator />

      <AcCapacityVsOutputNotice />

      <section className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6">
        <AcBatteryVsOutput />
        <AcRunningVsStartup />
        <AcBtuVsWatts />
        <AcTypes />
        <Ac120vs240 />
        <AcCycling />
        <AcWorkedExample />
        <AcCapacityClasses />
        <AcWhyClassNotEnough />
        <AcSolarRuntime />
        <AcBuyingChecklist />
        <AcFaq />
      </section>
    </>
  );
}
