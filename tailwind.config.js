/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#C47D9D',
        primarySoft: '#F5DCE7',
        gold: '#C9A66B',
        background: '#FFF9FB',
        textPrimary: '#4B2E3A',
        textMuted: '#8A6B78',
      },
    },
  },
  plugins: [],
};
