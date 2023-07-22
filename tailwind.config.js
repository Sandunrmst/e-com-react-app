/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-background': '#cfb1ff',
      },
      dropShadow: {
        'header-shadow': "rgba(0, 0, 0, 0.25) 0px 5px 15px",
        'product-section-shadow': "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
    },
  },
  plugins: [],
}