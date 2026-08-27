import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base
        ink: "#161A20", // primary text
        paper: "#F7F8F5", // page background
        line: "#E3E4DE", // hairline borders on light surfaces

        // "Device readout" panel — the calculator's signature LCD-style result
        bezel: "#10151B", // dark unit casing
        screen: "#DCE8E2", // pale LCD screen
        screenInk: "#0E2E28", // text on the LCD screen

        // Accent — modeled on a charge-indicator LED
        brand: "#159A82",
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
