import Link from "next/link";

export function IcRvCamping() {
  return (
    <div>
      <h2 className="h2">RV, camping, and off-grid use</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">RV.</span> A 1,500&ndash;1,800&nbsp;W induction
            cooktop is one of the heaviest sustained AC loads in a rig. Check the inverter&apos;s
            continuous rating and which outlets it feeds before counting on it. The{" "}
            <Link
              href="/rv-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              RV Power Station Calculator
            </Link>{" "}
            covers 12V and AC loads together.
          </li>
          <li>
            <span className="font-medium text-ink">Camping.</span> Induction cooking off a power
            station needs both a large inverter and real battery capacity for the cook &mdash; a
            bigger commitment than a stove. The{" "}
            <Link
              href="/camping-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              Camping Power Station Calculator
            </Link>{" "}
            sizes the rest of your setup.
          </li>
          <li>
            <span className="font-medium text-ink">Off-grid.</span> Plan for the recharge as well as
            the cook: a solar array or a vehicle alternator has to put back close to a kilowatt-hour
            per meal.
          </li>
        </ul>
        <p>
          A{" "}
          <Link href="/microwave-power-calculator" className="font-medium text-brand hover:underline">
            microwave
          </Link>
          , an{" "}
          <Link href="/electric-kettle-power-calculator" className="font-medium text-brand hover:underline">
            electric kettle
          </Link>
          , a{" "}
          <Link href="/coffee-maker-power-calculator" className="font-medium text-brand hover:underline">
            coffee maker
          </Link>
          , an{" "}
          <Link href="/air-fryer-power-calculator" className="font-medium text-brand hover:underline">
            air fryer
          </Link>
          , and &mdash; over longer runs &mdash; an{" "}
          <Link
            href="/electric-heater-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            electric heater
          </Link>{" "}
          all behave the same way &mdash; output-limited by a heating element &mdash; but a
          microwave&apos;s far shorter run makes it the lighter choice off-grid.
        </p>
      </div>
    </div>
  );
}
