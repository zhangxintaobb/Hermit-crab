var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json")
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
router.get('/order/unpay', function (req, res, next) { //添加的代码
    console.log(req.query.userid)
    let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from srinfo where srid in (select roomid from userorder where userid = ? && pay = ? )",[req.query.userid,0] , function (err, result) {
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

router.get('/order/uncommit', function (req, res, next) { //添加的代码
  console.log(req.query)
  let con = mysql.createConnection(dbconfig);
con.connect();
con.query("select * from srinfo where srid in (select roomid from userorder where userid = ? && pay = ? && commit = ?)",[req.query.userid,1,0] , function (err, result) {
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

module.exports = router;
