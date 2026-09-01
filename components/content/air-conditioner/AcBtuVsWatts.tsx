export function AcBtuVsWatts() {
  return (
    <div>
      <h2 className="h2">
        Why BTU does not directly tell you electrical watts
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          BTU per hour is a <span className="font-medium text-ink">cooling capacity</span> rating
          &mdash; how much heat the unit can remove from a room. It is not the electrical power the
          unit draws from the outlet. Two air conditioners with the same 8,000&nbsp;BTU label can
          pull noticeably different running watts depending on the compressor, the efficiency rating
          (EER or CEER), whether it is a single-speed or inverter unit, and the conditions it runs
          in.
        </p>
        <p>
          That is why this calculator asks for running watts, not BTU. Common sizes people search for
          &mdash; 5,000, 8,000, 10,000, and 12,000&nbsp;BTU &mdash; span a wide range of real
          electrical draw, and a fixed &ldquo;BTU to watts&rdquo; conversion would give a misleading
          number for many models.
        </p>
        <p>To find the real figure, use one of these, in order of preference:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            The <span className="font-medium text-ink">nameplate</span> on the unit, which lists
            watts or amps and volts (watts is roughly amps multiplied by volts). Look for a separate
            starting or locked-rotor figure.
          </li>
          <li>
            The <span className="font-medium text-ink">owner&apos;s manual</span> or the
            manufacturer&apos;s specification sheet, which usually lists running wattage and the
            required voltage.
          </li>
          <li>
            A <span className="font-medium text-ink">plug-in watt meter</span> on the unit&apos;s
            outlet. The steady reading while the compressor runs is the running figure; a peak-hold
            feature captures an approximate surge.
          </li>
        </ul>
      </div>
    </div>
  );
}
