import { FaqSection, type FaqItem } from "@/components/content/FaqSection";

const RV_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What size power station do I need for an RV?",
    answer:
      "Add up the daily watt-hours of the appliances you run in the RV, then add headroom for inverter losses and a battery reserve. A light setup of LED lights, a roof fan, and phone and laptop charging is often only 300 to 600 Wh a day, which a 500 to 1,000 Wh unit can cover. Adding a 12V compressor fridge usually brings the daily total to roughly 1,000 to 1,800 Wh, pointing at a 1,500 Wh or larger power station for a full day of dry camping. Use the calculator above with your own appliance list for a specific figure.",
  },
  {
    question: "How many watt-hours does an RV use per day?",
    answer:
      "It varies widely with the setup. A minimal weekender running lights, a fan, and device charging might use 200 to 500 Wh a day. A typical van or camper with a 12V fridge, lights, a fan, water pump, and laptop use lands around 800 to 1,500 Wh. Add all-day Starlink, a TV, and longer device use and it can exceed 2,500 Wh. The refrigerator is usually the single largest continuous load.",
  },
  {
    question: "How long will a 1000Wh power station last in an RV?",
    answer:
      "A 1,000 Wh power station has roughly 650 to 800 Wh usable after inverter loss and a reserve. Against a light load of lights, a fan, and charging (say 40 to 60 watts average) that is well over 10 hours. Running a 12V fridge that averages around 30 watts alongside smaller loads, it is often most of a day. It generally will not carry a fridge plus Starlink and other electronics through a full 24 hours without recharging.",
  },
  {
    question: "Is a 2000Wh power station enough for RV camping?",
    answer:
      "For most one to two day trips, yes. A 2,000 Wh unit provides around 1,300 to 1,600 Wh usable, which typically covers a 12V fridge plus lights, a fan, water pump, and device charging for a full day, or the smaller loads alone for two to three days. It may fall short if you run an air conditioner, a microwave, or all-day Starlink on top of everything else, or if you camp for several days with no solar.",
  },
  {
    question: "How much battery capacity do I need for a weekend RV trip?",
    answer:
      "Estimate one day of use with the calculator above, then set Number of days to 2. As a rough guide, a fridge plus small essentials at around 1,000 to 1,500 Wh per day works out to a recommended minimum near 2,500 to 3,500 Wh for a two-day weekend with no recharging. Bringing a solar panel lets you use a smaller unit, since it replaces part of each day's use.",
  },
  {
    question: "Can I run Starlink from a portable power station in an RV?",
    answer:
      "Yes, this is a common RV setup. A standard Starlink dish draws around 50 to 75 watts in normal use, so eight hours is roughly 400 to 600 Wh and a full 24 hours is closer to 1,200 to 1,800 Wh. Powering it through a DC setup rather than the AC brick avoids some conversion loss. Size the power station for Starlink plus everything else you run at the same time, not Starlink alone.",
  },
  {
    question: "Can I run a CPAP in an RV from a power station?",
    answer:
      "Yes. Without a heated humidifier a CPAP typically draws 30 to 60 watts, so one night is roughly 200 to 400 Wh, making it one of the least demanding loads to back up. Turning off the heated humidifier and heated tube, or running the machine on 12V DC, reduces that further. Follow your equipment supplier's guidance for medical-necessity power.",
  },
  {
    question: "Can a portable power station run an RV air conditioner or microwave?",
    answer:
      "Only if its inverter can supply the appliance's continuous wattage and handle the startup surge, and even then only briefly. An RV air conditioner or a 1,000 watt microwave is a high-draw load limited by the power station's output rating, not just its watt-hours. This calculator sizes energy capacity and does not check surge compatibility, so treat these as short-burst loads and confirm the power station's continuous and surge ratings against the appliance label.",
  },
];

export function RvFaq() {
  return <FaqSection items={RV_FAQ_ITEMS} path="/rv-power-station-calculator" />;
}
