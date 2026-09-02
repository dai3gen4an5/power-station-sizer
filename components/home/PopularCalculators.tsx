import Link from "next/link";

const ITEMS = [
  { href: "/cpap-power-calculator", title: "CPAP Calculator", sub: "Size for better sleep" },
  { href: "/starlink-power-calculator", title: "Starlink Calculator", sub: "Power your connection" },
  { href: "/rv-power-station-calculator", title: "RV & Van Life", sub: "Life on the road" },
  { href: "/home-power-outage-calculator", title: "Outage Backup", sub: "Be prepared" },
  { href: "/camping-power-station-calculator", title: "Camping & Overlanding", sub: "Adventure ready" },
];

/**
 * Shortcut strip between the calculator and the product comparison, matching the
 * approved mockup. Homepage only (passed via `showPopularCalculators`).
 */
export function PopularCalculators() {
  return (
    <section className="container-page pb-4">
      <div className="feature-card p-5 sm:p-6">
        <h2 className="h2 text-xl">Popular calculators</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card-interactive flex items-center justify-between gap-3 rounded-xl px-4 py-3"
            >
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-ink">{item.title}</span>
                <span className="block truncate text-xs text-muted">{item.sub}</span>
              </span>
              <span aria-hidden="true" className="shrink-0 text-brand-700">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
