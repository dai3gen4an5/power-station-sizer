import Link from "next/link";

const ITEMS = [
  { href: "/cpap-power-calculator", title: "CPAP Calculator", sub: "Size for better sleep", icon: "◎" },
  { href: "/starlink-power-calculator", title: "Starlink Calculator", sub: "Power your connection", icon: "⌁" },
  { href: "/rv-power-station-calculator", title: "RV & Van Life", sub: "Life on the road", icon: "▣" },
  { href: "/home-power-outage-calculator", title: "Outage Backup", sub: "Be prepared", icon: "⌂" },
  { href: "/camping-power-station-calculator", title: "Camping & Overlanding", sub: "Adventure ready", icon: "△" },
];

/**
 * Shortcut strip between the calculator and the product comparison, matching the
 * approved mockup. Homepage only (passed via `showPopularCalculators`).
 */
export function PopularCalculators() {
  return (
    <section className="container-wide pb-4">
      <div className="feature-card p-5 sm:p-6">
        <h2 className="h2 text-xl">Popular calculators</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card-interactive flex min-h-[72px] items-center gap-3 rounded-xl px-3 py-3"
            >
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xl font-semibold text-brand-700">{item.icon}</span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-ink">{item.title}</span>
                <span className="block truncate text-xs text-muted">{item.sub}</span>
              </span>
              <span aria-hidden="true" className="ml-auto shrink-0 text-ink">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
