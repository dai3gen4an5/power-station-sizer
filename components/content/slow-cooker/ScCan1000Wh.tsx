import Link from "next/link";

export function ScCan1000Wh() {
  return (
    <div>
      <h2 className="h2">Can a 1000Wh power station run a slow cooker?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          For a shorter cook, yes. A 1,000&nbsp;Wh unit has about 650&ndash;800&nbsp;Wh usable. A
          200&nbsp;W cooker for 3 hours is 600&nbsp;Wh raw, roughly 880&nbsp;Wh recommended &mdash;
          near the edge of a 1,000&nbsp;Wh unit. A 250&nbsp;W cooker for 6 hours (1,500&nbsp;Wh raw,
          over 2,000&nbsp;Wh recommended) does not fit.
        </p>
        <p>
          As always with a slow cooker, the inverter is not the limit &mdash; a 1,000&nbsp;Wh
          power station has far more continuous output than the cooker needs. Match the unit&apos;s
          usable capacity to your cook energy plus any keep-warm time. If you also want to keep a
          fridge, lights, or a router going during an outage, add them together in the{" "}
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
