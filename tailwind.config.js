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
          bg: '#faf9f6',
          surface: '#ffffff',
          warm: '#f5f3ee',
          border: '#e7e5df',
          charcoal: '#0f172a',
          body: '#334155',
          muted: '#64748b',
          cobalt: '#2563eb',
          cobaltHover: '#1d4ed8',
          cobaltLight: '#eff6ff',
          teal: '#0d9488',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'soft-md': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'soft-xl': '0 20px 35px -5px rgba(15, 23, 42, 0.07), 0 10px 15px -5px rgba(15, 23, 42, 0.04)',
        'soft-hover': '0 14px 30px -4px rgba(37, 99, 235, 0.12), 0 4px 10px -2px rgba(15, 23, 42, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'subtle-drift': 'subtleDrift 18s ease-in-out infinite alternate',
        'pulse-gentle': 'pulseGentle 4s ease-in-out infinite',
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
        subtleDrift: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '100%': { transform: 'translate(-20px, 15px) scale(0.98)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.75' },
        }
      }
    },
  },
  plugins: [],
}
