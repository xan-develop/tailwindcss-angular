/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'rojo-fresa': '#DC2A20',
      },
      spacing:{
        '50': '50%',
      }
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px'

    }
  },
  plugins: [],
}

