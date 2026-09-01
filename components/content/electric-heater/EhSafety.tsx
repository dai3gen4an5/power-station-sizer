export function EhSafety() {
  return (
    <div>
      <h2 className="h2">Safety notes</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          An electric heater is a high-power load and a heat source. A few practical points:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Do not exceed the power station&apos;s rated continuous AC output. An overloaded inverter
            shuts down, or runs hot.
          </li>
          <li>Follow the heater manufacturer&apos;s stated power supply and voltage requirements.</li>
          <li>
            Use the heater&apos;s own cord into a properly rated outlet. Avoid damaged, thin, or
            undersized extension cords and unapproved plug adapters.
          </li>
          <li>
            Keep the clearance the heater manufacturer specifies around and above the unit, away from
            bedding, curtains, and furniture.
          </li>
          <li>
            Follow the manufacturer&apos;s instructions on leaving a heater unattended or running it
            while asleep.
          </li>
          <li>
            Respect the power station&apos;s own ventilation and operating-temperature limits; a
            sustained heavy draw makes it work hard.
          </li>
        </ul>
        <p>
          None of this makes a portable power station a safe substitute for whole-home emergency
          heating &mdash; it is a short bridge for one room.
        </p>
      </div>
    </div>
  );
}
