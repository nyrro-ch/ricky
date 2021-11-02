module.exports = {
  purge: {
    enabled: true,
    content: [
      "./views/**/*.html",
      "./views/**/*.pug",
      "./partials/**/*.html",
      "./partials/**/*.pug",
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
