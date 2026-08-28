import { FaqSection, type FaqItem } from "./FaqSection";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for a refrigerator?",
    answer:
      "Most residential refrigerators draw 100 to 200 watts on average, but cycle on and off rather than running continuously. Assuming 150 watts for about 8 hours of actual compressor run time per day, that's roughly 1,200 Wh of daily use. After inverter losses and a battery reserve, a 1,500 to 2,000 Wh power station is typically enough for one day of backup, though running it for multiple days will require a larger unit or solar recharging.",
  },
  {
    question: "What size power station do I need for a CPAP?",
    answer:
      "Most CPAP machines draw 30 to 60 watts without a heated humidifier, and more with one running. Used for around 8 hours of sleep, that's roughly 240 to 480 Wh per night. A 300 to 500 Wh power station can typically cover one night, making it one of the more affordable and portable devices to back up.",
  },
  {
    question: "Is a 1000Wh power station enough?",
    answer:
      "A 1,000 Wh power station is enough for charging phones and laptops, running a CPAP for several nights, or powering a few small appliances for part of a day. It's generally not enough for a full-size refrigerator or high-wattage appliances like a portable AC or microwave for extended periods. Use the calculator above with your specific devices to check.",
  },
  {
    question: "How long will a 2000Wh power station last?",
    answer:
      "It depends entirely on what you're running. A 2,000 Wh power station could power a laptop (65 W) for over 25 hours, but only run a 1,000-watt space heater for under two hours. Enter your devices into the calculator above and use the runtime estimator to get a number specific to your setup.",
  },
  {
    question: "How do I calculate power station runtime?",
    answer:
      "Divide the power station's usable watt-hours (its rated capacity, minus inverter losses and any reserve you want to keep) by your device's wattage. For example, a 1,000 Wh power station with 85% efficiency and a 20% reserve has about 680 Wh usable. Running a 50-watt device continuously would last around 13.6 hours.",
  },
];

export function Faq() {
  return <FaqSection items={FAQ_ITEMS} path="/" />;
}
