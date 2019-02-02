export * from "istanbul-lib-instrument";

declare module "istanbul-lib-instrument" {
  export interface RawSourceMap {
    version: string;
    sources: string[];
    names: string[];
    sourcesContent?: string[];
    mappings: string;
  }
}
