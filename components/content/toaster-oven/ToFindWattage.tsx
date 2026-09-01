export function ToFindWattage() {
  return (
    <div>
      <h2 className="h2">How to find a toaster oven&apos;s input watts</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Rating label.</span> The plate on the base or
            back lists volts and watts, or amps (amps &times; volts = watts). This is the maximum
            electrical input, with all elements on.
          </li>
          <li>
            <span className="font-medium text-ink">Manual or manufacturer spec.</span> Look for
            &ldquo;rated power&rdquo;, &ldquo;power&rdquo;, or &ldquo;wattage&rdquo;.
          </li>
          <li>
            <span className="font-medium text-ink">Watt meter.</span> Plug the oven into a meter and
            run a bake &mdash; a measured figure, and the most reliable, since it also shows how the
            draw drops once the thermostat starts cycling.
          </li>
        </ul>
        <p>
          Compact two-slice toaster ovens are often 1,000&ndash;1,200&nbsp;W; mid-size and larger
          countertop ovens are commonly 1,500&ndash;1,800&nbsp;W. Do not assume a figure from the
          oven size or the number of racks &mdash; read the label and enter that number.
        </p>
      </div>
    </div>
  );
}
