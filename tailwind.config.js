/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: 'Pretendard',
        spoqa: 'Spoqa',
        champagne: 'Champagne',
      },
      colors: {
        'gray-100': '#FDFDFD',
        'gray-200': '#F7F6F6',
        'gray-300': '#EAEAEA',
        'gray-400': '#E1E5ED',
        'gray-500': '#D2D4DA',
        'gray-600': '#696969',
        'gray-700': '#4D4D4D',
        'gray-800': '#333333',
        'gray-900': '#191919',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        left: {
          '0%': {},
          '100%': { left: 0 },
        },
        'fade-left': {
          '0%': { opacity: 0, transform: 'translateX(48px)' },
          '100%': { opacity: 1, transform: 'translateX(0px)' },
        },
      },
      animation: {
        keep: 'fade-in 1.5s 1.5s forwards, left 1.5s 1.5s forwards',
        imje: 'fade-in 1.5s, fade-out 0.5s 1.5s forwards',
        on: 'fade-in 1.5s forwards, left 1.5s 1.5s forwards',
        growing: 'fade-in 1.5s 3s forwards',
        job: 'fade-left 1.5s 4s forwards',
        name: 'fade-left 1.5s 5s forwards',
      },
    },
    screens: {
      tablet: '768px',
      laptop: '992px',
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.text-kor-12': {
          '@apply font-spoqa font-normal text-xs leading-[18px] tracking-[-0.5px]':
            '',
        },
        '.text-kor-14': {
          '@apply font-spoqa font-normal text-sm leading-5 tracking-[-0.5px]':
            '',
        },
        '.text-kor-14M': {
          '@apply font-spoqa font-medium text-sm leading-5 tracking-[-0.5px]':
            '',
        },
        '.text-kor-16': {
          '@apply font-spoqa font-normal text-base leading-6 tracking-[-0.5px]':
            '',
        },
        '.text-kor-18': {
          '@apply font-spoqa font-medium text-lg leading-[26px] tracking-[-0.5px]':
            '',
        },
        '.text-kor-20': {
          '@apply font-spoqa font-medium text-xl leading-[30px] tracking-[-0.5px]':
            '',
        },
        '.text-eng-12': {
          '@apply font-pretendard font-normal text-xs leading-4': '',
        },
        '.text-eng-14': {
          '@apply font-pretendard font-normal text-sm leading-[18px]': '',
        },
        '.text-eng-14M': {
          '@apply font-pretendard font-medium text-sm leading-[18px]': '',
        },
        '.text-eng-16': {
          '@apply font-pretendard font-normal text-base leading-5': '',
        },
        '.text-eng-16M': {
          '@apply font-pretendard font-medium text-base leading-5': '',
        },
        '.text-eng-20': {
          '@apply font-pretendard font-medium text-xl leading-[26px]': '',
        },
      });
    },
  ],
};
