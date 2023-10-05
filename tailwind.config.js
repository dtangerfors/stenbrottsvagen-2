/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      sans: ["Clash Grotesk", "sans-serif"],
      title: ["Clash Grotesk", "-apple-system, sans-serif"],
      mono: ["Clash Grotesk", "monospace"],
    },
    fontSize: {
      0: "0",
      sm: "1.2rem",
      base: "1.7rem",
      headline: "1.4rem",
      heading: "3.3rem",
      title1: "2.8rem",
      title2: "2.3rem",
      default: "16px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: {
        600: '#232f2f',
        700: '#1a2323',
        800: '#111717',
        900: '#070d0d',
      },
      white: colors.white,
      gray: {
        '50': '#f2f3f2',
        '100': '#e2e5e2',
        '200': '#c5cac5',
        '300': '#a0a8a1',
        '400': '#7c857d',
        '500': '#626a63',
        '600': '#4d544e',
        '700': '#404541',
        '800': '#353a35',
        '900': '#2f3230',
      },
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-bg":
          "linear-gradient(to left bottom, rgba(0,0,0, .1), #2c564e), url('/src/images/hero-bg.jpg')",
        "cover-bg":
          "linear-gradient(to left bottom, rgba(0,0,0, .25), rgba(0,0,0, .4)), url('/src/images/cover-bungenas.webp')",
        "portrait-cover-bg":
          "linear-gradient(to left bottom, rgba(0,0,0, .25), rgba(0,0,0, .4)), url('/src/images/cover-bungenas-portrait.webp')",
        "info-bg":
          "linear-gradient(to left bottom, rgba(0,0,0, .1), #2c564e), url('/src/images/hero.jpg')",
        "menu-bg": "url(/src/images/menu-bg-filled.svg)",
        "menu-dark": "url(/src/images/menu-bg-filled-dark.svg)",
        dot: "url(/src/images/dot.svg)",
      }),
      colors: {
        primary: "#5cc185",
        primaryLight: "#d7f1e2",
        secondary: "#223c3b",
        red: "#db605c",
        lightGray: "#eee",
      },
      scale: {
        101: "1.01",
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      padding: {
        safeBottom: "max(2.5rem, env(safe-area-inset-bottom))",
        100: "100%",
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
      flex: {
        30: "1 1 30rem",
      },
      zIndex: {
        "-1": "-1",
      },
      screens: {
        portrait: { raw: "(orientation: portrait)" },
        standalone: { raw: "(display-mode: standalone)" },
      },
      backgroundSize: {
        xs: "4px 2px",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["last", "first"],
      padding: ["last", "first"],
      margin: ["last", "first"],
      flexShrink: ["last"],
      backgroundImage: ["dark"],
      colors: ["disabled", "checked"],
      backgroundColor: ["checked"],
    },
  },
  plugins: [],
}
