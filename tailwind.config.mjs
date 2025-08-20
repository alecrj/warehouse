/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        accent: {
          50: '#fef3c7',
          100: '#fef08a',
          200: '#fde047',
          300: '#facc15',
          400: '#eab308',
          500: '#ca8a04',
          600: '#a16207',
          700: '#854d0e',
          800: '#713f12',
          900: '#365314',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '5/4': '5 / 4',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [
    // Built-in form styles plugin
    function({ addBase, theme }) {
      addBase({
        'input, select, textarea': {
          borderRadius: theme('borderRadius.lg'),
          border: `2px solid ${theme('colors.gray.200')}`,
          padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.normal'),
          transition: 'all 0.2s ease-out',
        },
        'input:focus, select:focus, textarea:focus': {
          outline: 'none',
          borderColor: theme('colors.primary.500'),
          boxShadow: `0 0 0 3px ${theme('colors.primary.500')}1a`,
        },
      });
    },
    // Built-in aspect ratio plugin
    function({ addUtilities }) {
      addUtilities({
        '.aspect-video': {
          aspectRatio: '16 / 9',
        },
        '.aspect-square': {
          aspectRatio: '1 / 1',
        },
        '.aspect-4-3': {
          aspectRatio: '4 / 3',
        },
        '.aspect-3-2': {
          aspectRatio: '3 / 2',
        },
      });
    },
    // Built-in typography plugin
    function({ addUtilities, theme }) {
      addUtilities({
        '.prose': {
          color: theme('colors.gray.700'),
          maxWidth: 'none',
          lineHeight: '1.7',
        },
        '.prose h1': {
          color: theme('colors.gray.900'),
          fontSize: theme('fontSize.4xl'),
          fontWeight: '800',
          marginBottom: theme('spacing.6'),
          lineHeight: '1.2',
        },
        '.prose h2': {
          color: theme('colors.gray.900'),
          fontSize: theme('fontSize.3xl'),
          fontWeight: '700',
          marginBottom: theme('spacing.4'),
          lineHeight: '1.3',
        },
        '.prose h3': {
          color: theme('colors.gray.900'),
          fontSize: theme('fontSize.2xl'),
          fontWeight: '600',
          marginBottom: theme('spacing.3'),
          lineHeight: '1.4',
        },
        '.prose p': {
          marginBottom: theme('spacing.4'),
        },
        '.prose a': {
          color: theme('colors.primary.600'),
          textDecoration: 'none',
          fontWeight: '500',
        },
        '.prose a:hover': {
          color: theme('colors.primary.700'),
        },
        '.prose strong': {
          color: theme('colors.gray.900'),
          fontWeight: '600',
        },
        '.prose ul': {
          listStyleType: 'disc',
          paddingLeft: theme('spacing.6'),
          marginBottom: theme('spacing.4'),
        },
        '.prose ol': {
          listStyleType: 'decimal',
          paddingLeft: theme('spacing.6'),
          marginBottom: theme('spacing.4'),
        },
        '.prose li': {
          marginBottom: theme('spacing.2'),
        },
      });
    },
  ],
}