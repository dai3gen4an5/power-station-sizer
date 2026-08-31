export function CampingCapacityClasses() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        500Wh vs 1000Wh vs 2000Wh for camping
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          <span className="font-medium text-ink">500&nbsp;Wh</span> delivers roughly
          325&ndash;400&nbsp;Wh usable after inverter loss and a reserve. It is a good match for a
          light kit &mdash; camp lights, a small fan, phone and camera charging, a CPAP for a night
          &mdash; and it is small and light enough to carry easily. It is usually not enough to run a
          portable fridge for a full weekend.
        </p>
        <p>
          <span className="font-medium text-ink">1,000&nbsp;Wh</span> gives around
          650&ndash;800&nbsp;Wh usable, generally enough for a portable fridge plus lights and device
          charging for one to two nights, or the smaller items alone across a longer trip. This is the
          most common size for weekend car camping.
        </p>
        <p>
          <span className="font-medium text-ink">2,000&nbsp;Wh</span> provides around
          1,300&ndash;1,600&nbsp;Wh usable. Consider it for three or more nights without recharging,
          for running Starlink for hours each day on top of a fridge, or for an electric blanket in
          cold weather. It is heavier and bulkier, which matters more for tent camping than car
          camping.
        </p>
        <p>
          These are starting points. Put your real gear list and number of nights into the calculator
          above, and confirm the specific unit&apos;s usable capacity, continuous output and maximum
          charge input before buying.
        </p>
      </div>
    </div>
  );
}
