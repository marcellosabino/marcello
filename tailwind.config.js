/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        md: '100%',
        lg: '1024px',
      },
    },
    extend: {
      colors: {
        link: '#2563eb',
        'link-dark': 'rgb(59 130 246)',
      },
      screens: {
        '2xl': '1024px',
      },
    },
  },
  plugins: [],
};
