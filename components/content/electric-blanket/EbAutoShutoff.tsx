export function EbAutoShutoff() {
  return (
    <div>
      <h2 className="h2">Automatic shutoff timers</h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Many electric blankets and heated throws switch themselves off after a set period &mdash;
          often somewhere between 1 and 12 hours, depending on the model and the setting. Some cannot
          be overridden.
        </p>
        <p>
          The calculator does not assume a shutoff time. Enter the hours you actually expect the
          blanket to be drawing power. If your controller shuts off after, say, 8 hours and you go to
          bed for 9, the blanket is only a load for those 8 hours &mdash; enter 8, not 9. If you plan
          to restart it, add the extra powered time.
        </p>
        <p>
          Check your own blanket&apos;s manual for its timer behaviour rather than assuming a common
          value, and treat the shutoff as a safety feature to keep, not an inconvenience to work
          around.
        </p>
      </div>
    </div>
  );
}
