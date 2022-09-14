/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        "game-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 68%);",
        "nlw-gradient":
          "linear-gradient(90deg, #9572FC 0%, #43E7AD 45%, #E1D55D 96%);",
      },
    },
  },
  plugins: [],
};
