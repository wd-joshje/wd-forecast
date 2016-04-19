var $ = require('jquery');
var stateManager = require('./state-manager');

function onForecast(forecast) {
	console.log('forecast', forecast);

	var today = forecast.list.shift();

	stateManager.renderState('forecast', {
		today: today,
		forecast: forecast.list
	});
};

function onError(err) {
	stateManager.renderState('message', {
		message: 'Unable to find the weather where you are'
	});
}

function getForecast(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	var weatherUrl = '/api/forecast?lat=' + lat + '&lon=' + lon + '&units=metric';

	$.ajax({
		url: weatherUrl
	})
	.done(onForecast)
	.fail(onError);
}

module.exports = {
  getForecast: getForecast
};
