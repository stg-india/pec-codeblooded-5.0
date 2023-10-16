/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        mediumorchid: "#c86dff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "open-sans": "'Open Sans'",
        avenir: "Avenir",
      },
    },
    fontSize: {
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
