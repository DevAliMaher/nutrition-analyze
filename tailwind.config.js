module.exports = {
  important: true,
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xl: { max: "5000px" },
      lg: { max: "1919px" },
      md: { max: "1279px" },
      sm: { max: "959px" },
      xs: { max: "599px" },
    },
    colors: {
      transparent: "transparent",
      main: {
        DEFAULT: "#fff",
        light: "#fafafa",
        gray: "#F2F3F5",
        black: "#000",
        dark: "#303030",
        lighterDark: "#474747",
        lightGreen: "#4caf50",
        darkGreen: "#009688",
        orange: "#fba72f",
        sunny: "#FDB813",
        night: "#38285c",
        warn: "#E53935",
      },
    },
    textColor: (theme) => theme("colors"),
    ripple: (theme) => ({
      colors: theme("colors"),
    }),
  },
  variants: {
    extend: {},
    translate: ["dark"],
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-nested"),
    require("postcss-custom-properties"),
    require("autoprefixer"),
  ],
};
