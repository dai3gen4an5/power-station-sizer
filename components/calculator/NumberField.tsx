"use client";

import { useEffect, useRef, useState } from "react";

interface NumberFieldProps {
  /** Canonical numeric value held by the parent. */
  value: number;
  /**
   * Fired on every edit with a clamped number, so live recalculation keeps up.
   * A fully-empty field reports `fallback` for the calculation only — the text
   * the user sees is never overwritten mid-edit.
   */
  onValueChange: (next: number) => void;
  /** Fired on blur / Enter with the normalized value, if the parent wants it. */
  onCommit?: (next: number) => void;
  min?: number;
  max?: number;
  /** Allow a decimal point. Off for integer-only fields like quantity. */
  allowDecimal?: boolean;
  /** Value used when the field is left empty and then committed. */
  fallback?: number;
  ariaLabel: string;
  placeholder?: string;
  className?: string;
}

function clamp(n: number, min?: number, max?: number): number {
  let v = n;
  if (typeof min === "number" && v < min) v = min;
  if (typeof max === "number" && v > max) v = max;
  return v;
}

/**
 * A controlled numeric input that does not fight the person typing.
 *
 * Root cause of the old inputs: they were `<input type="number">` whose value was
 * re-coerced to a Number on every keystroke, with a `0` fallback. Clearing the
 * field (select-all + Backspace) snapped it to "0", the caret landed after that
 * "0", and a partial decimal like "12." was discarded — so direct keyboard
 * entry felt impossible and the spinner became the only reliable path.
 *
 * The fix: keep the raw string the user typed in local state and render that
 * verbatim. Emit a parsed number upward for recalculation, but never rewrite
 * what is on screen while the field is focused. Normalize (clamp + fallback)
 * only on blur or Enter.
 */
export function NumberField({
  value,
  onValueChange,
  onCommit,
  min,
  max,
  allowDecimal = true,
  fallback = 0,
  ariaLabel,
  placeholder,
  className,
}: NumberFieldProps) {
  const [buffer, setBuffer] = useState<string>(() => String(value));
  const focused = useRef(false);

  // Reflect external changes (presets, page-supplied defaults) only when the
  // person is not mid-edit.
  useEffect(() => {
    if (!focused.current) setBuffer(String(value));
  }, [value]);

  function sanitize(raw: string): string {
    let s = raw.replace(allowDecimal ? /[^0-9.]/g : /[^0-9]/g, "");
    if (allowDecimal) {
      const dot = s.indexOf(".");
      if (dot !== -1) s = s.slice(0, dot + 1) + s.slice(dot + 1).replace(/\./g, "");
    }
    return s;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = sanitize(e.target.value);
    setBuffer(next);
    if (next === "" || next === ".") {
      onValueChange(fallback);
      return;
    }
    const parsed = Number.parseFloat(next);
    onValueChange(Number.isFinite(parsed) ? clamp(parsed, min, max) : fallback);
  }

  function commit() {
    focused.current = false;
    let parsed = Number.parseFloat(buffer);
    if (!Number.isFinite(parsed)) parsed = fallback;
    parsed = clamp(parsed, min, max);
    setBuffer(String(parsed));
    onValueChange(parsed);
    onCommit?.(parsed);
  }

  return (
    <input
      type="text"
      inputMode={allowDecimal ? "decimal" : "numeric"}
      autoComplete="off"
      spellCheck={false}
      draggable={false}
      value={buffer}
      aria-label={ariaLabel}
      placeholder={placeholder}
      onFocus={(e) => {
        focused.current = true;
        // Select the current value so a fresh number replaces it in one go,
        // while ordinary click-to-position still works on the next click.
        e.currentTarget.select();
      }}
      onChange={handleChange}
      onBlur={commit}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          e.currentTarget.blur();
        }
      }}
      // A `type="text"` input allows the browser to drag selected text and drop
      // it elsewhere in the field, which shuffles digits in these compact
      // number cells. Block the drag lifecycle so selection still works but the
      // value can only change by typing.
      onDragStart={(e) => e.preventDefault()}
      onDrop={(e) => e.preventDefault()}
      className={className}
    />
  );
}
