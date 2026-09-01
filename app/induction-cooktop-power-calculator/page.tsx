import type { Metadata } from "next";
import { InductionCooktopCalculator } from "@/components/calculator/InductionCooktopCalculator";
import { IcBatteryVsOutput } from "@/components/content/induction-cooktop/IcBatteryVsOutput";
import { IcBuyingChecklist } from "@/components/content/induction-cooktop/IcBuyingChecklist";
import { IcCan1000Wh } from "@/components/content/induction-cooktop/IcCan1000Wh";
import { IcCan2000Wh } from "@/components/content/induction-cooktop/IcCan2000Wh";
import { IcCapacityVsOutputNotice } from "@/components/content/induction-cooktop/IcCapacityVsOutputNotice";
import { IcCookwareVoltage } from "@/components/content/induction-cooktop/IcCookwareVoltage";
import { IcExample15 } from "@/components/content/induction-cooktop/IcExample15";
import { IcExample30 } from "@/components/content/induction-cooktop/IcExample30";
import { IcFaq } from "@/components/content/induction-cooktop/IcFaq";
import { IcFindWattage } from "@/components/content/induction-cooktop/IcFindWattage";
import { IcHowManyWh } from "@/components/content/induction-cooktop/IcHowManyWh";
import { IcLowSettingsNotProportional } from "@/components/content/induction-cooktop/IcLowSettingsNotProportional";
import { IcOutageUse } from "@/components/content/induction-cooktop/IcOutageUse";
import { IcPowerLevels } from "@/components/content/induction-cooktop/IcPowerLevels";
import { IcRvCamping } from "@/components/content/induction-cooktop/IcRvCamping";

const TITLE = "Induction Cooktop Power Station Calculator | Battery & Wattage Size";
const DESCRIPTION =
  "Calculate the battery capacity and continuous AC output needed to run a portable induction cooktop from a power station.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/induction-cooktop-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/induction-cooktop-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function InductionCooktopPowerCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">Induction Cooktop Power Station Calculator</h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Work out what a portable power station needs to run an induction cooktop: enough continuous
          AC output for the burner&apos;s watts, and enough battery capacity for the cook &mdash;
          which, over a full meal, adds up.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          Enter the cooktop&apos;s input watts for the power setting you use, from its label &mdash;
          not a guess from the burner size or the power level &mdash; and the total minutes it draws
          power across the meal.
        </p>
      </section>

      <InductionCooktopCalculator />

      <IcCapacityVsOutputNotice />

      <section className="container-prose section space-y-12">
        <IcBatteryVsOutput />
        <IcFindWattage />
        <IcHowManyWh />
        <IcExample15 />
        <IcExample30 />
        <IcPowerLevels />
        <IcLowSettingsNotProportional />
        <IcCan1000Wh />
        <IcCan2000Wh />
        <IcRvCamping />
        <IcOutageUse />
        <IcCookwareVoltage />
        <IcBuyingChecklist />
        <IcFaq />
      </section>
    </>
  );
}
