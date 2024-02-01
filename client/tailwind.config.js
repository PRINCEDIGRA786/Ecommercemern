/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Mono: 'Rubik Moonrocks'
      },
      screens: {
        fold: { 'min': '250px', 'max': '340px' },
        folld: { 'min': '341px', 'max': '639px' }
      }
    },
  },
  plugins: [],
  darkMode: "class"
}