import type { Metadata } from "next";
import { RiceCookerCalculator } from "@/components/calculator/RiceCookerCalculator";
import { RcBatteryVsOutput } from "@/components/content/rice-cooker/RcBatteryVsOutput";
import { RcBuyingChecklist } from "@/components/content/rice-cooker/RcBuyingChecklist";
import { RcCampingRv } from "@/components/content/rice-cooker/RcCampingRv";
import { RcCan1000Wh } from "@/components/content/rice-cooker/RcCan1000Wh";
import { RcCan500Wh } from "@/components/content/rice-cooker/RcCan500Wh";
import { RcCapacityVsOutputNotice } from "@/components/content/rice-cooker/RcCapacityVsOutputNotice";
import { RcCookTimeDifferences } from "@/components/content/rice-cooker/RcCookTimeDifferences";
import { RcCyclingControl } from "@/components/content/rice-cooker/RcCyclingControl";
import { RcFaq } from "@/components/content/rice-cooker/RcFaq";
import { RcFindWattage } from "@/components/content/rice-cooker/RcFindWattage";
import { RcHowManyWh } from "@/components/content/rice-cooker/RcHowManyWh";
import { RcIhPressure } from "@/components/content/rice-cooker/RcIhPressure";
import { RcKeepWarmEnergy } from "@/components/content/rice-cooker/RcKeepWarmEnergy";
import { RcOutageUse } from "@/components/content/rice-cooker/RcOutageUse";
import { RcSmallExample } from "@/components/content/rice-cooker/RcSmallExample";
import { RcWorkedExample } from "@/components/content/rice-cooker/RcWorkedExample";

const TITLE = "Rice Cooker Power Station Calculator | Battery & Wattage Size";
const DESCRIPTION =
  "Calculate the battery capacity and continuous AC output needed to run a rice cooker from a portable power station.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/rice-cooker-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/rice-cooker-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RiceCookerPowerCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">Rice Cooker Power Station Calculator</h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Work out what a portable power station needs to run a rice cooker: enough continuous AC
          output for the element&apos;s watts &mdash; a lower bar than most kitchen gear &mdash; and
          enough battery capacity for the cook cycle, plus keep-warm if you use it.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          Enter the cooker&apos;s input watts from its label, not a guess from the cup capacity, and
          the powered minutes for one cook cycle. Keep-warm energy is estimated separately.
        </p>
      </section>

      <RiceCookerCalculator />

      <RcCapacityVsOutputNotice />

      <section className="container-prose section space-y-12">
        <RcBatteryVsOutput />
        <RcFindWattage />
        <RcHowManyWh />
        <RcSmallExample />
        <RcWorkedExample />
        <RcCookTimeDifferences />
        <RcKeepWarmEnergy />
        <RcCyclingControl />
        <RcIhPressure />
        <RcCan500Wh />
        <RcCan1000Wh />
        <RcCampingRv />
        <RcOutageUse />
        <RcBuyingChecklist />
        <RcFaq />
      </section>
    </>
  );
}
