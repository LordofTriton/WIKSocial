import type { Config } from "tailwindcss";
import { Colors } from "./src/config/colors.config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        russoOne: ['Russo One', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      textColor: Colors,
      backgroundColor: Colors,
      borderColor: Colors,
      spacing: {
        '106': '41.1rem',
        '116': '60rem',
      },
      maxWidth: {
        '106': '41.1rem',
        '116': '60rem',
        'mobile-layout-content': '640px',
        'lg-mobile-layout-content': '840px',
        'tablet-layout-content': '884px',
        'desktop-layout-content': '1280px',
        'page-content': '640px',
        'right-layout-content': '320px',
        'left-layout-content': '220px'
      }
    },
    screens: {
      'sm-mobile': '440px',
      'mobile': '640px',
      'lg-mobile': '840px',
      'tablet': '925px',
      'desktop': '1280px'
    }
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms')
  ]
} satisfies Config;
