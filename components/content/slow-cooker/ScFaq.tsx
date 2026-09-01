import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const SC_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for a slow cooker?",
    answer:
      "Size it on battery capacity, not inverter output. A slow cooker draws only 100 to 400 watts, so almost any power station's inverter can sustain it, but a 4-to-10-hour cook turns that small load into a large number of watt-hours. Cook energy is the input watts times the hours; a 250-watt cooker for 6 hours is 1,500 Wh raw and roughly 2,206 Wh after inverter losses and a reserve, which points to a 3,000 Wh-class power station.",
  },
  {
    question: "Can a 500Wh power station run a slow cooker?",
    answer:
      "Only a very small cooker for a short time. A 150-watt mini cooker for 2 hours is about 300 Wh raw, which just fits a 500 Wh unit's usable capacity. A 250-watt cooker for a full 6-hour braise is 1,500 Wh raw, far beyond a 500 Wh unit. The inverter is never the limit here; the capacity is.",
  },
  {
    question: "Can a 1000Wh power station run a slow cooker?",
    answer:
      "For a shorter cook. A 1,000 Wh unit has roughly 650 to 800 Wh usable, so a 200-watt cooker for about 3 hours fits with little to spare. A 250-watt cooker for 6 hours needs over 2,000 Wh and does not. Match the unit's usable capacity to the cook energy plus any keep-warm time.",
  },
  {
    question: "Can a 2000Wh power station run a slow cooker?",
    answer:
      "For most single cooks, yes. A 2,000 Wh unit has around 1,300 to 1,600 Wh usable — enough for a 200-watt cooker over 6 to 8 hours or a 250-watt cooker for about 5 hours. A full 6-hour cook at 250 watts works out just past that, so a longer or higher-wattage cook, or a long keep-warm hold, points to a 3,000 Wh-class unit.",
  },
  {
    question: "How many watts does a slow cooker use?",
    answer:
      "Small 1.5-to-3-quart cookers are often 100 to 150 watts; 4-to-6-quart models are commonly 200 to 300 watts; large 7-to-8-quart cookers can reach 320 to 400 watts on High. Read the figure off the rating label or measure it with a watt meter rather than assuming one from the quart size.",
  },
  {
    question: "How many Wh does a slow cooker use in 6 hours?",
    answer:
      "Multiply the input watts by 6. A 250-watt slow cooker uses 250 x 6 = 1,500 Wh in 6 hours before inverter efficiency and a reserve; a 200-watt cooker uses 1,200 Wh. Allowing about 25% for an 85% inverter and a 20% reserve brings the 250-watt figure to roughly 2,206 Wh of recommended battery capacity.",
  },
  {
    question: "Does Low mode use half as much power as High?",
    answer:
      "Not reliably. On many cookers Low and High run the same heater and differ only in how often the thermostat cycles it, so the average draw is closer than the labels suggest. Low mostly changes how fast the food reaches a simmer, not the holding temperature. Enter the actual measured watts for your setting rather than assuming a percentage.",
  },
  {
    question: "Does thermostat cycling reduce battery use?",
    answer:
      "It can. Once the food is hot, the element switches on and off to hold temperature, so the average power over a long cook is often below the nameplate wattage. How much lower depends on the model, the setting, how full the pot is, and the room, so this calculator does not assume a reduction. Enter a watt-meter average if you have one.",
  },
  {
    question: "How much battery does keep-warm mode use?",
    answer:
      "It varies by model, and it runs at a lower wattage than the cook. Because the two phases draw different wattages, work out cook energy and keep-warm energy separately — each as watts times hours — and add the watt-hour figures. Do not add the wattages together or combine the watts and the hours into one calculation.",
  },
  {
    question: "Can I use a slow cooker while camping or during an outage?",
    answer:
      "Yes, and it is one of the easier appliances to run unattended, but plan for the energy. A full cook is one to two kilowatt-hours or more, so it needs a large power station and eats a real share of its capacity. Back up essentials first, and consider a shorter cook on High to save battery.",
  },
];

export function ScFaq() {
  return <FaqSection items={SC_FAQ_ITEMS} path="/slow-cooker-power-calculator" />;
}
