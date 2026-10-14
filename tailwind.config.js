/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
      },
      colors: {
        'forest-green': '#183D2B',
        'forest-dark': '#10291E',
        'warm-ivory': '#F8F6F0',
        'sand-beige': '#E8DFCF',
        'muted-gold': '#B99A62',
        'gold-light': '#D4BA88',
        'dark-charcoal': '#252923',
        'cream-light': '#FCFBF8',
        'emerald-accent': '#23533B',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(16, 41, 30, 0.08)',
        'luxury-hover': '0 25px 50px -12px rgba(16, 41, 30, 0.16)',
        'elevated': '0 10px 30px -10px rgba(24, 61, 43, 0.12)',
      }
    },
  },
  plugins: [],
}
