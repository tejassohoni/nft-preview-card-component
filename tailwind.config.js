module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        mainbg: "	#0d192b",
        cardbg: "	#14253d",
        line: "	#2f415b",
        softblue: "hsl(215, 51%, 70%)",
        white: "#ffffff",
        cyan: "	#00fff7",
      },
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};
