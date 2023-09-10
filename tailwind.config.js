module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1780px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      myriadreg: ['Myriad-regular', 'sans-serif'],
      myriadlight: ['Myriad-light', 'sans-serif'],
      myriadbold: ['Myriad-bold', 'sans-serif'],
    },
    extend: {
      colors: {
        orange: '#DE5A12',
        'orange-light': '#EE824F',
        green: '#0C9000',
        red: '#C00000',
        gray: '#555555',
        'gray-dark': '#333333',
        'gray-light': '#898989'
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      dropShadow: {
        'hover': '0 5px 10px 0 rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideRight: {
          from: { marginLeft: '-21%' },
          to: { marginLeft: '-30px' },
        },
        slideLeft: {
          from: { marginLeft: '-80px' },
          to: { marginLeft: '-550px' },
        },
        scrolling: {
          from: { transform: 'translateX(180%)' },
          to: { transform: 'translateX(-100%)' },
        },
        scrollingMobile: {
          from: { transform: 'translateX(80%)' },
          to: { transform: 'translateX(-100%)' },
        },
        toastUp: {
          '0%': { right: '-364px' },
          '100%': { right: '112px' },
        },
        toastDown: {
          '0%': { right: '112px' },
          '100%': { right: '-380px' },
        },
        modalOpen: {
          from: { bottom: '75px' },
          to: { bottom: '0px' },

          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        modalClose: {
          from: { bottom: '0px' },
          to: { bottom: '120px' },

          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'slide-right': '1s slideRight',
        'slide-left': '1s slideLeft',
        'marquee-infinite': 'marquee 25s linear infinite',
        scrolling: 'scrolling 25s linear infinite',
        scrollingMobile: 'scrollingMobile 25s linear infinite',
        'toast-up': 'toastUp 1s',
        'toast-down': 'toastDown 1s',
        'modal-open': 'modalOpen 0.5s',
        'modal-close': 'modalClose 0.5s'
      },
    },
  },
};
