import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const WELL_PUMP_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for a well pump?",
    answer:
      "Size it on separate numbers. For battery capacity, multiply the pump's running watts by the fraction of each hour it runs and by the outage length, then add headroom for inverter losses and a reserve; a pump at 1,000 watts running 10 minutes an hour over a 12-hour outage works out to roughly 2,000 to 3,000 Wh of recommended capacity. For output, the power station must supply at least the pump's running watts continuously, handle its starting-watt surge, and provide the pump's voltage (120V or 240V) in a usable outlet. A unit that meets the capacity but not the output or voltage will not run the pump.",
  },
  {
    question: "How many watts does a well pump use?",
    answer:
      "It varies widely by pump, motor, controller, and voltage, so use the figure on your pump's label, its manual, or the manufacturer's spec page rather than a horsepower estimate. Running watts for common residential pumps range broadly, and starting watts are higher. A watt meter on the pump's circuit, where practical, gives a measured running figure and an approximate surge.",
  },
  {
    question: "Why does a well pump need higher startup watts?",
    answer:
      "When the motor starts, it briefly draws extra current to overcome inertia and build system pressure before settling to its steady running draw. That spike, called startup, starting, or surge watts, may last only a fraction of a second but must be supplied in full or the motor will not start. How much higher it is depends on the motor type, the pump, and the controller, which is why this calculator asks you to enter the starting figure rather than estimating it.",
  },
  {
    question: "Can a 1000Wh power station run a well pump?",
    answer:
      "For energy, a 1,000 Wh unit with about 650 to 800 Wh usable can cover a few hours for a 120V pump running roughly 10 minutes per hour. Whether it can actually run the pump depends on its inverter: the continuous output must meet the pump's running watts and the surge rating must meet the starting watts. Many 1,000 Wh units fall short on surge for a motor, so confirm both ratings, and confirm the pump is 120V.",
  },
  {
    question: "Can a 2000Wh power station run a well pump?",
    answer:
      "A 2,000 Wh unit, around 1,300 to 1,600 Wh usable, covers a longer outage or heavier water use, and units this size are more likely to have the surge headroom a pump motor needs, for a 120V pump. It is still not automatic: check the continuous and surge output figures against your pump's running and starting watts, and check the voltage.",
  },
  {
    question: "Can a portable power station run a 240V well pump?",
    answer:
      "Only if it provides a true 240V output in a form your pump can connect to. Many portable power stations output 120V only, and a 240V pump cannot be powered directly by a 120V-only unit no matter how large its battery. Some larger power stations offer 240V output, sometimes by combining two units. This calculator sizes energy and reports the watts you need; it does not check 120V versus 240V compatibility, so verify the pump's voltage and the unit's output before buying.",
  },
  {
    question: "How do I find my well pump's startup watts?",
    answer:
      "Check the rating label on the pump or motor for a starting, surge, or locked-rotor figure, look in the owner's manual, or read the specifications on the manufacturer's product page and the pressure-switch or controller documentation. If none of those list it, a watt meter with a peak-hold feature on the pump's circuit gives an approximation, though a very brief inrush can exceed what a meter captures. Do not rely on a horsepower-to-watts conversion.",
  },
  {
    question: "How long will a battery power a well pump?",
    answer:
      "Divide the power station's usable watt-hours by the pump's average hourly energy use. A pump at 1,000 watts running 10 minutes an hour averages about 167 Wh per hour, so a 1,000 Wh unit with roughly 700 Wh usable lasts about 4 hours, and a 2,000 Wh unit about 8 hours. Heavier household use that makes the pump run 20 minutes an hour cuts those times roughly in half. Cold, battery age, and the real inrush at each start shorten them further.",
  },
  {
    question: "Does well pump horsepower tell me what power station I need?",
    answer:
      "Not on its own. Horsepower ratings like 1/2 HP, 3/4 HP, 1 HP, and 1.5 HP are useful for searching, but two pumps with the same horsepower can draw noticeably different running and starting watts depending on the motor, pump design, controller, and voltage. Use the running and starting watts from your pump's label or manual, and its voltage, to choose a power station, not the horsepower figure.",
  },
  {
    question: "Can solar panels recharge a well pump backup power station?",
    answer:
      "Yes, if the power station accepts solar input and you have a panel. Solar can extend backup through a multi-day outage by replacing part of what the pump uses each day. Output drops in bad weather, so plan for partial recharges and keep a reserve. The solar charge-time and panel-size calculators on this site estimate how much panel you would need for a given daily use.",
  },
];

export function WellPumpFaq() {
  return <FaqSection items={WELL_PUMP_FAQ_ITEMS} path="/well-pump-power-calculator" />;
}
