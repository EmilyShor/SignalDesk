import type { Config } from 'tailwindcss'
import path from 'node:path'

const { heroui } = require("@heroui/react");
// Resolve the theme through React so this also works with pnpm's isolated layout.
const heroTheme = path.dirname(require.resolve('@heroui/theme', {
  paths: [require.resolve('@heroui/react')],
}));

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    path.join(heroTheme, '**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        ink: '#2a1d37',
        canvas: '#f8f6fb',
        mint: '#c9f3dc',
        brand: {
          50: '#f3eefb', 100: '#e9def7', 200: '#d6bfef',
          300: '#bda0e0', 400: '#a17bce', 500: '#8660bd',
          600: '#7046a5', 700: '#5d358b', 800: '#4b2d70', 900: '#2a1d37',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          background: '#f8f6fb',
          foreground: '#2a1d37',
          primary: {
            50: '#f3eefb', 100: '#e9def7', 200: '#d6bfef',
            300: '#bda0e0', 400: '#a17bce', 500: '#8660bd',
            600: '#7046a5', 700: '#5d358b', 800: '#4b2d70', 900: '#2a1d37',
            DEFAULT: '#7046a5', foreground: '#ffffff',
          },
          success: { DEFAULT: '#23734d', foreground: '#ffffff' },
        },
      },
    },
  })],
}
export default config
