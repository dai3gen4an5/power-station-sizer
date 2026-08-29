import type { Metadata } from "next";
import { SolarPanelSizeCalculator } from "@/components/calculator/SolarPanelSizeCalculator";
import { SolarPanelBiggerNotAlwaysFaster } from "@/components/content/solar-panel/SolarPanelBiggerNotAlwaysFaster";
import { SolarPanelByCapacityExamples } from "@/components/content/solar-panel/SolarPanelByCapacityExamples";
import { SolarPanelCampingRvOutage } from "@/components/content/solar-panel/SolarPanelCampingRvOutage";
import { SolarPanelMaxInputLimit } from "@/components/content/solar-panel/SolarPanelMaxInputLimit";
import { SolarPanelOneDayVsTwoDay } from "@/components/content/solar-panel/SolarPanelOneDayVsTwoDay";
import { SolarPanelRatingExamples } from "@/components/content/solar-panel/SolarPanelRatingExamples";
import { SolarPanelSizeAssumptionsNotice } from "@/components/content/solar-panel/SolarPanelSizeAssumptionsNotice";
import { SolarPanelSizeCalculationExample } from "@/components/content/solar-panel/SolarPanelSizeCalculationExample";
import { SolarPanelSizeFaq } from "@/components/content/solar-panel/SolarPanelSizeFaq";
import { SolarPanelSizeFormula } from "@/components/content/solar-panel/SolarPanelSizeFormula";
import { SolarPanelWattsVsOutput } from "@/components/content/solar-panel/SolarPanelWattsVsOutput";
import { SolarPanelWeatherShade } from "@/components/content/solar-panel/SolarPanelWeatherShade";
import { SolarPanelPeakSunHours } from "@/components/content/solar-panel/SolarPanelPeakSunHours";

const TITLE = "Solar Panel Size Calculator - What Watt Panel to Charge a Power Station?";
const DESCRIPTION =
  "Work out how many watts of solar panel you need to recharge a portable power station in a set time, from its capacity, charge level, peak sun hours, and real-world efficiency.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/solar-panel-size-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/solar-panel-size-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function SolarPanelSizeCalculatorPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-4 pt-10 text-center sm:px-6 sm:pt-14">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
          Solar Panel Size Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-ink/65 sm:text-lg">
          Work out how many watts of solar panel you need to recharge a portable power station within a
          set number of days or peak sun hours, based on its capacity, charge level, and real-world
          conditions.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-ink/50">
          The result is a planning estimate. A panel&apos;s rated watts are rarely sustained outdoors,
          and charging slows near full — treat the number as a floor and size up from it.
        </p>
      </section>

      <SolarPanelSizeCalculator />

      <SolarPanelSizeAssumptionsNotice />
      <SolarPanelSizeCalculationExample />

      <section className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6">
        <SolarPanelSizeFormula />
        <SolarPanelWattsVsOutput />
        <SolarPanelPeakSunHours />
        <SolarPanelRatingExamples />
        <SolarPanelByCapacityExamples />
        <SolarPanelOneDayVsTwoDay />
        <SolarPanelWeatherShade />
        <SolarPanelMaxInputLimit />
        <SolarPanelBiggerNotAlwaysFaster />
        <SolarPanelCampingRvOutage />
        <SolarPanelSizeFaq />
      </section>
    </>
  );
}
