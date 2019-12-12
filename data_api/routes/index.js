var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../config/dbconfig.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 用户列表
router.get('/list/user', function (req, res, next) {
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

// 房东列表
router.get('/list/fd', function (req, res, next) {
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

// 自习室列表
router.get('/list/sr', function (req, res, next) {
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

// 获取自习室详细信息
router.get('/list/sr/detail', function (req, res, next) {
  // console.log(req.query.id);
  let id = req.query.id;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from srinfo where srid = " + id, function (err, result) {
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

// 办公室列表
router.get('/list/office', function (req, res, next) {
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

// 获取办公室详细信息
router.get('/list/office/detail', function (req, res, next) {
  let id = req.query.id;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from officeinfo where officeid = " + id, function (err, result) {
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

// 添加用户
router.post('/adduser', function (req, res, next) {
  let name = req.body.username;
  let pwd = req.body.pwd;
  let address = req.body.address;
  let sex = req.body.sex;
  let phone = req.body.phone;
  let email = req.body.email;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into userinfo(username, sex, phone, address, email, password) values(?, ?, ?, ?, ?, ?)",[name, sex, phone, address, email, pwd], function(err, result) {
    if(err) {
      console.log(err);
    }
  });
  res.end('注册成功！！');
})

module.exports = router;
