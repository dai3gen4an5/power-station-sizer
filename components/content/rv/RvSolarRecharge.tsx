import Link from "next/link";

export function RvSolarRecharge() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Solar recharging while camping
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          On trips longer than a day, most people top a power station back up rather than carry
          enough battery for the whole stay. A portable or roof-mounted solar panel replaces some of
          what you use each day, so the battery only has to cover the overnight hours and the gap on
          cloudy days.
        </p>
        <p>
          Real solar output is well below the panel&apos;s rating once you account for weather, shade,
          panel angle, temperature and the final slow stretch of charging, so plan for partial
          recharges and keep a reserve as a buffer. The{" "}
          <Link
            href="/solar-charge-time-calculator"
            className="font-medium text-brand hover:underline"
          >
            Solar Charge Time Calculator
          </Link>{" "}
          estimates how long a given panel takes to refill a unit, and the{" "}
          <Link
            href="/solar-panel-size-calculator"
            className="font-medium text-brand hover:underline"
          >
            Solar Panel Size Calculator
          </Link>{" "}
          works out how many watts of panel you need to keep pace over a set number of days of
          camping.
        </p>
      </div>
    </div>
  );
}
