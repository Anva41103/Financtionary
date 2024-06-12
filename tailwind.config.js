/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#feb8c5',
          darkpink: '#fb6f92',
          purple: '#caa0e3',
          blue: '#a2cffe',
          green: '#b0f2b6',
          yellow: '#ffffb3',
          orange: '#ffd8b1',
          teal: '#a5cbc6',
          darkteal: '#58abae',
          xteal: '#014d4e',
        }
      },
      width: {
        '128': '32rem',
        '75' : '18.75rem',
      },
      height:{
        '144' : '36rem',
      },
    },
  },
  plugins: [],
}

