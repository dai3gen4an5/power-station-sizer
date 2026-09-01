export function AcWhyClassNotEnough() {
  return (
    <div>
      <h2 className="h2">
        Why even 3000Wh+ may not guarantee compatibility
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A capacity class is an energy answer. It tells you a power station probably stores enough
          watt-hours for your run time. It does not tell you the unit can start and run the air
          conditioner. Three things can still stop it, even with a 3,000&nbsp;Wh or larger battery:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Continuous output.</span> If the inverter&apos;s
            rated continuous watts are below the air conditioner&apos;s running watts, it will
            overload and shut down.
          </li>
          <li>
            <span className="font-medium text-ink">Surge output.</span> If the surge / peak rating is
            below the compressor&apos;s starting watts, the compressor will not start at all.
          </li>
          <li>
            <span className="font-medium text-ink">Voltage.</span> A 240V air conditioner needs a
            240V output. A large-capacity unit with a 120V-only output cannot run it, and extra
            capacity changes nothing.
          </li>
        </ul>
        <p>
          Treat the recommended capacity class as the first filter, then read the power
          station&apos;s continuous output, surge rating, AC voltage, and outlet type against your
          air conditioner&apos;s numbers. Only all four together confirm compatibility.
        </p>
      </div>
    </div>
  );
}
