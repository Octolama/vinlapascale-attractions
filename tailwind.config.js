/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vinlapascale color palette
        primary: {
          50: '#fdf4e0',
          100: '#f8e7c3',
          200: '#f0d19f',
          300: '#e8bb7b',
          400: '#e0a557',
          500: '#d89033', // Main brand color
          600: '#c07a28',
          700: '#a8641d',
          800: '#904e12',
          900: '#783807',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        accent: {
          wine: '#722f37',
          olive: '#6b7f39',
          earth: '#8b7355',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
