import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const EH_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for a space heater?",
    answer:
      "Size it on two numbers. Continuous AC output must be at or above the heater's input watts, held for the whole run — a 1,500-watt heater needs a 1,500-watt or larger inverter. Battery capacity is the heater's watts times the hours you want, plus roughly 25% for inverter losses and a reserve; a 1,500-watt heater for 2 hours works out to about 3,000 Wh raw and roughly 4,400 Wh recommended, which is beyond a single typical portable power station.",
  },
  {
    question: "Can a portable power station run a 1500W heater?",
    answer:
      "Only if its inverter is rated for at least 1,500 watts of continuous AC output. Many mid-size and larger units are; small and ultralight ones are not. Meeting the wattage lets it start and run the heater, but a battery large enough for more than a short burst is a separate requirement.",
  },
  {
    question: "How long will a 1000Wh power station run a space heater?",
    answer:
      "With roughly 650 to 800 Wh usable, about 25 to 30 minutes at 1,500 watts, 40 to 50 minutes at 1,000 watts, or around an hour and a half for a 500-watt personal heater. It also has to have an inverter rated for the heater's watts.",
  },
  {
    question: "How long will a 2000Wh power station run a 1500W heater?",
    answer:
      "Roughly 50 to 65 minutes, based on about 1,300 to 1,600 Wh usable after inverter losses and a reserve. Units this size usually have the 2,000-watt-plus inverter a 1,500-watt heater needs, but the runtime is still short.",
  },
  {
    question: "Why do electric heaters drain batteries so quickly?",
    answer:
      "A resistive heater converts nearly all the power it draws into heat and draws it continuously. A 1,500-watt heater pulls about 1,500 Wh every hour, which is one to two orders of magnitude more than lights, a router, and phone charging combined. There is no low-power idle state.",
  },
  {
    question: "Can a 500Wh power station run a small heater?",
    answer:
      "For a genuinely low-wattage personal heater, briefly — a 400-watt heater might run around 40 minutes on the usable capacity. The power station's continuous output still has to meet the heater's watts, and many 500 Wh units top out around 500 watts, so a 750-watt or 1,500-watt heater will not run.",
  },
  {
    question: "Does a space heater need startup surge power?",
    answer:
      "A plain resistive heater does not have a meaningful startup surge — it draws its rated watts from the moment it switches on. If a heater has a blower or fan motor and the manufacturer publishes a startup or peak figure, check the power station's surge rating against that. This calculator does not add an assumed surge multiplier.",
  },
  {
    question: "Can I use an electric heater during a power outage?",
    answer:
      "Yes, from a power station whose inverter can supply the heater's watts, but only for a short time. A few hours or an overnight of heating runs into several thousand watt-hours. Back up medical equipment, the fridge, and lights first, then use a heater in short bursts for one room.",
  },
  {
    question: "Does a thermostat reduce battery use?",
    answer:
      "It can. Once the room reaches the setpoint, a thermostat cycles the element off and on, so the average draw drops below the nameplate wattage. How much depends on room size, insulation, the setpoint, and outdoor temperature, so it is not guaranteed. This calculator assumes full watts for the full time; to model cycling, enter fewer hours.",
  },
  {
    question: "Can I use a space heater while camping or in an RV?",
    answer:
      "A low-wattage heater in short bursts, yes, if the inverter is rated for its watts. A 1,500-watt ceramic heater will flatten a portable power station in well under an hour. For sustained off-grid warmth, propane or a diesel heater is far more practical than running resistance heat from a battery.",
  },
];

export function EhFaq() {
  return <FaqSection items={EH_FAQ_ITEMS} path="/electric-heater-power-calculator" />;
}
