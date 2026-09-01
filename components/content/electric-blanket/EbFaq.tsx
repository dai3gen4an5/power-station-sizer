import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const EB_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for an electric blanket?",
    answer:
      "For a household AC blanket, size it on battery capacity and runtime. Its wattage is small — examples range from tens of watts to well over 100 watts — so among the listed power stations AC output is usually not the limiting spec, while a full night turns that small load into several hundred watt-hours. Energy is the active watts times the hours; a 75-watt blanket for 8 hours is 600 Wh raw and roughly 882 Wh after inverter losses and a reserve, which points to a 1,000 Wh power station. This is electrical sizing only — check the blanket manual permits inverter or power-station use.",
  },
  {
    question: "Can a 500Wh power station run an electric blanket?",
    answer:
      "On the electrical side, for a few hours in the evening. With this page's default 85% inverter efficiency and 20% reserve, a 500 Wh nameplate battery plans for roughly 340 Wh of load-side energy, which covers a low-wattage throw for an evening. A 75-watt blanket for a full 8-hour night is 600 Wh raw and past that, and a higher-wattage dual-control blanket runs a 500 Wh unit down in a few hours. Sizing does not establish that your blanket manufacturer allows inverter power; the manual has to.",
  },
  {
    question: "Can a 1000Wh power station run an electric blanket overnight?",
    answer:
      "On the electrical side, usually, for one blanket. With this page's default 85% inverter efficiency and 20% reserve, a 1,000 Wh nameplate battery plans for about 680 Wh of load-side energy. A 75-watt blanket for 8 hours needs roughly 882 Wh recommended, so it works with little margin; a lower setting or a smaller blanket leaves more room, and a higher-wattage blanket on high may not last the night. Confirm the blanket manual permits inverter or power-station use before relying on this.",
  },
  {
    question: "How many watts does an electric blanket use?",
    answer:
      "It varies widely by size, controller, and model — examples range from tens of watts for a small heated throw to well over 100 watts for a large dual-control blanket on high. Treat any range as a search-intent example, not a rule. Read the figure off the label, controller, or plug pack, or measure it with a watt meter while the blanket is actively heating.",
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
      "A 12V heated blanket runs from the power station's DC output and bypasses the AC inverter, so this page's AC model does not apply to it. Size it from its actual 12V draw times the hours, allowing for any DC-conversion losses the device or power source specifies, and do not carry the AC calculator's result or its required AC output across to a DC blanket. Check the manufacturer's manual for permitted power sources, as with an AC model.",
  },
  {
    question: "Can I use an electric blanket while camping or in an RV?",
    answer:
      "Often, yes — a blanket usually uses far less power than heating a whole tent or cabin with a space heater, because it warms the person and bedding directly. Plan the overnight energy against your battery, use a 12V blanket where possible to bypass the inverter, and budget extra margin for cold nights, which reduce a battery's usable capacity. First confirm the blanket manual allows inverter or generator power.",
  },
  {
    question: "Can I use an electric blanket during a power outage?",
    answer:
      "For a household AC blanket whose manual permits inverter power, it is one of the more efficient winter-outage loads: a blanket drawing tens of watts can keep a person warm all night on a small share of what a space heater would use, because it heats the person rather than the room. Back up medical equipment, the fridge, and lighting first, then run the blanket, and drop to a lower setting once the bed is warm.",
  },
];

export function EbFaq() {
  return <FaqSection items={EB_FAQ_ITEMS} path="/electric-blanket-power-calculator" />;
}
