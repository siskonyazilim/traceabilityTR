/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#0e1f4b',
        'primary-white': '#ffffff',
        'dark-bg': '#0a0a2b',
        'gray-text': '#335a7b',
        'gray-light': '#d6d7d9',
        'accent-blue': '#00b5f7',
        'secondary-blue': '#0019d2',
        'slate-blue': '#335a7b',
        'inactive-gray': '#5b6b80',
        'footer-text': '#222222',
        'accent-green': '#0d9246',
        'accent-yellow': '#8cc63f',
        'accent-red': '#bf1e2e',
      },
      fontSize: {
        'hero': 'clamp(2.25rem, 0.5rem + 4vw, 4rem)',
        'section': 'clamp(1.5rem, 0.8rem + 1.5vw, 2.25rem)',
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
