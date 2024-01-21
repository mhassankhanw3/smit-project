/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        mediumblue: {
          100: "#381bcb",
          200: "#1f00bb",
        },
        black: "#000",
        gainsboro: "#e8e8e8",
        mediumpurple: "#a998ff",
        dimgray: {
          100: "#646977",
          200: "#535353",
          300: "rgba(100, 105, 119, 0)",
          400: "rgba(81, 81, 81, 0.6)",
        },
        gray: {
          100: "rgba(0, 0, 0, 0.75)",
          200: "rgba(0, 0, 0, 0.6)",
        },
        seagreen: "#009471",
        red: "rgba(225, 0, 0, 0.75)",
        whitesmoke: "#f3f3f3",
        silver: "#c4c4c4",
        lavender: "#e7e3fc",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        lgi: "19px",
        mini: "15px",
        "6xl": "25px",
      },
    },
    fontSize: {
      "53xl": "4.5rem",
      "5xl": "1.5rem",
      "6xl-6": "1.6rem",
      lg: "1.13rem",
      base: "1rem",
      "xl-2": "1.26rem",
      "17xl": "2.25rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
