"use strict";

const coverageIstanbulLoader = require("../../");
const { expect } = require("chai");

describe("package exports", () => {

  it("should export the loader as the default ESM export", () => {
    expect(coverageIstanbulLoader).to.have.property("default");
    expect(coverageIstanbulLoader.default).to.be.a("function");
  });

  it("should not export anything else", () => {
    expect(coverageIstanbulLoader).to.have.keys([
      "default",
    ]);
  });

});
