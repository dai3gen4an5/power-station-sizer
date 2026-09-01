import Link from "next/link";

export function AfBatteryVsOutput() {
  return (
    <div>
      <h2 className="h2">Battery capacity vs AC output</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The energy side of this uses the same method as the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            main Power Station Size Calculator
          </Link>
          . Two specifications decide whether a power station can run an air fryer, and they are
          independent:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Battery capacity</span>, in watt-hours (Wh), is
            the stored energy. An air fryer runs longer than a microwave, so a full cook is a few
            hundred watt-hours &mdash; still modest, but not negligible over several batches.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output</span>, in watts (W), is how
            much power the inverter can deliver at once. A 1,500&nbsp;W air fryer needs an inverter
            rated for at least 1,500&nbsp;W continuous, held for the whole cook, or the power station
            overloads and cuts out.
          </li>
        </ul>
        <p>
          Both can be the limit: a small battery behind a big inverter runs out mid-cook, and a big
          battery behind a small inverter never starts. To see how long a given unit lasts against a
          steady load, use the{" "}
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
