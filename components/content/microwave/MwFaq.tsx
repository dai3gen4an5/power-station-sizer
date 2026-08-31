import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const MW_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for a microwave?",
    answer:
      "Size it on two separate numbers. For battery capacity, multiply the microwave's electrical input watts by the minutes of use divided by 60, then add headroom for inverter losses and a reserve; a 1,500-watt input microwave run 10 minutes is about 250 Wh raw, roughly 370 Wh recommended, so almost any power station holds enough. The number that matters more is continuous AC output: the inverter's continuous rating must be at or above the microwave's input watts, or it will overload.",
  },
  {
    question: "How many watts does a microwave actually use?",
    answer:
      "A typical countertop microwave draws roughly 1,200 to 1,800 watts of electrical input while running on high. That is more than the cooking-power number on the front. Use the input or power-consumption figure from the rear rating label, the manual, or a plug-in watt meter.",
  },
  {
    question: "Is microwave cooking wattage the same as electrical input wattage?",
    answer:
      "No. The cooking or output wattage (700 W, 1000 W, and so on) describes how much heating the oven delivers into food. The electrical input wattage is how much power it pulls from the outlet, and it is higher. The difference is not a fixed ratio, so read the input figure directly rather than scaling the cooking figure.",
  },
  {
    question: "Can a 1000Wh power station run a microwave?",
    answer:
      "On stored energy, yes, easily. Whether it runs the microwave at all depends on the inverter: a 1,000 Wh unit with a 1,000 W inverter cannot sustain a 1,200 to 1,700 W microwave, while a 1,000 Wh-class unit with a 1,500 W or larger inverter can run a smaller one. Check the continuous AC output rating against the microwave's input watts.",
  },
  {
    question: "Can a 2000Wh power station run a microwave?",
    answer:
      "For most countertop microwaves, yes. A 2,000 Wh power station usually has a 2,000 W or larger inverter, which covers a typical 1,200 to 1,800 W input with headroom, and the battery holds many sessions. Confirm the continuous rating, and note that large commercial microwaves can exceed 2,000 W input.",
  },
  {
    question: "How many Wh does a microwave use in 10 minutes?",
    answer:
      "Multiply the input watts by 10 and divide by 60. A 1,500-watt input microwave uses 1,500 x 10 / 60 = 250 Wh in 10 minutes, before inverter efficiency and reserve. A 1,200-watt input microwave uses 200 Wh in the same time.",
  },
  {
    question: "Can I run a microwave from a portable power station?",
    answer:
      "Yes, if the power station's continuous AC output is at least the microwave's electrical input watts and it has a suitable AC outlet, ideally on a pure sine wave inverter. The battery capacity is rarely the limiting factor because sessions are short.",
  },
  {
    question: "Does a microwave need startup surge power?",
    answer:
      "A microwave has a brief inrush when it powers on, but most manufacturer specs do not publish a separate surge figure and the continuous input watts are usually the number that matters. If your manufacturer does list a startup or peak figure, make sure the power station's surge rating covers it. This calculator does not estimate a surge from the input watts.",
  },
  {
    question: "Can I use a microwave during a power outage?",
    answer:
      "Yes, from a power station whose inverter can supply the microwave's input watts continuously. Treat it as a convenience load: back up medical equipment, the refrigerator, and lighting first, then add the microwave if the inverter has the output to spare.",
  },
  {
    question: "Can I run an RV microwave from a portable power station?",
    answer:
      "Yes, if its continuous AC output meets the microwave's input watts and it connects to the microwave's circuit. Many RVs already have an onboard inverter; check whether its continuous rating covers the microwave and whether it feeds that outlet.",
  },
];

export function MwFaq() {
  return <FaqSection items={MW_FAQ_ITEMS} path="/microwave-power-calculator" />;
}
