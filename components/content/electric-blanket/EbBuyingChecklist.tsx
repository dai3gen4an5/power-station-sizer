export function EbBuyingChecklist() {
  return (
    <div>
      <h2 className="h2">Buying checklist</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Check every item against your blanket and your situation before buying:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Actual blanket active or rated watts</span> from
            the label, controller, or a watt meter &mdash; the heating draw, not a cycling average.
          </li>
          <li>
            <span className="font-medium text-ink">Required runtime</span> in hours, allowing for the
            controller&apos;s auto-shutoff timer.
          </li>
          <li>
            <span className="font-medium text-ink">Battery capacity (Wh)</span> at least the
            recommended figure from the calculator &mdash; the number that actually decides this.
          </li>
          <li>
            <span className="font-medium text-ink">Continuous AC output (W)</span> at or above the
            blanket&apos;s active watts. An easy bar for any power station.
          </li>
          <li>
            <span className="font-medium text-ink">Voltage</span> matches the blanket &mdash; 120V AC
            for a mains model, or the correct DC output for a 12V or USB one.
          </li>
          <li>
            <span className="font-medium text-ink">Outlet or adapter compatibility</span> for the
            blanket&apos;s plug or DC connector.
          </li>
          <li>
            <span className="font-medium text-ink">Heat setting</span> you plan to use, and its
            active wattage.
          </li>
          <li>
            <span className="font-medium text-ink">Automatic shutoff timer</span> behaviour from the
            manual.
          </li>
          <li>
            <span className="font-medium text-ink">Recharge time</span> from wall, vehicle, or solar,
            so the unit is ready for the next night.
          </li>
        </ul>
        <p className="panel-note">
          For an electric blanket, a power station in the right range is mostly a question of usable
          watt-hours for your run time. Confirm the unit&apos;s real usable capacity, and follow the
          blanket manufacturer&apos;s instructions &mdash; this page sizes energy, not safety.
        </p>
      </div>
    </div>
  );
}
