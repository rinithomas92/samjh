import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0f",
        coal: "#15151d",
        cream: "#fff7e8",
        yellow: "#ffe94a",
        pink: "#ff3fa4",
        lime: "#b9ff4a",
        violet: "#8d5cff",
        danger: "#ff5a5f"
      },
      boxShadow: {
        pop: "8px 8px 0 #000"
      }
    }
  },
  plugins: []
};

export default config;
