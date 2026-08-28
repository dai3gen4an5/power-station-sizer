export function RefrigeratorSolarCharging() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Solar charging for refrigerator backup</h2>
      <p className="mt-3 text-ink/75">
        Because a refrigerator draws power continuously, in cycles, rather than for a single scheduled
        task, backing it up for more than a day or two generally benefits from a way to recharge the power
        station, such as solar panels. Solar output varies with panel size, weather, and daylight hours,
        so it&apos;s realistic to expect a partial recharge on cloudy days rather than a guaranteed full
        one. Pairing solar with some extra reserve capacity gives more margin if a stretch of low sunlight
        coincides with an extended outage.
      </p>
    </div>
  );
}
