module.exports = (karma) => karma.set({
  frameworks: ["mocha"],
  browsers: ["Chrome"],
  reporters: ["verbose", "coverage-istanbul"],
  files: ["test/**/*.spec.js"],
  preprocessors: {
    "**/*.js": ["webpack"],
  },
  webpack: {
    mode: "development",
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.js/,
          include: /src/,
          exclude: /node_modules|\.spec\.js$/,
          use: "coverage-istanbul-loader"
        }
      ]
    },
  },
  coverageIstanbulReporter: {
    dir: "coverage/%browser%",
    reports: ["text-summary", "lcovonly"]
  },
});
