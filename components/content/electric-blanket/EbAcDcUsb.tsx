export function EbAcDcUsb() {
  return (
    <div>
      <h2 className="h2">AC vs 12V vs USB heated blankets</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          This calculator is built for a household <span className="font-medium text-ink">AC
          electric blanket</span>: it applies an inverter-efficiency factor because the power station
          has to convert DC battery power to AC. Low-voltage heated blankets work differently:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">12V heated blankets</span> plug into a car-style
            socket or the power station&apos;s DC output and skip the inverter, so there is no
            inverter loss. They are usually 30&ndash;60&nbsp;W. Use the blanket&apos;s actual 12V
            consumption and set the inverter-efficiency figure aside.
          </li>
          <li>
            <span className="font-medium text-ink">USB heated blankets and throws</span> run at 5&ndash;20&nbsp;W
            from a USB-A or USB-C port and are really a warm accessory rather than a bed heater. Size
            them from the port&apos;s rated output and the hours of use.
          </li>
        </ul>
        <p>
          For a 12V or USB blanket, check the actual source, adapter, and manufacturer consumption
          figures &mdash; do not apply this page&apos;s AC inverter-efficiency assumption to them.
          The power-station capacity sizing below still applies: the battery has to hold the
          watt-hours either way.
        </p>
      </div>
    </div>
  );
}
