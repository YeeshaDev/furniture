/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        tertiary: "#000000",
      },
      fontFamily: {
        playwrite: ["Playwrite US Trad", "cursive"],
      },
    },
  },
  plugins: [],
}