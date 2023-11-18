/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        corporateColor: '#FF2261',
      },
      backgroundColor: {
        main: '#161819',
        secondary: '#212427',
        activeButton: '#FF2261',
        input: '#252728',
        hoverActiveButton: '#FF497D',
        button: '#fff',
        hoverButton: '#FF2261',
      },
      borderColor: {
        hoverButton: '#FF2261',
      },
      textColor: {
        label: '#fff',
        activeLabel: '#fff',
      },
      borderRadius: {
        main: '20px',
      },
    },
  },
  plugins: [],
};
