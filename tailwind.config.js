/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // for App Router support
    './pages/**/*.{js,ts,jsx,tsx}', // if you have pages directory
    './components/**/*.{js,ts,jsx,tsx}', // for components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}