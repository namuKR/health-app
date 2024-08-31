/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/AboutMe.js",
  ],
  theme: {
    extend: {},
  },
  plugins: ["./src/AboutMe.js"],
  corePlugins: {
    preflight: false,
  }
}