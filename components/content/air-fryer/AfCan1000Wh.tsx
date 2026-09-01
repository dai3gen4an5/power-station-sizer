import Link from "next/link";

export function AfCan1000Wh() {
  return (
    <div>
      <h2 className="h2">Can a 1000Wh power station run an air fryer?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          On energy, for a cook or two &mdash; a 1,000&nbsp;Wh unit with about 650&ndash;800&nbsp;Wh
          usable covers a single 20-minute cook at 1,500&nbsp;W with a bit to spare, though several
          batches will run it down.
        </p>
        <p>
          Output decides whether it runs at all. A 1,000&nbsp;Wh power station with a 1,000&nbsp;W
          inverter cannot sustain a 1,500&nbsp;W air fryer; a 1,000&nbsp;Wh-class unit with a
          1,500&nbsp;W or larger inverter can run a 1,500&nbsp;W model, and a 1,800&nbsp;W air fryer
          needs a bigger inverter still. Check the continuous rating against your air fryer&apos;s
          input watts. If you also want to keep a fridge, lights, or a router going during an outage,
          add them together in the{" "}
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
