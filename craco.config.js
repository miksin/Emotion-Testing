const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin")

module.exports = {
  webpack: {
    plugins: {
      add: [new VanillaExtractPlugin()],
    },
  },
  babel: {
    presets: [
      [
        "@babel/preset-react",
        { runtime: "automatic", importSource: "@emotion/react" },
      ],
    ],
    plugins: ["@emotion/babel-plugin"],
  },
}
