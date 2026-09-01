export function IcLowSettingsNotProportional() {
  return (
    <div>
      <h2 className="h2">Why a lower power setting is not automatically proportional</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          It is tempting to assume that a &ldquo;50%&rdquo; or &ldquo;power level 5&rdquo; setting
          uses half the electricity. It often does not, and this calculator will not make that
          assumption for you.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            The number on the dial is usually a heat level, not a measured wattage. The relationship
            between the two is set by the manufacturer and is rarely linear.
          </li>
          <li>
            When a unit reaches a lower level by cycling the coil on and off, the average power is
            lower but the instantaneous draw &mdash; the figure your inverter has to sustain &mdash;
            is still high.
          </li>
          <li>
            Reaching a temperature setpoint pulls near-maximum power first, so the first few minutes
            of any cook are close to full wattage regardless of the setting.
          </li>
        </ul>
        <p>
          The safe approach is to enter the{" "}
          <span className="font-medium text-ink">actual electrical input watts at the setting you
          plan to use</span> &mdash; measured with a watt meter if you can &mdash; and otherwise the
          manufacturer&apos;s published maximum input watts as a conservative planning value. The
          calculator does not derive watts from a power level, a temperature, the cookware size, or
          the pan material.
        </p>
      </div>
    </div>
  );
}
