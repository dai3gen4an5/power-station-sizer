import Link from "next/link";
import { BrandMark } from "./BrandMark";

const NAV_LINKS = [
  { href: "/#calculator", label: "Calculator" },
  { href: "/#calculators", label: "Guides" },
  { href: "/#product-recommendations-heading", label: "Power Stations" },
  { href: "/methodology", label: "About" },
  { href: "/#faq", label: "Help" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-wide flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-control text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <BrandMark className="h-7 w-7 text-brand-600" />
          <span className="font-display text-[17px] font-semibold tracking-tight">
            Power Station Sizer
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-control px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {link.label}
            </Link>
          ))}
          <span aria-hidden="true" className="ml-4 text-lg text-muted">☼</span>
          <Link href="/#calculator" className="btn-primary ml-2 px-5">
            Calculate My Size
          </Link>
        </nav>

        {/* Mobile: a single clear call to action, no JS menu. */}
        <Link href="/#calculator" className="btn-primary md:hidden">
          Start
        </Link>
      </div>
    </header>
  );
}
