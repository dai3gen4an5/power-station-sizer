export function HdCapacityVsOutputNotice() {
  return (
    <section className="container-prose">
      <div className="card card-pad">
        <span className="eyebrow">Before you rely on this number</span>
        <p className="mt-2 text-sm text-ink/75">
          A hair dryer runs for a few minutes, so the watt-hours it uses are small &mdash; a
          ten-minute dry is a couple of hundred watt-hours. But its heating element draws a high,
          steady wattage the whole time, and the inverter has to supply that continuously. Battery
          capacity (watt-hours) and continuous AC output (watts) are separate specifications, and a
          hair dryer is limited by the second. This calculator sizes the watt-hours from the watts
          and minutes you enter and reports the continuous watts you need. It does not guess a
          lower-heat-setting reduction, add a motor surge, or check voltage and plug type.
        </p>
      </div>
    </section>
  );
}
