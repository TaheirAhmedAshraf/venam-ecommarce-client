const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#FFB638",
      secoundry: "#FF581E",
      "dark-gray": "#252525",
      "light-gray": "#a7a7b5",
      white: "#ffffff",
    },
    extends: {},
    boxShadow: {
      "bottom-nav": "0 -2px 5px rgb(0 0 0 / 7%)",
    },
  },
  plugins: [],
};
