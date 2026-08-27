export function InverterEfficiencyInfo() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">Why inverter efficiency matters</h2>
      <p className="mt-3 text-ink/75">
        Power stations store energy as DC (direct current), but most household devices run on AC
        (alternating current). The built-in inverter converts DC to AC, and that conversion isn&apos;t
        perfectly efficient — typically 80 to 90%. The remaining energy is lost as heat. Our default of 85%
        is a reasonable middle estimate; check your specific power station&apos;s spec sheet for its rated
        efficiency if you want a more precise number.
      </p>
    </div>
  );
}
