export function ScFindWattage() {
  return (
    <div>
      <h2 className="h2">How to find a slow cooker&apos;s input watts</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Rating label.</span> The plate on the base lists
            volts and watts, or amps (amps &times; volts = watts). Some labels give a single figure;
            others list Low and High separately.
          </li>
          <li>
            <span className="font-medium text-ink">Manual or manufacturer spec.</span> Look for
            &ldquo;rated power&rdquo;, &ldquo;wattage&rdquo;, or a table of watts per setting.
          </li>
          <li>
            <span className="font-medium text-ink">Watt meter.</span> Plug the cooker in and read the
            wattage while the element is actively heating &mdash; that active draw is what you enter,
            and what the inverter has to supply. A meter also shows the lower long-run average once
            cycling starts, which is useful for a separate energy estimate but is not the figure for
            this calculator.
          </li>
        </ul>
        <p>
          Small 1.5&ndash;3&nbsp;qt cookers are often 100&ndash;150&nbsp;W; 4&ndash;6&nbsp;qt models
          are commonly 200&ndash;300&nbsp;W; large 7&ndash;8&nbsp;qt cookers can reach 320&ndash;400
          &nbsp;W on High. Do not assume a figure from the quart size &mdash; read the label and
          enter that number, for the setting you plan to use.
        </p>
      </div>
    </div>
  );
}
