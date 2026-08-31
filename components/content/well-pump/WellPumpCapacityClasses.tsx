import Link from "next/link";

export function WellPumpCapacityClasses() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Is a 1000Wh or 2000Wh power station enough for a well pump?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          For energy alone, and only if the unit&apos;s output and voltage also suit the pump:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">500&nbsp;Wh</span> (around 325&ndash;400&nbsp;Wh
            usable) is not a realistic choice for most well pumps. Units this size rarely have the
            continuous or surge output a well-pump motor needs, and the energy only covers a short
            outage with very light water use.
          </li>
          <li>
            <span className="font-medium text-ink">1,000&nbsp;Wh</span> (around 650&ndash;800&nbsp;Wh
            usable) can cover a few hours for a 120V pump running roughly 10 minutes per hour, but
            many 1,000&nbsp;Wh units still fall short on surge output for the motor. Check the
            ratings.
          </li>
          <li>
            <span className="font-medium text-ink">2,000&nbsp;Wh</span> (around
            1,300&ndash;1,600&nbsp;Wh usable) covers a longer outage or heavier water use, and units
            this size are more likely to have the surge headroom a pump motor needs &mdash; for a
            120V pump.
          </li>
          <li>
            <span className="font-medium text-ink">3,000&nbsp;Wh and larger</span> is for long
            outages, heavy household demand, or running the pump alongside other essentials such as
            those in the{" "}
            <Link
              href="/home-power-outage-calculator"
              className="font-medium text-brand hover:underline"
            >
              Home Power Outage Calculator
            </Link>
            .
          </li>
        </ul>
        <p>
          Put your pump&apos;s measured running and starting watts and a realistic minutes-per-hour
          into the calculator above, then confirm the unit&apos;s output ratings and voltage before
          buying.
        </p>
      </div>
    </div>
  );
}
