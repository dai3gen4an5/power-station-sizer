export function AfCookTimeBatches() {
  return (
    <div>
      <h2 className="h2">Cook time and multiple batches</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The calculator uses the minutes you enter as the powered time. Cooking a second or third
          batch multiplies the energy, so enter the total:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>One 20-minute cook &rarr; enter 20 minutes.</li>
          <li>Two 20-minute batches back to back &rarr; enter 40 minutes.</li>
          <li>A 15-minute cook plus a 10-minute reheat &rarr; enter 25 minutes.</li>
        </ul>
        <p>
          It does not guess the number of batches or add anything for reheating between them. If the
          air fryer stays warm between batches and skips preheat on the later ones, your real total
          may be a little lower &mdash; adjust the minutes to match.
        </p>
      </div>
    </div>
  );
}
