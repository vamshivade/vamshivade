/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          primary: '#FAB384',
          secondary: '#FC944C',
          bright: '#EF670F',
          deep: '#B44404',
        },
        cream: {
          DEFAULT: '#FBE4CC',
          soft: '#FCC499',
        },
        brown: {
          dark: '#4B1C04',
          DEFAULT: '#833506',
        },
        dark: {
          100: '#1C0C04',
          200: '#0D0907',
          300: '#080604',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
