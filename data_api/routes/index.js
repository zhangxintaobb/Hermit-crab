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

// 添加用户
router.post('/adduser', function (req, res, next) {
  let name = req.body.zxs_name;
  let address = req.body.zxs_address;
  let price = req.body.zxs_price;
  let ownerid = req.body.zxs_ownerid;
  let type = req.body.zxs_kind;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into srinfo(srname, sraddress, price, ownerid, type) values(?, ?, ?, ?, ?)",[name, address, price, ownerid, type], function(err, result) {
    if(err) {
      console.log(err);
    }
  });
})

//登录

router.get('/login', function (req, res, next) { //添加的代码
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
      )}
      })
})

//个人信息
router.post('/myself/person', function (req, res, next) { //添加的代码
  console.log(req.query);
  const name=req.query.username;
  const id=req.query.userid;
  const password=req.query.password;
  const sex=req.query.sex;
  const email=req.query.email;
  let con = mysql.createConnection(dbconfig);
  con.query("update userinfo set username = ?,email = ?,sex = ?,password = ? where userid = ?", [name,email,sex,password,id], function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
})

//收藏信息
router.get('/collection', function (req, res, next) { //添加的代码
  console.log(req.query)
  let con = mysql.createConnection(dbconfig);
con.connect();
con.query("select * from studyroom where sr_id in (select sr_id from user_sr where userid = ? && collection = ?)",[req.query.userid,true] , function (err, result) {
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
    })
})

//删除收藏
router.get('/collection/delete', function (req, res, next) {
  let sr_id = req.query.sr_id;
  console.log(sr_id)
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from user_sr where sr_id=?", [sr_id], function (err, result) {
    if (err) {
      console.log(err);
    }
  });
})




module.exports = router;
