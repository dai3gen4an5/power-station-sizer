export function EbAcDcUsb() {
  return (
    <div>
      <h2 className="h2">AC vs 12V vs USB heated blankets</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          This calculator models a household <span className="font-medium text-ink">AC electric
          blanket</span>: it applies an inverter-efficiency factor because the power station has to
          convert DC battery power to AC, and it reports a required AC output. Low-voltage heated
          blankets do not run through the inverter, so that model does not apply to them:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">12V heated blankets</span> plug into a car-style
            socket or the power station&apos;s DC output and bypass the AC inverter. They tend to be
            in the low tens of watts.
          </li>
          <li>
            <span className="font-medium text-ink">USB heated blankets and throws</span> run from a
            USB-A or USB-C port at a handful of watts and are really a warm accessory rather than a
            bed heater.
          </li>
        </ul>
        <p>
          12V and USB heated blankets are outside this calculator&apos;s AC model. Size them from
          their actual source-side energy use &mdash; the DC watts they draw times the hours &mdash;
          and account for any DC-conversion losses the device or power source specifies. Do not carry
          the AC calculator&apos;s result, including its required AC output, across to a 12V or USB
          blanket. As with an AC model, check the manufacturer&apos;s manual for permitted power
          sources.
        </p>
      </div>
    </div>
  );
}
