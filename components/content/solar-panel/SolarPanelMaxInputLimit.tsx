export function SolarPanelMaxInputLimit() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Check your power station&apos;s maximum solar input
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A required panel wattage is only useful if your power station can actually accept it. Every
          unit&apos;s built-in charge controller has three separate limits:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Maximum solar input watts.</span> Connect more panel
            wattage than this and the unit caps the intake — the surplus does not charge it faster.
          </li>
          <li>
            <span className="font-medium text-ink">Voltage window.</span> The controller needs panel
            voltage above a minimum to start, and it has a maximum voltage that must never be exceeded.
            Wiring panels in series raises voltage quickly and can overshoot that ceiling.
          </li>
          <li>
            <span className="font-medium text-ink">Maximum current.</span> Wiring panels in parallel
            raises current instead, which has its own limit.
          </li>
        </ul>
        <p>
          If the calculator&apos;s required wattage is higher than your unit&apos;s rated input, a
          bigger panel won&apos;t help — you&apos;ll need to allow more time, accept a slower or
          partial charge, add a separate charging method the manufacturer supports, or look at a
          higher-input model. Find the maximum input watts, voltage range, current limit, and connector
          type in your power station&apos;s manual and check the panel&apos;s open-circuit voltage and
          short-circuit current against them. Exceeding the voltage limit can damage the unit or trip
          its protection. Don&apos;t improvise wiring that the manufacturers don&apos;t document.
        </p>
      </div>
    </div>
  );
}
