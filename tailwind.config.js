/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0e27',
        'dark-section': '#0f1629',
        'dark-card': '#1a202c',
        'primary': '#00d4ff',
        'primary-hover': '#00a8cc',
        'secondary': '#a855f7',
        'accent': '#f43f5e',
        'text-primary': '#ffffff',
        'text-secondary': '#a1aac7',
        'border-dark': '#2d3749',
      },
      spacing: {
        'section': '6rem',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #0f1629 0%, #1a202c 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
        'gradient-text': 'linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)',
      },
      boxShadow: {
        'premium': '0 20px 60px rgba(0, 212, 255, 0.15)',
        'premium-lg': '0 25px 80px rgba(0, 212, 255, 0.2)',
        'glow': '0 0 30px rgba(0, 212, 255, 0.3)',
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.3)',
        'premium-card': '0 10px 40px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        'xl': '20px',
        '2xl': '30px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in-scale': 'fade-in-scale 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-scale': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
