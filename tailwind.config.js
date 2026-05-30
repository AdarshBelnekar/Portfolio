/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#080C14',
        surface: '#0D1320',
        card: '#111827',
        border: '#1E2A3A',
        accent: '#38BDF8',
        violet: '#818CF8',
        emerald: '#34D399',
        text: {
          primary: '#F1F5F9',
          secondary: '#94A3B8',
          muted: '#475569',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-gradient':
          'radial-gradient(at 40% 20%, #0ea5e9 0px, transparent 50%), radial-gradient(at 80% 0%, #818cf8 0px, transparent 50%), radial-gradient(at 0% 50%, #34d399 0px, transparent 50%)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px #38bdf820' },
          to: { boxShadow: '0 0 40px #38bdf840, 0 0 80px #818cf820' },
        },
      },
    },
  },
  plugins: [],
}
