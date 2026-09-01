import Link from "next/link";

export function HdOutageUse() {
  return (
    <div>
      <h2 className="h2">Using a hair dryer during a power outage</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A hair dryer barely dents a battery on energy &mdash; a few minutes is a couple of hundred
          watt-hours. The constraint is the inverter: a 1,500&ndash;1,875&nbsp;W dryer needs a power
          station that can supply that continuously, which rules out most small and mid-size units.
        </p>
        <p>
          For an outage, that usually means:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Back up essentials first &mdash; medical equipment, the refrigerator, lighting,
            communication &mdash; and size those with the{" "}
            <Link
              href="/home-power-outage-calculator"
              className="font-medium text-brand hover:underline"
            >
              Home Power Outage Calculator
            </Link>
            .
          </li>
          <li>
            Use a lower heat setting or a travel dryer to bring the wattage within your inverter&apos;s
            continuous rating.
          </li>
          <li>
            Keep sessions short; the battery cost is small, but running an overloaded inverter is
            not an option.
          </li>
        </ul>
      </div>
    </div>
  );
}
