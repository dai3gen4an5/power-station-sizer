export function EhWhyBatteriesFast() {
  return (
    <div>
      <h2 className="h2">
        Why space heaters use batteries quickly
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A resistive electric heater turns almost all of the power it draws into heat, and it draws
          that power continuously while it is on. There is no efficiency trick and no idle state: a
          1,500&nbsp;W heater pulls about 1,500&nbsp;Wh from the battery every hour it runs.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>1,500&nbsp;W for 1 hour &asymp; 1,500&nbsp;Wh, before inverter and reserve losses.</li>
          <li>1,500&nbsp;W for 4 hours &asymp; 6,000&nbsp;Wh &mdash; more than most single power stations hold.</li>
          <li>1,000&nbsp;W for an 8-hour night &asymp; 8,000&nbsp;Wh.</li>
        </ul>
        <p>
          For comparison, a phone charger and a few LED bulbs together might use 30&ndash;50&nbsp;Wh
          in an hour. A heater is one to two orders of magnitude heavier. Running one from a battery
          is realistic for short, targeted warm-ups, not for continuous heating.
        </p>
      </div>
    </div>
  );
}
