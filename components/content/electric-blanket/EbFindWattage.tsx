export function EbFindWattage() {
  return (
    <div>
      <h2 className="h2">How to find your electric blanket&apos;s watts</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Rating label.</span> Check the blanket&apos;s
            care label, the controller, and the plug pack. It usually lists volts and watts, or amps
            (amps &times; volts = watts). Dual-control blankets may list each side separately.
          </li>
          <li>
            <span className="font-medium text-ink">Manual or manufacturer spec.</span> Look for
            &ldquo;rated power&rdquo;, &ldquo;wattage&rdquo;, or a figure per heat setting.
          </li>
          <li>
            <span className="font-medium text-ink">Watt meter.</span> Plug the blanket in and read
            the wattage while it is actively heating &mdash; that active draw is what you enter, and
            what the inverter has to supply. A meter also shows the lower long-run average once the
            thermostat starts cycling, which is useful for a separate energy estimate but is not the
            figure for this calculator.
          </li>
        </ul>
        <p>
          Heated throws are often 40&ndash;80&nbsp;W; single blankets are commonly
          60&ndash;100&nbsp;W; queen and king blankets with dual controls can total
          120&ndash;180&nbsp;W with both sides on high. Do not assume a figure from the blanket
          size &mdash; read the label and enter that number for the setting you use.
        </p>
      </div>
    </div>
  );
}
