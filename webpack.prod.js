const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(config, {
  mode: "production", // value => 'production' | 'development'
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "img/[hash][ext]",
    clean: true,
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.[contenthash].css",
    }),
  ],
});
