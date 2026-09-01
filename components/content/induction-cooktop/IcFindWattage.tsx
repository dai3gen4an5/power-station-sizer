export function IcFindWattage() {
  return (
    <div>
      <h2 className="h2">How to find an induction cooktop&apos;s input watts</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Rating label.</span> The plate on the base or
            back lists volts and watts, or amps (amps &times; volts = watts). This is the maximum
            electrical input.
          </li>
          <li>
            <span className="font-medium text-ink">Manual or manufacturer spec.</span> Look for
            &ldquo;rated power&rdquo;, &ldquo;power&rdquo;, or &ldquo;max wattage&rdquo;, and any list
            of the wattage at each power level.
          </li>
          <li>
            <span className="font-medium text-ink">Watt meter.</span> Plug the cooktop into a meter
            and run it at the setting you actually use &mdash; a measured figure, and the most
            reliable.
          </li>
        </ul>
        <p>
          Single-burner portable induction cooktops are commonly rated 1,500&ndash;1,800&nbsp;W at
          maximum; some compact travel units top out around 1,200&nbsp;W, and double-burner or
          built-in units go well beyond 1,800&nbsp;W. If you cannot measure your setting, use the
          manufacturer&apos;s published maximum input watts as a safe planning value.
        </p>
      </div>
    </div>
  );
}
