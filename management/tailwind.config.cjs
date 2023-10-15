/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 3s ease-in-out forwards",
      },

      backgroundImage: {
        'contest-lg': "url('/images/contest.png')",
        'contest-sm': "url('/images/contest2.png')",
        'box-bg':"url('/images/box-bg.png')",
        'box-bg-2':"url('/images/box-bg-2.png')",
        'box-bg-3':"url('/images/box-bg-3.png')",
        'box-bg-4':"url('/images/box-bg-4.png')",
        'box-bg-5':"url('/images/box-bg-5.png')",
        'box-bg-6':"url('/images/box-bg-6.png')",
        'box-bg-7':"url('/images/box-bg-7.png')",
        'box-bg-8':"url('/images/box-bg-8.png')",
        'box-bg-9':"url('/images/box-bg-9.png')",
        'box-bg-10':"url('/images/box-bg-10.png')",
        'box-bg-11':"url('/images/box-bg-11.png')",
        'box-bg-12':"url('/images/box-bg-12.png')",
        'cf_logo':"url('/images/cf_logo.png')",
        'cfhandle':"url('/images/cfhandle.png')",
        'cf': "url('/images/cflogo.png')",
        'welcome': "url('/images/welcome.png')",
        'logo': "url('/images/logo.png')",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      }),

      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        NunitoSans: ["Nunito Sans", "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      sm: "620px",
      md: "1060px",
      lg: "1200px",
      xl: "1500px",
    },
  },
  plugins: [],
};
