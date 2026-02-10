/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        // LIC Manhattan View Eco-Hotel branding (green / cream) – warm, bright Hyatt-inspired palette
        brand: {
          green: '#2d5a3d',
          'green-light': '#4a7c59',
          'green-dark': '#1e3c2a',
          cream: '#f8f6f2',
          'cream-warm': '#f5f2eb',
          charcoal: '#1a2e1f',
          'cream-dark': '#ebe8e2',
          ivory: '#faf9f6',
        },
      },
      boxShadow: {
        'soft': '0 4px 24px -4px rgba(0, 0, 0, 0.06), 0 8px 48px -8px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.08), 0 20px 60px -20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
