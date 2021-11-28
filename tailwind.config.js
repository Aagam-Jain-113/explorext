module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        "primary-1": "#fdbd40",
        "primary-2": "#fcf05a",
        "dark-1": "#242627",
        "dark-2": "#2c2d31",
        "dark-3": "#888888",
        accent: "#e9686a",
      },
      borderRadius: {
        large: "1rem",
        el: "3rem",
      },
      borderWidth: {
        l: ".1px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
