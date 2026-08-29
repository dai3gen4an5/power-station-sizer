export function RuntimeFormula() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        The basic power station runtime formula
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The starting point is one line:{" "}
          <span className="font-mono text-ink">runtime (hours) = battery capacity (Wh) ÷ device power draw (W)</span>.
          A 1,000 Wh power station running a 100-watt device works out to roughly 10 hours on paper.
          Halve the wattage and the runtime doubles; double the wattage and it halves.
        </p>
        <p>
          That version is useful for a quick gut check, but it quietly assumes every watt-hour in the
          battery reaches your device. In practice you divide <em>usable</em> capacity by the device&apos;s{" "}
          <em>average</em> draw:{" "}
          <span className="font-mono text-ink">
            runtime = (capacity × inverter efficiency × usable fraction) ÷ average watts
          </span>
          . The usable fraction is 1 minus whatever reserve you keep — a 20% reserve leaves 0.8. The
          calculator above applies both adjustments for you once you enter a capacity, wattage,
          efficiency, and reserve percentage.
        </p>
      </div>
    </div>
  );
}
