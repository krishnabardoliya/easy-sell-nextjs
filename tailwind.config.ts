/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/pages/**/*.{ts,tsx}",
      "./app/products/**/*.{ts,tsx}",
      "./app/components/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
      "./data/**/*.{ts,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        gray: {
          951: "#f4eee5",
          952: "#222",
          953: "#E9E4DB"
        },
        green: {
          951: "#9CAE96"
        }
      }
    },
  },
  plugins: [],
};
