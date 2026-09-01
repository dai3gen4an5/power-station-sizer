export function RuntimeUsableCapacity() {
  return (
    <div>
      <h2 className="h2">
        Rated capacity vs. usable capacity
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The watt-hour number on the box is the <em>rated</em> capacity — the energy in the cells when
          full. What actually reaches your devices is smaller. Subtract inverter conversion loss, any
          reserve you choose to keep, and a little standby overhead, and a 1,000 Wh power station
          commonly delivers somewhere around 650 to 800 Wh of real AC output.
        </p>
        <p>
          Enter capacity in the calculator as the rated figure and let the efficiency and reserve fields
          scale it down, or enter a measured usable figure directly and set efficiency to 100% with a 0%
          reserve. Some manufacturers publish a separate &quot;usable capacity&quot; or a real-world
          runtime chart for a given load — those are worth checking against your own estimate.
        </p>
        <p>
          Battery chemistry matters at the margins too: lithium iron phosphate (LiFePO₄) packs tolerate
          deeper discharges and far more cycles than older lithium-ion designs, so owners often run them
          with a smaller reserve.
        </p>
      </div>
    </div>
  );
}
