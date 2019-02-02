Istanbul Code Coverage Loader for Webpack
==============================================

This is a [Webpack loader](https://webpack.js.org/loaders/) that uses [Istanbul](https://istanbul.js.org/) to add code coverage instrumentation to your code. This is especially useful for in-browser testing, in a tool like [Karma](https://karma-runner.github.io/3.0/index.html), where you can use [karma-coverage-istanbul-reporter](https://github.com/mattlewis92/karma-coverage-istanbul-reporter) to output code coverage data in a variety of formats that are supported by services like [Coveralls](https://coveralls.io/) or [Codacy](https://www.codacy.com/).

Coverage Istanbul Loader is based on [Istanbul Instrumenter Loader](https://github.com/webpack-contrib/istanbul-instrumenter-loader), but uses a newer version of the [Istanbul API](https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-lib-instrument) and has better support for source maps.
