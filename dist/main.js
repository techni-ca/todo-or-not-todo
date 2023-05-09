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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --default-border: 1px solid black;\\r\\n  --title-bgcolor: #87ceeb;\\r\\n  --page-bgcolor: #e0ffff;\\r\\n}\\r\\n* {\\r\\n  font-family: 'times new roman', serif;\\r\\n}\\r\\n.title {\\r\\n  border: var(--default-border);\\r\\n  border-bottom: none;\\r\\n  border-top-left-radius: 1rem;\\r\\n  border-top-right-radius: 1rem;\\r\\n  padding: 1rem;\\r\\n  margin-bottom: 0px;\\r\\n  background-color: var(--title-bgcolor);\\r\\n}\\r\\n.tab-bg {\\r\\n  display: grid;\\r\\n  grid-template: 50% 50% / 100%;\\r\\n}\\r\\n.tab-bg-upper {\\r\\n  grid-area: 1 / 1 / 2 / 2;\\r\\n  background-color: var(--title-bgcolor);\\r\\n}\\r\\n.tab-bg-lower {\\r\\n  grid-area: 2 / 1 / 3 / 2;\\r\\n  background-color: var(--page-bgcolor);\\r\\n}\\r\\n.tab-bar {\\r\\n  grid-area: 1 / 1 / 3 / 2;\\r\\n  display: flex;\\r\\n  border: var(--default-border);\\r\\n  border-top: none;\\r\\n  border-bottom: none;\\r\\n}\\r\\n.tab {\\r\\n  border: var(--default-border);\\r\\n  border-top-left-radius: .5rem;\\r\\n  border-top-right-radius: .5rem;\\r\\n  border-left: none;\\r\\n  padding: .5rem;\\r\\n  background-color: #b0e0e6;\\r\\n  flex: 0 1 10%;\\r\\n  overflow: hidden;\\r\\n  text-overflow: ellipsis;\\r\\n  white-space: nowrap;\\r\\n  font-size: large;\\r\\n}\\r\\n#add {\\r\\n  flex: 0 0 content;\\r\\n  background-color: #a0cfec;\\r\\n}\\r\\n#left, #right {\\r\\n  flex: 0 0 content;\\r\\n  background-color: #bbffff;\\r\\n\\r\\n}\\r\\n#left {\\r\\n  border-right: var(--default-border);\\r\\n  border-bottom-right-radius: .5rem;\\r\\n}\\r\\n.active {\\r\\n  border-left: none;\\r\\n  border-right: none;\\r\\n  border-bottom: none;\\r\\n  font-weight: bold;\\r\\n  overflow: visible;\\r\\n  background-color: var(--page-bgcolor);\\r\\n  flex: 0 0 10%;\\r\\n}\\r\\n.active + .tab {\\r\\n  border-left: var(--default-border);\\r\\n  border-bottom-left-radius: .5rem;\\r\\n}\\r\\n\\r\\n.after-tab {\\r\\n  border: var(--default-border);\\r\\n  border-top: none;\\r\\n  border-left: none;\\r\\n  border-right: none;\\r\\n  flex: 1 0 0;\\r\\n  background-color: var(--title-bgcolor);\\r\\n}\\r\\n.page {\\r\\n  border: var(--default-border);\\r\\n  border-top: none;\\r\\n  border-bottom-left-radius: 1rem;\\r\\n  border-bottom-right-radius: 1rem;\\r\\n  background-color: var(--page-bgcolor);\\r\\n  position: relative;\\r\\n  height: 35rem;\\r\\n}\\r\\n#description {\\r\\n  padding: 5px;\\r\\n  font-size: large;\\r\\n  white-space: pre-wrap;\\r\\n  margin-left: 5px;\\r\\n  margin-right: 5px;\\r\\n}\\r\\n\\r\\n.active > input {\\r\\n  border-style: none none dotted none;\\r\\n  outline: none;\\r\\n  box-sizing: border-box;  \\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-size: large;\\r\\n  font-weight: bold;\\r\\n  font-style: italic;\\r\\n  background-color: var(--page-bgcolor);\\r\\n}\\r\\n\\r\\n#description > textarea {\\r\\n  border-style: none none dotted none;\\r\\n  outline: none;\\r\\n  box-sizing: border-box;  \\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  resize: none;\\r\\n  font-size: large;\\r\\n  font-style: italic;\\r\\n  background-color: var(--page-bgcolor);\\r\\n}\\r\\n\\r\\n#tasklist {\\r\\n  margin: 5px;\\r\\n}\\r\\n#tasklist > li {\\r\\n  margin: 2px;\\r\\n  padding: 0px;\\r\\n}\\r\\n.current {\\r\\n  font-weight: bold;\\r\\n}\\r\\n.details {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border: 1px solid blue;\\r\\n  background-color: white;\\r\\n  border-radius: 10px;\\r\\n  margin-bottom: 1rem;\\r\\n  position: relative;\\r\\n}\\r\\n.description {\\r\\n  white-space: pre-wrap;\\r\\n  flex: 1;\\r\\n  margin: 0.8rem 10px;\\r\\n  position: relative;\\r\\n}\\r\\n.priority::before {\\r\\n  content: 'Priority:';\\r\\n  font-style: italic;\\r\\n  font-weight: normal;\\r\\n}\\r\\n.duedate::before {\\r\\n  content: 'Due Date:';\\r\\n  font-style: italic;\\r\\n  font-weight: normal;\\r\\n}\\r\\n.completed, .priority, .duedate, .move, #new, #delete {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border: 1px solid blue;\\r\\n  box-sizing: border-box;\\r\\n  border-radius: 2px;\\r\\n  position: absolute;\\r\\n  font-size: x-small;\\r\\n  height: 1.2rem;\\r\\n  padding: 0 .2rem;\\r\\n}\\r\\n.move {\\r\\n  background-color: orange;\\r\\n  font-style: italic;\\r\\n  right: 2rem;\\r\\n  top: 1px;\\r\\n  transform: translateY(-50%);\\r\\n}\\r\\n.completed {\\r\\n  font-weight: bold;\\r\\n  background-color: red;\\r\\n  color: white;\\r\\n  top: 1px;\\r\\n  right: .75rem;\\r\\n  width: 1rem;\\r\\n  transform: translateY(-50%);\\r\\n}\\r\\n.priority {\\r\\n  font-weight: bold;\\r\\n  background-color: cyan;\\r\\n  right: 0.75rem;\\r\\n  bottom: -1px;\\r\\n  width: 3.25rem;\\r\\n  transform: translateY(50%);\\r\\n}\\r\\n.duedate {\\r\\n  background-color: cyan;\\r\\n  right: 4.25rem;\\r\\n  bottom: -1px;\\r\\n  width: auto;\\r\\n  font-weight: bold;\\r\\n  transform: translateY(50%);\\r\\n}\\r\\n#new {\\r\\n  left: 10px;\\r\\n  border-color: green;\\r\\n  background-color: lightgreen;\\r\\n}\\r\\n#delete {\\r\\n  left: calc(10px + 3rem);\\r\\n  border-color: black;\\r\\n  background-color: red;\\r\\n  color: white;\\r\\n  display: none;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-or-not-todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<h1 class=\\\"title\\\">Todo <i>or not todo</i></h1>\\r\\n<div class=\\\"tab-bg\\\">\\r\\n  <div class=\\\"tab-bg-upper\\\"></div>\\r\\n  <div class=\\\"tab-bg-lower\\\"></div>\\r\\n  <div class=\\\"tab-bar\\\">\\r\\n    <span class=\\\"tab\\\" id=\\\"add\\\">+</span>\\r\\n    <span class=\\\"after-tab\\\"></span>\\r\\n  </div>\\r\\n</div>\\r\\n<div class='page'>\\r\\n  <div id='description'></div>\\r\\n  <ul id='tasklist'></ul>\\r\\n  <button id=\\\"new\\\">new task</button>\\r\\n  <button id=\\\"delete\\\">X</button>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://todo-or-not-todo/./src/index.html?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _taskClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskClasses */ \"./src/taskClasses\");\n/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./io */ \"./src/io.js\");\n\r\n\r\n\r\n// insert some sample data\r\nconst defaultProject = new _taskClasses__WEBPACK_IMPORTED_MODULE_0__.Project('General', 'This is the default project.')\r\nconst otherProject = new _taskClasses__WEBPACK_IMPORTED_MODULE_0__.Project('Specific', 'This is the other project.')\r\n;[\r\n  ['task 1', 'task 1 description\\nLine 2\\nLine3', new Date(Date.now() + 24 * 3600000), 3],\r\n  ['task 2', 'task 2 description', new Date(Date.now() + 48 * 3600000), 2],\r\n  ['task 3', 'task 3 description', new Date(Date.now() + 72 * 3600000), 1]\r\n].forEach(t => new _taskClasses__WEBPACK_IMPORTED_MODULE_0__.Task(defaultProject, t[0], t[1], t[2], t[3]))\r\n;[\r\n  ['task A', 'task A description', new Date(Date.now() + 96 * 3600000), 1],\r\n  ['task B', 'task B description', new Date(Date.now() + 120 * 3600000), 2],\r\n  ['task C', 'task C description', new Date(Date.now() + 144 * 3600000), 3]\r\n].forEach(t => new _taskClasses__WEBPACK_IMPORTED_MODULE_0__.Task(otherProject, t[0], t[1], t[2], t[3]))\r\n\r\n_io__WEBPACK_IMPORTED_MODULE_1__.inputOutput.addProjects(_taskClasses__WEBPACK_IMPORTED_MODULE_0__.Project.LIST)\r\n\n\n//# sourceURL=webpack://todo-or-not-todo/./src/index.js?");

/***/ }),

/***/ "./src/io.js":
/*!*******************!*\
  !*** ./src/io.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputOutput\": () => (/* binding */ inputOutput)\n/* harmony export */ });\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _taskClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskClasses */ \"./src/taskClasses\");\n\r\n\r\n\r\nfunction countLines (inString) {\r\n  return (inString.match(/\\n/g) || '').length + 1\r\n}\r\n\r\nclass Tab {\r\n  static LIST = []\r\n  static activeTab = null\r\n\r\n  constructor (project) {\r\n    if (Tab.activeTab === null) {\r\n      Tab.activeTab = this\r\n    }\r\n    this.element = document.createElement('span')\r\n    this.project = project\r\n    Tab.LIST.push(this)\r\n    this.element.classList.add('tab')\r\n    this.element.textContent = this.project.title\r\n    this.element.style.flexBasis = `${Tab.tabSize}%`\r\n    document\r\n      .querySelector('.tab-bar')\r\n      .insertBefore(this.element, document.getElementById('add'))\r\n  }\r\n\r\n  deleteTab () {\r\n    const index = Tab.LIST.indexOf(this)\r\n    Tab.LIST.splice(index, 1)\r\n    this.element.remove()\r\n    if (Tab.LIST.length > 0) {\r\n      if (index === Tab.LIST.length) {\r\n        return Tab.LIST[index - 1]\r\n      } else {\r\n        return Tab.LIST[index]\r\n      }\r\n    }\r\n    return null\r\n  }\r\n\r\n  isActive () {\r\n    return this.element.classList.contains('active')\r\n  }\r\n\r\n  makeActive () {\r\n    if (Tab.activeTab !== null) {\r\n      Tab.activeTab.element.classList.remove('active')\r\n    }\r\n\r\n    Tab.activeTab = this\r\n    this.element.classList.add('active')\r\n\r\n    this.displayMoveArrows()\r\n  }\r\n\r\n  displayMoveArrows () {\r\n    const index = Tab.LIST.indexOf(this)\r\n\r\n    document.getElementById('left')?.remove()\r\n    const prevTab = Tab.LIST[index - 1]\r\n    if (prevTab !== undefined) {\r\n      const left = document.createElement('span')\r\n      left.addEventListener('click', () => prevTab.moveActive())\r\n      this.element.before(\r\n        Object.assign(left, {\r\n          id: 'left',\r\n          className: 'tab',\r\n          textContent: '<'\r\n        })\r\n      )\r\n    }\r\n\r\n    document.getElementById('right')?.remove()\r\n    const nextTab = Tab.LIST[index + 1]\r\n    if (nextTab !== undefined) {\r\n      const right = document.createElement('span')\r\n      right.addEventListener('click', () => nextTab.moveActive())\r\n      this.element.after(\r\n        Object.assign(right, {\r\n          id: 'right',\r\n          className: 'tab',\r\n          textContent: '>'\r\n        })\r\n      )\r\n    }\r\n  }\r\n\r\n  moveActive () {\r\n    ;[this.project, Tab.activeTab.project] = [\r\n      Tab.activeTab.project,\r\n      this.project\r\n    ]\r\n    ;[this.element.textContent, Tab.activeTab.element.textContent] = [\r\n      Tab.activeTab.element.textContent,\r\n      this.element.textContent\r\n    ]\r\n    this.makeActive()\r\n  }\r\n\r\n  editTitle () {\r\n    const oldTitle = this.element.textContent\r\n    if (oldTitle === '') return\r\n    const inputBox = document.createElement('input')\r\n    inputBox.value = oldTitle\r\n    inputBox.addEventListener('keydown', e => {\r\n      switch (e.key) {\r\n        case 'Escape':\r\n          inputBox.value = '' // falls through\r\n        case 'Enter':\r\n          inputBox.blur()\r\n      }\r\n    })\r\n    inputBox.addEventListener('beforeinput', e => {\r\n      if (e.data !== null) {\r\n        if (e.data.length + inputBox.value.length + inputBox.selectionStart - inputBox.selectionEnd > 20) {\r\n          e.preventDefault()\r\n        }\r\n      }\r\n    })\r\n    inputBox.addEventListener('blur', () => {\r\n      if (inputBox.value !== '') {\r\n        this.project.title = inputBox.value\r\n      }\r\n      this.element.textContent = this.project.title\r\n    })\r\n    this.element.textContent = ''\r\n    this.element.appendChild(inputBox)\r\n    inputBox.focus({ focusVisible: true })\r\n  }\r\n}\r\n\r\nclass Page {\r\n  taskElements = []\r\n  constructor (io) {\r\n    this.io = io\r\n    this.description = document.getElementById('description')\r\n    this.description.addEventListener('click', () => {\r\n      this.editDescription()\r\n    })\r\n    this.tasklist = document.getElementById('tasklist')\r\n    document.getElementById('new').addEventListener('click', () => {\r\n      this.newTask()\r\n    })\r\n    document.getElementById('delete').addEventListener('click', () => {\r\n      this.deleteProject()\r\n    })\r\n    this.currentTask = null\r\n  }\r\n\r\n  projectDetails (project) {\r\n    this.project = project\r\n    this.clearTasks()\r\n    project.tasks.forEach((task) => {\r\n      this.addTask(task)\r\n    })\r\n    this.description.textContent = project.description\r\n    if (project.tasks.length === 0 && _taskClasses__WEBPACK_IMPORTED_MODULE_2__.Project.LIST.length > 1) {\r\n      document.getElementById('delete').style.display = 'flex'\r\n    } else {\r\n      document.getElementById('delete').style.display = 'none'\r\n    }\r\n  }\r\n\r\n  clearTasks () {\r\n    this.tasklist.replaceChildren()\r\n    this.taskElements = []\r\n  }\r\n\r\n  addTask (task) {\r\n    const item = document.createElement('li')\r\n    item.textContent = task.title\r\n    item.addEventListener('click', () => {\r\n      if (item.classList.contains('current')) {\r\n        this.editTaskTitle(item)\r\n      } else {\r\n        this.openTask(item, task)\r\n      }\r\n    })\r\n    this.tasklist.appendChild(item)\r\n    this.taskElements.push({ task, element: item })\r\n  }\r\n\r\n  closeTasks () {\r\n    if (this.currentTask !== null) {\r\n      const tasks = this.tasklist.childNodes\r\n      tasks.forEach(node => {\r\n        if (node.classList.contains('current')) {\r\n          node.nextSibling.remove()\r\n          node.classList.remove('current')\r\n        }\r\n      })\r\n      this.currentTask = null\r\n    }\r\n  }\r\n\r\n  deleteProject () {\r\n    this.io.deleteProject(this.project)\r\n  }\r\n\r\n  newTask () {\r\n    const newTask = new _taskClasses__WEBPACK_IMPORTED_MODULE_2__.Task(this.project, 'New Task', 'New Task Description', new Date(Date.now()), 9)\r\n    this.projectDetails(this.project)\r\n    this.taskElements.forEach(taskElement => {\r\n      if (taskElement.task === newTask) {\r\n        this.openTask(taskElement.element, taskElement.task)\r\n      }\r\n    })\r\n  }\r\n\r\n  editTaskTitle (element) {\r\n    console.log(`change ${element.className} from ${this.currentTask.title}`)\r\n  }\r\n\r\n  moveTaskToAnotherProject (element) {\r\n  }\r\n\r\n  completeTask (element) {\r\n    if (this.currentTask.delete()) {\r\n      this.projectDetails(this.project)\r\n    }\r\n  }\r\n\r\n  editTaskDescription (element) {\r\n    console.log(`change ${element.className} from ${this.currentTask.description}`)\r\n  }\r\n\r\n  editDueDate (element) {\r\n    console.log(`change ${element.className} from ${this.currentTask.dueDate.toDateString()}`)\r\n  }\r\n\r\n  editPriority (element) {\r\n    console.log(`change ${element.className} from ${this.currentTask.priority}`)\r\n  }\r\n\r\n  openTask (element, task) {\r\n    const details = Object.assign(document.createElement('div'), {\r\n      className: 'details'\r\n    })\r\n    details.appendChild(\r\n      Object.assign(document.createElement('button'), {\r\n        className: 'completed',\r\n        textContent: 'X',\r\n        onclick: (e) => this.completeTask(e.target)\r\n      })\r\n    )\r\n    details.appendChild(\r\n      Object.assign(document.createElement('button'), {\r\n        className: 'move',\r\n        textContent: 'Move to a different Project',\r\n        onclick: (e) => this.moveTaskToAnotherProject(e.target)\r\n      })\r\n    )\r\n    details.appendChild(\r\n      Object.assign(document.createElement('div'), {\r\n        className: 'description',\r\n        textContent: task.description,\r\n        onclick: (e) => this.editTaskDescription(e.target)\r\n      })\r\n    )\r\n    details.appendChild(\r\n      Object.assign(document.createElement('div'), {\r\n        className: 'duedate',\r\n        textContent: `${task.dueDate.toDateString()}`,\r\n        onclick: (e) => this.editDueDate(e.target)\r\n      })\r\n    )\r\n    details.appendChild(\r\n      Object.assign(document.createElement('div'), {\r\n        className: 'priority',\r\n        textContent: task.priority,\r\n        onclick: (e) => this.editPriority(e.target)\r\n      })\r\n    )\r\n    this.closeTasks()\r\n    this.currentTask = task\r\n    element.classList.add('current')\r\n    element.after(details)\r\n  }\r\n\r\n  editDescription () {\r\n    this.closeTasks()\r\n    const oldDescription = this.description.textContent\r\n    if (oldDescription === '') return\r\n    const inputBox = document.createElement('textarea')\r\n    inputBox.value = oldDescription\r\n    inputBox.rows = countLines(inputBox.value)\r\n    inputBox.addEventListener('keydown', e => {\r\n      switch (e.key) {\r\n        case 'Escape':\r\n          inputBox.value = ''\r\n          inputBox.blur()\r\n          break\r\n        case 'Enter':\r\n          if (!e.shiftKey) inputBox.blur()\r\n      }\r\n    })\r\n    inputBox.addEventListener('input', e => {\r\n      inputBox.rows = countLines(inputBox.value)\r\n    })\r\n    inputBox.addEventListener('blur', () => {\r\n      inputBox.value = inputBox.value.trim()\r\n      if (inputBox.value !== '') {\r\n        this.project.description = inputBox.value\r\n      }\r\n      this.description.textContent = this.project.description\r\n    })\r\n    this.description.textContent = ''\r\n    this.description.appendChild(inputBox)\r\n    inputBox.focus({ focusVisible: true })\r\n  }\r\n}\r\n\r\nclass IO {\r\n  constructor () {\r\n    if (!IO._instance) {\r\n      IO._instance = this\r\n      document.body.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n      this.page = new Page(this)\r\n      this.watchAddTab()\r\n    }\r\n    return IO._instance\r\n  }\r\n\r\n  deleteProject (project) {\r\n    if (project.delete()) {\r\n      this.activateTab(Tab.activeTab.deleteTab())\r\n    }\r\n  }\r\n\r\n  addProjects (list) {\r\n    list.forEach(project => this.addTab(project))\r\n    this.activateTab(Tab.activeTab)\r\n  }\r\n\r\n  activateTab (tabToActivate) {\r\n    tabToActivate.makeActive()\r\n    this.page.projectDetails(tabToActivate.project)\r\n  }\r\n\r\n  addTab (project) {\r\n    const newTab = new Tab(project)\r\n    this.watchTab(newTab)\r\n    return newTab\r\n  }\r\n\r\n  watchTab (tab) {\r\n    tab.element.addEventListener('click', () => {\r\n      this.page.closeTasks()\r\n      if (tab.isActive()) {\r\n        tab.editTitle()\r\n      } else {\r\n        this.activateTab(tab)\r\n      }\r\n    })\r\n  }\r\n\r\n  watchAddTab () {\r\n    document.getElementById('add').addEventListener('click', () => {\r\n      this.activateTab(\r\n        this.addTab(new _taskClasses__WEBPACK_IMPORTED_MODULE_2__.Project('New Project Title', 'New Project Description'))\r\n      )\r\n    })\r\n  }\r\n}\r\n\r\nconst inputOutput = new IO()\r\n\r\n\n\n//# sourceURL=webpack://todo-or-not-todo/./src/io.js?");

/***/ }),

/***/ "./src/taskClasses":
/*!*************************!*\
  !*** ./src/taskClasses ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Project {\r\n  static LIST = []\r\n  tasks = []\r\n\r\n  constructor (title, description) {\r\n    this.title = title\r\n    this.description = description\r\n    Project.LIST.push(this)\r\n  }\r\n\r\n  add (task) {\r\n    this.tasks.push(task)\r\n  }\r\n\r\n  remove (task) {\r\n    const index = this.tasks.indexOf(task)\r\n    this.tasks.splice(index, 1)\r\n    return true\r\n  }\r\n\r\n  delete () {\r\n    if (this.tasks.length > 0) {\r\n      return false;\r\n    } else {\r\n      const index = Project.LIST.indexOf(this)\r\n      Project.LIST.splice(index, 1)\r\n      return true\r\n    }\r\n  }\r\n}\r\n\r\nclass Task {\r\n  constructor (project, title, description, dueDate, priority) {\r\n    project.add(this)\r\n    this.project = project\r\n    this.title = title\r\n    this.description = description\r\n    this.dueDate = dueDate\r\n    this.priority = priority\r\n  }\r\n\r\n  delete () {\r\n    return this.project.remove(this)\r\n  }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-or-not-todo/./src/taskClasses?");

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