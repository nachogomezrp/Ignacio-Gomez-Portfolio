import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    borderRadius: { none: "0px", DEFAULT: "0px", sm: "2px" },
    extend: {
      colors: {
        ink: "#050505",
        panel: "#0B0B0B",
        surface: "#111111",
        line: "#242424",
        muted: "#A0A0A0",
        signal: { DEFAULT: "#FF2020", dark: "#D90000" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
