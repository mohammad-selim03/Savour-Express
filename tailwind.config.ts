import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      redText: "#EB0029",
      yellowText: "#FF9D2D",
      lightBg: "#FF9D2D",
      whiteText: "#FFFFFF",
      darkText: "#000000",
    },
  },
  plugins: [],
};
export default config;
