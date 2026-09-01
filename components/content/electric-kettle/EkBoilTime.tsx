export function EkBoilTime() {
  return (
    <div>
      <h2 className="h2">Boil-time considerations</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>How long a kettle draws power for one boil depends on several things:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Wattage.</span> A 1,800&nbsp;W kettle boils a mug
            of water in a couple of minutes; a 1,000&nbsp;W travel kettle takes noticeably longer.
          </li>
          <li>
            <span className="font-medium text-ink">Water volume.</span> A full kettle takes several
            times longer than a single cup.
          </li>
          <li>
            <span className="font-medium text-ink">Starting temperature.</span> Cold tap water in
            winter takes longer than lukewarm water.
          </li>
          <li>
            <span className="font-medium text-ink">Elevation and kettle condition.</span> Water
            boils at a lower temperature at altitude; scale build-up slows heat transfer.
          </li>
        </ul>
        <p>
          Because of all that, this calculator does not estimate boil time from a water volume or a
          physics model. Enter the minutes you expect the kettle to actually be drawing power &mdash;
          time a real boil with your kettle and typical fill if you can, and round up.
        </p>
      </div>
    </div>
  );
}
