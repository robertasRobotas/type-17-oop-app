/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/db.ts":
/*!*******************!*\
  !*** ./src/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DB: () => (/* binding */ DB)\n/* harmony export */ });\nvar DB = /** @class */ (function () {\n    function DB() {\n        this.users = [];\n    }\n    DB.prototype.insertUser = function (user) {\n        this.users.push(user);\n    };\n    DB.prototype.getAllUsers = function () {\n        return this.users;\n    };\n    return DB;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/db.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/user.ts\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ \"./src/db.ts\");\n\n\nvar database = new _db__WEBPACK_IMPORTED_MODULE_1__.DB();\nvar user = new _user__WEBPACK_IMPORTED_MODULE_0__.User({\n    id: \"k1j2n3kj12n3\",\n    name: \"Ramunas\",\n    email: \"ram@gmail.com\",\n});\nvar user2 = new _user__WEBPACK_IMPORTED_MODULE_0__.User({\n    id: \"sdfsdfsdfdsfds\",\n    name: \"Linas\",\n    email: \"linas@gmail.com\",\n});\nvar userData = user.getUser();\nvar user2Data = user2.getUser();\ndatabase.insertUser(userData);\ndatabase.insertUser(user2Data);\nvar users = database.getAllUsers();\nconsole.log(\"users\", users);\n\n\n//# sourceURL=webpack://wbepack-setup/./src/index.ts?");

/***/ }),

/***/ "./src/user.ts":
/*!*********************!*\
  !*** ./src/user.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\nvar User = /** @class */ (function () {\n    function User(_a) {\n        var id = _a.id, name = _a.name, email = _a.email;\n        this.id = id;\n        this.name = name;\n        this.email = email;\n    }\n    User.prototype.getUser = function () {\n        return { id: this.id, name: this.name, email: this.email };\n    };\n    User.prototype.setName = function (name) {\n        this.name = name;\n    };\n    User.prototype.getEmail = function () {\n        return this.email;\n    };\n    User.prototype.setEmail = function (email) {\n        this.email = email;\n    };\n    return User;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/user.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;