TypeScript example
------------------------------------

This example demonstrates using coverage-istanbul-loader with transpiled code.  The [`webpack.config.js` file](webpack.config.js) uses [ts-loader](https://github.com/TypeStrong/ts-loader) to transpile the TypeScript to JavaScript. The key thing to notice here is that the [output bundle](dist/main.js) and [source map](dist/main.js.map) both map back to the original TypeScript source code.

> **Note:** Webpack processes loaders in reverse order, so ts-loader **must** come **after** coverage-istanbul-loader in the config file.

### Structure

|Folder/File                              |Description
|:----------------------------------------|:----------------------------------------------------
|[webpack.config.js](webpack.config.js)   |The webpack config file. It uses [ts-loader](https://github.com/TypeStrong/ts-loader) to transpile the TypeScript to JavaScript.
|[src folder](src)                        |The original TypeScript source code.
|[dist/main.js](dist/main.js)             |The bundled webpack output. It's intentionally _not_ minified to make it easier to see what's going on.
|[dist/main.js.map](dist/main.js.map)     |The output sourcemap, which maps back to the original TypeScript source code files.
