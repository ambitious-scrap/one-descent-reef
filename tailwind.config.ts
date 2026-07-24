import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        abyss: "#061C2D",
        deep: "#0B3A52",
        teal: "#157E88",
        seaglass: "#8BD7CF",
        surface: "#F4E9CF",
        coral: "#ED725C",
        amber: "#E8A94E",
        violet: "#8A5FA8",
        green: "#4DAA82",
        gold: "#F2C14E",
        shell: "#D9D2BF",
        ash: "#9AA3A4",
        paper: "#F5FAF8",
        milky: "#557C86",
      },
      fontFamily: {
        serif: ["Georgia", "'Source Serif 4'", "serif"],
        sans: ["Inter", "'Helvetica Neue'", "Arial", "sans-serif"],
      },
      maxWidth: {
        prose: "34rem",
      },
    },
  },
  plugins: [],
};

export default config;
