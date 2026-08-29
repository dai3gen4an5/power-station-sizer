import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const STARLINK_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for Starlink?",
    answer:
      "Starlink hardware typically draws somewhere between 40 and 150 watts depending on the generation and conditions. Using a common example of 75 watts for 8 hours a day, that's roughly 600 Wh of daily use, which after inverter losses and a battery reserve typically points to a power station in the 750 to 1,000 Wh range for one day — more if you run it closer to continuously. Enter your specific hardware's wattage and hours of use into the calculator above for a number matched to your setup.",
  },
  {
    question: "How many watts does Starlink use?",
    answer:
      "Starlink power draw varies by hardware generation, weather (snow-melt heating can increase it), network activity, and temperature, with a commonly cited range around 40 to 150 watts. Check your specific kit's power adapter rating or measure actual consumption with a plug-in watt meter for the most accurate figure.",
  },
  {
    question: "How many watt-hours does Starlink use per day?",
    answer:
      "It depends heavily on how many hours a day you run it. A 75-watt setup used for 8 hours uses about 600 Wh, while the same setup running all 24 hours uses about 1,800 Wh — three times as much. Match the hours you enter into the calculator to your actual usage pattern.",
  },
  {
    question: "Will a 500Wh power station run Starlink?",
    answer:
      "For occasional or part-day use at a modest wattage, a 500 Wh power station can often cover several hours to about half a day of Starlink use. It's generally not enough for a full day of continuous operation. Use the calculator above with your actual wattage and hours to check.",
  },
  {
    question: "Will a 1000Wh power station run Starlink?",
    answer:
      "A 1,000 Wh power station can typically cover a full day of moderate, part-time Starlink use for many setups, though it likely won't sustain 24-hour continuous operation on its own without recharging.",
  },
  {
    question: "How long will a 2000Wh power station run Starlink?",
    answer:
      "For a 75-watt Starlink setup, a 2,000 Wh power station could theoretically run it for over a full day of continuous use, before accounting for inverter losses and reserve. Use the runtime estimator in the calculator above for a number based on your specific settings.",
  },
  {
    question: "Can I run Starlink from a power station while camping?",
    answer:
      "Yes, this is one of the most common uses for a portable power station. Size the battery around how many hours a day you'll actually use Starlink rather than assuming continuous operation, and consider a solar panel for trips longer than a day or two.",
  },
  {
    question: "Can I run Starlink and a refrigerator from the same power station?",
    answer:
      "Yes — add both devices into the calculator above so the combined daily watt-hour estimate reflects your real setup, since sizing for Starlink alone would underestimate what you actually need. Our Refrigerator Power Station Calculator covers refrigerator-specific considerations like compressor cycling in more depth.",
  },
  {
    question: "Is DC more efficient than AC for Starlink?",
    answer:
      "A direct DC-compatible setup can avoid some of the conversion loss that comes with running through an inverter, but not every Starlink kit or power station supports the same voltage or connector standard. Check your hardware's documentation and manufacturer guidance before using any non-standard power arrangement.",
  },
  {
    question: "How much solar do I need to keep Starlink running?",
    answer:
      "It depends on your daily Starlink watt-hour use compared to how much solar energy you can realistically recover each day, which varies with panel wattage, sun hours, weather, and panel angle. There's no single solar panel size that works for every setup — sizing solar for sustained, multi-day use generally means comparing your expected daily consumption against your panel's realistic daily output with some margin for cloudy days.",
  },
];

export function StarlinkFaq() {
  return <FaqSection items={STARLINK_FAQ_ITEMS} path="/starlink-power-calculator" />;
}
