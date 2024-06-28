import type { Config } from "tailwindcss";

const config: Config = {
  content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./app/**/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
      "./data/**/*.{ts,tsx}",
    ],
    purge: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/**/*.{ts,tsx}",
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
export default config;
