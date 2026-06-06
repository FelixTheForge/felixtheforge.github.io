/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['EB Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        parchment: '#f8f5f0',
        ink: '#2c2c2c',
        muted: '#8a8580',
        accent: '#6b7c6e',
        border: '#e8e4de',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#2c2c2c',
            fontFamily: 'EB Garamond, Georgia, serif',
          },
        },
      },
    },
  },
  plugins: [],
};
