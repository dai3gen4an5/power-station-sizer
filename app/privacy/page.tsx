import type { Metadata } from "next";
import Link from "next/link";
import { InfoPageLayout } from "@/components/content/InfoPageLayout";

const TITLE = "Privacy Policy";
const DESCRIPTION =
  "How Power Station Sizer handles data: calculators run in your browser, the site sets no cookies, and analytics is limited to cookieless, aggregate visit and click counts with no personal data.";

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

const LAST_UPDATED = "September 1, 2026";

export default function PrivacyPage() {
  return (
    <InfoPageLayout
      title="Privacy policy"
      intro="Short version: the calculators run in your browser, this site sets no cookies, and the only measurement is cookieless, aggregate visit and click counts with no personal information."
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
        <p className="mt-3 text-ink/75">
          This site does not set any cookies. The analytics described below is cookieless and does
          not store an identifier in your browser.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Analytics</h2>
        <p className="mt-3 text-ink/75">
          Two tools are used, each for one narrow purpose:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-ink/75">
          <li>
            <span className="font-medium text-ink">Vercel Web Analytics</span> counts page views and
            landing pages. It sets no cookies, stores nothing on your device, does not fingerprint
            you for advertising, and does not track you across other sites. Visit counts are
            aggregated from a one-way hash that Vercel rotates daily, so individual visitors cannot be
            re-identified or followed from one day to the next.
          </li>
          <li>
            <span className="font-medium text-ink">PostHog</span> (EU Cloud) is used only to record
            the affiliate link click described below &mdash; nothing else. It does not capture page
            views on this site, autocapture is off, session replay is off, person profiles are off,
            and it is configured with in-memory persistence only, so it sets no cookies and writes
            nothing to your browser&apos;s storage.
          </li>
        </ul>
        <p className="mt-3 text-ink/75">
          There is still no Google Analytics, no tag manager loaded by default, and no advertising or
          social tracking pixel.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Affiliate link clicks</h2>
        <p className="mt-3 text-ink/75">
          When you click a product link in the recommendation section, the site sends one anonymous{" "}
          <span className="font-mono text-sm">affiliate_click</span> event to PostHog so we can see
          which calculators and which product ranges lead people to a retailer. The event carries
          only the page path, the recommended capacity class (for example &ldquo;1000wh&rdquo;), the
          product brand, and whether the link is an affiliate or plain link. It contains no email,
          name, account identifier, IP address collected as a property, or fingerprint, and clicking
          is not delayed or interrupted by it.
        </p>
        <p className="mt-3 text-ink/75">
          What happens after you reach the retailer &mdash; whether you buy anything &mdash; is not
          visible to this site. Any purchase or commission reporting comes only from the
          retailer&apos;s own affiliate dashboard, such as Amazon&apos;s.
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
          If cookies, a different analytics provider, or any tracking that collects personal data are
          introduced later, this page will be updated to describe them and the date above will
          change.
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
