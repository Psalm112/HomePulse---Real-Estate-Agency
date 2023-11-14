/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        offwhite: "#f9f9f9",
      },
      keyframes: {
        fillBorder: {
          "0%": { height: "0%" },
          "50%": { height: "50%", width: "0%" },
          "100%": { width: "30%" },
        },
        fillIn: {
          "0%": { transform: "translatey(0%)" },
          "100%": { transform: "translatey(-100%)" },
        },
        reveal: {
          "0%": { transform: "translatex(0%)" },
          "100%": { transform: "translatex(-100%)" },
        },
        slideInLeft: {
          "0%": { transform: "translatex(-120%)" },
          "100%": { transform: "translatex(0%)" },
        },
        slideInRight: {
          "0%": { transform: "translatex(100%)" },
          "100%": { transform: "translatex(0%)" },
        },
        slideup: {
          "0%": { transform: "translatey(100%)" },
          "100%": { transform: "translatey(0%)" },
        },
        // slideupsm: {
        //   "0%": { transform: "translatey(100%)" },
        //   "100%": { transform: "translatey(0%)" },
        // },
      },
    },
  },
  plugins: [],
};
