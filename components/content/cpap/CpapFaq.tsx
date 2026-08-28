import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const CPAP_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for a CPAP?",
    answer:
      "Most CPAP machines without a heated humidifier draw 30 to 60 watts. Over an 8-hour night that's roughly 240 to 480 Wh of raw energy, and after accounting for inverter losses and a battery reserve, a 300 to 500 Wh power station is typically enough for one night. Enter your specific wattage into the calculator above for a number matched to your setup.",
  },
  {
    question: "How many watt-hours does a CPAP use overnight?",
    answer:
      "It depends on the machine and settings, but a common range is 240 to 480 Wh for an 8-hour night without a heated humidifier, and 480 to 800+ Wh with one running. Check your CPAP's power label for its actual wattage and multiply by your typical hours of use.",
  },
  {
    question: "Will a 500Wh power station run a CPAP?",
    answer:
      "For many CPAP machines without a heated humidifier, yes — a 500 Wh power station can typically cover one full night with some reserve to spare. If you use a heated humidifier or heated tubing, your machine may draw enough power that a 500 Wh unit only lasts part of the night, so check its actual wattage with the calculator above.",
  },
  {
    question: "Will a 1000Wh power station run a CPAP?",
    answer:
      "Yes, for most CPAP setups a 1,000 Wh power station comfortably covers one night, and often two nights for machines without a heated humidifier. It also tends to leave headroom for a phone charger or other small devices.",
  },
  {
    question: "How long will a CPAP run on a battery?",
    answer:
      "Divide the battery's usable watt-hours (its rated capacity minus inverter losses and any reserve you keep) by your CPAP's wattage. For example, a 300 Wh usable battery running a 40-watt CPAP would last around 7.5 hours — close to a full night.",
  },
  {
    question: "Does a CPAP humidifier use more battery power?",
    answer:
      "Yes. A heated humidifier adds a heating element that can noticeably increase total power draw compared to running the blower motor alone, and heated tubing adds further consumption on top of that. If you use either, plan around your machine's higher wattage rating rather than its base figure.",
  },
  {
    question: "Is DC more efficient than AC for a CPAP?",
    answer:
      "Running a CPAP directly from a 12V DC source, where your machine and power supply support it, generally avoids the conversion loss that comes with an AC inverter, so it can be somewhat more energy-efficient. Check whether your CPAP model supports direct DC operation and what cable or adapter it requires.",
  },
  {
    question: "How much battery do I need for 3 nights of CPAP use?",
    answer:
      "Multiply your one-night watt-hour estimate by three, then apply your usual efficiency and reserve adjustments. For a 40-watt CPAP without a humidifier (roughly 320 Wh per night), three nights works out to about 960 Wh raw, which typically rounds up to a 1,500 Wh power station once efficiency and reserve are factored in — more if you can only partially recharge between nights.",
  },
];

export function CpapFaq() {
  return <FaqSection items={CPAP_FAQ_ITEMS} path="/cpap-power-calculator" />;
}
