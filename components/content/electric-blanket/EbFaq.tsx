import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const EB_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for an electric blanket?",
    answer:
      "Size it on battery capacity and runtime, not inverter output. An electric blanket draws only 40 to 150 watts, so any power station's inverter can sustain it, but a full night turns that small load into several hundred watt-hours. Energy is the active watts times the hours; a 75-watt blanket for 8 hours is 600 Wh raw and roughly 882 Wh after inverter losses and a reserve, which points to a 1,000 Wh power station.",
  },
  {
    question: "Can a 500Wh power station run an electric blanket?",
    answer:
      "For a few hours in the evening, yes. A 50-to-60-watt throw for 3 to 4 hours fits inside a 500 Wh unit's usable capacity of roughly 325 to 400 Wh. A 75-watt blanket for a full 8-hour night is 600 Wh raw, past that usable figure, and a 120-to-150-watt dual-control blanket runs a 500 Wh unit down in a few hours.",
  },
  {
    question: "Can a 1000Wh power station run an electric blanket overnight?",
    answer:
      "Usually, for one blanket. A 1,000 Wh unit has about 650 to 800 Wh usable. A 75-watt blanket for 8 hours needs roughly 882 Wh recommended, so it works with little margin; a lower setting or a smaller blanket leaves more room, and a 120-to-150-watt blanket on high may not last the night. Thermostat cycling often makes the real overnight draw lower than the planning figure.",
  },
  {
    question: "How many watts does an electric blanket use?",
    answer:
      "Heated throws are often 40 to 80 watts; single blankets are commonly 60 to 100 watts; queen and king blankets with dual controls can total 120 to 180 watts with both sides on high. Read the figure off the label, controller, or plug pack, or measure it with a watt meter while it is actively heating.",
  },
  {
    question: "How many Wh does a 75W blanket use in 8 hours?",
    answer:
      "Multiply the active watts by the hours: 75 x 8 = 600 Wh, before inverter efficiency and a reserve. Allowing about 25% for an 85% inverter and a 20% reserve brings that to roughly 882 Wh of recommended battery capacity.",
  },
  {
    question: "Do lower heat settings use less battery?",
    answer:
      "Generally yes, but not by a fixed ratio. The relationship between a Low, Medium, or High setting and the actual power draw is set by the manufacturer and is not a clean percentage. Enter the measured active watts for the setting you use rather than assuming Low is half of High.",
  },
  {
    question: "Does thermostat cycling reduce battery use?",
    answer:
      "It can. Once the blanket is warm, the controller switches the element on and off, so the average power over a night is often below the active draw. How much lower depends on the room, the bedding, and the setting, so this calculator does not assume a reduction. Keep entering the active or rated wattage, because the same figure sizes the required AC output; do any lower energy-only estimate separately and still check the power station's output against the full wattage.",
  },
  {
    question: "Can I use a 12V heated blanket with a power station?",
    answer:
      "Yes, and it is the most efficient option because a 12V blanket runs from the power station's DC output and skips the inverter and its conversion loss. It is typically 30 to 60 watts. Use the blanket's actual 12V consumption for the energy estimate, and ignore this page's inverter-efficiency setting for a DC blanket.",
  },
  {
    question: "Can I use an electric blanket while camping or in an RV?",
    answer:
      "Yes, and it is far more efficient than a space heater for keeping one person warm off-grid. Plan the overnight energy against your battery, use a 12V blanket if you can to skip the inverter, and budget extra margin for cold nights, which reduce a battery's usable capacity.",
  },
  {
    question: "Can I use an electric blanket during a power outage?",
    answer:
      "Yes, and in a winter outage it is one of the best uses of a portable power station: 60 to 100 watts keeps a person warm all night on a fraction of what a space heater would use. Back up medical equipment, the fridge, and lighting first, then run the blanket, and drop to a lower setting once the bed is warm.",
  },
];

export function EbFaq() {
  return <FaqSection items={EB_FAQ_ITEMS} path="/electric-blanket-power-calculator" />;
}
