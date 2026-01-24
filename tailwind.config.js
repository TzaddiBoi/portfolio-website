/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-teal': '#0B4F49',
        'bright-teal': '#0C9A90',
        'dark-bg': '#1E1E1E',
        'darker-bg': '#161616',
        'darkest-bg': '#0a0a0a',
        'light-gray': '#B9BCBC',
        'medium-gray': '#626363',
        'dark-gray': '#434444',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}