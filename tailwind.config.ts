import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#191919",
        foreground: "var(--foreground)",
        primary: "#1D1D1D",
        secondary: "#2F2F2F"
      },
      
    },
  },
  plugins: [],
};
export default config;
