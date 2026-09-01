export function CmFindWattage() {
  return (
    <div>
      <h2 className="h2">
        How to find your coffee maker&apos;s input watts
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Rating label.</span> The plate on the base lists
            volts and watts or amps (amps &times; volts = watts). This is the electrical input.
          </li>
          <li>
            <span className="font-medium text-ink">Manual or manufacturer spec.</span> Look for
            &ldquo;rated power&rdquo;, &ldquo;power consumption&rdquo;, or &ldquo;wattage&rdquo;.
          </li>
          <li>
            <span className="font-medium text-ink">Watt meter.</span> Plug the machine into a meter
            and run a brew &mdash; a measured figure, and the most reliable.
          </li>
        </ul>
        <p>
          Common drip and single-serve machines land somewhere around 600&ndash;1,500&nbsp;W, but do
          not assume a figure from the type. A small single-cup brewer can draw well under a
          kilowatt; a large carafe machine or one with a strong keep-warm plate can be higher.
          Espresso machines vary widely. Size the calculator on your machine&apos;s actual label
          wattage.
        </p>
      </div>
    </div>
  );
}
