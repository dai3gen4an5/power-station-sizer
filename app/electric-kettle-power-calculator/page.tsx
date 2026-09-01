import type { Metadata } from "next";
import { ElectricKettleCalculator } from "@/components/calculator/ElectricKettleCalculator";
import { EkBatteryVsOutput } from "@/components/content/electric-kettle/EkBatteryVsOutput";
import { EkBoilTime } from "@/components/content/electric-kettle/EkBoilTime";
import { EkBuyingChecklist } from "@/components/content/electric-kettle/EkBuyingChecklist";
import { EkCan1000Wh } from "@/components/content/electric-kettle/EkCan1000Wh";
import { EkCan500Wh } from "@/components/content/electric-kettle/EkCan500Wh";
import { EkCapacityVsOutputNotice } from "@/components/content/electric-kettle/EkCapacityVsOutputNotice";
import { EkFaq } from "@/components/content/electric-kettle/EkFaq";
import { EkFindWattage } from "@/components/content/electric-kettle/EkFindWattage";
import { EkHowManyWh } from "@/components/content/electric-kettle/EkHowManyWh";
import { EkKeepWarm } from "@/components/content/electric-kettle/EkKeepWarm";
import { EkSmallWhLargerStation } from "@/components/content/electric-kettle/EkSmallWhLargerStation";
import { EkUseCases } from "@/components/content/electric-kettle/EkUseCases";
import { EkWattageExamples } from "@/components/content/electric-kettle/EkWattageExamples";
import { EkWorkedExample } from "@/components/content/electric-kettle/EkWorkedExample";

const TITLE = "Electric Kettle Power Station Calculator | Battery & Wattage Size";
const DESCRIPTION =
  "Calculate the battery capacity and continuous AC output needed to run an electric kettle from a portable power station.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/electric-kettle-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/electric-kettle-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ElectricKettlePowerCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">Electric Kettle Power Station Calculator</h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Work out what a portable power station needs to run an electric kettle: enough continuous
          AC output for the element&apos;s watts, and enough battery capacity for the boil &mdash;
          which, for a few minutes, is not much.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          Enter the kettle&apos;s input watts from its label, not an assumption that every kettle is
          1,500&nbsp;W. The boil is brief, so the inverter&apos;s output rating usually matters more
          than capacity.
        </p>
      </section>

      <ElectricKettleCalculator />

      <EkCapacityVsOutputNotice />

      <section className="container-prose section space-y-12">
        <EkBatteryVsOutput />
        <EkFindWattage />
        <EkHowManyWh />
        <EkWorkedExample />
        <EkSmallWhLargerStation />
        <EkWattageExamples />
        <EkBoilTime />
        <EkKeepWarm />
        <EkCan500Wh />
        <EkCan1000Wh />
        <EkUseCases />
        <EkBuyingChecklist />
        <EkFaq />
      </section>
    </>
  );
}
