import Link from "next/link";

export function EbActiveVsAverage() {
  return (
    <div>
      <h2 className="h2">Active watts vs average power</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The calculator uses the watts you enter for two things at once: the battery-capacity
          estimate and the required AC output. That is why the figure to enter is the{" "}
          <span className="font-medium text-ink">active or rated heating draw</span> &mdash; the
          power while the element is on &mdash; not a long-run average.
        </p>
        <p>
          A blanket with a 75&nbsp;W active draw might average only 45&nbsp;W over a night once the
          thermostat is cycling. If you entered 45&nbsp;W, the energy estimate would look more
          realistic, but the required AC output would drop to 45&nbsp;W too &mdash; and the inverter
          still has to supply the full 75&nbsp;W whenever the element switches back on.
          <span className="font-medium text-ink"> Do not put a cycling average in the watts
          field.</span>
        </p>
        <p>
          If you have measured your blanket &mdash; a total watt-hour reading over a night, or an
          average wattage &mdash; you can use that for a tighter capacity estimate on its own:
          multiply the measured average by the hours, or take the measured watt-hours directly. Then{" "}
          <span className="font-medium text-ink">still check the power station&apos;s AC output
          against the blanket&apos;s full active or nameplate wattage separately</span>. For a
          capacity estimate built from several figures, add them as rows in the{" "}
          <Link href="/" className="font-medium text-brand hover:underline">
            main Power Station Size Calculator
          </Link>{" "}
          &mdash; and check the output against the full wattage yourself. The{" "}
          <Link
            href="/power-station-runtime-calculator"
            className="font-medium text-brand hover:underline"
          >
            Power Station Runtime Calculator
          </Link>{" "}
          shows how a steady low draw pulls a battery down over a night.
        </p>
      </div>
    </div>
  );
}
