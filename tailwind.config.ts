import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      colors: {
        canvas: "#f8f8f4",
        ink: "#0a0a0a",
        accent: "#0f62fe",
        muted: "#6b7280",
      },
      boxShadow: {
        subtle: "0 10px 30px -20px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
