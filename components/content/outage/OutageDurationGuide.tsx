const DURATION_ROWS = [
  {
    length: "4 hours",
    setup: "Set Number of days to 1 and set each device's hours to about a sixth of a day (a refrigerator near 1.5 equivalent hours).",
  },
  {
    length: "8 hours",
    setup: "Number of days 1, with each device's hours set to roughly a third of a day (a refrigerator near 3 equivalent hours).",
  },
  {
    length: "12 hours",
    setup: "Number of days 1, with each device's hours at about half a day (a refrigerator near 4 equivalent hours).",
  },
  {
    length: "24 hours",
    setup: "Number of days 1, using full-day hours for each device (a refrigerator near 8 equivalent compressor hours).",
  },
  {
    length: "48 hours",
    setup: "Set Number of days to 2 and keep the same per-day hours, or enter the devices once and double the day count.",
  },
];

export function OutageDurationGuide() {
  return (
    <div>
      <h2 className="h2">
        How much battery capacity do I need for a 24-hour outage?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The calculator works in 24-hour days: it totals the watt-hours your devices use in a day,
          multiplies by the number of days, then adjusts for efficiency and reserve. For a 24-hour
          outage covering a refrigerator plus phones, Wi-Fi and lights, the recommended minimum is
          commonly in the 2,000&ndash;3,000&nbsp;Wh range once losses and reserve are included &mdash;
          the worked example above lands near 2,550&nbsp;Wh. A lighter load without a refrigerator can
          drop well under 1,000&nbsp;Wh.
        </p>
        <p>
          For an outage shorter or longer than a day, adjust the inputs like this:
        </p>
      </div>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead className="bg-paper">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                Outage length
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-ink/60">
                How to set the calculator
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {DURATION_ROWS.map((row) => (
              <tr key={row.length}>
                <td className="px-4 py-3 font-mono text-ink">{row.length}</td>
                <td className="px-4 py-3 text-ink/75">{row.setup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink/45">
        These are planning approximations. A refrigerator&apos;s compressor runs more often in a warm
        room or when the door is opened frequently, so use a measured average where you can.
      </p>
    </div>
  );
}
