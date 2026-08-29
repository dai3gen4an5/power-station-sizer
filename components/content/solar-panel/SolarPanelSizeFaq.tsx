import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const SOLAR_PANEL_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size solar panel do I need to charge my power station?",
    answer:
      "Work out the energy to replace — capacity multiplied by the gap between your current and target charge percentages — then divide by the peak sun hours you have available to get the effective watts you need, and divide that by a real-world efficiency of roughly 60 to 80% to get a rated panel size. For example, a 1,000 Wh station from 20% to 100% needs 800 Wh; over one 5-peak-sun-hour day that's 160 effective watts, or about a 229-watt panel at 70% efficiency. In practice you'd choose 250 watts or more for margin.",
  },
  {
    question: "How is the required panel wattage calculated?",
    answer:
      "Three steps: energy needed (Wh) = capacity x (target% - current%); required effective input (W) = energy needed / available peak sun hours; required panel rating (W) = required effective input / real-world efficiency. If you set the deadline in days, available peak sun hours = days x peak sun hours per day.",
  },
  {
    question: "Why should I buy a bigger panel than the calculator says?",
    answer:
      "The result assumes steady, derated sun for every hour and ignores the slowdown near a full charge, so it's a floor rather than a safe minimum. Cloud, heat, dust, imperfect aiming, and cable losses all eat into real output. Rounding up by 20 to 30%, or to the next common panel size, gives you a buffer for ordinary bad conditions.",
  },
  {
    question: "What are peak sun hours?",
    answer:
      "Peak sun hours are the number of hours per day equivalent to full-strength 1000 W/m² sunlight. They are not daylight hours — a 13-hour day might deliver only 4 to 5 peak sun hours. The figure depends on location, season, and weather, and local solar databases publish monthly averages.",
  },
  {
    question: "Does charging over two days need a smaller panel than one day?",
    answer:
      "Yes. The panel size is inversely proportional to the time you allow. Doubling the recharge window from one day to two roughly halves the required wattage, because the same energy is spread over twice as many peak sun hours.",
  },
  {
    question: "What size panel for a 1000Wh power station?",
    answer:
      "To go from 20% to 100% (800 Wh) in one 5-peak-sun-hour day at 70% efficiency, you need about a 229-watt panel, so 250 watts or more with margin. Give it two days and roughly 115 watts is enough. A full 0 to 100% charge in one day pushes the requirement to around 285 watts before margin.",
  },
  {
    question: "Can I just use the largest panel available to charge fastest?",
    answer:
      "Only up to your power station's maximum solar input. Past that limit the extra wattage is ignored, and exceeding the controller's voltage ceiling can damage the unit. The battery also tapers its charge current as it fills, so beyond a certain point a bigger panel doesn't shorten the charge. Aim for the panel that meets your deadline within the rated input, not the biggest one.",
  },
  {
    question: "What if the required panel exceeds my power station's solar input limit?",
    answer:
      "Then that recharge deadline isn't reachable with solar alone on that unit. Allow more time, accept a slower or partial charge, add a second charging method the manufacturer supports, or consider a power station with a higher solar input rating. Never feed a unit more than its rated solar voltage or current.",
  },
  {
    question: "How much does cloud cover change the panel size I need?",
    answer:
      "A lot. Bright overcast often cuts output to about a quarter to a half of clear-sky levels. If your site is frequently cloudy, either enter a lower real-world efficiency or size the panel for more sun hours than a clear day provides, so a grey day still makes meaningful progress.",
  },
];

export function SolarPanelSizeFaq() {
  return <FaqSection items={SOLAR_PANEL_FAQ_ITEMS} path="/solar-panel-size-calculator" />;
}
