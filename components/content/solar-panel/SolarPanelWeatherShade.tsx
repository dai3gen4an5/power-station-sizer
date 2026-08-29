export function SolarPanelWeatherShade() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        How clouds and shade change the size you need
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Cloud cover is the single biggest source of variation. A bright overcast day can drop panel
          output to somewhere around a quarter to a half of clear-sky levels, and heavy storm cloud
          takes it well below that. If your location is often cloudy, either lower the real-world
          efficiency figure you enter or size the panel for more sun hours than a clear day would give.
        </p>
        <p>
          Shade behaves worse than its size suggests. Because cells are wired in series, a shadow
          across even a small part of one panel — a branch, a pole, a roof vent, the edge of an awning
          — can cut that panel&apos;s output by far more than the shaded fraction. A modest panel kept
          in clear sun and aimed well often beats a larger one that spends part of the day shaded or
          lying flat.
        </p>
        <p>
          The practical takeaway: the calculator&apos;s number assumes good conditions, so buy above it
          if your site has frequent cloud, limited clear-sky windows, or unavoidable partial shade.
        </p>
      </div>
    </div>
  );
}
