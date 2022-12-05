// eslint-disable-next-line no-undef
const config = require('tailwindcss/defaultTheme')

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Jost, sans-serif',
        serif: 'Lora, serif',
      },
      colors: {
        gray: {
          ...config.colors.gray,
          50: '#E6E6E6',
          200: '#F4F4F4',
          300: '#F6F7F8',
          400: '#727272',
          500: '#919BAA',
          700: '#989898',
          900: '#0C0C0C',
        },
        green: {
          ...config.colors.green,
          500: '#0AC958',
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-bootstrap-grid')({
      gridGutterWidth: '32px',
      containerMaxWidths: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    }),
    // eslint-disable-next-line no-undef
    require('tailwindcss-debug-screens'),
  ],
}
