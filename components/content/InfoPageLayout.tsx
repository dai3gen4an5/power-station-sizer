import type { ReactNode } from "react";

interface InfoPageLayoutProps {
  title: string;
  intro: string;
  /** Optional "Last updated" date string for policy-style pages. */
  lastUpdated?: string;
  children: ReactNode;
}

/**
 * Shared shell for the site's plain-content pages (About, Methodology, Privacy,
 * Affiliate Disclosure, Contact). Reuses the same width, spacing, and type scale
 * as the calculator pages so these pages don't look bolted on.
 */
export function InfoPageLayout({ title, intro, lastUpdated, children }: InfoPageLayoutProps) {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pb-2 pt-10 sm:px-6 sm:pt-14">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-base text-ink/70">{intro}</p>
        {lastUpdated ? (
          <p className="mt-2 text-sm text-ink/45">Last updated: {lastUpdated}</p>
        ) : null}
      </section>

      <section className="mx-auto max-w-3xl space-y-8 px-4 py-10 sm:px-6">{children}</section>
    </>
  );
}
