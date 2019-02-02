"use strict";

const webpack = require("webpack");
const fixtures = require("./fixtures");

module.exports = runWebpack;

function runWebpack (options) {
  let config = webpackConfig(options);
  const compiler = webpack(config);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      else {
        resolve(stats);
      }
    });
  });
}

function webpackConfig ({ loaderOptions, ...config }) {
  return Object.assign(
    {
      mode: "development",
      devtool: "source-map",
      output: {
        path: fixtures.dist.path,
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: require.resolve("../../"),
            enforce: "post",
            options: loaderOptions,
          }
        ],
      },
    },
    config
  );
}
