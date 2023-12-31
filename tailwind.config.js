const radix = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    borderRadius: {
      0: '0px',
      1: '3px',
      2: '4px',
      3: '6px',
      4: '8px',
      5: '12px',
      6: '16px',
    },
    colors: {
      ...radix.grayDark,
      ...radix.tomatoDark,
      ...radix.cyanDark,
      ...radix.redDark,
      ...radix.greenDark,
    },
    fontFamily: {
      'body-bold': ['radiance-bold'],
      'body-regular': ['radiance-regular'],
      'body-semibold': ['radiance-semibold'],
      'display-bold': ['reaver-bold'],
      'display-regular': ['reaver-regular'],
      'display-semibold': ['reaver-semibold'],
    },
    fontSize: {
      1: ['12px', '16px'],
      2: ['14px', '20px'],
      3: ['16px', '24px'],
      4: ['18px', '26px'],
      5: ['20px', '28px'],
      6: ['24px', '30px'],
      7: ['28px', '36px'],
      8: ['35px', '40px'],
      9: ['60px', '60px'],
    },
    spacing: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '40px',
      8: '48px',
      9: '64px',
    },
  },
}
