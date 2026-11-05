/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080B12', deep: '#0D1220', surface: '#121A29',
        accent: '#6657FF', teal: '#23C8B8', fg: '#F5F7FC', mute: '#A0A9BA',
      },
      fontFamily: { sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'], mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'] },
      letterSpacing: { tightest: '-0.045em' },
    },
  },
  plugins: [],
};
