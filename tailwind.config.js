/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {

    },
    colors: {
      'primary--theme': '#FEFBF6',
      'secondary--theme': '#A6D1E6', 
      'ternary--theme': '#7F5283', 
      'quaternary--theme': '#3D3C42', 
    },
    screens: {
      '2xl': {'max': '1919px'},
      'xl': {'max': '1023px'},
      'lg': {'max': '767px'},
      'md': {'max': '539px'},
      'sm': {'max': '360px'},
      'xm': {'max': '320px'},
    },
  },
  plugins: [],
}
