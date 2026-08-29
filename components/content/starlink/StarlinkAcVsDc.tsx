export function StarlinkAcVsDc() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Starlink AC vs DC efficiency</h2>
      <p className="mt-3 text-ink/75">
        Battery capacity and conversion efficiency are two different things worth understanding together.
        If your setup looks like battery (DC) → inverter (AC) → Starlink power supply → dish (DC), each
        conversion step loses a bit of energy as heat. A direct DC-compatible setup can reduce some of
        that conversion loss for certain configurations, but not every Starlink kit or power station
        supports the same voltage or connector standard — this isn&apos;t something that applies
        universally across all models. Before using any non-standard power arrangement, verify the
        voltage, connector type, and hardware compatibility against your Starlink kit&apos;s documentation
        and your power station&apos;s manufacturer guidance, rather than attempting wiring modifications
        that aren&apos;t explicitly supported by the manufacturers involved.
      </p>
    </div>
  );
}
