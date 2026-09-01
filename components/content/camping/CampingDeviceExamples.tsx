import Link from "next/link";

export function CampingDeviceExamples() {
  return (
    <div>
      <h2 className="h2">
        CPAP, Starlink and charging electronics while camping
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          <span className="font-medium text-ink">Using a CPAP while camping.</span> Without a heated
          humidifier a CPAP typically draws 30&ndash;60&nbsp;watts, so one night is roughly
          200&ndash;400&nbsp;Wh &mdash; one of the least demanding loads to back up. Turning off the
          heated humidifier and heated tube, or running the machine on 12V DC, cuts that further. The{" "}
          <Link href="/cpap-power-calculator" className="font-medium text-brand hover:underline">
            CPAP Power Station Calculator
          </Link>{" "}
          covers humidifier and DC options.
        </p>
        <p>
          <span className="font-medium text-ink">Running Starlink at a campsite.</span> A standard
          dish draws around 50&ndash;75&nbsp;watts in normal use, so eight hours is roughly
          400&ndash;600&nbsp;Wh and a full day is closer to 1,200&ndash;1,800&nbsp;Wh. That is often
          the difference between a 1,000&nbsp;Wh and a 2,000&nbsp;Wh unit. The{" "}
          <Link
            href="/starlink-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Starlink Power Station Calculator
          </Link>{" "}
          breaks down AC versus DC power setups.
        </p>
        <p>
          <span className="font-medium text-ink">Charging phones, cameras and drones.</span> Phones
          are tiny (5&ndash;15&nbsp;Wh each). A mirrorless or DSLR battery charger draws roughly
          20&ndash;30&nbsp;watts for an hour or two per battery. A drone battery charger is heavier,
          often 60&ndash;100&nbsp;watts, and a full set of flight batteries can add
          150&ndash;400&nbsp;Wh a day for a photography trip. Charging on 12V or USB-C PD where
          possible avoids the inverter loss of an AC charger.
        </p>
        <p>
          <span className="font-medium text-ink">Staying warm on a cold night.</span> A heated
          blanket usually draws far less than heating the whole tent with a space heater &mdash;
          often tens of watts &mdash; because it warms the person directly, and a 12V model bypasses
          the inverter. A full night still adds several hundred watt-hours, and some blanket manuals
          bar inverter power, so check the manual and size it deliberately &mdash; the{" "}
          <Link
            href="/electric-blanket-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Electric Blanket Power Station Calculator
          </Link>{" "}
          covers active watts, runtime, and AC versus 12V.
        </p>
      </div>
    </div>
  );
}
