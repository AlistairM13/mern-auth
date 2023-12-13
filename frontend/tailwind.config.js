const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        "open-sans": ['"Open Sans"', ...defaultTheme.fontFamily.serif]
      },
      backgroundImage: {
        "cucumber": "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
        "disco": "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);",
      }
    },
  },
  plugins: [],
}