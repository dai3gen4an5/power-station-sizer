import Link from "next/link";

export function ScThermostatCycling() {
  return (
    <div>
      <h2 className="h2">Thermostat cycling</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Once the food is up to temperature, a slow cooker&apos;s element switches on and off to
          hold it there, so the average power over a long cook can be noticeably below the nameplate
          wattage. The peak draw while the element is on is still the full input wattage.
        </p>
        <p>
          How much the average drops is not predictable &mdash; it depends on the model, the
          setting, how full the pot is, the starting temperature of the food, the room temperature,
          and how often the lid comes off. So this calculator uses{" "}
          <span className="font-medium text-ink">full entered watts for the full entered
          hours</span> as a safe planning estimate and does not apply a duty-cycle discount.
        </p>
        <p>
          If you measure your cooker with a watt meter and know its average input over a real cook,
          enter that average wattage instead for a more realistic figure. To see how a steady low
          draw pulls a battery down over many hours, use the{" "}
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
