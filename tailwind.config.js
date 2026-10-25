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
        nexus: {
          obsidian: '#05070d',
          darkBg: '#080c16',
          panel: '#0d1424',
          panelBorder: '#1e293b',
          cyan: '#00f0ff',
          cyanGlow: 'rgba(0, 240, 255, 0.25)',
          violet: '#8b5cf6',
          violetGlow: 'rgba(139, 92, 246, 0.25)',
          amber: '#f59e0b',
          textMuted: '#94a3b8',
          textBright: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'orbit-slow': 'spin 40s linear infinite',
        'beam': 'beam 3s ease-in-out infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        beam: {
          '0%, 100%': { opacity: '0.2', transform: 'scaleX(0.95)' },
          '50%': { opacity: '0.8', transform: 'scaleX(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
