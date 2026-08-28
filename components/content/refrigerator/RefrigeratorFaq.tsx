import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const REFRIGERATOR_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for a refrigerator?",
    answer:
      "Most residential refrigerators draw 100 to 250 watts while running, with a compressor that cycles on and off rather than running continuously. Assuming roughly 150 watts and about 8 equivalent hours of compressor-on time per day, that's around 1,200 Wh of daily use. After inverter losses and a battery reserve, a power station in the 1,500 to 2,000 Wh range is typically enough for one day of backup — enter your refrigerator's actual wattage into the calculator above for a number specific to your model.",
  },
  {
    question: "How many watts does a refrigerator use?",
    answer:
      "Most refrigerators draw somewhere between 100 and 250 watts while the compressor is actively running, with mini fridges on the lower end and large or older units on the higher end. Check your refrigerator's rating label or manual for its specific running wattage.",
  },
  {
    question: "How many watt-hours does a refrigerator use per day?",
    answer:
      "It depends on the model, but a common estimate for a 150-watt refrigerator with about 8 equivalent hours of compressor-on time is roughly 1,200 Wh per day. If your refrigerator's EnergyGuide label lists annual kWh use, dividing by 365 and multiplying by 1,000 gives an average daily Wh figure that may be more accurate than an estimate built from wattage alone.",
  },
  {
    question: "Will a 500Wh power station run a refrigerator?",
    answer:
      "A 500 Wh power station can typically run a small, efficient refrigerator or mini fridge for several hours to about half a day, but it's generally not enough for a full day of backup for a standard-size refrigerator. Use the calculator above with your refrigerator's actual wattage to check.",
  },
  {
    question: "Will a 1000Wh power station run a refrigerator?",
    answer:
      "A 1,000 Wh power station can often cover close to a full day for a typical refrigerator drawing around 150 watts with moderate compressor cycling, though actual runtime depends on your specific model, ambient temperature, and door-opening frequency.",
  },
  {
    question: "How long will a 2000Wh power station run a refrigerator?",
    answer:
      "For a refrigerator using roughly 1,200 Wh per day, a 2,000 Wh power station could cover somewhat more than a day and a half on average, though cycling and occasional longer compressor runs on hot days make this an approximation rather than an exact figure. Use the runtime estimator in the calculator above for a number based on your specific settings.",
  },
  {
    question: "Why does a refrigerator need extra startup power?",
    answer:
      "A refrigerator's compressor motor briefly draws more power to start spinning than it does once running, sometimes called startup or surge wattage. A power station needs an inverter rated to handle that momentary spike, in addition to having enough battery capacity for ongoing use — check your refrigerator's label for its starting wattage and your power station's surge output specification.",
  },
  {
    question: "Can a power station keep a refrigerator running during a power outage?",
    answer:
      "Yes, provided the power station has both enough battery capacity for your expected outage length and an inverter rated to handle the refrigerator's starting surge. Decide how many days you want to cover, multiply your daily watt-hour estimate accordingly, and check your specific refrigerator's and power station's specifications.",
  },
  {
    question: "Can I run a refrigerator from a power station and solar panels?",
    answer:
      "Yes — pairing a power station with solar panels is a common way to extend refrigerator backup beyond a day or two. Solar output varies with weather, panel size, and daylight hours, so it's realistic to plan for partial rather than guaranteed full recharges, and to keep some extra reserve capacity as a buffer.",
  },
  {
    question: "How do I calculate refrigerator energy use from the EnergyGuide label?",
    answer:
      "Divide the label's estimated annual kWh figure by 365 to get an average kWh per day, then multiply by 1,000 to convert to watt-hours per day. For example, 365 kWh per year works out to about 1,000 Wh per day on average — though actual daily use varies with temperature, door openings, and other factors.",
  },
];

export function RefrigeratorFaq() {
  return <FaqSection items={REFRIGERATOR_FAQ_ITEMS} path="/refrigerator-power-calculator" />;
}
