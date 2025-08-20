import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      // Professional color palette
      colors: {
        // Primary brand colors (navy/slate)
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Accent colors (blue)
        accent: {
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
        },
        // Success colors (green)
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Warning colors (yellow)
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Error colors (red)
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      
      // Typography
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      
      // Enhanced shadows
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.2)',
      },
      
      // Animation keyframes
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
      },
      
      // Animation utilities
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
      
      // Z-index scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    
    // Custom plugin for button and component styles
    function({ addUtilities, addComponents }) {
      // Button component classes
      const components = {
        '.btn': {
          '@apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2': {},
        },
        '.btn-primary': {
          '@apply btn bg-primary-900 text-white border border-transparent hover:bg-primary-800 focus:ring-primary-900 shadow-lg hover:shadow-xl': {},
        },
        '.btn-secondary': {
          '@apply btn bg-white text-primary-900 border-2 border-primary-200 hover:bg-primary-50 hover:border-primary-300 focus:ring-primary-900': {},
        },
      };
      
      // Utility classes to fix opacity issues
      const utilities = {
        // Background opacity utilities (fixes the bg-white/98 issue)
        '.bg-white\\/95': {
          'background-color': 'rgb(255 255 255 / 0.95)',
        },
        '.bg-white\\/98': {
          'background-color': 'rgb(255 255 255 / 0.98)',
        },
        '.bg-black\\/50': {
          'background-color': 'rgb(0 0 0 / 0.5)',
        },
        '.bg-black\\/80': {
          'background-color': 'rgb(0 0 0 / 0.8)',
        },
        
        // Text balance for better typography
        '.text-balance': {
          'text-wrap': 'balance',
        },
      };
      
      addComponents(components);
      addUtilities(utilities);
    },
  ],
}