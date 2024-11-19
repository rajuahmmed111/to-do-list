import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F4B46",
        "dark-gray": "#EEEEEE",
        secondary: "#E6E3DB", // light beige for sections
        accent: "#6F675D", // accent brown for elements like buttons
        text: {
          DEFAULT: "#333333", // main text color
          green: "#708B2D", // text color for buttons like "Join Us" and "Sign In"
          white: "#FFFFFF", // white text used over buttons or darker backgrounds
          tea: "#7A6E56",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
        screens: {
          "2xl": "1600px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
