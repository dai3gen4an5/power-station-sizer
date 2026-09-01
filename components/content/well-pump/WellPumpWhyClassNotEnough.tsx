export function WellPumpWhyClassNotEnough() {
  return (
    <div>
      <h2 className="h2">
        Why 3000Wh+ may still not guarantee compatibility
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A capacity class is an energy answer. It tells you a power station probably stores enough
          watt-hours for your outage. It does not tell you the unit can start and run the pump. Three
          things can still stop it:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Continuous output.</span> If the inverter&apos;s
            rated continuous watts are below the pump&apos;s running watts, it will overload and shut
            down, even with a full 3,000&nbsp;Wh battery.
          </li>
          <li>
            <span className="font-medium text-ink">Surge output.</span> If the surge / peak rating is
            below the pump&apos;s starting watts, the pump will not start at all.
          </li>
          <li>
            <span className="font-medium text-ink">Voltage.</span> A 240V pump needs a 240V output.
            A 3,000&nbsp;Wh unit with a 120V-only output cannot run it, and no amount of extra
            capacity changes that.
          </li>
        </ul>
        <p>
          Treat the recommended capacity class as the first filter, then read the unit&apos;s
          continuous output, surge rating, AC voltage, and outlet type against your pump&apos;s
          numbers. Only all four together confirm compatibility.
        </p>
      </div>
    </div>
  );
}
