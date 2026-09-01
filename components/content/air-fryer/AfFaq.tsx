import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const AF_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for an air fryer?",
    answer:
      "Size it on two numbers. Continuous AC output must be at or above the air fryer's input watts, held for the whole cook — a 1,500-watt air fryer needs a 1,500-watt or larger inverter. Battery capacity is the watts times the minutes of use divided by 60, plus about 25% for inverter losses and a reserve; a 1,500-watt air fryer for 20 minutes is about 500 Wh raw and roughly 735 Wh recommended, so a mid-size power station holds the energy while the inverter rating decides whether it runs.",
  },
  {
    question: "Can a 500Wh power station run an air fryer?",
    answer:
      "Rarely. A single 20-minute cook at 1,500 watts is about 500 Wh raw, more than the usable capacity of a 500 Wh unit, and many 500 Wh power stations have an inverter around 500 watts — far below what an air fryer draws. A very small compact model on a short cook might fit a 500 Wh-class unit with a larger inverter; a normal air fryer will not.",
  },
  {
    question: "Can a 1000Wh power station run a 1500W air fryer?",
    answer:
      "For a cook or two on energy, yes. Whether it runs depends on the inverter: a 1,000 Wh unit with a 1,000-watt inverter cannot sustain a 1,500-watt air fryer, while a 1,000 Wh-class unit with a 1,500-watt or larger inverter can. Several batches will still run the battery down.",
  },
  {
    question: "Can a portable power station run an 1800W air fryer?",
    answer:
      "Only if its inverter's continuous AC output is at least 1,800 watts, which generally means a larger power station in the 2,000 Wh class or above. The battery capacity is not usually the limit for a single cook — the continuous output is.",
  },
  {
    question: "How many watts does an air fryer use?",
    answer:
      "Compact single-basket air fryers are often 1,000 to 1,300 watts of electrical input; mid-size and large models are commonly 1,500 to 1,800 watts. Read the figure off the rating label or measure it with a watt meter rather than assuming one from the basket size.",
  },
  {
    question: "How many Wh does an air fryer use in 20 minutes?",
    answer:
      "Multiply the input watts by 20 and divide by 60. A 1,500-watt air fryer uses 1,500 x 20 / 60 = 500 Wh in 20 minutes, before inverter efficiency and a reserve. A 1,000-watt model uses about 333 Wh in the same time.",
  },
  {
    question: "Does an air fryer need startup surge power?",
    answer:
      "Not meaningfully. An air fryer is a resistive heating element with a small fan; its start-up draw is brief and minor next to the steady heater load. This calculator does not add a surge figure. If your model's manufacturer publishes a peak or starting figure, check the power station's surge rating against it as well.",
  },
  {
    question: "Does preheating use more battery?",
    answer:
      "Yes — preheat runs the element at full power before you add food, so it adds a few minutes of draw. This calculator does not add preheat automatically; include those minutes in the cook time if you preheat.",
  },
  {
    question: "Can I use an air fryer in an RV or while camping?",
    answer:
      "Only with a power station or inverter rated for its continuous watts, which rules out most small and mid-size units for a full-size air fryer. A compact model on a short cook is more realistic. Check the continuous rating and the outlet it feeds.",
  },
  {
    question: "Can I use an air fryer during a power outage?",
    answer:
      "Yes, from a power station whose inverter can supply the air fryer's watts. Back up medical equipment, the fridge, and lighting first, cook one batch at a time, and recharge between meals. A microwave is far lighter on the battery for simple reheating.",
  },
];

export function AfFaq() {
  return <FaqSection items={AF_FAQ_ITEMS} path="/air-fryer-power-calculator" />;
}
