import Link from "next/link";

export function OutagePriorityAppliances() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
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
            often enough to keep food cold.
          </li>
          <li>
            <span className="font-medium text-ink">Communication and light.</span> Phone charging,
            a Wi-Fi router and a handful of LED bulbs together draw very little and keep you informed
            and safe.
          </li>
          <li>
            <span className="font-medium text-ink">Comfort loads last.</span> A fan, TV or laptop is
            fine to include if capacity allows. Leave out high-wattage resistive appliances &mdash;
            space heaters, kettles, hair dryers, air conditioners &mdash; which can drain a portable
            unit in well under an hour.
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
