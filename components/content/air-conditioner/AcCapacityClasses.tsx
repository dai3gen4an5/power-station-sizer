import Link from "next/link";

export function AcCapacityClasses() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Is a 1000Wh or 2000Wh power station enough for an air conditioner?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          For energy alone, and only if the unit&apos;s output and voltage also suit the air
          conditioner:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">500&nbsp;Wh</span> is not a realistic choice.
            Around 325&ndash;400&nbsp;Wh usable is barely an hour for even a small unit, and most
            power stations this size cannot supply the continuous or surge output an air-conditioner
            compressor needs.
          </li>
          <li>
            <span className="font-medium text-ink">1,000&nbsp;Wh</span> (around 650&ndash;800&nbsp;Wh
            usable) is roughly one to two hours for a small 120V portable unit running part of each
            hour. Many 1,000&nbsp;Wh units also fall short on surge for the compressor, so check the
            ratings.
          </li>
          <li>
            <span className="font-medium text-ink">2,000&nbsp;Wh</span> (around
            1,300&ndash;1,600&nbsp;Wh usable) is roughly two to four hours for a small unit with
            moderate cycling, and units this size are more likely to have the surge headroom a
            compressor needs &mdash; for a 120V air conditioner.
          </li>
          <li>
            <span className="font-medium text-ink">3,000&nbsp;Wh and larger</span>, often with
            expandable batteries, is what a longer run or a hotter day needs. Even then, an
            overnight run can exceed a single large unit&apos;s capacity.
          </li>
        </ul>
        <p>
          Put your unit&apos;s measured running and starting watts and a realistic minutes-per-hour
          into the calculator above, then confirm the power station&apos;s output ratings and
          voltage. If you also want to keep a fridge, lights and other essentials going, the{" "}
          <Link
            href="/home-power-outage-calculator"
            className="font-medium text-brand hover:underline"
          >
            Home Power Outage Calculator
          </Link>{" "}
          adds them into one estimate.
        </p>
      </div>
    </div>
  );
}
