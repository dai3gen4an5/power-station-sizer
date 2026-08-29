export function StarlinkWattUsage() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">How many watts does Starlink use?</h2>
      <p className="mt-3 text-ink/75">
        Starlink hardware typically draws somewhere in the range of 40 to 150 watts, depending on the
        specific dish and router generation, weather conditions (snow-melt heating can increase draw
        substantially), network activity, and ambient temperature. Because consumption varies so much by
        hardware version and conditions, there&apos;s no single figure that applies to every setup. Check
        your specific Starlink kit&apos;s power adapter rating, or measure actual consumption with a
        plug-in watt meter, for the most accurate number to enter into the calculator above.
      </p>
    </div>
  );
}
