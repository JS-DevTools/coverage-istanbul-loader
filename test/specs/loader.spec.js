"use strict";

const runWebpack = require("../utils/webpack");
const fixtures = require("../utils/fixtures");
const { expect } = require("chai");

describe("Webpack tests", () => {

  it("instruments code without an existing sourcemap", async () => {
    const stats = await runWebpack({
      entry: fixtures["esm-sample.js"].path
    });

    const instrumentedSource = stats.compilation.assets["main.js"].source();
    expect(instrumentedSource).to.contain(`var path = "${fixtures.escapedPath}esm-sample.js"`);
    expect(instrumentedSource).to.contain(`path: "${fixtures.escapedPath}esm-sample.js"`);

    const instrumentedSourceMap = JSON.parse(stats.compilation.assets["main.js.map"].source());
    expect(instrumentedSourceMap.sources).to.deep.equal([
      "webpack:///webpack/bootstrap",
      "webpack:///esm-sample.js"
    ]);
    expect(instrumentedSourceMap.sourcesContent[1]).to.equal(
      "export default class Foo {\n  bar () {\n    return !!this;\n  }\n};\n"
    );
  });

  it("instruments code with an existing sourcemap", async () => {
    const stats = await runWebpack({
      entry: fixtures["ts-sample.js"].path
    });

    const instrumentedSource = stats.compilation.assets["main.js"].source();
    expect(instrumentedSource).to.contain(`var path = "${fixtures.escapedPath}ts-sample.js"`);
    expect(instrumentedSource).to.contain(`path: "${fixtures.escapedPath}ts-sample.js"`);

    const instrumentedSourceMap = JSON.parse(stats.compilation.assets["main.js.map"].source());
    expect(instrumentedSourceMap.sources).to.deep.equal([
      "webpack:///webpack/bootstrap",
      "webpack:///ts-sample.ts"
    ]);
    expect(instrumentedSourceMap.sourcesContent[1]).to.equal(
      null      // TODO: Find out why the original source isn't included in the sourcemap!
    );
  });

});
