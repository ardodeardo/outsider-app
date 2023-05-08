/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#FFFFFF',
          secondary: '#F5F5F5'
        },
        blue: {
          primary: '#096FFA',
          secondary: '#5B9DF6'
        },
        grey: {
          primary: '#8D8D94',
          surface: '#F8F9F9',
          thin: '#EDEDED',
          darken: '#6D787A',
        },
        yellow: {
          sunny: '#FFE600'
        }
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}

