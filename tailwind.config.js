import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import lineClamp from "@tailwindcss/line-clamp";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B98041", // Deeper warm orange
          light: "#F3E8DC", // Section bg / card bg
          background: "#FFFDF9", // Base page background
        },
        neutral: {
          DEFAULT: "#2F2F2F", // Main heading / dark text
          soft: "#5F5F5F", // Body text
          muted: "#9B9B9B", // Labels / subtext
          background: "#FAF9F6", // Light base fill
          border: "#E6E6E6", // Divider / input border
        },
        accent: {
          DEFAULT: "#7B9E6D", // Darker mint green
          light: "#A3C59F", // Optional for subtle backgrounds
        },
        ui: {
          tab: "#9F6B30", // Tab highlight line (darker orange)
          heading: "#6C3F1C", // Section header titles (deep earthy)
          icon: "#B98041", // Icons color (same as primary)
          highlight: "#F5E9D3", // Optional soft highlight bg
        },
        state: {
          success: "#4CAF50",
          error: "#E53935",
        },
      },
      fontFamily: {
        heading: ["Poppins", "var(--font-poppins)", "sans-serif"],
        body: ["Inter", "var(--font-inter)", "sans-serif"],
        sans: ["Poppins", "Inter", "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
        sinhala: [
          '"Noto Sans Sinhala"',
          '"Yaldevi"',
          '"Abhaya Libre"',
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.04)",
        glow: "0 0 12px rgba(108, 75, 58, 0.4)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(108, 75, 58, 0.5)" },
          "50%": { boxShadow: "0 0 8px 8px rgba(108, 75, 58, 0.1)" },
        },
        slideIn: {
          "0%": { transform: "translateY(10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        pulseGlow: "pulseGlow 2s infinite ease-in-out",
        slideIn: "slideIn 0.3s ease-out",
      },
    },
  },
  plugins: [forms, typography, aspectRatio, lineClamp],
};
