// tslint:disable: no-default-export
import convert from "convert-source-map";
import { createInstrumenter, RawSourceMap } from "istanbul-lib-instrument";
import loaderUtils from "loader-utils";
import mergeSourceMap from "merge-source-map";
import nodePath from "path";
import validateOptions from "schema-utils";
import { loader } from "webpack";
import optionsSchema from "./options-schema.json";
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

  if (!sourceMap) {
    // Check for an inline source map
    const inlineSourceMap = convert.fromSource(source)
      || convert.fromMapFileSource(source, nodePath.dirname(this.resourcePath));

    if (inlineSourceMap) {
      // Use the inline source map
      sourceMap = inlineSourceMap.sourcemap as RawSourceMap;
    }
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
