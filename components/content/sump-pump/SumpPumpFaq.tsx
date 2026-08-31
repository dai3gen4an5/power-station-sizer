import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const SUMP_PUMP_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for a sump pump?",
    answer:
      "Size it on three separate numbers. For battery capacity, multiply the pump's running watts by the fraction of each hour it runs and by the outage length, then add headroom for inverter losses and a reserve; a pump at 800 watts running 10 minutes an hour over a 12-hour outage works out to roughly 2,000 to 2,500 Wh of recommended capacity. For output, the power station must supply at least the pump's running watts continuously and handle its starting-watt surge. A unit that meets the capacity but not the surge rating will not start the pump.",
  },
  {
    question: "How many watts does a sump pump use?",
    answer:
      "It varies widely by pump and motor, so use the figure on your pump's label, its manual, or the manufacturer's spec page rather than a horsepower estimate. Two pumps with the same horsepower rating can draw noticeably different running and starting watts. A plug-in watt meter on the pump's outlet is a good way to measure the steady running draw and, with a peak-hold feature, an approximate surge.",
  },
  {
    question: "Why are startup watts higher than running watts?",
    answer:
      "When the motor starts, it briefly draws extra current to overcome inertia and begin spinning, before settling to its steady running draw. That spike, called startup, starting, or surge watts, can last only a fraction of a second but must be supplied in full or the motor will not start. How much higher it is depends on the motor type and the pump, which is why this calculator asks you to enter the starting figure rather than estimating it.",
  },
  {
    question: "Can a 1000Wh power station run a sump pump?",
    answer:
      "For energy, a 1,000 Wh unit with about 650 to 800 Wh usable can cover a few hours for a pump running roughly 10 minutes per hour. Whether it can actually run the pump depends on its inverter: its continuous output must meet the pump's running watts and its surge rating must meet the starting watts. Many 1,000 Wh units can, but confirm both ratings against your pump's spec.",
  },
  {
    question: "Can a 2000Wh power station run a sump pump?",
    answer:
      "A 2,000 Wh unit, around 1,300 to 1,600 Wh usable, covers a longer outage or heavier pump cycling, and units this size are more likely to have the surge headroom a motor needs. It is still not automatic: check the continuous and surge output figures against your pump's running and starting watts before relying on it.",
  },
  {
    question: "How long will a battery backup run a sump pump?",
    answer:
      "Divide the power station's usable watt-hours by the pump's average hourly energy use. A pump at 800 watts running 10 minutes an hour averages about 133 Wh per hour, so a 1,000 Wh unit with roughly 700 Wh usable lasts about 5 hours, and a 2,000 Wh unit about 10 hours. Heavier rain that makes the pump run 20 minutes an hour cuts those times roughly in half. Cold, battery age, and the real inrush at each start shorten them further.",
  },
  {
    question: "How do I find my sump pump's startup watts?",
    answer:
      "Check the rating label on the pump or motor for a starting or locked-rotor figure, look in the owner's manual, or read the specifications on the manufacturer's product page. If none of those list it, a watt meter with a peak-hold feature on the pump's outlet gives an approximation, though a very brief inrush can exceed what a meter captures. Do not rely on a horsepower-to-watts conversion.",
  },
  {
    question:
      "Can I use a portable power station instead of a dedicated sump pump battery backup?",
    answer:
      "A portable power station can work as a backup power source if its battery capacity, continuous output, and surge rating all suit your pump, and if you are present to plug the pump in when the grid fails. A dedicated sump pump battery backup system adds automatic switchover and, in some cases, a secondary DC pump. Which fits depends on whether unattended, automatic operation matters for your basement.",
  },
  {
    question: "Can I recharge the power station with solar during an outage?",
    answer:
      "Yes, if the unit accepts solar input and you have a panel. Solar can extend backup through a multi-day outage by replacing part of what the pump uses each day, though output drops in the same storms that cause outages and flooding. Plan for partial recharges and keep a reserve. The solar charge-time and panel-size calculators on this site estimate how much panel you would need.",
  },
];

export function SumpPumpFaq() {
  return <FaqSection items={SUMP_PUMP_FAQ_ITEMS} path="/sump-pump-power-calculator" />;
}
