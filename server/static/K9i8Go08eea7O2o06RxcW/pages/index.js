module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

async function getStaticProps(context) {
  let flights;

  try {
    const res = await fetch('https://api.spacexdata.com/v3/launches');
    flights = await res.json();
  } catch (err) {
    // some error handling
    flights = [];
  }

  return {
    props: {
      flights
    }
  };
}
function Home({
  flights = []
}) {
  return __jsx("div", {
    className: "jsx-3225444484" + " " + "App"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
    className: "jsx-3225444484"
  }, "Create Next App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3225444484"
  })), __jsx("main", {
    className: "jsx-3225444484"
  }, __jsx("h2", {
    className: "jsx-3225444484" + " " + 'app-title'
  }, "Next JS Application"), __jsx("div", {
    className: "jsx-3225444484" + " " + 'flights-container'
  }, flights.map(flight => __jsx("div", {
    key: flight.flight_number,
    className: "jsx-3225444484" + " " + 'flight'
  }, __jsx("img", {
    src: flight.links.mission_patch,
    alt: "flight pic",
    className: "jsx-3225444484" + " " + 'flight-logo'
  }), __jsx("br", {
    className: "jsx-3225444484"
  }), __jsx("h4", {
    className: "jsx-3225444484"
  }, "Mission: ", flight.mission_name), __jsx("div", {
    className: "jsx-3225444484" + " " + 'flight-info'
  }, __jsx("div", {
    className: "jsx-3225444484" + " " + 'row'
  }, __jsx("label", {
    className: "jsx-3225444484"
  }, "Launch Date:"), __jsx("p", {
    className: "jsx-3225444484"
  }, flight.launch_date_local)), __jsx("div", {
    className: "jsx-3225444484" + " " + 'row'
  }, __jsx("label", {
    className: "jsx-3225444484"
  }, "Launch Successful:"), __jsx("p", {
    className: "jsx-3225444484"
  }, flight.launch_success ? 'Yes' : 'No')), __jsx("h4", {
    className: "jsx-3225444484" + " " + 'details'
  }, "Details"), __jsx("div", {
    className: "jsx-3225444484" + " " + 'row'
  }, __jsx("p", {
    className: "jsx-3225444484" + " " + 'details-p'
  }, flight.details))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2773355456"
  }, [".App.jsx-3225444484{text-align:center;}", ".flight-logo.jsx-3225444484{height:40vmin;pointer-events:none;}", "@media (prefers-reduced-motion:no-preference){.flight-logo.jsx-3225444484{-webkit-animation:App-logo-spin-jsx-3225444484 infinite 5s linear;animation:App-logo-spin-jsx-3225444484 infinite 5s linear;}}", ".App-header.jsx-3225444484{background-color:#282c34;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:calc(10px + 2vmin);color:white;}", ".App-link.jsx-3225444484{color:#61dafb;}", "@-webkit-keyframes App-logo-spin-jsx-3225444484{from{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}to{-webkit-transform:translateY(-40px);-ms-transform:translateY(-40px);transform:translateY(-40px);}}", "@keyframes App-logo-spin-jsx-3225444484{from{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}to{-webkit-transform:translateY(-40px);-ms-transform:translateY(-40px);transform:translateY(-40px);}}", ".app-title.jsx-3225444484{margin:1rem;padding:1rem;border:1px solid darkgray;border-radius:10px;}", ".flight.jsx-3225444484{padding:2rem;border:1px solid darkgray;border-radius:10px;margin:1rem;}", ".row.jsx-3225444484{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.1rem;}", ".row.jsx-3225444484 label.jsx-3225444484{font-weight:500;margin-right:15px;}", ".details.jsx-3225444484{margin-bottom:0;}", ".details-p.jsx-3225444484{margin-top:10px;}"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "357884493"
  }, ["html,body{height:100vh;width:100vw;background-color:azure;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}", "*{box-sizing:border-box;}"]));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });