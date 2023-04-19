const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
  mode: "development", // value => 'production' | 'development'
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "bundle.js",
    clean: true,
  },
  watch: true,
});
