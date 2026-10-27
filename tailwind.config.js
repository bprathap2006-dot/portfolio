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
          bg: '#04060c',
          deep: '#020408',
          card: '#070b16',
          cardBorder: '#0e1c36',
          cyan: '#00f0ff',
          cyanGlow: 'rgba(0, 240, 255, 0.4)',
          violet: '#8b5cf6',
          magenta: '#ec4899',
          amber: '#f59e0b',
          emerald: '#10b981',
          yellow: '#fcee0a',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        display: ['"Space Grotesk"', 'Rajdhani', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px rgba(0, 240, 255, 0.45)',
        'cyan-glow-lg': '0 0 50px rgba(0, 240, 255, 0.6)',
        'magenta-glow': '0 0 25px rgba(236, 72, 153, 0.45)',
        'violet-glow': '0 0 25px rgba(139, 92, 246, 0.45)',
        'hud-card': '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 0 1px 1px rgba(0, 240, 255, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'scanline': 'scanline 8s linear infinite',
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
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
    },
  },
  plugins: [],
}
