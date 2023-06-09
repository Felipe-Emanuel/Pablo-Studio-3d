/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /^text-/,
    },
    {
      pattern: /^font-/,
    },
  ],
  theme: {
  keyframes: {
    jump: {
      "50%": { transform: "scale(0.95)"}
    },
    shimmer: {
      '0%' : {transform: 'translateX(-100%) translateY(-100%)'},
      '100%' : {transform: 'translateX(100%) translateY(100%)'},
    },
    heartWiggle: {
      '0%, 100%': { transform: 'rotate(0deg)' },
      '25%': { transform: 'rotate(8deg)' },
      '75%': { transform: 'rotate(-8deg)' },
    },
    appear: {
      '100%': { transform: 'translateX(-2vw) translateY(2vh)' },
    },
    float: {
      '100%': { transform: 'translateX(-10px) translateY(10px)' },
    },
  },
  animation: {
    jump: "jump 75ms 1 linear",
    heartWiggle: 'heartWiggle 150ms 2 linear',
    appear: 'appear 2500ms 1 ease-in-out forwards',
    float: 'float 2500ms 1 ease-in-out forwards',
  },
  fontFamily: {
    "Roboto": "'Roboto Condensed', sans-serif",
  },
  colors: {
    transparent: 'transparent',
    black: '#000000',
    white: '#FFFFFF',
    dark: '#121214',

    gray: {
      '200': '#D9D9D9',
      '400': '#BFBFBF'
    },
  },
  fontSize: {
    '2xl': '64px',
    xl: '32px',
    lg: '24px',
    md: '16px',
    sm: '14px',
    xs: '12px',
    xxs: '10px',
  },
  extend: {
      boxShadow: {
        'easy': '0px 0px 30px rgba(0, 0, 0, 0.25)',
        'button': '5px 5px 20px rgba(0, 0, 0, 0.75)',
      },
      dropShadow: {
        'card': '20px 20px 20px rgba(0, 0, 0, 0.75)',
        'thumbnail': '3px 3px 3px rgba(0, 0, 0, 0.75)'
      },
      screens: {
        'base': '500px'
      }
    },
    backgroundImage: {
      "gradient-radial":
        "radial-gradient(44.02% 44.02% at 49.97% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 100%);",
      "placeholder-gradient":
        "linear-gradient(255.92deg, #121214 0.9%, #BFBFBF 55.94%);",
      "gradient-to-skeleton": "linear-gradient(315deg, rgba(0,0,0,0) 33%, rgba(255,255,255,1) 50%, rgba(0,0,0,0) 64%);"
    },
  },
  plugins: [],
};
