import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const IC_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for an induction cooktop?",
    answer:
      "Size it on two numbers. Continuous AC output must be at or above the cooktop's input watts at the setting you use, held for the whole cook — an 1,800-watt cooktop needs an 1,800-watt or larger inverter. Battery capacity is the watts times the minutes of use divided by 60, plus about 25% for inverter losses and a reserve; an 1,800-watt cooktop for 30 minutes is about 900 Wh raw and roughly 1,324 Wh recommended, so a 2,000 Wh-class power station covers the energy while the inverter rating decides whether it runs at all.",
  },
  {
    question: "Can a 1000Wh power station run an induction cooktop?",
    answer:
      "Only for a short cook, and only if its inverter is large enough. A 15-minute boil at 1,800 watts is about 450 Wh raw and near 660 Wh after losses and a reserve, which fits a 1,000 Wh unit, but a full 30-minute meal is over 1,300 Wh recommended and does not. Many 1,000 Wh power stations also have a 1,000-watt inverter, which cannot sustain a 1,500-to-1,800-watt cooktop; you need a 1,000 Wh-class unit with a 1,500-watt or larger continuous inverter.",
  },
  {
    question: "Can a 2000Wh power station run an 1800W induction burner?",
    answer:
      "Usually yes. A 2,000 Wh unit has roughly 1,300 to 1,600 Wh usable — enough for a full 30-minute meal at 1,800 watts with margin — and 2,000 Wh-class units typically have a 2,000-watt or larger continuous inverter, which covers an 1,800-watt burner. Confirm the specific unit's rated continuous AC output and its voltage before relying on it.",
  },
  {
    question: "How many watts does a portable induction cooktop use?",
    answer:
      "Single-burner portable induction cooktops are commonly rated 1,500 to 1,800 watts at maximum; compact travel units can be around 1,200 watts, and double-burner or built-in units go higher. Read the figure off the rating label or measure it with a watt meter at the setting you use rather than assuming one from the burner diameter.",
  },
  {
    question: "How many Wh does an 1800W induction cooktop use in 15 minutes?",
    answer:
      "Multiply the input watts by 15 and divide by 60. An 1,800-watt cooktop uses 1,800 x 15 / 60 = 450 Wh in 15 minutes, before inverter efficiency and a reserve. Allowing about 25% for an 85% inverter and a 20% reserve brings that to roughly 660 Wh of recommended battery capacity.",
  },
  {
    question: "Does a lower power setting use proportionally less electricity?",
    answer:
      "Not reliably. The number on the dial is a heat level, not a measured wattage, and the relationship is set by the manufacturer. Many cooktops reach a lower level by switching the coil on and off, so the average power drops but the peak draw stays near the full nameplate wattage. Enter the actual input watts for your setting, measured if possible, and otherwise the manufacturer's maximum as a conservative value.",
  },
  {
    question: "Does an induction cooktop need startup surge power?",
    answer:
      "Not meaningfully. An induction cooktop is a heating load driven by power electronics rather than a motor; its start-up draw is brief and minor next to the steady cooking load. This calculator does not add a surge figure. If your model's manufacturer publishes a peak or starting figure, check the power station's surge rating against it as well.",
  },
  {
    question: "Can I use induction cooking while camping or in an RV?",
    answer:
      "Only with a power station or inverter rated for the cooktop's continuous watts, which rules out most small and mid-size units for a 1,500-to-1,800-watt burner. You also need real battery capacity for the cook and a way to recharge close to a kilowatt-hour per meal. Check the continuous rating and the outlet it feeds.",
  },
  {
    question: "Can I use an induction cooktop during a power outage?",
    answer:
      "Yes, from a power station whose inverter can supply the cooktop's watts. Back up medical equipment, the fridge, and lighting first, cook one burner at a time, and recharge between meals. A microwave or kettle is far lighter on the battery for simple reheating or boiling.",
  },
  {
    question: "Do I need special cookware for induction cooking?",
    answer:
      "Yes. The pan needs a ferromagnetic base — cast iron or magnetic stainless steel. Aluminium, copper, glass, and most non-magnetic stainless will not heat. A fridge magnet that sticks firmly to the pan base is a quick check. This calculator sizes the electrical side only and does not verify cookware.",
  },
];

export function IcFaq() {
  return <FaqSection items={IC_FAQ_ITEMS} path="/induction-cooktop-power-calculator" />;
}
