export function SolarRatedVsRealInput() {
  return (
    <div>
      <h2 className="h2">
        Rated watts vs. real-world solar input
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The number printed on a panel is its output under Standard Test Conditions — a cool 25°C cell
          temperature, bright 1000 W/m² light, and the sun hitting it straight on. Outdoors, several
          things pull the real figure below that:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Sun angle.</span> Output is highest when light hits
            the panel perpendicularly. A flat or poorly aimed panel loses a large share of its
            potential, especially in the morning and late afternoon.
          </li>
          <li>
            <span className="font-medium text-ink">Panel temperature.</span> Panels lose efficiency as
            they heat up, so a hot panel in still air can produce noticeably less than its rating even in
            full sun.
          </li>
          <li>
            <span className="font-medium text-ink">Haze, dust, and glass losses.</span> Thin cloud,
            atmospheric haze, and a dusty or dirty surface all trim output.
          </li>
          <li>
            <span className="font-medium text-ink">Wiring and controller losses.</span> Long or thin
            cables, connectors, and the charge controller itself each take a small cut, and a controller
            can only extract so much when panel voltage is low.
          </li>
        </ul>
        <p>
          A common planning approach is to assume you&apos;ll sustain roughly 60 to 80% of a panel&apos;s
          rating under good conditions, and less when it&apos;s cloudy or the panel is fixed flat. That
          derating factor is exactly what the &quot;real-world efficiency&quot; field in the calculator
          represents.
        </p>
      </div>
    </div>
  );
}
