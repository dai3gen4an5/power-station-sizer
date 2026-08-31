/**
 * Power-OUTPUT helpers, kept separate from the energy-CAPACITY math in
 * calculations.ts.
 *
 * A power station has to satisfy three independent limits to run a motor load
 * such as a sump pump, a microwave, or an air conditioner:
 *
 *   1. Enough stored energy, in watt-hours        -> calculations.ts
 *   2. Enough continuous AC output, in watts, to sustain the running load
 *   3. Enough surge / startup output, in watts, for the brief inrush at start
 *
 * These functions never estimate a load's requirements. Continuous and surge
 * figures come straight from the numbers the user reads off the appliance
 * label, manual, or manufacturer spec. There is deliberately NO
 * horsepower -> watts conversion here — it varies too much by motor and model
 * to be safe as calculator logic.
 */

/** Clamp to a finite, positive number; anything else becomes 0 ("not set"). */
export function normalizePowerWatts(value: number): number {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

export interface CyclingEnergyInput {
  /** Steady running power draw while the load is on, in watts (from its spec). */
  runningWatts: number;
  /** Minutes the load actually runs in each hour it is needed. Clamped to 0..60. */
  minutesPerHour: number;
  /** Number of hours to cover (e.g. the length of the outage). */
  hours: number;
}

/**
 * Energy a cycling load uses over a period, BEFORE inverter efficiency and
 * battery reserve:
 *
 *   runningWatts x (minutesPerHour / 60) x hours
 *
 * A sump pump only runs a few minutes of each hour, so this avoids the common
 * mistake of multiplying running watts by the full outage length.
 */
export function getCyclingEnergyWh(input: CyclingEnergyInput): number {
  const watts = normalizePowerWatts(input.runningWatts);
  const minutes = Math.min(
    60,
    Math.max(0, Number.isFinite(input.minutesPerHour) ? input.minutesPerHour : 0)
  );
  const hours = Math.max(0, Number.isFinite(input.hours) ? input.hours : 0);
  // Multiply before dividing by 60 so whole-minute inputs give exact results
  // (e.g. 800 x 10 x 12 / 60 = 1600, not 1599.999...).
  return (watts * minutes * hours) / 60;
}

/**
 * Energy a load uses over a fixed total run time, BEFORE inverter efficiency and
 * battery reserve:
 *
 *   watts x (minutes / 60)
 *
 * General-purpose, not tied to any one appliance: use it for a load sized by
 * total operating minutes rather than a per-hour duty cycle — a microwave,
 * kettle, coffee maker, or heater. For a load that only runs part of each hour
 * across an outage, use getCyclingEnergyWh instead.
 *
 * `watts` is the load's electrical INPUT power (what it draws from the outlet),
 * not any "cooking" / output rating printed on the front of the appliance.
 */
export function getTimedEnergyWh(watts: number, minutes: number): number {
  const normalizedWatts = normalizePowerWatts(watts);
  const runMinutes = Math.max(0, Number.isFinite(minutes) ? minutes : 0);
  // Multiply before dividing by 60 so whole-minute inputs give exact results
  // (e.g. 1500 x 10 / 60 = 250, not 249.999...).
  return (normalizedWatts * runMinutes) / 60;
}

/**
 * The continuous AC output a power station must be able to sustain equals the
 * load's running watts. No margin is added here — the caller decides on
 * headroom.
 */
export function getRequiredContinuousOutputW(runningWatts: number): number {
  return normalizePowerWatts(runningWatts);
}

/**
 * The surge / startup output a power station must be able to deliver for the
 * brief inrush when the motor starts. This is the user-supplied startup figure;
 * when it is unknown (0), the requirement is unknown, not a guess.
 */
export function getRequiredSurgeOutputW(startupWatts: number): number {
  return normalizePowerWatts(startupWatts);
}

export type OutputVerdict = "ok" | "insufficient" | "unknown";

export interface PowerOutputCompatibility {
  /** Can the station sustain the running load? */
  continuous: OutputVerdict;
  /** Can the station deliver the startup surge? */
  surge: OutputVerdict;
}

/**
 * Compare one specific power station's rated output against a load's
 * requirements. Any figure that is 0 / missing yields "unknown" for that check,
 * never a pass or a fail. Exported for reuse by other appliance calculators.
 */
export function checkPowerOutputCompatibility(args: {
  runningWatts: number;
  startupWatts: number;
  stationContinuousW: number;
  stationSurgeW: number;
}): PowerOutputCompatibility {
  const needContinuous = getRequiredContinuousOutputW(args.runningWatts);
  const needSurge = getRequiredSurgeOutputW(args.startupWatts);
  const haveContinuous = normalizePowerWatts(args.stationContinuousW);
  const haveSurge = normalizePowerWatts(args.stationSurgeW);

  const judge = (need: number, have: number): OutputVerdict => {
    if (need <= 0 || have <= 0) return "unknown";
    return have >= need ? "ok" : "insufficient";
  };

  return {
    continuous: judge(needContinuous, haveContinuous),
    surge: judge(needSurge, haveSurge),
  };
}
