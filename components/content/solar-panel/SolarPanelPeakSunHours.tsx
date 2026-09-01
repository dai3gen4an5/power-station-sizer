export function SolarPanelPeakSunHours() {
  return (
    <div>
      <h2 className="h2">What peak sun hours mean here</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Peak sun hours are not hours of daylight. One peak sun hour is one hour of sunlight at an
          intensity of 1000 watts per square metre — roughly bright midday sun. A day that runs 13
          hours from a dim sunrise to a dim sunset might only add up to 4 or 5 peak sun hours once the
          weak early and late light is counted properly.
        </p>
        <p>
          The figure varies widely with location, season, and weather. Many places average somewhere
          between 3 and 6 peak sun hours per day over the year, with sunny desert or high-altitude
          areas higher and cloudy northern winters much lower. Local solar resource maps and databases
          publish monthly averages for a given latitude.
        </p>
        <p>
          This calculator uses peak sun hours in two ways: as the window your recharge has to finish
          in, and — when you set the deadline in days — as the daily figure that converts days into a
          total number of sun hours. Fewer sun hours in the window means a larger panel is needed to
          move the same energy.
        </p>
      </div>
    </div>
  );
}
