export function RuntimeSizesExplainer() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        How long will a 500Wh, 1000Wh, or 2000Wh power station last?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          <span className="font-medium text-ink">A 500 Wh power station</span> holds roughly 340 to 400
          Wh of usable AC energy. That&apos;s about a full night for a CPAP without a humidifier, most of
          a workday for a laptop and phone, or several hours for a small TV. It generally isn&apos;t
          enough for a full-size refrigerator overnight.
        </p>
        <p>
          <span className="font-medium text-ink">A 1,000 Wh power station</span> delivers around 680 to
          800 Wh usable — one to two CPAP nights, a full day of light electronics, or roughly half a day
          to a day of a mini fridge depending on its cycling.
        </p>
        <p>
          <span className="font-medium text-ink">A 2,000 Wh power station</span> gives roughly 1,350 to
          1,600 Wh usable, which stretches to multiple days for low-wattage devices or about a day of a
          full-size refrigerator. High-wattage appliances — space heaters, kettles, hair dryers,
          air conditioners — still only run for tens of minutes to a couple of hours regardless of the
          size class, because their draw is measured in the hundreds or thousands of watts.
        </p>
        <p>
          These are starting points. Enter the specific capacity and wattage into the calculator above
          for a figure that reflects your own hardware and settings.
        </p>
      </div>
    </div>
  );
}
