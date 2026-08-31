import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const AC_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for an air conditioner?",
    answer:
      "Size it on separate numbers. For battery capacity, multiply the unit's running watts by the fraction of each hour the compressor runs and by the hours of use, then add headroom for inverter losses and a reserve; a 900-watt unit running 40 minutes an hour for 8 hours works out to roughly 7,000 Wh of recommended capacity, which is beyond a single typical portable power station. For output, the power station must supply at least the running watts continuously, handle the compressor's starting-watt surge, and provide the unit's voltage in a usable outlet.",
  },
  {
    question: "How many watts does an air conditioner use?",
    answer:
      "It varies widely by size, type, and efficiency, so use the running wattage on the unit's nameplate, in its manual, or on the manufacturer's spec sheet rather than a BTU estimate. Small 120V portable and window units draw a few hundred watts up to around a kilowatt while cooling; larger units draw more and may be 240V. A watt meter on the unit's outlet gives a measured running figure.",
  },
  {
    question: "Does BTU tell me how many watts an AC uses?",
    answer:
      "No. BTU per hour is a cooling-capacity rating, not electrical power draw. Two air conditioners with the same BTU label can pull different running watts depending on the compressor, the efficiency rating, and whether it is a single-speed or inverter unit. Use the running watts from the nameplate or manual, not a fixed BTU-to-watts conversion.",
  },
  {
    question: "Why does an air conditioner need startup surge power?",
    answer:
      "When the compressor motor starts, it briefly draws extra current to begin turning before settling to its steady running draw. On a single-speed compressor this surge can be several times the running watts for a fraction of a second, and a power station's inverter must supply it or the compressor will not start. Inverter-type (variable-speed) units ramp up more gently with a smaller surge. Enter the figure from your unit's specifications rather than estimating it.",
  },
  {
    question: "Can a 1000Wh power station run an air conditioner?",
    answer:
      "For a small 120V portable or window unit, a 1,000 Wh power station with about 650 to 800 Wh usable is roughly one to two hours of run time with moderate cycling. Whether it can run the unit at all depends on its inverter: the continuous output must meet the running watts and the surge rating must meet the starting watts. Many 1,000 Wh units fall short on surge for a compressor, so check both.",
  },
  {
    question: "Can a 2000Wh power station run an air conditioner?",
    answer:
      "A 2,000 Wh unit, around 1,300 to 1,600 Wh usable, is roughly two to four hours for a small 120V unit with moderate cycling, and units this size are more likely to have the surge headroom a compressor needs. It is still not automatic: check the continuous and surge output against the unit's running and starting watts, and check the voltage.",
  },
  {
    question: "How long will a power station run a portable AC?",
    answer:
      "Divide the power station's usable watt-hours by the AC's average hourly energy use. A 900-watt unit running 40 minutes an hour averages about 600 Wh per hour, so a 1,000 Wh unit with roughly 700 Wh usable lasts a bit over an hour, and a 2,000 Wh unit around two to three hours. Hotter weather and a lower thermostat setpoint make the compressor run more and cut those times. This is a planning estimate, not a guaranteed runtime.",
  },
  {
    question: "Can a power station run a window air conditioner?",
    answer:
      "A small 120V window unit is one of the lower-wattage options and can run from a mid-size power station if its continuous and surge output match the unit. Larger window units draw more and may be 240V, which most portable power stations cannot supply. Check the unit's nameplate for its running watts, starting watts, and voltage.",
  },
  {
    question: "Can a portable power station run a 240V air conditioner?",
    answer:
      "Only if it provides a true 240V output in a form the unit can connect to. Many portable power stations output 120V only, and a 240V air conditioner cannot be powered directly by a 120V-only unit no matter how large its battery. Some larger power stations offer 240V output. This calculator sizes energy and reports the watts you need; it does not check 120V versus 240V compatibility, so verify the unit's voltage and the power station's output before buying.",
  },
  {
    question: "Can solar panels recharge a power station while running an air conditioner?",
    answer:
      "Solar rarely keeps up with an air conditioner in real time, because the AC is one of the heaviest loads and panel output drops with weather, angle, and heat. Solar does help stretch daytime use and recharge between runs. Plan for partial offset, not a full match, and keep a reserve.",
  },
];

export function AcFaq() {
  return <FaqSection items={AC_FAQ_ITEMS} path="/air-conditioner-power-calculator" />;
}
