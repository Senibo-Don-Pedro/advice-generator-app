/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    extend: {
      colors: {
        QLightCyan: ['hsl(193, 38%, 86%)'],
        QNeonGreen: ['hsl(150, 100%, 66%)'],
        QGrayishBlue: ['hsl(217, 19%, 38%)'],
        QDarkGreyishBlue: ['hsl(217, 19%, 24%)'],
        QDarkBlue: ['hsl(218, 23%, 16%)'],
      },
    },
  },
  plugins: [],
}
