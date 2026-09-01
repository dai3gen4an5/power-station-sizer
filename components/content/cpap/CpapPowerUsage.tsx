export function CpapPowerUsage() {
  return (
    <div>
      <h2 className="h2">How much power does a CPAP use?</h2>
      <p className="mt-3 text-ink/75">
        CPAP machines typically draw somewhere between 30 and 60 watts on their own, but the exact figure
        depends on several factors: the specific machine model, the pressure setting you use, whether a
        heated humidifier is running, whether heated tubing is attached, and whether the machine is
        powered directly from DC (such as a car outlet or a battery pack&apos;s DC port) or through an AC
        inverter. Running through an inverter adds a small additional loss, since converting stored DC
        battery power to AC wastes some energy as heat. A calculator result is only as accurate as the
        wattage you enter, so check your CPAP&apos;s power label or manual for the exact figure for your
        setup.
      </p>
    </div>
  );
}
