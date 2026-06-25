import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0f",
        violet: "#6d5dfc",
        electric: "#5b8cff",
      },
      boxShadow: {
        glow: "0 20px 80px rgba(109, 93, 252, 0.24)",
        card: "0 20px 50px rgba(15, 23, 42, 0.08)",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "fade-up": "fadeUp .7s ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
