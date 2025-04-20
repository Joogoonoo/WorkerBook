/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9ddfc',
          300: '#7cc2fb',
          400: '#36a9f8',
          500: '#0d8de9',
          600: '#0170cc',
          700: '#0158a6',
          800: '#014a89',
          900: '#063f72',
        },
      },
    },
  },
  plugins: [],
};
 
