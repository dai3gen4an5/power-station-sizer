export function WattHoursExplainer() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">What does Wh mean?</h2>
      <p className="mt-3 text-ink/75">
        Wh stands for watt-hour, the standard unit power stations use to describe how much energy their
        battery can store. One watt-hour is the energy used by a 1-watt device running for one hour. A
        power station rated at 1,000 Wh can theoretically run a 100-watt device for about 10 hours, before
        accounting for inverter losses.
      </p>
    </div>
  );
}
