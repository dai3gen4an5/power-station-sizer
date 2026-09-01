import { getDeviceDailyWh } from "@/lib/calculator/calculations";
import { formatWh } from "@/lib/utils/format";

const EXAMPLE_WATTS = 75;
const PART_TIME_HOURS = 8;
const FULL_DAY_HOURS = 24;

export function StarlinkDailyWh() {
  const partTimeWh = getDeviceDailyWh({ watts: EXAMPLE_WATTS, hoursPerDay: PART_TIME_HOURS, quantity: 1 });
  const fullDayWh = getDeviceDailyWh({ watts: EXAMPLE_WATTS, hoursPerDay: FULL_DAY_HOURS, quantity: 1 });

  return (
    <div>
      <h2 className="h2">
        How many Wh does Starlink use per day?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Daily watt-hour use is watts multiplied by hours of use: a {EXAMPLE_WATTS}-watt Starlink setup
          running {PART_TIME_HOURS} hours a day uses about {formatWh(partTimeWh)}. How many hours to enter
          depends entirely on your usage pattern — occasional daytime use is very different from keeping
          the dish powered around the clock.
        </p>
        <p>
          The difference matters more than it might seem: the same {EXAMPLE_WATTS}-watt setup running all{" "}
          {FULL_DAY_HOURS} hours of the day uses about {formatWh(fullDayWh)} — three times as much energy.
          If you need continuous internet service rather than occasional use, plan around the full-day
          figure, not the part-time one.
        </p>
      </div>
    </div>
  );
}
