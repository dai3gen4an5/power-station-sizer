export function RcCapacityVsOutputNotice() {
  return (
    <section className="container-prose">
      <div className="card card-pad">
        <span className="eyebrow">Before you rely on this number</span>
        <p className="mt-2 text-sm text-ink/75">
          A rice cooker is a gentler load than most kitchen appliances, but it still needs both
          things: enough battery capacity (watt-hours) for the cook cycle, and enough continuous AC
          output (watts) for the heating element while it runs. This calculator sizes the cook cycle
          from the watts and minutes you enter and reports the continuous watts you need. It does not
          guess a cook time from the rice type, model a keep-warm duty cycle, convert an IH or
          pressure rating, or check voltage and plug type.
        </p>
      </div>
    </section>
  );
}
