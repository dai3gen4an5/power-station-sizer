export function HowItWorks() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">How the calculator works</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Add every device you want to power, along with its wattage, how many hours a day you&apos;ll run
          it, and how many you have. The calculator multiplies watts by hours by quantity to find each
          device&apos;s daily watt-hour (Wh) use, then adds every device together.
        </p>
        <p>
          That daily total is multiplied by your chosen number of backup days, then scaled up to account
          for inverter losses and the reserve you want to keep in the battery. The result is a recommended
          capacity, rounded up to the nearest common power station size so you know what to shop for.
        </p>
      </div>
    </div>
  );
}
