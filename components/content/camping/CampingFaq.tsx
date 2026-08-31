import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const CAMPING_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for camping?",
    answer:
      "Add up the daily watt-hours of the gear you bring, then add headroom for inverter losses and a battery reserve. A minimal kit of lights, a small fan and phone charging is often only 100 to 300 Wh a day, which a 300 to 500 Wh unit covers for a night or two. Adding a portable fridge or cooler usually raises the daily total to roughly 600 to 1,000 Wh, pointing at a 1,000 Wh power station for a weekend. Use the calculator above with your own gear for a specific figure.",
  },
  {
    question: "Is a 500Wh power station enough for camping?",
    answer:
      "For a light setup, yes. A 500 Wh unit has around 325 to 400 Wh usable, which comfortably covers camp lights, a small fan, phone and camera charging, and a CPAP for one or two nights. It is generally not enough to run a portable fridge or cooler for a full weekend, or to add Starlink or an electric blanket on top.",
  },
  {
    question: "Is a 1000Wh power station enough for a weekend camping trip?",
    answer:
      "Often, yes, for two nights. A 1,000 Wh unit provides roughly 650 to 800 Wh usable. That typically covers a portable fridge plus lights and device charging for a night or two, or the smaller items alone for longer. A three-day trip, all-day Starlink, or cold-weather heating usually needs a larger unit or a solar panel to keep pace.",
  },
  {
    question: "How long will a power station run a portable refrigerator?",
    answer:
      "A 12V portable compressor fridge or cooler draws about 40 to 60 watts while the compressor runs, and it cycles on and off, so its average daily use is often 400 to 700 Wh. On that basis a 500 Wh unit might last most of a warm day, a 1,000 Wh unit a night or two, and a 2,000 Wh unit a long weekend, before anything else is plugged in. Heat, a full fridge, and frequent lid-opening all shorten that.",
  },
  {
    question: "How much battery capacity do I need for three days of camping?",
    answer:
      "Estimate one day with the calculator above, then set Number of days to 3. Without recharging, the capacity you need scales roughly with the number of nights, so a fridge plus small essentials over three days commonly reaches the 2,000 Wh class or larger. Bringing a solar panel lets you use a smaller unit, since it replaces part of each day's use.",
  },
  {
    question: "Can I use a CPAP while camping?",
    answer:
      "Yes. Without a heated humidifier a CPAP typically draws 30 to 60 watts, so one night is roughly 200 to 400 Wh, making it one of the least demanding loads to back up. Turning off the heated humidifier and heated tube, or running the machine on 12V DC, reduces that further. Follow your equipment supplier's guidance for medical-necessity power.",
  },
  {
    question: "Can I run Starlink while camping?",
    answer:
      "Yes, this is a common setup for remote campsites. A standard Starlink dish draws around 50 to 75 watts in normal use, so eight hours is roughly 400 to 600 Wh and a full day is closer to 1,200 to 1,800 Wh. Powering it through a DC setup rather than the AC brick avoids some conversion loss. Size the power station for Starlink plus everything else you run at the same time.",
  },
  {
    question: "Can I recharge a power station with solar panels while camping?",
    answer:
      "Yes, and past a night or two it is usually more practical than carrying a very large battery. A portable solar panel replaces part of what you use each day so the battery only covers the evening and overnight hours. Real solar output is well below the panel's rating because of weather, campsite tree cover, angle and temperature, so plan for partial recharges.",
  },
  {
    question: "Can a portable power station run a coffee maker or electric kettle?",
    answer:
      "Only if its inverter can supply the appliance's continuous wattage, and even then only briefly. An electric kettle or camping coffee maker is typically 800 to 1,500 watts, a high-draw load limited by the power station's continuous and surge output rating, not just its watt-hours. This calculator sizes energy capacity and does not check surge compatibility, so treat these as short-burst loads and confirm the power station's output ratings against the appliance label.",
  },
];

export function CampingFaq() {
  return <FaqSection items={CAMPING_FAQ_ITEMS} path="/camping-power-station-calculator" />;
}
