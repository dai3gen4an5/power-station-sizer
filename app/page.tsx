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
  {
    label: "Fast & free",
    sub: "Takes ~2 minutes",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    label: "Personalised",
    sub: "For your devices",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Purchase-ready",
    sub: "Real watt-hour math",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z" />
        <path d="M9 3h6v4H9zM9.5 13l1.8 1.8L15 11" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <meta {...impactSiteVerificationMeta} />

      <section className="hero-shell relative overflow-hidden border-b border-line/70 bg-white">
        <div className="container-wide relative z-10 grid min-h-[500px] items-center gap-8 py-12 sm:py-16 lg:grid-cols-[0.96fr_1.04fr] lg:py-14">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted shadow-card">
              <span aria-hidden="true" className="text-brand-600">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10.5H13z" />
                </svg>
              </span>
              Smart sizing. Smarter adventures.
            </span>
            <h1 className="mt-5 max-w-[630px] font-display text-[2.75rem] font-bold leading-[1.05] tracking-[-0.045em] text-ink sm:text-[3.6rem] lg:text-[3.65rem]">
              <span className="lg:whitespace-nowrap">How much battery</span><br /><span className="lg:whitespace-nowrap">do you{" "}
              <span className="relative inline-block text-brand-600">
                actually
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-brand-300/70"
                />
              </span>{" "}
              need?</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Right-size your portable power station for camping, outages, RVs, CPAP, Starlink, and everyday power needs.
            </p>
            <div className="mt-8">
              <Link href="#calculator" className="btn-primary btn-lg">
                Calculate My Size
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <ul className="mt-9 grid gap-5 sm:grid-cols-3">
              {TRUST_POINTS.map((point) => (
                <li key={point.label} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-brand-600"
                  >
                    {point.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{point.label}</span>
                    <span className="block text-xs text-muted">{point.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual -mx-4 min-h-[300px] rounded-xl sm:-mx-6 lg:absolute lg:inset-y-0 lg:left-[46%] lg:right-0 lg:z-0 lg:min-h-0 lg:rounded-none" aria-hidden="true" />
        </div>
      </section>

      <PowerStationCalculator showPopularCalculators />

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
