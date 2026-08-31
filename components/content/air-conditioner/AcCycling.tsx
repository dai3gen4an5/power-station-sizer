import Link from "next/link";

export function AcCycling() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        How compressor cycling changes energy use
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          A single-speed air conditioner does not run continuously. The compressor switches on until
          the room reaches the thermostat setpoint, then switches off, then on again as the room
          warms back up. Over an hour it might run 20 minutes on a mild evening, 40 minutes on a hot
          afternoon, or nearly the whole hour in extreme heat with a low setpoint. An inverter-type
          unit instead varies its speed and may run more of the time at a lower average draw.
        </p>
        <p>
          That is why the calculator asks for minutes per hour rather than assuming the compressor
          runs the whole time. Multiplying running watts by the full duration overestimates the
          energy needed. A unit drawing 900&nbsp;watts that runs 40 minutes of each hour uses about{" "}
          <span className="font-mono">900 &times; 40 / 60 = 600&nbsp;Wh</span> per hour, not
          900&nbsp;Wh.
        </p>
        <p>
          Estimate a realistic busy case for your room and weather. Because run time, and therefore
          energy use, depends on outdoor temperature, the thermostat setpoint, humidity, insulation,
          room size, and the unit&apos;s own behaviour, the result is a planning estimate. It is not
          a guarantee that a given power station will run the air conditioner for an exact number of
          hours &mdash; use the{" "}
          <Link
            href="/power-station-runtime-calculator"
            className="font-medium text-brand hover:underline"
          >
            Power Station Runtime Calculator
          </Link>{" "}
          to explore a specific unit against a steady load.
        </p>
      </div>
    </div>
  );
}
