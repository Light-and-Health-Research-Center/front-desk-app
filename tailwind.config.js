// 'npx trnc-create-styles' to build styles
// uncomment 'mode' and enable purge when ready for production

const colors = require("tailwindcss/colors");

module.exports = {
  // mode: "jit",
  purge: {
    enabled: false,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        gray: colors.gray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        red: colors.Red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        barbiePink: {
          100: "#DC298D",
          80: "#E354A4",
          60: "#EA7FBB",
        },
        vividCerulean: {
          100: "#06ABEB",
          80: "#38BCEF",
          60: "#6ACDF3",
        },
        stPatricksBlue: {
          140: "#141343",
          100: "#212070",
          80: "#4D4D8D",
          60: "#7A79A9",
        },
        cetaceanBlue: {
          100: "#00002D",
          80: "#333357",
          60: "#666681",
        },
        white: {
          100: "#FFFFFF",
          off: "#F6F8FA",
        },
        black: {
          100: "#000000",
          90: "#1A1A1A",
          85: "#222222",
          80: "#333333",
          60: "#666666",
          40: "#999999",
          20: "#CCCCCC",
          10: "#E6E6E6",
        },
        programs: {
          plant: "#51DB24",
          energy: "#24ACDB",
          human: "#AE24DB",
          transportation: "#DB5324",
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
  plugins: [],
};
