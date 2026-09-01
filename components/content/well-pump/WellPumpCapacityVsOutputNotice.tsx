export function WellPumpCapacityVsOutputNotice() {
  return (
    <section className="container-prose">
      <div className="card card-pad">
        <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
          Before you rely on this number
        </span>
        <p className="mt-2 text-sm text-ink/75">
          A power station can have enough battery capacity but still fail to run a well pump. Battery
          capacity (watt-hours) sets how long a unit lasts; continuous and surge output (watts) and
          the AC voltage decide whether it can run the pump at all. This calculator sizes the
          watt-hours and reports the watts you need from the numbers you enter &mdash; it does not
          estimate a pump&apos;s wattage from its horsepower, and it does not check 120V versus 240V
          compatibility. Use the running and starting watts printed on your pump or its manual, and
          confirm the pump&apos;s voltage separately.
        </p>
      </div>
    </section>
  );
}
