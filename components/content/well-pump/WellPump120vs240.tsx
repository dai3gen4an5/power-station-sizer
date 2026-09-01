export function WellPump120vs240() {
  return (
    <div>
      <h2 className="h2">120V vs 240V well pumps</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Residential well pumps come in both 120-volt and 240-volt versions. Shallow-well jet pumps
          and smaller pumps are often 120V; many deeper-well submersible pumps, and most higher
          horsepower pumps, are 240V. Check the rating label, the pressure switch, or the manual to
          find which one you have &mdash; it is not something you can assume from the horsepower.
        </p>
        <p>
          This matters more than it does for a sump pump, because it is a hard limit:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Many portable power stations provide <span className="font-medium text-ink">120V AC only</span>.
          </li>
          <li>
            A <span className="font-medium text-ink">240V well pump cannot be powered directly</span>{" "}
            by a 120V-only power station, no matter how large its battery or how high its 120V output
            rating.
          </li>
          <li>
            Running a 240V pump from a portable unit requires a power station that provides a true
            240V output (some larger models do, sometimes by combining two units) with an outlet or
            connection your pump can use.
          </li>
        </ul>
        <p>
          This page does not calculate transformers, split-phase wiring, or 120V-to-240V conversion.
          If your pump is 240V, confirm a candidate power station&apos;s 240V capability, outlet type,
          continuous watts, and surge rating before buying &mdash; watt-hours alone will not tell you
          whether it can run the pump.
        </p>
      </div>
    </div>
  );
}
