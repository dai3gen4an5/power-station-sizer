export function SolarPanelBiggerNotAlwaysFaster() {
  return (
    <div>
      <h2 className="h2">
        Why a bigger panel doesn&apos;t always charge faster
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Up to a point, more panel wattage means more input and a shorter charge. But several ceilings
          can flatten that out:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">The power station&apos;s input cap.</span> Once you
            reach the rated maximum solar input, extra wattage is simply ignored.
          </li>
          <li>
            <span className="font-medium text-ink">The battery&apos;s charge acceptance.</span> As the
            battery fills, the management system tapers the current regardless of how much sun is
            available, so the last 10 to 20% takes longer than the panel size implies.
          </li>
          <li>
            <span className="font-medium text-ink">A fixed number of sun hours.</span> A panel can only
            work while the sun is up. Beyond the size that fills the battery within your available sun
            hours, adding more does nothing that day.
          </li>
          <li>
            <span className="font-medium text-ink">Real-world conditions.</span> Cloud, heat, shade,
            and poor aiming scale down every panel proportionally, so a larger panel in bad conditions
            can still underperform a smaller one in good conditions.
          </li>
        </ul>
        <p>
          The useful target is the panel that comfortably meets your recharge deadline within your
          power station&apos;s input limit — not the largest panel you can find.
        </p>
      </div>
    </div>
  );
}
