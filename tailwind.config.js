module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          background: '#EBDFD1',
          'background-alt': '#FDF1E2',
        },
        dark: {
          background: '#0D0A12',
          'background-alt': '#16101D',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
