export function RefrigeratorSurgeVsRunning() {
  return (
    <div>
      <h2 className="h2">Running watts vs startup surge</h2>
      <p className="mt-3 text-ink/75">
        Running watts describe how much power the compressor draws once it&apos;s already spinning;
        startup (or surge) watts describe the brief spike required to get the compressor motor moving,
        which can be noticeably higher for a moment. This matters because a power station&apos;s battery
        capacity (Wh) and its inverter&apos;s power output (W) are separate specifications — a battery
        might store plenty of energy but still fail to start a refrigerator if the inverter&apos;s peak or
        surge output rating is too low. There&apos;s no single multiplier that applies to every
        refrigerator, so check your appliance&apos;s label or manual for its starting wattage where
        listed, and compare it against your power station&apos;s rated continuous and surge output before
        relying on it.
      </p>
    </div>
  );
}
