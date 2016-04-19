var moment = require('moment');

module.exports = function(date) {
	return moment(date * 1000).format("dddd [at] ha");
};