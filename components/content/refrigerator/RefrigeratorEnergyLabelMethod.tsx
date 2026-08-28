export function RefrigeratorEnergyLabelMethod() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Using the EnergyGuide label</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          If your refrigerator&apos;s EnergyGuide label lists an estimated annual energy use in kWh, you
          can convert that into an average daily figure: annual kWh ÷ 365 = average kWh/day. Multiply by
          1,000 to convert to watt-hours: kWh/day × 1,000 = Wh/day.
        </p>
        <p className="font-mono text-sm text-ink">
          365 kWh/year ÷ 365 = 1 kWh/day → 1 kWh/day × 1,000 = approximately 1,000 Wh/day
        </p>
        <p>
          This gives a useful average, but actual daily use varies with ambient temperature, how often the
          door is opened, the thermostat setting, the refrigerator&apos;s age, whether it has an ice maker,
          its defrost cycle, and how full it is. Treat the label-based estimate as a starting point rather
          than an exact prediction for any single day.
        </p>
      </div>
    </div>
  );
}
