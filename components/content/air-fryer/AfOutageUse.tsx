import Link from "next/link";

export function AfOutageUse() {
  return (
    <div>
      <h2 className="h2">Using an air fryer during a power outage</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          An air fryer is a useful way to cook a hot meal from a power station, but it is a heavy
          load. A 1,500&ndash;1,800&nbsp;W element needs a power station that can supply that
          continuously, and a full cook plus a second batch is close to a kilowatt-hour after
          losses.
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
            Confirm the inverter&apos;s continuous rating covers your air fryer&apos;s watts before
            counting on it.
          </li>
          <li>
            Cook one batch at a time and recharge between meals if you can; a microwave is far
            lighter on the battery for simple reheating.
          </li>
        </ul>
      </div>
    </div>
  );
}
