const { screens } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: true,
    content: [
      "./index.pug",
      "./views/**/*.html",
      "./views/**/*.pug",
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['NeueMontreal-Regular', 'Roboto', 'Arial'],
      'serif': ['GalleryModern']
    },
    screens: {
      'xs': '425px',
      ...screens
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
