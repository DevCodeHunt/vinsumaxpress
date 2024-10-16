/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DA2C43",
        foreground: "#F3F3F3",
        background: "#0C0D0E",
        text: "#667085",
      },

      fontFamily: {
        aeonik: ["Aeonik", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
