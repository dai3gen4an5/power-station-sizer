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
    href: "/air-fryer-power-calculator",
    title: "Air Fryer Power Station Calculator",
    description: "Battery capacity and continuous AC output for an air fryer — a longer cook than a microwave, on a 1,000–1,800 W heating element.",
    category: "Kitchen",
  },
  {
    href: "/microwave-power-calculator",
    title: "Microwave Power Station Calculator",
    description: "Battery capacity and the continuous AC output a power station needs to run a microwave, based on its electrical input watts — not its cooking-power rating.",
    category: "Kitchen",
  },
  {
    href: "/induction-cooktop-power-calculator",
    title: "Induction Cooktop Power Station Calculator",
    description: "Battery capacity and continuous AC output for a portable induction cooktop — a 1,500–1,800 W burner held for a full meal, where a lower power setting is not proportionally lighter.",
    category: "Kitchen",
  },
  {
    href: "/toaster-oven-power-calculator",
    title: "Toaster Oven Power Station Calculator",
    description: "Battery capacity and continuous AC output for a toaster oven — a 1,000–1,800 W countertop oven held through a preheat and a full bake.",
    category: "Kitchen",
  },
  {
    href: "/rice-cooker-power-calculator",
    title: "Rice Cooker Power Station Calculator",
    description: "Battery capacity and continuous AC output for a rice cooker — a low 200–1,000 W load over a cook cycle, plus a separate keep-warm estimate.",
    category: "Kitchen",
  },
  {
    href: "/slow-cooker-power-calculator",
    title: "Slow Cooker Power Station Calculator",
    description: "Battery capacity for a slow cooker — a low 100–400 W draw held for 4 to 10 hours, where the runtime, not the wattage, sizes the battery.",
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
    href: "/hair-dryer-power-calculator",
    title: "Hair Dryer Power Station Calculator",
    description: "Battery capacity and continuous AC output for a hair dryer — a short run, but a 1,500–1,875 W heating element the inverter has to hold.",
    category: "Personal care",
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
