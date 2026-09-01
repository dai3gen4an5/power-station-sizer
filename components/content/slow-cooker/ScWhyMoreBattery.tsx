export function ScWhyMoreBattery() {
  return (
    <div>
      <h2 className="h2">Why a slow cooker needs more battery than its wattage suggests</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A slow cooker only draws 100 to 400&nbsp;W, so it is easy to assume a small power station
          will run one. The wattage is not the problem &mdash; the runtime is. A slow cook is 4 to 10
          hours, and a small load held for that long adds up to a large number of watt-hours.
        </p>
        <p>
          At 250&nbsp;W for 6 hours that is 1,500&nbsp;Wh of raw energy, and after inverter losses
          and a reserve the recommended battery capacity is over 2,000&nbsp;Wh &mdash; a large power
          station, driven entirely by the hours, not the watts. The continuous-output requirement
          stays at 250&nbsp;W the whole time, which almost any unit clears.
        </p>
        <p>
          So for a slow cooker, <span className="font-medium text-ink">battery capacity is the
          binding constraint</span>, not the inverter rating. That is the opposite of a kettle or a
          toaster oven, where a brief high draw makes continuous output the limit.
        </p>
      </div>
    </div>
  );
}
