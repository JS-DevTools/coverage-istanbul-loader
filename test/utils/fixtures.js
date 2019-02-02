"use strict";

const fs = require("fs");
const nodePath = require("path");

const fixturesDir = nodePath.join(__dirname, "..", "fixtures") + nodePath.sep;
const escapedFixturesDir = fixturesDir.replace(/\\/g, "\\\\");

module.exports = {
  dist: {
    path: nodePath.join(fixturesDir, "dist"),
  },

  "esm-sample.js": fileInfo(nodePath.join(fixturesDir, "esm-sample.js")),
  "esm-sample.instrumented.js": fileInfo(nodePath.join(fixturesDir, "esm-sample.instrumented.js")),
  "esm-sample.instrumented.js.map": fileInfo(nodePath.join(fixturesDir, "esm-sample.instrumented.js.map")),

  "ts-sample.js": fileInfo(nodePath.join(fixturesDir, "ts-sample.js")),
  "ts-sample.instrumented.js": fileInfo(nodePath.join(fixturesDir, "ts-sample.instrumented.js")),
  "ts-sample.instrumented.js.map": fileInfo(nodePath.join(fixturesDir, "ts-sample.instrumented.js.map")),
};

function fileInfo (path) {
  let contents = fs.readFileSync(path, "utf8").trim();
  contents = contents.replace(/%ROOT_PATH%/g, escapedFixturesDir);

  if (path.endsWith(".map")) {
    contents = JSON.parse(contents);
  }

  return { path, contents };
}
