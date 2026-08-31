export function MwFindInputWattage() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        How to find your microwave&apos;s input wattage
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The front panel and the marketing usually show the cooking power. The electrical input
          figure is on the appliance itself and in the paperwork:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Rear or side rating label.</span> The compliance
            plate near the power cord lists voltage, frequency, and a wattage or amperage. A line
            such as &ldquo;120V~ 60Hz 1500W&rdquo; or &ldquo;12.5A&rdquo; is the input; amps &times;
            volts gives watts.
          </li>
          <li>
            <span className="font-medium text-ink">Owner&apos;s manual.</span> The specifications or
            electrical section separates &ldquo;power input&rdquo; / &ldquo;power consumption&rdquo;
            from &ldquo;output&rdquo; / &ldquo;cooking power&rdquo;.
          </li>
          <li>
            <span className="font-medium text-ink">Manufacturer spec sheet.</span> The product page
            or downloadable data sheet lists both figures; use the input one.
          </li>
          <li>
            <span className="font-medium text-ink">Plug-in watt meter.</span> Run the microwave on
            high with a cup of water and read the watts. This is a measured input figure and the most
            reliable of all.
          </li>
        </ul>
        <p>
          If you only have the cooking rating, do not scale it up by a guess. Measure it or find the
          real input number, then enter that in the calculator.
        </p>
      </div>
    </div>
  );
}
