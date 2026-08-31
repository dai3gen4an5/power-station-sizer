export function Ac120vs240() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">120V vs 240V</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Air conditioners come in both 120-volt and 240-volt versions. Small portable and window
          units are usually 120V and plug into a standard household outlet. Larger window and
          through-the-wall units, and most mini-splits, are 240V. Check the nameplate or the manual
          to see which one you have &mdash; do not assume it from the BTU rating.
        </p>
        <p>This is a hard limit, not a margin:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Many portable power stations provide{" "}
            <span className="font-medium text-ink">120V AC only</span>.
          </li>
          <li>
            A <span className="font-medium text-ink">240V air conditioner cannot run directly</span>{" "}
            from a 120V-only power station, no matter how large its battery or how high its 120V
            output rating.
          </li>
          <li>
            Running a 240V unit from a portable power station requires a model that provides a true
            240V output (some larger units do, sometimes by combining two units) with an outlet or
            connection your air conditioner can use.
          </li>
        </ul>
        <p>
          This page does not calculate transformers, split-phase wiring, or 120V-to-240V conversion.
          If your air conditioner is 240V, confirm a candidate power station&apos;s 240V capability,
          outlet type, continuous watts, and surge rating before buying &mdash; enough watt-hours
          does not guarantee electrical compatibility.
        </p>
      </div>
    </div>
  );
}
