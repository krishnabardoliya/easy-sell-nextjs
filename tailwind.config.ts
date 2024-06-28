import type { Config } from "tailwindcss";

const config: Config = {
  content: [
      "./app/pages/**/*.{ts,tsx}",
      "./app/components/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
      "./data/**/*.{ts,tsx}",
    ],
    purge: {
      content: ["./app/pages/**/*.{ts,tsx}",
      "./app/components/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
      "./data/**/*.{ts,tsx}"],
    }
  ,
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
