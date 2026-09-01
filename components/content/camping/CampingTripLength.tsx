import Link from "next/link";

export function CampingTripLength() {
  return (
    <div>
      <h2 className="h2">
        1 night vs a weekend vs 3 days
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The calculator totals one day of use, then multiplies by the{" "}
          <span className="font-medium">Number of days</span> you set. Trip length changes the answer
          more than any single device:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">One night.</span> Lights, a fan, phone charging
            and a CPAP is a few hundred watt-hours &mdash; a 300&ndash;500&nbsp;Wh unit is usually
            enough. Add a cooler and 500&ndash;1,000&nbsp;Wh is the safer range.
          </li>
          <li>
            <span className="font-medium text-ink">A weekend (2 nights).</span> Set Number of days to
            2. A cooler plus the small stuff commonly lands near 1,200&ndash;2,000&nbsp;Wh once losses
            and reserve are included, so a 1,000&nbsp;Wh unit with some solar, or a 2,000&nbsp;Wh unit
            on its own, is a common choice.
          </li>
          <li>
            <span className="font-medium text-ink">Three days or more.</span> Without recharging, the
            capacity you need scales roughly with the day count and quickly reaches the 2,000&nbsp;Wh
            class or larger. Most people pair a mid-size unit with a solar panel instead.
          </li>
        </ul>
        <p>
          If your goal is backing up a house during a grid outage rather than camping, the{" "}
          <Link
            href="/home-power-outage-calculator"
            className="font-medium text-brand hover:underline"
          >
            Home Power Outage Calculator
          </Link>{" "}
          is the better fit.
        </p>
      </div>
    </div>
  );
}
