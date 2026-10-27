/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        editorial: {
          bg: '#FBF9F5',
          bgWarm: '#F5F1EA',
          bgMuted: '#EDE8E0',
          paper: '#FFFFFF',
          border: '#E8E4DC',
          borderLight: '#F0ECE4',
          borderDark: '#D6D0C5',
          charcoal: '#18181B',
          charcoalMuted: '#52525B',
          charcoalSubtle: '#71717A',
          cobalt: '#1D4ED8',
          cobaltHover: '#1E40AF',
          cobaltLight: '#EFF6FF',
          cobaltBorder: '#BFDBFE',
          cobaltMuted: '#93C5FD',
          amber: '#D97706',
          amberLight: '#FEF3C7',
          emerald: '#059669',
          emeraldLight: '#D1FAE5',
          darkBg: '#0F1219',
          darkPaper: '#161B26',
          darkBorder: '#232A3B',
          darkText: '#F4F4F5',
          darkMuted: '#A1A1AA',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'editorial-sm': '0 1px 2px rgba(24, 24, 27, 0.04)',
        'editorial-md': '0 4px 16px -2px rgba(24, 24, 27, 0.05), 0 2px 4px -1px rgba(24, 24, 27, 0.03)',
        'editorial-lg': '0 12px 32px -4px rgba(24, 24, 27, 0.06), 0 4px 12px -2px rgba(24, 24, 27, 0.02)',
        'editorial-xl': '0 24px 48px -8px rgba(24, 24, 27, 0.08), 0 8px 16px -4px rgba(24, 24, 27, 0.03)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
