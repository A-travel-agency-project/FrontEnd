/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      ["xsm"]: "375px",

      ["sm"]: "640px",
      // => @media (min-width: 640px) { ... }

      ["md"]: "768px",
      // => @media (min-width: 1024px) { ... }

      ["lg"]: "1024px",
      // => @media (min-width: 1280px) { ... }
      ["xl"]: "1280px",
    },
    extend: {
      colors: {
        "main-color": "#FBB03B",
        "sub-main-color": "#FBB03C",
        "sub-black": "#3C3A36",
        "sub-red": "#FF0000",
        "sub-gray": "#707070",
        "title-box": "#EAEAEA",
      },
    },
  },
  plugins: [],
};
