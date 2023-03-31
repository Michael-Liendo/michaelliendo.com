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
          background: '#47477C',
          'background-alt': '#8E8EAE',
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
