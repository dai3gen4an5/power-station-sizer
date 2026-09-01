import Link from "next/link";

export function EhCampingRvUse() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Electric heaters for camping and RVs
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Camping.</span> A 1,500&nbsp;W ceramic heater will
            flatten a portable power station in well under an hour, and needs an inverter that can
            supply 1,500&nbsp;W continuously. A low-wattage personal heater used in short bursts is
            more realistic. The{" "}
            <Link
              href="/camping-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              Camping Power Station Calculator
            </Link>{" "}
            sizes the rest of your setup.
          </li>
          <li>
            <span className="font-medium text-ink">RV.</span> Check whether the rig&apos;s onboard
            inverter is rated for the heater&apos;s watts and feeds the outlet you would use. The{" "}
            <Link
              href="/rv-power-station-calculator"
              className="font-medium text-brand hover:underline"
            >
              RV Power Station Calculator
            </Link>{" "}
            covers 12V and AC loads together. Propane or a diesel heater is far more energy-dense for
            sustained warmth off-grid.
          </li>
        </ul>
        <p>
          Solar rarely keeps pace with a heater in real time &mdash; it is one of the heaviest loads
          there is. The{" "}
          <Link
            href="/solar-charge-time-calculator"
            className="font-medium text-brand hover:underline"
          >
            Solar Charge Time Calculator
          </Link>{" "}
          shows how long a panel takes to refill the battery between uses.
        </p>
      </div>
    </div>
  );
}
