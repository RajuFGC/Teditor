/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      'dragonball': '#34321'
    },
    fonrFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
    }
  },
},
  plugins: [],
  safelist: ['text-red-500', 'text-blue-500','text-green-500']
}