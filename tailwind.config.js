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
      },
      colors: {
        background: '#050811',
        foreground: '#e2e8f0',
        primary: {
          DEFAULT: '#00FF66',
          foreground: '#000000',
        },
        destructive: {
          DEFAULT: '#FF3E55',
          foreground: '#ffffff',
        },
        card: {
          DEFAULT: 'rgba(10, 15, 30, 0.7)',
          foreground: '#e2e8f0',
        },
        border: 'rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
}
