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
          Cycling can pull the average energy use below that estimate, but{" "}
          <span className="font-medium text-ink">do not replace the cooker&apos;s active or rated
          wattage with a long-run average in this calculator</span>, because the same input is also
          used to size the required continuous AC output &mdash; and the inverter still has to supply
          the full heating draw whenever the element switches on.
        </p>
        <p>
          For a tighter energy-only figure, measure the total watt-hours over a full cook cycle, or
          multiply a measured average wattage by the cook hours, and use that number for capacity
          planning on its own. Either way, verify the power station&apos;s continuous AC output
          against the cooker&apos;s full active or nameplate wattage separately. To see how a steady
          low draw pulls a battery down over many hours, use the{" "}
          <Link
            href="/power-station-runtime-calculator"
            className="font-medium text-brand hover:underline"
          >
            Power Station Runtime Calculator
          </Link>
          , and for a multi-figure capacity estimate add the phases as rows in the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            main Power Station Size Calculator
          </Link>{" "}
          &mdash; then still check the continuous output against the full wattage yourself.
        </p>
      </div>
    </div>
  );
}
