export function EkCan500Wh() {
  return (
    <div>
      <h2 className="h2">Can a 500Wh power station run an electric kettle?</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          On stored energy, yes. A 500&nbsp;Wh unit has roughly 325&ndash;400&nbsp;Wh usable, which
          is several boils of a full-size kettle or many cups from a travel kettle.
        </p>
        <p>
          Whether it runs the kettle at all is the harder part. Many 500&nbsp;Wh power stations have
          an inverter rated around 500&nbsp;W, well below the 1,200&ndash;1,800&nbsp;W a full-size
          kettle draws while boiling. A low-wattage travel kettle (around 700&ndash;900&nbsp;W) might
          run from a 500&nbsp;Wh-class unit with a 1,000&nbsp;W inverter; a standard home kettle
          almost certainly will not. Check the continuous AC output rating against your
          kettle&apos;s input watts.
        </p>
      </div>
    </div>
  );
}
