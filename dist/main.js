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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --default-border: 1px solid black;\\r\\n  --title-bgcolor: skyblue;\\r\\n  --page-bgcolor: lightcyan;\\r\\n}\\r\\n* {\\r\\n  font-family: 'times new roman', serif;\\r\\n}\\r\\n.title {\\r\\n  border: var(--default-border);\\r\\n  border-bottom: none;\\r\\n  border-top-left-radius: 1rem;\\r\\n  border-top-right-radius: 1rem;\\r\\n  padding: 1rem;\\r\\n  margin-bottom: 0px;\\r\\n  background-color: var(--title-bgcolor);\\r\\n}\\r\\n.tab-bg {\\r\\n  display: grid;\\r\\n  grid-template: 50% 50% / 100%;\\r\\n}\\r\\n.tab-bg-upper {\\r\\n  grid-area: 1 / 1 / 2 / 2;\\r\\n  background-color: var(--title-bgcolor);\\r\\n}\\r\\n.tab-bg-lower {\\r\\n  grid-area: 2 / 1 / 3 / 2;\\r\\n  background-color: var(--page-bgcolor);\\r\\n}\\r\\n.tab-bar {\\r\\n  grid-area: 1 / 1 / 3 / 2;\\r\\n  display: flex;\\r\\n  border: var(--default-border);\\r\\n  border-top: none;\\r\\n  border-bottom: none;\\r\\n}\\r\\n.tab {\\r\\n  border: var(--default-border);\\r\\n  border-top-left-radius: .5rem;\\r\\n  border-top-right-radius: .5rem;\\r\\n  border-left: none;\\r\\n  padding: .5rem;\\r\\n  background-color: powderblue;\\r\\n  flex: 0 1 10%;\\r\\n  overflow: hidden;\\r\\n  text-overflow: ellipsis;\\r\\n  white-space: nowrap;\\r\\n  font-size: large;\\r\\n}\\r\\n#add {\\r\\n  flex: 0 0 content;\\r\\n}\\r\\n.before-active {\\r\\n  border-right: var(--default-border);\\r\\n  border-bottom-right-radius: .5rem;\\r\\n}\\r\\n.active {\\r\\n  border-left: none;\\r\\n  border-right: none;\\r\\n  border-bottom: none;\\r\\n  flex: 0 0 10%;\\r\\n  font-weight: bold;\\r\\n  background-color: var(--page-bgcolor);\\r\\n}\\r\\n.active + .tab {\\r\\n  border-left: var(--default-border);\\r\\n  border-bottom-left-radius: .5rem;\\r\\n}\\r\\n.after-tab {\\r\\n  border: var(--default-border);\\r\\n  border-top: none;\\r\\n  border-left: none;\\r\\n  border-right: none;\\r\\n  flex: 1 0 1%;\\r\\n  background-color: var(--title-bgcolor);\\r\\n}\\r\\n.page {\\r\\n  border: var(--default-border);\\r\\n  border-top: none;\\r\\n  border-bottom-left-radius: 1rem;\\r\\n  border-bottom-right-radius: 1rem;\\r\\n  background-color: var(--page-bgcolor);\\r\\n  height: 10rem;\\r\\n}\\r\\nul {\\r\\n  margin: 0;\\r\\n}\\r\\ninput {\\r\\n  border-style: none none dotted none;\\r\\n  outline: none;\\r\\n  box-sizing: border-box;  \\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-size: large;\\r\\n  font-weight: bold;\\r\\n  font-style: italic;\\r\\n  background-color: var(--page-bgcolor);\\r\\n}\\r\\n.headline {\\r\\n  display: flex;\\r\\n}\\r\\n.move {\\r\\n  margin: 5px;\\r\\n  flex: 0 0 content;\\r\\n}\\r\\n#description {\\r\\n  flex: 1 1 auto;\\r\\n  margin: 5px;\\r\\n  font-size: x-large;\\r\\n}\\r\\n#tasklist > li {\\r\\n  font-size: normal;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-or-not-todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-or-not-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-or-not-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<h1 class=\\\"title\\\">Todo <i>or not todo</i></h1>\\r\\n<div class=\\\"tab-bg\\\">\\r\\n  <div class=\\\"tab-bg-upper\\\"></div>\\r\\n  <div class=\\\"tab-bg-lower\\\"></div>\\r\\n  <div class=\\\"tab-bar\\\">\\r\\n    <span class=\\\"tab\\\" id=\\\"add\\\">+</span>\\r\\n    <span class=\\\"after-tab\\\"></span>\\r\\n  </div>\\r\\n</div>\\r\\n<div class='page'>\\r\\n  <div class=\\\"headline\\\">\\r\\n    <button class='move left'>&lt;</button>\\r\\n    <span id='description'></span>\\r\\n    <button class='move right'>&gt;</button>\\r\\n  </div>\\r\\n  <ul id='tasklist'>\\r\\n  </ul>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://todo-or-not-todo/./src/index.html?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-or-not-todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-or-not-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-or-not-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-or-not-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-or-not-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-or-not-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-or-not-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _taskClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskClasses */ \"./src/taskClasses\");\n/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./io */ \"./src/io.js\");\n\r\n\r\n\r\n// insert some sample data\r\nconst defaultProject = new _taskClasses__WEBPACK_IMPORTED_MODULE_0__.Project(\r\n  'General',\r\n  'This is the default project.'\r\n)\r\nconst otherProject = new _taskClasses__WEBPACK_IMPORTED_MODULE_0__.Project(\r\n  'Specific',\r\n  'This is the other project.'\r\n)\r\n;[\r\n  ['task 1', new Date(Date.now() + (24 * 3600000))],\r\n  ['task 2', new Date(Date.now() + (48 * 3600000))],\r\n  ['task 3', new Date(Date.now() + (72 * 3600000))]\r\n].forEach(t => new _taskClasses__WEBPACK_IMPORTED_MODULE_0__.Task(defaultProject, t[0], t[1]))\r\n;[\r\n  ['task A', new Date(Date.now() + (96 * 3600000))],\r\n  ['task B', new Date(Date.now() + (120 * 3600000))],\r\n  ['task C', new Date(Date.now() + (144 * 3600000))]\r\n].forEach(t => new _taskClasses__WEBPACK_IMPORTED_MODULE_0__.Task(otherProject, t[0], t[1]))\r\n\r\nconst myOutput = new _io__WEBPACK_IMPORTED_MODULE_1__.Output(_taskClasses__WEBPACK_IMPORTED_MODULE_0__.Project.LIST)\r\nconst myInput = new _io__WEBPACK_IMPORTED_MODULE_1__.Input(myOutput)\r\n\r\nmyOutput.activateTab(defaultProject)\r\nmyInput.watchAllTabs()\r\n\n\n//# sourceURL=webpack://todo-or-not-todo/./src/index.js?");

/***/ }),

/***/ "./src/io.js":
/*!*******************!*\
  !*** ./src/io.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Input\": () => (/* binding */ Input),\n/* harmony export */   \"Output\": () => (/* binding */ Output)\n/* harmony export */ });\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _taskClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskClasses */ \"./src/taskClasses\");\n\r\n\r\n\r\n\r\nclass Tab {\r\n  static LIST = []\r\n  constructor (project) {\r\n    const tabBar = document.querySelector('.tab-bar')\r\n    const lastTab = document.getElementById('add')\r\n    this.element = document.createElement('span')\r\n    this.project = project\r\n    Tab.LIST.push(this)\r\n    this.element.classList.add('tab')\r\n    this.element.textContent = this.project.title\r\n    this.element.style.flexBasis = `${Tab.tabSize}%`\r\n    tabBar.insertBefore(this.element, lastTab)\r\n    this.active = false\r\n  }\r\n\r\n  static findTab (project) {\r\n    for (let i = 0; i < Tab.LIST.length; i++) {\r\n      if (Tab.LIST[i].project === project) return Tab.LIST[i]\r\n    }\r\n    return null\r\n  }\r\n\r\n  static findActive () {\r\n    for (let i = 0; i < Tab.LIST.length; i++) {\r\n      if (Tab.LIST[i].active) return i\r\n    }\r\n    return null\r\n  }\r\n\r\n  static deactivateAll () {\r\n    Tab.LIST.forEach(tab => {\r\n      tab.element.classList.remove('before-active')\r\n      tab.element.classList.remove('active')\r\n      tab.active = false\r\n    })\r\n  }\r\n\r\n  static moveActive (change) {\r\n    const oldIndex = Tab.findActive()\r\n    const newIndex = oldIndex + change\r\n    if (newIndex < 0 || newIndex >= Tab.LIST.length) return null\r\n    Tab.deactivateAll()\r\n    const project = Tab.LIST[oldIndex].project\r\n    Tab.LIST[oldIndex].project = Tab.LIST[newIndex].project\r\n    Tab.LIST[oldIndex].element.textContent = Tab.LIST[newIndex].project.title\r\n    Tab.LIST[newIndex].project = project\r\n    Tab.LIST[newIndex].element.textContent = project.title\r\n    Tab.LIST[newIndex].makeActive()\r\n  }\r\n\r\n  makeActive () {\r\n    const myIndex = Tab.LIST.indexOf(this)\r\n    this.element.classList.add('active')\r\n    if (myIndex > 0) {\r\n      const prevTab = Tab.LIST[myIndex - 1]\r\n      prevTab.element.classList.add('before-active')\r\n    }\r\n    this.active = true\r\n  }\r\n\r\n  editTitle () {\r\n    const oldTitle = this.element.textContent\r\n    if (oldTitle === '') return\r\n    const inputBox = document.createElement('input')\r\n    inputBox.value = oldTitle\r\n    inputBox.addEventListener('keydown', (e) => {\r\n      switch (e.key) {\r\n        case 'Escape': inputBox.value = '' // falls through\r\n        case 'Enter': inputBox.blur()\r\n      }\r\n    })\r\n    inputBox.addEventListener('blur', () => {\r\n      if (inputBox.value !== '') {\r\n        this.project.title = inputBox.value\r\n      }\r\n      this.element.textContent = this.project.title\r\n    })\r\n    this.element.textContent = ''\r\n    this.element.appendChild(inputBox)\r\n    inputBox.focus({ focusVisible: true })\r\n  }\r\n}\r\n\r\nclass Input {\r\n  constructor (display) {\r\n    this.output = display\r\n  }\r\n\r\n  watchAllTabs () {\r\n    Tab.LIST.forEach(tab => this.watchTab(tab))\r\n    document.getElementById('add').addEventListener('click', () => {\r\n      const newProject = new _taskClasses__WEBPACK_IMPORTED_MODULE_2__.Project('New Project', 'New Project Description')\r\n      this.watchTab(new Tab(newProject))\r\n      this.output.activateTab(newProject)\r\n    })\r\n    document.querySelector('.move.left').addEventListener('click', () => { Tab.moveActive(-1) })\r\n    document.querySelector('.move.right').addEventListener('click', () => { Tab.moveActive(1) })\r\n  }\r\n\r\n  watchTab (tab) {\r\n    tab.element.addEventListener('click', () => {\r\n      if (tab.element.classList.contains('active')) {\r\n        tab.editTitle()\r\n      } else {\r\n        this.output.activateTab(tab.project)\r\n      }\r\n    })\r\n  }\r\n}\r\n\r\nclass Output {\r\n  constructor (list) {\r\n    document.body.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n    list.forEach(project => new Tab(project))\r\n  }\r\n\r\n  activateTab (project) {\r\n    const tabToActivate = Tab.findTab(project)\r\n    if (tabToActivate === null) return false\r\n    Tab.deactivateAll()\r\n    tabToActivate.makeActive()\r\n\r\n    const fragment = document.createDocumentFragment()\r\n    project.tasks.forEach(task => {\r\n      const item = document.createElement('li')\r\n      item.textContent = task.toString()\r\n      fragment.appendChild(item)\r\n    })\r\n    document.getElementById('tasklist').replaceChildren(fragment)\r\n    document.getElementById('description').textContent = project.description\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-or-not-todo/./src/io.js?");

/***/ }),

/***/ "./src/taskClasses":
/*!*************************!*\
  !*** ./src/taskClasses ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Project {\r\n  tasks = []\r\n  static LIST = []\r\n  constructor (title, description) {\r\n    this.title = title\r\n    this.description = description\r\n    Project.LIST.push(this)\r\n  }\r\n\r\n  add (task) {\r\n    this.tasks.push(task)\r\n  }\r\n\r\n  remove (task) {\r\n    const index = this.tasks.indexOf(task)\r\n    const newTasks = this.tasks.splice(index, 1)\r\n    this.tasks = newTasks\r\n  }\r\n}\r\n\r\nclass Task {\r\n  constructor (project, description, dueDate) {\r\n    project.add(this)\r\n    this.description = description\r\n    this.dueDate = dueDate\r\n    this.timeCreated = Date.now()\r\n  }\r\n\r\n  delete () {\r\n    this.project.remove(this)\r\n  }\r\n\r\n  toString () {\r\n    return `(${this.description}) is due ${this.dueDate.toDateString()}`\r\n  }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-or-not-todo/./src/taskClasses?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;