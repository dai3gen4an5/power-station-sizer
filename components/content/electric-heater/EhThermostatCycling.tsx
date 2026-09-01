export function EhThermostatCycling() {
  return (
    <div>
      <h2 className="h2">
        Does a thermostat reduce battery use?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          It can. A heater with a working thermostat runs at full wattage until the room reaches the
          setpoint, then cycles the element off and on to hold it. Over a long run the average draw
          can be well below the nameplate wattage, so real energy use may be lower than watts &times;
          time.
        </p>
        <p>
          How much lower is not predictable. It depends on the room size, how well it is insulated,
          the thermostat setpoint, the outdoor temperature, and drafts. A cold, leaky room on a
          freezing night may barely cycle at all. Because of that, this calculator uses{" "}
          <span className="font-medium text-ink">full watts for the full time you enter</span> as a
          safe baseline and does not apply a duty-cycle discount.
        </p>
        <p>
          To model cycling, shorten the &ldquo;use time&rdquo; to the equivalent hours you expect the
          element to actually be drawing power &mdash; for example, entering 1.5 hours instead of 3
          if you think it will run about half the time once the room is warm.
        </p>
      </div>
    </div>
  );
}
