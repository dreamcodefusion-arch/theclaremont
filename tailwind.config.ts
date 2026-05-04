import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        claremont: {
          cream: "#F7F2EA",
          beige: "#C4A882",
          gold: "#B8935A",
          "gold-light": "#D4AD78",
          pine: "#2C4A1E",
          "pine-dark": "#1A2E12",
          sage: "#4A6741",
          mist: "#8B9EA8",
          charcoal: "#1C2420",
          "charcoal-soft": "#2E3832",
          white: "#FAFAF7",
          sunrise: "#D4734A",
          "warm-gray": "#6B6B6B",
          "light-gray": "#E8E3DC",
          "border": "#DDD8D0",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1.05" }],
        "display-lg": ["clamp(2.2rem, 5vw, 4rem)", { lineHeight: "1.1" }],
        "display-md": ["clamp(1.6rem, 3.5vw, 2.8rem)", { lineHeight: "1.15" }],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "shimmer": "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};

export default config;
