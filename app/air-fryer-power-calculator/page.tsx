import type { Metadata } from "next";
import { AirFryerCalculator } from "@/components/calculator/AirFryerCalculator";
import { AfBatteryVsOutput } from "@/components/content/air-fryer/AfBatteryVsOutput";
import { AfBuyingChecklist } from "@/components/content/air-fryer/AfBuyingChecklist";
import { AfCan1000Wh } from "@/components/content/air-fryer/AfCan1000Wh";
import { AfCan500Wh } from "@/components/content/air-fryer/AfCan500Wh";
import { AfCapacityVsOutputNotice } from "@/components/content/air-fryer/AfCapacityVsOutputNotice";
import { AfCookTimeBatches } from "@/components/content/air-fryer/AfCookTimeBatches";
import { AfFaq } from "@/components/content/air-fryer/AfFaq";
import { AfFindWattage } from "@/components/content/air-fryer/AfFindWattage";
import { AfHowManyWh } from "@/components/content/air-fryer/AfHowManyWh";
import { AfOutageUse } from "@/components/content/air-fryer/AfOutageUse";
import { AfPreheatThermostat } from "@/components/content/air-fryer/AfPreheatThermostat";
import { AfRvCamping } from "@/components/content/air-fryer/AfRvCamping";
import { AfWattageExamples } from "@/components/content/air-fryer/AfWattageExamples";
import { AfWhyHighWattage } from "@/components/content/air-fryer/AfWhyHighWattage";
import { AfWorkedExample } from "@/components/content/air-fryer/AfWorkedExample";

const TITLE = "Air Fryer Power Station Calculator | Battery & Wattage Size";
const DESCRIPTION =
  "Calculate the battery capacity and continuous AC output needed to run an air fryer from a portable power station.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/air-fryer-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/air-fryer-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AirFryerPowerCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">Air Fryer Power Station Calculator</h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Work out what a portable power station needs to run an air fryer: enough continuous AC
          output for the heating element&apos;s watts, and enough battery capacity for the cook
          &mdash; which, at 15 to 40 minutes, is more than a microwave.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          Enter the air fryer&apos;s input watts from its label, not an assumption from the basket
          size, and the total minutes it runs including preheat and every batch.
        </p>
      </section>

      <AirFryerCalculator />

      <AfCapacityVsOutputNotice />

      <section className="container-prose section space-y-12">
        <AfBatteryVsOutput />
        <AfFindWattage />
        <AfHowManyWh />
        <AfWorkedExample />
        <AfWhyHighWattage />
        <AfWattageExamples />
        <AfCookTimeBatches />
        <AfPreheatThermostat />
        <AfCan500Wh />
        <AfCan1000Wh />
        <AfRvCamping />
        <AfOutageUse />
        <AfBuyingChecklist />
        <AfFaq />
      </section>
    </>
  );
}
