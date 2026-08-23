/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        heading: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        jute: {
          50: '#FAF6F0',
          100: '#F4ECE1',
          200: '#E8D8C3',
          300: '#D8BF9A',
          400: '#C59B27',
          500: '#B8860B',
          600: '#996515',
          700: '#7E4E11',
          800: '#5C370C',
          900: '#3D2305',
          light: '#D4A373',
          DEFAULT: '#C59B27',
          dark: '#7E4E11',
        },
        forest: {
          50: '#F2F7F4',
          100: '#DDEAE2',
          200: '#BDD6C6',
          500: '#3D7A5C',
          600: '#2E5A44',
          700: '#234635',
          800: '#1B3B2B',
          900: '#0E261B',
          950: '#081710',
        },
        brand: {
          navy: '#0E261B',      // Deep Forest Emerald replacing cold navy
          emerald: '#1B3B2B',   // Lush Eco Green
          chalk: '#FAF6F0',     // Natural Linen Ivory
          gold: '#C59B27',      // Warm Hessian Gold
          bark: '#2C1E14',      // Deep Wood Bark
        }
      },
      boxShadow: {
        'jute': '0 10px 30px -5px rgba(184, 134, 11, 0.15)',
        'forest': '0 10px 30px -5px rgba(14, 38, 27, 0.25)',
        'glow': '0 0 25px rgba(197, 155, 39, 0.35)',
      },
      backgroundImage: {
        'jute-pattern': 'linear-gradient(to right bottom, #0E261B, #1B3B2B, #2C1E14)',
        'jute-card': 'linear-gradient(135deg, #FFFFFF 0%, #FAF6F0 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C59B27 0%, #996515 100%)',
      }
    },
  },
  plugins: [],
}
