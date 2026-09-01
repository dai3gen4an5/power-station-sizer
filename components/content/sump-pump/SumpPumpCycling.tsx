import Link from "next/link";

export function SumpPumpCycling() {
  return (
    <div>
      <h2 className="h2">
        How pump cycling affects battery use
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A sump pump does not run continuously. It switches on when the pit fills to the float
          level, empties it in a minute or two, and switches off again. Over an hour it might run only
          a few minutes in dry weather, or many minutes during heavy rain or snowmelt.
        </p>
        <p>
          That is why the calculator asks for minutes per hour rather than assuming the pump runs the
          whole outage. Multiplying running watts by the full outage length overestimates the energy
          needed, often by a lot. A pump drawing 800&nbsp;watts that runs 10 minutes of each hour
          uses about <span className="font-mono">800 &times; (10 / 60) = 133&nbsp;Wh</span> per hour,
          not 800&nbsp;Wh.
        </p>
        <p>
          Estimate the busiest realistic case for your basement &mdash; the run time during the kind
          of storm that also causes the outage &mdash; rather than a calm day. The same
          on-and-off idea applies to a refrigerator; the{" "}
          <Link
            href="/refrigerator-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Refrigerator Power Station Calculator
          </Link>{" "}
          covers duty cycle and startup surge for that case.
        </p>
      </div>
    </div>
  );
}
