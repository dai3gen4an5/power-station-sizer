import type { Metadata } from "next";
import { SlowCookerCalculator } from "@/components/calculator/SlowCookerCalculator";
import { ScBatteryVsOutput } from "@/components/content/slow-cooker/ScBatteryVsOutput";
import { ScBuyingChecklist } from "@/components/content/slow-cooker/ScBuyingChecklist";
import { ScCampingRv } from "@/components/content/slow-cooker/ScCampingRv";
import { ScCan1000Wh } from "@/components/content/slow-cooker/ScCan1000Wh";
import { ScCan2000Wh } from "@/components/content/slow-cooker/ScCan2000Wh";
import { ScCan500Wh } from "@/components/content/slow-cooker/ScCan500Wh";
import { ScExample4h } from "@/components/content/slow-cooker/ScExample4h";
import { ScFaq } from "@/components/content/slow-cooker/ScFaq";
import { ScFindWattage } from "@/components/content/slow-cooker/ScFindWattage";
import { ScHowManyWh } from "@/components/content/slow-cooker/ScHowManyWh";
import { ScKeepWarmEnergy } from "@/components/content/slow-cooker/ScKeepWarmEnergy";
import { ScLowHighSettings } from "@/components/content/slow-cooker/ScLowHighSettings";
import { ScOutageUse } from "@/components/content/slow-cooker/ScOutageUse";
import { ScThermostatCycling } from "@/components/content/slow-cooker/ScThermostatCycling";
import { ScWhyMoreBattery } from "@/components/content/slow-cooker/ScWhyMoreBattery";
import { ScWorkedExample } from "@/components/content/slow-cooker/ScWorkedExample";

const TITLE = "Slow Cooker Power Station Calculator | Battery & Wattage Size";
const DESCRIPTION =
  "Calculate the battery capacity and continuous AC output needed to run a slow cooker from a portable power station.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/slow-cooker-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/slow-cooker-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function SlowCookerPowerCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">Slow Cooker Power Station Calculator</h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Work out what a portable power station needs to run a slow cooker. The wattage is low, so
          the inverter is rarely the problem &mdash; it is the 4-to-10-hour runtime that decides how
          big a battery you need.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          Enter the cooker&apos;s input watts from its label, at the setting you use, and the cook
          time in hours. Keep-warm energy is estimated separately.
        </p>
      </section>

      <SlowCookerCalculator />

      <section className="container-prose section space-y-12">
        <ScWhyMoreBattery />
        <ScBatteryVsOutput />
        <ScFindWattage />
        <ScHowManyWh />
        <ScExample4h />
        <ScWorkedExample />
        <ScLowHighSettings />
        <ScThermostatCycling />
        <ScKeepWarmEnergy />
        <ScCan500Wh />
        <ScCan1000Wh />
        <ScCan2000Wh />
        <ScCampingRv />
        <ScOutageUse />
        <ScBuyingChecklist />
        <ScFaq />
      </section>
    </>
  );
}
