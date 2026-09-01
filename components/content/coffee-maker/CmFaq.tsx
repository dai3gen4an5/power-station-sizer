import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const CM_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for a coffee maker?",
    answer:
      "Size it on two numbers. Continuous AC output must be at or above the coffee maker's input watts, held for the whole brew — a 1,200-watt machine needs a 1,200-watt or larger inverter. Battery capacity is the watts times the minutes of use divided by 60, plus about 25% for inverter losses and a reserve; a 1,200-watt coffee maker for 10 minutes is about 200 Wh raw and roughly 300 Wh recommended, which almost any power station holds.",
  },
  {
    question: "Can a 500Wh power station run a coffee maker?",
    answer:
      "It has enough stored energy for a brew or two, but many 500 Wh units have an inverter around 500 watts, well below the 900 to 1,500 watts a full-size coffee maker draws while heating. A low-wattage single-cup brewer might work; a carafe machine usually will not. Check the continuous output rating.",
  },
  {
    question: "Can a 1000Wh power station run a coffee maker?",
    answer:
      "On energy, easily — a single brew is only a couple of hundred watt-hours. Whether it runs depends on the inverter: a 1,000 Wh unit with a 1,000-watt inverter cannot sustain a 1,200 to 1,500-watt machine, while a 1,000 Wh-class unit with a 1,500-watt or larger inverter can.",
  },
  {
    question: "How many watts does a coffee maker use?",
    answer:
      "Most drip and single-serve machines draw somewhere between about 600 and 1,500 watts of electrical input while heating water. Warming plates draw less. Read the figure off the rating label or measure it with a watt meter rather than assuming one from the machine type.",
  },
  {
    question: "How many Wh does a coffee maker use in 10 minutes?",
    answer:
      "Multiply the input watts by 10 and divide by 60. A 1,200-watt coffee maker uses 1,200 x 10 / 60 = 200 Wh in 10 minutes, before inverter efficiency and a reserve. A 900-watt machine uses 150 Wh in the same time.",
  },
  {
    question: "Why does a coffee maker need high AC output if it only runs briefly?",
    answer:
      "The heating element draws its full wattage the entire time it is on, even though that is only a few minutes. The inverter has to supply that continuously or it overloads. A short run keeps the watt-hour total small but does not reduce the instantaneous power demand.",
  },
  {
    question: "Can I run a Keurig from a portable power station?",
    answer:
      "Yes, if the power station's continuous AC output covers the brewer's input watts, which are typically around 1,200 to 1,500 watts while heating. The battery capacity is rarely the limit because each cup brews quickly. Check the label for the exact wattage and voltage.",
  },
  {
    question: "Can I run an espresso machine from a power station?",
    answer:
      "You can use this calculator by entering the machine's actual electrical input watts and a realistic operating time. An espresso machine's boiler and pump make the load more variable than a drip machine, and this calculator does not model pump surges or boiler cycling, so also check any startup or peak figure the manufacturer publishes.",
  },
  {
    question: "Does keep-warm mode use much more battery?",
    answer:
      "It can. A warming plate left on for an hour or two keeps drawing power the whole time and may use more energy than the brew itself. Add the keep-warm minutes to the use time, or calculate the plate's draw separately, rather than assuming it is negligible.",
  },
  {
    question: "Can I use a coffee maker while camping or during a power outage?",
    answer:
      "Yes, from a power station whose inverter can supply the coffee maker's watts. Treat it as a convenience load: during an outage, back up medical equipment, the fridge, and lights first. For camping, a stovetop or manual brewer avoids the power question altogether.",
  },
];

export function CmFaq() {
  return <FaqSection items={CM_FAQ_ITEMS} path="/coffee-maker-power-calculator" />;
}
