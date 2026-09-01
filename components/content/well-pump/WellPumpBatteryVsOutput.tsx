import Link from "next/link";

export function WellPumpBatteryVsOutput() {
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
          . For a well pump, two more specifications decide whether a unit can back it up, and it has
          to pass all of them:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Battery capacity</span>, in watt-hours (Wh), is
            the stored energy. It sets how long the pump can keep cycling before the battery is empty.
          </li>
          <li>
            <span className="font-medium text-ink">Inverter output</span>, in watts (W), is how much
            power the unit can deliver at once: a continuous rating for the running load and a higher
            surge / peak rating for the spike when the motor starts.
          </li>
          <li>
            <span className="font-medium text-ink">AC voltage</span> &mdash; whether the unit outputs
            120V, 240V, or both, in an outlet your pump can use. A 240V pump will not run from a
            120V-only power station.
          </li>
        </ul>
        <p>
          A large battery behind a small inverter will not run the pump; a powerful inverter with a
          small battery starts it but drains fast; and the right watts at the wrong voltage does not
          help at all. The calculator above reports the watt-hours and the watts separately, and
          flags voltage as a check you must do yourself. To see how long a given unit lasts against a
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
