/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      "@import": "./src/style/particles.css",
    },
    fontFamily: {
      monument: "Monument",
    },
    colors: {
      "dark-pink": "#5f43b2",
      "dark-purple": "#3a3153",
      "dark-blue": "#151666",
    },
  },
  plugins: [],
};
