export function RuntimeRealWorldLosses() {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Why real-world runtime is shorter than the formula
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          Several real-world factors pull actual runtime below the simple capacity-divided-by-watts
          number:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink">Inverter conversion loss.</span> Turning stored DC
            energy into household AC is typically 80 to 90% efficient. The rest leaves as heat, so an AC
            device effectively sees only that fraction of the battery.
          </li>
          <li>
            <span className="font-medium text-ink">Battery reserve.</span> Running a lithium battery to
            0% every cycle shortens its life and leaves no buffer, so most people keep 10 to 20% unused.
            That reserve is capacity you paid for but deliberately don&apos;t spend.
          </li>
          <li>
            <span className="font-medium text-ink">Standby and idle draw.</span> The inverter, display,
            fans, and Bluetooth or Wi-Fi radios all consume a few watts whenever the unit is on, even
            with nothing plugged in.
          </li>
          <li>
            <span className="font-medium text-ink">Temperature.</span> Cold weather reduces the energy a
            battery can deliver, and high loads that run the cooling fans hard add their own overhead.
          </li>
          <li>
            <span className="font-medium text-ink">Battery age.</span> Usable capacity slowly declines
            over hundreds of cycles, so a unit several years old won&apos;t match its original spec.
          </li>
          <li>
            <span className="font-medium text-ink">Fluctuating and surge loads.</span> Devices with
            motors or heating elements draw in bursts and spike well above their rated watts at startup,
            which the steady-average formula can&apos;t capture.
          </li>
        </ul>
        <p>
          A reasonable rule of thumb is that real runtime lands somewhere around 80 to 90% of the naive
          figure for a steady electronic load, and less for motor- or heat-driven devices. The
          calculator above builds the two largest factors — efficiency and reserve — directly into its
          estimate.
        </p>
      </div>
    </div>
  );
}
