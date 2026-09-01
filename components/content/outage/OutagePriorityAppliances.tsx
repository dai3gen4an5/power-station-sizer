import Link from "next/link";

export function OutagePriorityAppliances() {
  return (
    <div>
      <h2 className="h2">
        What appliances should I prioritize during a blackout?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Portable power stations have a limited budget of watt-hours, so it helps to rank devices by
          how essential they are and how much energy they draw:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Medical equipment first.</span> A CPAP or other
            prescribed device is the priority for anyone who depends on it. It usually draws little
            power, so it is inexpensive to back up &mdash; the{" "}
            <Link href="/cpap-power-calculator" className="font-medium text-brand hover:underline">
              CPAP Power Station Calculator
            </Link>{" "}
            covers CPAP wattages and overnight sizing in detail.
          </li>
          <li>
            <span className="font-medium text-ink">Food safety.</span> A refrigerator or freezer is
            the next common priority. It is a larger load, but running it a few hours at a time is
            often enough to keep food cold. A microwave for reheating is brief but high-wattage
            &mdash; the{" "}
            <Link
              href="/microwave-power-calculator"
              className="font-medium text-brand hover:underline"
            >
              Microwave Power Station Calculator
            </Link>{" "}
            checks whether an inverter can supply it. For an unattended hot meal, a rice cooker is a
            low, steady load &mdash; the{" "}
            <Link
              href="/rice-cooker-power-calculator"
              className="font-medium text-brand hover:underline"
            >
              Rice Cooker Power Station Calculator
            </Link>{" "}
            sizes its cook cycle and keep-warm energy, and the{" "}
            <Link
              href="/slow-cooker-power-calculator"
              className="font-medium text-brand hover:underline"
            >
              Slow Cooker Power Station Calculator
            </Link>{" "}
            sizes an all-day slow cook, where the runtime rather than the wattage sets the battery
            size.
          </li>
          <li>
            <span className="font-medium text-ink">Water and flood protection.</span> If a storm
            outage could flood a basement, a sump pump is a priority; if your home draws water from a
            well, the well pump is your water supply. Both are motor loads, so a power station needs
            the right startup output, not just watt-hours &mdash; the{" "}
            <Link
              href="/sump-pump-power-calculator"
              className="font-medium text-brand hover:underline"
            >
              Sump Pump
            </Link>{" "}
            and{" "}
            <Link
              href="/well-pump-power-calculator"
              className="font-medium text-brand hover:underline"
            >
              Well Pump
            </Link>{" "}
            backup calculators cover running versus starting watts.
          </li>
          <li>
            <span className="font-medium text-ink">Communication and light.</span> Phone charging,
            a Wi-Fi router and a handful of LED bulbs together draw very little and keep you informed
            and safe.
          </li>
          <li>
            <span className="font-medium text-ink">Comfort loads last.</span> A fan, TV or laptop is
            fine to include if capacity allows. High-wattage resistive appliances &mdash; space
            heaters, kettles, hair dryers &mdash; drain a portable unit in well under an hour; the{" "}
            <Link
              href="/electric-heater-power-calculator"
              className="font-medium text-brand hover:underline"
            >
              Electric Heater Power Station Calculator
            </Link>{" "}
            shows how fast. An air conditioner is a heavy load with a compressor surge of its own;
            the{" "}
            <Link
              href="/air-conditioner-power-calculator"
              className="font-medium text-brand hover:underline"
            >
              Air Conditioner Power Station Calculator
            </Link>{" "}
            sizes battery capacity and the output it needs.
          </li>
        </ul>
        <p>
          Add the devices in that order in the calculator above and watch the recommended capacity
          climb, so you can see where your own cutoff sits.
        </p>
      </div>
    </div>
  );
}
