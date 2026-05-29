import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0D0D0D",
        surface: "#161616",
        surface2: "#1F1F1F",
        surface3: "#252525",
        border: "#2A2A2A",
        accent: "#F04500",
        "accent-h": "#CC3A00",
        "accent-l": "#FF6B35",
        text: "#FFFFFF",
        muted: "#888888",
        "muted-2": "#555555",
        purple: "#5B1DA8",
        "purple-d": "#3B1270",
        "purple-l": "#7B2DD8",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 90% 80% at 65% 40%, rgba(240,69,0,0.35) 0%, rgba(240,69,0,0.08) 40%, transparent 70%)",
        "orange-grad":
          "linear-gradient(135deg, #F04500 0%, #FF6B35 40%, #1A0A00 100%)",
        "contact-grad":
          "linear-gradient(135deg, #F04500 0%, #FF8C42 50%, #1A0800 100%)",
        "purple-grad":
          "linear-gradient(135deg, #3B1270 0%, #5B1DA8 50%, #1A0A2E 100%)",
        "hero-overlay":
          "linear-gradient(90deg, #0D0D0D 35%, rgba(13,13,13,0.75) 60%, transparent 100%)",
        "card-overlay":
          "linear-gradient(180deg, transparent 35%, rgba(13,13,13,0.95) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.75s cubic-bezier(0.25,0.46,0.45,0.94) forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            primary: { DEFAULT: "#F04500", foreground: "#FFFFFF" },
            background: "#0D0D0D",
            foreground: "#FFFFFF",
          },
        },
      },
    }),
  ],
};

export default config;
