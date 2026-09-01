import Link from "next/link";

export function RcBatteryVsOutput() {
  return (
    <div>
      <h2 className="h2">Battery capacity vs continuous AC output</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The energy side of this uses the same method as the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            main Power Station Size Calculator
          </Link>
          . Two specifications decide whether a power station can run a rice cooker, and they are
          independent:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Battery capacity</span>, in watt-hours (Wh), is
            the stored energy. A full cook cycle is usually a few hundred watt-hours; leaving the
            cooker on keep-warm for hours adds more on top.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output</span>, in watts (W), is how
            much power the inverter can deliver at once. A 700&nbsp;W rice cooker needs an inverter
            rated for at least 700&nbsp;W continuous while it heats, or the power station overloads
            and cuts out. IH and pressure models draw more.
          </li>
        </ul>
        <p>
          Because most rice cookers are well under a kilowatt, the continuous-output bar is lower
          than for a kettle or toaster oven, and a mid-size power station usually clears it. Capacity
          is more often the thing to watch, especially with keep-warm. To see how long a given unit
          lasts against a steady load, use the{" "}
          <Link
            href="/power-station-runtime-calculator"
            className="font-medium text-brand hover:underline"
          >
            Power Station Runtime Calculator
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
