var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../config/dbconfig.json');

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

router.get('/system/fd_addlist', function(req, res, next) {
  res.render('fd_addlist', { title: 'System' });
});

router.post('/system/addfd', function (req, res, next) {
  console.log(req.body);
})

router.get('/system/deluser', function(req, res, next) {
  let userId = req.query.userid;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from userinfo where userid=?", [userId], function(err, result) {
    if(err) {
      console.log(err);
    }
  });
})

router.get('/system/delfd', function(req, res, next) {
  let Id = req.query.id;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from fdinfo where id=?", [Id], function(err, result) {
    if(err) {
      console.log(err);
    }
  });
})

module.exports = router;