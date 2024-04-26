export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "custom-image":
          "url('https://www.sonyfg.co.jp/Portals/0/images/index/bg_pickup.jpg')",
      }),
    },
  },
  plugins: [],
};
