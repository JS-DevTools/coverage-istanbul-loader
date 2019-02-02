module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: [
          "coverage-istanbul-loader",
          "ts-loader"
        ]
      }
    ]
  }
};
