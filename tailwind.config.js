module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/18': '5.5555555%',
        '3/18': '16.6666667%',
        '14/18': '77.7777778%',
        '4/5': '80%',
      },
      colors: {
        'button-color': '#25D366',
        'group-color': '#075E54',
        'background-color': '#128C7E',
        'secondtext-color': '#F4ECEC'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
