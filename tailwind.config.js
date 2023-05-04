module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
    theme: {
      extend: {
        dropShadow:{
          'myShadow': '0 0 25px #fff'
        },
        colors: {
          'richBlack': '#1D1D1D',
          'richWhite': '#CCCCCC',
          'richGray': '#434343'
        }
      },
    },
    plugins: [],
  }