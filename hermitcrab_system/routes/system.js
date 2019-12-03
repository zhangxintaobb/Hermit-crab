var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/system', function(req, res, next) {
  res.render('system', { title: 'System' });
});

router.get('/system/lanmanage', function(req, res, next) {
  res.render('lanmanage', { title: 'System' });
});

router.get('/system/usermanage', function(req, res, next) {
  res.render('usermanage', { title: 'System' });
});

router.get('/system/ordermanage', function(req, res, next) {
  res.render('ordermanage', { title: 'System' });
});

router.get('/system/officemanage', function(req, res, next) {
  res.render('officemanage', { title: 'System' });
});

router.get('/system/srmanage', function(req, res, next) {
  res.render('srmanage', { title: 'System' });
});


module.exports = router;