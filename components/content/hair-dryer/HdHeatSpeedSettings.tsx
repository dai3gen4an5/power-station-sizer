export function HdHeatSpeedSettings() {
  return (
    <div>
      <h2 className="h2">Heat and speed setting considerations</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Most of a hair dryer&apos;s draw is the heating element, so the heat setting matters more
          than the fan speed. A dryer on low or medium heat can pull noticeably less than its
          maximum, and a cool-shot button runs the motor only, at a fraction of the wattage.
        </p>
        <p>
          This calculator does not model those settings for you. It does not apply a &ldquo;low =
          60%&rdquo; rule or assume a cool-shot figure &mdash; those vary by dryer. Instead:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Enter the input watts for the setting you actually use. A watt meter gives a measured
            figure per setting.
          </li>
          <li>
            If the label only lists a single maximum and you cannot measure it, size on that
            maximum as a conservative planning estimate &mdash; the real draw on a lower setting
            will be the same or lower.
          </li>
        </ul>
      </div>
    </div>
  );
}
