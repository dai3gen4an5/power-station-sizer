import { SIZE_CLASSES_WH } from "./constants";
import type {
  CalculatorResults,
  CalculatorSettings,
  Device,
  SolarChargeInput,
  SolarChargeResults,
  SolarPanelSizeInput,
  SolarPanelSizeResults,
} from "./types";

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

/** Daily watt-hour use of a single device row (watts x hours/day x quantity). */
export function getDeviceDailyWh(device: Pick<Device, "watts" | "hoursPerDay" | "quantity">): number {
  const watts = Math.max(0, Number.isFinite(device.watts) ? device.watts : 0);
  const hours = Math.max(0, Number.isFinite(device.hoursPerDay) ? device.hoursPerDay : 0);
  const quantity = Math.max(0, Number.isFinite(device.quantity) ? device.quantity : 0);
  return watts * hours * quantity;
}

/** Sum of daily watt-hour use across every device. */
export function getTotalDailyWh(devices: Device[]): number {
  return devices.reduce((sum, device) => sum + getDeviceDailyWh(device), 0);
}

/** Total energy needed for the full backup period, before any adjustments. */
export function getRawCapacityWh(totalDailyWh: number, days: number): number {
  return totalDailyWh * Math.max(0, days);
}

/** Raw capacity adjusted upward to account for inverter (DC to AC) conversion loss. */
export function getEfficiencyAdjustedWh(rawCapacityWh: number, inverterEfficiencyPercent: number): number {
  const efficiency = clamp(inverterEfficiencyPercent, 1, 100) / 100;
  return rawCapacityWh / efficiency;
}

/** Efficiency-adjusted capacity adjusted upward to leave an unused reserve buffer. */
export function getRecommendedCapacityWh(efficiencyAdjustedWh: number, batteryReservePercent: number): number {
  const reserve = clamp(batteryReservePercent, 0, 95) / 100;
  return efficiencyAdjustedWh / (1 - reserve);
}

/**
 * Rounds a watt-hour value up to the nearest common power station size.
 * Returns null when the value exceeds the largest defined class (i.e. "5000 Wh+").
 */
export function roundUpToSizeClass(valueWh: number): number | null {
  for (const size of SIZE_CLASSES_WH) {
    if (valueWh <= size) return size;
  }
  return null;
}

/** Runs every device + settings through the full sizing calculation. */
export function calculateResults(devices: Device[], settings: CalculatorSettings): CalculatorResults {
  const totalDailyWh = getTotalDailyWh(devices);
  const rawCapacityWh = getRawCapacityWh(totalDailyWh, settings.days);
  const minimumCapacityWh = getEfficiencyAdjustedWh(rawCapacityWh, settings.inverterEfficiency);
  const recommendedCapacityWh = getRecommendedCapacityWh(minimumCapacityWh, settings.batteryReserve);
  const recommendedSizeClass = roundUpToSizeClass(recommendedCapacityWh);

  return {
    totalDailyWh,
    rawCapacityWh,
    minimumCapacityWh,
    recommendedCapacityWh,
    recommendedSizeClass,
  };
}

/**
 * Estimates how many hours a given power station size would last against the
 * current device load, accounting for inverter efficiency and reserve.
 */
export function estimateRuntimeHours(
  batteryCapacityWh: number,
  totalDailyWh: number,
  inverterEfficiencyPercent: number,
  batteryReservePercent: number
): number {
  if (totalDailyWh <= 0 || batteryCapacityWh <= 0) return 0;

  const efficiency = clamp(inverterEfficiencyPercent, 1, 100) / 100;
  const reserve = clamp(batteryReservePercent, 0, 95) / 100;
  const usableWh = batteryCapacityWh * efficiency * (1 - reserve);
  const averageHourlyLoadW = totalDailyWh / 24;

  if (averageHourlyLoadW <= 0) return 0;
  return usableWh / averageHourlyLoadW;
}

/** Watt-hours of charge needed to move the battery from currentPercent to targetPercent. */
export function getSolarChargeEnergyWh(
  capacityWh: number,
  currentPercent: number,
  targetPercent: number
): number {
  const capacity = Math.max(0, Number.isFinite(capacityWh) ? capacityWh : 0);
  const delta = clamp(targetPercent, 0, 100) - clamp(currentPercent, 0, 100);
  return capacity * (Math.max(0, delta) / 100);
}

/** Solar panel rated watts scaled down by a real-world efficiency / derating factor. */
export function getEffectiveSolarInputW(panelWatts: number, solarEfficiencyPercent: number): number {
  const watts = Math.max(0, Number.isFinite(panelWatts) ? panelWatts : 0);
  const efficiency = clamp(solarEfficiencyPercent, 1, 100) / 100;
  return watts * efficiency;
}

/** Ideal charge time in hours — charge energy divided by effective solar input. */
export function estimateSolarChargeHours(chargeEnergyWh: number, effectiveSolarInputW: number): number {
  if (chargeEnergyWh <= 0 || effectiveSolarInputW <= 0) return 0;
  return chargeEnergyWh / effectiveSolarInputW;
}

/** Approximate number of days to reach the target, given usable peak sun hours per day. */
export function estimateSolarChargeDays(chargeHours: number, peakSunHoursPerDay: number): number {
  if (chargeHours <= 0 || peakSunHoursPerDay <= 0) return 0;
  return chargeHours / peakSunHoursPerDay;
}

/** Runs a full solar charge time estimate from a single input object. */
export function calculateSolarChargeTime(input: SolarChargeInput): SolarChargeResults {
  const chargeEnergyWh = getSolarChargeEnergyWh(
    input.capacityWh,
    input.currentPercent,
    input.targetPercent
  );
  const effectiveSolarInputW = getEffectiveSolarInputW(input.panelWatts, input.solarEfficiency);
  const chargeHours = estimateSolarChargeHours(chargeEnergyWh, effectiveSolarInputW);
  const peakSunHours = input.peakSunHoursPerDay;
  const chargeDays =
    typeof peakSunHours === "number" && peakSunHours > 0
      ? estimateSolarChargeDays(chargeHours, peakSunHours)
      : null;

  return { chargeEnergyWh, effectiveSolarInputW, chargeHours, chargeDays };
}

/** Peak sun hours available across a number of days at a given daily figure. */
export function getAvailablePeakSunHours(days: number, peakSunHoursPerDay: number): number {
  return Math.max(0, days) * Math.max(0, peakSunHoursPerDay);
}

/** Effective solar watts needed to replace chargeEnergyWh within availablePeakSunHours. */
export function getRequiredSolarInputW(chargeEnergyWh: number, availablePeakSunHours: number): number {
  if (chargeEnergyWh <= 0 || availablePeakSunHours <= 0) return 0;
  return chargeEnergyWh / availablePeakSunHours;
}

/** Panel nameplate rating needed to sustain requiredSolarInputW once derated. */
export function getRequiredPanelWatts(
  requiredSolarInputW: number,
  solarEfficiencyPercent: number
): number {
  if (requiredSolarInputW <= 0) return 0;
  const efficiency = clamp(solarEfficiencyPercent, 1, 100) / 100;
  return requiredSolarInputW / efficiency;
}

/**
 * Rounds a required panel wattage up to a sensible shopping size (next 50 W),
 * so the suggestion carries a little headroom over the bare requirement.
 */
export function suggestedPanelWatts(requiredPanelWatts: number): number {
  if (requiredPanelWatts <= 0) return 0;
  return Math.ceil(requiredPanelWatts / 50) * 50;
}

/** Rough daily energy a panel collects — effective input watts x peak sun hours. */
export function getSolarHarvestWh(
  panelWatts: number,
  solarEfficiencyPercent: number,
  peakSunHours: number
): number {
  const effective = getEffectiveSolarInputW(panelWatts, solarEfficiencyPercent);
  if (effective <= 0 || peakSunHours <= 0) return 0;
  return effective * Math.max(0, peakSunHours);
}

/** Works backward from a recharge deadline to the solar panel rating it needs. */
export function calculateSolarPanelSize(input: SolarPanelSizeInput): SolarPanelSizeResults {
  const chargeEnergyWh = getSolarChargeEnergyWh(
    input.capacityWh,
    input.currentPercent,
    input.targetPercent
  );
  const availablePeakSunHours = Math.max(0, input.availablePeakSunHours);
  const requiredSolarInputW = getRequiredSolarInputW(chargeEnergyWh, availablePeakSunHours);
  const requiredPanelWatts = getRequiredPanelWatts(requiredSolarInputW, input.solarEfficiency);

  return { chargeEnergyWh, availablePeakSunHours, requiredSolarInputW, requiredPanelWatts };
}
