export function AcCapacityVsOutputNotice() {
  return (
    <section className="container-prose">
      <div className="card card-pad">
        <span className="text-xs font-medium uppercase tracking-wide text-ink/50">
          Before you rely on this number
        </span>
        <p className="mt-2 text-sm text-ink/75">
          A power station can have enough battery capacity but still fail to run an air conditioner.
          Battery capacity (watt-hours) sets how long a unit lasts; continuous and surge output
          (watts) and the AC voltage decide whether it can run the unit at all. This calculator sizes
          the watt-hours and reports the watts you need from the numbers you enter &mdash; it does
          not convert a BTU rating into watts, it does not estimate a surge from the running figure,
          and it does not check 120V versus 240V compatibility. Use the running and startup watts
          from the unit&apos;s nameplate or manual, and confirm its voltage separately.
        </p>
      </div>
    </section>
  );
}
