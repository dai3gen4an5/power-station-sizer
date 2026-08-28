export function RefrigeratorSizingGuide() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        How to size a power station for a refrigerator
      </h2>
      <p className="mt-3 text-ink/75">
        Start with your refrigerator&apos;s daily watt-hour estimate — from running wattage and equivalent
        hours, or from an EnergyGuide label calculation — then multiply by the number of days of backup
        you want. The calculator above adjusts that figure upward for inverter efficiency and the battery
        reserve you want to keep, then rounds up to a common power station size. Because refrigerator
        loads are less predictable than a simple always-on device, it&apos;s reasonable to size a bit
        generously and lean toward the next size up if your estimate falls close to a boundary.
      </p>
    </div>
  );
}
