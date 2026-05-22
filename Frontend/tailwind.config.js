/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-800': '#1f4d42',
      },
      fontFamily: {
        'londrina': ['"Londrina Solid"', 'cursive'],
        'special-elite': ['"Special Elite"', 'cursive'],
        'oi': ['"Oi"', 'cursive'],
        'sans': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

