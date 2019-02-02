/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sayHello; });
/* harmony import */ var _say__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./say */ "./src/say.ts");
var cov_1j8hyxrdxx = function () {
  var path = "coverage-istanbul-loader/examples/typescript/src/index.ts",
      hash = "d3357c302489a53efa0ad99d3c02e29770bcc27d",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "coverage-istanbul-loader/examples/typescript/src/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 30
        }
      }
    },
    fnMap: {
      "0": {
        name: "sayHello",
        decl: {
          start: {
            line: 2,
            column: 24
          },
          end: {
            line: 2,
            column: 32
          }
        },
        loc: {
          start: {
            line: 2,
            column: 49
          },
          end: {
            line: 4,
            column: 1
          }
        },
        line: 2
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 33
          },
          end: {
            line: 2,
            column: 47
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 2,
            column: 40
          },
          end: {
            line: 2,
            column: 47
          }
        }],
        line: 2
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0]
    },
    inputSourceMap: {
      version: 3,
      file: "coverage-istanbul-loader/examples/typescript/src/index.ts",
      sourceRoot: "",
      sources: ["coverage-istanbul-loader/examples/typescript/src/index.ts"],
      names: [],
      mappings: "AAAA,OAAO,GAAG,MAAM,OAAO,CAAC;AAExB,MAAM,CAAC,OAAO,UAAU,QAAQ,CAAC,IAAI,GAAG,OAAO;IAC7C,OAAO,GAAG,CAAC,OAAO,EAAE,IAAI,CAAC,CAAC;AAC5B,CAAC",
      sourcesContent: ["import say from \"./say\";\n\nexport default function sayHello(name = \"world\"): string {\n  return say(\"hello\", name);\n}\n"]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();


function sayHello(name = (cov_1j8hyxrdxx.b[0][0]++, "world")) {
  cov_1j8hyxrdxx.f[0]++;
  cov_1j8hyxrdxx.s[0]++;
  return Object(_say__WEBPACK_IMPORTED_MODULE_0__["default"])("hello", name);
}

/***/ }),

/***/ "./src/say.ts":
/*!********************!*\
  !*** ./src/say.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return say; });
var cov_zubtvst1v = function () {
  var path = "coverage-istanbul-loader/examples/typescript/src/say.ts",
      hash = "8d165599cb97055c65fa67beb40328427de3b303",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "coverage-istanbul-loader/examples/typescript/src/say.ts",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 4
        },
        end: {
          line: 2,
          column: 29
        }
      }
    },
    fnMap: {
      "0": {
        name: "say",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 27
          }
        },
        loc: {
          start: {
            line: 1,
            column: 39
          },
          end: {
            line: 3,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "coverage-istanbul-loader/examples/typescript/src/say.ts",
      sourceRoot: "",
      sources: ["coverage-istanbul-loader/examples/typescript/src/say.ts"],
      names: [],
      mappings: "AAAA,MAAM,CAAC,OAAO,UAAU,GAAG,CAAC,IAAY,EAAE,GAAW;IACnD,OAAO,GAAG,IAAI,KAAK,GAAG,EAAE,CAAC;AAC3B,CAAC",
      sourcesContent: ["export default function say(what: string, who: string): string {\n  return `${what}, ${who}`;\n}\n"]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

function say(what, who) {
  cov_zubtvst1v.f[0]++;
  cov_zubtvst1v.s[0]++;
  return `${what}, ${who}`;
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
