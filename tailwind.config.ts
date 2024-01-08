import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "default-bg": "#0D0C22",
        "default-bgSoft": "#2D2B42",
        "default-text": "#FFFFFF",
        "default-text-soft": "#E5E5E5",
        "default-btn": "#3673FD",
      }
    },
  },
  plugins: [
    plugin(({addBase, addComponents, addUtilities, addVariant, e,config, theme}) => {
      addBase({
        '*': {
          margin: '0',
          padding: '0',
          boxSizing: 'border-box'
        },
        body: {
          backgroundColor: theme('colors.default-bg'),
          color: theme('colors.default-text'),
        },
        a: {
          textDecoration: "none",
        },
      })
    })
  ],
};
export default config;
