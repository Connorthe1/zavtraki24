/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Mono'],
        bellota: ['Bellota Text']
      },
      maxWidth: {
        default: '1440px'
      }
    },
  },
  plugins: [],
}

