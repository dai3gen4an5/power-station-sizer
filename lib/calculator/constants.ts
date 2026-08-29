import type { CalculatorSettings, Device, SolarChargeInput } from "./types";

/** Common power station capacities, in watt-hours, ascending. */
export const SIZE_CLASSES_WH: readonly number[] = [300, 500, 750, 1000, 1500, 2000, 3000, 5000];

/** Common portable solar panel ratings, in watts, ascending. */
export const SOLAR_PANEL_CLASSES_W: readonly number[] = [100, 200, 400];

/** Starting values for the solar charge time calculator. */
export const DEFAULT_SOLAR_CHARGE_INPUT: SolarChargeInput = {
  capacityWh: 1000,
  currentPercent: 20,
  targetPercent: 100,
  panelWatts: 200,
  solarEfficiency: 70,
  peakSunHoursPerDay: 5,
};

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
