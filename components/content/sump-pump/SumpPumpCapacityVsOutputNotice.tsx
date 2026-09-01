export function SumpPumpCapacityVsOutputNotice() {
  return (
    <section className="container-prose">
      <div className="card card-pad">
        <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
          Before you rely on this number
        </span>
        <p className="mt-2 text-sm text-ink/75">
          A power station can have enough battery capacity but still fail to start the pump if its
          inverter cannot supply the required startup power. Battery capacity (watt-hours) tells you
          how long a unit lasts; continuous and surge output (watts) tell you whether it can run the
          pump at all. This calculator sizes the first and reports the second two from the numbers you
          enter &mdash; it does not estimate a pump&apos;s wattage or surge from its horsepower,
          because that varies too much by motor and model. Use the running and starting watts printed
          on your pump or its manual.
        </p>
      </div>
    </section>
  );
}
