/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#0a0a2b',
        'primary-white': '#ffffff',
        'dark-bg': '#1a1a2e',
        'gray-text': '#5b616b',
        'gray-light': '#d6d7d9',
        'accent-blue': '#0082d2',
        'accent-green': '#0d9246',
        'accent-yellow': '#8cc63f',
        'accent-red': '#bf1e2e',
      },
      fontSize: {
        'hero': 'clamp(2.8125rem, -2.2939rem + 8.5106vw, 7.8125rem)',
        'section': 'clamp(2.1875rem, 0.7813rem + 2.3438vw, 3.125rem)',
        'body': 'clamp(1.125rem, 0.5625rem + 0.9375vw, 1.5rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
