const theme = require("./theme.json");
const tailpress = require("@jeffreyvr/tailwindcss-tailpress");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.php",
    "./**/*.php",
    "./resources/css/*.css",
    "./resources/js/*.js",
    "./safelist.txt",
  ],
  theme: {
    container: {
      screens: {
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "1460px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "0rem",
      },
    },
    extend: {
      colors: tailpress.colorMapper(
        tailpress.theme("settings.color.palette", theme)
      ),
      fontSize: tailpress.fontSizeMapper(
        tailpress.theme("settings.typography.fontSizes", theme)
      ),
      fontFamily: {
        body: ["Playfair Display", "serif"],
        header: ["Playfair Display SC", "serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "600px",
      md: "782px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1460px",
    },
  },
  plugins: [tailpress.tailwind],
};
