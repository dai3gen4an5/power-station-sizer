export function CmCan500Wh() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Can a 500Wh power station run a coffee maker?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          On stored energy, yes. A 500&nbsp;Wh unit has roughly 325&ndash;400&nbsp;Wh usable, which
          is one to two brews of a typical drip machine, or several cups from a single-serve brewer.
        </p>
        <p>
          Whether it runs the coffee maker at all is the harder part. Many 500&nbsp;Wh power stations
          have an inverter rated around 500&nbsp;W, well below the 900&ndash;1,500&nbsp;W a full-size
          coffee maker draws while heating. A low-wattage single-cup brewer might fit; a carafe
          machine usually will not. Check the continuous AC output rating against your machine&apos;s
          input watts before counting on it.
        </p>
      </div>
    </div>
  );
}
