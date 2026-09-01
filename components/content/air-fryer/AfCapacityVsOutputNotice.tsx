export function AfCapacityVsOutputNotice() {
  return (
    <section className="container-prose">
      <div className="card card-pad">
        <span className="eyebrow">Before you rely on this number</span>
        <p className="mt-2 text-sm text-ink/75">
          An air fryer draws a high, steady wattage and runs longer than a microwave &mdash; often
          15 to 40 minutes &mdash; so both battery capacity and continuous AC output matter. Capacity
          (watt-hours) sets how many cooks you get; the inverter&apos;s continuous output (watts)
          decides whether it runs at all. This calculator sizes the watt-hours from the watts and
          minutes you enter and reports the continuous watts you need. It does not guess a preheat
          time, apply a thermostat duty cycle, or check voltage and plug type.
        </p>
      </div>
    </section>
  );
}
