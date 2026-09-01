export function RcFindWattage() {
  return (
    <div>
      <h2 className="h2">How to find a rice cooker&apos;s input watts</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Rating label.</span> The plate on the base lists
            volts and watts, or amps (amps &times; volts = watts). This is the electrical input
            while the element is on.
          </li>
          <li>
            <span className="font-medium text-ink">Manual or manufacturer spec.</span> Look for
            &ldquo;rated power&rdquo;, &ldquo;power consumption&rdquo;, or &ldquo;wattage&rdquo;. Some
            makers also publish a separate keep-warm figure.
          </li>
          <li>
            <span className="font-medium text-ink">Watt meter.</span> Plug the cooker into a meter
            and run a real cook &mdash; a measured figure, and the most reliable, since it also shows
            how the draw drops during the soak and keep-warm phases.
          </li>
        </ul>
        <p>
          Small travel and single-cup rice cookers are often 200&ndash;400&nbsp;W; typical family
          cookers are 500&ndash;800&nbsp;W; large, IH, and pressure models can be 1,000&nbsp;W or
          more. Do not assume a figure from the cup or litre capacity &mdash; read the label and
          enter that number.
        </p>
      </div>
    </div>
  );
}
