export function SolarPeakSunHours() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">What are peak sun hours?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Peak sun hours are not the same as hours of daylight. One peak sun hour is one hour of
          sunlight at an intensity of 1000 watts per square metre — roughly bright midday sun. A day
          that runs from a dim sunrise to a dim sunset might last 13 hours but only add up to 4 or 5
          peak sun hours once the weak early and late light is accounted for.
        </p>
        <p>
          The figure varies a lot by location, season, and weather. Many places see somewhere between 3
          and 6 peak sun hours a day averaged across the year, with sunny high-altitude or desert areas
          higher and cloudy northern winters much lower. Local solar resource maps and databases publish
          monthly averages for a given latitude.
        </p>
        <p>
          In this calculator, peak sun hours per day are only used to turn an ideal charge time in hours
          into a rough number of days. If you leave the field at zero, you just get the hours figure.
        </p>
      </div>
    </div>
  );
}
