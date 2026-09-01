import type { Metadata } from "next";
import { ElectricHeaterCalculator } from "@/components/calculator/ElectricHeaterCalculator";
import { EhBatteryVsOutput } from "@/components/content/electric-heater/EhBatteryVsOutput";
import { EhBuyingChecklist } from "@/components/content/electric-heater/EhBuyingChecklist";
import { EhCampingRvUse } from "@/components/content/electric-heater/EhCampingRvUse";
import { EhCan1000Wh } from "@/components/content/electric-heater/EhCan1000Wh";
import { EhCan2000Wh } from "@/components/content/electric-heater/EhCan2000Wh";
import { EhCapacityVsOutputNotice } from "@/components/content/electric-heater/EhCapacityVsOutputNotice";
import { EhFaq } from "@/components/content/electric-heater/EhFaq";
import { EhFindWattage } from "@/components/content/electric-heater/EhFindWattage";
import { EhOutageLimitations } from "@/components/content/electric-heater/EhOutageLimitations";
import { EhSafety } from "@/components/content/electric-heater/EhSafety";
import { EhShortRuntimeExample } from "@/components/content/electric-heater/EhShortRuntimeExample";
import { EhThermostatCycling } from "@/components/content/electric-heater/EhThermostatCycling";
import { EhTwoHourExample } from "@/components/content/electric-heater/EhTwoHourExample";
import { EhWattageExamples } from "@/components/content/electric-heater/EhWattageExamples";
import { EhWhyBatteriesFast } from "@/components/content/electric-heater/EhWhyBatteriesFast";

const TITLE = "Electric Heater Power Station Calculator | Battery & Wattage Size";
const DESCRIPTION =
  "Calculate the battery capacity and continuous AC output needed to run an electric space heater from a portable power station.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/electric-heater-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/electric-heater-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ElectricHeaterPowerCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">
          Electric Heater Power Station Calculator
        </h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Work out what a portable power station needs to run an electric space heater: enough
          continuous AC output for the heater&apos;s watts, and enough battery capacity for the hours
          you want &mdash; which, for resistance heat, adds up fast.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          Enter the heater&apos;s input watts from its label, not an assumption that every heater is
          1,500&nbsp;W. A heater draws its full wattage the whole time it runs, so it stresses both
          the inverter and the battery.
        </p>
      </section>

      <ElectricHeaterCalculator />

      <EhCapacityVsOutputNotice />

      <section className="container-prose section space-y-12">
        <EhWhyBatteriesFast />
        <EhBatteryVsOutput />
        <EhFindWattage />
        <EhWattageExamples />
        <EhShortRuntimeExample />
        <EhTwoHourExample />
        <EhThermostatCycling />
        <EhCan1000Wh />
        <EhCan2000Wh />
        <EhCampingRvUse />
        <EhOutageLimitations />
        <EhBuyingChecklist />
        <EhSafety />
        <EhFaq />
      </section>
    </>
  );
}
