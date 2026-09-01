import Link from "next/link";

export function RcCan1000Wh() {
  return (
    <div>
      <h2 className="h2">Can a 1000Wh power station run a rice cooker?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Comfortably, for most rice cookers. A 1,000&nbsp;Wh unit has about 650&ndash;800&nbsp;Wh
          usable &mdash; enough for a 700&nbsp;W family cooker&apos;s full cycle (around 525&nbsp;Wh
          raw, roughly 772&nbsp;Wh recommended) with a bit left for a keep-warm hour or two. IH and
          pressure models use more, so check the cycle energy for your unit.
        </p>
        <p>
          Output is rarely the problem here: 1,000&nbsp;Wh-class power stations almost always have a
          1,500&nbsp;W or larger inverter, well above any common rice cooker. If you also want to
          keep a fridge, lights, or a router going during an outage, add them together in the{" "}
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
