/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-atas': '#F5F5F5',
        'primary': '#008ECC',
        'text': '#666666'
      },
      fontFamily: {
        'HKGrotesk' : ['HK Grotesk', 'sans-serif'],
      },
      height: {
        '0.25': '1px',
      },
      borderWidth: {
        '1' : '1px',
      }
    },
  },
  plugins: [],
}
