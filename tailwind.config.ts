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
        primary: "#0B1F3A",
        secondary: "#2563EB",
        accent: "#22C55E",
        background: "#F8FAFC",
        foreground: "#0F172A",
        dark: "#060D1A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.04", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 4vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "marquee": "marquee 28s linear infinite",
        "marquee-slow": "marquee 40s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        "scale-in": "scale-in 0.5s ease forwards",
        "beam": "beam-move 3s ease-in-out infinite",
        "grid-fade": "grid-fade 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient": "radial-gradient(at 40% 20%, hsla(228,100%,50%,0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.08) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0) 0px, transparent 50%)",
      },
      boxShadow: {
        "glow-blue": "0 0 30px rgba(37,99,235,0.3)",
        "glow-green": "0 0 30px rgba(34,197,94,0.3)",
        "glow-blue-lg": "0 0 60px rgba(37,99,235,0.2), 0 0 120px rgba(37,99,235,0.1)",
        "card-dark": "0 1px 1px rgba(0,0,0,0.4), 0 8px 40px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
