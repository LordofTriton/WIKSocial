import type { Config } from "tailwindcss";

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
      textColor: {
        'glass': '#f7f7f750',
        'tinted-glass': '#00000050',
        'whitesmoke': '#F2F2F2',
        'tang-blue': '#0A5DD7',
        'alice-blue': '#D9F0FE',
        'anti-flash-white': '#F0F0F0',
        'celestial-blue': '#1493E5',
        'night': '#161616',
        'raisin-black': '#27282C',
        'eerie-black': '#232323',
        'jet-black': '#2B2B2B'
      },
      backgroundColor: {
        'glass': '#f7f7f750',
        'tinted-glass': '#00000050',
        'whitesmoke': '#F2F2F2',
        'tang-blue': '#0A5DD7',
        'alice-blue': '#D9F0FE',
        'arctic-white': '#F0F0F0',
        'celestial-blue': '#1493E5',
        'night': '#161616',
        'raisin-black': '#27282C',
        'eerie-black': '#232323',
        'jet-black': '#2B2B2B'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms')
  ],
} satisfies Config;
