/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      },
      colors: {
        'clr-pry': 'rgba(var(--clr-pry))',
        'clr-pry-400': 'rgba(var(--clr-pry-400))',
        'clr-pry-500': 'rgba(var(--clr-pry-500))',
        'clr-pry-l': 'rgba(var(--clr-pry-light))',
        'clr-pry-dark': 'rgba(var(--clr-pry-dark))',
        'clr-text-pry': 'rgba(var(--clr-text-pry))',
        'clr-text-grey': 'rgba(var(--clr-text-grey))',
        'clr-text-dark': 'rgba(var(--clr-text-dark))',
        'clr-card-bg': 'rgba(var(--clr-card-bg))',
        'clr-border': 'rgba(var(--clr-border))',
        'clr-shadow': 'rgba(var(--clr-shadow))',
        'clr-dark': 'rgba(var(--clr-dark))',
        'clr-white': 'rgba(var(--clr-white))',
        'clr-bg': 'rgba(var(--clr-bg))',
      },
      animation: {
        'move': 'move 10s ease-in-out infinite alternate'
      },
      keyframes: {
        move: {
          '25%': { transform: 'translateY(-50px)'},
          '50%': { transform: 'translateY(-100px)'},
          '75%': { transform: 'translateY(-150px)'},
          '100%': { transform: 'translateY(-200px)'},
        }
      }
    },
  },
  plugins: [],
}