const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: colors.neutral[600],
        },
        // secondary: { ...colors.blue, DEFAULT: colors.blue[300] },
        transparent: "transparent",
        current: "currentColor",
        accent: {
          DEFAULT: colors.red[600],
          gray: colors.neutral[200],
          green: "#A3D29D",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
