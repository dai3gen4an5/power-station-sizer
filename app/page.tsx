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
  { label: "Fast & free", sub: "No sign-up, ~2 minutes" },
  { label: "Personalised", sub: "Sized to your own devices" },
  { label: "Purchase-ready", sub: "Real watt-hour math, verified specs" },
];

export default function HomePage() {
  return (
    <>
      <meta {...impactSiteVerificationMeta} />

      <section className="container-page pb-14 pt-16 sm:pb-20 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="eyebrow">Power station sizing</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              What Size <span className="text-brand-700">Power Station</span> Do I Need?
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              How much battery do you actually need? Size a portable power station for camping,
              outages, RVs, CPAP, Starlink, and everyday backup &mdash; the recommendation updates as
              you add your devices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#calculator" className="btn-primary btn-lg">
                Size my power station
              </Link>
              <Link href="#calculators" className="btn-secondary btn-lg">
                Browse calculators
              </Link>
            </div>
            <ul className="mt-9 grid gap-3 sm:grid-cols-3">
              {TRUST_POINTS.map((point) => (
                <li
                  key={point.label}
                  className="rounded-card border border-line bg-surface/70 px-3.5 py-3"
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
                    {point.label}
                  </span>
                  <span className="mt-1 block text-xs text-muted">{point.sub}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <HeroExampleReadout />
          </div>
        </div>
      </section>

      <div className="border-t border-line" />

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
