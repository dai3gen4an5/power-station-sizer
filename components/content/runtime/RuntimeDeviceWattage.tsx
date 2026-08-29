export function RuntimeDeviceWattage() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        How to find your device&apos;s real power draw
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Runtime is only as accurate as the wattage you feed it, and the number printed on a device is
          often its <em>maximum</em> rather than what it actually uses. A few ways to get closer to the
          real figure:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Plug-in watt meter.</span> The most reliable option
            for AC devices — it shows live watts and accumulates watt-hours over time, which averages out
            any cycling.
          </li>
          <li>
            <span className="font-medium text-ink">The label or manual.</span> Look for a watts rating,
            or estimate it from volts × amps. Treat this as an upper bound for motor and heating
            appliances.
          </li>
          <li>
            <span className="font-medium text-ink">Energy-guide figures.</span> If a device lists an
            annual or daily kWh consumption, dividing that back down to an average wattage is usually
            more accurate than a nameplate number.
          </li>
          <li>
            <span className="font-medium text-ink">Account for duty cycle.</span> Refrigerators,
            freezers, and thermostatically controlled devices only run part of the time. Enter their
            average draw, or their running watts for the fraction of the hour they&apos;re actually on.
          </li>
        </ul>
        <p>
          If your device can run on DC directly — many fridges, fans, and CPAP machines can — powering it
          from a 12V outlet skips the inverter and its conversion loss, which stretches runtime compared
          with the same device on an AC outlet.
        </p>
      </div>
    </div>
  );
}
