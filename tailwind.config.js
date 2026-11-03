/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0b1a30",
          900: "#071223",
          800: "#0b1a30",
          700: "#13294a",
          600: "#1d3a63",
        },
        gold: {
          DEFAULT: "#b88a2e",
          light: "#d4a84a",
          soft: "#f6ecd6",
        },
        ink: "#1a2b45",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(11, 26, 48, 0.12)",
      },
    },
  },
  plugins: [],
};
