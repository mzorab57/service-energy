// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        primary: '#3765B5', // Your primary color
        primaryLighter: '#648CC4', // Your primary color
        secondary: '#6EB530', // Your secondary color
      },
    },
  },
  plugins: [],
}
