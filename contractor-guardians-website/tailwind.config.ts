import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        gold: {
          DEFAULT: '#F8AB20',
          hover: '#C88300',
          soft: '#FFF1D6',
          border: '#FFD38A',
        },
        guardian: {
          black: '#0B0B0D',
          graphite: '#111318',
          steel: '#1B1F24',
        },
        // Secondary / Accent
        shield: {
          blue: '#1D4ED8',
          'blue-hover': '#1E40AF',
          'blue-soft': '#EAF0FF',
        },
        // Neutrals
        slate: '#6B7280',
        concrete: '#E5E7EB',
        'off-white': '#F5F6F8',
        // Status Colors
        success: '#16A34A',
        warning: '#F59E0B',
        danger: '#DC2626',
        info: '#0EA5E9',
      },
      fontFamily: {
        headline: ['var(--font-bebas)', 'Oswald', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'pulse-gold': 'pulseGold 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(248, 171, 32, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(248, 171, 32, 0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'shield-pattern': "url('/images/shield-pattern.svg')",
        'blueprint-pattern': "url('/images/blueprint-pattern.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
