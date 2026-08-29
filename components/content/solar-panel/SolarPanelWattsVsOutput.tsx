export function SolarPanelWattsVsOutput() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Panel watts vs. real-world output
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The wattage printed on a panel is its output under Standard Test Conditions: a cool 25°C
          cell temperature, bright 1000 W/m² light, and the sun striking it head-on. Outdoors, several
          things pull the real figure below that number:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Sun angle.</span> Output peaks when light hits the
            panel perpendicularly. A flat or poorly aimed panel gives up a large share of its
            potential, especially early and late in the day.
          </li>
          <li>
            <span className="font-medium text-ink">Panel temperature.</span> Cells lose efficiency as
            they warm, so a hot panel in still air produces less than its rating even in strong sun.
          </li>
          <li>
            <span className="font-medium text-ink">Haze, dust, and glass losses.</span> Thin cloud,
            atmospheric haze, and a dirty surface each trim output.
          </li>
          <li>
            <span className="font-medium text-ink">Wiring and controller losses.</span> Long or thin
            cables, connectors, and the MPPT or PWM controller each take a small cut.
          </li>
        </ul>
        <p>
          A common planning approach is to expect 60 to 80% of a panel&apos;s rating under good
          conditions, and less when it&apos;s cloudy or the panel is fixed flat. That factor is what the
          &quot;real-world efficiency&quot; field represents, and it&apos;s why a bare formula result
          should be rounded up before you buy.
        </p>
      </div>
    </div>
  );
}
