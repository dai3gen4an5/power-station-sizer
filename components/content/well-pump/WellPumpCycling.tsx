import Link from "next/link";

export function WellPumpCycling() {
  return (
    <div>
      <h2 className="h2">
        How cycling affects battery use
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A well pump does not run continuously. It switches on when the pressure tank drops to the
          cut-in pressure, refills the tank in a minute or two, and switches off at cut-out. How much
          it runs over an hour depends on how much water the household uses &mdash; a few minutes with
          normal use, more with laundry, irrigation, or livestock.
        </p>
        <p>
          That is why the calculator asks for minutes per hour rather than assuming the pump runs the
          whole outage. Multiplying running watts by the full outage length overestimates the energy
          needed. A pump drawing 1,000&nbsp;watts that runs 10 minutes of each hour uses about{" "}
          <span className="font-mono">1000 &times; 10 / 60 = 167&nbsp;Wh</span> per hour, not
          1,000&nbsp;Wh.
        </p>
        <p>
          Estimate a realistic busy case for your household during an outage, and remember that a
          larger pressure tank means fewer, longer pump cycles. The same on-and-off idea drives a
          sump pump; the{" "}
          <Link
            href="/sump-pump-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Sump Pump Backup Power Calculator
          </Link>{" "}
          covers that case.
        </p>
      </div>
    </div>
  );
}
