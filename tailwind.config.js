const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    screens: {
      'mmd': '960px',
      'md': '768px'
    },
  },
  extend: {
    height: {
      '0.25': '1px',
    },
    minWidth: {
      '5': '1.25rem',
      '10': '2.5rem',
      '60': '15rem',
      '125': '31.25rem'
    },
    minHeight: {
      '5': '1.25rem',
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'html': {
          fontFamily: 'Lato, sans-serif',
          fontSize: '16px',
          boxSizing: 'border-box',
        },
        'body': {
          background: '#ECECEE',
        },
        '*, *::before, *::after': {
          fontFamily: 'Lato, sans-serif',
          margin: 0
        },
        '.text-base-custom': {
          fontSize: '1rem',
          lineHeight: '2rem'
        },
        '.list-item.active, .list-item:hover': {
          background: '#575bde40',
        },
        '.bg-purple-navbar': {
          background: '#211B4E'
        },
        '.custom-gray': {
          background: '#ECECEE',
        },
        '.custom-purple': {
          background: '#575BDE'
        },
      })
    })
  ]
}