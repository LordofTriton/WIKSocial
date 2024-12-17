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
      borderColor: Colors
    }
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms')
  ]
} satisfies Config;
