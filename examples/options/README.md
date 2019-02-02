Example with options
------------------------------------

This example demonstrates passing options to coverage-istanbul-loader.  The options are passed-on to [istanbul-lib-instrument](https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-lib-instrument), so [all the same options](https://github.com/istanbuljs/istanbuljs/blob/25509c7ff31f114e7036a940ed799d6d0548b706/packages/istanbul-lib-instrument/src/instrumenter.js#L11-L33) are supported.

In the [`webpack.config.js` file](webpack.config.js), we set the `compact` option to `true`, which produces minified code. You'll notice that the [output bundle](dist/main.js) contains a mix of minified and unminified code.  This is because the `compact` option only affects the instrumented code, not the code that Webpack adds. You can set `mode: "production"` in the webpack.config.js file to minify the entire bundle.



### Structure

|Folder/File                              |Description
|:----------------------------------------|:----------------------------------------------------
|[webpack.config.js](webpack.config.js)   |The webpack config file.  It uses the "coverage-istanbul-loader" loader and sets the `compact` option to `true`.
|[src folder](src)                        |The original source code.
|[dist/main.js](dist/main.js)             |The bundled webpack output. The instrumented code is minified due to the `compact: true` option.
|[dist/main.js.map](dist/main.js.map)     |The output sourcemap. Even though the code is minified, it still correctly maps back to the original source.
