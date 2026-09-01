export function MwHowManyWh() {
  return (
    <div>
      <h2 className="h2">
        How many Wh does a microwave use?
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Energy use is just the input watts multiplied by the fraction of an hour the microwave
          runs. Because sessions are measured in minutes, the watt-hour total stays modest even
          though the wattage is high:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            A 1,200&nbsp;W input microwave for 3 minutes: 1,200 &times; 3 / 60 = 60&nbsp;Wh.
          </li>
          <li>
            A 1,500&nbsp;W input microwave for 10 minutes: 1,500 &times; 10 / 60 = 250&nbsp;Wh.
          </li>
          <li>
            A 1,700&nbsp;W input microwave for 20 minutes across a day: 1,700 &times; 20 / 60 &approx;
            567&nbsp;Wh.
          </li>
        </ul>
        <p>
          Add roughly 15&ndash;20% for inverter efficiency and a battery reserve, and typical
          microwave use over a day still lands in the low hundreds of watt-hours. What decides
          whether a power station works is almost always its continuous output rating, not whether it
          holds those watt-hours.
        </p>
      </div>
    </div>
  );
}
