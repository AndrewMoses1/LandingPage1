/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      custom: ['Archivo', 'sans-serif',
               'Bitter', 'serif',
               'Poppins', 'sans-serif',
      ],
    },
    screens: {
      'xs': '375px',
      'sm': '520px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1470px',
      '3xl': '1640px',
      '4xl': '1900px',
      '5xl': '2200px',
    },
    extend: {},
  },
  plugins: [],
}