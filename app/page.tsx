import type { Metadata } from "next";
import type { MetaHTMLAttributes } from "react";
import Link from "next/link";
import { PowerStationCalculator } from "@/components/calculator/PowerStationCalculator";
import { BatteryReserveInfo } from "@/components/content/BatteryReserveInfo";
import { Faq } from "@/components/content/Faq";
import { HowItWorks } from "@/components/content/HowItWorks";
import { InverterEfficiencyInfo } from "@/components/content/InverterEfficiencyInfo";
import { RelatedCalculators } from "@/components/content/RelatedCalculators";
import { WattHoursExplainer } from "@/components/content/WattHoursExplainer";
import { WattsVsWattHours } from "@/components/content/WattsVsWattHours";
import { HeroExampleReadout } from "@/components/home/HeroExampleReadout";

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

// Impact.com site-ownership verification tag. Kept as a raw element (React hoists
// it into <head>) because Impact requires the non-standard `value` attribute,
// which the Next.js Metadata API cannot emit — it only produces `content`. The
// name/value strings must stay exactly as provided by Impact.
const impactSiteVerificationMeta: MetaHTMLAttributes<HTMLMetaElement> & { value: string } = {
  name: "impact-site-verification",
  value: "b1f7cad1-fa52-43f9-9507-19fd92f3b9e4",
};

const TRUST_POINTS = [
  "No signup",
  "Real watt-hour math",
  "Efficiency & reserve included",
  "Product specs verified",
];

export default function HomePage() {
  return (
    <>
      <meta {...impactSiteVerificationMeta} />

      <section className="container-page pb-10 pt-12 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <p className="eyebrow">Power station sizing</p>
            <h1 className="h1 mt-3">
              What Size <span className="text-brand-700">Power Station</span> Do I Need?
            </h1>
            <p className="lede mt-4 max-w-xl">
              Work out how much battery you actually need. Size a portable power station for camping,
              outages, RVs, CPAP, Starlink, and everyday backup &mdash; add your devices below and the
              recommended capacity updates as you type.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#calculator" className="btn-primary btn-lg">
                Size my power station
              </Link>
              <Link href="#calculators" className="btn-secondary btn-lg">
                Browse calculators
              </Link>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-brand"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <HeroExampleReadout />
          </div>
        </div>
      </section>

      <PowerStationCalculator />

      <div className="border-y border-line bg-surface-muted/60">
        <div className="container-prose section-tight">
          <p className="eyebrow">How it works</p>
          <div className="mt-4">
            <HowItWorks />
          </div>
        </div>
      </div>

      <section className="container-prose section">
        <p className="eyebrow">Key concepts</p>
        <div className="mt-4 space-y-12">
          <WattHoursExplainer />
          <WattsVsWattHours />
          <InverterEfficiencyInfo />
          <BatteryReserveInfo />
        </div>
      </section>

      <div className="border-t border-line bg-surface-muted/60">
        <section className="container-prose section">
          <Faq />
        </section>
      </div>

      <section id="calculators" className="container-page section scroll-mt-20">
        <RelatedCalculators />
      </section>
    </>
  );
}
