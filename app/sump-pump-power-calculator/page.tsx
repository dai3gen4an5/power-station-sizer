import type { Metadata } from "next";
import { SumpPumpCalculator } from "@/components/calculator/SumpPumpCalculator";
import { SumpPumpBatteryVsOutput } from "@/components/content/sump-pump/SumpPumpBatteryVsOutput";
import { SumpPumpBuyingChecklist } from "@/components/content/sump-pump/SumpPumpBuyingChecklist";
import { SumpPumpCapacityClasses } from "@/components/content/sump-pump/SumpPumpCapacityClasses";
import { SumpPumpCapacityVsOutputNotice } from "@/components/content/sump-pump/SumpPumpCapacityVsOutputNotice";
import { SumpPumpCycling } from "@/components/content/sump-pump/SumpPumpCycling";
import { SumpPumpFaq } from "@/components/content/sump-pump/SumpPumpFaq";
import { SumpPumpFindWattage } from "@/components/content/sump-pump/SumpPumpFindWattage";
import { SumpPumpRunningVsStartup } from "@/components/content/sump-pump/SumpPumpRunningVsStartup";
import { SumpPumpRuntime } from "@/components/content/sump-pump/SumpPumpRuntime";
import { SumpPumpWorkedExample } from "@/components/content/sump-pump/SumpPumpWorkedExample";

const TITLE = "Sump Pump Backup Power Calculator | Battery & Surge Size";
const DESCRIPTION =
  "Calculate the battery capacity, continuous AC output, and startup surge rating needed to run a sump pump during a power outage.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/sump-pump-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/sump-pump-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function SumpPumpPowerCalculatorPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-4 pt-10 text-center sm:px-6 sm:pt-14">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
          Sump Pump Backup Power Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-ink/65 sm:text-lg">
          Work out three separate things a power station needs to back up a sump pump during an
          outage: enough battery capacity in watt-hours, enough continuous AC output, and enough
          startup / surge capability.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-ink/50">
          Enter the running and starting watts from your pump&apos;s label or manual. Results are
          planning estimates, not a guarantee, and battery capacity alone does not confirm a unit can
          start the pump.
        </p>
      </section>

      <SumpPumpCalculator />

      <SumpPumpCapacityVsOutputNotice />

      <section className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6">
        <SumpPumpBatteryVsOutput />
        <SumpPumpRunningVsStartup />
        <SumpPumpFindWattage />
        <SumpPumpCycling />
        <SumpPumpRuntime />
        <SumpPumpWorkedExample />
        <SumpPumpCapacityClasses />
        <SumpPumpBuyingChecklist />
        <SumpPumpFaq />
      </section>
    </>
  );
}
