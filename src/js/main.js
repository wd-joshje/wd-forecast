var $ = require('jquery');
var geolocation = require('geolocation');

var stateManager = require('./state-manager');
var forecast = require('./forecast');


function onPosition(err, position) {
	if (err) {
		return stateManager.renderState('message', {
			message: 'Unable to get a fix on you'
		});
	}

	forecast.getForecast(position);
}

if ('geolocation' in navigator) {
	stateManager.renderState('message', {
		message: 'Getting your location&hellip;'
	});

	geolocation.getCurrentPosition(onPosition)
} else {
	stateManager.renderState('message', {
		message: 'Your browser is not supported'
	});
}

