export function RefrigeratorDailyWh() {
  return (
    <div>
      <h2 className="h2">
        How many Wh does a refrigerator use per day?
      </h2>
      <p className="mt-3 text-ink/75">
        Daily watt-hour use is running watts multiplied by approximate compressor-on hours: for example, a
        150-watt refrigerator with about 8 equivalent hours of compressor runtime uses roughly 1,200 Wh
        per day. If you have access to your specific refrigerator&apos;s measured or manufacturer-listed
        daily or annual energy consumption, that figure will generally be more accurate than an estimate
        built from running wattage and a guessed runtime — use it instead when it&apos;s available.
      </p>
    </div>
  );
}
