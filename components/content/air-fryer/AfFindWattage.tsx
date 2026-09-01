export function AfFindWattage() {
  return (
    <div>
      <h2 className="h2">How to find your air fryer&apos;s input watts</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Rating label.</span> The plate on the base or
            back lists volts and watts or amps (amps &times; volts = watts). This is the electrical
            input.
          </li>
          <li>
            <span className="font-medium text-ink">Manual or manufacturer spec.</span> Look for
            &ldquo;rated power&rdquo;, &ldquo;power&rdquo;, or &ldquo;wattage&rdquo;.
          </li>
          <li>
            <span className="font-medium text-ink">Watt meter.</span> Plug the air fryer into a
            meter and run a cook &mdash; a measured figure, and the most reliable.
          </li>
        </ul>
        <p>
          Compact air fryers are often 1,000&ndash;1,300&nbsp;W; mid-size and large models are
          commonly 1,500&ndash;1,800&nbsp;W. Do not assume a figure from the basket size or the
          brand &mdash; read the label and enter that number.
        </p>
      </div>
    </div>
  );
}
