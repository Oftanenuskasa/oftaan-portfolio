/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        move: 'move 5s linear infinite', // Add the custom animation
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' }, // Move 10px to the right
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

