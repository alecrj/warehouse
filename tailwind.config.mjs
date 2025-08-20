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
      // Professional color palette inspired by Terminal Industries
      colors: {
        // Primary brand colors (slate/gray)
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
          950: '#172554',
        },
        // Success colors (emerald)
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
          950: '#022c22',
        },
        // Warning colors (amber)
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
          950: '#451a03',
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
          950: '#450a0a',
        },
        // Neutral grays for perfect contrast
        neutral: {
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
      },
      
      // Enhanced typography
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: ['JetBrains Mono', ...fontFamily.mono],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        
        // Display sizes
        'display-sm': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em' }],
        'display-md': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.025em' }],
        'display-lg': ['3.75rem', { lineHeight: '4.25rem', letterSpacing: '-0.025em' }],
        'display-xl': ['4.5rem', { lineHeight: '5rem', letterSpacing: '-0.025em' }],
        'display-2xl': ['6rem', { lineHeight: '6.5rem', letterSpacing: '-0.025em' }],
      },
      
      // Enhanced shadows
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.2)',
        'glow-xl': '0 0 60px rgba(59, 130, 246, 0.25)',
        'premium': '0 8px 32px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05)',
        'premium-lg': '0 16px 64px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.05)',
      },
      
      // Enhanced border radius
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        'full': '9999px',
      },
      
      // Enhanced spacing scale
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem',
        '18': '4.5rem',
        '88': '22rem',
        '92': '23rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      // Animation enhancements
      keyframes: {
        // Fade animations
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        
        // Scale animations
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'scale-in-center': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        
        // Slide animations
        'slide-in-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'slide-in-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        
        // Bounce animations
        'bounce-gentle': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-8px)' },
          '60%': { transform: 'translateY(-4px)' }
        },
        
        // Pulse animations
        'pulse-gentle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        
        // Shimmer effect
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        
        // Glow effect
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' }
        },
        
        // Floating effect
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        
        // Gradient animation
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
      },
      
      // Animation utilities
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'fade-in-left': 'fade-in-left 0.6s ease-out',
        'fade-in-right': 'fade-in-right 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'scale-in-center': 'scale-in-center 0.5s ease-out',
        'slide-in-bottom': 'slide-in-bottom 0.6s ease-out',
        'slide-in-top': 'slide-in-top 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
      },
      
      // Enhanced backdrop blur
      backdropBlur: {
        'xs': '2px',
        '3xl': '64px',
      },
      
      // Z-index scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      // Enhanced line height
      lineHeight: {
        '3': '0.75rem',
        '4': '1rem',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
      },
      
      // Letter spacing
      letterSpacing: {
        'tightest': '-0.075em',
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      
      // Enhanced gradient stops
      gradientColorStops: {
        'primary-gradient': {
          '0%': '#0f172a',
          '100%': '#1e293b'
        }
      },
      
      // Aspect ratios
      aspectRatio: {
        '4/3': '4 / 3',
        '5/4': '5 / 4',
        '21/9': '21 / 9',
      },
      
      // Enhanced grid
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      
      // Enhanced grid rows
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    
    // Custom plugin for advanced component styles
    function({ addUtilities, addComponents, theme }) {
      // Enhanced button components
      const buttons = {
        '.btn': {
          '@apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2': {},
        },
        '.btn-primary': {
          '@apply btn bg-gradient-to-r from-primary-900 to-primary-800 text-white border border-transparent hover:from-primary-800 hover:to-primary-700 focus:ring-primary-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5': {},
        },
        '.btn-secondary': {
          '@apply btn bg-white text-primary-900 border-2 border-primary-200 hover:bg-primary-50 hover:border-primary-300 focus:ring-primary-900 shadow-sm hover:shadow-md': {},
        },
        '.btn-accent': {
          '@apply btn bg-gradient-to-r from-accent-600 to-accent-700 text-white border border-transparent hover:from-accent-700 hover:to-accent-800 focus:ring-accent-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5': {},
        },
        '.btn-ghost': {
          '@apply btn bg-transparent text-primary-700 border border-transparent hover:bg-primary-50 hover:text-primary-900 focus:ring-primary-900': {},
        },
        '.btn-lg': {
          '@apply px-8 py-4 text-lg': {},
        },
        '.btn-sm': {
          '@apply px-4 py-2 text-sm': {},
        },
        '.btn-xs': {
          '@apply px-3 py-1.5 text-xs': {},
        },
      };
      
      // Card components
      const cards = {
        '.card': {
          '@apply bg-white border border-primary-200 rounded-3xl shadow-lg transition-all duration-300': {},
        },
        '.card-hover': {
          '@apply hover:shadow-xl hover:-translate-y-1 hover:border-primary-300': {},
        },
        '.card-premium': {
          '@apply card shadow-premium hover:shadow-premium-lg': {},
        },
        '.card-glass': {
          '@apply bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl': {},
        },
      };
      
      // Layout components
      const layouts = {
        '.container-fluid': {
          '@apply w-full px-4 sm:px-6 lg:px-8': {},
        },
        '.section': {
          '@apply py-16 lg:py-24': {},
        },
        '.section-lg': {
          '@apply py-24 lg:py-32': {},
        },
        '.section-xl': {
          '@apply py-32 lg:py-40': {},
        },
      };
      
      // Typography components
      const typography = {
        '.text-gradient': {
          '@apply bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text text-transparent': {},
        },
        '.text-gradient-primary': {
          '@apply bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent': {},
        },
        '.text-balance': {
          'text-wrap': 'balance',
        },
      };
      
      // Status indicators
      const status = {
        '.status': {
          '@apply inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide': {},
        },
        '.status-success': {
          '@apply status bg-success-100 text-success-800': {},
        },
        '.status-warning': {
          '@apply status bg-warning-100 text-warning-800': {},
        },
        '.status-error': {
          '@apply status bg-error-100 text-error-800': {},
        },
        '.status-info': {
          '@apply status bg-accent-100 text-accent-800': {},
        },
      };
      
      // Animation utilities
      const animations = {
        '.animate-in': {
          '@apply animate-fade-in-up': {},
        },
        '.animate-in-delay-1': {
          'animation-delay': '0.1s',
        },
        '.animate-in-delay-2': {
          'animation-delay': '0.2s',
        },
        '.animate-in-delay-3': {
          'animation-delay': '0.3s',
        },
        '.animate-in-delay-4': {
          'animation-delay': '0.4s',
        },
        '.animate-in-delay-5': {
          'animation-delay': '0.5s',
        },
      };
      
      // Utility classes
      const utilities = {
        // Glass effect utilities
        '.glass': {
          'backdrop-filter': 'blur(16px)',
          'background-color': 'rgba(255, 255, 255, 0.8)',
        },
        '.glass-dark': {
          'backdrop-filter': 'blur(16px)',
          'background-color': 'rgba(0, 0, 0, 0.8)',
        },
        
        // Scroll behavior
        '.scroll-smooth': {
          'scroll-behavior': 'smooth',
        },
        
        // Selection styles
        '.select-none': {
          '-webkit-user-select': 'none',
          '-moz-user-select': 'none',
          'user-select': 'none',
        },
        
        // Focus styles
        '.focus-ring': {
          '@apply focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2': {},
        },
        
        // Gradient backgrounds
        '.bg-gradient-primary': {
          'background-image': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        },
        '.bg-gradient-accent': {
          'background-image': 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
        },
        '.bg-gradient-surface': {
          'background-image': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        },
        
        // Text effects
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        
        // Border gradients
        '.border-gradient': {
          'border-image': 'linear-gradient(135deg, #e2e8f0, #cbd5e1) 1',
        },
        
        // Custom scrollbars
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
        },
        '.scrollbar-thin::-webkit-scrollbar': {
          'width': '8px',
          'height': '8px',
        },
        '.scrollbar-thin::-webkit-scrollbar-track': {
          'background': '#f1f5f9',
          'border-radius': '9999px',
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb': {
          'background': '#cbd5e1',
          'border-radius': '9999px',
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb:hover': {
          'background': '#94a3b8',
        },
      };
      
      addComponents({
        ...buttons,
        ...cards,
        ...layouts,
        ...typography,
        ...status,
        ...animations,
      });
      
      addUtilities(utilities);
    },
  ],
}