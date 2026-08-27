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
