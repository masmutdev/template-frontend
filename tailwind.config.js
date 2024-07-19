/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './components/**/*.html'
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '450px',
      },
    },
  },
  plugins: [],
}