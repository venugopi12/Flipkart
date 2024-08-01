/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'phone':{'min': '320px', 'max': '430px'}
      }
    },
  },
  plugins: [],
}

