function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "borderCol-main": withOpacity("--color-borderCol-main"),
      },
      textColor: {
        skin: {
          titles: withOpacity("--color-text-titles"),
          "titles-darker": withOpacity("--color-text-titles-darker"),
          inverted: withOpacity("--color-text-inverted"),
          alt: withOpacity("--color-text-alt"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          "fill-alt": withOpacity("--color-fill-alt"),
          white: withOpacity("--color-white"),
          "lighter-fill": withOpacity("--color-lighter-fill"),
          "button-main": withOpacity("--color-button-main"),
          "button-main-hover": withOpacity("--color-button-main-hover"),
          "button-light": withOpacity("--color-button-light"),
          "button-light-hover": withOpacity("--color-button-light-hover"),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
