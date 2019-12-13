var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json")
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
/* GET home page. */

router.get('/record', function (req, res, next) { //添加的代码
console.log(req.query.userid)
      let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from userorder where userid = ? && commit = ?",[req.query.userid,1], function (err, result) {
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



router.get('/record/room', function (req, res, next) { //添加的代码
    console.log(req.query.room)
          let con = mysql.createConnection(dbconfig);
      con.connect();
      con.query("select * from srinfo where srid in"+req.query.room, function (err, result) {
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

module.exports = router;
