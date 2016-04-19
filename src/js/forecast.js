var $ = require('jquery');
var stateManager = require('./state-manager');

function onForecast(forecast) {
	stateManager.renderState('forecast', {
		forecast: forecast.list
	});
};

function onError(err) {
	stateManager.renderState('message', {
		message: 'Unable to find the weather where you are'
	});
}

function getForecast(position) {
	var lat = position.coords.latitude.toFixed(3);
	var lon = position.coords.longitude.toFixed(3);
	var weatherUrl = '/api/forecast?lat=' + lat + '&lon=' + lon;

	$.ajax({
		url: weatherUrl
	})
	.done(onForecast)
	.fail(onError);
}

module.exports = {
  getForecast: getForecast
};
