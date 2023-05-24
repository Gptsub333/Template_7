/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#162228',
        'yellow': '#DAFB7E',
        'green': {
          100: '#1C2D35',
          200: '#2D4754',
        },
      },
      fontSize: {
        'h2': '2.2rem',
      }
    },
  },
  plugins: [],
}

