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
/******/ 	__webpack_require__.p = "/themes/quicksilver/dist/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./themes/quicksilver/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./themes/quicksilver/js/app.js":
/*!**************************************!*\
  !*** ./themes/quicksilver/js/app.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/style.scss */ "./themes/quicksilver/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_maps___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packages/maps/ */ "./themes/quicksilver/packages/maps/dist/index.js");
/*------------------------------------------------------------------
Stylesheets
------------------------------------------------------------------*/
 // import {pacman, ghost} from '../packages/pacman/';

 // pacman();
// ghost();

var markers = [{
  title: "marker 1",
  position: {
    lat: -41.1071487,
    lng: 174.6138123
  }
}, {
  title: "marker 2",
  position: {
    lat: -34.1071487,
    lng: 140.6138123
  }
}];
_packages_maps___WEBPACK_IMPORTED_MODULE_1__["default"].Load('AIzaSyCUL_YzUORnNHTrBCiDgx8XEn4bGxCX16g');
_packages_maps___WEBPACK_IMPORTED_MODULE_1__["default"].Render(function () {
  var map = _packages_maps___WEBPACK_IMPORTED_MODULE_1__["default"].Controller(document.querySelector('.js-map'), {
    locations: markers,
    markers: true,
    icon: {
      path: 'M11.672 15.901c-2.734 0-4.952-2.174-4.952-4.857 0-2.682 2.218-4.859 4.952-4.859 2.735 0 4.953 2.177 4.953 4.86 0 2.682-2.218 4.856-4.953 4.856m0-15.9C5.453 0 .411 4.944.411 11.043c0 8.873 11.261 23.73 11.261 23.73s11.26-14.857 11.26-23.73c0-6.1-5.04-11.044-11.26-11.044',
      fillColor: '#ff3366',
      fillOpacity: 1,
      anchor: new _packages_maps___WEBPACK_IMPORTED_MODULE_1__["default"].Point(12, 36),
      strokeWeight: 0,
      scale: 1
    },
    map: {
      zoom: 5
    }
  });
  console.log(_packages_maps___WEBPACK_IMPORTED_MODULE_1__["default"]);
});

/***/ }),

/***/ "./themes/quicksilver/packages/maps/dist/index.js":
/*!********************************************************!*\
  !*** ./themes/quicksilver/packages/maps/dist/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meteora_digital_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @meteora-digital/helpers */ "./themes/quicksilver/packages/maps/node_modules/@meteora-digital/helpers/dist/index.js");
/* harmony import */ var _meteora_digital_helpers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_meteora_digital_helpers__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}


var GoogleMaps = {}; // A little function to load the API

function load(key) {
  if (window.google === undefined && document.getElementById('GoogleMapsAPI') === null) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "GoogleMapsAPI";
    script.src = "https://maps.googleapis.com/maps/api/js?key=".concat(key);
    document.getElementsByTagName("head")[0].appendChild(script);
  } else {
    console.log('Google Maps API has already been loaded. Aborting.');
  }
} // The render function will wait for google maps to load before firing. 


function render(func) {
  if (window.google) {
    GoogleMaps = Object(_meteora_digital_helpers__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(GoogleMaps, window.google.maps);
    func();
  } else {
    setTimeout(function () {
      return render(func);
    }, 500);
  }
}

var Controller =
/*#__PURE__*/
function () {
  function Controller(el) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Controller);

    this.el = el;
    this.locations = options.locations;
    this.settings = Object(_meteora_digital_helpers__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({
      locations: [],
      markers: true,
      icon: {
        path: 'M11.672 15.901c-2.734 0-4.952-2.174-4.952-4.857 0-2.682 2.218-4.859 4.952-4.859 2.735 0 4.953 2.177 4.953 4.86 0 2.682-2.218 4.856-4.953 4.856m0-15.9C5.453 0 .411 4.944.411 11.043c0 8.873 11.261 23.73 11.261 23.73s11.26-14.857 11.26-23.73c0-6.1-5.04-11.044-11.26-11.044',
        fillColor: '#ff3366',
        fillOpacity: 1,
        anchor: new GoogleMaps.Point(12, 36),
        strokeWeight: 0,
        scale: 1
      },
      map: {
        disableDefaultUI: false,
        scrollwheel: false,
        zoomControl: true,
        zoom: 10
      }
    }, options); // If we have a center value in the options, use that value, otherwise use the middle of all locations.

    if (this.settings.map.center === undefined) this.settings.map.center = this.findCenter(); // Create new 

    this.map = new GoogleMaps.Map(this.el, this.settings.map);
    if (this.settings.markers) this.addMarkers();
    setTimeout(function () {
      _this.map.panTo({
        lat: -21.1071487,
        lng: 134.6138123
      });
    }, 2000);
  }

  _createClass(Controller, [{
    key: "addMarkers",
    value: function addMarkers() {
      var _this2 = this;

      this.markers = [];
      this.locations.forEach(function (location, index) {
        _this2.markers.push(new GoogleMaps.Marker({
          id: index,
          map: _this2.map,
          position: location.position,
          icon: _this2.settings.icon
        }));
      });
    }
  }, {
    key: "filterMarkers",
    value: function filterMarkers(locationsArray) {
      var _this3 = this;

      this.markers.forEach(function (marker) {
        locationsArray.includes(marker.id) ? marker.setMap(_this3.map) : marker.setMap(null);
      });
      this.map.panTo(this.findCenter());
    }
  }, {
    key: "showAllMarkers",
    value: function showAllMarkers() {
      var _this4 = this;

      this.markers.forEach(function (marker) {
        marker.setMap(_this4.map);
      });
    }
  }, {
    key: "findCenter",
    value: function findCenter(locationsArray) {
      var locations = locationsArray || this.locations;
      var center = {
        lat: 0,
        lng: 0
      };
      locations.forEach(function (location) {
        center.lat += location.position.lat;
        center.lng += location.position.lng;
      });
      return {
        lat: center.lat / locations.length + 1,
        lng: center.lng / locations.length + 1
      };
    }
  }]);

  return Controller;
}();

GoogleMaps.Load = function (key) {
  return load(key);
}, GoogleMaps.Render = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return render(options);
}, GoogleMaps.Controller = function (el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (window.google) {
    return new Controller(el, options);
  } else {
    console.log('A GoogleMaps Controller must be placed within the Render function');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (GoogleMaps = GoogleMaps); // export {load, render};
// exports.render = render;
// export default class Map {
// 	constructor(el, settings = {}) {
// 		// Grab the target element
// 		this.el = el;
// 		this.locations = settings.locations;
// 		// Here we hold our default maps settings
// 		this.settings = objectAssign({
// 			key: "YOUR_API_KEY",
// 			locations: [],
// 			map: {
// 				disableDefaultUI: false,
// 				scrollwheel: false,
// 				zoomControl: true,
// 				zoom: 10,
// 			}
// 		}, settings);
// 		// If google maps is not previously loaded, we want to render the script in the <head>
// 		if (document.getElementById("GoogleMapsAPI") === null) {
// 			const script = document.createElement("script");
// 			script.type = "text/javascript";
// 			script.id = "GoogleMapsAPI";
// 			if (script.readyState){  //IE
// 			    script.onreadystatechange = () => {
// 			        if (script.readyState == "loaded" || script.readyState == "complete") {
// 			            script.onreadystatechange = null;
// 			            this.init();
// 			        }
// 			    };
// 			} else { //Others
// 			    script.onload = () => {
// 			        this.init();
// 			    };
// 			}
// 			script.src = `https://maps.googleapis.com/maps/api/js?key=${this.settings.key}`;
// 			// script.src = `https://maps.googleapis.com/maps/api/js`;
// 			document.getElementsByTagName("head")[0].appendChild(script);
// 		}else {
// 			this.init();
// 		}
// 	}
// 	init() {
// 		if (this.settings.map.center === undefined) this.settings.map.center = this.findCenter();
// 		this.map = new window.google.maps.Map(this.el, this.settings.map);
// 	}
// 	findCenter() {
// 	    let length = 0;
// 	    const center = {
// 	        lat: 0,
// 	        lng: 0,
// 	    };
// 	    for (var i = 0; i < this.locations.length; i++) {
// 	    	length = i + 1;
// 	    	center.lat +=  this.locations[i].position.lat;
// 	    	center.lng +=  this.locations[i].position.lng;
// 	    }
// 	    center.lat = center.lat / length;
// 	    center.lng = center.lng / length;
// 	    return center;
// 	}
// }

/***/ }),

/***/ "./themes/quicksilver/packages/maps/node_modules/@meteora-digital/helpers/dist/index.js":
/*!**********************************************************************************************!*\
  !*** ./themes/quicksilver/packages/maps/node_modules/@meteora-digital/helpers/dist/index.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function attach(el, event, func, userdelay) {
  var throttle = false; // not throttled

  var debounce = false; // holder debounce

  var delay = userdelay || false;
  func(); // initialise function before adding event handlers

  var attachment = function attachment(e) {
    if (delay) {
      // throttle
      if (!throttle) {
        throttle = true;
        func(e);
        setTimeout(function () {
          return throttle = 0;
        }, delay);
      } // debounce


      clearTimeout(debounce);
      debounce = setTimeout(function () {
        func();
      }, delay);
    } else {
      func();
    }
  };

  event.split(' ').forEach(function (type) {
    el.addEventListener(type, function (e) {
      return attachment(e);
    });
  });
}

exports.attach = attach;
function containsClass(el, className) {
  return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1;
}

exports.containsClass = containsClass;
function Event(event, params) {
  params = params || {
    bubbles: false,
    cancelable: false,
    detail: undefined
  };
  var evt = document.createEvent('CustomEvent');
  evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
  return evt;
}

exports.Event = Event;
function getTransformValues(el) {
  var matrix = window.getComputedStyle(el).transform; // Remove the brackets and matrix strings

  var transformValues = matrix.replace('matrix(', '').replace(')', '');
  var transformArray = transformValues.split(',');
  return {
    scaleX: parseFloat(transformArray[0]),
    skewY: parseFloat(transformArray[1]),
    skewX: parseFloat(transformArray[2]),
    scaleY: parseFloat(transformArray[3]),
    translateX: parseFloat(transformArray[4]),
    translateY: parseFloat(transformArray[5])
  };
}

exports.getTransformValues = getTransformValues;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function loopObject(object, func) {
  if (object && _typeof(object) === 'object') {
    for (key in object) {
      func(key, object[key]);
    }
  }
}

exports.loopObject = loopObject;
function nodeArray(nodeList) {
  var array = [];

  for (var i = 0; i < nodeList.length; i++) {
    array.push(nodeList[i]);
  }

  return array;
}

exports.nodeArray = nodeArray;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function objectAssign(defaultSettings, userSettings) {
  for (key in defaultSettings) {
    if (userSettings[key] !== undefined) {
      if (_typeof(defaultSettings[key]) === "object" && _typeof(userSettings[key]) === "object") {
        objectAssign(defaultSettings[key], userSettings[key]);
      } else {
        defaultSettings[key] = userSettings[key];
      }
    }
  }

  for (key in userSettings) {
    if (_typeof(defaultSettings[key]) === "object" && _typeof(userSettings[key]) === "object") {
      objectAssign(defaultSettings[key], userSettings[key]);
    } else {
      defaultSettings[key] = userSettings[key];
    }
  }

  return defaultSettings;
}

exports.objectAssign = objectAssign;
function offsetY(el) {
  var offset = 0;

  while (el) {
    offset += el.offsetTop;
    el = el.offsetParent;
  }

  return offset;
}

exports.offsetY = offsetY;
function parentWithClass(el, className) {
  var parent = el.parentNode;

  while (!parent.classList.contains(className)) {
    parent = parent.parentNode;
  }

  return parent;
}

exports.parentWithClass = parentWithClass;
function relativeTarget(target, relativeElement) {
  var node = target;
  var parent = node.parentNode;

  if (node !== relativeElement) {
    while (parent && parent !== relativeElement) {
      parent = parent.parentNode;
    }

    return parent === relativeElement;
  } else {
    return true;
  }
}

exports.relativeTarget = relativeTarget;
function stagger(arrayOfElements, func) {
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  var setDelay = delay;

  for (var i = 0; i < arrayOfElements.length; i++) {
    func(arrayOfElements[i], delay);
    delay += setDelay;
  }
}

exports.stagger = stagger;

/***/ }),

/***/ "./themes/quicksilver/scss/style.scss":
/*!********************************************!*\
  !*** ./themes/quicksilver/scss/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map