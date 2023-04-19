const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
  mode: "production", // value => 'production' | 'development'
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "bundle.[contenthash].js",
    assetModuleFilename: "img/[hash][ext]",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.[contenthash].css",
    }),
  ],
});
