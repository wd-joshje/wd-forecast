var router = require('express').Router();

router.get('/', function(req, res) {
  res.render('message', {
  	message: 'Loading&hellip;'
  });
});

module.exports = router;
