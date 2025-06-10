// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      gridColumn: {
        '7': 'span 7 / span 7',
        '13': 'span 13 / span 13',
        '20': 'span 20 / span 20',
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // adjust as needed
};
