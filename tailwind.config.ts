import { plugin } from "postcss";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1A79CB",
        secondary: "#2BCB69",
        primaryBlue: "#096982",
        primaryYellow: "#fe8f01",
        primaryBg: "#f5f5f5"
      },
      fontFamily: {
        roboto: 'Roboto, sans-serif',
        rubik: 'Rubik, Roboto, sans-serif',
        breeSerif: "bree serif",
        nunito: "Nunito, sans-serif"
      }
    },
  },
  plugins: [],
} satisfies Config;
