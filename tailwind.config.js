/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "../src-tauri/**/*.{html,rs}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier New', 'monospace'],
    },
    },
  },
  plugins: [],
};


