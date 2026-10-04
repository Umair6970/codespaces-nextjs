/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./app/**/*.{js,jsx,mdx}",
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./src/**/*.{js,jsx,mdx}", // Crucial if your project uses a src/ folder
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a0a0c",
          card: "#121216",
          border: "#23232b",
          cyan: "#00f2fe",
          emerald: "#10b981",
          amber: "#f59e0b",
        },
      },
    },
  },
  plugins: [],
};