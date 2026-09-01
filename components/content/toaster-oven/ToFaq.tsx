import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const TO_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for a toaster oven?",
    answer:
      "Size it on two numbers. Continuous AC output must be at or above the oven's input watts, held for the whole cook — a 1,500-watt toaster oven needs a 1,500-watt or larger inverter. Battery capacity is the watts times the minutes of use divided by 60, plus about 25% for inverter losses and a reserve; a 1,500-watt oven for 30 minutes is 750 Wh raw and roughly 1,100 Wh recommended, so a 2,000 Wh-class power station covers the energy while the inverter rating decides whether it runs at all.",
  },
  {
    question: "Can a 1000Wh power station run a toaster oven?",
    answer:
      "Only for a short cook, and only if its inverter is large enough. A 10-to-15-minute reheat at 1,500 watts is a few hundred watt-hours and fits a 1,000 Wh unit, but a full 30-minute bake is over 1,100 Wh recommended and does not. Many 1,000 Wh power stations also have a 1,000-watt inverter, which cannot sustain a 1,500-to-1,800-watt oven; you need a 1,000 Wh-class unit with a 1,500-watt or larger continuous inverter.",
  },
  {
    question: "Can a 2000Wh power station run an 1800W toaster oven?",
    answer:
      "Usually yes. A 2,000 Wh unit has roughly 1,300 to 1,600 Wh usable — enough for a full 30-minute bake with margin — and 2,000 Wh-class units typically have a 2,000-watt or larger continuous inverter, which covers an 1,800-watt oven. Confirm the specific unit's rated continuous AC output and its voltage before relying on it.",
  },
  {
    question: "How many watts does a toaster oven use?",
    answer:
      "Compact two-slice toaster ovens are often 1,000 to 1,200 watts of electrical input; mid-size and larger countertop ovens are commonly 1,500 to 1,800 watts. Read the figure off the rating label or measure it with a watt meter rather than assuming one from the oven size.",
  },
  {
    question: "How many Wh does a toaster oven use in 30 minutes?",
    answer:
      "Multiply the input watts by 30 and divide by 60. A 1,500-watt toaster oven uses 1,500 x 30 / 60 = 750 Wh in 30 minutes, before inverter efficiency and a reserve. Allowing about 25% for an 85% inverter and a 20% reserve brings that to roughly 1,100 Wh of recommended battery capacity.",
  },
  {
    question: "Does preheating a toaster oven use more battery?",
    answer:
      "Yes — preheat runs the elements at full power before the bake, so it adds a few minutes of draw. This calculator does not add preheat automatically; include those minutes in the cook time if you preheat.",
  },
  {
    question: "Does a toaster oven need startup surge power?",
    answer:
      "Not meaningfully. A toaster oven is a resistive heating load, sometimes with a small convection fan; its start-up draw is brief and minor next to the steady element load. This calculator does not add a surge figure. If your model's manufacturer publishes a peak or starting figure, check the power station's surge rating against it as well.",
  },
  {
    question: "Does convection mode change the power draw?",
    answer:
      "Barely. The convection fan draws only a few watts, and that is already included in the wattage on the rating label. Enter the nameplate input watts and it covers the elements and the fan together; convection's shorter cook times are up to you to reflect in the minutes.",
  },
  {
    question: "Can I use a toaster oven in an RV or while camping?",
    answer:
      "Only with a power station or inverter rated for its continuous watts, which rules out most small and mid-size units for a full-size oven. A compact model on a short cook is more realistic. Check the continuous rating and the outlet it feeds.",
  },
  {
    question: "Can I use a toaster oven during a power outage?",
    answer:
      "Yes, from a power station whose inverter can supply the oven's watts. Back up medical equipment, the fridge, and lighting first, cook one batch at a time, and recharge between meals. A microwave is far lighter on the battery for simple reheating.",
  },
];

export function ToFaq() {
  return <FaqSection items={TO_FAQ_ITEMS} path="/toaster-oven-power-calculator" />;
}
