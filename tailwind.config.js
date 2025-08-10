/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary, #2563eb)',
        accent: 'var(--color-accent, #ef4444)',
        surface: 'var(--color-surface, #ffffff)'
      },
    },
  },
  plugins: [],
}; 