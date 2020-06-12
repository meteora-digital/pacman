import {objectAssign} from '@meteora-digital/helpers';

let GoogleMaps = {};

// A little function to load the API
function load(key) {
	if (window.google === undefined && document.getElementById('GoogleMapsAPI') === null) {
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.id = "GoogleMapsAPI";

		script.src = `https://maps.googleapis.com/maps/api/js?key=${key}`;
		document.getElementsByTagName("head")[0].appendChild(script);
	}else {
		console.log('Google Maps API has already been loaded. Aborting.');
	}
}

// The render function will wait for google maps to load before firing. 
function render(func) {
	if (window.google) {
		GoogleMaps = objectAssign(GoogleMaps, window.google.maps);
		func();
	}else {
		setTimeout(() => render(func), 500);
	}
}

class Controller {
	constructor(el, options = {}) {
		this.el = el;
		this.locations = options.locations;

		this.settings = objectAssign({
			locations: [],
			markers: true,
			icon: {
	            path: 'M11.672 15.901c-2.734 0-4.952-2.174-4.952-4.857 0-2.682 2.218-4.859 4.952-4.859 2.735 0 4.953 2.177 4.953 4.86 0 2.682-2.218 4.856-4.953 4.856m0-15.9C5.453 0 .411 4.944.411 11.043c0 8.873 11.261 23.73 11.261 23.73s11.26-14.857 11.26-23.73c0-6.1-5.04-11.044-11.26-11.044',
	            fillColor: '#ff3366',
	            fillOpacity: 1,
	            anchor: new GoogleMaps.Point(12,36),
	            strokeWeight: 0,
	            scale: 1,
	        },
			map: {
				disableDefaultUI: false,
				scrollwheel: false,
				zoomControl: true,
				zoom: 10,
			},
		}, options);


		// If we have a center value in the options, use that value, otherwise use the middle of all locations.
		if (this.settings.map.center === undefined) this.settings.map.center = this.findCenter();

		// Create new 
		this.map = new GoogleMaps.Map(this.el, this.settings.map);

		if (this.settings.markers) this.addMarkers();

		setTimeout(() => {
			this.map.panTo({
	            lat: -21.1071487,
	            lng: 134.6138123,
	        });
		}, 2000);
	}

	addMarkers() {
		this.markers = [];

		this.locations.forEach((location, index) => {
			this.markers.push(new GoogleMaps.Marker({
				id: index,
				map: this.map,
				position: location.position,
				icon: this.settings.icon,
			}));
		});
	}

	filterMarkers(locationsArray) {
	    this.markers.forEach((marker) => {
	        (locationsArray.includes(marker.id)) ? marker.setMap(this.map) : marker.setMap(null);
	    });

		this.map.panTo(this.findCenter());
	}

	showAllMarkers() {
        this.markers.forEach((marker) => {
            marker.setMap(this.map);
        });
    }

	findCenter(locationsArray) {
	    let locations = locationsArray || this.locations;

	    const center = {lat: 0, lng: 0};

	    locations.forEach((location) => {
	    	center.lat +=  location.position.lat;
	    	center.lng +=  location.position.lng;
	    });

	    return {
	    	lat: center.lat / locations.length + 1,
	    	lng: center.lng / locations.length + 1,
	    };
	}
}

GoogleMaps.Load = (key) => load(key),
GoogleMaps.Render = (options = {}) => render(options),
GoogleMaps.Controller = (el, options = {}) => {
	if (window.google) {
		return new Controller(el, options);
	}else {
		console.log('A GoogleMaps Controller must be placed within the Render function');
	}
};

export default GoogleMaps = GoogleMaps;

// export {load, render};

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