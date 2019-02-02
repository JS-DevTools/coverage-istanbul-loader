"use strict";

const nodePath = require("path");

const fixturesDir = nodePath.join(__dirname, "..", "fixtures") + nodePath.sep;

module.exports = {
  path: fixturesDir,
  escapedPath: fixturesDir.replace(/\\/g, "\\\\"),

  dist: {
    path: nodePath.join(fixturesDir, "dist"),
  },

  "esm-sample.js": {
    path: nodePath.join(fixturesDir, "esm-sample.js"),
  },

  "ts-sample.js": {
    path: nodePath.join(fixturesDir, "ts-sample.js"),
  },
};
