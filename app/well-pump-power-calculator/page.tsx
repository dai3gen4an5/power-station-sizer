import type { Metadata } from "next";
import { WellPumpCalculator } from "@/components/calculator/WellPumpCalculator";
import { WellPump120vs240 } from "@/components/content/well-pump/WellPump120vs240";
import { WellPumpBatteryVsOutput } from "@/components/content/well-pump/WellPumpBatteryVsOutput";
import { WellPumpBuyingChecklist } from "@/components/content/well-pump/WellPumpBuyingChecklist";
import { WellPumpCapacityClasses } from "@/components/content/well-pump/WellPumpCapacityClasses";
import { WellPumpCapacityVsOutputNotice } from "@/components/content/well-pump/WellPumpCapacityVsOutputNotice";
import { WellPumpCycling } from "@/components/content/well-pump/WellPumpCycling";
import { WellPumpFaq } from "@/components/content/well-pump/WellPumpFaq";
import { WellPumpFindWattage } from "@/components/content/well-pump/WellPumpFindWattage";
import { WellPumpRunningVsStartup } from "@/components/content/well-pump/WellPumpRunningVsStartup";
import { WellPumpWhyClassNotEnough } from "@/components/content/well-pump/WellPumpWhyClassNotEnough";
import { WellPumpWorkedExample } from "@/components/content/well-pump/WellPumpWorkedExample";

const TITLE = "Well Pump Backup Power Calculator | Battery & Surge Size";
const DESCRIPTION =
  "Calculate the battery capacity, continuous AC output, and startup surge rating needed to run a well pump during a power outage.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/well-pump-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/well-pump-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function WellPumpPowerCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">
          Well Pump Backup Power Calculator
        </h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Work out three separate things a portable power station needs to run a household well pump
          during an outage: enough battery capacity in watt-hours, enough continuous AC output, and
          enough startup / surge capability &mdash; plus a check that the pump&apos;s voltage matches
          the unit.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          Enter the running and starting watts from your pump&apos;s label or manual. Results are
          planning estimates, not a guarantee, and battery capacity alone does not confirm a unit can
          start the pump &mdash; especially for a 240V pump.
        </p>
      </section>

      <WellPumpCalculator />

      <WellPumpCapacityVsOutputNotice />

      <section className="container-prose section space-y-12">
        <WellPumpBatteryVsOutput />
        <WellPumpRunningVsStartup />
        <WellPump120vs240 />
        <WellPumpFindWattage />
        <WellPumpCycling />
        <WellPumpWorkedExample />
        <WellPumpCapacityClasses />
        <WellPumpWhyClassNotEnough />
        <WellPumpBuyingChecklist />
        <WellPumpFaq />
      </section>
    </>
  );
}
