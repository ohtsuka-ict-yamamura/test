/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        nord: {
          0: '#2E3440',
          1: '#3B4252',
          2: '#434C5E',
          3: '#4C566A',
          4: '#D8DEE9',
          5: '#E5E9F0',
          6: '#ECEFF4',
          7: '#8FBCBB',
          8: '#88C0D0',
          9: '#81A1C1',
          10: '#5E81AC',
          11: '#BF616A',
          12: '#D08770',
          13: '#EBCB8B',
          14: '#A3BE8C',
          15: '#B48EAD',
        },
      },
      fontFamily: {
        dotGothic: ['DotGothic16', 'sans-serif'],
        notSansJp: ['Not Sans JP', 'sans-serif'],
        kokoro: ['Kokoro'],
        vt323: ['VT323'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#4C566A !important',
            'max-width': 'none',
            a: {
              color: '#81A1C1',
              'text-decoration': 'none',
              '&:hover': {
                'text-decoration': 'underline',
              },
              '&:focus': {
                'text-decoration': 'underline',
              },
            },
            'h1,h2,h3,h4,h5,h6,code,th,strong,blockquote': {
              color: '#4C566A',
            },
            'h1,h2': {
              'padding-bottom': '2px',
              'border-color': theme('colors.gray.300'),
              'border-bottom-width': '1px',
            },
            '.task-list-item': {
              listStyleType: 'none',
            },
            p: {
              'white-space': 'pre-wrap',
            },
            'ol li::marker': {
              color: '#4C566A',
            },
            'ul li::marker': {
              color: '#4C566A',
            },
            'li > p': {
              'margin-top': 0,
              'margin-bottom': 0,
            },
            li: {
              'margin-top': 0,
              'margin-bottom': 0,
            },
            'li > ul': {
              'margin-top': 0,
              'margin-bottom': 0,
            },
            'li > ol': {
              'margin-top': 0,
              'margin-bottom': 0,
            },
            'tbody > tr': {
              'border-bottom-color': theme('colors.gray.300'),
            },
            thead: {
              'border-bottom-color': theme('colors.gray.300'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
