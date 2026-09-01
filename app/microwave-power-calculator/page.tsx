import type { Metadata } from "next";
import { MicrowaveCalculator } from "@/components/calculator/MicrowaveCalculator";
import { MwBatteryVsOutput } from "@/components/content/microwave/MwBatteryVsOutput";
import { MwBuyingChecklist } from "@/components/content/microwave/MwBuyingChecklist";
import { MwCan1000Wh } from "@/components/content/microwave/MwCan1000Wh";
import { MwCan2000Wh } from "@/components/content/microwave/MwCan2000Wh";
import { MwCapacityVsOutputNotice } from "@/components/content/microwave/MwCapacityVsOutputNotice";
import { MwCookingVsInputWatts } from "@/components/content/microwave/MwCookingVsInputWatts";
import { MwFaq } from "@/components/content/microwave/MwFaq";
import { MwFindInputWattage } from "@/components/content/microwave/MwFindInputWattage";
import { MwHighWattShortRuntime } from "@/components/content/microwave/MwHighWattShortRuntime";
import { MwHowManyWh } from "@/components/content/microwave/MwHowManyWh";
import { MwUseCases } from "@/components/content/microwave/MwUseCases";
import { MwWorkedExample } from "@/components/content/microwave/MwWorkedExample";

const TITLE = "Microwave Power Station Calculator | Battery & Wattage Size";
const DESCRIPTION =
  "Calculate how much battery capacity and AC output you need to run a microwave from a portable power station.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/microwave-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/microwave-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function MicrowavePowerCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">
          Microwave Power Station Calculator
        </h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Work out what a portable power station needs to run a microwave: enough battery capacity in
          watt-hours for your run time, and enough continuous AC output for the microwave&apos;s
          electrical input watts.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          Enter the microwave&apos;s input watts &mdash; its power consumption from the outlet, not
          the &ldquo;700 W&rdquo; or &ldquo;1000 W&rdquo; cooking rating on the front. A microwave is
          a short-run, high-draw load, so the inverter&apos;s output rating usually matters more than
          capacity.
        </p>
      </section>

      <MicrowaveCalculator />

      <MwCapacityVsOutputNotice />

      <section className="container-prose section space-y-12">
        <MwCookingVsInputWatts />
        <MwBatteryVsOutput />
        <MwFindInputWattage />
        <MwHowManyWh />
        <MwWorkedExample />
        <MwCan1000Wh />
        <MwCan2000Wh />
        <MwHighWattShortRuntime />
        <MwUseCases />
        <MwBuyingChecklist />
        <MwFaq />
      </section>
    </>
  );
}
