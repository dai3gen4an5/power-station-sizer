export function WattsVsWattHours() {
  return (
    <div>
      <h2 className="h2">Watts vs. watt-hours</h2>
      <p className="mt-3 text-ink/75">
        Watts (W) measure how much power a device draws at any given moment — think of it as speed.
        Watt-hours (Wh) measure total energy used over time — think of it as distance traveled. A
        1,500-watt space heater draws a lot of power instantly, but only uses 1,500 Wh if it runs for a
        full hour. A 5-watt phone charger draws very little, but left running for days it adds up. Sizing a
        power station means matching its Wh capacity to how much total energy your devices will actually
        consume, not just their peak wattage.
      </p>
    </div>
  );
}
