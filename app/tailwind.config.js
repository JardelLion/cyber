/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}", "./js/**/*.{js}", "./src/**/*.{css}"],
  theme: {
    extend: {
      colors: {
        "brown-shop": "#211c24",
      },
      screens: {
        desktop: "900px",
        // => @media (min-width: 900px) { ... }
        
      },
    },
  },
  plugins: [],
};
