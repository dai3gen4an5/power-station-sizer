import Link from "next/link";

export function CmBatteryVsOutput() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Battery capacity vs AC output
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The energy side of this uses the same method as the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            main Power Station Size Calculator
          </Link>
          . Two specifications decide whether a power station can run a coffee maker, and they are
          independent:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Battery capacity</span>, in watt-hours (Wh), is
            the stored energy. A brew cycle is short, so this is rarely the constraint &mdash; a
            small power station holds many pots&apos; worth.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output</span>, in watts (W), is how
            much power the inverter can deliver at once. A 1,200&nbsp;W coffee maker needs an
            inverter rated for at least 1,200&nbsp;W continuous, held for the whole brew, or the
            power station overloads and cuts out.
          </li>
        </ul>
        <p>
          Because of that, coffee-maker sizing is usually output-limited, not capacity-limited. To
          see how little runtime a short high-wattage load actually consumes, use the{" "}
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
