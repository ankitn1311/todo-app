module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', mono, serif",
      },
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        highlight: "inset 0px 0px 0px 1px rgb(255,255,255,0.1)",
      },
    },
  },
  plugins: [],
};
