export function WellPumpFindWattage() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        How to find your pump&apos;s actual wattage
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Get the numbers from the source, not from a horsepower rule of thumb:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">The rating label</span> on the pump or its motor.
            It may list watts, or amps and volts &mdash; watts is roughly amps multiplied by volts.
            Look for a separate starting, surge, or locked-rotor amps figure, and note the voltage.
          </li>
          <li>
            <span className="font-medium text-ink">The owner&apos;s manual</span> or the
            specifications on the manufacturer&apos;s product page, which often list running and
            starting wattage and the required voltage explicitly.
          </li>
          <li>
            <span className="font-medium text-ink">The pressure-switch or controller documentation</span>{" "}
            for constant-pressure or soft-start systems, which changes the startup behaviour.
          </li>
          <li>
            <span className="font-medium text-ink">A plug-in or clamp watt meter</span> where the
            pump is on a standard outlet. The steady reading is the running figure; a peak-hold
            feature captures an approximate surge, though a very brief inrush can be higher.
          </li>
        </ul>
        <p>
          Horsepower &mdash; 1/2&nbsp;HP, 3/4&nbsp;HP, 1&nbsp;HP, 1.5&nbsp;HP &mdash; is a useful
          search term, but it does not give a reliable wattage. Two pumps with the same horsepower
          label can draw noticeably different running and starting watts depending on the motor, the
          pump design, the controller, and the supply voltage, so this calculator asks for the
          measured or spec-sheet numbers instead of converting from horsepower.
        </p>
      </div>
    </div>
  );
}
