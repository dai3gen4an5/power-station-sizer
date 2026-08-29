import type { Metadata } from "next";
import Link from "next/link";
import { InfoPageLayout } from "@/components/content/InfoPageLayout";
import { CONTACT_EMAIL } from "@/lib/site";

const TITLE = "Contact";
const DESCRIPTION =
  "How to reach the operator of Power Station Sizer with questions, corrections, or suggestions.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/contact",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ContactPage() {
  return (
    <InfoPageLayout
      title="Contact"
      intro="Questions, a correction to a calculation, or a suggestion for a device preset are all welcome."
    >
      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Getting in touch</h2>
        {CONTACT_EMAIL ? (
          <p className="mt-3 text-ink/75">
            The best way to reach the site operator is by email:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-brand hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        ) : (
          <div className="mt-3 space-y-3 text-ink/75">
            <p>
              A public contact address has not been set up for this site yet, so there is no email
              link to show here rather than a broken one.
            </p>
            <p>
              If you are reviewing Power Station Sizer for an affiliate or partner program, you can
              reach the operator through the account used to submit the application. A dedicated
              contact address can be enabled later through site configuration, with no code change.
            </p>
          </div>
        )}
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Before you write</h2>
        <p className="mt-3 text-ink/75">
          Many questions about how a number is produced are answered on the{" "}
          <Link href="/methodology" className="font-medium text-brand hover:underline">
            methodology page
          </Link>
          , and the project&apos;s scope and independence are covered on the{" "}
          <Link href="/about" className="font-medium text-brand hover:underline">
            about page
          </Link>
          .
        </p>
      </div>
    </InfoPageLayout>
  );
}
