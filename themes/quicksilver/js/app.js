/*------------------------------------------------------------------
Stylesheets
------------------------------------------------------------------*/

import './../scss/style.scss';

// import {pacman, ghost} from '../packages/pacman/';

import GoogleMaps from '../packages/maps/';

// pacman();
// ghost();

const markers = [
	{
		title: "marker 1",
		position: {
			lat: -41.1071487,
            lng: 174.6138123,
		},
	},
	{
		title: "marker 2",
		position: {
			lat: -34.1071487,
            lng: 140.6138123,
		},
	}
];

GoogleMaps.Load('YOUR_API_KEY');

GoogleMaps.Render(() => {
	const map = GoogleMaps.Controller(document.querySelector('.js-map'), {
		locations: markers,
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
        	zoom: 5,
        }
	});

	console.log(GoogleMaps);
});