export function HdFindWattage() {
  return (
    <div>
      <h2 className="h2">How to find your hair dryer&apos;s input watts</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Rating label.</span> The label on the handle or
            near the plug lists volts and watts or amps (amps &times; volts = watts). Full-size
            dryers usually show a single maximum figure such as 1,875&nbsp;W.
          </li>
          <li>
            <span className="font-medium text-ink">Manual or manufacturer spec.</span> Look for
            &ldquo;rated power&rdquo;, &ldquo;wattage&rdquo;, or a table of settings if the dryer
            lists per-setting figures.
          </li>
          <li>
            <span className="font-medium text-ink">Watt meter.</span> Plug the dryer into a meter
            and read the watts on each heat and speed setting &mdash; a measured figure, and the most
            reliable.
          </li>
        </ul>
        <p>
          Full-size dryers are commonly 1,500&ndash;1,875&nbsp;W at maximum; travel dryers are often
          800&ndash;1,200&nbsp;W. If the label only shows a maximum, you can size on that as a
          safe planning estimate, but it is not a measured value for a lower setting.
        </p>
      </div>
    </div>
  );
}
