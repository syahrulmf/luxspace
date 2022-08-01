/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      ...colors,
      pink: { ...colors.pink, 400: "#F9CADA" },
      blue: { ...colors.blue, 200: "#BCE7F0" },
    },
    fontFamily: {
      sans: ["'Open Sans', sans-serif"],
    },
    extend: {
      opacity: {
        35: "0.35",
      },
      spacing: {
        88: "22rem",
      },
    },
  },
  plugins: [],
};
