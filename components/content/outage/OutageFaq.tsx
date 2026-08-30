import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const OUTAGE_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for a power outage?",
    answer:
      "It depends on which devices you want to run and for how long. Add up the watt-hours each device uses in a day (watts multiplied by the hours it actually runs), then add headroom for inverter losses and a battery reserve. Phones, Wi-Fi and a few lights for a day need only a few hundred watt-hours, so a 300 to 500 Wh unit can be enough. Adding a refrigerator usually pushes the daily total past 1,500 Wh, which points at a 2,000 Wh or larger power station for a full 24 hours. Use the calculator above with your own device list for a specific figure.",
  },
  {
    question: "How long will a power station run a refrigerator during an outage?",
    answer:
      "A residential refrigerator draws roughly 100 to 250 watts while the compressor runs, but it cycles on and off, so its average daily use is often around 1,000 to 1,500 Wh. On that basis a 1,000 Wh power station might last from half a day to a day, a 2,000 Wh unit around a day and a half, and a 3,000 Wh unit two days or more, before anything else is plugged in. The power station also needs an inverter rated to handle the compressor's startup surge, which is several times its running wattage.",
  },
  {
    question: "How much battery capacity do I need for a 24-hour outage?",
    answer:
      "For a light load of phones, Wi-Fi and lights, well under 1,000 Wh is usually enough for 24 hours. Add a refrigerator and the recommended minimum commonly lands in the 2,000 to 3,000 Wh range once inverter efficiency and a battery reserve are included. The calculator above totals your devices' daily watt-hours and applies those adjustments to give a number for your specific setup.",
  },
  {
    question: "What appliances should I prioritize during a blackout?",
    answer:
      "Prescribed medical equipment such as a CPAP comes first, and it usually draws little power. Food safety is next: a refrigerator or freezer run a few hours at a time. Then communication and safety, meaning phone charging, a Wi-Fi router and a few LED lights, which together use very little. Comfort loads like a fan, TV or laptop come last. Avoid high-wattage resistive appliances such as space heaters, kettles and air conditioners, which can drain a portable power station in under an hour.",
  },
  {
    question: "Is a 1000Wh or 2000Wh power station better for home backup?",
    answer:
      "A 1,000 Wh power station has roughly 650 to 800 Wh usable and suits phones, Wi-Fi, lights, a laptop and a CPAP for a night, plus partial refrigerator coverage. A 2,000 Wh unit has around 1,300 to 1,600 Wh usable, enough for a refrigerator plus small essentials for a day, and often has higher output for handling a refrigerator's startup. If a full-size refrigerator is on your must-run list, the 2,000 Wh class is the safer starting point.",
  },
  {
    question: "Does a power station need to handle my refrigerator's startup surge?",
    answer:
      "Yes. A refrigerator's compressor briefly draws several times its running wattage when it starts. Battery capacity in watt-hours and inverter output in watts are separate specifications, so a power station can have enough stored energy but still trip on the surge. Check the refrigerator's starting wattage on its label and the power station's continuous and surge output ratings before relying on it.",
  },
  {
    question: "Why is my real outage runtime different from the estimate?",
    answer:
      "The estimate assumes a steady average wattage and a battery that delivers its full rated capacity. In practice, cold weather lowers battery output, a warm room makes a refrigerator cycle more, older batteries hold less than their label, inverter conversion loses 10 to 20 percent, and the unit's own electronics draw standby power. Treat the recommended capacity as a floor to shop above and keep extra margin.",
  },
  {
    question: "Can I recharge a power station during a long outage?",
    answer:
      "Yes, and past a day or two it is usually more practical than buying a very large battery. Solar panels are the common option: a panel replaces some of what you use each day so the battery only covers the gap and overnight hours. Solar output varies with weather and daylight, so plan for partial recharges. A vehicle 12V outlet or a fuel generator can also top up a power station.",
  },
];

export function OutageFaq() {
  return <FaqSection items={OUTAGE_FAQ_ITEMS} path="/home-power-outage-calculator" />;
}
