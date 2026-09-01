import Link from "next/link";

export function ToThermostatCycling() {
  return (
    <div>
      <h2 className="h2">Thermostat cycling</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Once a toaster oven reaches its set temperature, the heating elements usually cycle on and
          off under thermostat control, so the average draw over a bake can be below the nameplate
          wattage. The peak draw while the elements are on is still the full input wattage &mdash;
          that is the figure the inverter has to sustain.
        </p>
        <p>
          How much the average drops is not predictable: it depends on the model, the set
          temperature, the food, how full the oven is, and the room temperature. So this calculator
          uses <span className="font-medium text-ink">full entered watts for the full entered
          minutes</span> as a safe planning estimate and does not apply a duty-cycle discount.
        </p>
        <p>
          If you have measured your oven with a watt meter and know it averages less, shorten the
          minutes to the equivalent time at full power. The same output-limited pattern applies to an{" "}
          <Link
            href="/electric-heater-power-calculator"
            className="font-medium text-brand hover:underline"
          >
            electric heater
          </Link>{" "}
          over longer runs.
        </p>
      </div>
    </div>
  );
}
