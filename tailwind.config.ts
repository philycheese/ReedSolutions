import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F6F2",
        ink: "#121212",
        muted: "#3B3B3B",
        line: "#E8E5DD",
        accent: {
          DEFAULT: "#0F766E",
          dark: "#0B5D55",
        },
        sand: "#D4CFC1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        md: "10px",
        lg: "12px",
      },
      boxShadow: {
        hairline: "0 1px 0 rgba(18,18,18,0.06)",
        lift: "0 12px 30px rgba(18,18,18,0.06)",
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

