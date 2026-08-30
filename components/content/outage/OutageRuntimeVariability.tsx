export function OutageRuntimeVariability() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Why your real runtime will differ from the estimate
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Every figure this calculator produces is an estimate, not a guarantee. The result assumes
          each device draws a steady, average wattage for the hours you enter, and that the battery
          delivers close to its rated capacity. Real outages rarely match that exactly.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Temperature.</span> Cold reduces how much energy a
            battery can deliver, and a warm room makes a refrigerator&apos;s compressor run more
            often, raising its real consumption.
          </li>
          <li>
            <span className="font-medium text-ink">Battery age and health.</span> Cells lose capacity
            over years and cycles, so an older unit stores less than its label states.
          </li>
          <li>
            <span className="font-medium text-ink">Actual power draw.</span> Nameplate wattage is a
            starting point. Measuring a device with a plug-in watt meter gives a far better number
            than a generic example.
          </li>
          <li>
            <span className="font-medium text-ink">Inverter and standby losses.</span> Conversion to
            AC loses energy, and the power station&apos;s own electronics draw a few watts even with
            nothing plugged in.
          </li>
        </ul>
        <p>
          Treat the recommended capacity as a floor to shop above, keep some extra margin, and test
          your setup before you have to depend on it.
        </p>
      </div>
    </div>
  );
}
