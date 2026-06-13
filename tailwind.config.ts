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
        primary: {
          DEFAULT: "#1F6F78",
          dark: "#165E66",
          light: "#2A9AA6",
          50: "#E8F4F5",
          100: "#C5E4E7",
        },
        accent: {
          DEFAULT: "#EE6C4D",
          dark: "#D4593C",
          light: "#F28B70",
          50: "#FEF0EC",
        },
        surface: "#FFFFFF",
        bg: "#F4F5F6",
        muted: "#6B7280",
        border: "#E2E4E6",
        text: {
          DEFAULT: "#0F1F2E",
          secondary: "#2D3F50",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-lg": ["2.75rem", { lineHeight: "1.15", fontWeight: "700" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],
        "display-sm": ["1.75rem", { lineHeight: "1.3", fontWeight: "600" }],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0F1F2E 0%, #1F6F78 100%)",
        "hero-gradient-soft": "linear-gradient(135deg, #0a1a27 0%, #1F6F78 70%, #165E66 100%)",
        "accent-gradient": "linear-gradient(135deg, #EE6C4D 0%, #D4593C 100%)",
        "card-gradient": "linear-gradient(135deg, #E8F4F5 0%, #FEF0EC 100%)",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 10px 25px -5px rgba(31, 111, 120, 0.18), 0 4px 6px -2px rgba(31, 111, 120, 0.08)",
        cta: "0 4px 14px 0 rgba(31, 111, 120, 0.4)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
