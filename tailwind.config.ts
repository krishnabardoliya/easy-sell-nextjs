import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages//*.{js,jsx,ts,tsx}", "./src/components//*.{js,jsx,ts,tsx}"],
  purge: ["./src/pages//*.{js,jsx,ts,tsx}", "./src/components//*.{js,jsx,ts,tsx}"],
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
