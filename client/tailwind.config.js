/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        bgcolor:"#222f3e",
        primary : "#008080",
      },
    },
  },
  plugins: [],
}

