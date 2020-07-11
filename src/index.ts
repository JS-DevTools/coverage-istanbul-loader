// tslint:disable: no-default-export
import * as convert from "convert-source-map";
import { createInstrumenter, RawSourceMap } from "istanbul-lib-instrument";
import * as loaderUtils from "loader-utils";
import mergeSourceMap from "merge-source-map";
import * as path from "path";
import validateOptions from "schema-utils";
import { loader } from "webpack";
import * as optionsSchema from "./options-schema.json";
import { defaultOptions, Options } from "./options.js";

/**
 * Adds code coverage instrumentation using Istanbul.
 *
 * If the source code has an existing source map, then it is used to re-map the instrumented
 * code back to the original source.
 */
export default function(this: loader.LoaderContext, source: string, sourceMap?: RawSourceMap) {
  let options: Options = loaderUtils.getOptions(this);
  options = Object.assign(defaultOptions, options);
  validateOptions(optionsSchema, options, "Coverage Istanbul Loader");

  // If there's no external sourceMap file, then check for an inline sourceMap
  if (!sourceMap) {
    sourceMap = getInlineSourceMap.call(this, source);
  }

  // Instrument the code
  let instrumenter = createInstrumenter(options);
  instrumenter.instrument(source, this.resourcePath, done.bind(this), sourceMap);

  function done(this: loader.LoaderContext, error: Error | null, instrumentedSource: string) {
    // Get the source map for the instrumented code
    let instrumentedSourceMap = instrumenter.lastSourceMap();

    if (sourceMap && instrumentedSourceMap) {
      // Re-map the source map to the original source code
      instrumentedSourceMap = mergeSourceMap(sourceMap, instrumentedSourceMap);
    }

    this.callback(error, instrumentedSource, instrumentedSourceMap);
  }
}

/**
 * If the source code has an inline base64-encoded source map,
 * then this function decodes it, parses it, and returns it.
 */
function getInlineSourceMap(this: loader.LoaderContext, source: string): RawSourceMap | undefined {
  try {
    // Check for an inline source map
    const inlineSourceMap = convert.fromSource(source)
      || convert.fromMapFileSource(source, path.dirname(this.resourcePath));

    if (inlineSourceMap) {
      // Use the inline source map
      return inlineSourceMap.sourcemap as RawSourceMap;
    }
  }
  catch (e) {
    // Exception is thrown by fromMapFileSource when there is no source map file
    if (e instanceof Error && e.message.includes("An error occurred while trying to read the map file at")) {
      this.emitWarning(e);
    } else {
      throw e;
    }
  }
}
