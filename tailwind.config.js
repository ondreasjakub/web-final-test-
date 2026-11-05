/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alpine: {
          50: '#F5F7F5',
          100: '#EAECE9',
          200: '#D5DAD4',
          300: '#B0BDB0',
          400: '#7B947E',
          500: '#4D6B51',
          600: '#3D5641',
          700: '#2F4332',
          800: '#233226',
          900: '#18231A',
          950: '#0E150F',
        },
        slateDark: '#12161A',
        charcoal: '#1A1E22',
        surface: '#222830',
        cream: '#FDFCFA',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
