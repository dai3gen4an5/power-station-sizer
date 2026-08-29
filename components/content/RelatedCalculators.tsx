import Link from "next/link";

interface RelatedCalculatorLink {
  href: string;
  title: string;
  description: string;
}

/**
 * Add an entry here whenever a new device-specific page ships (e.g.
 * /starlink-power-calculator) so it shows up on the homepage automatically —
 * keeps niche-page links centralized instead of scattered through prose.
 */
const RELATED_CALCULATORS: RelatedCalculatorLink[] = [
  {
    href: "/power-station-runtime-calculator",
    title: "Power Station Runtime Calculator",
    description: "Estimate how long a power station will run a device from its capacity, wattage, efficiency, and reserve.",
  },
  {
    href: "/solar-charge-time-calculator",
    title: "Solar Charge Time Calculator",
    description: "Estimate how long solar panels take to charge a power station from capacity, charge level, panel watts, and peak sun hours.",
  },
  {
    href: "/solar-panel-size-calculator",
    title: "Solar Panel Size Calculator",
    description: "Work out how many watts of solar panel you need to recharge a power station within a set number of days or peak sun hours.",
  },
  {
    href: "/cpap-power-calculator",
    title: "CPAP Power Station Calculator",
    description: "CPAP-specific wattages, camping and outage planning, and a dedicated FAQ.",
  },
  {
    href: "/refrigerator-power-calculator",
    title: "Refrigerator Power Station Calculator",
    description: "Compressor cycling, startup surge, and energy-label based sizing for refrigerators.",
  },
  {
    href: "/starlink-power-calculator",
    title: "Starlink Power Station Calculator",
    description: "Starlink-specific wattage examples, AC vs DC efficiency, and solar recharge planning.",
  },
];

export function RelatedCalculators() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Specialized calculators</h2>
      <p className="mt-3 text-ink/75">
        Looking for guidance on a specific device? These dedicated calculators cover device-specific
        wattages, presets, and FAQs.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {RELATED_CALCULATORS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <p className="font-display text-base font-semibold text-ink">{item.title}</p>
            <p className="mt-1 text-sm text-ink/60">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
