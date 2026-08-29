export function SolarMaxInputLimit() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Your power station&apos;s maximum solar input
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Every power station has a ceiling on how much solar power it will accept, and it&apos;s set by
          three separate limits in the built-in charge controller:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Maximum solar input watts.</span> Connect more panel
            wattage than this and the unit simply caps the intake — the surplus does not make it charge
            faster.
          </li>
          <li>
            <span className="font-medium text-ink">Voltage window.</span> The controller needs the panel
            voltage above a minimum to start charging, and it has a maximum voltage that must never be
            exceeded. Wiring panels in series raises voltage quickly and can overshoot that ceiling.
          </li>
          <li>
            <span className="font-medium text-ink">Maximum current.</span> Wiring panels in parallel
            raises current instead, which has its own limit.
          </li>
        </ul>
        <p>
          Before buying or combining panels, find these three numbers and the connector type in your
          power station&apos;s manual, and check the panel&apos;s open-circuit voltage and short-circuit
          current against them. Exceeding the voltage limit in particular can damage the unit or trip its
          protection. If a combination isn&apos;t covered by the manufacturers&apos; own guidance,
          don&apos;t improvise the wiring — use a setup they explicitly support.
        </p>
      </div>
    </div>
  );
}
