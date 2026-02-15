/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
    },
    extend: {
      colors: {
        carbon: {
          bg: '#0a0a0a',
          surface: '#161616',
          'surface-hover': '#1c1c1c',
          border: '#262626',
          'border-subtle': '#1e1e1e',
          'text-primary': '#f4f4f4',
          'text-secondary': '#8d8d8d',
          'text-tertiary': '#525252',
          'text-link': '#a6c8ff',
          'text-link-hover': '#d0e2ff',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-delay': 'fadeIn 0.8s ease-out 0.3s forwards',
        'fade-in-delay-2': 'fadeIn 0.8s ease-out 0.6s forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
