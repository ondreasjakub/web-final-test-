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
        carbon: {
          950: '#07080A',
          900: '#0C0E12',
          850: '#11141A',
          800: '#161A22',
          700: '#1F242F',
          600: '#2A313E',
          500: '#3D4556',
        },
        stoneLight: {
          50: '#F9F9F7',
          100: '#F4F3EF',
          200: '#EAE8E2',
          300: '#D5D3CB',
          400: '#A8A69E',
        },
        alpine: {
          950: '#08120B',
          900: '#0E1D13',
          800: '#172E1F',
          700: '#22422C',
          600: '#2E593C',
          500: '#3D734E',
          400: '#529668',
          300: '#79B78D',
        },
        goldAccent: {
          DEFAULT: '#C9A265',
          light: '#DFBE85',
          dark: '#A68045',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'Cambria', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
        superwide: '0.25em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
