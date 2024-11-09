/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      animation: {
        'rotate-gradient': 'rotate-gradient 5s linear infinite',
        },
      },
      keyframes: {
        'rotate-gradient': {
          from: {
            transform: 'rotate(0deg) scale(1.5)'
          },
          to: {
            transform: 'rotate(360deg) scale(1.5)'
          }
        },
      },
    },
  plugins: [
    require('tailwindcss-animated')
  ],
}

