import type { Metadata } from "next";
import Link from "next/link";
import { InfoPageLayout } from "@/components/content/InfoPageLayout";

const TITLE = "About the Power Station Calculators";
const DESCRIPTION =
  "What Power Station Sizer is, how its estimates are produced, and why it is independent of power station brands.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AboutPage() {
  return (
    <InfoPageLayout
      title="About Power Station Sizer"
      intro="Power Station Sizer is a small independent project offering free calculators for working out roughly what size portable power station or battery a given set of devices needs."
    >
      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">What this site does</h2>
        <div className="mt-3 space-y-3 text-ink/75">
          <p>
            The main calculator estimates the battery capacity needed to run a list of devices for a
            chosen number of days. Companion pages estimate how long a given power station would last,
            how long solar panels take to recharge one, and what size solar array a recharge deadline
            calls for. There are also device-specific versions for CPAP machines, refrigerators, and
            Starlink.
          </p>
          <p>
            Everything runs in your browser. There is no account, and nothing you enter is sent
            anywhere.
          </p>
        </div>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">How the estimates are produced</h2>
        <div className="mt-3 space-y-3 text-ink/75">
          <p>
            Each calculator takes the numbers you enter — device wattage, hours of use, backup days,
            and a few efficiency settings — and applies standard, publicly known power formulas:
            watts multiplied by hours for energy, division by inverter efficiency for conversion
            loss, and so on. The full method is written out on the{" "}
            <Link href="/methodology" className="font-medium text-brand hover:underline">
              methodology page
            </Link>
            .
          </p>
          <p>
            Every result is a planning estimate, not a measurement or a guarantee. Real hardware
            varies with model, firmware, temperature, battery age, and how it is used.
          </p>
        </div>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Independence from brands</h2>
        <div className="mt-3 space-y-3 text-ink/75">
          <p>
            This site is not owned by, affiliated with, sponsored by, or endorsed by Jackery,
            EcoFlow, BLUETTI, or any other power station or battery manufacturer. Brand and product
            names are trademarks of their respective owners and are used only to describe categories
            of equipment.
          </p>
          <p>
            Where the site points to product families, it does so as a starting point for your own
            comparison — never as a ranked list. See the{" "}
            <Link href="/affiliate-disclosure" className="font-medium text-brand hover:underline">
              affiliate disclosure
            </Link>{" "}
            for how outbound links are handled.
          </p>
        </div>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Check the real specifications</h2>
        <p className="mt-3 text-ink/75">
          Before buying anything, confirm a product&apos;s actual usable capacity, continuous and
          surge (starting) output, and maximum charge and solar input in the manufacturer&apos;s
          official documentation. A capacity-class suggestion from this site is only a guide to which
          size range to shop in.
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Who runs it</h2>
        <p className="mt-3 text-ink/75">
          Power Station Sizer is maintained by an independent enthusiast, not a licensed electrician
          or professional engineer, and nothing here is professional engineering, electrical, or
          safety advice. For anything involving home wiring, medical equipment, or a critical backup
          need, consult a qualified professional. Questions and corrections are welcome through the{" "}
          <Link href="/contact" className="font-medium text-brand hover:underline">
            contact page
          </Link>
          .
        </p>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Try the calculator</h2>
        <p className="mt-3 text-ink/75">
          Head to the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            main power station size calculator
          </Link>{" "}
          to enter your own devices and settings.
        </p>
      </div>
    </InfoPageLayout>
  );
}
