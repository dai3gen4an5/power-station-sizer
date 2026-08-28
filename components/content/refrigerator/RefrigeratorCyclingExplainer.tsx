export function RefrigeratorCyclingExplainer() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Why refrigerators do not run continuously
      </h2>
      <p className="mt-3 text-ink/75">
        Unlike a space heater or a lightbulb, a refrigerator&apos;s compressor cycles on and off to
        maintain a set internal temperature — it isn&apos;t drawing power the entire day. Depending on the
        model, ambient temperature, and how often the door opens, the compressor might only be actively
        running for a portion of each hour. That&apos;s why this calculator asks for &quot;hours per
        day&quot; as an approximate equivalent compressor-on time rather than assuming the refrigerator
        draws its running wattage for a full 24 hours. Multiplying rated wattage by 24 hours would
        significantly overestimate actual energy use for most refrigerators.
      </p>
    </div>
  );
}
