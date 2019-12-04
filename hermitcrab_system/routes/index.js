var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../config/dbconfig.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Login' });
});

router.post('/system', function (req, res, next) {
  var i = 0;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from manager", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      while (i < result.length) {
        if (result[i].username === req.body.username && result[i].pwd === req.body.pwd) {
          console.log("success");
          res.cookie('authorized', req.body.username);
          res.render('system', {
            title: 'System'
          });
          break;
        }
        i++;
      }
      if (i == result.length) {
        res.end("login error");
      }
    }
  });
})

router.get('/getdata/user', function (req, res, next) {
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from userinfo", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(
        {
          "code": 0,
          "msg": "",
          "count": 1000,
          "data": result
        }
      )
    }
  });
});

router.get('/getdata/lan', function (req, res, next) {
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from fdinfo", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(
        {
          "code": 0,
          "msg": "",
          "count": 1000,
          "data": result
        }
      )
    }
  });
});

router.get('/getdata/sr', function (req, res, next) {
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from srinfo", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(
        {
          "code": 0,
          "msg": "",
          "count": 1000,
          "data": result
        }
      )
    }
  });
});

router.get('/getdata/office', function (req, res, next) {
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from officeinfo", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(
        {
          "code": 0,
          "msg": "",
          "count": 1000,
          "data": result
        }
      )
    }
  });
});

module.exports = router;
