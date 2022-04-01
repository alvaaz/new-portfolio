module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'bg-blue-600',
    'bg-blue-700',
    'bg-green-600',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(20px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(20px, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(20px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(20px, 1fr))',
      },
    }
  },
  darkMode: 'class',
};
