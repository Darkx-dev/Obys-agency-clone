/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        loaderBlack: "#0B0B0B",
        mainBlack: "#151515",
        orangePulp: "#FFA63D",
      },
    },
  },
  plugins: [],
};
