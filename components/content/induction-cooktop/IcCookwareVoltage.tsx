export function IcCookwareVoltage() {
  return (
    <div>
      <h2 className="h2">Cookware and voltage</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Two things outside the electrical sizing will stop an induction cooktop working even when
          the power station is big enough:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Induction-compatible cookware.</span> The pan must
            have a ferromagnetic base &mdash; cast iron or magnetic stainless steel. Aluminium,
            copper, glass, and most non-magnetic stainless will not heat. A fridge magnet that sticks
            firmly to the pan base is a quick test. This calculator is an electrical sizing tool and
            does not check your cookware.
          </li>
          <li>
            <span className="font-medium text-ink">AC voltage.</span> Most single-burner portable
            induction cooktops are 120V in North America, but larger portable and built-in units can
            be 240V. The power station&apos;s AC output voltage has to match, and the calculator does
            not verify this &mdash; check the cooktop&apos;s label against the unit&apos;s spec.
          </li>
          <li>
            <span className="font-medium text-ink">Outlet and waveform.</span> Confirm the plug fits
            an outlet on the power station, ideally fed by a pure sine wave inverter.
          </li>
        </ul>
      </div>
    </div>
  );
}
