import Link from "next/link";

export function EhBatteryVsOutput() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Battery capacity vs inverter output
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The energy side of this uses the same method as the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            main Power Station Size Calculator
          </Link>
          . Two specifications decide whether a power station can run a heater, and they are
          independent:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Battery capacity</span>, in watt-hours (Wh), is
            the stored energy &mdash; how long the heater can run before the battery is empty.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output</span>, in watts (W), is how
            much power the inverter can deliver at once. A 1,500&nbsp;W heater needs an inverter
            rated for at least 1,500&nbsp;W continuous, held for the whole run, or the power station
            overloads and shuts off.
          </li>
        </ul>
        <p>
          Unlike a microwave, a heater stresses both: it needs a big inverter <em>and</em> a large
          battery, because it draws heavily for a long time. To see how long a given unit lasts
          against a steady load, use the{" "}
          <Link
            href="/power-station-runtime-calculator"
            className="font-medium text-brand hover:underline"
          >
            Power Station Runtime Calculator
          </Link>
          . The same capacity-versus-output split applies to an{" "}
          <Link
            href="/air-conditioner-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            air conditioner
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
