export function SolarWeatherShade() {
  return (
    <div>
      <h2 className="h2">
        How clouds and partial shade change charging
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Cloud cover is the biggest single variable. A bright overcast day can drop panel output to
          somewhere around a quarter to a half of clear-sky levels, and heavy storm cloud can take it
          well below that. Over a run of grey days, a panel that comfortably tops up your battery in
          summer sun might only replace part of what you use.
        </p>
        <p>
          Shade behaves worse than people expect. Because of how cells are wired in series, a shadow
          across even a small part of one panel — a branch, a pole, a roof vent, the corner of an
          awning — can cut that panel&apos;s output by far more than the shaded fraction. Moving a
          portable panel a short distance to clear a shadow, or angling it toward open sky, often
          recovers more power than adding another panel would.
        </p>
        <p>
          For trips longer than a day, it&apos;s safer to plan around a cloudy-day partial charge and
          treat a full sunny-day recharge as a bonus rather than the baseline.
        </p>
      </div>
    </div>
  );
}
