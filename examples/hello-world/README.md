Simple "hello, world" example
------------------------------------

This example demonstrates the simplest usage of coverage-istanbul-loader.  The [`webpack.config.js` file](webpack.config.js) simply uses the the loader with its default options to produce an [output bundle](dist/main.js) that contains code coverage instrumentation.



### Structure

|Folder/File                              |Description
|:----------------------------------------|:----------------------------------------------------
|[webpack.config.js](webpack.config.js)   |The webpack config file.  It simply uses the "coverage-istanbul-loader" with its default options
|[src folder](src)                        |The original source code, which is a simple two-file "hello, world" library.
|[dist/main.js](dist/main.js)             |The bundled webpack output. It's intentionally _not_ minified to make it easier to see what's going on.
|[dist/main.js.map](dist/main.js.map)     |The output sourcemap. It maps the bundled code back to the original source code files.
