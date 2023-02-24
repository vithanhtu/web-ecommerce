/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        smallTablet: "600px",
        iphone5: "320px",
      },
      spacing: {
        ml15: "15%",
      },
    },
  },
  plugins: [],
};
