var express = require('express');
var router = express.Router();
var routes = require('../../')

/* GET home page. */
router.get('/', function(req, res, next) {
	var parts = originalUrl.split('?')[0]
	var pathname = parts[0]
	var search = parts[1] || ''
	var locationState = {
		pathname: pathname,
		search: search
	}
  res.render('index', { title: 'Express' });
});

module.exports = router;
