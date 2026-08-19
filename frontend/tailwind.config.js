/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jute: {
          light: '#D4A373',
          DEFAULT: '#C59B27', // Jute Warm Gold
          dark: '#8B5E3C',    // Warm Hessian
          50: '#FDFBF7',
          100: '#F7F2E7',
          500: '#C59B27',
          600: '#A67C1E',
          700: '#835E17',
          800: '#6C4E13',
        },
        brand: {
          navy: '#1A365D',    // Industrial Navy
          emerald: '#0F2C23', // Forest Emerald
          chalk: '#F8F9FA',   // Clean Chalk
        },
        navy: {
          800: '#162C3D',
          900: '#0F2C23',
          950: '#0B1E18',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Playfair Display', 'Plus Jakarta Sans', 'serif'],
      },
    },
  },
  plugins: [],
}
