import Link from "next/link";

export function RcOutageUse() {
  return (
    <div>
      <h2 className="h2">Using a rice cooker during a power outage</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A rice cooker is a low-stress outage load: modest wattage, a fixed cycle, and no need to
          stand over it. The main planning question is energy, not output &mdash; the cook cycle
          plus any keep-warm time, measured against what you have left after the essentials.
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
            Confirm the inverter&apos;s continuous rating covers your cooker&apos;s input watts
            &mdash; usually a formality for a resistive model, worth checking for IH and pressure.
          </li>
          <li>
            Switch keep-warm off once the rice is done, or plan the extra energy for the hours you
            leave it on.
          </li>
        </ul>
      </div>
    </div>
  );
}
