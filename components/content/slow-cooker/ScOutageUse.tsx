import Link from "next/link";

export function ScOutageUse() {
  return (
    <div>
      <h2 className="h2">Using a slow cooker during a power outage</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A slow cooker is a low-stress way to cook during an outage &mdash; it needs no attention
          and its wattage is trivial for any power station. The catch is the total energy: a full
          cook is one to two kilowatt-hours or more, which is a large share of a portable
          unit&apos;s capacity.
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
            Check the cook energy against what you can spare after the essentials, not against the
            inverter rating.
          </li>
          <li>
            A shorter cook on High, or switching off the Warm setting once the food is done, saves a
            meaningful chunk of battery.
          </li>
        </ul>
      </div>
    </div>
  );
}
