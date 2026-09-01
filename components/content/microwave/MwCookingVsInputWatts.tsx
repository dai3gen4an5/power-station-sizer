export function MwCookingVsInputWatts() {
  return (
    <div>
      <h2 className="h2">
        Microwave cooking watts vs input watts
      </h2>
      <div className="mt-3 space-y-3 text-ink/75">
        <p>
          The big number on the front of a microwave &mdash; 700&nbsp;W, 900&nbsp;W, 1000&nbsp;W,
          1200&nbsp;W &mdash; is usually the <span className="font-medium text-ink">cooking power</span>
          , also called output power: roughly how much heating the oven delivers into the food. It is
          not how much electricity the microwave pulls from the outlet.
        </p>
        <p>
          The figure this calculator needs is the{" "}
          <span className="font-medium text-ink">electrical input watts</span>, sometimes labelled
          &ldquo;power consumption&rdquo; or &ldquo;input&rdquo;. It is higher than the cooking figure
          because the magnetron and transformer are not 100% efficient, but{" "}
          <span className="font-medium text-ink">how much higher varies by model</span>. There is no
          reliable fixed multiplier, so this page does not turn a cooking rating into an input rating
          &mdash; you read the input figure directly.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            A microwave whose front says &ldquo;1000&nbsp;W&rdquo; might draw anywhere from roughly
            1,200&nbsp;W to 1,700&nbsp;W of input, depending on the design.
          </li>
          <li>
            Two microwaves with the same cooking rating can have noticeably different input watts.
          </li>
          <li>
            &ldquo;Watts&rdquo; in an ad or on a spec sheet, with no other label, is usually the
            cooking figure. Look for the wording &ldquo;input&rdquo; or &ldquo;power
            consumption&rdquo; before trusting it.
          </li>
        </ul>
        <p>
          Enter the input watts you find on the rear label, in the manual, on the manufacturer&apos;s
          spec sheet, or measured with a plug-in watt meter. The energy and continuous-output results
          on this page all depend on that number being the input figure, not the cooking figure.
        </p>
      </div>
    </div>
  );
}
