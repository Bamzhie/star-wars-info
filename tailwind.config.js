/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      xxl: "42rem",
      xxxl: "48rem",
      56: "56rem",
      64: "64rem",
      72: "72rem",
      80: "80rem",
      160: "160rem",
    },
  },
  plugins: [],
};
