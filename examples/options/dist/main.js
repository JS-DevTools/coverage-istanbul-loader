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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sayHello; });
/* harmony import */ var _say__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./say */ "./src/say.js");
var cov_2njnr1t2ks=function(){var path="coverage-istanbul-loader/examples/options/src/index.js",hash="a4ff2152253ca88289c84c25fc6eb8266383dc1f",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"coverage-istanbul-loader/examples/options/src/index.js",statementMap:{"0":{start:{line:4,column:2},end:{line:4,column:28}}},fnMap:{"0":{name:"sayHello",decl:{start:{line:3,column:24},end:{line:3,column:32}},loc:{start:{line:3,column:50},end:{line:5,column:1}},line:3}},branchMap:{"0":{loc:{start:{line:3,column:34},end:{line:3,column:48}},type:"default-arg",locations:[{start:{line:3,column:41},end:{line:3,column:48}}],line:3}},s:{"0":0},f:{"0":0},b:{"0":[0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function sayHello(name=(cov_2njnr1t2ks.b[0][0]++,"world")){cov_2njnr1t2ks.f[0]++;cov_2njnr1t2ks.s[0]++;return Object(_say__WEBPACK_IMPORTED_MODULE_0__["default"])("hello",name);}

/***/ }),

/***/ "./src/say.js":
/*!********************!*\
  !*** ./src/say.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return say; });
var cov_2m972qwrb=function(){var path="coverage-istanbul-loader/examples/options/src/say.js",hash="516b6fdde3e2de36eefdefb18203a5ac81950623",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"coverage-istanbul-loader/examples/options/src/say.js",statementMap:{"0":{start:{line:2,column:2},end:{line:2,column:27}}},fnMap:{"0":{name:"say",decl:{start:{line:1,column:24},end:{line:1,column:27}},loc:{start:{line:1,column:40},end:{line:3,column:1}},line:1}},branchMap:{},s:{"0":0},f:{"0":0},b:{},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function say(what,who){cov_2m972qwrb.f[0]++;cov_2m972qwrb.s[0]++;return`${what}, ${who}`;}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
