import Link from "next/link";

export function EbOutageUse() {
  return (
    <div>
      <h2 className="h2">Using an electric blanket during a power outage</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          In a winter outage, a heated blanket usually uses far less power than heating a whole room
          with a space heater, because it warms the person and bedding directly. A space heater can
          pull well over a thousand watts and drain a portable unit in under an hour; a blanket
          drawing tens of watts can keep a person warm for a whole night on a small share of the
          same battery. Check the blanket manual allows inverter or power-station use first.
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
            Plan the blanket as an overnight energy load: active watts times the hours, checked
            against what you can spare after the essentials.
          </li>
          <li>
            Warm the bed, then drop to a lower setting or let the timer take over &mdash; heating to
            temperature costs more than holding it.
          </li>
        </ul>
      </div>
    </div>
  );
}
