import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    borderRadius: {
      none: "0px",
      sm: "0px",
      DEFAULT: "0px",
      md: "0px",
      lg: "0px",
      xl: "0px",
      "2xl": "0px",
      "3xl": "0px",
      full: "0px",
    },
    extend: {
      colors: {
        canvas: "#F7F6F2",
        ink: "#301830",
        muted: "#473A41",
        line: "#E8E5DD",
        brand: {
          turquoise: "#90D0C8",
          yellow: "#E8C020",
          burgundy: "#301830",
          burgundySoft: "#382030",
        },
        accent: {
          DEFAULT: "#0F766E",
          dark: "#0B5D55",
        },
        sand: "#D4CFC1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        hairline: "0 1px 0 rgba(48,24,48,0.06)",
        lift: "0 12px 30px rgba(48,24,48,0.06)",
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;

