export function ToConvectionMode() {
  return (
    <div>
      <h2 className="h2">Convection mode</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Many toaster ovens have a convection fan that circulates hot air. The fan itself draws only
          a few watts &mdash; and that draw is already included in the wattage on the rating label,
          which is measured with everything running.
        </p>
        <p>
          So this calculator does not add anything for convection. Enter the oven&apos;s nameplate
          input watts and it covers the elements and the fan together. It does not try to estimate a
          separate fan figure or adjust for it by model, and convection cooking&apos;s shorter times
          are up to you to reflect in the minutes you enter.
        </p>
      </div>
    </div>
  );
}
