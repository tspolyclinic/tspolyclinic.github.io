module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        gray_600: "#808080",
        gray_601: "#818181",
        gray_700: "#5b5b5b",
        bluegray_50: "#ebecf1",
        black_900: "#000000",
        teal_800: "#0d8346",
        black_900_0f: "#0000000f",
        light_green_200: "#b6e2a1",
        white_A700: "#ffffff",
        blue_50: "#e8f1ff",
        black_900_1e: "#0000001e",
      },
      borderWidth: { bw3: "3px", bw12: "12px" },
      borderRadius: {
        radius10: "10px",
        radius15: "15px",
        radius20: "20px",
        radius25: "25px",
        radius50: "50%",
        radius201: "201px",
        radius3235: "323.5px",
        radius8972: "89.72px",
        radius36199: "361.99px",
      },
      fontFamily: { inter: "Inter" },
      boxShadow: {
        bs: "2px 2px  4px 0px #0000000f",
        bs2: "-2px -2px  4px 0px #0000001e",
        bs1: "-2px -2px  10px 0px #0000000f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
