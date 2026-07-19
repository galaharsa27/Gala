import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#080808',
        paper: '#f4f1ea',
        accent: '#d71920'
      },
      fontFamily: {
        display: ['var(--font-d)', 'sans-serif'],
        body: ['var(--font-b)', 'sans-serif'],
        mono: ['var(--font-m)', 'monospace']
      }
    }
  },
  plugins: []
} satisfies Config;
