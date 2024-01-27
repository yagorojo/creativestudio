/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': "#f9f6f1",
        'bg2': "#efece8",
        'dim': '#555555',
        'acc': '#60C7F5'
      },
      fontFamily: {
        'nunito': ["Nunito", "system-ui", "sans-serif"]
      },
    },
  },
  plugins: [],
}

