module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: "@jsdevtools/coverage-istanbul-loader",
          options: {
            compact: true
          }
        }
      }
    ]
  }
};
