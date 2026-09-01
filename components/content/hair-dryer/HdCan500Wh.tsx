export function HdCan500Wh() {
  return (
    <div>
      <h2 className="h2">Can a 500Wh power station run a hair dryer?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          On stored energy, yes. A 500&nbsp;Wh unit has roughly 325&ndash;400&nbsp;Wh usable, which
          is several full-size dries or a lot of travel-dryer time.
        </p>
        <p>
          Whether it runs the dryer at all is the harder part. Many 500&nbsp;Wh power stations have
          an inverter rated around 500&nbsp;W, well below the 1,500&ndash;1,875&nbsp;W a full-size
          dryer draws on high. A low-wattage travel dryer (around 800&ndash;1,000&nbsp;W) might run
          from a 500&nbsp;Wh-class unit with a 1,000&nbsp;W inverter; a standard home dryer on high
          almost certainly will not. Check the continuous AC output rating against your dryer&apos;s
          input watts.
        </p>
      </div>
    </div>
  );
}
