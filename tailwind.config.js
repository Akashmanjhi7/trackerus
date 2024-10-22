/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#90C444',
        // back : "#1F1F1F"
        back: '#fff',
        head: "#000",
        
      },
    },
  },
  plugins: [],
}