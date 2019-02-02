declare module "merge-source-map" {
  import { RawSourceMap } from "istanbul-lib-instrument";

  /**
   * @param oldMap - The original sourcemap
   * @param newMap - The new sourcemap to re-map to the original source
   */
  type MergeSourceMap = (oldMap: RawSourceMap, newMap: RawSourceMap) => RawSourceMap;

  const mergeSourceMap: MergeSourceMap;
  export = mergeSourceMap;
}
