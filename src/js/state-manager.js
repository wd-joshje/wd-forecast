var $ = require('jquery');

var states = {
  message: require('../../views/message.handlebars'),
  forecast: require('../../views/forecast.handlebars')
}

module.exports = {
  renderState: function(state, templateData) {
    if (states[state]) {
      $('body').html(states[state](templateData));
    }
  }
};
