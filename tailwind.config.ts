import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"], // Define Jost font
        ubuntu: ["Ubuntu", "sans-serif"], // Define Ubuntu font
      },
      colors: {
        primary: "#4F4B46",
        "primary-green": "#8B9B3E",
        "secondary-green": "#C3CD99",
        "secondary-blue": "#5887FF",
        "dark-gray": "#EEEEEE",
        secondary: "#E6E3DB",
        accent: "#6F675D",
        text: {
          DEFAULT: "#333333",
          green: "#86A047",
          white: "#FFFFFF",
          tea: "#7A6E56",
        },
      },
      container: {
        center: true,
        // padding: {
        //   DEFAULT: "1rem",
        // },
        screens: {
          "2xl": "1600px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
