import type { Metadata } from "next";
import Link from "next/link";
import { InfoPageLayout } from "@/components/content/InfoPageLayout";
import {
  AFFILIATE_DISCLOSURE_POINTS,
  AFFILIATE_LINKS_ACTIVE,
  AMAZON_ASSOCIATES_DISCLOSURE,
  SHORT_AFFILIATE_DISCLOSURE,
} from "@/lib/recommendations/disclosure";

const TITLE = "Affiliate Disclosure";
const DESCRIPTION =
  "Whether Power Station Sizer uses affiliate links, how they would work, and the rule that commissions never change a calculation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/affiliate-disclosure",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/affiliate-disclosure",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const LAST_UPDATED = "August 29, 2026";

export default function AffiliateDisclosurePage() {
  return (
    <InfoPageLayout
      title="Affiliate disclosure"
      intro={
        AFFILIATE_LINKS_ACTIVE
          ? "This site currently uses affiliate links. This page explains how they work and the limits placed on them."
          : "This site does not currently use affiliate links. This page explains what will apply if that changes."
      }
      lastUpdated={LAST_UPDATED}
    >
      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Current status</h2>
        <p className="mt-3 text-ink/75">
          {AFFILIATE_LINKS_ACTIVE
            ? "Some outbound links to products are affiliate links, as described below."
            : "As of the date above, there are no affiliate links anywhere on this site. The product-recommendation section shows non-clickable placeholder cards until real links are added."}
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">How affiliate links work here</h2>
        <ul className="mt-3 space-y-2 text-ink/75">
          {AFFILIATE_DISCLOSURE_POINTS.map((point) => (
            <li key={point} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Where this applies</h2>
        <div className="mt-3 space-y-3 text-ink/75">
          <p>
            The only place outbound product links are planned is the &ldquo;Power stations in this
            size range&rdquo; section that can appear below a calculator result. It always carries a
            short form of this disclosure:
          </p>
          <p className="rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink/70">
            {SHORT_AFFILIATE_DISCLOSURE}
          </p>
          <p>
            The short and full versions are generated from the same source, so they stay in step if
            affiliate links are switched on later.
          </p>
        </div>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Amazon Associates</h2>
        <div className="mt-3 space-y-3 text-ink/75">
          <p>
            This site participates in the Amazon Associates Program. Where a recommendation card
            links to Amazon, it is shown with this statement:
          </p>
          <p className="rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink/70">
            {AMAZON_ASSOCIATES_DISCLOSURE}
          </p>
        </div>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Related</h2>
        <p className="mt-3 text-ink/75">
          See the{" "}
          <Link href="/methodology" className="font-medium text-brand hover:underline">
            methodology
          </Link>{" "}
          for how a recommendation is calculated, and the{" "}
          <Link href="/privacy" className="font-medium text-brand hover:underline">
            privacy policy
          </Link>{" "}
          for how link clicks are (and are not) tracked.
        </p>
      </div>
    </InfoPageLayout>
  );
}
