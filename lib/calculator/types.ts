export interface Device {
  id: string;
  name: string;
  /** Rated power draw of a single unit, in watts. */
  watts: number;
  /** Hours per day the device actually runs. */
  hoursPerDay: number;
  /** Number of identical devices. */
  quantity: number;
}

export interface CalculatorSettings {
  /** Number of days the power station needs to cover. */
  days: number;
  /** Inverter efficiency as a percentage, e.g. 85 for 85%. */
  inverterEfficiency: number;
  /** Reserve capacity to keep unused, as a percentage, e.g. 20 for 20%. */
  batteryReserve: number;
}

export interface CalculatorResults {
  /** Sum of watts x hours x quantity across all devices, per day. */
  totalDailyWh: number;
  /** totalDailyWh x days, before any adjustment. */
  rawCapacityWh: number;
  /** Raw capacity adjusted for inverter efficiency (no reserve buffer). */
  minimumCapacityWh: number;
  /** Minimum capacity adjusted for the battery reserve buffer. */
  recommendedCapacityWh: number;
  /** Nearest common power station size at or above recommendedCapacityWh, or null if larger than the largest class. */
  recommendedSizeClass: number | null;
}

export interface DevicePreset {
  name: string;
  watts: number;
  hoursPerDay: number;
  quantity: number;
}

export interface SolarChargeInput {
  /** Power station battery capacity, in watt-hours. */
  capacityWh: number;
  /** Current battery charge level, as a percentage, e.g. 20 for 20%. */
  currentPercent: number;
  /** Target battery charge level, as a percentage, e.g. 100 for 100%. */
  targetPercent: number;
  /** Combined rated power of the solar panel(s), in watts. */
  panelWatts: number;
  /** Real-world solar efficiency / derating, as a percentage, e.g. 70 for 70%. */
  solarEfficiency: number;
  /** Optional usable peak sun hours per day, used to estimate a rough day count. */
  peakSunHoursPerDay?: number;
}

export interface SolarChargeResults {
  /** Watt-hours of charge needed to move from currentPercent to targetPercent. */
  chargeEnergyWh: number;
  /** Panel rated watts scaled down by the real-world efficiency factor. */
  effectiveSolarInputW: number;
  /** Ideal charge time in hours: chargeEnergyWh / effectiveSolarInputW. */
  chargeHours: number;
  /** Approximate days to reach the target given peak sun hours/day, or null when not provided. */
  chargeDays: number | null;
}

export interface SolarPanelSizeInput {
  /** Power station battery capacity, in watt-hours. */
  capacityWh: number;
  /** Current battery charge level, as a percentage, e.g. 20 for 20%. */
  currentPercent: number;
  /** Target battery charge level, as a percentage, e.g. 100 for 100%. */
  targetPercent: number;
  /**
   * Peak sun hours available to finish the recharge. A direct hours figure,
   * or days multiplied by peak sun hours per day.
   */
  availablePeakSunHours: number;
  /** Real-world solar efficiency / derating, as a percentage, e.g. 70 for 70%. */
  solarEfficiency: number;
}

export interface SolarPanelSizeResults {
  /** Watt-hours of charge needed to move from currentPercent to targetPercent. */
  chargeEnergyWh: number;
  /** Peak sun hours available to complete the recharge. */
  availablePeakSunHours: number;
  /** Effective solar watts that must be sustained across those hours. */
  requiredSolarInputW: number;
  /** Panel nameplate rating needed to deliver that effective input after derating. */
  requiredPanelWatts: number;
}
