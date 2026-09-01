import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const EK_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for an electric kettle?",
    answer:
      "Size it on two numbers. Continuous AC output must be at or above the kettle's input watts, held for the whole boil — a 1,500-watt kettle needs a 1,500-watt or larger inverter. Battery capacity is the watts times the minutes of use divided by 60, plus about 25% for inverter losses and a reserve; a 1,500-watt kettle for 5 minutes is about 125 Wh raw and roughly 185 Wh recommended, which almost any power station holds.",
  },
  {
    question: "Can a 500Wh power station run an electric kettle?",
    answer:
      "It has enough stored energy for several boils, but many 500 Wh units have an inverter around 500 watts, well below the 1,200 to 1,800 watts a full-size kettle draws. A low-wattage travel kettle might work from a 500 Wh-class unit with a 1,000-watt inverter; a standard home kettle will not. Check the continuous output rating.",
  },
  {
    question: "Can a 1000Wh power station run a 1500W kettle?",
    answer:
      "On energy, easily — a single boil is only a bit over a hundred watt-hours. Whether it runs depends on the inverter: a 1,000 Wh unit with a 1,000-watt inverter cannot sustain a 1,500-watt kettle, while a 1,000 Wh-class unit with a 1,500-watt or larger inverter can.",
  },
  {
    question: "How many watts does an electric kettle use?",
    answer:
      "Full-size home kettles typically draw 1,200 to 1,800 watts of electrical input while boiling. Compact and travel kettles are often 600 to 1,000 watts. Read the figure off the rating label or measure it with a watt meter rather than assuming one.",
  },
  {
    question: "How many Wh does a kettle use in five minutes?",
    answer:
      "Multiply the input watts by 5 and divide by 60. A 1,500-watt kettle uses 1,500 x 5 / 60 = 125 Wh in five minutes, before inverter efficiency and a reserve. A 1,000-watt kettle uses about 83 Wh in the same time.",
  },
  {
    question: "Why does a kettle need high inverter output if it runs briefly?",
    answer:
      "The heating element draws its full wattage the entire time it is on, even though that is only a few minutes. The inverter has to supply that continuously or it overloads. A short run keeps the watt-hour total small but does not reduce the instantaneous power demand.",
  },
  {
    question: "Can I use an electric kettle while camping?",
    answer:
      "Yes, if the power station's continuous AC output covers the kettle's input watts. A low-wattage travel kettle is the most realistic AC option; a fast-boil home kettle needs a large inverter. A stovetop kettle on a camp stove avoids the power question altogether.",
  },
  {
    question: "Can I use an electric kettle during a power outage?",
    answer:
      "Yes, from a power station whose inverter can supply the kettle's watts. Treat it as a convenience load: back up medical equipment, the refrigerator, and lighting first, then boil water if the inverter has the output to spare.",
  },
  {
    question: "Does keep-warm mode use more battery?",
    answer:
      "Yes. A keep-warm setting holds the water hot for 20 to 60 minutes by cycling the element, and over that window it can use as much energy as the boil itself. Add the keep-warm minutes to the use time, or calculate that draw separately, rather than assuming it is negligible.",
  },
  {
    question: "Can a portable power station run an 1800W kettle?",
    answer:
      "Only if its inverter's continuous AC output is at least 1,800 watts. That generally means a larger power station in the 2,000 Wh class or above. The battery capacity is not the limit — the continuous output is.",
  },
];

export function EkFaq() {
  return <FaqSection items={EK_FAQ_ITEMS} path="/electric-kettle-power-calculator" />;
}
