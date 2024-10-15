/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customstag: "#364037",
        customcream: "#c3c9a1",
        customcreamd: "#aab37d"
      }
    },
  },
  plugins: [],
}