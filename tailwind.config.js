/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': "#fbf6ef",
        'bg2': "#ead7c3",
        'dim': '#555555',
        'acc': '#f8d249'
      },
      fontFamily: {
        'nunito': ["Nunito", "system-ui", "sans-serif"]
      },
    },
  },
  plugins: [],
}

