import Link from "next/link";

export function AcTypes() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Portable AC vs window AC vs mini-split
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The type of air conditioner affects both its electrical draw and whether a portable power
          station is a realistic option:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Portable AC</span> (the floor unit with a hose to
            a window) is the most common choice for backup and camping use. Smaller models are 120V
            and draw a few hundred watts to around a kilowatt while cooling. They are less efficient
            than window units for the same BTU.
          </li>
          <li>
            <span className="font-medium text-ink">Window AC</span> units are usually 120V for
            smaller sizes and 240V for larger ones. A small 5,000&ndash;6,000&nbsp;BTU window unit is
            one of the lowest-wattage options; mid-size and large window units climb quickly and may
            be 240V.
          </li>
          <li>
            <span className="font-medium text-ink">Mini-split</span> (ductless) systems are typically
            hard-wired, often 240V, and are inverter-driven with a gentle startup. Backing one up
            from a portable power station usually needs a unit with a true 240V output and an
            electrician-installed connection, so confirm this carefully.
          </li>
        </ul>
        <p>
          For running a portable AC while camping or in an RV, the{" "}
          <Link
            href="/camping-power-station-calculator"
            className="font-medium text-brand hover:underline"
          >
            Camping
          </Link>{" "}
          and{" "}
          <Link
            href="/rv-power-station-calculator"
            className="font-medium text-brand hover:underline"
          >
            RV
          </Link>{" "}
          power station calculators cover the rest of your gear alongside it.
        </p>
      </div>
    </div>
  );
}
