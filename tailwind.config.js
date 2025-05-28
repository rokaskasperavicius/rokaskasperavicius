/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#937666',
          600: '#EFECE6',
          700: '#F9F7F5',
        }, // #ff5208 #432444 #B1A482
        black: '#242424',
        white: '#FFFDFC',
        linkedin: '#0B66C2',
      },
      animation: {
        'full-pulse': 'full-pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'full-pulse': {
          '50%': { opacity: '0' },
        },
      },
      fontFamily: {
        pangolin: ['Pangolin', 'cursive'],
      },
    },
  },
  plugins: [],
}
