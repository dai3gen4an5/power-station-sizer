import Link from "next/link";

export function OutageSolarRecharge() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Extending a long outage with solar
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Past a day or two, buying enough battery to ride out the whole outage gets expensive and
          heavy. Pairing a mid-size power station with a solar panel is a common alternative: the
          panel replaces some of what you use each day, so the battery only has to cover the gap and
          the overnight hours.
        </p>
        <p>
          Solar output swings with weather, shade, panel angle and daylight, so plan for partial
          rather than full recharges and keep a reserve as a buffer. The{" "}
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
          works out how many watts of panel you need to keep pace over a set number of days.
        </p>
      </div>
    </div>
  );
}
