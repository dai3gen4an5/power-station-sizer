import type { Metadata } from "next";
import Link from "next/link";
import { PowerStationCalculator } from "@/components/calculator/PowerStationCalculator";
import { BatteryReserveInfo } from "@/components/content/BatteryReserveInfo";
import { Faq } from "@/components/content/Faq";
import { HowItWorks } from "@/components/content/HowItWorks";
import { InverterEfficiencyInfo } from "@/components/content/InverterEfficiencyInfo";
import { WattHoursExplainer } from "@/components/content/WattHoursExplainer";
import { WattsVsWattHours } from "@/components/content/WattsVsWattHours";

const TITLE = "Power Station Size Calculator - What Size Do I Need?";
const DESCRIPTION =
  "Calculate the power station battery capacity you need based on your devices, wattage, runtime, efficiency, and backup duration.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-4 pt-10 text-center sm:px-6 sm:pt-14">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
          What Size Power Station Do I Need?
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-ink/65 sm:text-lg">
          Calculate the battery capacity you need for camping, emergencies, RVs, CPAP machines,
          refrigerators, Starlink, and other devices.
        </p>
      </section>

      <PowerStationCalculator />

      <section className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6">
        <HowItWorks />
        <WattHoursExplainer />
        <WattsVsWattHours />
        <InverterEfficiencyInfo />
        <BatteryReserveInfo />
        <Faq />
        <p className="text-ink/75">
          Need a battery size just for a CPAP machine? Our{" "}
          <Link href="/cpap-power-calculator" className="font-medium text-brand hover:underline">
            CPAP Power Station Calculator
          </Link>{" "}
          covers CPAP-specific wattages, camping and outage planning, and a dedicated FAQ.
        </p>
      </section>
    </>
  );
}
