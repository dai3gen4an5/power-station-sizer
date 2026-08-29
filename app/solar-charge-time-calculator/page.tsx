import type { Metadata } from "next";
import { SolarChargeCalculator } from "@/components/calculator/SolarChargeCalculator";
import { SolarCampingRvOutage } from "@/components/content/solar/SolarCampingRvOutage";
import { SolarCapacityChargeExamples } from "@/components/content/solar/SolarCapacityChargeExamples";
import { SolarChargeAssumptionsNotice } from "@/components/content/solar/SolarChargeAssumptionsNotice";
import { SolarChargeCalculationExample } from "@/components/content/solar/SolarChargeCalculationExample";
import { SolarChargeFaq } from "@/components/content/solar/SolarChargeFaq";
import { SolarChargeFormula } from "@/components/content/solar/SolarChargeFormula";
import { SolarMaxInputLimit } from "@/components/content/solar/SolarMaxInputLimit";
import { SolarPanelSizeExamples } from "@/components/content/solar/SolarPanelSizeExamples";
import { SolarPartialCharge } from "@/components/content/solar/SolarPartialCharge";
import { SolarPeakSunHours } from "@/components/content/solar/SolarPeakSunHours";
import { SolarRatedVsRealInput } from "@/components/content/solar/SolarRatedVsRealInput";
import { SolarWeatherShade } from "@/components/content/solar/SolarWeatherShade";

const TITLE = "Solar Charge Time Calculator - How Long to Charge a Power Station?";
const DESCRIPTION =
  "Estimate how long solar panels take to charge a portable power station, from its capacity, current and target charge level, panel wattage, real-world efficiency, and peak sun hours.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/solar-charge-time-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/solar-charge-time-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function SolarChargeTimeCalculatorPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-4 pt-10 text-center sm:px-6 sm:pt-14">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
          Solar Charge Time Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-ink/65 sm:text-lg">
          Estimate how long solar panels will take to charge your portable power station, based on its
          capacity, current and target charge level, panel wattage, and a real-world efficiency factor.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-ink/50">
          These are planning estimates. Real charge speed depends on weather, sun angle, shade,
          temperature, cabling, and your power station&apos;s charge controller, and the final stretch of
          charging usually slows down.
        </p>
      </section>

      <SolarChargeCalculator />

      <SolarChargeAssumptionsNotice />
      <SolarChargeCalculationExample />

      <section className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6">
        <SolarChargeFormula />
        <SolarRatedVsRealInput />
        <SolarPeakSunHours />
        <SolarPanelSizeExamples />
        <SolarCapacityChargeExamples />
        <SolarWeatherShade />
        <SolarMaxInputLimit />
        <SolarPartialCharge />
        <SolarCampingRvOutage />
        <SolarChargeFaq />
      </section>
    </>
  );
}
