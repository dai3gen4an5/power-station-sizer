export function ScLowHighSettings() {
  return (
    <div>
      <h2 className="h2">Low vs High settings</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Slow cookers have Low, High, and usually Warm settings, but the relationship between the
          setting and the power draw is not fixed and differs by model:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Some models run the same heater on every setting and just change how often the thermostat
            cycles it &mdash; so the peak watts are identical and the average differs.
          </li>
          <li>
            Others switch between a lower-wattage and a higher-wattage element for Low and High.
          </li>
          <li>
            Low and High mostly change how fast the food reaches a simmer; both hold roughly the same
            temperature once there, so a longer cook on Low is not always less total energy than a
            shorter cook on High.
          </li>
        </ul>
        <p>
          Because of that, the calculator does not convert a setting into a wattage &mdash; there is
          no &ldquo;Low = 50%&rdquo; or &ldquo;Warm = 25%&rdquo;. Enter the{" "}
          <span className="font-medium text-ink">active input watts at the setting you plan to
          use</span> &mdash; the draw while the element is heating, read from a watt meter if you can,
          not a long-run cycling average &mdash; and otherwise the nameplate maximum as a
          conservative planning value.
        </p>
      </div>
    </div>
  );
}
