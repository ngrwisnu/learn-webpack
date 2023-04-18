const path = require("path");

module.exports = {
  mode: "development", // value => 'production' | 'development'
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "bundle.js",
  },
  devtool: false,
  //watch: true, // webpack will continue to watch for changes
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
