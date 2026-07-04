import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        paper: '#f5f5f0',
        accent: '#e52729'
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'sans-serif'],
        body: ['var(--font-barlow-text)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace']
      }
    }
  },
  plugins: []
} satisfies Config;
