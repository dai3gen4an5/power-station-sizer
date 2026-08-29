import Link from "next/link";

export function RefrigeratorSolarCharging() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Solar charging for refrigerator backup</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Because a refrigerator draws power continuously, in cycles, rather than for a single scheduled
          task, backing it up for more than a day or two generally benefits from a way to recharge the
          power station, such as solar panels. Solar output varies with panel size, weather, and daylight
          hours, so it&apos;s realistic to expect a partial recharge on cloudy days rather than a
          guaranteed full one. Pairing solar with some extra reserve capacity gives more margin if a
          stretch of low sunlight coincides with an extended outage.
        </p>
        <p>
          To estimate how long a panel would take to top the battery back up, use the{" "}
          <Link href="/solar-charge-time-calculator" className="font-medium text-brand hover:underline">
            Solar Charge Time Calculator
          </Link>
          , or the{" "}
          <Link href="/solar-panel-size-calculator" className="font-medium text-brand hover:underline">
            Solar Panel Size Calculator
          </Link>{" "}
          to find the panel wattage that keeps up with a day of fridge use. If you&apos;re also running
          Starlink off-grid, see our{" "}
          <Link href="/starlink-power-calculator" className="font-medium text-brand hover:underline">
            Starlink Power Station Calculator
          </Link>{" "}
          for solar and battery planning specific to Starlink&apos;s power draw.
        </p>
      </div>
    </div>
  );
}
