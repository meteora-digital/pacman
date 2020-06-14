/*------------------------------------------------------------------
Stylesheets
------------------------------------------------------------------*/

import './../scss/style.scss';

// import {pacman, ghost} from '../packages/pacman/';
// pacman();
// ghost();

import GoogleMaps from '../packages/maps/';

const markerTypes = {
	pacman: 'themes/quicksilver/dist/images/generated/favicons/android-chrome-144x144.png',
	black: {
		fillColor: '#000000',
	}
}


const locationArray = [
	{
		title: "marker 1",
		icon: 'pacman',
		position: {
			lat: -36.6049796,
            lng: 174.7828287,
		},
	},
	{
		title: "marker 2",
		icon: 'black',
		position: {
			lat: -36.6055996,
            lng: 174.7828287,
		},
	},
	{
		title: "marker 3",
		position: {
			lat: -34.1071487,
            lng: 140.6138123,
		},
	}
];

locationArray.forEach((location) => {
	if (location.icon) location.icon = markerTypes[location.icon];
});

GoogleMaps.Load('');

GoogleMaps.Render(() => {
	const map = GoogleMaps.Controller(document.querySelector('.js-map'), {
		locations: locationArray,
		cluster: true,
		icon: {
            fillColor: '#f39200',
        },
        map: {
        	zoom: 5,
        }
	});

	map.infoTemplate((location) => {
		return location.title;
	});

	setTimeout(() => {
		map.filterMarkers([locationArray[2], locationArray[0]]);

		setTimeout(() => {
			map.showAllMarkers();
		}, 5000);
	}, 5000);
});