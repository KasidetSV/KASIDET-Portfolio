/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        background: '#060608',
        foreground: '#e2e8f0',
        coral: '#cc785c',
        amber: '#e8a55a',
        purple: '#9a528e',
        primary: {
          DEFAULT: '#e8a55a', // Sunset Amber as new primary brand voltage
          foreground: '#000000',
        },
        destructive: {
          DEFAULT: '#FF3E55',
          foreground: '#ffffff',
        },
        card: {
          DEFAULT: 'rgba(11, 14, 20, 0.75)',
          foreground: '#e2e8f0',
        },
        border: 'rgba(255, 255, 255, 0.06)',
      },
    },
  },
  plugins: [],
}
