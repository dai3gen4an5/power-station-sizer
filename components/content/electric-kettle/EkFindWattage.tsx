export function EkFindWattage() {
  return (
    <div>
      <h2 className="h2">How to find your kettle&apos;s input watts</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Rating label.</span> The plate on the base lists
            volts and watts or amps (amps &times; volts = watts). This is the electrical input.
          </li>
          <li>
            <span className="font-medium text-ink">Manual or manufacturer spec.</span> Look for
            &ldquo;rated power&rdquo;, &ldquo;power&rdquo;, or &ldquo;wattage&rdquo;.
          </li>
          <li>
            <span className="font-medium text-ink">Watt meter.</span> Plug the kettle into a meter
            and run a boil &mdash; a measured figure, and the most reliable.
          </li>
        </ul>
        <p>
          Full-size home kettles are commonly 1,200&ndash;1,800&nbsp;W; compact and travel kettles
          are often 600&ndash;1,000&nbsp;W. Do not assume a figure from the kettle&apos;s size or
          type &mdash; size the calculator on the label wattage. A dual-voltage travel kettle can
          draw different watts on 120&nbsp;V than on 240&nbsp;V.
        </p>
      </div>
    </div>
  );
}
