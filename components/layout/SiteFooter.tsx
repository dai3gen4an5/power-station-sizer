import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/methodology", label: "Methodology" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/privacy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-ink/60 sm:px-6">
        <nav aria-label="Site information" className="flex flex-wrap gap-x-5 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-ink hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-4">
          Power Station Sizer provides general estimates for planning purposes only. Always check your
          device labels for actual wattage and consult your power station&apos;s manual for its rated
          capacity and limitations.
        </p>
        <p className="mt-3">© {new Date().getFullYear()} Power Station Sizer.</p>
      </div>
    </footer>
  );
}
