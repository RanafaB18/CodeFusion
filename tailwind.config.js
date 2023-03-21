/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackish': '#1a202c',
        'blacklike': '#2d3748',
        'whitish': '#edf2f7',
        'blackhover': '#4A5567',
        'whitelike': '#E1E8F0',
        'whitehover': '#edf1f5',
        'activeblue': '#2e5c86',
        'orangish': '#ED8835',
        'grayish': '#A1AEBE',
        'bluish': '#4299e1',
        'yellowish': '#FEECC8',
      }
    },
  },
  plugins: [],
}
