import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const SOLAR_FAQ_ITEMS: FaqItem[] = [
  {
    question: "How long does it take to charge a power station with solar?",
    answer:
      "Divide the energy you need to add — capacity multiplied by the gap between your current and target charge percentages — by your real-world solar input, which is the panel's rated watts times a derating factor of roughly 60 to 80%. For example, a 1,000 Wh station going from 20% to 100% needs 800 Wh; a 200-watt panel at 70% supplies about 140 watts, so the ideal charge time is around 5.7 hours of strong sun. Real conditions usually make it longer.",
  },
  {
    question: "Why does my solar panel charge slower than its rated watts suggest?",
    answer:
      "The rated figure is measured under lab test conditions. Outdoors you lose output to the sun's angle, panel temperature, haze, dust, cable and connector losses, and the charge controller. A panel lying flat or pointed away from the sun can produce well under half its rating. Planning around 60 to 80% of the rating in good conditions is more realistic.",
  },
  {
    question: "What are peak sun hours?",
    answer:
      "Peak sun hours are the number of hours per day equivalent to full-strength sunlight of 1000 watts per square metre. They are not the same as daylight hours — a 13-hour day might only deliver 4 to 5 peak sun hours. The figure depends on location, season, and weather, and local solar resource databases publish monthly averages.",
  },
  {
    question: "How long to charge a 1000Wh power station with a 200W panel?",
    answer:
      "Going from empty to full needs 1,000 Wh. A 200-watt panel at about 70% real-world efficiency delivers roughly 140 watts, so the ideal time is around 7 hours of strong sun, or a bit over a day at 5 peak sun hours. A 20% to 100% charge (800 Wh) is closer to 5.7 hours. Cloud, angle, and the slower final stage will extend it.",
  },
  {
    question: "Can I charge faster by connecting a bigger solar panel?",
    answer:
      "Up to a point. A larger or better-aimed panel raises the input wattage and shortens charge time, but only until you reach your power station's maximum solar input. Beyond that limit the extra panel wattage is ignored, and exceeding the controller's voltage limit can damage the unit. Check the manual for the maximum input watts, voltage range, and current before adding panels.",
  },
  {
    question: "Does charging from 20% to 80% take less time than 0% to 100%?",
    answer:
      "Yes. A 20% to 80% charge moves 60% of the battery's capacity versus 100% for a full charge, so it takes roughly 60% as long. It also skips the final 80 to 100% stage, which often charges more slowly, so the time saving can be a little larger than the energy difference alone.",
  },
  {
    question: "Why does the last 20% charge so slowly?",
    answer:
      "As the battery approaches full, the management system shifts from constant-current to constant-voltage charging and steadily reduces the current to protect the cells. The simple energy-divided-by-input formula assumes a steady rate, so it underestimates the time for the top of the charge. Stopping around 80 to 90% is often the most efficient use of limited sun.",
  },
  {
    question: "Will solar charge a power station on a cloudy day?",
    answer:
      "Usually yes, but slowly. Bright overcast often cuts panel output to about a quarter to a half of clear-sky levels, and heavy cloud takes it lower. Over several grey days you may only get partial recharges, so for longer trips plan around a cloudy-day partial charge rather than a full one.",
  },
  {
    question: "How many watts of solar do I need to keep up with daily use?",
    answer:
      "Compare your daily consumption in watt-hours against what a panel can realistically collect in your peak sun hours. If you use 600 Wh a day and get 5 peak sun hours, you need to average about 120 watts of real input, which points to a panel rated somewhere around 150 to 200 watts once derating is included — more if conditions are often poor. Estimate your daily use with the main Power Station Size Calculator.",
  },
];

export function SolarChargeFaq() {
  return <FaqSection items={SOLAR_FAQ_ITEMS} path="/solar-charge-time-calculator" />;
}
