var request = require('request');

var router = require('express').Router();

router.get('/forecast', function(req, res) {
	var forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast';
	forecastUrl += '?lat=' + req.query.lat + '&lon=' + req.query.lon;
	forecastUrl += '&APPID=0a242f2b18dfdabe8ec974dfa3cd7850';

  request(forecastUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
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
