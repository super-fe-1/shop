/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#ffffff', // 기본 배경색
        'background-secondary': '#f5f5f5', // 섹션 배경색
        primary: '#302e81', // 주제색
        'text-primary': '#333333', // 기본 텍스트 색상
        'text-secondary': '#555555', // 보조 텍스트 색상
        accent: '#9897c0', // 강조색
        'accent-hover': '#6463a1', // 강조색 호버 상태
        success: '#3e6f69', // 성공 상태 색상
        error: '#cf383f', // 에러 상태 색상
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'], // Pretendard 폰트
      },
      animation: {
        'fade-in': 'fadeIn .3s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
