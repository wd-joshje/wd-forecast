var $ = require('jquery');
var stateManager = require('./state-manager');

function onForecast(forecast) {
	stateManager.renderState('forecast', forecast);
};

function onError(err) {
	stateManager.renderState('message', {
		message: 'Unable to find the weather where you are'
	});
}

function getForecast(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
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
