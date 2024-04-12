/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: '#00a6fb',
      secondary: '#e16f7c',
      accentwhite: '#FCFBFC',
      accentblack: '#111827',
      base10: '#F8F8F8',
      black: '#2e3138',
      extra1: '#aad922',
      extra2: '#ff9f1c'
    },
    
    extend: {},
    fontFamily:{
      Rale: ["Raleway", "sans-serif"],
      Noto: ["Noto Serif", "serif"]
    }
  },
  plugins: [],
}


