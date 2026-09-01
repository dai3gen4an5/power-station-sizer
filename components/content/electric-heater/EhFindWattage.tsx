export function EhFindWattage() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        How to find your heater&apos;s input watts
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Rating label.</span> The plate on the base or
            back lists volts and watts or amps (amps &times; volts = watts). Many heaters show two
            figures, one per heat setting.
          </li>
          <li>
            <span className="font-medium text-ink">Manual or manufacturer spec.</span> Look for
            &ldquo;rated power&rdquo;, &ldquo;power consumption&rdquo;, or &ldquo;wattage&rdquo;, with
            the High and Low values.
          </li>
          <li>
            <span className="font-medium text-ink">Watt meter.</span> Plug the heater into a meter on
            each setting and read the watts &mdash; a measured figure, and the most reliable.
          </li>
        </ul>
        <p>
          Common ratings are around 500, 750, 1,000, and 1,500&nbsp;W, but do not assume yours: some
          personal heaters draw a few hundred watts, and a 1,500&nbsp;W heater on Low may pull about
          750&nbsp;W. Size the calculator on the setting you will actually run.
        </p>
      </div>
    </div>
  );
}
