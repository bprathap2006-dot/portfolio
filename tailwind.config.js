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
        studio: {
          bg: '#FAF9F6',
          bgWarm: '#F5F3EF',
          card: '#FFFFFF',
          cardSubtle: '#F8F9FA',
          border: '#E5E7EB',
          borderHover: '#CBD5E1',
          text: '#0F172A',
          textMuted: '#475569',
          textSubtle: '#64748B',
          accent: '#2563EB',
          accentHover: '#1D4ED8',
          accentLight: '#EFF6FF',
          accentBorder: '#BFDBFE',
          darkBg: '#0B0F19',
          darkCard: '#111827',
          darkCardSubtle: '#182234',
          darkBorder: '#1F2937',
          darkBorderHover: '#374151',
          darkText: '#F8FAFC',
          darkTextMuted: '#94A3B8',
          darkTextSubtle: '#64748B',
          darkAccent: '#38BDF8',
          darkAccentLight: '#082F49',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'studio-sm': '0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02)',
        'studio-md': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'studio-lg': '0 10px 30px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        'studio-xl': '0 20px 40px -6px rgba(15, 23, 42, 0.1), 0 8px 16px -4px rgba(15, 23, 42, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'drift': 'drift 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '100%': { transform: 'translate(-20px, 20px) scale(0.98)' },
        }
      }
    },
  },
  plugins: [],
}
