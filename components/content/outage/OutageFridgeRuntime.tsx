import Link from "next/link";

export function OutageFridgeRuntime() {
  return (
    <div>
      <h2 className="h2">
        How long will a power station run a refrigerator during an outage?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A typical residential refrigerator draws roughly 100&ndash;250&nbsp;watts while the
          compressor runs, but the compressor is only on for part of each hour. Averaged over a day
          that often works out to around 1,000&ndash;1,500&nbsp;Wh. On that basis a 1,000&nbsp;Wh
          power station might cover somewhere near half a day to a day, a 2,000&nbsp;Wh unit around a
          day and a half, and a 3,000&nbsp;Wh unit two days or more &mdash; before accounting for
          anything else you plug in.
        </p>
        <p>
          <span className="font-medium text-ink">Startup surge matters too.</span> The compressor
          motor briefly pulls several times its running wattage when it kicks in. Battery capacity in
          watt-hours and inverter output in watts are separate specs: a unit can have plenty of
          stored energy yet still trip on the surge. Check the refrigerator&apos;s starting wattage
          and the power station&apos;s surge rating before relying on it.
        </p>
        <p>
          The{" "}
          <Link
            href="/refrigerator-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            Refrigerator Power Station Calculator
          </Link>{" "}
          covers compressor cycling and surge in more detail, and the{" "}
          <Link
            href="/power-station-runtime-calculator"
            className="font-medium text-brand hover:underline"
          >
            Power Station Runtime Calculator
          </Link>{" "}
          estimates hours for a specific unit and load.
        </p>
      </div>
    </div>
  );
}
