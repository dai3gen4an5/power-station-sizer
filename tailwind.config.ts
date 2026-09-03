import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ---- Base surfaces & text --------------------------------------------
        ink: "#15181D", // primary text
        muted: "#5B6470", // secondary text (was ad-hoc ink/60)
        paper: "#FAFBF8", // clean warm-neutral page canvas
        canvas: "#FAFBF8", // alias of `paper`
        surface: "#FFFFFF", // clean white cards
        "surface-muted": "#F6F8F4", // recessed panels, table zebra
        line: "#E2E7E0", // hairline borders on light surfaces
        hairline: "#ECEEE8", // even lighter divider
        "line-strong": "#CDD1C6", // emphasised border / input outline

        // ---- "Device readout" hardware — the signature LCD result panel -----
        bezel: "#0E1319", // dark unit casing
        hardware: "#141A21", // casing highlight face
        "hardware-edge": "#05080B", // casing shadow edge
        screen: "#D9E7E0", // pale LCD screen
        "screen-edge": "#C4D6CD", // LCD inner shadow
        screenInk: "#0C2C27", // text on the LCD screen
        led: "#2FD6A6", // status LED (brighter than brand)

        // ---- Accent — modeled on a charge-indicator LED --------------------
        brand: {
          DEFAULT: "#168C36",
          50: "#EEF8EF",
          100: "#D9F0DD",
          200: "#B5E0BC",
          300: "#82C98E",
          400: "#4DAC60",
          500: "#238F3E",
          600: "#168C36",
          700: "#116D2A",
          800: "#105724",
          900: "#0D481E",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        control: "0.625rem", // inputs, chips, small buttons
        card: "1rem", // standard content card
        feature: "1.5rem", // hero / feature cards
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 32, 0.04), 0 8px 24px -12px rgba(16, 24, 32, 0.10)",
        raised: "0 2px 6px rgba(16, 24, 32, 0.06), 0 18px 40px -16px rgba(16, 24, 32, 0.16)",
        pop: "0 24px 60px -20px rgba(11, 76, 66, 0.28)",
        hardware:
          "0 2px 0 rgba(255,255,255,0.04) inset, 0 -24px 40px -24px rgba(0,0,0,0.6) inset, 0 30px 60px -24px rgba(9, 62, 55, 0.35)",
      },
      keyframes: {
        "fade-rise": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-rise": "fade-rise 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
