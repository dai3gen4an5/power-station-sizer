export function RvCapacityClasses() {
  return (
    <div>
      <h2 className="h2">
        1000Wh vs 2000Wh vs 3000Wh+ for RV use
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          <span className="font-medium text-ink">1,000&nbsp;Wh</span> delivers roughly
          650&ndash;800&nbsp;Wh usable after inverter loss and a reserve. That suits lights, a fan,
          phone and laptop charging, a CPAP overnight, and a small 12V fridge for part of a day. It is
          a common choice for weekenders who also have solar, and it stays light enough to move
          around easily.
        </p>
        <p>
          <span className="font-medium text-ink">2,000&nbsp;Wh</span> gives around
          1,300&ndash;1,600&nbsp;Wh usable, generally enough for a 12V fridge plus the small
          essentials for a full day of dry camping, or the essentials alone across a two to three day
          trip. Many units in this class also have higher continuous AC output, which helps with
          occasional larger loads.
        </p>
        <p>
          <span className="font-medium text-ink">3,000&nbsp;Wh and larger</span>, often with
          expandable batteries, is for running Starlink all day alongside a fridge and other
          electronics, longer stays between recharges, or heavier occasional AC use. The trade-off is
          weight, bulk and cost.
        </p>
        <p>
          These are starting points. Put your real appliance list and trip length into the calculator
          above, and always confirm the specific unit&apos;s usable capacity, continuous output and
          maximum charge input.
        </p>
      </div>
    </div>
  );
}
