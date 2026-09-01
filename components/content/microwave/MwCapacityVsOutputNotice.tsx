export function MwCapacityVsOutputNotice() {
  return (
    <section className="container-prose">
      <div className="card card-pad">
        <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
          Before you rely on this number
        </span>
        <p className="mt-2 text-sm text-ink/75">
          A power station can store plenty of watt-hours and still fail to run a microwave. Battery
          capacity (watt-hours) sets how many sessions you get; the inverter&apos;s continuous AC
          output (watts) decides whether the microwave runs at all. This calculator sizes the
          watt-hours and reports the continuous watts you need from the numbers you enter &mdash; it
          does not convert a cooking-power rating into input watts, it does not estimate a surge from
          the input figure, and it does not check voltage or plug type. Use the electrical input
          watts from the unit&apos;s rear label or manual, and confirm voltage separately.
        </p>
      </div>
    </section>
  );
}
