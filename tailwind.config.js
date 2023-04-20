/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: "slide 0.5s ease-in-out",
        hamburgerAdjustRight: "hamburgerAdjustRight 0.375s ease-in-out",
        hamburgerAdjustLeft: "hamburgerAdjustLeft 0.375s ease-in-out"
      },
      keyframes: {
        slide: {
          "0%, 100%": {
            transform: "translateY(-400%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        hamburgerAdjustRight: {
          "0%, 100%": {
            transform: "translateX(-15%)",
          },
          "100%": {
            transform: "translateX(0)"
          }
        },
        hamburgerAdjustLeft: {
          "0%, 100%": {
            transform: "translateX(15%)",
          },
          "100%": {
            transform: "translateX(0)"
          }
        },
      },
    },
  },
  plugins: [],
}
