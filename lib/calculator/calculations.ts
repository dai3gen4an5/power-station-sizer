import { SIZE_CLASSES_WH } from "./constants";
import type { CalculatorResults, CalculatorSettings, Device } from "./types";

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
