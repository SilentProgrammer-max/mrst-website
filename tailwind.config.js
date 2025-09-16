/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // <- yahan apni files ka path zaroor do
  theme: {
    extend: {
      keyframes: {
        'slow-bounce': {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'bounce-slow': 'slow-bounce 3s infinite', // thoda aur slow
      },
    },
  },
  plugins: [],
}