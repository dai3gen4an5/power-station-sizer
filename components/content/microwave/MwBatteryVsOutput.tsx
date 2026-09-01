import Link from "next/link";

export function MwBatteryVsOutput() {
  return (
    <div>
      <h2 className="h2">
        Battery capacity vs inverter output
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The energy side of this uses the same method as the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            main Power Station Size Calculator
          </Link>
          . For a microwave, two specifications decide whether a power station works, and they are
          independent:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Battery capacity</span>, in watt-hours (Wh), is
            the stored energy. A microwave session is short, so this is rarely the constraint &mdash;
            a modest power station holds many sessions&apos; worth.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output</span>, in watts (W), is how
            much power the inverter can deliver at once. A microwave is a steady high-wattage load
            for the minutes it runs, so its input watts must sit at or below the inverter&apos;s
            continuous rating or the power station overloads and cuts out.
          </li>
        </ul>
        <p>
          Because of that, microwave sizing is usually <span className="font-medium text-ink">output-limited,
          not capacity-limited</span>. A 2,000&nbsp;Wh unit with a 2,000&nbsp;W inverter runs most
          countertop microwaves; a 2,000&nbsp;Wh unit with a 1,000&nbsp;W inverter does not, no
          matter how full the battery is. To see how long a given unit lasts against a steady load,
          use the{" "}
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
