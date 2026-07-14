/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Ativa o dark mode por classe no HTML
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#f97316', 
          brown: '#7c2d12',
        }
      }
    },
  },
  plugins: [],
}