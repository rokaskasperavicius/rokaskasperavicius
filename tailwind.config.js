/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#937666', // #ff5208 #432444 #B1A482
        accent: '#EFECE6',
        black: '#242424',
        white: '#fffdfc',
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
