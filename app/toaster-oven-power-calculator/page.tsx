import type { Metadata } from "next";
import { ToasterOvenCalculator } from "@/components/calculator/ToasterOvenCalculator";
import { ToBatteryVsOutput } from "@/components/content/toaster-oven/ToBatteryVsOutput";
import { ToBuyingChecklist } from "@/components/content/toaster-oven/ToBuyingChecklist";
import { ToCan1000Wh } from "@/components/content/toaster-oven/ToCan1000Wh";
import { ToCan2000Wh } from "@/components/content/toaster-oven/ToCan2000Wh";
import { ToCapacityVsOutputNotice } from "@/components/content/toaster-oven/ToCapacityVsOutputNotice";
import { ToConvectionMode } from "@/components/content/toaster-oven/ToConvectionMode";
import { ToExample10 } from "@/components/content/toaster-oven/ToExample10";
import { ToExample30 } from "@/components/content/toaster-oven/ToExample30";
import { ToFaq } from "@/components/content/toaster-oven/ToFaq";
import { ToFindWattage } from "@/components/content/toaster-oven/ToFindWattage";
import { ToHowManyWh } from "@/components/content/toaster-oven/ToHowManyWh";
import { ToOutageUse } from "@/components/content/toaster-oven/ToOutageUse";
import { ToPreheatCookTime } from "@/components/content/toaster-oven/ToPreheatCookTime";
import { ToRvCamping } from "@/components/content/toaster-oven/ToRvCamping";
import { ToThermostatCycling } from "@/components/content/toaster-oven/ToThermostatCycling";
import { ToWattageExamples } from "@/components/content/toaster-oven/ToWattageExamples";

const TITLE = "Toaster Oven Power Station Calculator | Battery & Wattage Size";
const DESCRIPTION =
  "Calculate the battery capacity and continuous AC output needed to run a toaster oven from a portable power station.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/toaster-oven-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/toaster-oven-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ToasterOvenPowerCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">Toaster Oven Power Station Calculator</h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Work out what a portable power station needs to run a toaster oven: enough continuous AC
          output for the heating elements&apos; watts, and enough battery capacity for the cook
          &mdash; which, over a preheat and a full bake, adds up.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          Enter the oven&apos;s input watts from its label, not a guess from the oven size, and the
          total minutes it draws power including preheat and every batch.
        </p>
      </section>

      <ToasterOvenCalculator />

      <ToCapacityVsOutputNotice />

      <section className="container-prose section space-y-12">
        <ToBatteryVsOutput />
        <ToFindWattage />
        <ToHowManyWh />
        <ToExample10 />
        <ToExample30 />
        <ToWattageExamples />
        <ToPreheatCookTime />
        <ToThermostatCycling />
        <ToConvectionMode />
        <ToCan1000Wh />
        <ToCan2000Wh />
        <ToRvCamping />
        <ToOutageUse />
        <ToBuyingChecklist />
        <ToFaq />
      </section>
    </>
  );
}
