/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: '#0A2A4A',
        accent: '#2EB67D', 
        ink: '#0E1116',
        muted: '#6B7280',
        surface: '#FFFFFF',
        'surface-alt': '#F7FAFC',
      },
      fontSize: {
        'h1': ['clamp(40px, 5.8vw, 60px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['clamp(28px, 4vw, 40px)', { lineHeight: '1.2' }],
        'h3': ['22px', { lineHeight: '1.3' }],
        'base': ['17px', { lineHeight: '1.65' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '5xl': '64rem',
        '6xl': '72rem',
      },
      borderRadius: {
        'card': '14px',
        'pill': '50px',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      animation: {
        'reveal': 'reveal 0.2s ease-out forwards',
        'reveal-stagger': 'reveal 0.2s ease-out 0.1s forwards',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}