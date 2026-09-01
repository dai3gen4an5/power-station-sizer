export function RcCyclingControl() {
  return (
    <div>
      <h2 className="h2">Thermostat, fuzzy logic, and cycling</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          During both the cook and keep-warm phases, a rice cooker&apos;s element usually switches on
          and off rather than running flat out. The way it does that differs by design:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Simple thermostat.</span> A mechanical switch trips
            when the pot passes 100&nbsp;&deg;C, then cycles for keep-warm.
          </li>
          <li>
            <span className="font-medium text-ink">Fuzzy logic.</span> A microcontroller adjusts
            heating through soak, boil, steam, and rest stages, so the average draw changes through
            the cycle.
          </li>
          <li>
            <span className="font-medium text-ink">Induction (IH) and pressure.</span> Different
            heating and control again, usually at a higher peak wattage.
          </li>
        </ul>
        <p>
          Because the pattern is model-specific, this calculator does not model it. It uses{" "}
          <span className="font-medium text-ink">full entered watts for the full entered
          minutes</span> as a planning estimate. If you have measured your cooker and know it
          averages less over the cycle, shorten the minutes to the equivalent time at full power.
        </p>
      </div>
    </div>
  );
}
