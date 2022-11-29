/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  daisyui: {
    themes: [
      {
        furnituretheme: {
          primary: '#8e44ad',
          secondary: '#c2080f',
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF"
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
