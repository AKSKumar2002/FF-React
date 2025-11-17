module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#0a0a0a",
        starBlue: "#00f0ff",
      },
      fontFamily: {
  sans: ['"Manrope"', "sans-serif"], // <- Make Manrope default for font-sans
  space: ['"Space Grotesk"', "sans-serif"],
},

      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
      },
      animation: {
        blob: "blob 10s infinite",
        "blob-delay-2": "blob 10s infinite 2s",
        "blob-delay-4": "blob 10s infinite 4s",
      },
    },
  },
  plugins: [],
};
