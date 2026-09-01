import type { Metadata } from "next";
import { CoffeeMakerCalculator } from "@/components/calculator/CoffeeMakerCalculator";
import { CmBatteryVsOutput } from "@/components/content/coffee-maker/CmBatteryVsOutput";
import { CmBuyingChecklist } from "@/components/content/coffee-maker/CmBuyingChecklist";
import { CmCan1000Wh } from "@/components/content/coffee-maker/CmCan1000Wh";
import { CmCan500Wh } from "@/components/content/coffee-maker/CmCan500Wh";
import { CmCapacityVsOutputNotice } from "@/components/content/coffee-maker/CmCapacityVsOutputNotice";
import { CmDripVsSingleServeVsEspresso } from "@/components/content/coffee-maker/CmDripVsSingleServeVsEspresso";
import { CmFaq } from "@/components/content/coffee-maker/CmFaq";
import { CmFindWattage } from "@/components/content/coffee-maker/CmFindWattage";
import { CmHowManyWh } from "@/components/content/coffee-maker/CmHowManyWh";
import { CmKeepWarm } from "@/components/content/coffee-maker/CmKeepWarm";
import { CmShortRuntimeHighOutput } from "@/components/content/coffee-maker/CmShortRuntimeHighOutput";
import { CmUseCases } from "@/components/content/coffee-maker/CmUseCases";
import { CmWorkedExample } from "@/components/content/coffee-maker/CmWorkedExample";

const TITLE = "Coffee Maker Power Station Calculator | Battery & Wattage Size";
const DESCRIPTION =
  "Calculate the battery capacity and continuous AC output needed to run a coffee maker from a portable power station.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/coffee-maker-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/coffee-maker-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function CoffeeMakerPowerCalculatorPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-4 pt-10 text-center sm:px-6 sm:pt-14">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
          Coffee Maker Power Station Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-ink/65 sm:text-lg">
          Work out what a portable power station needs to run a coffee maker: enough continuous AC
          output for the heating element&apos;s watts, and enough battery capacity for the brew
          &mdash; which, for a short cycle, is not much.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-ink/50">
          Enter the coffee maker&apos;s input watts from its label, not an assumption from whether it
          is drip, pod, or espresso. The brew is brief, so the inverter&apos;s output rating usually
          matters more than capacity.
        </p>
      </section>

      <CoffeeMakerCalculator />

      <CmCapacityVsOutputNotice />

      <section className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6">
        <CmBatteryVsOutput />
        <CmFindWattage />
        <CmHowManyWh />
        <CmWorkedExample />
        <CmShortRuntimeHighOutput />
        <CmDripVsSingleServeVsEspresso />
        <CmKeepWarm />
        <CmCan500Wh />
        <CmCan1000Wh />
        <CmUseCases />
        <CmBuyingChecklist />
        <CmFaq />
      </section>
    </>
  );
}
