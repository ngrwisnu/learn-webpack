const path = require("path");

module.exports = {
  mode: "development", // value => 'production' | 'development'
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "bundle.js",
  },
  //watch: true, // webpack will continue to watch for changes
};
