module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: "coverage-istanbul-loader"
      }
    ]
  }
};
