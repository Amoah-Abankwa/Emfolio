/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0C',
        charcoal: '#1C1C1E',
        yellow: {
          DEFAULT: '#F5C518',
          dim: '#C9A30F',
        },
        paper: {
          DEFAULT: '#F7F5F0',
          dim: '#EDEAE1',
        },
        gray: {
          DEFAULT: '#6B6B6E',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      backgroundImage: {
        hazard: 'repeating-linear-gradient(-45deg, #F5C518, #F5C518 14px, #0B0B0C 14px, #0B0B0C 28px)',
        'hazard-sm': 'repeating-linear-gradient(-45deg, #F5C518, #F5C518 8px, #0B0B0C 8px, #0B0B0C 16px)',
      },
    },
  },
  plugins: [],
};