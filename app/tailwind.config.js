/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{html,js,css}",
    "./src/**/*.css",
    "./pages/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "brown-shop": "#211c24",
      },
      screens: {
        desktop: "900px",
        // => @media (min-width: 900px) { ... }

        maxMobile: {'max': "768px" },
        // => @media (max-width: 768px) {...}
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};


 