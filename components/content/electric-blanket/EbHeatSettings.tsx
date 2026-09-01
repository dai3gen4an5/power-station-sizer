export function EbHeatSettings() {
  return (
    <div>
      <h2 className="h2">Heat settings and thermostat cycling</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Electric blankets have Low, Medium, and High settings, and most have a thermostat in the
          controller that switches the heating wires on and off to hold a temperature. Neither
          behaviour is fixed enough to model:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            The relationship between the setting and the power draw is set by the manufacturer and is
            not a clean percentage &mdash; there is no reliable &ldquo;Low = 30%&rdquo; or
            &ldquo;High = 100%&rdquo;.
          </li>
          <li>
            Once the blanket is warm, the thermostat cycles the element, so the average power over a
            night is often below the active draw. How much below depends on the room temperature,
            the bedding, and the setting.
          </li>
        </ul>
        <p>
          So the calculator does not convert a setting into a wattage or apply a duty-cycle discount.
          Enter the <span className="font-medium text-ink">active input watts at the setting you
          plan to use</span> &mdash; the draw while the element is heating, from the label or a watt
          meter &mdash; and otherwise the nameplate maximum as a conservative planning value.
        </p>
      </div>
    </div>
  );
}
