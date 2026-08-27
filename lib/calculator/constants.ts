import type { CalculatorSettings, Device } from "./types";

/** Common power station capacities, in watt-hours, ascending. */
export const SIZE_CLASSES_WH: readonly number[] = [300, 500, 750, 1000, 1500, 2000, 3000, 5000];

export const DEFAULT_SETTINGS: CalculatorSettings = {
  days: 1,
  inverterEfficiency: 85,
  batteryReserve: 20,
};

export const DEFAULT_DEVICE: Device = {
  id: "default-refrigerator",
  name: "Refrigerator",
  watts: 150,
  hoursPerDay: 8,
  quantity: 1,
};

/** Sensible starting values for a manually-added device row. */
export const BLANK_DEVICE_DEFAULTS = {
  name: "",
  watts: 100,
  hoursPerDay: 4,
  quantity: 1,
};
