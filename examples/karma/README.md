Karma example
------------------------------------

This example demonstrates using coverage-istanbul-loader with [Karma](https://karma-runner.github.io/3.0/index.html) and [karma-coverage-istanbul-reporter](https://github.com/mattlewis92/karma-coverage-istanbul-reporter) to produce code coverage reports for browser tests.

Unlike other examples, there is no `webpack.config.js` file.  Instead, the [`karma.conf.js` file](karma.conf.js) file includes the webpack configuration. For more information about the `karma.conf.js` file, see [the Karma documentation](https://karma-runner.github.io/3.0/config/configuration-file.html) and [the karma-coverage-istanbul-reporter documentation](https://github.com/mattlewis92/karma-coverage-istanbul-reporter#configuration).



### Structure

|Folder/File                                             |Description
|:-------------------------------------------------------|:----------------------------------------------------
|[karma.conf.js](karma.conf.js)                          |The Karma config file.  It includes the webpack configuration, including coverage-istanbul-loader.  It also specifies where the test files are (`**/*.spec.js`), which browser(s) to test in (`Chrome`), etc.
|[src folder](src)                                       |The original source code.
|[coverage/Chrome/lcov.info](coverage/Chrome/lcov.info)  |The code coverage data that's produced by [karma-coverage-istanbul-reporter](https://github.com/mattlewis92/karma-coverage-istanbul-reporter). In this case, we've configured it to produce coverage data in `lcov` format, which is widely supported by services like [Coveralls](https://coveralls.io/) or [Codacy](https://www.codacy.com/).


### Console Output
In addition to [the `lcov.info` file](coverage/Chrome/lcov.info), test results and code coverage stats are also printed to the console when running the tests.  The output looks like this:

```
Suites and tests results:

 - sayHello :
   * should say "hello, world" by default : ok
   * should say hello to a specific person, if specified : ok

Browser results:

 - Chrome 71.0.3578 (Windows 10.0.0): 2 tests
   - 2 ok

TOTAL: 2 SUCCESS

=============================== Coverage summary ===============================
Statements   : 100% ( 2/2 )
Branches     : 100% ( 1/1 )
Functions    : 100% ( 2/2 )
Lines        : 100% ( 2/2 )
================================================================================
```
