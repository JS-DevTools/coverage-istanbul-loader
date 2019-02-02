Istanbul Code Coverage Loader for Webpack
==============================================

[![Cross-Platform Compatibility](https://jsdevtools.org/img/badges/os-badges.svg)](https://travis-ci.com/JS-DevTools/coverage-istanbul-loader)
[![Build Status](https://api.travis-ci.com/JS-DevTools/coverage-istanbul-loader.svg?branch=master)](https://travis-ci.com/JS-DevTools/coverage-istanbul-loader)

[![Coverage Status](https://coveralls.io/repos/github/JS-DevTools/coverage-istanbul-loader/badge.svg?branch=master)](https://coveralls.io/github/JS-DevTools/coverage-istanbul-loader?branch=master)
[![Dependencies](https://david-dm.org/JS-DevTools/coverage-istanbul-loader.svg)](https://david-dm.org/JS-DevTools/coverage-istanbul-loader)

[![npm](https://img.shields.io/npm/v/coverage-istanbul-loader.svg?maxAge=43200)](https://www.npmjs.com/package/coverage-istanbul-loader)
[![License](https://img.shields.io/npm/l/coverage-istanbul-loader.svg?maxAge=2592000)](LICENSE)



This is a [Webpack loader](https://webpack.js.org/loaders/) that uses [Istanbul](https://istanbul.js.org/) to add code coverage instrumentation to your code. This is especially useful for in-browser testing, in a tool like [Karma](https://karma-runner.github.io/3.0/index.html), where you can use [karma-coverage-istanbul-reporter](https://github.com/mattlewis92/karma-coverage-istanbul-reporter) to output code coverage data in a variety of formats that are supported by services like [Coveralls](https://coveralls.io/) or [Codacy](https://www.codacy.com/).

Coverage Istanbul Loader is based on [Istanbul Instrumenter Loader](https://github.com/webpack-contrib/istanbul-instrumenter-loader), but uses a newer version of the [Istanbul API](https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-lib-instrument) and has better support for source maps.


License
--------------------------
coverage-istanbul-loader is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.


Big Thanks To
--------------------------
Thanks to these awesome companies for their support of Open Source developers ❤

[![Travis CI](https://jsdevtools.org/img/badges/travis-ci.svg)](https://travis-ci.com)
[![SauceLabs](https://jsdevtools.org/img/badges/sauce-labs.svg)](https://saucelabs.com)
[![Coveralls](https://jsdevtools.org/img/badges/coveralls.svg)](https://coveralls.io)
