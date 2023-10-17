/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-focus": "#5c95c5",
        "blue-primary": "#00aee2",
        "blue-dx-theme": "#337ab7",
        "grey-ascent": "#d6d6d6",
        "dark-grey-secondary": "#22292f",
        "light-orange-s": "#fca61d",
        "tsw-disabled": "#c1c1c1",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
