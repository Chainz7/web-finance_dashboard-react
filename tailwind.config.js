/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(17,115,245)',
        'secondary': 'rgb(125, 188, 255)',
        'tertiary': 'rgb(194,45,87)',
        'bgPrimary': 'rgb(240,240,240)',
        'fontPrimary': 'rgb(255,255,255)',
        'fontSecondary': 'rgb(121,127,141)',
        'fontTertiary': 'rgb(0,0,0)',
        'iconPrimary': 'rgb(202,202,202)',
        'iconSecondary': '#E5ECFE',
        'iconTertiary': 'rgb(194,45,87, 0.2)',
        'cardPrimary': 'rgb(42,132,248)',
        'cardSecondary': 'rgb(64,210,233)',
      }
    },
  },
  plugins: [],
}
