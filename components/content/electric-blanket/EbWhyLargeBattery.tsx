export function EbWhyLargeBattery() {
  return (
    <div>
      <h2 className="h2">Why a low-watt blanket can still need a large battery</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          An electric blanket only draws 40 to 150&nbsp;W, so it is easy to assume a small power
          station will run one. The wattage is not the problem &mdash; the runtime is. A full night
          is 6 to 10 hours, and a small load held that long adds up to a meaningful number of
          watt-hours.
        </p>
        <p>
          At 75&nbsp;W for 8 hours that is 600&nbsp;Wh of raw energy, and after inverter losses and a
          reserve the recommended battery capacity is closer to 900&nbsp;Wh &mdash; enough that a
          500&nbsp;Wh unit falls short for a whole night. The AC-output requirement stays at
          75&nbsp;W the entire time, which any inverter clears.
        </p>
        <p>
          So for an electric blanket, <span className="font-medium text-ink">battery capacity and
          runtime are the binding constraint</span>, not the inverter rating. That is the opposite of
          a kettle or a heater, where a brief high draw makes AC output the limit.
        </p>
      </div>
    </div>
  );
}
