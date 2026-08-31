import Link from "next/link";

export function MwCan1000Wh() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Can a 1000Wh power station run a microwave?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          On energy, easily. A 1,000&nbsp;Wh power station has roughly 650&ndash;800&nbsp;Wh usable,
          which is many microwave sessions &mdash; a 250&nbsp;Wh, ten-minute example is about three
          full sessions with room to spare.
        </p>
        <p>
          Whether it runs the microwave at all comes down to the inverter. A typical countertop
          microwave draws around 1,200&ndash;1,700&nbsp;W of input. A 1,000&nbsp;Wh unit with a
          1,000&nbsp;W (or smaller) inverter cannot sustain that and will overload. Some
          1,000&nbsp;Wh-class units ship with a larger inverter &mdash; 1,500&nbsp;W or more, often
          with a short higher &ldquo;surge&rdquo; or &ldquo;power-lifting&rdquo; mode &mdash; and
          those can run a smaller microwave.
        </p>
        <p>
          Check the power station&apos;s rated continuous AC output against your microwave&apos;s
          input watts before counting on it. If you also need to keep a fridge, lights, or a CPAP
          going, add them together in the{" "}
          <Link
            href="/home-power-outage-calculator"
            className="font-medium text-brand hover:underline"
          >
            Home Power Outage Calculator
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
