import Link from "next/link";

export function SolarPanelCampingRvOutage() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Sizing a panel for camping, RV, and outage use
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          <span className="font-medium text-ink">Camping.</span> Work out your daily consumption with
          the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            Power Station Size Calculator
          </Link>
          , then size the panel to replace that much within the peak sun hours you actually get on
          site. Trees and terrain often cut the usable window, so lean toward a larger panel or a
          multi-day recharge target.
        </p>
        <p>
          <span className="font-medium text-ink">RV and van.</span> Fixed roof panels are convenient
          but rarely at the ideal angle, so their real-world efficiency is on the low side — enter a
          lower figure for them. A portable panel you can tilt toward the sun often out-produces a
          bigger flat array, and it can be added without exceeding the power station&apos;s input
          limit.
        </p>
        <p>
          <span className="font-medium text-ink">Power outage.</span> Here the panel&apos;s job is to
          keep pace with daily use so a fixed battery lasts indefinitely. Size it against your outage
          load, check how long a charge lasts each device with the{" "}
          <Link href="/power-station-runtime-calculator" className="font-medium text-brand hover:underline">
            Power Station Runtime Calculator
          </Link>
          , and see the{" "}
          <Link href="/solar-charge-time-calculator" className="font-medium text-brand hover:underline">
            Solar Charge Time Calculator
          </Link>{" "}
          to check a specific panel against a charge gap. Device-specific guidance is available for{" "}
          <Link href="/refrigerator-power-calculator" className="font-medium text-brand hover:underline">
            refrigerators
          </Link>{" "}
          and{" "}
          <Link href="/starlink-power-calculator" className="font-medium text-brand hover:underline">
            Starlink
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
