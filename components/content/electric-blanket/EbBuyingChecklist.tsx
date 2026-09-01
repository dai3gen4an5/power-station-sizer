export function EbBuyingChecklist() {
  return (
    <div>
      <h2 className="h2">Safety and buying checklist</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>Check every item against your blanket and your situation before buying or using one:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Manufacturer explicitly permits it.</span> The
            blanket manual allows inverter, generator, or portable-power-station use. If it prohibits
            any of those, do not run the blanket from the power station&apos;s AC outlet.
          </li>
          <li>
            <span className="font-medium text-ink">Required waveform / AC source requirements</span>{" "}
            &mdash; if the manual specifies pure sine wave or any other AC source condition, the
            power station meets it. A pure sine wave output does not by itself make the blanket
            compatible.
          </li>
          <li>
            <span className="font-medium text-ink">Voltage and frequency</span> match the blanket
            &mdash; typically 120V / 60&nbsp;Hz for a North American mains model, or the correct DC
            output for a 12V or USB one.
          </li>
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
            <span className="font-medium text-ink">AC output (W)</span> at or above the blanket&apos;s
            active watts. Among the listed units this is usually not the limiting spec, but confirm
            it.
          </li>
          <li>
            <span className="font-medium text-ink">Outlet or adapter compatibility</span> for the
            blanket&apos;s plug or DC connector.
          </li>
          <li>
            <span className="font-medium text-ink">Controller and blanket instructions</span> read in
            full, and no damaged cord, connector, or controller in use.
          </li>
          <li>
            <span className="font-medium text-ink">Automatic shutoff behaviour</span> from the
            manual, kept as a safety feature.
          </li>
          <li>
            <span className="font-medium text-ink">Recharge time</span> from wall, vehicle, or solar,
            so the unit is ready for the next night.
          </li>
        </ul>
        <p className="panel-note">
          For an electric blanket, a power station in the right range is mostly a question of usable
          watt-hours for your run time. Confirm the unit&apos;s real usable capacity, and follow the
          blanket manufacturer&apos;s instructions &mdash; this page sizes energy, not safety, and
          does not establish that a given blanket may be run from an inverter.
        </p>
      </div>
    </div>
  );
}
