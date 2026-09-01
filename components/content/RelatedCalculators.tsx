import Link from "next/link";

interface RelatedCalculatorLink {
  href: string;
  title: string;
  description: string;
  /** Small mono category label shown on the card. Display only. */
  category: string;
}

/**
 * Add an entry here whenever a new device-specific page ships (e.g.
 * /starlink-power-calculator) so it shows up on the homepage automatically —
 * keeps niche-page links centralized instead of scattered through prose.
 */
const RELATED_CALCULATORS: RelatedCalculatorLink[] = [
  {
    href: "/home-power-outage-calculator",
    title: "Home Power Outage Calculator",
    description: "Add the essentials you need during a blackout — refrigerator, Wi-Fi, lights, CPAP — to size a power station for the outage.",
    category: "Outage",
  },
  {
    href: "/rv-power-station-calculator",
    title: "RV Power Station Calculator",
    description: "Add RV, camper and van loads — 12V fridge, lights, fan, Starlink, CPAP — to estimate daily Wh and battery capacity for camping.",
    category: "Mobile",
  },
  {
    href: "/camping-power-station-calculator",
    title: "Camping Power Station Calculator",
    description: "Size a power station for tent or car camping — portable fridge, camp lights, phones, laptop, CPAP, Starlink — over one to three nights.",
    category: "Mobile",
  },
  {
    href: "/sump-pump-power-calculator",
    title: "Sump Pump Backup Power Calculator",
    description: "Battery capacity plus the continuous and startup / surge output a power station needs to run a sump pump through an outage.",
    category: "Water",
  },
  {
    href: "/well-pump-power-calculator",
    title: "Well Pump Backup Power Calculator",
    description: "Battery capacity, continuous and startup / surge output, and a 120V vs 240V check for backing up a household well pump.",
    category: "Water",
  },
  {
    href: "/air-conditioner-power-calculator",
    title: "Air Conditioner Power Station Calculator",
    description: "Battery capacity, continuous and startup / surge output, and a voltage check for running a portable, window, or room air conditioner.",
    category: "Climate",
  },
  {
    href: "/microwave-power-calculator",
    title: "Microwave Power Station Calculator",
    description: "Battery capacity and the continuous AC output a power station needs to run a microwave, based on its electrical input watts — not its cooking-power rating.",
    category: "Kitchen",
  },
  {
    href: "/electric-heater-power-calculator",
    title: "Electric Heater Power Station Calculator",
    description: "Battery capacity and continuous AC output for an electric space heater — and why resistance heat drains a portable power station so fast.",
    category: "Climate",
  },
  {
    href: "/coffee-maker-power-calculator",
    title: "Coffee Maker Power Station Calculator",
    description: "Battery capacity and continuous AC output for a drip, single-serve, or espresso coffee maker, based on its electrical input watts.",
    category: "Kitchen",
  },
  {
    href: "/electric-kettle-power-calculator",
    title: "Electric Kettle Power Station Calculator",
    description: "Battery capacity and continuous AC output for an electric kettle — a brief boil, but a high steady wattage the inverter must sustain.",
    category: "Kitchen",
  },
  {
    href: "/power-station-runtime-calculator",
    title: "Power Station Runtime Calculator",
    description: "Estimate how long a power station will run a device from its capacity, wattage, efficiency, and reserve.",
    category: "Runtime",
  },
  {
    href: "/solar-charge-time-calculator",
    title: "Solar Charge Time Calculator",
    description: "Estimate how long solar panels take to charge a power station from capacity, charge level, panel watts, and peak sun hours.",
    category: "Solar",
  },
  {
    href: "/solar-panel-size-calculator",
    title: "Solar Panel Size Calculator",
    description: "Work out how many watts of solar panel you need to recharge a power station within a set number of days or peak sun hours.",
    category: "Solar",
  },
  {
    href: "/cpap-power-calculator",
    title: "CPAP Power Station Calculator",
    description: "CPAP-specific wattages, camping and outage planning, and a dedicated FAQ.",
    category: "Medical",
  },
  {
    href: "/refrigerator-power-calculator",
    title: "Refrigerator Power Station Calculator",
    description: "Compressor cycling, startup surge, and energy-label based sizing for refrigerators.",
    category: "Appliance",
  },
  {
    href: "/starlink-power-calculator",
    title: "Starlink Power Station Calculator",
    description: "Starlink-specific wattage examples, AC vs DC efficiency, and solar recharge planning.",
    category: "Connectivity",
  },
];

export function RelatedCalculators() {
  return (
    <div>
      <p className="eyebrow">Browse by use case</p>
      <h2 className="h2 mt-3">Specialized calculators</h2>
      <p className="mt-3 max-w-2xl text-muted">
        Looking for guidance on a specific device? These dedicated calculators cover device-specific
        wattages, presets, and FAQs.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RELATED_CALCULATORS.map((item) => (
          <Link key={item.href} href={item.href} className="card-interactive card-pad group flex flex-col">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
              {item.category}
            </span>
            <p className="mt-2 font-display text-base font-semibold text-ink">{item.title}</p>
            <p className="mt-1 flex-1 text-sm text-muted">{item.description}</p>
            <span
              aria-hidden="true"
              className="mt-3 text-sm font-medium text-brand-700 transition-transform group-hover:translate-x-0.5"
            >
              Open &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
