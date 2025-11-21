import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        blush: "#F8E1E7",
        peach: "#F9C7A0",
        rose: "#FFC1CC",
        ivory: "#FFFFFF",
        dusk: "#2E1F27"
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui"],
        script: ["'Dancing Script'", "cursive"]
      },
      boxShadow: {
        soft: "0 10px 40px rgba(255, 193, 204, 0.35)",
        glow: "0 0 30px rgba(249, 199, 160, 0.55)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
