export function CmDripVsSingleServeVsEspresso() {
  return (
    <div>
      <h2 className="h2">
        Drip, single-serve, and espresso considerations
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Drip / carafe.</span> A resistive heating element
            heats water on the way through, then a warming plate holds the carafe. Input watts and
            brew time are straightforward to read off the label; keep-warm adds minutes at a lower
            draw.
          </li>
          <li>
            <span className="font-medium text-ink">Single-serve / pod.</span> Heats a small volume
            per cup, so each brew is short. Standby heating between cups can add draw &mdash; count
            the minutes it is actually powered.
          </li>
          <li>
            <span className="font-medium text-ink">Espresso.</span> A boiler or thermoblock plus a
            pump makes the load more variable than a drip machine. This calculator can still be used:
            enter the machine&apos;s actual electrical input watts and a realistic operating time. It
            does not model pump surges or boiler cycling, so check any startup or peak figure the
            manufacturer publishes against the power station.
          </li>
        </ul>
        <p>
          Whatever the type, the figure that matters is the machine&apos;s own input wattage, not a
          rule of thumb for the category.
        </p>
      </div>
    </div>
  );
}
