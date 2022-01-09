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
    },
    colors: {
      mainbg: "	#0d192b",
      cardbg: "	#14253d",
      line: "	#2f415b",
      footer: "hsl(215, 51%, 70%)",
    },
  },
  plugins: [],
};
