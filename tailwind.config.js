const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FAF7F4',
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
