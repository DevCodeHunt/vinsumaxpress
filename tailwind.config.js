/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#206D69",
        foreground: "#F3F3F3",
        background: "#OCODOE",
        text: "#667O85",
      },

      fontFamily: {
        aeonik: ["Aeonik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
