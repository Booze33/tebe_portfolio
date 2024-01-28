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
      spacing: {
        'top': '-0.5rem',
        'left': '0',
      },
      backgroundColor: {
        'dark': '#030637',
        'dark-2': '#1B1A55',
        'light': '#f1eaff',
        'light-2': '#FFF0F5',
        'gold': '#F39F5A',
        'collab': '#CD104D',
        'footer-light': '#3C0753',
        'footer-dark': '#E5D4FF'
      },
      width: {
        'logo': '6rem',
        'img': '7rem',
        'img2': '10rem',
        'svg': '25vw',
        'input': '50vw',
        'full': '100%',
        'nine': '90%',
        'twice': '200%',
        'footer': '35vw',
        'small': '37vw',
        'display': '60vw',
        'large': '90vw',
        'image': '78vw',
        'feature': '80vw',
        'half': '50%',
      },
      height: {
        'logo': '3rem',
        'img': '6rem',
        'img2': '9rem',
        'svg': '10vw',
        'full': '100%',
        'screen': '100vh',
        'footer': '50vh',
        'large': '65vh',
        'tiny': '35vh',
        'small': '45vh',
        'display': '50rem',
        'grid': '55vh',
      },
      textColor: {
        'light': '#030637',
        'light-2': '#070f2b',
        'dark': '#f1eaff',
        'dark-2': '#F7FFE5',
        'gold': '#F39F5A',
        'collab': '#CD104D',
        'both': '#9290C3'
      },
      boxShadow: {
        '3xl': 'inset 6px 34px 30px -21px rgba(176,136,227,0.75)',
      },
      margin: {
        'minus': '-8rem',
        'minus2': '-2rem',
        'ball': '-20vw',
        'shift': '25vw',
        'flex': '15vw',
        'flex2': '13vw',
        'left': '5vw',
      },
      padding: {
        'side': '15vw'
      },
      borderRadius: {
        'top': '55px',
      },
      fontSize: {
        'sm': '0.8rem',
        'xl': '1.25rem',
      }
    },
  },
  plugins: [],
}