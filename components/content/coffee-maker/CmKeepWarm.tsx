export function CmKeepWarm() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Keep-warm mode and battery use
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Brewing itself is quick. A warming plate left on for an hour or two after the pot is made
          can use more energy than the brew did, because it keeps drawing power &mdash; often a few
          hundred watts &mdash; the whole time.
        </p>
        <p>
          This calculator does not add keep-warm time automatically. If you leave the plate on,
          either:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            add the keep-warm minutes to the brew / use time (a rough approach that treats the plate
            as drawing the full input wattage), or
          </li>
          <li>
            run the calculator twice &mdash; once at the brew wattage for the brew minutes, once at
            the warming-plate wattage from the label for the keep-warm minutes &mdash; and add the
            two energy figures.
          </li>
        </ul>
        <p>
          The simplest way to save battery is to brew into an insulated carafe and switch the
          machine off.
        </p>
      </div>
    </div>
  );
}
