import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        paper: "#f8fafc",
        accent: "#7c3aed",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
