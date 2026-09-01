export function EbWhyLargeBattery() {
  return (
    <div>
      <h2 className="h2">Why a low-watt blanket can still need a large battery</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A household AC electric blanket draws only a modest wattage &mdash; examples run from tens
          of watts to well over 100&nbsp;W depending on size, controller, and model &mdash; so it is
          easy to assume a small power station will run one. Wattage is rarely the sticking point;
          the runtime is. A full night is 6 to 10 hours, and a small load held that long adds up to a
          meaningful number of watt-hours.
        </p>
        <p>
          At 75&nbsp;W for 8 hours that is 600&nbsp;Wh of raw energy, and after inverter losses and a
          reserve the recommended battery capacity is closer to 900&nbsp;Wh &mdash; enough that a
          500&nbsp;Wh unit falls short for a whole night. The AC-output requirement stays at
          75&nbsp;W the entire time, which the listed power stations comfortably supply.
        </p>
        <p>
          So for an electric blanket, <span className="font-medium text-ink">battery capacity and
          runtime are the binding electrical constraint</span>, not the inverter rating &mdash; the
          opposite of a kettle or a heater, where a brief high draw makes AC output the limit. One
          thing capacity does not settle: some heated blanket manuals prohibit inverter or generator
          power outright, so confirm your blanket permits power-station use before relying on any of
          this.
        </p>
      </div>
    </div>
  );
}
