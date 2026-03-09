/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          primary: "#3B2F2F", // Dark coffee brown
          secondary: "#6F4E37", // Warm mocha
          accent: "#F5E6D3", // Cream latte
          bg: "#FAF7F2", // Soft beige
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
