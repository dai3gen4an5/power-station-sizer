export function IcPowerLevels() {
  return (
    <div>
      <h2 className="h2">Power levels and cycling</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Portable induction cooktops offer several power or temperature settings &mdash; often
          listed as steps like 600, 900, 1,200, 1,500 and 1,800&nbsp;W, or as target temperatures.
          How the cooktop reaches a lower setting varies by model:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Some genuinely modulate the coil and draw a lower steady wattage.
          </li>
          <li>
            Many cheaper units keep driving the coil near full power and simply switch it{" "}
            <span className="font-medium text-ink">on and off</span> to average out to the setting,
            so the peak draw stays high even though the average is lower.
          </li>
          <li>
            On a temperature setting, the cooktop pulls high power to reach the target, then cycles
            to hold it &mdash; the average depends on the pan, the food, and the room.
          </li>
        </ul>
        <p>
          Because the peak draw on a lower setting can still be the full nameplate wattage, size the{" "}
          <span className="font-medium text-ink">continuous AC output</span> against the input watts
          at the setting you will actually use, and if you are unsure, against the cooktop&apos;s
          maximum. For energy, this calculator uses{" "}
          <span className="font-medium text-ink">full entered watts for the full entered
          minutes</span> and does not model the on/off cycling.
        </p>
      </div>
    </div>
  );
}
