import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const RUNTIME_FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do I calculate how long a power station will run my device?",
    answer:
      "Start with battery capacity in watt-hours divided by your device's power draw in watts. A 1,000 Wh power station running a 100-watt device is about 10 hours on paper. For a realistic number, divide usable capacity instead: multiply the rated capacity by inverter efficiency (around 0.85) and by the fraction you're willing to discharge (0.8 if you keep a 20% reserve), then divide by the device's average watts. The calculator above does this once you enter the four values.",
  },
  {
    question: "Why is my actual runtime shorter than the calculated runtime?",
    answer:
      "The simple formula assumes every stored watt-hour reaches the device. In reality, inverter conversion loses 10 to 20%, any reserve you keep is capacity you don't spend, the unit's own electronics draw a few watts of standby, cold weather reduces battery output, and older batteries hold less than their original rating. Motor and heating devices also spike well above their rated watts, which a steady-average estimate can't capture.",
  },
  {
    question: "What is usable capacity versus rated capacity?",
    answer:
      "Rated capacity is the energy in the cells when full — the number on the box. Usable capacity is what actually reaches your devices after inverter loss, reserve, and standby overhead. A 1,000 Wh power station commonly delivers around 650 to 800 Wh of real AC output. Some manufacturers publish a usable figure or a runtime chart separately.",
  },
  {
    question: "How long will a 1000Wh power station last?",
    answer:
      "It depends entirely on the load. A 1,000 Wh power station has roughly 680 to 800 Wh usable, which is one to two nights for a CPAP, a full day of a laptop and phone, or half a day to a day of a mini fridge. A 1,000-watt appliance like a kettle or heater would run under 45 minutes. Enter your device's wattage in the calculator above for a specific number.",
  },
  {
    question: "Does inverter efficiency really affect runtime that much?",
    answer:
      "Yes. At 85% efficiency you lose 15% of the battery to conversion before the device sees any of it — on a 1,000 Wh unit that's 150 Wh, often an hour or more of runtime for a small load. Running a compatible device directly on 12V DC avoids that loss. Check your power station's spec sheet for its rated efficiency and adjust the field above if it differs from the 85% default.",
  },
  {
    question: "How does battery reserve change the estimate?",
    answer:
      "The reserve is the portion of the battery you deliberately don't use, to protect its lifespan and keep a buffer. A 20% reserve means only 80% of capacity is available, so runtime drops by about a fifth compared with a full discharge. Set the reserve field to match how deeply you're comfortable draining the battery.",
  },
  {
    question: "How do I estimate runtime for a refrigerator that cycles on and off?",
    answer:
      "A refrigerator's compressor only runs part of each hour, so its average draw is well below its running watts. Use a measured average from a watt meter, or its energy-guide daily kWh figure divided by 24, rather than assuming it runs continuously. The refrigerator-specific calculator covers compressor cycling and startup surge in more detail.",
  },
  {
    question: "Can I run high-wattage appliances like a heater or kettle for long?",
    answer:
      "Not for long on any portable power station. A 1,500-watt heater draws energy so fast that even a 2,000 Wh unit lasts around an hour. High-wattage resistive appliances are best treated as short-burst loads, not something to run for hours off battery.",
  },
  {
    question: "How can I make a power station last longer?",
    answer:
      "Recharge it with solar so input keeps pace with draw, run devices on DC where possible to skip inverter loss, use the unit's eco or power-saving mode to cut idle drain, lower the load itself, and keep the battery near room temperature. Spending more of the reserve also adds runtime but trades against long-term battery health.",
  },
];

export function RuntimeFaq() {
  return <FaqSection items={RUNTIME_FAQ_ITEMS} path="/power-station-runtime-calculator" />;
}
