export function SumpPumpFindWattage() {
  return (
    <div>
      <h2 className="h2">
        How to find your pump&apos;s wattage
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Get the numbers from the source, not from a horsepower rule of thumb:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">The rating label</span> on the pump housing or
            motor. It may list watts directly, or amps and volts &mdash; watts is roughly amps
            multiplied by volts. Look for a separate starting or locked-rotor figure.
          </li>
          <li>
            <span className="font-medium text-ink">The owner&apos;s manual</span> or the
            specifications section of the manufacturer&apos;s product page, which often lists running
            and starting wattage explicitly.
          </li>
          <li>
            <span className="font-medium text-ink">A plug-in watt meter</span> on the pump&apos;s
            outlet. Watch the reading while the pump cycles: the steady value is the running figure,
            and a good meter will also capture a peak. Note that a very brief inrush can be higher
            than a meter shows.
          </li>
        </ul>
        <p>
          Horsepower on its own does not give a reliable wattage. Two pumps with the same
          &ldquo;1/2 HP&rdquo; label can draw noticeably different running and starting watts
          depending on the motor and design, so this calculator asks for the measured or
          spec-sheet numbers rather than converting from horsepower.
        </p>
      </div>
    </div>
  );
}
