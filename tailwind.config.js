module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'main': 'Open Sans'
      },
      fontSize: {
        '3.5xl': '2rem',
        '4.5xl': '2.5rem',
        '5.5xl': '3.5rem',
        '7xl': '5rem',
        '7.5xl': '5.5rem',
        'max': '7.5rem'
      },
      colors: {
        'cherry': '#F15853',
        'darkgreen': '#899A76',
        'lightcherry': '#F8EEEC',
        'lime': '#AAAB5F',
        'lightblack': '#333333'
      },
      backgroundImage: theme => ({
        'fruits': "url('/pennyjuice/fruits.jpg')",
        'drinks': "url('/pennyjuice/drinks-line.jpg')",
        'drinks-screen': "url('/pennyjuice/drinks-line-screen.jpg')",
        'drinks-xs': "url('/pennyjuice/drinks-line-xs.jpg')",
        'drinks-sm': "url('/pennyjuice/drinks-line-sm.jpg')",
        'drinks-md': "url('/pennyjuice/drinks-line-md.jpg')",
        'drinks-lg': "url('/pennyjuice/drinks-line-lg.jpg')"
      }),
      padding: {
        '1.75': '.4375rem',
        '5.5': '1.35rem',
        '6.5': '1.575rem'
      },
      height: {
        'mobile': '50.75rem',
        'desktop': '48rem',
        'wide': '64rem',
        'widescreen': '67.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
