module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mobiles': '375px',
        'tablet': '768px',
        'desktop': '1280px',
        'xxl': '1536px'
      },
      fontFamily: {
        'main': 'Open Sans',
        'raleway': 'Raleway',
        'roboto': 'Roboto',
        'sofia': 'sofia-pro'
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
        'darkseagreen': '#7DA394',
        'lightcherry': '#F8EEEC',
        'lime': '#AAAB5F',
        'lightblack': '#333333',
        'lightersalmon': '#fff5f0',
        'lightyellow': '#fffef0',
        'redviolet': '#BC6173',
        'darkblue': '#1F3075',
        'brightorange': '#ec5e04',
        'bluegray': '#88B3C6',
        'lightgray': '#f5f5f5',
        'offwhite': '#fafafa',
        'whitish': '#FCFCFC',
        'zomp': '#459988',
        'sushi': '#99AA3A',
        'fallgreen': '#DBE6B1',
        'alto': '#dedede',
        'silverchalice': '#aaaaaa'
      },
      backgroundImage: theme => ({
        'fruits': "url('/pennyjuice/fruits.jpg')",
        'drinks': "url('/pennyjuice/drinks-line.jpg')",
        'drinks-screen': "url('/pennyjuice/drinks-line-screen.jpg')",
        'drinks-xs': "url('/pennyjuice/drinks-line-xs.jpg')",
        'drinks-sm': "url('/pennyjuice/drinks-line-sm.jpg')",
        'drinks-md': "url('/pennyjuice/drinks-line-md.jpg')",
        'drinks-lg': "url('/pennyjuice/drinks-line-lg.jpg')",
        'main': "url('/mgdb/bg-main.svg')",
        'main-lg': "url('/mgdb/bg-main-lg.svg')",
        'beachfront': "url('/paradisewithaview/beachfront.jpg')",
        // Gates N Fences
        'welder-xs': "url('/gatesnfences/main-bg-mobile.jpg')",
        'main-gate-xs': "url(/gatesnfences/category-bg-mobile.jpg)",
        'footer-bg': "url(/gatesnfences/footer-bg.jpg)"
      }),
      padding: {
        '1.75': '.4375rem',
        '5.5': '1.35rem',
        '6.5': '1.575rem',
        '35': '8.375rem'
      },
      width: {
        '35': '8.6875rem',
        '74': '18.5rem'
      },
      height: {
        '49': '12.3125rem',
        'mobile': '50.75rem',
        'desktop': '48rem',
        'wide': '64rem',
        'widescreen': '67.5rem',
      },
      gridTemplateColumns: {
        'cards': '50% minmax(144px, 1fr)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
