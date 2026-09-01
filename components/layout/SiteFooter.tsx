import Link from "next/link";
import { BrandMark } from "./BrandMark";

const FOOTER_GROUPS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Calculators",
    links: [
      { href: "/", label: "Power Station Size" },
      { href: "/power-station-runtime-calculator", label: "Runtime" },
      { href: "/solar-charge-time-calculator", label: "Solar Charge Time" },
      { href: "/solar-panel-size-calculator", label: "Solar Panel Size" },
    ],
  },
  {
    heading: "By use case",
    links: [
      { href: "/home-power-outage-calculator", label: "Home Power Outage" },
      { href: "/camping-power-station-calculator", label: "Camping" },
      { href: "/rv-power-station-calculator", label: "RV" },
      { href: "/cpap-power-calculator", label: "CPAP" },
    ],
  },
  {
    heading: "By appliance",
    links: [
      { href: "/refrigerator-power-calculator", label: "Refrigerator" },
      { href: "/air-conditioner-power-calculator", label: "Air Conditioner" },
      { href: "/microwave-power-calculator", label: "Microwave" },
      { href: "/electric-heater-power-calculator", label: "Electric Heater" },
    ],
  },
  {
    heading: "Site",
    links: [
      { href: "/about", label: "About" },
      { href: "/methodology", label: "Methodology" },
      { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
      { href: "/privacy", label: "Privacy" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-surface-muted">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5 text-ink">
              <BrandMark className="h-7 w-7" />
              <span className="font-display text-[17px] font-semibold tracking-tight">
                Power Station Sizer
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Real watt-hour math for sizing a portable power station &mdash; efficiency, reserve,
              continuous output, and verified product specs included.
            </p>
          </div>

          <nav
            aria-label="Site"
            className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4"
          >
            {FOOTER_GROUPS.map((group) => (
              <div key={group.heading}>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted/70">
                  {group.heading}
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted transition-colors hover:text-ink hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-xs leading-relaxed text-muted">
          <p>
            Power Station Sizer provides general estimates for planning purposes only. Always check
            your device labels for actual wattage and consult your power station&apos;s manual for
            its rated capacity and limitations.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Power Station Sizer.</p>
        </div>
      </div>
    </footer>
  );
}
