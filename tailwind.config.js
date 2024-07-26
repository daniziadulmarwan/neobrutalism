/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFF5F0",
          200: "#FFEFE5",
          300: "#FFDECC",
          400: "#FFBE99",
          500: "#FFAE80",
          600: "#FF8D4D",
        },
        secondary: {
          400: "#333333",
          500: "#1A1A1A",
          600: "#262626",
        },
      },
      fontFamily: {
        raleway: "Raleway",
      },
      spacing: {
        13: "50px",
        13.5: "60px",
        15: "100px",
        17: "200px",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
