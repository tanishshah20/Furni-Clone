/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter:["Inter", "sans-serif"],
      },
      colors: {
        deepgreen: "#3B5D50",
        fadegreen: "#899E96",
        orangeyellow: "#F9BF29",
        fadeblue: "#DCE5E4",
        fadewhite: "#EFF2F1",
        lightwhite: "#9CADA6",
      },
    },
  },
  plugins: [],
}

