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

router.get('/userlist', function(req, res, next) {
  res.json(
    {
      "code":0,
      "msg":"",
      "count":1000,
      "data":[
        {
          "id":10000,
          "username":"user-0",
          "sex":"女",
          "city":"城市-0",
          "sign":"签名-0",
          "experience":255,
          "logins":24,
          "wealth":82830700,
          "classify":"作家",
          "score":57
        }
      ]
    }
  );
});

module.exports = router;