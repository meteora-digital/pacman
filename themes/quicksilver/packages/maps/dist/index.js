function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import { objectAssign } from '@meteora-digital/helpers';
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
    GoogleMaps = objectAssign(GoogleMaps, window.google.maps);
    func();
  } else {
    setTimeout(function () {
      return render(func);
    }, 500);
  }
}

var Controller = /*#__PURE__*/function () {
  function Controller(el) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Controller);

    this.el = el;
    this.locations = options.locations;
    this.settings = objectAssign({
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
export default GoogleMaps = GoogleMaps; // export {load, render};
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