import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const RC_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for a rice cooker?",
    answer:
      "Size it on two numbers. Continuous AC output must be at or above the cooker's input watts while the element heats — most rice cookers are 200 to 800 watts, so a mid-size power station clears that, though IH and pressure models draw more. Cook-cycle energy is the watts times the cycle minutes divided by 60, plus about 25% for inverter losses and a reserve; a 700-watt cooker for 45 minutes is 525 Wh raw and roughly 772 Wh recommended, so a 1,000 Wh unit covers the cycle with room for keep-warm.",
  },
  {
    question: "Can a 500Wh power station run a rice cooker?",
    answer:
      "For a small 200-to-400-watt travel cooker, yes — the cook cycle uses well under a 500 Wh unit's usable capacity and fits a typical 500-watt inverter. A 700-watt family cooker usually exceeds a 500 Wh unit's inverter, and a full cycle plus keep-warm can pass its usable capacity.",
  },
  {
    question: "Can a 1000Wh power station run a rice cooker?",
    answer:
      "Comfortably for most models. A 1,000 Wh unit has about 650 to 800 Wh usable — enough for a 700-watt cooker's full cycle with a bit left for a keep-warm hour or two — and its inverter is far above any common rice cooker's wattage. Check the cycle energy for an IH or pressure model, which uses more.",
  },
  {
    question: "How many watts does a rice cooker use?",
    answer:
      "Small travel and single-cup cookers are often 200 to 400 watts; typical family cookers are 500 to 800 watts; large, induction-heating, and pressure models can be 1,000 watts or more. Read the figure off the rating label or measure it with a watt meter rather than assuming one from the capacity in cups or litres.",
  },
  {
    question: "How many Wh does a rice cooker use per cycle?",
    answer:
      "Multiply the input watts by the cycle minutes and divide by 60. A 700-watt cooker for a 45-minute cycle uses 700 x 45 / 60 = 525 Wh before inverter efficiency and a reserve; a 300-watt cooker for 30 minutes uses about 150 Wh. Keep-warm time adds more on top of this.",
  },
  {
    question: "Does keep-warm mode use much battery?",
    answer:
      "Over a few hours it can add as much energy as the cook itself. Keep-warm may cycle or modulate the heater, and its average draw varies substantially by model. This calculator sizes the cook cycle only; if you know the keep-warm watts, work out that energy separately (keep-warm watts times keep-warm hours) and add it to the cook-cycle figure, or use the manufacturer's total measured full-cycle figure.",
  },
  {
    question: "Do IH rice cookers use more power?",
    answer:
      "Yes. Induction-heating and pressure rice cookers draw more than a simple resistive cooker of the same capacity, often 1,000 watts or more at peak, which raises both the cook-cycle energy and the continuous AC output the inverter must supply. There is no fixed conversion — use your model's actual rated input watts.",
  },
  {
    question: "Can I use a rice cooker while camping?",
    answer:
      "Yes — a rice cooker is one of the friendlier hot-food loads off-grid. A small model runs from a modest power station and needs no watching once it starts. Plan the cook-plus-keep-warm energy against your battery, and check the inverter's continuous rating covers the cooker's watts.",
  },
  {
    question: "Can I use a rice cooker in an RV?",
    answer:
      "Most RV inverters clear a rice cooker's wattage easily. The thing to plan is the cook-plus-keep-warm energy against your battery bank, not the output. IH and pressure models draw more, so check their rating.",
  },
  {
    question: "Can I use a rice cooker during a power outage?",
    answer:
      "Yes, from a power station whose inverter can supply the cooker's watts — usually a formality for a resistive model. Back up medical equipment, the fridge, and lighting first, then run the cook cycle, and switch keep-warm off once the rice is done to save energy.",
  },
];

export function RcFaq() {
  return <FaqSection items={RC_FAQ_ITEMS} path="/rice-cooker-power-calculator" />;
}
