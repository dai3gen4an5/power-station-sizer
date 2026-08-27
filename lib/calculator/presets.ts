import type { DevicePreset } from "./types";

/**
 * Example wattages for common devices. Actual power draw varies significantly
 * by brand and model, so these are starting points, not exact figures.
 */
export const DEVICE_PRESETS: DevicePreset[] = [
  { name: "Refrigerator", watts: 150, hoursPerDay: 8, quantity: 1 },
  { name: "CPAP Machine", watts: 40, hoursPerDay: 8, quantity: 1 },
  { name: "Starlink", watts: 50, hoursPerDay: 24, quantity: 1 },
  { name: "Laptop", watts: 65, hoursPerDay: 4, quantity: 1 },
  { name: "TV", watts: 100, hoursPerDay: 4, quantity: 1 },
  { name: "Portable AC", watts: 900, hoursPerDay: 8, quantity: 1 },
  { name: "Coffee Maker", watts: 1000, hoursPerDay: 0.25, quantity: 1 },
  { name: "Microwave", watts: 1000, hoursPerDay: 0.25, quantity: 1 },
];
