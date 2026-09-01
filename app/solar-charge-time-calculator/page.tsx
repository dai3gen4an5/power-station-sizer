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
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">
          Solar Charge Time Calculator
        </h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Estimate how long solar panels will take to charge your portable power station, based on its
          capacity, current and target charge level, panel wattage, and a real-world efficiency factor.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          These are planning estimates. Real charge speed depends on weather, sun angle, shade,
          temperature, cabling, and your power station&apos;s charge controller, and the final stretch of
          charging usually slows down.
        </p>
      </section>

      <SolarChargeCalculator />

      <SolarChargeAssumptionsNotice />
      <SolarChargeCalculationExample />

      <section className="container-prose section space-y-12">
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
