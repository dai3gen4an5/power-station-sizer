export function AfPreheatThermostat() {
  return (
    <div>
      <h2 className="h2">Preheat and thermostat cycling</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Air fryers vary in how they draw power. Some preheat for a few minutes before you add
          food; others skip it. Once at temperature, the heating element usually cycles on and off
          under thermostat control, so the average draw over a cook can be below the nameplate
          wattage.
        </p>
        <p>
          How much lower is not predictable &mdash; it depends on the food quantity, the temperature
          setpoint, the model, and whether it preheated. So this calculator uses{" "}
          <span className="font-medium text-ink">full entered watts for the full entered
          minutes</span> as a safe planning estimate and does not apply a duty-cycle discount or an
          automatic preheat allowance.
        </p>
        <p>
          To account for preheat, add those minutes to the cook time. To model cycling, shorten the
          minutes to the equivalent time you expect the element to actually be drawing power.
        </p>
      </div>
    </div>
  );
}
