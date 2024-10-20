/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customstag: "#4C4C44",
        customcream: "#D4C7B4",
        // customcreamd: "#d3c1a7"
        customcreamd: "#d8c1a0"
      }
    },
  },
  plugins: [],
}