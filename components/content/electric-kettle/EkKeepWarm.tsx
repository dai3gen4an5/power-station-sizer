export function EkKeepWarm() {
  return (
    <div>
      <h2 className="h2">Keep-warm mode and battery use</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Boiling is quick. A kettle with a keep-warm setting holds the water hot for 20&ndash;60
          minutes by cycling the element on and off, and over that window it can use as much energy
          as the boil itself &mdash; sometimes more.
        </p>
        <p>
          This calculator does not add keep-warm time automatically or guess its duty cycle. If you
          use it, either:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            add the keep-warm minutes to the boil / use time (a rough approach that treats the
            element as drawing the full input wattage), or
          </li>
          <li>
            run the calculator twice &mdash; once at the boil wattage for the boil minutes, once at
            the keep-warm wattage from the manufacturer for the keep-warm minutes &mdash; and add the
            two energy figures.
          </li>
        </ul>
        <p>
          The simplest way to save battery is to boil once into an insulated flask and switch the
          kettle off.
        </p>
      </div>
    </div>
  );
}
