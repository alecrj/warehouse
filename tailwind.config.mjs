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
      // Custom color palette for Fortune 500 look
      colors: {
        // Primary corporate slate palette
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
        },
        // Navy accent for premium feel
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        // Sophisticated grays
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Professional accent colors
        blue: {
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
        // Success, warning, error states
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
      
      // Typography scale for professional design
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: ['JetBrains Mono', ...fontFamily.mono],
      },
      
      fontSize: {
        // Display sizes for hero sections
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '700' }],
        
        // Heading sizes
        'heading-xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.025em', fontWeight: '700' }],
        'heading-lg': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.025em', fontWeight: '600' }],
        'heading-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        
        // Body text sizes
        'body-xl': ['1.25rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-xs': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
        
        // Label sizes for UI elements
        'label-lg': ['0.875rem', { lineHeight: '1.25', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }],
        'label-md': ['0.75rem', { lineHeight: '1.25', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }],
        'label-sm': ['0.6875rem', { lineHeight: '1.25', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }],
      },
      
      // Professional spacing scale
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Enhanced border radius for modern look
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      
      // Professional shadow system
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'sm': '0 1px 3px 0 rgba(15, 23, 42, 0.1), 0 1px 2px 0 rgba(15, 23, 42, 0.06)',
        'md': '0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -1px rgba(15, 23, 42, 0.06)',
        'lg': '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)',
        'xl': '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04)',
        '2xl': '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(15, 23, 42, 0.06)',
        'none': 'none',
        
        // Colored shadows for interactive elements
        'blue-lg': '0 10px 15px -3px rgba(37, 99, 235, 0.1), 0 4px 6px -2px rgba(37, 99, 235, 0.05)',
        'slate-lg': '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)',
      },
      
      // Animation and transition timing
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-circ': 'cubic-bezier(0.08, 0.82, 0.17, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
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
        'fade-in-scale': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-20px)'
          }
        },
        'pulse-gentle': {
          '0%, 100%': {
            opacity: '0.4'
          },
          '50%': {
            opacity: '0.8'
          }
        },
        'gradient-shift': {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          }
        },
        'shimmer': {
          '0%': {
            'background-position': '-1000px 0'
          },
          '100%': {
            'background-position': '1000px 0'
          }
        }
      },
      
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-scale': 'fade-in-scale 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
        'gradient': 'gradient-shift 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      
      // Gradient stops for sophisticated backgrounds
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, var(--primary-900) 0%, var(--navy-800) 100%)',
        'gradient-surface': 'linear-gradient(135deg, var(--surface-primary) 0%, var(--surface-secondary) 100%)',
        'grid-pattern': 'linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)',
        'dot-pattern': 'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.15) 1px, transparent 0)',
      },
      
      backgroundSize: {
        'grid': '50px 50px',
        'dot': '40px 40px',
      },
      
      // Container max-widths for consistent layouts
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      
      // Z-index scale for layering
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      // Aspect ratios for media
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
      
      // Custom utilities for glass morphism
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    
    // Custom plugin for utility classes
    function({ addUtilities, addComponents }) {
      // Professional component classes
      const components = {
        // Button styles
        '.btn-primary': {
          '@apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl': {},
          '@apply bg-slate-900 text-white border border-transparent': {},
          '@apply hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2': {},
          '@apply transition-all duration-200 ease-in-out': {},
          '@apply shadow-lg hover:shadow-xl': {},
        },
        '.btn-secondary': {
          '@apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl': {},
          '@apply bg-white text-slate-900 border-2 border-slate-200': {},
          '@apply hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2': {},
          '@apply transition-all duration-200 ease-in-out': {},
        },
        '.btn-accent': {
          '@apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl': {},
          '@apply bg-blue-600 text-white border border-transparent': {},
          '@apply hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2': {},
          '@apply transition-all duration-200 ease-in-out': {},
          '@apply shadow-lg hover:shadow-xl': {},
        },
        
        // Card styles
        '.card-premium': {
          '@apply bg-white rounded-2xl border border-slate-200': {},
          '@apply shadow-lg hover:shadow-xl transition-all duration-300': {},
          '@apply backdrop-blur-sm': {},
        },
        '.card-glass': {
          '@apply bg-white/80 backdrop-blur-md rounded-2xl border border-white/20': {},
          '@apply shadow-xl hover:shadow-2xl transition-all duration-300': {},
        },
        '.surface-elevated': {
          '@apply bg-white rounded-2xl border border-slate-100': {},
          '@apply shadow-sm hover:shadow-md transition-all duration-200': {},
        },
        
        // Gradient backgrounds
        '.gradient-primary': {
          background: 'linear-gradient(135deg, rgb(15 23 42) 0%, rgb(30 41 59) 100%)',
        },
        '.gradient-surface': {
          background: 'linear-gradient(135deg, rgb(255 255 255) 0%, rgb(248 250 252) 100%)',
        },
        '.gradient-overlay': {
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(29, 41, 56, 0.85) 100%)',
        },
        
        // Pattern backgrounds
        '.bg-grid-pattern': {
          'background-image': 'linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)',
          'background-size': '50px 50px',
        },
        '.bg-dot-pattern': {
          'background-image': 'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.15) 1px, transparent 0)',
          'background-size': '40px 40px',
        },
      };
      
      // Scroll animation utilities
      const utilities = {
        '.scroll-fade-in': {
          opacity: '0',
          transform: 'translateY(50px)',
          transition: 'all 0.8s cubic-bezier(0.25, 0.25, 0.25, 1)',
        },
        '.scroll-fade-in.in-view': {
          opacity: '1',
          transform: 'translateY(0)',
        },
        '.scroll-slide-right': {
          opacity: '0',
          transform: 'translateX(-50px)',
          transition: 'all 0.8s cubic-bezier(0.25, 0.25, 0.25, 1)',
        },
        '.scroll-slide-right.in-view': {
          opacity: '1',
          transform: 'translateX(0)',
        },
        '.scroll-slide-left': {
          opacity: '0',
          transform: 'translateX(50px)',
          transition: 'all 0.8s cubic-bezier(0.25, 0.25, 0.25, 1)',
        },
        '.scroll-slide-left.in-view': {
          opacity: '1',
          transform: 'translateX(0)',
        },
        '.scroll-scale-up': {
          opacity: '0',
          transform: 'scale(0.8)',
          transition: 'all 0.8s cubic-bezier(0.25, 0.25, 0.25, 1)',
        },
        '.scroll-scale-up.in-view': {
          opacity: '1',
          transform: 'scale(1)',
        },
        
        // Loading skeleton
        '.loading-skeleton': {
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          'background-size': '200% 100%',
          animation: 'shimmer 1.5s infinite',
        },
        
        // Focus styles
        '.focus-outline': {
          '@apply focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2': {},
        },
        
        // Text utilities
        '.text-balance': {
          'text-wrap': 'balance',
        },
      };
      
      addComponents(components);
      addUtilities(utilities);
    },
  ],
}