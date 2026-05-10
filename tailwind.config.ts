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
        canvas: "#FFFFFF",
        ink: "#000000",
        muted: "#737373",
        line: "#E5E5E5",
        brand: {
          turquoise: "#000000",
          yellow: "#000000",
          burgundy: "#000000",
          burgundySoft: "#1A1A1A",
        },
        accent: {
          DEFAULT: "#000000",
          dark: "#1A1A1A",
        },
        sand: "#A3A3A3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "Helvetica", "Arial", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        hairline: "none",
        lift: "none",
      },
      letterSpacing: {
        tightish: "-0.02em",
        tighter2: "-0.04em",
      },
      maxWidth: {
        content: "1440px",
      },
      animation: {
        blink: "blink 0.7s step-end infinite",
        "blink-slow": "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
