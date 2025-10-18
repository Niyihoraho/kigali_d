import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#d9534f',
          hover: '#c9302c',
        },
        secondary: {
          DEFAULT: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
  // Performance optimizations
  corePlugins: {
    preflight: true,
  },
  // Reduce CSS bundle size
  safelist: [],
  // Enable JIT mode for faster builds
  mode: 'jit',
}

export default config
