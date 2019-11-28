var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/system', function(req, res, next) {
  res.render('system', { title: 'System' });
});

module.exports = router;