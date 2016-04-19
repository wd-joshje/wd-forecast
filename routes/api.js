var request = require('request');
var MemoryCache = require('fast-memory-cache');

var router = require('express').Router();
var cache = new MemoryCache();

var cacheTime = 60; // 1 minute

router.get('/forecast', function(req, res) {
	var forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast';
	forecastUrl += '?lat=' + req.query.lat + '&lon=' + req.query.lon;
	forecastUrl += '&APPID=0a242f2b18dfdabe8ec974dfa3cd7850';

	var forecast = cache.get('forecastUrl');

	if (forecast) {
		res.set('Content-Type', 'application/json');
    res.send(body);
	}

  request(forecastUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
    	cache.set(forecastUrl, body, cacheTime);
    	
    	res.set('Content-Type', 'application/json');
      res.send(body);
    } else {
    	res.status(response.statusCode);
    	res.json({
    		error: true,
    		message: body
    	})
    }
  })
});

module.exports = router;
