import type { Metadata } from "next";
import { HairDryerCalculator } from "@/components/calculator/HairDryerCalculator";
import { HdBatteryVsOutput } from "@/components/content/hair-dryer/HdBatteryVsOutput";
import { HdBuyingChecklist } from "@/components/content/hair-dryer/HdBuyingChecklist";
import { HdCan1000Wh } from "@/components/content/hair-dryer/HdCan1000Wh";
import { HdCan500Wh } from "@/components/content/hair-dryer/HdCan500Wh";
import { HdCapacityVsOutputNotice } from "@/components/content/hair-dryer/HdCapacityVsOutputNotice";
import { HdFaq } from "@/components/content/hair-dryer/HdFaq";
import { HdFindWattage } from "@/components/content/hair-dryer/HdFindWattage";
import { HdHeatSpeedSettings } from "@/components/content/hair-dryer/HdHeatSpeedSettings";
import { HdHowManyWh } from "@/components/content/hair-dryer/HdHowManyWh";
import { HdOutageUse } from "@/components/content/hair-dryer/HdOutageUse";
import { HdShortUseLargerStation } from "@/components/content/hair-dryer/HdShortUseLargerStation";
import { HdTravelRvCamping } from "@/components/content/hair-dryer/HdTravelRvCamping";
import { HdWattageExamples } from "@/components/content/hair-dryer/HdWattageExamples";
import { HdWorkedExample } from "@/components/content/hair-dryer/HdWorkedExample";

const TITLE = "Hair Dryer Power Station Calculator | Battery & Wattage Size";
const DESCRIPTION =
  "Calculate the battery capacity and continuous AC output needed to run a hair dryer from a portable power station.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/hair-dryer-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/hair-dryer-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function HairDryerPowerCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">Hair Dryer Power Station Calculator</h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Work out what a portable power station needs to run a hair dryer: enough continuous AC
          output for the heating element&apos;s watts, and enough battery capacity for the run
          &mdash; which, for a few minutes, is not much.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          Enter the dryer&apos;s input watts from its label for the setting you use, not an
          assumption that every dryer is 1,875&nbsp;W. The run is brief, so the inverter&apos;s
          output rating usually matters more than capacity.
        </p>
      </section>

      <HairDryerCalculator />

      <HdCapacityVsOutputNotice />

      <section className="container-prose section space-y-12">
        <HdBatteryVsOutput />
        <HdFindWattage />
        <HdHowManyWh />
        <HdWorkedExample />
        <HdShortUseLargerStation />
        <HdWattageExamples />
        <HdHeatSpeedSettings />
        <HdCan500Wh />
        <HdCan1000Wh />
        <HdTravelRvCamping />
        <HdOutageUse />
        <HdBuyingChecklist />
        <HdFaq />
      </section>
    </>
  );
}
