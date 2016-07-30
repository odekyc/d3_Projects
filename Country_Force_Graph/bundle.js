/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	var countries_img = {
		tl: "https://www.countries-ofthe-world.com/flags/flag-of-Timor-Leste.png",
		ca: "https://www.countries-ofthe-world.com/flags/flag-of-Canada.png",
		tm: "https://www.countries-ofthe-world.com/flags/flag-of-Turkmenistan.png",
		us: "https://www.countries-ofthe-world.com/flags/flag-of-United-States-of-America.png",
		lt: "https://www.countries-ofthe-world.com/flags/flag-of-Lithuania.png",
		kh: "https://www.countries-ofthe-world.com/flags/flag-of-Cambodia.png",
		et: "https://www.countries-ofthe-world.com/flags/flag-of-Ethiopia.png",
		sz: "https://www.countries-ofthe-world.com/flags/flag-of-Swaziland.png",
		ar: "https://www.countries-ofthe-world.com/flags/flag-of-Argentina.png",
		bo: "https://www.countries-ofthe-world.com/flags/flag-of-Bolivia.png",
		cm: "https://www.countries-ofthe-world.com/flags/flag-of-Cameroon.png",
		bf: "https://www.countries-ofthe-world.com/flags/flag-of-Burkina-Faso.png",
		gh: "https://www.countries-ofthe-world.com/flags/flag-of-Ghana.png",
		sa: "https://www.countries-ofthe-world.com/flags/flag-of-Saudi-Arabia.png",
		si: "https://www.countries-ofthe-world.com/flags/flag-of-Slovenia.png",
		gt: "https://www.countries-ofthe-world.com/flags/flag-of-Guatemala.png",
		ba: "https://www.countries-ofthe-world.com/flags/flag-of-Bosnia-Herzegovina.png",
		kw: "https://www.countries-ofthe-world.com/flags/flag-of-Kuwait.png",
		ru: "https://www.countries-ofthe-world.com/flags/flag-of-Russia.png",
		jo: "https://www.countries-ofthe-world.com/flags/flag-of-Jordan.png",
		lc: "https://www.countries-ofthe-world.com/flags/flag-of-St-Lucia.png",
		es: "https://www.countries-ofthe-world.com/flags/flag-of-Spain.png",
		lr: "https://www.countries-ofthe-world.com/flags/flag-of-Liberia.png",
		nl: "https://www.countries-ofthe-world.com/flags/flag-of-Netherlands.png",
		py: "https://www.countries-ofthe-world.com/flags/flag-of-Paraguay.png",
		om: "https://www.countries-ofthe-world.com/flags/flag-of-Oman.png",
		tz: "https://www.countries-ofthe-world.com/flags/flag-of-Tanzania.png",
		ga: "https://www.countries-ofthe-world.com/flags/flag-of-Gabon.png",
		mc: "https://www.countries-ofthe-world.com/flags/flag-of-Monaco.png",
		ye: "https://www.countries-ofthe-world.com/flags/flag-of-Yemen.png",
		pk: "https://www.countries-ofthe-world.com/flags/flag-of-Pakistan.png",
		al: "https://www.countries-ofthe-world.com/flags/flag-of-Albania.png",
		ae: "https://www.countries-ofthe-world.com/flags/flag-of-United-Arab-Emirates.png",
		in: "https://www.countries-ofthe-world.com/flags/flag-of-India.png",
		az: "https://www.countries-ofthe-world.com/flags/flag-of-Azerbaijan.png",
		ls: "https://www.countries-ofthe-world.com/flags/flag-of-Lesotho.png",
		ke: "https://www.countries-ofthe-world.com/flags/flag-of-Kenya.png",
		kr: "https://www.countries-ofthe-world.com/flags/flag-of-Korea-South.png",
		tj: "https://www.countries-ofthe-world.com/flags/flag-of-Tajikistan.png",
		tr: "https://www.countries-ofthe-world.com/flags/flag-of-Turkey.png"
	};
	
	var svg = d3.select("svg"),
	    width = +svg.attr("width"),
	    height = +svg.attr("height");

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map