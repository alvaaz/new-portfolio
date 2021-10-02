module.exports = {
  purge: {
    content: ['./src/**/*.ts', './src/**/*.tsx'],
    safelist: [
      'bg-blue-700',
      'bg-green-600',
    ]
  },
  darkMode: 'class',
  variants: {
    extend: {
      cursor: ['disabled'],
      opacity: ['disabled'],
      textOpacity: ['disabled'],
    },
  }

};
