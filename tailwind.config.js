/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "740px",
        md: "950px",
        lg: "1125px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
