/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './main.jsx'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'cursive': "Dancing Script", 
        'curved': "Oswald",
      },
      backgroundColor: {
        'dark': '#030637',
        'dark-2': '#070f2b',
        'light': '#f1eaff',
        'light-2': '#F7FFE5',
        'gold': '#F39F5A',
        'footer-light': '#3C0753',
        'footer-dark': '#E5D4FF'
      },
      width: {
        'logo': '6rem',
        'input': '30vw',
        'full': '100%',
        'twice': '200%',
        'footer': '35vw',
        'display': '60vw',
        'feature': '80vw',
        'half': '50%',
      },
      height: {
        'logo': '3rem',
        'full': '100%',
        'screen': '100vh',
        'footer': '50vh',
        'display': '50rem',
        'grid': '55vh',
      },
      textColor: {
        'light': '#030637',
        'light-2': '#070f2b',
        'dark': '#f1eaff',
        'dark-2': '#F7FFE5',
        'gold': '#F39F5A'
      },
      boxShadow: {
        '3xl': 'inset 6px 34px 30px -21px rgba(176,136,227,0.75)',
      },
      margin: {
        'minus': '-8rem',
      },
      top: {
        'top': '60vh',
      },
      left: {
        'left': '45vw'
      }
    },
  },
  plugins: [],
}