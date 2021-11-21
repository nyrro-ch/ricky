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
      fontSize: {
        '11.5': '2.875rem',
        '13.8': '3.45rem'
      },
      maxWidth: {
        'text': '950px',
        '2-col': '303px'
      },
      margin: {
        '19.25': '4.8125rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '58': '14.5rem'
      },
      padding: {
        '21': '5.25rem'
      },
      colors: {
        grey: {
          DEFAULT: '#757575'
        },
        red: {
          DEFAULT: '#E53935'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
