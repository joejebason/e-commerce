/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "grey-100":"#CECECE",
        "grey-300":"#333333",
        "yellow-500":"#FEBD00",
        "grey-900":"#999999",
        "dark-grey":"#33312E",
        "black-500":"#161616",
        "dark-purple":"#33106D",
      },
    },
  },
  plugins: [],
}
