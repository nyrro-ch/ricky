module.exports = {
  purge: {
    enabled: true,
    content: [
      "./index.pug",
      "./views/**/*.html",
      "./views/**/*.pug",
      "./partials/**/*.html",
      "./partials/**/*.pug",
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['NeueMontreal-Regular', 'Roboto', 'Arial']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
