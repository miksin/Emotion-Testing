const path = require("path")
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin")
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin")

module.exports = {
  webpack: {
    plugins: {
      add: [new VanillaExtractPlugin()],
    },
    configure: (webpackConfig) => {
      const moduleScopePlugin = webpackConfig.resolve.plugins.find(
        (plugin) => plugin instanceof ModuleScopePlugin
      )
      moduleScopePlugin.allowedPaths.push(
        path.resolve(
          __dirname,
          "node_modules/@vanilla-extract/webpack-plugin"
        )
      )
      return webpackConfig
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
