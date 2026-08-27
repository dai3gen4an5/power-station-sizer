export function formatWh(value: number): string {
  const rounded = Math.round(Number.isFinite(value) ? value : 0);
  return `${rounded.toLocaleString("en-US")} Wh`;
}

function trimDecimal(value: number): string {
  const decimals = value < 10 ? 1 : 0;
  return value.toFixed(decimals).replace(/\.0$/, "");
}

export function formatHours(hours: number): string {
  if (!Number.isFinite(hours) || hours <= 0) return "0 hours";
  if (hours >= 48) {
    return `${trimDecimal(hours / 24)} days`;
  }
  const label = hours === 1 ? "hour" : "hours";
  return `${trimDecimal(hours)} ${label}`;
}
