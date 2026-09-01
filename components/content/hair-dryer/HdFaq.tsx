import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const HD_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for a hair dryer?",
    answer:
      "Size it on two numbers. Continuous AC output must be at or above the dryer's input watts for the setting you use, held for the whole run — a 1,500-watt dryer needs a 1,500-watt or larger inverter. Battery capacity is the watts times the minutes of use divided by 60, plus about 25% for inverter losses and a reserve; a 1,500-watt dryer for 10 minutes is about 250 Wh raw and roughly 370 Wh recommended, which almost any power station holds.",
  },
  {
    question: "Can a 500Wh power station run a hair dryer?",
    answer:
      "It has enough stored energy for several dries, but many 500 Wh units have an inverter around 500 watts, well below the 1,500 to 1,875 watts a full-size dryer draws on high. A low-wattage travel dryer might work from a 500 Wh-class unit with a 1,000-watt inverter; a standard home dryer on high will not. Check the continuous output rating.",
  },
  {
    question: "Can a 1000Wh power station run a 1500W hair dryer?",
    answer:
      "On energy, easily — a single dry is only a couple of hundred watt-hours. Whether it runs depends on the inverter: a 1,000 Wh unit with a 1,000-watt inverter cannot sustain a 1,500-watt dryer, while a 1,000 Wh-class unit with a 1,500-watt or larger inverter can.",
  },
  {
    question: "Can a portable power station run an 1875W hair dryer?",
    answer:
      "Only if its inverter's continuous AC output is at least 1,875 watts. That generally means a larger power station in the 2,000 Wh class or above. The battery capacity is not the limit — the continuous output is. Using a lower heat setting reduces the wattage on many dryers.",
  },
  {
    question: "How many watts does a hair dryer use?",
    answer:
      "Full-size dryers typically draw 1,500 to 1,875 watts of electrical input on high heat. Travel and compact dryers are often 800 to 1,200 watts. Lower heat settings usually draw less. Read the figure off the rating label or measure it with a watt meter per setting.",
  },
  {
    question: "How many Wh does a hair dryer use in 10 minutes?",
    answer:
      "Multiply the input watts by 10 and divide by 60. A 1,500-watt dryer uses 1,500 x 10 / 60 = 250 Wh in 10 minutes, before inverter efficiency and a reserve. An 1,875-watt dryer uses about 313 Wh in the same time.",
  },
  {
    question: "Why does a hair dryer need high inverter output?",
    answer:
      "Almost all of a hair dryer's draw is its heating element, which pulls its full wattage the entire time the dryer is on. The inverter has to supply that continuously or it overloads. The short run keeps the watt-hour total small but does not reduce the instantaneous power demand.",
  },
  {
    question: "Do low heat settings use less power?",
    answer:
      "Usually, yes — the heating element is most of the load, so a lower heat setting draws fewer watts, and a cool-shot button runs the motor only, at a fraction of the wattage. How much less varies by dryer, so enter the watts for the setting you actually use rather than applying a fixed percentage.",
  },
  {
    question: "Can I use a hair dryer in an RV or while camping?",
    answer:
      "A low-wattage travel dryer in a short session, yes, if the inverter is rated for its watts. A full-size 1,500 to 1,875-watt dryer is a heavy load that most RV and portable inverters cannot sustain at full power. Check the continuous rating and the outlet it feeds.",
  },
  {
    question: "Can I use a hair dryer during a power outage?",
    answer:
      "Yes, from a power station whose inverter can supply the dryer's watts. The battery cost is small. Back up medical equipment, the fridge, and lights first, and consider a lower heat setting to bring the wattage within your inverter's continuous rating.",
  },
];

export function HdFaq() {
  return <FaqSection items={HD_FAQ_ITEMS} path="/hair-dryer-power-calculator" />;
}
