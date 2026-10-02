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
          primary: '#f97316',
          secondary: '#ea580c',
          bright: '#f97316',
          deep: '#c2410c',
        },
        cream: {
          DEFAULT: '#ffedd5',
          soft: '#fed7aa',
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
