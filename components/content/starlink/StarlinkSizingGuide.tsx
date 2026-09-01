export function StarlinkSizingGuide() {
  return (
    <div>
      <h2 className="h2">How to size a battery for Starlink</h2>
      <p className="mt-3 text-ink/75">
        Start with a daily watt-hour estimate based on your Starlink hardware&apos;s actual wattage and
        how many hours a day you&apos;ll run it, then multiply by the number of days of backup you want.
        The calculator above adjusts that figure upward for inverter efficiency and the battery reserve
        you want to keep, then rounds up to a common power station size. If you&apos;re not sure how many
        hours you&apos;ll actually use it, err toward more — Starlink is easy to under-budget for, since a
        quick glance at its typical &quot;idle&quot; wattage doesn&apos;t always reflect real-world network
        activity and weather-related heating.
      </p>
    </div>
  );
}
