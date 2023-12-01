/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orangePrimary': '#F9690E',
        'bluePrimary': '#013243',
        'darkerGrey': '#C7D1D8',
        'lightGrey': '#F4F6F8',
        'veryLightOrange': '#F3E6A5',
        'lightBlack': '#333F48'
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    fontWeight: {
      'extra-light': 100,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'bold': 700,
      'extra-bold': 800,
      'black': 900,
    }
  },
  plugins: [],
}