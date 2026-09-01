import Link from "next/link";

export function SumpPumpBatteryVsOutput() {
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
          . The difference for a sump pump is that two more specifications decide whether a unit can
          back it up, and it has to pass all three:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Battery capacity</span>, in watt-hours (Wh), is
            how much energy is stored. It sets how long the pump can keep cycling before the battery
            is empty.
          </li>
          <li>
            <span className="font-medium text-ink">Inverter output</span>, in watts (W), is how much
            power the unit can deliver at once. It has two parts: a continuous rating for the running
            load, and a higher surge / peak rating for the brief spike when the motor starts.
          </li>
        </ul>
        <p>
          A large battery with a small inverter will not run the pump. A powerful inverter with a
          small battery will start the pump but drain quickly. The calculator above reports all three
          numbers separately so you can match a power station to each one. To see how long a given
          unit would last against a steady load, use the{" "}
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
