import type { Metadata } from "next";
import { ElectricBlanketCalculator } from "@/components/calculator/ElectricBlanketCalculator";
import { EbAcDcUsb } from "@/components/content/electric-blanket/EbAcDcUsb";
import { EbCompatibilityNotice } from "@/components/content/electric-blanket/EbCompatibilityNotice";
import { EbActiveVsAverage } from "@/components/content/electric-blanket/EbActiveVsAverage";
import { EbAutoShutoff } from "@/components/content/electric-blanket/EbAutoShutoff";
import { EbBatteryVsOutput } from "@/components/content/electric-blanket/EbBatteryVsOutput";
import { EbBuyingChecklist } from "@/components/content/electric-blanket/EbBuyingChecklist";
import { EbCampingRv } from "@/components/content/electric-blanket/EbCampingRv";
import { EbCan1000Wh } from "@/components/content/electric-blanket/EbCan1000Wh";
import { EbCan500Wh } from "@/components/content/electric-blanket/EbCan500Wh";
import { EbExample4h } from "@/components/content/electric-blanket/EbExample4h";
import { EbFaq } from "@/components/content/electric-blanket/EbFaq";
import { EbFindWattage } from "@/components/content/electric-blanket/EbFindWattage";
import { EbHeatSettings } from "@/components/content/electric-blanket/EbHeatSettings";
import { EbHowManyWh } from "@/components/content/electric-blanket/EbHowManyWh";
import { EbOutageUse } from "@/components/content/electric-blanket/EbOutageUse";
import { EbWhyLargeBattery } from "@/components/content/electric-blanket/EbWhyLargeBattery";
import { EbWorkedExample } from "@/components/content/electric-blanket/EbWorkedExample";

const TITLE = "Electric Blanket Power Station Calculator | Battery & Runtime Size";
const DESCRIPTION =
  "Calculate the battery capacity and AC output needed to run an electric blanket from a portable power station.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/electric-blanket-power-calculator",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/electric-blanket-power-calculator",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ElectricBlanketPowerCalculatorPage() {
  return (
    <>
      <section className="container-page pb-6 pt-12 text-center sm:pt-16">
        <p className="eyebrow">Power station calculator</p>
        <h1 className="h1 mx-auto mt-3 max-w-3xl">Electric Blanket Power Station Calculator</h1>
        <p className="lede mx-auto mt-4 max-w-2xl">
          Work out what a portable power station needs to run a household AC electric blanket. The
          wattage is small, so among the listed power stations AC output is usually not the limiting
          spec &mdash; it is the overnight runtime that decides how big a battery you need.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted/80">
          This calculator is for household AC electric blankets. Enter the blanket&apos;s active
          heating watts from its label, at the setting you use, and the hours you want to run it.
          That figure also sizes the required AC output, so it is not a long-run cycling average.
          Electrical capacity alone does not prove compatibility &mdash; check the blanket
          manufacturer&apos;s manual first.
        </p>
      </section>

      <ElectricBlanketCalculator />

      <EbCompatibilityNotice />

      <section className="container-prose section space-y-12">
        <EbWhyLargeBattery />
        <EbBatteryVsOutput />
        <EbFindWattage />
        <EbHowManyWh />
        <EbExample4h />
        <EbWorkedExample />
        <EbHeatSettings />
        <EbActiveVsAverage />
        <EbAutoShutoff />
        <EbAcDcUsb />
        <EbCan500Wh />
        <EbCan1000Wh />
        <EbCampingRv />
        <EbOutageUse />
        <EbBuyingChecklist />
        <EbFaq />
      </section>
    </>
  );
}
