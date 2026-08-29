import type { Metadata } from "next";
import Link from "next/link";
import { InfoPageLayout } from "@/components/content/InfoPageLayout";

const TITLE = "Privacy Policy";
const DESCRIPTION =
  "How Power Station Sizer handles data: calculators run in your browser, the site sets no cookies, and there is no analytics or tracking.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/privacy",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const LAST_UPDATED = "August 29, 2026";

export default function PrivacyPage() {
  return (
    <InfoPageLayout
      title="Privacy policy"
      intro="Short version: the calculators run in your browser, this site sets no cookies, runs no analytics, and does not collect personal information."
      lastUpdated={LAST_UPDATED}
    >
      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">What you enter</h2>
        <p className="mt-3 text-ink/75">
          The device names, wattages, hours, and settings you type into a calculator are used only to
          compute the results shown on your screen. They are not sent to a server, saved to your
          device by the site, or shared with anyone.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Cookies</h2>
        <p className="mt-3 text-ink/75">This site does not set any cookies.</p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Analytics and tracking</h2>
        <p className="mt-3 text-ink/75">
          There is no Google Analytics, no third-party analytics or tag manager, and no advertising
          or social tracking pixel on the site.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Recommendation click events</h2>
        <p className="mt-3 text-ink/75">
          The product-recommendation section adds data attributes to its cards and, once a link is
          active and clicked, emits an event inside your own browser. Nothing from this is
          transmitted anywhere at present; the structure exists only so click measurement could be
          added in future.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Fonts and assets</h2>
        <p className="mt-3 text-ink/75">
          Web fonts are bundled at build time and served from this site&apos;s own domain, so viewing
          a page does not call Google Fonts or other third-party asset hosts.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Hosting and server logs</h2>
        <p className="mt-3 text-ink/75">
          The site is hosted on Vercel. As with virtually all web hosting, the provider may record
          standard request logs — such as IP address, browser user-agent, and the time of a request
          — for security, abuse prevention, and reliability. That data is handled by the host under
          its own privacy policy.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Outbound links</h2>
        <p className="mt-3 text-ink/75">
          Pages may link to manufacturers&apos; or retailers&apos; websites. Those destinations have
          their own privacy practices, which this policy does not cover. See the{" "}
          <Link href="/affiliate-disclosure" className="font-medium text-brand hover:underline">
            affiliate disclosure
          </Link>{" "}
          for how product links are handled.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Future changes</h2>
        <p className="mt-3 text-ink/75">
          If analytics, cookies, or affiliate click tracking that sends data are introduced later,
          this page will be updated to describe them and the date above will change.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Scope</h2>
        <p className="mt-3 text-ink/75">
          This is a plain-language description of how the site works today. It is not legal advice and
          makes no guarantees beyond describing current practice.
        </p>
      </div>
    </InfoPageLayout>
  );
}
