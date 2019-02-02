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
    expect(instrumentedSource).to.equal(fixtures["esm-sample.instrumented.js"].contents);

    const instrumentedSourceMap = JSON.parse(stats.compilation.assets["main.js.map"].source());
    expect(instrumentedSourceMap).to.deep.equal(fixtures["esm-sample.instrumented.js.map"].contents);
  });

  it("instruments code with an existing sourcemap", async () => {
    const stats = await runWebpack({
      entry: fixtures["ts-sample.js"].path
    });

    const instrumentedSource = stats.compilation.assets["main.js"].source();
    expect(instrumentedSource).to.equal(fixtures["ts-sample.instrumented.js"].contents);

    const instrumentedSourceMap = JSON.parse(stats.compilation.assets["main.js.map"].source());
    expect(instrumentedSourceMap).to.deep.equal(fixtures["ts-sample.instrumented.js.map"].contents);
  });
});
