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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./photos/Photo by Tahir Shaw from Pexels.jpg */ "./src/photos/Photo by Tahir Shaw from Pexels.jpg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./icons/search.png */ "./src/icons/search.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "html {\n  height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed; }\n\nbody {\n  box-sizing: border-box;\n  overflow: auto;\n  padding: 0;\n  width: 1200px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: sans-serif; }\n\nmain {\n  width: 820px; }\n\n.signatureBackground {\n  position: absolute;\n  left: 0;\n  top: 0;\n  font-size: 8px; }\n\n.buttonClear {\n  z-index: 100;\n  position: fixed;\n  right: 20px;\n  top: 50px;\n  padding: 10px;\n  height: 40px;\n  border: 1px solid #fff;\n  color: #fff;\n  background-color: transparent;\n  outline: none;\n  transition: background-color 1s;\n  transition: color 1s; }\n\n.buttonClear:hover {\n  background-color: #fff;\n  color: #000; }\n\n.searchInput {\n  overflow: hidden;\n  margin: 0 140px;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 500px 40px; }\n  .searchInput #searchInp {\n    grid-column: 1;\n    margin-top: 50px;\n    width: 500px;\n    height: 40px;\n    border: none;\n    text-align: center;\n    font-size: 20px;\n    outline: none; }\n  .searchInput #buttonInp {\n    margin-top: 50px;\n    grid-column: 2;\n    border: none;\n    width: 40px;\n    height: 42px;\n    background-color: #fff;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    outline: none;\n    transition: background-color 1s; }\n  .searchInput #buttonInp:hover {\n    background-color: #dce5e8; }\n\n.sticky {\n  position: fixed;\n  top: 0;\n  width: 100%; }\n\n.weatherInfoBlock:last-child {\n  margin-bottom: 20px; }\n\n.weatherInfoBlock {\n  margin: 0 auto;\n  position: relative;\n  background-image: linear-gradient(rgba(61, 218, 95, 0.596), rgba(6, 18, 129, 0.644)), url(\"https://www.inventair-project.eu/images/8.jpg\");\n  background-position: center;\n  display: grid;\n  width: 800px;\n  margin-top: 120px;\n  grid-template-columns: 1fr;\n  grid-template-rows: 60px 30px 80px 80px;\n  padding: 10px;\n  border-radius: 10px;\n  color: #fff;\n  box-shadow: 0 8px 10px -2px rgba(58, 56, 56, 0.493);\n  margin-bottom: -80px; }\n  .weatherInfoBlock .weatherCommon {\n    margin-left: 30px; }\n  .weatherInfoBlock img {\n    position: absolute;\n    top: 70px;\n    right: 40px;\n    width: 150px;\n    height: 150px; }\n  .weatherInfoBlock .weatherInfoCity {\n    grid-column: 1;\n    grid-row: 1;\n    margin-top: 20px;\n    font-size: 36px; }\n  .weatherInfoBlock .weatherInfoHour {\n    grid-column: 1;\n    grid-row: 2;\n    margin-top: 10px;\n    font-size: 16px; }\n  .weatherInfoBlock .weatherInfoTemperature {\n    display: flex;\n    grid-column: 1;\n    grid-row: 3;\n    margin-top: 10px;\n    font-size: 80px; }\n  .weatherInfoBlock .weatherInfoPressure {\n    grid-column: 1;\n    grid-row: 4;\n    margin-top: 30px;\n    font-size: 22px; }\n  .weatherInfoBlock .degrees {\n    grid-column: 1;\n    grid-row: 3;\n    font-size: 34px;\n    margin-top: 10px; }\n\n.moreInfo {\n  z-index: 1;\n  position: absolute;\n  margin-left: 45%;\n  margin-top: 220px;\n  width: 80px;\n  color: #fff;\n  background-color: transparent;\n  outline: none;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  transition: background-color 1s;\n  transition: color 1s; }\n\n.moreInfo:hover {\n  background-color: #fff;\n  color: #000; }\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 2;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 30px auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; }\n  .modal-content h3 {\n    margin-left: 80px;\n    text-align: center; }\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n\n.hourWeather {\n  width: 99%;\n  margin-left: 5px;\n  margin-top: 5px;\n  background-color: #dbdbdb;\n  display: grid;\n  padding: 4px;\n  grid-template-columns: 60px 1fr 1fr 1fr 1fr 1fr;\n  text-align: center; }\n  .hourWeather img {\n    width: 50px;\n    height: 50px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const stickySearchInput_1 = __webpack_require__(/*! ./stickySearchInput */ "./src/stickySearchInput.ts");
class App {
    constructor() {
        this.opwApiKey = "99eb7e6cb81a838f7d22416630652f72";
        this.liczbaWywolan = 0;
        this.stickySearchI();
        this.getLocalStorageNumberLines();
        this.getItemsFromLocalStorage();
        this.getXCityWeather();
        this.spanClosedFn();
        setInterval(() => this.timedRefresh(), 200000);
        this.pressButtonOrClickMouse();
        this.loadListenerExtendedWeather();
    }
    getXCityWeather() {
        const tmp = document.getElementById("clearButton");
        tmp.addEventListener("click", function () {
            const weatherBlockCount = document.getElementById("weatherBlocksID").childElementCount;
            for (let i = 0; i < weatherBlockCount; i++) {
                const weatherBlock = document.getElementById("weatherBlocksID");
                weatherBlock.removeChild(weatherBlock.lastChild);
                localStorage.clear();
            }
        });
    }
    spanClosedFn() {
        const span1 = document.getElementById("spanFirst");
        const modal = document.getElementById("myModal");
        const modal1 = document.getElementById("modal1");
        window.onclick = function (event) {
            if (event.target == modal || event.target == span1) {
                modal.style.display = "none";
                modal1.textContent = "";
            }
        };
    }
    loadListenerExtendedWeather() {
        document.body.addEventListener("click", (e) => this.getValue(e));
    }
    getValue(e) {
        console.log(e.target);
        let nazwa = document.querySelector(".moreInfo");
        const tmp = e.target;
        if (tmp.className == "moreInfo") {
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                const modal = document.getElementById('modal1');
                const tmp = e.target;
                const city = yield this.getDailyWeather(tmp.id);
                for (let i = 0; i < 12; i++) {
                    const div = document.createElement('div');
                    div.className = "hourWeather";
                    const img = document.createElement('img');
                    const p0 = document.createElement('p');
                    const p1 = document.createElement('p');
                    const p2 = document.createElement('p');
                    const p3 = document.createElement('p');
                    const p4 = document.createElement('p');
                    console.log(city);
                    const srcImg = `http://openweathermap.org/img/wn/${city.hourly[i].weather[0].icon}@2x.png`;
                    img.src = srcImg;
                    p0.innerHTML = city.hourly[i].weather[0].main;
                    p1.innerHTML = "Temperature: " + Math.round(city.hourly[i].temp - 273.15).toString() + "&ordm C";
                    p2.innerHTML = "Pressure: " + city.hourly[i].pressure + " hPa";
                    p3.innerHTML = "Humidity: " + city.hourly[i].humidity + "%";
                    const data = new Date(city.hourly[i].dt * 1000);
                    if (data.getHours().toString().length > 1) {
                        p4.innerHTML = data.getHours().toString() + ":00";
                    }
                    else {
                        p4.innerHTML = "0" + data.getHours().toString() + ":00";
                    }
                    div.appendChild(img);
                    div.appendChild(p0);
                    div.appendChild(p1);
                    div.appendChild(p2);
                    div.appendChild(p3);
                    div.appendChild(p4);
                    modal.appendChild(div);
                }
            }), 50);
        }
    }
    popUpWindow(e) {
        const modal = document.getElementById('myModal');
        modal.style.display = "block";
    }
    stickySearchI() {
        const tmp = new stickySearchInput_1.stickySearchInput();
        tmp.stickySearch("searchInputID");
    }
    timedRefresh() {
        const weatherBlockCount = document.getElementById("weatherBlocksID").childElementCount;
        for (let i = 0; i < weatherBlockCount; i++) {
            const weatherBlock = document.getElementById("weatherBlocksID");
            weatherBlock.removeChild(weatherBlock.lastChild);
        }
        this.getLocalStorageNumberLines();
        this.getItemsFromLocalStorage();
    }
    pressButtonOrClickMouse() {
        const inputCityBtn = document.getElementById("buttonInp");
        inputCityBtn.addEventListener("click", (e) => this.getCity());
        const inputCitySearch = document.getElementById("searchInp");
        inputCitySearch.addEventListener("keydown", (e) => {
            if (e.key === 'Enter') {
                this.getCity();
            }
        });
    }
    getCity() {
        const inputCity = document.getElementById("searchInp");
        const city = inputCity.value;
        this.getCityInfo(city);
    }
    getLocalStorageNumberLines() {
        const wywolania = localStorage.getItem('liczbaWywolan');
        this.liczbaWywolan = JSON.parse(wywolania);
    }
    getItemsFromLocalStorage() {
        return __awaiter(this, void 0, void 0, function* () {
            const obiekty = this.getData();
            let items;
            for (let i = 0; i < this.liczbaWywolan; i++) {
                items = yield obiekty;
            }
            for (let i = 0; i < this.liczbaWywolan; i++) {
                const item = JSON.parse(items[i]);
                if (item != null)
                    this.getCityInfoFromLocalStorage(item);
            }
        });
    }
    getCityInfo(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const weather = yield this.getWeather(city);
            const newDiv = document.createElement("div");
            newDiv.className = "weatherInfoBlock";
            newDiv.id = "" + this.liczbaWywolan;
            const newName = document.createElement("p");
            const newLastActualisation = document.createElement("p");
            const newDegrees = document.createElement("p");
            const newAirPressureText = document.createElement("p");
            const newImage = document.createElement("img");
            const newAirPressure = document.createElement("span");
            const newDegreesChar = document.createElement("p");
            const newBtn = document.createElement("button");
            newName.innerHTML = weather.name;
            newLastActualisation.innerHTML = "Last actualisation: " + new Date().toLocaleTimeString('en-GB', { hour: "numeric",
                minute: "numeric" });
            newDegrees.innerHTML = Math.round(weather.main.temp - 273.15).toString();
            newAirPressureText.innerHTML = "Air pressure: ";
            newAirPressure.innerHTML = weather.main.pressure + " hPa";
            const srcImg = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
            newImage.src = srcImg;
            newDegreesChar.innerHTML = "&ordm";
            newBtn.innerHTML = "More information";
            newName.classList.add("weatherInfoCity");
            newLastActualisation.classList.add("weatherInfoHour");
            newDegrees.classList.add("weatherInfoTemperature");
            newAirPressureText.classList.add("weatherInfoPressure");
            newAirPressure.classList.add("pressureValue");
            newDegreesChar.classList.add("degrees");
            newBtn.classList.add("moreInfo");
            newBtn.id = weather.name;
            newBtn.onclick = this.popUpWindow;
            newName.classList.add("weatherCommon");
            newLastActualisation.classList.add("weatherCommon");
            newDegrees.classList.add("weatherCommon");
            newAirPressureText.classList.add("weatherCommon");
            const weatherBlock = document.getElementById("weatherBlocksID");
            weatherBlock.appendChild(newDiv);
            newDiv.appendChild(newName);
            newDiv.appendChild(newLastActualisation);
            newDiv.appendChild(newDegrees);
            newDiv.appendChild(newAirPressureText);
            newAirPressureText.appendChild(newAirPressure);
            newDiv.appendChild(newImage);
            newDegrees.appendChild(newDegreesChar);
            newDiv.appendChild(newBtn);
            const inputCitySearch = document.getElementById("searchInp");
            inputCitySearch.value = "";
            this.saveData(weather);
        });
    }
    getCityInfoFromLocalStorage(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const weather = yield this.getWeather(item.name);
            const newDiv = document.createElement("div");
            newDiv.className = "weatherInfoBlock";
            newDiv.id = "" + this.liczbaWywolan;
            const newName = document.createElement("p");
            const newLastActualisation = document.createElement("p");
            const newDegrees = document.createElement("p");
            const newAirPressureText = document.createElement("p");
            const newImage = document.createElement("img");
            const newAirPressure = document.createElement("span");
            const newDegreesChar = document.createElement("p");
            const newBtn = document.createElement("button");
            newName.innerHTML = weather.name;
            newLastActualisation.innerHTML = "Last actualisation: " + new Date().toLocaleTimeString('en-GB', { hour: "numeric",
                minute: "numeric" });
            newDegrees.innerHTML = Math.round(weather.main.temp - 273.15).toString();
            newAirPressureText.innerHTML = "Air pressure: ";
            newAirPressure.innerHTML = weather.main.pressure + " hPa";
            const srcImg = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
            newImage.src = srcImg;
            newDegreesChar.innerHTML = "&ordm";
            newBtn.innerHTML = "More information";
            newName.classList.add("weatherInfoCity");
            newLastActualisation.classList.add("weatherInfoHour");
            newDegrees.classList.add("weatherInfoTemperature");
            newAirPressureText.classList.add("weatherInfoPressure");
            newAirPressure.classList.add("pressureValue");
            newDegreesChar.classList.add("degrees");
            newBtn.classList.add("moreInfo");
            newBtn.id = weather.name;
            newBtn.onclick = this.popUpWindow;
            newName.classList.add("weatherCommon");
            newLastActualisation.classList.add("weatherCommon");
            newDegrees.classList.add("weatherCommon");
            newAirPressureText.classList.add("weatherCommon");
            const weatherBlock = document.getElementById("weatherBlocksID");
            weatherBlock.appendChild(newDiv);
            newDiv.appendChild(newName);
            newDiv.appendChild(newLastActualisation);
            newDiv.appendChild(newDegrees);
            newDiv.appendChild(newAirPressureText);
            newAirPressureText.appendChild(newAirPressure);
            newDiv.appendChild(newImage);
            newDegrees.appendChild(newDegreesChar);
            newDiv.appendChild(newBtn);
            const inputCitySearch = document.getElementById("searchInp");
            inputCitySearch.value = "";
            this.liczbaWywolan++;
            localStorage.setItem('liczbaWywolan', JSON.stringify(this.liczbaWywolan));
        });
    }
    getDailyWeather(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const cityName = yield this.getWeather(city);
            const lat = yield cityName.coord.lat;
            const lon = yield cityName.coord.lon;
            const daily = "daily";
            const openWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${daily}&appid=${this.opwApiKey}`;
            const weatherResponse = yield fetch(openWeatherUrl);
            const weatherDaily = yield weatherResponse.json();
            return weatherDaily;
        });
    }
    getWeather(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
            const weatherResponse = yield fetch(openWeatherUrl);
            const weatherData = yield weatherResponse.json();
            return weatherData;
        });
    }
    saveData(data) {
        this.liczbaWywolan++;
        localStorage.setItem("btn" + (this.liczbaWywolan), JSON.stringify(data));
        localStorage.setItem('liczbaWywolan', JSON.stringify(this.liczbaWywolan));
    }
    deleteData(data) {
        localStorage.removeItem(data);
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            const items = [];
            const quantity = this.liczbaWywolan;
            for (let i = 1; i <= quantity; i++) {
                items[i - 1] = localStorage.getItem('btn' + i);
            }
            return items;
        });
    }
}
exports.App = App;


/***/ }),

/***/ "./src/icons/search.png":
/*!******************************!*\
  !*** ./src/icons/search.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fac715bf8ed8ca35daaf579eb77507f3.png");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __webpack_require__(/*! ./app */ "./src/app.ts");
__webpack_require__(/*! ./main.scss */ "./src/main.scss");
const app = new app_1.App();


/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/photos/Photo by Tahir Shaw from Pexels.jpg":
/*!********************************************************!*\
  !*** ./src/photos/Photo by Tahir Shaw from Pexels.jpg ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1ac2c69b60627724646f9e8bab3193ee.jpg");

/***/ }),

/***/ "./src/stickySearchInput.ts":
/*!**********************************!*\
  !*** ./src/stickySearchInput.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class stickySearchInput {
    stickySearch(id) {
        const search = document.getElementById(id);
        const sticky = search.offsetTop;
        if (window.pageYOffset >= sticky) {
            search.classList.add("sticky");
        }
        else {
            search.classList.remove("sticky");
        }
    }
}
exports.stickySearchInput = stickySearchInput;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb25zL3NlYXJjaC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnNjc3M/NGU1MyIsIndlYnBhY2s6Ly8vLi9zcmMvcGhvdG9zL1Bob3RvIGJ5IFRhaGlyIFNoYXcgZnJvbSBQZXhlbHMuanBnIiwid2VicGFjazovLy8uL3NyYy9zdGlja3lTZWFyY2hJbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FB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QUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLFNBQVMsQ0FBQztvQkFDL0YsRUFBRSxDQUFDLFNBQVMsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO29CQUMvRCxFQUFFLENBQUMsU0FBUyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7b0JBRTVELE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxDQUFDO29CQUU5QyxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO3dCQUNyQyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUM7cUJBQ3JEO3lCQUFJO3dCQUNELEVBQUUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUM7cUJBQ3pEO29CQUVELEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3BCLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3BCLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3BCLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3BCLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBRXBCLEtBQUssQ0FBQyxXQUFXLENB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LEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNoRDtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNKO0FBdlZELGtCQXVWQzs7Ozs7Ozs7Ozs7OztBQ3pWRDtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsK0RBQTJCO0FBQzNCLDBEQUFxQjtBQUVyQixNQUFNLEdBQUcsR0FBRyxJQUFJLFNBQUcsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7QUNIdEIsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxpTUFBOEY7O0FBRWhJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLE1BQWEsaUJBQWlCO0lBQzFCLFlBQVksQ0FBQyxFQUFPO1FBQ2hCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUVoQyxJQUFHLE1BQU0sQ0FBQyxXQUFXLElBQUcsTUFBTSxFQUFDO1lBQzNCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDO2FBQUk7WUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7Q0FFSjtBQVpELDhDQVlDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vcGhvdG9zL1Bob3RvIGJ5IFRhaGlyIFNoYXcgZnJvbSBQZXhlbHMuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4vaWNvbnMvc2VhcmNoLnBuZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgfVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IH1cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiA4MjBweDsgfVxcblxcbi5zaWduYXR1cmVCYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBmb250LXNpemU6IDhweDsgfVxcblxcbi5idXR0b25DbGVhciB7XFxuICB6LWluZGV4OiAxMDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMjBweDtcXG4gIHRvcDogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMXM7IH1cXG5cXG4uYnV0dG9uQ2xlYXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuLnNlYXJjaElucHV0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDAgMTQwcHg7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAwcHggNDBweDsgfVxcbiAgLnNlYXJjaElucHV0ICNzZWFyY2hJbnAge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gIC5zZWFyY2hJbnB1dCAjYnV0dG9uSW5wIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzOyB9XFxuICAuc2VhcmNoSW5wdXQgI2J1dHRvbklucDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2U1ZTg7IH1cXG5cXG4uc3RpY2t5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLndlYXRoZXJJbmZvQmxvY2s6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuXFxuLndlYXRoZXJJbmZvQmxvY2sge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSg2MSwgMjE4LCA5NSwgMC41OTYpLCByZ2JhKDYsIDE4LCAxMjksIDAuNjQ0KSksIHVybChcXFwiaHR0cHM6Ly93d3cuaW52ZW50YWlyLXByb2plY3QuZXUvaW1hZ2VzLzguanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luLXRvcDogMTIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAzMHB4IDgwcHggODBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDhweCAxMHB4IC0ycHggcmdiYSg1OCwgNTYsIDU2LCAwLjQ5Myk7XFxuICBtYXJnaW4tYm90dG9tOiAtODBweDsgfVxcbiAgLndlYXRoZXJJbmZvQmxvY2sgLndlYXRoZXJDb21tb24ge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDsgfVxcbiAgLndlYXRoZXJJbmZvQmxvY2sgaW1nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDcwcHg7XFxuICAgIHJpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7IH1cXG4gIC53ZWF0aGVySW5mb0Jsb2NrIC53ZWF0aGVySW5mb0NpdHkge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzZweDsgfVxcbiAgLndlYXRoZXJJbmZvQmxvY2sgLndlYXRoZXJJbmZvSG91ciB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4OyB9XFxuICAud2VhdGhlckluZm9CbG9jayAud2VhdGhlckluZm9UZW1wZXJhdHVyZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiA4MHB4OyB9XFxuICAud2VhdGhlckluZm9CbG9jayAud2VhdGhlckluZm9QcmVzc3VyZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogNDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgZm9udC1zaXplOiAyMnB4OyB9XFxuICAud2VhdGhlckluZm9CbG9jayAuZGVncmVlcyB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuXFxuLm1vcmVJbmZvIHtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tbGVmdDogNDUlO1xcbiAgbWFyZ2luLXRvcDogMjIwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXM7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAxczsgfVxcblxcbi5tb3JlSW5mbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDI7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogODAlOyB9XFxuICAubW9kYWwtY29udGVudCBoMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmhvdXJXZWF0aGVyIHtcXG4gIHdpZHRoOiA5OSU7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmhvdXJXZWF0aGVyIGltZyB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQge3N0aWNreVNlYXJjaElucHV0fSBmcm9tICcuL3N0aWNreVNlYXJjaElucHV0JztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gICAgb3B3QXBpS2V5ID0gXCI5OWViN2U2Y2I4MWE4MzhmN2QyMjQxNjYzMDY1MmY3MlwiO1xuICAgIGxpY3piYVd5d29sYW46IG51bWJlciA9IDA7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0aWNreVNlYXJjaEkoKTtcbiAgICAgICAgdGhpcy5nZXRMb2NhbFN0b3JhZ2VOdW1iZXJMaW5lcygpO1xuICAgICAgICB0aGlzLmdldEl0ZW1zRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLmdldFhDaXR5V2VhdGhlcigpO1xuICAgICAgICB0aGlzLnNwYW5DbG9zZWRGbigpO1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnRpbWVkUmVmcmVzaCgpLCAyMDAwMDApO1xuICAgICAgICB0aGlzLnByZXNzQnV0dG9uT3JDbGlja01vdXNlKCk7XG5cbiAgICAgICAgdGhpcy5sb2FkTGlzdGVuZXJFeHRlbmRlZFdlYXRoZXIoKTtcbiAgICB9XG5cbiAgICBnZXRYQ2l0eVdlYXRoZXIoKXtcbiAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGVhckJ1dHRvblwiKTtcbiAgICAgICAgdG1wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3Qgd2VhdGhlckJsb2NrQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJCbG9ja3NJRFwiKS5jaGlsZEVsZW1lbnRDb3VudDtcblxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8d2VhdGhlckJsb2NrQ291bnQ7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVyQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJCbG9ja3NJRFwiKTtcbiAgICAgICAgICAgIHdlYXRoZXJCbG9jay5yZW1vdmVDaGlsZCh3ZWF0aGVyQmxvY2subGFzdENoaWxkKTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3BhbkNsb3NlZEZuKCl7XG4gICAgICAgIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGFuRmlyc3RcIik7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xuICAgICAgICBjb25zdCBtb2RhbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsMVwiKTtcblxuICAgICAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50OiBFdmVudCl7XG4gICAgICAgICAgICBpZihldmVudC50YXJnZXQgPT0gbW9kYWwgfHwgZXZlbnQudGFyZ2V0ID09IHNwYW4xKXtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgICAgIG1vZGFsMS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGxvYWRMaXN0ZW5lckV4dGVuZGVkV2VhdGhlcigpe1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTpFdmVudCkgPT4gdGhpcy5nZXRWYWx1ZShlKSk7XG4gICAgfVxuXG5cbiAgICBnZXRWYWx1ZShlOkV2ZW50KXtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgICAgICAgbGV0IG5hendhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3JlSW5mb1wiKTtcbiAgICAgICAgICAgIGNvbnN0IHRtcCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgICAgIGlmKHRtcC5jbGFzc05hbWUgPT0gXCJtb3JlSW5mb1wiKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYXN5bmMoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvbWVUZXh0XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsMScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAvL2lmKHRtcC5pZCA9PT0gJ0xpbWFub3dhJyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNpdHkgPSBhd2FpdCB0aGlzLmdldERhaWx5V2VhdGhlcih0bXAuaWQpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPDEyOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwiaG91cldlYXRoZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3JjSW1nID0gIGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2NpdHkuaG91cmx5W2ldLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHNyY0ltZztcblxuICAgICAgICAgICAgICAgICAgICBwMC5pbm5lckhUTUwgPSBjaXR5LmhvdXJseVtpXS53ZWF0aGVyWzBdLm1haW47XG4gICAgICAgICAgICAgICAgICAgIHAxLmlubmVySFRNTCA9IFwiVGVtcGVyYXR1cmU6IFwiICsgTWF0aC5yb3VuZChjaXR5LmhvdXJseVtpXS50ZW1wLTI3My4xNSkudG9TdHJpbmcoKSArIFwiJm9yZG0gQ1wiO1xuICAgICAgICAgICAgICAgICAgICBwMi5pbm5lckhUTUwgPSBcIlByZXNzdXJlOiBcIiArIGNpdHkuaG91cmx5W2ldLnByZXNzdXJlICsgXCIgaFBhXCI7XG4gICAgICAgICAgICAgICAgICAgIHAzLmlubmVySFRNTCA9IFwiSHVtaWRpdHk6IFwiICsgY2l0eS5ob3VybHlbaV0uaHVtaWRpdHkgKyBcIiVcIjtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IERhdGUoY2l0eS5ob3VybHlbaV0uZHQqMTAwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5nZXRIb3VycygpLnRvU3RyaW5nKCkubGVuZ3RoID4gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwNC5pbm5lckhUTUwgPSBkYXRhLmdldEhvdXJzKCkudG9TdHJpbmcoKSArIFwiOjAwXCI7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgcDQuaW5uZXJIVE1MID0gXCIwXCIrZGF0YS5nZXRIb3VycygpLnRvU3RyaW5nKCkgKyBcIjowMFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChwMCk7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChwMSk7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChwMik7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChwMyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChwNCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHBvcFVwV2luZG93KGU6IEV2ZW50KXtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxuICAgIHN0aWNreVNlYXJjaEkoKXtcbiAgICAgICAgY29uc3QgdG1wID0gbmV3IHN0aWNreVNlYXJjaElucHV0KCk7XG4gICAgICAgIHRtcC5zdGlja3lTZWFyY2goXCJzZWFyY2hJbnB1dElEXCIpO1xuICAgIH1cblxuICAgIHRpbWVkUmVmcmVzaCgpIHtcbiAgICAgICAgY29uc3Qgd2VhdGhlckJsb2NrQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJCbG9ja3NJRFwiKS5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh3ZWF0aGVyQmxvY2tDb3VudCk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHdlYXRoZXJCbG9ja0NvdW50OyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgd2VhdGhlckJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyQmxvY2tzSURcIik7XG4gICAgICAgICAgICB3ZWF0aGVyQmxvY2sucmVtb3ZlQ2hpbGQod2VhdGhlckJsb2NrLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldExvY2FsU3RvcmFnZU51bWJlckxpbmVzKCk7XG4gICAgICAgIHRoaXMuZ2V0SXRlbXNGcm9tTG9jYWxTdG9yYWdlKCk7XG5cbiAgICB9XG5cbiAgICBwcmVzc0J1dHRvbk9yQ2xpY2tNb3VzZSgpe1xuICAgICAgICBjb25zdCBpbnB1dENpdHlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbklucFwiKTtcbiAgICAgICAgaW5wdXRDaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHRoaXMuZ2V0Q2l0eSgpKTtcbiAgICAgICAgY29uc3QgaW5wdXRDaXR5U2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hJbnBcIik7XG4gICAgICAgIGlucHV0Q2l0eVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2l0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4xXCIpO1xuICAgICAgICAvLyByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4gdGhpcy5yZW1vdmVDaXR5V2VhdGhlcihlKSk7XG4gICAgfVxuXG4gICAgZ2V0Q2l0eSgpe1xuXG4gICAgICAgIGNvbnN0IGlucHV0Q2l0eSA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wXCIpO1xuICAgICAgICBjb25zdCBjaXR5ID0gaW5wdXRDaXR5LnZhbHVlO1xuXG4gICAgICAgIHRoaXMuZ2V0Q2l0eUluZm8oY2l0eSk7XG4gICAgfVxuXG4gICAgZ2V0TG9jYWxTdG9yYWdlTnVtYmVyTGluZXMoKXtcbiAgICAgICAgY29uc3Qgd3l3b2xhbmlhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpY3piYVd5d29sYW4nKTtcbiAgICAgICAgdGhpcy5saWN6YmFXeXdvbGFuID0gSlNPTi5wYXJzZSh3eXdvbGFuaWEpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04ucGFyc2Uod3l3b2xhbmlhKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0SXRlbXNGcm9tTG9jYWxTdG9yYWdlKCl7XG4gICAgICAgIC8vIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICBjb25zdCBvYmlla3R5ID0gdGhpcy5nZXREYXRhKCk7XG4gICAgICAgIGxldCBpdGVtcztcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5saWN6YmFXeXdvbGFuOyBpKyspe1xuICAgICAgICAgICAgaXRlbXMgPSBhd2FpdCBvYmlla3R5O1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMubGljemJhV3l3b2xhbjsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnBhcnNlKGl0ZW1zW2ldKTtcbiAgICAgICAgICAgIGlmKGl0ZW0hPW51bGwpXG4gICAgICAgICAgICB0aGlzLmdldENpdHlJbmZvRnJvbUxvY2FsU3RvcmFnZShpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnN0IG5vd2UgPSAoYXdhaXQgb2JpZWt0eSkudmFsdWVzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZ2V0Q2l0eUluZm8oY2l0eTogc3RyaW5nKSB7XG5cbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHRoaXMuZ2V0V2VhdGhlcihjaXR5KTtcbiAgICAgICAgLy8tLS10d29yemVuaWUgbm93eWNoIGVsZW1lbnRvdy0tLVxuICAgICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdEaXYuY2xhc3NOYW1lID0gXCJ3ZWF0aGVySW5mb0Jsb2NrXCI7XG4gICAgICAgIG5ld0Rpdi5pZCA9IFwiXCIgK3RoaXMubGljemJhV3l3b2xhbjtcbiAgICAgICAgY29uc3QgbmV3TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBuZXdMYXN0QWN0dWFsaXNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBuZXdEZWdyZWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IG5ld0FpclByZXNzdXJlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGNvbnN0IG5ld0FpclByZXNzdXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGNvbnN0IG5ld0RlZ3JlZXNDaGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IG5ld0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAgICAgLy8tLS11enVwZcWCbmlhbmllIGVsZW1lbnRvdyBkYW55bWktLS1cbiAgICAgICAgbmV3TmFtZS5pbm5lckhUTUwgPSB3ZWF0aGVyLm5hbWU7XG4gICAgICAgIG5ld0xhc3RBY3R1YWxpc2F0aW9uLmlubmVySFRNTCA9IFwiTGFzdCBhY3R1YWxpc2F0aW9uOiBcIiArIG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1HQicsIHsgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCJudW1lcmljXCJ9KTtcbiAgICAgICAgbmV3RGVncmVlcy5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKHdlYXRoZXIubWFpbi50ZW1wIC0gMjczLjE1KS50b1N0cmluZygpOyAvL29ibGljemEgeiBLZWx3aW7Ds3cgc3RvcG5pZSBDZWxzanVzemEgaSB6YW9rcsSFZ2xhXG4gICAgICAgIG5ld0FpclByZXNzdXJlVGV4dC5pbm5lckhUTUwgPSBcIkFpciBwcmVzc3VyZTogXCI7XG4gICAgICAgIG5ld0FpclByZXNzdXJlLmlubmVySFRNTCA9IHdlYXRoZXIubWFpbi5wcmVzc3VyZSArIFwiIGhQYVwiO1xuICAgICAgICBjb25zdCBzcmNJbWcgPSAgYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlci53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgICAgIG5ld0ltYWdlLnNyYyA9IHNyY0ltZztcbiAgICAgICAgbmV3RGVncmVlc0NoYXIuaW5uZXJIVE1MID0gXCImb3JkbVwiO1xuICAgICAgICBuZXdCdG4uaW5uZXJIVE1MID0gXCJNb3JlIGluZm9ybWF0aW9uXCI7XG5cbiAgICAgICAgLy8tLS1kb2Rhd2FuaWUgb2Rwb3dpZWRuaWNoIGtsYXMgZG8gc3R5bG93YW5pYS0tLVxuICAgICAgICBuZXdOYW1lLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySW5mb0NpdHlcIik7XG4gICAgICAgIG5ld0xhc3RBY3R1YWxpc2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySW5mb0hvdXJcIik7XG4gICAgICAgIG5ld0RlZ3JlZXMuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJJbmZvVGVtcGVyYXR1cmVcIik7XG4gICAgICAgIG5ld0FpclByZXNzdXJlVGV4dC5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckluZm9QcmVzc3VyZVwiKTtcbiAgICAgICAgbmV3QWlyUHJlc3N1cmUuY2xhc3NMaXN0LmFkZChcInByZXNzdXJlVmFsdWVcIik7XG4gICAgICAgIG5ld0RlZ3JlZXNDaGFyLmNsYXNzTGlzdC5hZGQoXCJkZWdyZWVzXCIpO1xuICAgICAgICBuZXdCdG4uY2xhc3NMaXN0LmFkZChcIm1vcmVJbmZvXCIpO1xuICAgICAgICBuZXdCdG4uaWQgPSB3ZWF0aGVyLm5hbWU7XG4gICAgICAgIG5ld0J0bi5vbmNsaWNrID0gdGhpcy5wb3BVcFdpbmRvdztcblxuICAgICAgICBuZXdOYW1lLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyQ29tbW9uXCIpO1xuICAgICAgICBuZXdMYXN0QWN0dWFsaXNhdGlvbi5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckNvbW1vblwiKTtcbiAgICAgICAgbmV3RGVncmVlcy5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckNvbW1vblwiKTtcbiAgICAgICAgbmV3QWlyUHJlc3N1cmVUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyQ29tbW9uXCIpO1xuXG4gICAgICAgIC8vLS0td3Byb3dhZHphbmllIGVsZW1lbnRvdyBuYSBzdHJvbmUtLS1cbiAgICAgICAgY29uc3Qgd2VhdGhlckJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyQmxvY2tzSURcIik7XG4gICAgICAgIHdlYXRoZXJCbG9jay5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3TmFtZSk7XG4gICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdMYXN0QWN0dWFsaXNhdGlvbik7XG4gICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdEZWdyZWVzKTtcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld0FpclByZXNzdXJlVGV4dCk7XG4gICAgICAgIG5ld0FpclByZXNzdXJlVGV4dC5hcHBlbmRDaGlsZChuZXdBaXJQcmVzc3VyZSk7XG4gICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XG4gICAgICAgIG5ld0RlZ3JlZXMuYXBwZW5kQ2hpbGQobmV3RGVncmVlc0NoYXIpO1xuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3QnRuKTtcbiAgICAgICAgLy8tLS1jenlzemN6ZW5pZSBpbnB1dHUgbWlhc3RhLS0tXG4gICAgICAgIGNvbnN0IGlucHV0Q2l0eVNlYXJjaCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wXCIpO1xuICAgICAgICBpbnB1dENpdHlTZWFyY2gudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIC8vLS0temFwaXMgdyBwYW1pZWNpIGxvY2FsU3RvcmFnZS0tLVxuICAgICAgICB0aGlzLnNhdmVEYXRhKHdlYXRoZXIpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldENpdHlJbmZvRnJvbUxvY2FsU3RvcmFnZShpdGVtOiBhbnkpIHtcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHRoaXMuZ2V0V2VhdGhlcihpdGVtLm5hbWUpO1xuXG5cbiAgICAgICAgLy8tLS10d29yemVuaWUgbm93eWNoIGVsZW1lbnRvdy0tLVxuICAgICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdEaXYuY2xhc3NOYW1lID0gXCJ3ZWF0aGVySW5mb0Jsb2NrXCI7XG4gICAgICAgIG5ld0Rpdi5pZCA9IFwiXCIgK3RoaXMubGljemJhV3l3b2xhbjtcbiAgICAgICAgY29uc3QgbmV3TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBuZXdMYXN0QWN0dWFsaXNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBuZXdEZWdyZWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IG5ld0FpclByZXNzdXJlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGNvbnN0IG5ld0FpclByZXNzdXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGNvbnN0IG5ld0RlZ3JlZXNDaGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IG5ld0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAgICAgLy8tLS11enVwZcWCbmlhbmllIGVsZW1lbnRvdyBkYW55bWktLS1cbiAgICAgICAgbmV3TmFtZS5pbm5lckhUTUwgPSB3ZWF0aGVyLm5hbWU7XG4gICAgICAgIG5ld0xhc3RBY3R1YWxpc2F0aW9uLmlubmVySFRNTCA9IFwiTGFzdCBhY3R1YWxpc2F0aW9uOiBcIiArIG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1HQicsIHsgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCJudW1lcmljXCJ9KTtcbiAgICAgICAgbmV3RGVncmVlcy5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKHdlYXRoZXIubWFpbi50ZW1wIC0gMjczLjE1KS50b1N0cmluZygpOyAvL29ibGljemEgeiBLZWx3aW7Ds3cgc3RvcG5pZSBDZWxzanVzemEgaSB6YW9rcsSFZ2xhXG4gICAgICAgIG5ld0FpclByZXNzdXJlVGV4dC5pbm5lckhUTUwgPSBcIkFpciBwcmVzc3VyZTogXCI7XG4gICAgICAgIG5ld0FpclByZXNzdXJlLmlubmVySFRNTCA9IHdlYXRoZXIubWFpbi5wcmVzc3VyZSArIFwiIGhQYVwiO1xuICAgICAgICBjb25zdCBzcmNJbWcgPSAgYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlci53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgICAgIG5ld0ltYWdlLnNyYyA9IHNyY0ltZztcbiAgICAgICAgbmV3RGVncmVlc0NoYXIuaW5uZXJIVE1MID0gXCImb3JkbVwiO1xuICAgICAgICBuZXdCdG4uaW5uZXJIVE1MID0gXCJNb3JlIGluZm9ybWF0aW9uXCI7XG5cbiAgICAgICAgLy8tLS1kb2Rhd2FuaWUgb2Rwb3dpZWRuaWNoIGtsYXMgZG8gc3R5bG93YW5pYS0tLVxuICAgICAgICBuZXdOYW1lLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySW5mb0NpdHlcIik7XG4gICAgICAgIG5ld0xhc3RBY3R1YWxpc2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySW5mb0hvdXJcIik7XG4gICAgICAgIG5ld0RlZ3JlZXMuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJJbmZvVGVtcGVyYXR1cmVcIik7XG4gICAgICAgIG5ld0FpclByZXNzdXJlVGV4dC5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckluZm9QcmVzc3VyZVwiKTtcbiAgICAgICAgbmV3QWlyUHJlc3N1cmUuY2xhc3NMaXN0LmFkZChcInByZXNzdXJlVmFsdWVcIik7XG4gICAgICAgIG5ld0RlZ3JlZXNDaGFyLmNsYXNzTGlzdC5hZGQoXCJkZWdyZWVzXCIpO1xuICAgICAgICBuZXdCdG4uY2xhc3NMaXN0LmFkZChcIm1vcmVJbmZvXCIpO1xuICAgICAgICBuZXdCdG4uaWQgPSB3ZWF0aGVyLm5hbWU7XG4gICAgICAgIG5ld0J0bi5vbmNsaWNrID0gdGhpcy5wb3BVcFdpbmRvdztcblxuICAgICAgICBuZXdOYW1lLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyQ29tbW9uXCIpO1xuICAgICAgICBuZXdMYXN0QWN0dWFsaXNhdGlvbi5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckNvbW1vblwiKTtcbiAgICAgICAgbmV3RGVncmVlcy5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckNvbW1vblwiKTtcbiAgICAgICAgbmV3QWlyUHJlc3N1cmVUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyQ29tbW9uXCIpO1xuXG4gICAgICAgIC8vLS0td3Byb3dhZHphbmllIGVsZW1lbnRvdyBuYSBzdHJvbmUtLS1cbiAgICAgICAgY29uc3Qgd2VhdGhlckJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyQmxvY2tzSURcIik7XG4gICAgICAgIHdlYXRoZXJCbG9jay5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3TmFtZSk7XG4gICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdMYXN0QWN0dWFsaXNhdGlvbik7XG4gICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdEZWdyZWVzKTtcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld0FpclByZXNzdXJlVGV4dCk7XG4gICAgICAgIG5ld0FpclByZXNzdXJlVGV4dC5hcHBlbmRDaGlsZChuZXdBaXJQcmVzc3VyZSk7XG4gICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XG4gICAgICAgIG5ld0RlZ3JlZXMuYXBwZW5kQ2hpbGQobmV3RGVncmVlc0NoYXIpO1xuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3QnRuKTtcbiAgICAgICAgLy8tLS1jenlzemN6ZW5pZSBpbnB1dHUgbWlhc3RhLS0tXG4gICAgICAgIGNvbnN0IGlucHV0Q2l0eVNlYXJjaCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wXCIpO1xuICAgICAgICBpbnB1dENpdHlTZWFyY2gudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIC8vLS0temFwaXMgdyBwYW1pZWNpIGxvY2FsU3RvcmFnZS0tLVxuICAgICAgICAvL3RoaXMuc2F2ZURhdGEod2VhdGhlcik7XG4gICAgICAgIHRoaXMubGljemJhV3l3b2xhbisrO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGljemJhV3l3b2xhbicsIEpTT04uc3RyaW5naWZ5KHRoaXMubGljemJhV3l3b2xhbikpXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGFpbHlXZWF0aGVyKGNpdHk6IHN0cmluZyk6IFByb21pc2U8YW55PntcbiAgICAgICAgY29uc3QgY2l0eU5hbWUgPSBhd2FpdCB0aGlzLmdldFdlYXRoZXIoY2l0eSk7XG4gICAgICAgIC8vY29uc3QgY2l0eU4gPSBKU09OLnBhcnNlKGNpdHlOYW1lKTtcblxuICAgICAgICBjb25zdCBsYXQgPSBhd2FpdCBjaXR5TmFtZS5jb29yZC5sYXQ7XG4gICAgICAgIGNvbnN0IGxvbiA9IGF3YWl0IGNpdHlOYW1lLmNvb3JkLmxvbjtcbiAgICAgICAgY29uc3QgZGFpbHkgPSBcImRhaWx5XCI7XG4gICAgICAgIGNvbnN0IG9wZW5XZWF0aGVyVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZleGNsdWRlPSR7ZGFpbHl9JmFwcGlkPSR7dGhpcy5vcHdBcGlLZXl9YDtcbiAgICAgICAgY29uc3Qgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2gob3BlbldlYXRoZXJVcmwpO1xuICAgICAgICBjb25zdCB3ZWF0aGVyRGFpbHkgPSBhd2FpdCB3ZWF0aGVyUmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gd2VhdGhlckRhaWx5O1xuICAgIH1cblxuXG5cbiAgICBhc3luYyBnZXRXZWF0aGVyKGNpdHk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IG9wZW5XZWF0aGVyVXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JkFQUElEPSR7dGhpcy5vcHdBcGlLZXl9YDtcbiAgICAgICAgY29uc3Qgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2gob3BlbldlYXRoZXJVcmwpO1xuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgICB9XG5cbiAgICBzYXZlRGF0YShkYXRhOiBhbnkpIHtcbiAgICAgICAgdGhpcy5saWN6YmFXeXdvbGFuKys7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYnRuXCIrKHRoaXMubGljemJhV3l3b2xhbiksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpY3piYVd5d29sYW4nLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxpY3piYVd5d29sYW4pKVxuICAgIH1cblxuICAgIGRlbGV0ZURhdGEoZGF0YTogYW55KXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZGF0YSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGF0YSgpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPVtdO1xuICAgICAgICBjb25zdCBxdWFudGl0eSA9IHRoaXMubGljemJhV3l3b2xhbjtcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8PSBxdWFudGl0eTsgaSsrKXtcbiAgICAgICAgICAgIGl0ZW1zW2ktMV0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYnRuJyArIGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmFjNzE1YmY4ZWQ4Y2EzNWRhYWY1NzllYjc3NTA3ZjMucG5nXCI7IiwiaW1wb3J0IHsgQXBwfSBmcm9tICcuL2FwcCc7XG5pbXBvcnQgJy4vbWFpbi5zY3NzJztcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYWMyYzY5YjYwNjI3NzI0NjQ2ZjllOGJhYjMxOTNlZS5qcGdcIjsiLCJleHBvcnQgY2xhc3Mgc3RpY2t5U2VhcmNoSW5wdXR7XHJcbiAgICBzdGlja3lTZWFyY2goaWQ6IGFueSl7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGNvbnN0IHN0aWNreSA9IHNlYXJjaC5vZmZzZXRUb3A7XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5wYWdlWU9mZnNldD49IHN0aWNreSl7XHJcbiAgICAgICAgICAgIHNlYXJjaC5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZWFyY2guY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==