import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#1f9d55",
          red: "#e11d48",
          white: "#ffffff",
          blue: "#2563eb"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
