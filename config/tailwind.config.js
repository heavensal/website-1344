const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    fontFamily: {
      main: ['Quicksand', 'sans-serif']
    },
    extend: {
      colors: {
        '1344darkblue': '#09002E',
        '1344darkpurple': '#2F1140',
        '1344blue': '#2575FC',
        '1344purple': '#7D2DAB',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
